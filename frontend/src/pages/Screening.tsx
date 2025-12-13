import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, ArrowRight, Phone, Mail, Calendar, AlertTriangle, Shield, CheckCircle, Download } from "lucide-react";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Question {
  id: string;
  text: string;
  options: Array<{
    value: number;
    text: string;
    crisis?: boolean;
  }>;
}

interface Assessment {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
  stats: {
    questions: number;
    minutes: string;
    rating: string;
  };
}

const Screening = () => {
  const [currentAssessment, setCurrentAssessment] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showCrisis, setShowCrisis] = useState(false);
  const [privacyPreference, setPrivacyPreference] = useState('anonymous');

  const assessments: Record<string, Assessment> = {
    adhd: {
      id: 'adhd',
      title: 'ADHD Assessment (ASRS-18)',
      description: 'Comprehensive screening for Attention-Deficit/Hyperactivity Disorder in adults and teens',
      icon: '🧠',
      stats: { questions: 18, minutes: '5-7', rating: 'Most Popular' },
      questions: [
        {
          id: 'adhd_1',
          text: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Rarely' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Often' },
            { value: 4, text: 'Very Often' }
          ]
        },
        {
          id: 'adhd_2',
          text: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Rarely' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Often' },
            { value: 4, text: 'Very Often' }
          ]
        },
        {
          id: 'adhd_3',
          text: 'How often do you have problems remembering appointments or obligations?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Rarely' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Often' },
            { value: 4, text: 'Very Often' }
          ]
        }
      ]
    },
    depression: {
      id: 'depression',
      title: 'Depression Screening (PHQ-9)',
      description: 'Patient Health Questionnaire-9 for depression symptoms over the last 2 weeks',
      icon: '🌧️',
      stats: { questions: 9, minutes: '3-4', rating: 'Clinical Standard' },
      questions: [
        {
          id: 'dep_1',
          text: 'Little interest or pleasure in doing things',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        },
        {
          id: 'dep_9',
          text: 'Thoughts that you would be better off dead, or thoughts of hurting yourself in some way',
          options: [
            { value: 0, text: 'Not at all', crisis: false },
            { value: 1, text: 'Several days', crisis: true },
            { value: 2, text: 'More than half the days', crisis: true },
            { value: 3, text: 'Nearly every day', crisis: true }
          ]
        }
      ]
    },
    anxiety: {
      id: 'anxiety',
      title: 'Anxiety Assessment (GAD-7)',
      description: 'Generalized Anxiety Disorder assessment for anxiety symptoms over the last 2 weeks',
      icon: '😰',
      stats: { questions: 7, minutes: '3-4', rating: 'Comprehensive' },
      questions: [
        {
          id: 'anx_1',
          text: 'Feeling nervous, anxious, or on edge',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'Several days' },
            { value: 2, text: 'More than half the days' },
            { value: 3, text: 'Nearly every day' }
          ]
        }
      ]
    },
    bipolar: {
      id: 'bipolar',
      title: 'Bipolar Disorder Screening (MDQ)',
      description: 'Mood Disorder Questionnaire for bipolar symptoms',
      icon: '🎭',
      stats: { questions: 13, minutes: '5-7', rating: 'Mood Focus' },
      questions: [
        {
          id: 'bipolar_1',
          text: 'You felt so good or so hyper that other people thought you were not your normal self?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        }
      ]
    },
    ptsd: {
      id: 'ptsd',
      title: 'PTSD Screening (PCL-5)',
      description: 'Post-Traumatic Stress Disorder assessment',
      icon: '🛡️',
      stats: { questions: 20, minutes: '8-10', rating: 'Trauma Focus' },
      questions: [
        {
          id: 'ptsd_1',
          text: 'Repeated, disturbing, and unwanted memories of the stressful experience',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'A little bit' },
            { value: 2, text: 'Moderately' },
            { value: 3, text: 'Quite a bit' },
            { value: 4, text: 'Extremely' }
          ]
        }
      ]
    },
    ocd: {
      id: 'ocd',
      title: 'OCD Screening (Y-BOCS)',
      description: 'Yale-Brown Obsessive Compulsive Scale screening',
      icon: '🔄',
      stats: { questions: 10, minutes: '5-7', rating: 'Detailed' },
      questions: [
        {
          id: 'ocd_1',
          text: 'Time occupied by obsessive thoughts: How much of your time is occupied by obsessive thoughts?',
          options: [
            { value: 0, text: 'None' },
            { value: 1, text: 'Less than 1 hour per day' },
            { value: 2, text: '1 to 3 hours per day' },
            { value: 3, text: '3 to 8 hours per day' },
            { value: 4, text: 'More than 8 hours per day' }
          ]
        }
      ]
    },
    autism: {
      id: 'autism',
      title: 'Autism Spectrum Assessment (AQ-10)',
      description: 'Screening for autism spectrum traits in adults and adolescents',
      icon: '🧩',
      stats: { questions: 10, minutes: '4-5', rating: 'Comprehensive' },
      questions: [
        {
          id: 'autism_1',
          text: 'I often notice small sounds when others do not',
          options: [
            { value: 0, text: 'Definitely disagree' },
            { value: 0, text: 'Slightly disagree' },
            { value: 1, text: 'Slightly agree' },
            { value: 1, text: 'Definitely agree' }
          ]
        }
      ]
    },
    eating: {
      id: 'eating',
      title: 'Eating Disorder Screening (SCOFF)',
      description: 'Quick screening for eating disorder symptoms',
      icon: '🍽️',
      stats: { questions: 5, minutes: '2-3', rating: 'Quick Screen' },
      questions: [
        {
          id: 'eat_1',
          text: 'Do you make yourself Sick because you feel uncomfortably full?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        }
      ]
    },
    substance: {
      id: 'substance',
      title: 'Substance Use Screening (CAGE-AID)',
      description: 'Assessment for alcohol and drug use concerns',
      icon: '🚫',
      stats: { questions: 4, minutes: '2-3', rating: 'Quick Screen' },
      questions: [
        {
          id: 'sub_1',
          text: 'Have you ever felt you ought to Cut down on your drinking or drug use?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        }
      ]
    },
    sleep: {
      id: 'sleep',
      title: 'Sleep Disorder Screening (ISI)',
      description: 'Insomnia Severity Index for sleep problems assessment',
      icon: '😴',
      stats: { questions: 7, minutes: '3-4', rating: 'Sleep Focus' },
      questions: [
        {
          id: 'sleep_1',
          text: 'Difficulty falling asleep',
          options: [
            { value: 0, text: 'None' },
            { value: 1, text: 'Mild' },
            { value: 2, text: 'Moderate' },
            { value: 3, text: 'Severe' },
            { value: 4, text: 'Very Severe' }
          ]
        }
      ]
    },
    panic: {
      id: 'panic',
      title: 'Panic Disorder Screening (PDSS)',
      description: 'Panic Disorder Severity Scale assessment',
      icon: '💨',
      stats: { questions: 7, minutes: '4-5', rating: 'Panic Focus' },
      questions: [
        {
          id: 'panic_1',
          text: 'How many panic attacks did you have during the past week?',
          options: [
            { value: 0, text: '0' },
            { value: 1, text: '1' },
            { value: 2, text: '2' },
            { value: 3, text: '3' },
            { value: 4, text: '4 or more' }
          ]
        }
      ]
    },
    social_anxiety: {
      id: 'social_anxiety',
      title: 'Social Anxiety Screening (SPIN)',
      description: 'Social Phobia Inventory for social anxiety symptoms',
      icon: '👥',
      stats: { questions: 17, minutes: '6-8', rating: 'Social Focus' },
      questions: [
        {
          id: 'social_1',
          text: 'I am afraid of people in authority',
          options: [
            { value: 0, text: 'Not at all' },
            { value: 1, text: 'A little bit' },
            { value: 2, text: 'Moderately' },
            { value: 3, text: 'Quite a bit' },
            { value: 4, text: 'Extremely' }
          ]
        }
      ]
    },
    stress: {
      id: 'stress',
      title: 'Stress Assessment (PSS-10)',
      description: 'Perceived Stress Scale for stress level evaluation',
      icon: '⚡',
      stats: { questions: 10, minutes: '4-5', rating: 'Stress Focus' },
      questions: [
        {
          id: 'stress_1',
          text: 'In the last month, how often have you been upset because of something that happened unexpectedly?',
          options: [
            { value: 0, text: 'Never' },
            { value: 1, text: 'Almost Never' },
            { value: 2, text: 'Sometimes' },
            { value: 3, text: 'Fairly Often' },
            { value: 4, text: 'Very Often' }
          ]
        }
      ]
    },
    anger: {
      id: 'anger',
      title: 'Anger Assessment (STAXI-2)',
      description: 'State-Trait Anger Expression Inventory for anger management',
      icon: '😡',
      stats: { questions: 10, minutes: '4-5', rating: 'Anger Focus' },
      questions: [
        {
          id: 'anger_1',
          text: 'I am quick tempered',
          options: [
            { value: 0, text: 'Almost Never' },
            { value: 1, text: 'Sometimes' },
            { value: 2, text: 'Often' },
            { value: 3, text: 'Almost Always' }
          ]
        }
      ]
    },
    postpartum: {
      id: 'postpartum',
      title: 'Postpartum Depression (EPDS)',
      description: 'Edinburgh Postnatal Depression Scale for new mothers',
      icon: '👶',
      stats: { questions: 10, minutes: '4-6', rating: 'Maternal Health' },
      questions: [
        {
          id: 'post_1',
          text: 'I have been able to laugh and see the funny side of things',
          options: [
            { value: 0, text: 'As much as I always could' },
            { value: 1, text: 'Not quite so much now' },
            { value: 2, text: 'Definitely not so much now' },
            { value: 3, text: 'Not at all' }
          ]
        },
        {
          id: 'post_10',
          text: 'The thought of harming myself has occurred to me',
          options: [
            { value: 0, text: 'Never', crisis: false },
            { value: 1, text: 'Hardly ever', crisis: true },
            { value: 2, text: 'Sometimes', crisis: true },
            { value: 3, text: 'Yes, quite often', crisis: true }
          ]
        }
      ]
    },
    personality: {
      id: 'personality',
      title: 'Personality Disorder Screening (PDQ-4)',
      description: 'Screening for personality disorder traits',
      icon: '🎭',
      stats: { questions: 15, minutes: '6-8', rating: 'Personality Focus' },
      questions: [
        {
          id: 'pers_1',
          text: 'I have always been a loner',
          options: [
            { value: 0, text: 'False' },
            { value: 1, text: 'True' }
          ]
        }
      ]
    },
    borderline: {
      id: 'borderline',
      title: 'Borderline Personality (MSI-BPD)',
      description: 'McLean Screening Instrument for Borderline Personality Disorder',
      icon: '💔',
      stats: { questions: 10, minutes: '5-6', rating: 'BPD Focus' },
      questions: [
        {
          id: 'bpd_1',
          text: 'Have you been extremely moody?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'bpd_7',
          text: 'Have you tried to hurt or kill yourself or threatened to do so?',
          options: [
            { value: 0, text: 'No', crisis: false },
            { value: 1, text: 'Yes', crisis: true }
          ]
        }
      ]
    },
    psychosis: {
      id: 'psychosis',
      title: 'Psychosis Risk Screening (PRIME)',
      description: 'PRIME Screen for early psychosis risk assessment',
      icon: '🌀',
      stats: { questions: 12, minutes: '5-7', rating: 'Psychosis Focus' },
      questions: [
        {
          id: 'psych_1',
          text: 'I think that I have felt that there are odd or unusual things going on that I can\'t explain',
          options: [
            { value: 0, text: 'Definitely disagree' },
            { value: 1, text: 'Somewhat disagree' },
            { value: 2, text: 'Somewhat agree' },
            { value: 3, text: 'Definitely agree' }
          ]
        }
      ]
    },
    mdd_adult: {
      id: 'mdd_adult',
      title: 'Major Depressive Disorder (Adult)',
      description: 'DSM-5 screening for persistent sad mood and loss of interest',
      icon: '😔',
      stats: { questions: 11, minutes: '5-7', rating: 'DSM-5 Adult' },
      questions: [
        {
          id: 'mdd_a1',
          text: 'Over the past 2 weeks, have you felt depressed, sad, empty, or hopeless most of the day, nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_a2',
          text: 'Over the past 2 weeks, have you experienced markedly diminished interest or pleasure in all or almost all activities most of the day, nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_a3',
          text: 'Have you experienced significant weight loss (when not dieting), weight gain, or changes in appetite nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_a4',
          text: 'Have you had insomnia or hypersomnia (sleeping too much) nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_a5',
          text: 'Have you experienced psychomotor agitation or retardation (feeling restless or slowed down) observable by others, nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_a6',
          text: 'Have you felt fatigued or had loss of energy nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_a7',
          text: 'Have you felt worthless or experienced excessive or inappropriate guilt nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_a8',
          text: 'Have you had diminished ability to think or concentrate, or indecisiveness, nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_a9',
          text: 'Have you had recurrent thoughts of death, recurrent suicidal ideation, or a suicide attempt?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes', crisis: true }
          ]
        },
        {
          id: 'mdd_a10',
          text: 'Do these symptoms cause significant distress or impairment in social, occupational, or other important areas of functioning?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_a11',
          text: 'Are these symptoms NOT due to substance use or another medical condition?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        }
      ]
    },
    gad_adult: {
      id: 'gad_adult',
      title: 'Generalized Anxiety Disorder (Adult)',
      description: 'DSM-5 screening for excessive worry and anxiety',
      icon: '😰',
      stats: { questions: 10, minutes: '4-6', rating: 'DSM-5 Adult' },
      questions: [
        {
          id: 'gad_a1',
          text: 'Over the past 6 months, have you experienced excessive anxiety and worry about various events or activities, occurring more days than not?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'gad_a2',
          text: 'Do you find it difficult to control your worry?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'gad_a3',
          text: 'Have you felt restless, keyed up, or on edge?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'gad_a4',
          text: 'Have you been easily fatigued?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'gad_a5',
          text: 'Have you had difficulty concentrating or found your mind going blank?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'gad_a6',
          text: 'Have you been irritable?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'gad_a7',
          text: 'Have you experienced muscle tension?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'gad_a8',
          text: 'Have you had sleep disturbance (difficulty falling or staying asleep, or restless sleep)?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'gad_a9',
          text: 'Does the anxiety, worry, or physical symptoms cause significant distress or impairment in functioning?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'gad_a10',
          text: 'Is the disturbance NOT due to substances or another medical condition?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        }
      ]
    },
    panic_adult: {
      id: 'panic_adult',
      title: 'Panic Disorder (Adult)',
      description: 'DSM-5 screening for recurrent unexpected panic attacks',
      icon: '😱',
      stats: { questions: 16, minutes: '6-8', rating: 'DSM-5 Adult' },
      questions: [
        {
          id: 'panic_a1',
          text: 'Have you experienced recurrent unexpected panic attacks (abrupt surges of intense fear or discomfort)?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a2',
          text: 'During your worst attacks, did you experience palpitations, pounding heart, or accelerated heart rate?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a3',
          text: 'Did you experience sweating?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a4',
          text: 'Did you experience trembling or shaking?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a5',
          text: 'Did you experience sensations of shortness of breath or smothering?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a6',
          text: 'Did you experience feelings of choking?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a7',
          text: 'Did you experience chest pain or discomfort?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a8',
          text: 'Did you experience nausea or abdominal distress?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a9',
          text: 'Did you feel dizzy, unsteady, light-headed, or faint?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a10',
          text: 'Did you experience chills or heat sensations?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a11',
          text: 'Did you experience numbness or tingling sensations?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a12',
          text: 'Did you experience feelings of unreality or being detached from oneself?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a13',
          text: 'Did you fear losing control or "going crazy"?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a14',
          text: 'Did you fear dying?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a15',
          text: 'For at least 1 month after attacks, have you had persistent concern about additional attacks or their consequences?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'panic_a16',
          text: 'Are the panic attacks NOT due to substances or another medical condition?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        }
      ]
    },
    adhd_child: {
      id: 'adhd_child',
      title: 'ADHD (Child/Adolescent)',
      description: 'DSM-5 screening for attention-deficit/hyperactivity symptoms in youth',
      icon: '🎯',
      stats: { questions: 21, minutes: '8-10', rating: 'DSM-5 Youth' },
      questions: [
        {
          id: 'adhd_c1',
          text: 'Does the child often fail to give close attention to details or make careless mistakes?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c2',
          text: 'Does the child often have difficulty sustaining attention in tasks or play?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c3',
          text: 'Does the child often not seem to listen when spoken to directly?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c4',
          text: 'Does the child often not follow through on instructions and fail to finish tasks?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c5',
          text: 'Does the child often have difficulty organizing tasks and activities?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c6',
          text: 'Does the child often avoid tasks requiring sustained mental effort?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c7',
          text: 'Does the child often lose things necessary for tasks?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c8',
          text: 'Is the child often easily distracted?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c9',
          text: 'Is the child often forgetful in daily activities?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c10',
          text: 'Does the child often fidget with hands/feet or squirm in seat?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c11',
          text: 'Does the child often leave seat when remaining seated is expected?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c12',
          text: 'Does the child often run about or climb inappropriately?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c13',
          text: 'Is the child often unable to play quietly?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c14',
          text: 'Is the child often "on the go" or acts as if "driven by a motor"?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c15',
          text: 'Does the child often talk excessively?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c16',
          text: 'Does the child often blurt out answers before questions are completed?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c17',
          text: 'Does the child often have difficulty waiting their turn?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c18',
          text: 'Does the child often interrupt or intrude on others?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c19',
          text: 'Have several symptoms been present for at least 6 months?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c20',
          text: 'Are symptoms present in two or more settings (home, school, etc.)?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'adhd_c21',
          text: 'Do symptoms interfere with social, academic, or occupational functioning?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        }
      ]
    },
    mdd_youth: {
      id: 'mdd_youth',
      title: 'Major Depressive Disorder (Youth)',
      description: 'DSM-5 screening for persistent sad or irritable mood in youth',
      icon: '😔',
      stats: { questions: 11, minutes: '5-7', rating: 'DSM-5 Youth' },
      questions: [
        {
          id: 'mdd_y1',
          text: 'Over the past 2 weeks, has the child/teen felt depressed, sad, empty, or irritable most of the day, nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_y2',
          text: 'Over the past 2 weeks, has the child/teen lost interest or pleasure in activities they usually enjoy?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_y3',
          text: 'Has there been significant weight change or appetite change nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_y4',
          text: 'Has there been insomnia or sleeping too much nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_y5',
          text: 'Has there been psychomotor agitation or retardation observable by others, nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_y6',
          text: 'Has there been fatigue or loss of energy nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_y7',
          text: 'Has there been feelings of worthlessness or excessive guilt nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_y8',
          text: 'Has there been diminished ability to think, concentrate, or make decisions nearly every day?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_y9',
          text: 'Has there been recurrent thoughts of death or suicidal thoughts?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes', crisis: true }
          ]
        },
        {
          id: 'mdd_y10',
          text: 'Do these symptoms cause significant distress or impairment in functioning?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        },
        {
          id: 'mdd_y11',
          text: 'Are these symptoms NOT due to substance use or another medical condition?',
          options: [
            { value: 0, text: 'No' },
            { value: 1, text: 'Yes' }
          ]
        }
      ]
    },
    social_anxiety_adult: {
      id: 'social_anxiety_adult',
      title: 'Social Anxiety Disorder (Adult)',
      description: 'DSM-5 screening for marked fear and avoidance of social situations',
      icon: '😨',
      stats: { questions: 9, minutes: '4-6', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'sa_a1', text: 'Do you experience marked fear or anxiety about social situations where you might be scrutinized by others?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sa_a2', text: 'Do you fear acting in a way that will be negatively evaluated (humiliated, embarrassed, rejected)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sa_a3', text: 'Do social situations almost always provoke fear or anxiety?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sa_a4', text: 'Do you avoid social situations or endure them with intense fear or anxiety?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sa_a5', text: 'Is your fear or anxiety out of proportion to the actual threat posed by the social situation?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sa_a6', text: 'Has this fear, anxiety, or avoidance been persistent, typically lasting 6 months or more?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sa_a7', text: 'Does this fear, anxiety, or avoidance cause significant distress or impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sa_a8', text: 'Is the fear, anxiety, or avoidance NOT due to substances or another medical condition?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sa_a9', text: 'Is the fear, anxiety, or avoidance NOT better explained by another mental disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    ptsd_adult: {
      id: 'ptsd_adult',
      title: 'Post-Traumatic Stress Disorder (Adult)',
      description: 'DSM-5 screening for trauma-related symptoms following a distressing event',
      icon: '💥',
      stats: { questions: 24, minutes: '10-12', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'ptsd_a1', text: 'Have you been exposed to actual or threatened death, serious injury, or sexual violence?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a2', text: 'Do you experience recurrent, involuntary, and intrusive distressing memories of the traumatic event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a3', text: 'Do you have recurrent distressing dreams related to the traumatic event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a4', text: 'Do you experience dissociative reactions (flashbacks) where you feel or act as if the traumatic event were recurring?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a5', text: 'Do you have intense or prolonged psychological distress when exposed to reminders of the traumatic event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a6', text: 'Do you have marked physiological reactions to reminders of the traumatic event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a7', text: 'Do you avoid or try to avoid distressing memories, thoughts, or feelings about the traumatic event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a8', text: 'Do you avoid or try to avoid external reminders (people, places, conversations, activities, objects, situations) that arouse distressing memories?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a9', text: 'Are you unable to remember an important aspect of the traumatic event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a10', text: 'Do you have persistent and exaggerated negative beliefs about yourself, others, or the world?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a11', text: 'Do you have persistent distorted thoughts about the cause or consequences of the traumatic event that lead you to blame yourself or others?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a12', text: 'Do you have a persistent negative emotional state (fear, horror, anger, guilt, shame)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a13', text: 'Have you markedly diminished interest or participation in significant activities?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a14', text: 'Do you feel detached or estranged from others?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a15', text: 'Are you persistently unable to experience positive emotions?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a16', text: 'Do you display irritable behavior and angry outbursts (with little or no provocation)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a17', text: 'Do you engage in reckless or self-destructive behavior?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a18', text: 'Are you hypervigilant (excessively alert or watchful)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a19', text: 'Do you have an exaggerated startle response?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a20', text: 'Do you have problems with concentration?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a21', text: 'Do you have sleep disturbance?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a22', text: 'Have these symptoms persisted for more than 1 month?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a23', text: 'Do these symptoms cause significant distress or impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsd_a24', text: 'Are these symptoms NOT due to substances or another medical condition?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    ocd_adult: {
      id: 'ocd_adult',
      title: 'Obsessive-Compulsive Disorder (Adult)',
      description: 'DSM-5 screening for obsessive thoughts and compulsive behaviors',
      icon: '🔄',
      stats: { questions: 12, minutes: '6-8', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'ocd_a1', text: 'Do you have recurrent and persistent thoughts, urges, or images that are intrusive and unwanted?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocd_a2', text: 'Do you attempt to ignore or suppress these thoughts, urges, or images, or to neutralize them with some other thought or action?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocd_a3', text: 'Do you perform repetitive behaviors (hand washing, ordering, checking) or mental acts (praying, counting, repeating words)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocd_a4', text: 'Are these behaviors or mental acts aimed at preventing or reducing anxiety or preventing some dreaded event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocd_a5', text: 'Are these behaviors or mental acts clearly excessive or not connected in a realistic way with what they are designed to neutralize or prevent?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocd_a6', text: 'Are the obsessions or compulsions time-consuming (take more than 1 hour per day)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocd_a7', text: 'Do the obsessions or compulsions cause significant distress?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocd_a8', text: 'Do the obsessions or compulsions cause impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocd_a9', text: 'Are the symptoms NOT due to the physiological effects of a substance or another medical condition?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocd_a10', text: 'Are the symptoms NOT better explained by another mental disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocd_a11', text: 'Do you recognize that the obsessive-compulsive beliefs are definitely or probably not true (good insight)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocd_a12', text: 'Or do you think obsessive-compulsive beliefs are probably or definitely true (poor/absent insight)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    bipolar1_adult: {
      id: 'bipolar1_adult',
      title: 'Bipolar I Disorder (Adult)',
      description: 'DSM-5 screening for manic episodes and mood cycling',
      icon: '⚡',
      stats: { questions: 15, minutes: '7-9', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'bp1_a1', text: 'Have you ever had a distinct period of abnormally and persistently elevated, expansive, or irritable mood lasting at least 1 week?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a2', text: 'During this period, did you have abnormally and persistently increased goal-directed activity or energy?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a3', text: 'During this mood disturbance, did you have inflated self-esteem or grandiosity?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a4', text: 'Did you have decreased need for sleep (feeling rested after only 3 hours)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a5', text: 'Were you more talkative than usual or felt pressure to keep talking?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a6', text: 'Did you experience flight of ideas or racing thoughts?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a7', text: 'Were you easily distracted?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a8', text: 'Did you have increased goal-directed activity or psychomotor agitation?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a9', text: 'Did you have excessive involvement in activities with a high potential for painful consequences (buying sprees, sexual indiscretions, foolish investments)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a10', text: 'Was the mood disturbance severe enough to cause marked impairment in functioning, necessitate hospitalization, or include psychotic features?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a11', text: 'Was the episode NOT due to the physiological effects of a substance or another medical condition?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a12', text: 'Have you also experienced periods of depression lasting at least 2 weeks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a13', text: 'During depressive periods, did you have depressed mood or loss of interest?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a14', text: 'Can the disturbance NOT be better explained by another disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp1_a15', text: 'Have these symptoms significantly impacted your life or relationships?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    bipolar2_adult: {
      id: 'bipolar2_adult',
      title: 'Bipolar II Disorder (Adult)',
      description: 'DSM-5 screening for hypomanic and depressive episodes',
      icon: '🌗',
      stats: { questions: 18, minutes: '8-10', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'bp2_a1', text: 'Have you had a distinct period of abnormally and persistently elevated, expansive, or irritable mood lasting at least 4 consecutive days?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a2', text: 'During this period, did you have increased activity or energy?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a3', text: 'Did you have inflated self-esteem or grandiosity?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a4', text: 'Did you have decreased need for sleep?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a5', text: 'Were you more talkative or felt pressure to keep talking?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a6', text: 'Did you experience flight of ideas or racing thoughts?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a7', text: 'Were you easily distracted?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a8', text: 'Did you have increased goal-directed activity?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a9', text: 'Did you have excessive involvement in risky activities?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a10', text: 'Was this episode an unequivocal change in functioning that is uncharacteristic of you?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a11', text: 'Was the change in mood and functioning observable by others?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a12', text: 'Was the episode NOT severe enough to cause marked impairment or require hospitalization, and there were no psychotic features?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a13', text: 'Have you experienced a period of at least 2 weeks with depressed mood or loss of interest?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a14', text: 'During this period, did you have at least 5 depressive symptoms (weight change, sleep problems, fatigue, worthlessness, concentration problems, etc.)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a15', text: 'Did these depressive symptoms cause significant distress or impairment?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a16', text: 'Are the episodes NOT due to substances or another medical condition?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a17', text: 'Have you never had a full manic episode (which would make it Bipolar I instead)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bp2_a18', text: 'Can the symptoms NOT be better explained by another disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    alcohol_use: {
      id: 'alcohol_use',
      title: 'Alcohol Use Disorder (Adult)',
      description: 'DSM-5 screening for problematic alcohol use patterns',
      icon: '🍺',
      stats: { questions: 13, minutes: '6-8', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'aud_a1', text: 'In the past 12 months, have you drunk alcohol in larger amounts or over a longer period than you intended?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'aud_a2', text: 'Have you had a persistent desire or unsuccessful efforts to cut down or control alcohol use?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'aud_a3', text: 'Have you spent a great deal of time obtaining, using, or recovering from alcohol?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'aud_a4', text: 'Have you had cravings or a strong desire or urge to use alcohol?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'aud_a5', text: 'Has recurrent alcohol use resulted in failure to fulfill major obligations at work, school, or home?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'aud_a6', text: 'Have you continued alcohol use despite having persistent or recurrent social or interpersonal problems caused or exacerbated by alcohol?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'aud_a7', text: 'Have you given up or reduced important social, occupational, or recreational activities because of alcohol use?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'aud_a8', text: 'Have you used alcohol in situations where it is physically hazardous?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'aud_a9', text: 'Have you continued alcohol use despite knowledge of having a persistent physical or psychological problem likely caused or exacerbated by alcohol?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'aud_a10', text: 'Have you needed markedly increased amounts of alcohol to achieve intoxication or desired effect (tolerance)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'aud_a11', text: 'Have you experienced withdrawal symptoms when alcohol effects wore off?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'aud_a12', text: 'Do you drink to relieve or avoid withdrawal symptoms?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'aud_a13', text: 'Has alcohol use significantly impacted your life, health, or relationships?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    opioid_use: {
      id: 'opioid_use',
      title: 'Opioid Use Disorder (Adult)',
      description: 'DSM-5 screening for problematic opioid use patterns',
      icon: '💊',
      stats: { questions: 13, minutes: '6-8', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'oud_a1', text: 'In the past 12 months, have you taken opioids in larger amounts or over a longer period than intended?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'oud_a2', text: 'Have you had a persistent desire or unsuccessful efforts to cut down or control opioid use?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'oud_a3', text: 'Have you spent a great deal of time obtaining, using, or recovering from opioids?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'oud_a4', text: 'Have you had cravings or a strong desire or urge to use opioids?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'oud_a5', text: 'Has recurrent opioid use resulted in failure to fulfill major obligations?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'oud_a6', text: 'Have you continued opioid use despite persistent social or interpersonal problems?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'oud_a7', text: 'Have you given up important activities because of opioid use?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'oud_a8', text: 'Have you used opioids in physically hazardous situations?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'oud_a9', text: 'Have you continued opioid use despite knowledge of physical or psychological problems likely caused by opioids?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'oud_a10', text: 'Have you needed markedly increased amounts of opioids to achieve desired effect (tolerance)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'oud_a11', text: 'Have you experienced withdrawal symptoms when opioid effects wore off?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'oud_a12', text: 'Do you use opioids to relieve or avoid withdrawal symptoms?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'oud_a13', text: 'Has opioid use significantly impacted your life, health, or relationships?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    persistent_depressive: {
      id: 'persistent_depressive',
      title: 'Persistent Depressive Disorder (Dysthymia) (Adult)',
      description: 'DSM-5 screening for chronic depressed mood lasting 2+ years',
      icon: '☁️',
      stats: { questions: 9, minutes: '5-7', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'pdd_a1', text: 'Have you had depressed mood for most of the day, for more days than not, for at least 2 years?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pdd_a2', text: 'During periods of depressed mood, have you had poor appetite or overeating?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pdd_a3', text: 'Have you had insomnia or hypersomnia?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pdd_a4', text: 'Have you had low energy or fatigue?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pdd_a5', text: 'Have you had low self-esteem?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pdd_a6', text: 'Have you had poor concentration or difficulty making decisions?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pdd_a7', text: 'Have you felt hopeless?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pdd_a8', text: 'During the 2-year period, have you never been without these symptoms for more than 2 months at a time?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pdd_a9', text: 'Do these symptoms cause significant distress or impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    borderline_personality: {
      id: 'borderline_personality',
      title: 'Borderline Personality Disorder (Adult)',
      description: 'DSM-5 screening for unstable relationships, self-image, and emotions',
      icon: '🎭',
      stats: { questions: 11, minutes: '6-8', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'bpd_a1', text: 'Do you make frantic efforts to avoid real or imagined abandonment?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bpd_a2', text: 'Do you have a pattern of unstable and intense interpersonal relationships alternating between extremes of idealization and devaluation?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bpd_a3', text: 'Do you have an unstable self-image or sense of self?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bpd_a4', text: 'Do you engage in impulsivity in at least two areas that are potentially self-damaging (spending, sex, substance abuse, reckless driving, binge eating)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bpd_a5', text: 'Do you have recurrent suicidal behavior, gestures, threats, or self-mutilating behavior?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes', crisis: true }] },
        { id: 'bpd_a6', text: 'Do you have instability of mood due to marked reactivity (intense episodic unhappiness, irritability, or anxiety usually lasting a few hours)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bpd_a7', text: 'Do you have chronic feelings of emptiness?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bpd_a8', text: 'Do you have inappropriate, intense anger or difficulty controlling anger?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bpd_a9', text: 'Do you have transient, stress-related paranoid thoughts or severe dissociative symptoms?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bpd_a10', text: 'Is this a pervasive pattern beginning by early adulthood and present in a variety of contexts?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'bpd_a11', text: 'Does this pattern cause significant distress or impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    adhd_adult: {
      id: 'adhd_adult',
      title: 'Adult ADHD',
      description: 'DSM-5 screening for attention and hyperactivity difficulties in adults',
      icon: '🎯',
      stats: { questions: 21, minutes: '8-10', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'adhd_ad1', text: 'Do you often fail to give close attention to details or make careless mistakes in work or activities?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad2', text: 'Do you often have difficulty sustaining attention in tasks or activities?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad3', text: 'Do you often not seem to listen when spoken to directly?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad4', text: 'Do you often not follow through on instructions and fail to finish work or duties?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad5', text: 'Do you often have difficulty organizing tasks and activities?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad6', text: 'Do you often avoid, dislike, or are reluctant to engage in tasks requiring sustained mental effort?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad7', text: 'Do you often lose things necessary for tasks or activities?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad8', text: 'Are you often easily distracted by extraneous stimuli?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad9', text: 'Are you often forgetful in daily activities?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad10', text: 'Do you often fidget with hands or feet or squirm in seat?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad11', text: 'Do you often leave your seat in situations when remaining seated is expected?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad12', text: 'Do you often feel restless?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad13', text: 'Do you often have difficulty engaging in leisure activities quietly?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad14', text: 'Are you often "on the go" or act as if "driven by a motor"?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad15', text: 'Do you often talk excessively?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad16', text: 'Do you often blurt out answers before questions have been completed?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad17', text: 'Do you often have difficulty waiting your turn?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad18', text: 'Do you often interrupt or intrude on others?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad19', text: 'Have several symptoms been present since before age 12?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad20', text: 'Are symptoms present in two or more settings?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'adhd_ad21', text: 'Do symptoms interfere with functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    specific_phobia: {
      id: 'specific_phobia',
      title: 'Specific Phobia',
      description: 'DSM-5 screening for marked fear of specific objects or situations',
      icon: '😖',
      stats: { questions: 8, minutes: '4-6', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'sp_1', text: 'Do you experience marked fear or anxiety about a specific object or situation?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sp_2', text: 'Does the phobic object or situation almost always provoke immediate fear or anxiety?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sp_3', text: 'Do you actively avoid the phobic object or situation?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sp_4', text: 'Is your fear or anxiety out of proportion to the actual danger posed?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sp_5', text: 'Has this fear, anxiety, or avoidance been persistent, typically lasting 6 months or more?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sp_6', text: 'Does this fear, anxiety, or avoidance cause significant distress or impairment?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sp_7', text: 'Is the fear, anxiety, or avoidance NOT due to substances or another medical condition?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sp_8', text: 'Is the fear, anxiety, or avoidance NOT better explained by another mental disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    adjustment_disorder: {
      id: 'adjustment_disorder',
      title: 'Adjustment Disorder',
      description: 'DSM-5 screening for emotional symptoms following a stressful life event',
      icon: '🌊',
      stats: { questions: 7, minutes: '3-5', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'ad_1', text: 'Have you developed emotional or behavioral symptoms in response to an identifiable stressor within 3 months?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ad_2', text: 'Are your symptoms causing significant distress out of proportion to the severity of the stressor?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ad_3', text: 'Are your symptoms causing significant impairment in social, occupational, or other important areas?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ad_4', text: 'Do your symptoms NOT meet criteria for another mental disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ad_5', text: 'Are your symptoms NOT merely an exacerbation of a preexisting mental disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ad_6', text: 'Do your symptoms NOT represent normal bereavement?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ad_7', text: 'Once the stressor has ended, do symptoms NOT persist for more than 6 additional months?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    acute_stress_disorder: {
      id: 'acute_stress_disorder',
      title: 'Acute Stress Disorder',
      description: 'DSM-5 screening for trauma symptoms within the first month after an event',
      icon: '⚠️',
      stats: { questions: 16, minutes: '7-9', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'asd_1', text: 'Have you been exposed to actual or threatened death, serious injury, or sexual violence?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_2', text: 'Do you experience recurrent, involuntary, and intrusive distressing memories of the event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_3', text: 'Do you have recurrent distressing dreams related to the event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_4', text: 'Do you experience dissociative reactions (flashbacks) where you feel as if the event were recurring?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_5', text: 'Do you experience intense or prolonged psychological distress when exposed to reminders?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_6', text: 'Do you have an inability to experience positive emotions?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_7', text: 'Do you have an altered sense of reality (feeling dazed, time slowing)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_8', text: 'Are you unable to remember an important aspect of the traumatic event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_9', text: 'Do you make efforts to avoid distressing memories, thoughts, or feelings about the event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_10', text: 'Do you avoid external reminders (people, places, conversations) that arouse distressing memories?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_11', text: 'Do you experience sleep disturbance?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_12', text: 'Do you experience irritable behavior and angry outbursts?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_13', text: 'Do you experience hypervigilance?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_14', text: 'Do you have problems with concentration?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_15', text: 'Do you have an exaggerated startle response?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_16', text: 'Have these symptoms lasted 3 days to 1 month after trauma exposure?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    agoraphobia: {
      id: 'agoraphobia',
      title: 'Agoraphobia',
      description: 'DSM-5 screening for fear of situations where escape might be difficult',
      icon: '🏠',
      stats: { questions: 8, minutes: '4-6', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'ag_1', text: 'Do you experience marked fear or anxiety about using public transportation?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ag_2', text: 'Do you experience marked fear or anxiety about being in open spaces?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ag_3', text: 'Do you experience marked fear or anxiety about being in enclosed places?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ag_4', text: 'Do you experience marked fear or anxiety about standing in line or being in a crowd?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ag_5', text: 'Do you experience marked fear or anxiety about being outside the home alone?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ag_6', text: 'Do you actively avoid these situations or require a companion?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ag_7', text: 'Has this fear, anxiety, or avoidance been persistent, typically lasting 6 months or more?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ag_8', text: 'Does this cause significant distress or impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    insomnia_disorder: {
      id: 'insomnia_disorder',
      title: 'Insomnia Disorder',
      description: 'DSM-5 screening for persistent difficulty falling or staying asleep',
      icon: '😴',
      stats: { questions: 9, minutes: '4-6', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'in_1', text: 'Do you have difficulty initiating sleep?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'in_2', text: 'Do you have difficulty maintaining sleep?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'in_3', text: 'Do you wake up too early and cannot return to sleep?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'in_4', text: 'Does your sleep difficulty cause significant distress or impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'in_5', text: 'Does your sleep difficulty occur at least 3 nights per week?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'in_6', text: 'Has your sleep difficulty been present for at least 3 months?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'in_7', text: 'Does the sleep difficulty occur despite adequate opportunity for sleep?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'in_8', text: 'Is the sleep disturbance NOT due to substances or another medical condition?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'in_9', text: 'Is the sleep disturbance NOT better explained by another sleep disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    somatic_symptom_disorder: {
      id: 'somatic_symptom_disorder',
      title: 'Somatic Symptom Disorder',
      description: 'DSM-5 screening for excessive focus on physical symptoms',
      icon: '🤕',
      stats: { questions: 8, minutes: '4-6', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'ss_1', text: 'Do you have one or more somatic symptoms that are distressing or disrupt daily life?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ss_2', text: 'Do you have excessive thoughts about the seriousness of your symptoms?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ss_3', text: 'Do you experience persistently high anxiety about your health or symptoms?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ss_4', text: 'Do you devote excessive time and energy to your symptoms or health concerns?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ss_5', text: 'Although any somatic symptom may not be continuously present, has your state of being symptomatic been persistent (typically more than 6 months)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ss_6', text: 'Do your symptoms cause significant distress or impairment?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ss_7', text: 'Are your symptoms NOT intentionally produced or feigned?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ss_8', text: 'Do your concerns persist despite appropriate medical evaluation and reassurance?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    illness_anxiety_disorder: {
      id: 'illness_anxiety_disorder',
      title: 'Illness Anxiety Disorder',
      description: 'DSM-5 screening for preoccupation with having a serious illness',
      icon: '🩺',
      stats: { questions: 8, minutes: '4-6', rating: 'DSM-5 Adult' },
      questions: [
        { id: 'ia_1', text: 'Are you preoccupied with having or acquiring a serious illness?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ia_2', text: 'Are somatic symptoms not present or, if present, only mild in intensity?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ia_3', text: 'Is there a high level of anxiety about your health?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ia_4', text: 'Do you perform excessive health-related behaviors (e.g., repeatedly checking your body)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ia_5', text: 'Do you exhibit maladaptive avoidance (e.g., avoiding doctor appointments or hospitals)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ia_6', text: 'Has your illness preoccupation been present for at least 6 months?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ia_7', text: 'Is your illness preoccupation NOT better explained by another mental disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ia_8', text: 'Does your preoccupation cause significant distress or impairment?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    odd_youth: {
      id: 'odd_youth',
      title: 'Oppositional Defiant Disorder (ODD)',
      description: 'DSM-5 screening for angry, defiant, and vindictive behavior patterns in youth',
      icon: '😤',
      stats: { questions: 11, minutes: '5-7', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'odd_1', text: 'Does the child often lose temper?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'odd_2', text: 'Is the child often touchy or easily annoyed?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'odd_3', text: 'Is the child often angry and resentful?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'odd_4', text: 'Does the child often argue with authority figures or adults?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'odd_5', text: 'Does the child often actively defy or refuse to comply with requests or rules?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'odd_6', text: 'Does the child often deliberately annoy others?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'odd_7', text: 'Does the child often blame others for his or her mistakes or misbehavior?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'odd_8', text: 'Has the child been spiteful or vindictive at least twice within the past 6 months?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'odd_9', text: 'Have these behaviors persisted for at least 6 months?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'odd_10', text: 'Do these behaviors cause significant distress or impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'odd_11', text: 'Are these behaviors NOT occurring exclusively during a psychotic or mood disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    conduct_disorder: {
      id: 'conduct_disorder',
      title: 'Conduct Disorder',
      description: 'DSM-5 screening for aggression, rule-breaking, and destructive behavior in youth',
      icon: '🚫',
      stats: { questions: 18, minutes: '8-10', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'cd_1', text: 'Does the child often bully, threaten, or intimidate others?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_2', text: 'Does the child often initiate physical fights?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_3', text: 'Has the child used a weapon that can cause serious physical harm?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_4', text: 'Has the child been physically cruel to people?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_5', text: 'Has the child been physically cruel to animals?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_6', text: 'Has the child stolen while confronting a victim (e.g., mugging, armed robbery)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_7', text: 'Has the child forced someone into sexual activity?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_8', text: 'Has the child deliberately set fires with intention of causing serious damage?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_9', text: 'Has the child deliberately destroyed others\' property (not by fire)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_10', text: 'Has the child broken into someone else\'s house, building, or car?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_11', text: 'Does the child often lie to obtain goods or favors or avoid obligations?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_12', text: 'Has the child stolen items without confronting a victim?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_13', text: 'Does the child often stay out at night despite parental prohibitions (before age 13)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_14', text: 'Has the child run away from home overnight at least twice?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_15', text: 'Does the child often skip school (before age 13)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_16', text: 'Do these behaviors cause significant impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_17', text: 'If age 18 or older, do criteria not meet for Antisocial Personality Disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'cd_18', text: 'Have at least 3 of these behaviors occurred in the past 12 months, with at least one in the past 6 months?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    separation_anxiety_youth: {
      id: 'separation_anxiety_youth',
      title: 'Separation Anxiety Disorder',
      description: 'DSM-5 screening for excessive fear about separation from attachment figures',
      icon: '👨‍👩‍👧',
      stats: { questions: 11, minutes: '5-7', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'sad_1', text: 'Does the child show recurrent excessive distress when separation from home or major attachment figures occurs or is anticipated?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sad_2', text: 'Does the child show persistent and excessive worry about losing major attachment figures?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sad_3', text: 'Does the child show persistent and excessive worry that an untoward event will lead to separation?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sad_4', text: 'Does the child persistently refuse or is reluctant to go out because of fear of separation?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sad_5', text: 'Does the child show persistent and excessive fear or reluctance to be alone?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sad_6', text: 'Does the child persistently refuse or is reluctant to sleep away from home or without major attachment figure nearby?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sad_7', text: 'Does the child have repeated nightmares involving the theme of separation?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sad_8', text: 'Does the child repeatedly complain of physical symptoms when separation occurs or is anticipated?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sad_9', text: 'Have these symptoms persisted for at least 4 weeks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sad_10', text: 'Do these symptoms cause significant distress or impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sad_11', text: 'Is the disturbance NOT better explained by another mental disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    social_anxiety_youth: {
      id: 'social_anxiety_youth',
      title: 'Social Anxiety Disorder (Youth)',
      description: 'DSM-5 screening for fear of social or performance situations in youth',
      icon: '😨',
      stats: { questions: 9, minutes: '4-6', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'say_1', text: 'Does the child experience marked fear or anxiety about social situations where they might be scrutinized?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'say_2', text: 'Does the child fear acting in a way that will be negatively evaluated?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'say_3', text: 'Do social situations almost always provoke fear or anxiety?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'say_4', text: 'Does the child avoid social situations or endure them with intense fear?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'say_5', text: 'Is the fear or anxiety out of proportion to the actual threat?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'say_6', text: 'Has this fear, anxiety, or avoidance been persistent, typically lasting 6 months or more?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'say_7', text: 'Does this cause significant distress or impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'say_8', text: 'Is the fear, anxiety, or avoidance NOT due to substances or another medical condition?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'say_9', text: 'Is the fear, anxiety, or avoidance NOT better explained by another mental disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    gad_youth: {
      id: 'gad_youth',
      title: 'Generalized Anxiety Disorder (Youth)',
      description: 'DSM-5 screening for excessive worry in children and adolescents',
      icon: '😰',
      stats: { questions: 10, minutes: '4-6', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'gady_1', text: 'Does the child experience excessive anxiety and worry about various events or activities?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'gady_2', text: 'Does the child find it difficult to control the worry?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'gady_3', text: 'Is the child restless or feeling keyed up or on edge?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'gady_4', text: 'Is the child easily fatigued?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'gady_5', text: 'Does the child have difficulty concentrating or mind going blank?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'gady_6', text: 'Is the child irritable?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'gady_7', text: 'Does the child have muscle tension?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'gady_8', text: 'Does the child have sleep disturbance?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'gady_9', text: 'Have symptoms occurred more days than not for at least 6 months?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'gady_10', text: 'Do symptoms cause significant distress or impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    persistent_depressive_youth: {
      id: 'persistent_depressive_youth',
      title: 'Persistent Depressive Disorder (Youth)',
      description: 'DSM-5 screening for chronic depressed/irritable mood in youth (1+ year)',
      icon: '☁️',
      stats: { questions: 9, minutes: '5-7', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'pddy_1', text: 'Has the child had depressed or irritable mood for most of the day, more days than not, for at least one year?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pddy_2', text: 'Does the child have poor appetite or overeating?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pddy_3', text: 'Does the child have insomnia or hypersomnia?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pddy_4', text: 'Does the child have low energy or fatigue?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pddy_5', text: 'Does the child have low self-esteem?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pddy_6', text: 'Does the child have poor concentration or difficulty making decisions?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pddy_7', text: 'Does the child feel hopeless?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pddy_8', text: 'Has the child NOT been without symptoms for more than 2 months at a time?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'pddy_9', text: 'Do symptoms cause significant distress or impairment in functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    autism_youth: {
      id: 'autism_youth',
      title: 'Autism Spectrum Disorder',
      description: 'DSM-5 screening for social communication and behavior pattern differences',
      icon: '🧩',
      stats: { questions: 14, minutes: '7-9', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'asd_1', text: 'Does the child have deficits in social-emotional reciprocity?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_2', text: 'Does the child have deficits in nonverbal communication behaviors used for social interaction?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_3', text: 'Does the child have deficits in developing, maintaining, and understanding relationships?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_4', text: 'Does the child show stereotyped or repetitive motor movements, use of objects, or speech?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_5', text: 'Does the child insist on sameness, inflexible adherence to routines, or ritualized patterns?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_6', text: 'Does the child have highly restricted, fixated interests that are abnormal in intensity or focus?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_7', text: 'Does the child show hyper- or hyporeactivity to sensory input?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_8', text: 'Were symptoms present in the early developmental period?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_9', text: 'Do symptoms cause significant impairment in current functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_10', text: 'Are these disturbances NOT better explained by intellectual disability?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_11', text: 'Does the child meet all 3 social communication criteria?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_12', text: 'Does the child meet at least 2 of the 4 restricted/repetitive behavior criteria?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_13', text: 'Is the child\'s language development delayed or atypical?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'asd_14', text: 'Does the child have difficulty with imaginative play appropriate to developmental level?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    learning_disorder_youth: {
      id: 'learning_disorder_youth',
      title: 'Specific Learning Disorder',
      description: 'DSM-5 screening for difficulties in reading, writing, or mathematics',
      icon: '📚',
      stats: { questions: 12, minutes: '6-8', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'sld_1', text: 'Does the child have difficulty with word reading accuracy?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sld_2', text: 'Does the child have difficulty with reading fluency or speed?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sld_3', text: 'Does the child have difficulty with reading comprehension?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sld_4', text: 'Does the child have difficulty with spelling accuracy?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sld_5', text: 'Does the child have difficulty with written expression (grammar, punctuation, organization)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sld_6', text: 'Does the child have difficulty with number sense or calculation?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sld_7', text: 'Does the child have difficulty with mathematical reasoning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sld_8', text: 'Have these difficulties persisted for at least 6 months despite interventions?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sld_9', text: 'Are academic skills substantially below expectations for age?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sld_10', text: 'Do difficulties significantly interfere with academic or occupational performance?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sld_11', text: 'Did difficulties begin during school-age years?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sld_12', text: 'Are the learning difficulties NOT better explained by other disorders or external factors?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    intellectual_disability_youth: {
      id: 'intellectual_disability_youth',
      title: 'Intellectual Disability',
      description: 'DSM-5 screening for deficits in intellectual and adaptive functioning',
      icon: '🧠',
      stats: { questions: 10, minutes: '5-7', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'id_1', text: 'Does the child have deficits in intellectual functions (reasoning, problem-solving, planning)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'id_2', text: 'Does the child have deficits in abstract thinking?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'id_3', text: 'Does the child have deficits in judgment and learning from experience?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'id_4', text: 'Are deficits confirmed by clinical assessment and standardized intelligence testing?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'id_5', text: 'Does the child have deficits in adaptive functioning in communication?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'id_6', text: 'Does the child have deficits in adaptive functioning in social participation?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'id_7', text: 'Does the child have deficits in adaptive functioning in independent living?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'id_8', text: 'Do adaptive deficits result in failure to meet developmental and sociocultural standards?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'id_9', text: 'Do adaptive deficits limit functioning in one or more activities of daily life?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'id_10', text: 'Did intellectual and adaptive deficits onset during the developmental period?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    enuresis_youth: {
      id: 'enuresis_youth',
      title: 'Enuresis',
      description: 'DSM-5 screening for repeated urination in inappropriate places',
      icon: '💧',
      stats: { questions: 6, minutes: '3-5', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'enu_1', text: 'Does the child repeatedly void urine into bed or clothes?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'enu_2', text: 'Is the behavior clinically significant (at least twice a week for 3 consecutive months)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'enu_3', text: 'Is the child at least 5 years old (or equivalent developmental level)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'enu_4', text: 'Does the behavior cause significant distress or impairment?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'enu_5', text: 'Is the behavior NOT due to a substance or medical condition?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'enu_6', text: 'Are the episodes involuntary rather than intentional?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    selective_mutism_youth: {
      id: 'selective_mutism_youth',
      title: 'Selective Mutism',
      description: 'DSM-5 screening for consistent failure to speak in specific situations',
      icon: '🤐',
      stats: { questions: 7, minutes: '3-5', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'sm_1', text: 'Does the child consistently fail to speak in specific social situations where speaking is expected?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sm_2', text: 'Does the child speak in other situations?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sm_3', text: 'Does the disturbance interfere with educational or occupational achievement or social communication?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sm_4', text: 'Has the duration been at least 1 month (not limited to the first month of school)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sm_5', text: 'Is the failure to speak NOT due to lack of knowledge or comfort with language?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sm_6', text: 'Is the disturbance NOT better explained by a communication disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'sm_7', text: 'Does the disturbance NOT occur exclusively during autism or psychotic disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    reactive_attachment_youth: {
      id: 'reactive_attachment_youth',
      title: 'Reactive Attachment Disorder',
      description: 'DSM-5 screening for emotionally withdrawn behavior toward caregivers',
      icon: '💔',
      stats: { questions: 9, minutes: '4-6', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'rad_1', text: 'Does the child rarely or minimally seek comfort when distressed?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'rad_2', text: 'Does the child rarely or minimally respond to comfort when distressed?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'rad_3', text: 'Does the child show minimal social and emotional responsiveness to others?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'rad_4', text: 'Does the child show limited positive affect?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'rad_5', text: 'Does the child show unexplained episodes of irritability, sadness, or fearfulness during non-threatening interactions?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'rad_6', text: 'Has the child experienced a pattern of extremes of insufficient care (neglect, deprivation)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'rad_7', text: 'Is the care pattern presumed to be responsible for the disturbed behavior?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'rad_8', text: 'Does the child NOT meet criteria for autism spectrum disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'rad_9', text: 'Is the child\'s developmental age at least 9 months?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    dmdd_youth: {
      id: 'dmdd_youth',
      title: 'Disruptive Mood Dysregulation Disorder',
      description: 'DSM-5 screening for severe temper outbursts and persistent irritability',
      icon: '😡',
      stats: { questions: 8, minutes: '4-6', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'dmdd_1', text: 'Does the child have severe recurrent temper outbursts that are grossly out of proportion?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'dmdd_2', text: 'Are the temper outbursts inconsistent with developmental level?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'dmdd_3', text: 'Do the temper outbursts occur, on average, three or more times per week?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'dmdd_4', text: 'Is the mood between outbursts persistently irritable or angry most of the day, nearly every day?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'dmdd_5', text: 'Have symptoms been present for 12 or more months, with no symptom-free period exceeding 3 months?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'dmdd_6', text: 'Are symptoms present in at least two of three settings (home, school, with peers)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'dmdd_7', text: 'Is the diagnosis appropriate for the child\'s age (between 6-18 years, with onset before age 10)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'dmdd_8', text: 'Are the symptoms NOT better explained by another mental disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    panic_youth: {
      id: 'panic_youth',
      title: 'Panic Disorder (Youth)',
      description: 'DSM-5 screening for recurrent panic attacks in children/adolescents',
      icon: '😱',
      stats: { questions: 16, minutes: '6-8', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'py_1', text: 'Does the child experience recurrent unexpected panic attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_2', text: 'Palpitations or accelerated heart rate during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_3', text: 'Sweating during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_4', text: 'Trembling or shaking during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_5', text: 'Shortness of breath during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_6', text: 'Feelings of choking during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_7', text: 'Chest pain or discomfort during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_8', text: 'Nausea or abdominal distress during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_9', text: 'Feeling dizzy or faint during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_10', text: 'Chills or heat sensations during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_11', text: 'Numbness or tingling sensations during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_12', text: 'Feelings of unreality or detachment during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_13', text: 'Fear of losing control or going crazy during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_14', text: 'Fear of dying during attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_15', text: 'Does the child show persistent concern about additional attacks or their consequences?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'py_16', text: 'Does the child show maladaptive behavioral change related to the attacks?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    ocd_youth: {
      id: 'ocd_youth',
      title: 'OCD (Youth)',
      description: 'DSM-5 screening for obsessions and compulsions in youth',
      icon: '🔄',
      stats: { questions: 12, minutes: '6-8', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'ocdy_1', text: 'Does the child have recurrent and persistent thoughts, urges, or images that are intrusive and unwanted?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocdy_2', text: 'Does the child attempt to ignore or suppress these thoughts, urges, or images?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocdy_3', text: 'Does the child perform repetitive behaviors or mental acts in response to obsessions?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocdy_4', text: 'Are the behaviors or mental acts aimed at reducing anxiety or preventing a dreaded situation?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocdy_5', text: 'Are the behaviors or mental acts excessive or not realistically connected to the feared event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocdy_6', text: 'Do the obsessions or compulsions take more than 1 hour per day?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocdy_7', text: 'Do the obsessions or compulsions cause significant distress?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocdy_8', text: 'Do the obsessions or compulsions significantly interfere with functioning?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocdy_9', text: 'Are the symptoms NOT due to substances or another medical condition?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocdy_10', text: 'Are the symptoms NOT better explained by another mental disorder?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocdy_11', text: 'Does the child recognize that the obsessions or compulsions are excessive or unreasonable?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ocdy_12', text: 'Note: Children may not recognize the excessive nature of their symptoms', options: [{ value: 0, text: 'Understood' }, { value: 1, text: 'Understood' }] }
      ]
    },
    ptsd_youth: {
      id: 'ptsd_youth',
      title: 'PTSD (Youth)',
      description: 'DSM-5 screening for trauma-related symptoms in children/adolescents',
      icon: '💥',
      stats: { questions: 20, minutes: '9-11', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'ptsdy_1', text: 'Has the child been exposed to actual or threatened death, serious injury, or sexual violence?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_2', text: 'Does the child experience recurrent, involuntary, and intrusive distressing memories of the traumatic event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_3', text: 'Does the child have recurrent distressing dreams related to the traumatic event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_4', text: 'Does the child experience dissociative reactions (flashbacks)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_5', text: 'Does the child have intense or prolonged psychological distress when exposed to reminders?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_6', text: 'Does the child have marked physiological reactions to reminders of the traumatic event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_7', text: 'Does the child avoid or try to avoid distressing memories, thoughts, or feelings about the event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_8', text: 'Does the child avoid external reminders (people, places, conversations)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_9', text: 'Is the child unable to remember an important aspect of the traumatic event?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_10', text: 'Does the child have persistent and exaggerated negative beliefs about themselves, others, or the world?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_11', text: 'Does the child have persistent negative emotional state (fear, horror, anger, guilt, shame)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_12', text: 'Does the child show markedly diminished interest or participation in activities?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_13', text: 'Does the child feel detached or estranged from others?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_14', text: 'Is the child persistently unable to experience positive emotions?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_15', text: 'Does the child show irritable behavior and angry outbursts?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_16', text: 'Does the child show reckless or self-destructive behavior?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_17', text: 'Does the child show hypervigilance?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_18', text: 'Does the child have an exaggerated startle response?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_19', text: 'Does the child have problems with concentration?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'ptsdy_20', text: 'Does the child experience sleep disturbance?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    tourettes_youth: {
      id: 'tourettes_youth',
      title: "Tourette's Disorder",
      description: 'DSM-5 screening for multiple motor and vocal tics',
      icon: '🎪',
      stats: { questions: 8, minutes: '4-6', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'td_1', text: 'Does the child have both multiple motor tics and one or more vocal tics?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'td_2', text: 'Have tics occurred many times a day, nearly every day or intermittently for more than a year?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'td_3', text: 'During the year, has there NOT been a tic-free period of more than 3 consecutive months?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'td_4', text: 'Did the onset occur before age 18 years?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'td_5', text: 'Are the tics NOT due to substances or another medical condition?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'td_6', text: 'Do the tics cause significant distress or impairment?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'td_7', text: 'Are motor tics sudden, rapid, recurrent, nonrhythmic movements?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'td_8', text: 'Are vocal tics sudden, rapid, recurrent, nonrhythmic vocalizations?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    },
    encopresis_youth: {
      id: 'encopresis_youth',
      title: 'Encopresis',
      description: 'DSM-5 screening for repeated passage of feces in inappropriate places',
      icon: '🚽',
      stats: { questions: 6, minutes: '3-5', rating: 'DSM-5 Youth' },
      questions: [
        { id: 'enc_1', text: 'Does the child repeatedly pass feces into inappropriate places (clothing or floor)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'enc_2', text: 'Does this occur at least once a month for at least 3 months?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'enc_3', text: 'Is the child at least 4 years old (or equivalent developmental level)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'enc_4', text: 'Is the behavior NOT due to substances or another medical condition (except constipation)?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'enc_5', text: 'Does the behavior cause significant distress or impairment?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] },
        { id: 'enc_6', text: 'Are the episodes involuntary rather than intentional?', options: [{ value: 0, text: 'No' }, { value: 1, text: 'Yes' }] }
      ]
    }
  };

  // External screening tools that link to static HTML pages
  const externalScreenings = [
    {
      title: 'Complete ADHD Assessment',
      description: 'Full 18-question ASRS screening',
      icon: '🧠',
      url: '/screening/adhd.html',
      stats: { questions: 18, minutes: '6-8', rating: 'Complete' }
    },
    {
      title: 'Complete Depression Screening',
      description: 'Full PHQ-9 with crisis detection',
      icon: '🌧️',
      url: '/screening/phq9.html',
      stats: { questions: 9, minutes: '4-5', rating: 'Clinical' }
    },
    {
      title: 'Complete Anxiety Assessment',
      description: 'Full GAD-7 anxiety screening',
      icon: '😰',
      url: '/screening/gad7.html',
      stats: { questions: 7, minutes: '3-4', rating: 'Standard' }
    },
    {
      title: 'Bipolar Disorder Assessment',
      description: 'Mood Disorder Questionnaire',
      icon: '🎭',
      url: '/screening/bipolar.html',
      stats: { questions: 13, minutes: '5-7', rating: 'Mood' }
    },
    {
      title: 'PTSD Screening',
      description: 'PCL-5 trauma assessment',
      icon: '🛡️',
      url: '/screening/ptsd.html',
      stats: { questions: 20, minutes: '8-10', rating: 'Trauma' }
    },
    {
      title: 'OCD Assessment',
      description: 'Y-BOCS obsessive-compulsive screening',
      icon: '🔄',
      url: '/screening/ocd.html',
      stats: { questions: 10, minutes: '5-7', rating: 'OCD Focus' }
    },
    {
      title: 'Autism Spectrum Assessment',
      description: 'AQ-10 autism traits screening',
      icon: '🧩',
      url: '/screening/autism.html',
      stats: { questions: 10, minutes: '4-5', rating: 'Autism' }
    },
    {
      title: 'Eating Disorder Screening',
      description: 'SCOFF eating disorder assessment',
      icon: '🍽️',
      url: '/screening/eating-disorder.html',
      stats: { questions: 5, minutes: '2-3', rating: 'Quick' }
    },
    {
      title: 'Substance Use Screening',
      description: 'CAGE-AID substance abuse assessment',
      icon: '🚫',
      url: '/screening/substance-abuse.html',
      stats: { questions: 4, minutes: '2-3', rating: 'Substance' }
    },
    {
      title: 'Sleep Disorder Assessment',
      description: 'Insomnia Severity Index',
      icon: '😴',
      url: '/screening/sleep-disorder.html',
      stats: { questions: 7, minutes: '3-4', rating: 'Sleep' }
    },
    {
      title: 'Panic Disorder Screening',
      description: 'PDSS panic disorder assessment',
      icon: '💨',
      url: '/screening/panic-disorder.html',
      stats: { questions: 7, minutes: '4-5', rating: 'Panic' }
    },
    {
      title: 'Social Anxiety Assessment',
      description: 'SPIN social phobia screening',
      icon: '👥',
      url: '/screening/social-anxiety.html',
      stats: { questions: 17, minutes: '6-8', rating: 'Social' }
    },
    {
      title: 'Stress Level Assessment',
      description: 'PSS-10 perceived stress scale',
      icon: '⚡',
      url: '/screening/stress.html',
      stats: { questions: 10, minutes: '4-5', rating: 'Stress' }
    },
    {
      title: 'Anger Management Assessment',
      description: 'STAXI-2 anger expression screening',
      icon: '😡',
      url: '/screening/anger.html',
      stats: { questions: 10, minutes: '4-5', rating: 'Anger' }
    },
    {
      title: 'Postpartum Depression',
      description: 'EPDS for new mothers',
      icon: '👶',
      url: '/screening/postpartum-depression.html',
      stats: { questions: 10, minutes: '4-6', rating: 'Maternal' }
    },
    {
      title: 'Personality Disorder Screening',
      description: 'PDQ-4 personality traits assessment',
      icon: '🎭',
      url: '/screening/personality-disorder.html',
      stats: { questions: 15, minutes: '6-8', rating: 'Personality' }
    },
    {
      title: 'Borderline Personality',
      description: 'MSI-BPD borderline traits screening',
      icon: '💔',
      url: '/screening/borderline-personality.html',
      stats: { questions: 10, minutes: '5-6', rating: 'BPD' }
    },
    {
      title: 'Psychosis Risk Assessment',
      description: 'PRIME early psychosis screening',
      icon: '🌀',
      url: '/screening/schizophrenia.html',
      stats: { questions: 12, minutes: '5-7', rating: 'Psychosis' }
    }
  ];

  const startAssessment = (assessmentId: string) => {
    setCurrentAssessment(assessmentId);
    setCurrentQuestionIndex(0);
    setResponses({});
    setShowResults(false);
    setShowCrisis(false);
  };

  const handleAnswer = (questionId: string, value: number, hasCrisis?: boolean) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
    
    if (hasCrisis) {
      setShowCrisis(true);
    }
  };

  const nextQuestion = () => {
    if (!currentAssessment) return;
    
    const assessment = assessments[currentAssessment];
    const currentQuestion = assessment.questions[currentQuestionIndex];
    
    if (!(currentQuestion.id in responses)) {
      alert('Please select an answer before proceeding.');
      return;
    }
    
    if (currentQuestionIndex < assessment.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      completeAssessment();
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const completeAssessment = () => {
    setShowResults(true);
  };

  const calculateResults = () => {
    if (!currentAssessment) return { score: 0, level: 'Unknown', recommendations: [] };
    
    const totalScore = Object.values(responses).reduce((sum, value) => sum + value, 0);
    
    let level: string;
    let levelClass: string;
    let recommendations: string[];
    
    // DSM-5 specific scoring
    if (currentAssessment === 'mdd_adult' || currentAssessment === 'mdd_youth') {
      const hasQ1or2 = (responses.mdd_a1 || responses.mdd_y1 || responses.mdd_a2 || responses.mdd_y2);
      const hasQ10 = (responses.mdd_a10 || responses.mdd_y10);
      const hasQ11 = (responses.mdd_a11 || responses.mdd_y11);
      
      if (hasQ1or2 && hasQ10 && hasQ11 && totalScore >= 5) {
        if (totalScore <= 6) {
          level = 'Mild Major Depressive Disorder suggested - professional evaluation recommended';
          levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
          recommendations = [
            'Symptoms suggest possible Mild Major Depressive Disorder',
            'Professional psychiatric evaluation is recommended',
            'Early intervention can be highly effective',
            'Schedule professional consultation: (859) 341-7453'
          ];
        } else if (totalScore <= 8) {
          level = 'Moderate Major Depressive Disorder suggested - professional evaluation strongly recommended';
          levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
          recommendations = [
            'Symptoms suggest possible Moderate Major Depressive Disorder',
            'Professional psychiatric evaluation is strongly recommended',
            'Treatment options include therapy and/or medication',
            'Call for professional evaluation: (859) 341-7453'
          ];
        } else {
          level = 'Severe Major Depressive Disorder suggested - immediate professional evaluation essential';
          levelClass = 'bg-red-100 text-red-800 border-red-300';
          recommendations = [
            'Symptoms suggest possible Severe Major Depressive Disorder',
            'Immediate professional evaluation is essential',
            'Evidence-based treatments are available',
            'Call immediately for urgent evaluation: (859) 341-7453'
          ];
        }
      } else {
        level = 'Below diagnostic threshold - symptoms do not meet criteria for Major Depressive Disorder';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = [
          'Symptoms do not currently meet DSM-5 criteria for Major Depressive Disorder',
          'Continue monitoring your mood',
          'Practice self-care and stress management',
          'Contact our office if symptoms worsen'
        ];
      }
    } else if (currentAssessment === 'gad_adult') {
      const hasRequired = responses.gad_a1 && responses.gad_a2 && responses.gad_a9 && responses.gad_a10;
      const symptomCount = [responses.gad_a3, responses.gad_a4, responses.gad_a5, responses.gad_a6, responses.gad_a7, responses.gad_a8].filter(Boolean).length;
      
      if (hasRequired && symptomCount >= 3) {
        if (totalScore <= 7) {
          level = 'Mild Generalized Anxiety Disorder suggested - professional evaluation recommended';
          levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
          recommendations = [
            'Symptoms suggest possible Mild Generalized Anxiety Disorder',
            'Professional evaluation is recommended',
            'Cognitive-behavioral therapy is highly effective',
            'Schedule professional consultation: (859) 341-7453'
          ];
        } else if (totalScore <= 9) {
          level = 'Moderate Generalized Anxiety Disorder suggested - professional evaluation strongly recommended';
          levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
          recommendations = [
            'Symptoms suggest possible Moderate Generalized Anxiety Disorder',
            'Professional evaluation is strongly recommended',
            'Multiple effective treatments available',
            'Call for professional evaluation: (859) 341-7453'
          ];
        } else {
          level = 'Severe Generalized Anxiety Disorder suggested - immediate professional evaluation essential';
          levelClass = 'bg-red-100 text-red-800 border-red-300';
          recommendations = [
            'Symptoms suggest possible Severe Generalized Anxiety Disorder',
            'Immediate professional evaluation is essential',
            'Treatment can significantly reduce anxiety',
            'Call immediately for urgent evaluation: (859) 341-7453'
          ];
        }
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = [
          'Symptoms do not currently meet DSM-5 criteria for Generalized Anxiety Disorder',
          'Continue monitoring your anxiety levels',
          'Practice relaxation techniques',
          'Contact our office if symptoms worsen'
        ];
      }
    } else if (currentAssessment === 'panic_adult') {
      const hasQ1 = responses.panic_a1;
      const symptomCount = [responses.panic_a2, responses.panic_a3, responses.panic_a4, responses.panic_a5, responses.panic_a6, responses.panic_a7, responses.panic_a8, responses.panic_a9, responses.panic_a10, responses.panic_a11, responses.panic_a12, responses.panic_a13, responses.panic_a14].filter(Boolean).length;
      const hasQ15and16 = responses.panic_a15 && responses.panic_a16;
      
      if (hasQ1 && symptomCount >= 4 && hasQ15and16) {
        if (totalScore <= 10) {
          level = 'Panic Disorder suggested - professional evaluation strongly recommended';
          levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
          recommendations = [
            'Symptoms suggest possible Panic Disorder',
            'Professional evaluation is strongly recommended',
            'Treatment is highly effective for panic symptoms',
            'Call for professional evaluation: (859) 341-7453'
          ];
        } else {
          level = 'Panic Disorder with severe symptoms - immediate professional evaluation essential';
          levelClass = 'bg-red-100 text-red-800 border-red-300';
          recommendations = [
            'Symptoms suggest Panic Disorder with severe symptoms',
            'Immediate professional evaluation is essential',
            'Effective treatments can dramatically reduce panic attacks',
            'Call immediately for urgent evaluation: (859) 341-7453'
          ];
        }
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = [
          'Symptoms do not currently meet DSM-5 criteria for Panic Disorder',
          'Continue monitoring panic symptoms',
          'Learn breathing and grounding techniques',
          'Contact our office if symptoms worsen'
        ];
      }
    } else if (currentAssessment === 'adhd_child') {
      const hasRequired = responses.adhd_c19 && responses.adhd_c20 && responses.adhd_c21;
      const inattentionCount = [responses.adhd_c1, responses.adhd_c2, responses.adhd_c3, responses.adhd_c4, responses.adhd_c5, responses.adhd_c6, responses.adhd_c7, responses.adhd_c8, responses.adhd_c9].filter(Boolean).length;
      const hyperactivityCount = [responses.adhd_c10, responses.adhd_c11, responses.adhd_c12, responses.adhd_c13, responses.adhd_c14, responses.adhd_c15, responses.adhd_c16, responses.adhd_c17, responses.adhd_c18].filter(Boolean).length;
      
      if (hasRequired) {
        if (inattentionCount >= 6 && hyperactivityCount >= 6) {
          level = 'ADHD Combined Type suggested - professional evaluation strongly recommended';
          levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
          recommendations = [
            'Symptoms suggest possible ADHD Combined Type',
            'Comprehensive evaluation is strongly recommended',
            'Treatment can significantly improve functioning',
            'Call for professional evaluation: (859) 341-7453'
          ];
        } else if (inattentionCount >= 6 || hyperactivityCount >= 6) {
          level = 'ADHD suggested (Predominantly Inattentive or Hyperactive-Impulsive) - professional evaluation recommended';
          levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
          recommendations = [
            inattentionCount >= 6 ? 'Symptoms suggest possible ADHD Predominantly Inattentive Type' : 'Symptoms suggest possible ADHD Predominantly Hyperactive-Impulsive Type',
            'Professional evaluation is recommended',
            'Early intervention can improve academic and social outcomes',
            'Schedule professional consultation: (859) 341-7453'
          ];
        } else {
          level = 'Below diagnostic threshold';
          levelClass = 'bg-green-100 text-green-800 border-green-300';
          recommendations = [
            'Symptoms do not currently meet DSM-5 criteria for ADHD',
            'Continue monitoring attention and behavior',
            'Maintain structure and routines',
            'Contact our office if concerns persist'
          ];
        }
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = [
          'Symptoms do not currently meet DSM-5 criteria for ADHD',
          'Duration or setting criteria not met',
          'Continue monitoring',
          'Contact our office if symptoms worsen'
        ];
      }
    } else if (currentAssessment === 'social_anxiety_adult') {
      const hasRequired = responses.sa_a6 && responses.sa_a7 && responses.sa_a8 && responses.sa_a9;
      if (hasRequired && totalScore >= 6) {
        level = totalScore >= 8 ? 'Moderate to Severe Social Anxiety suggested - professional evaluation strongly recommended' : 'Mild Social Anxiety suggested - professional evaluation recommended';
        levelClass = totalScore >= 8 ? 'bg-orange-100 text-orange-800 border-orange-300' : 'bg-yellow-100 text-yellow-800 border-yellow-300';
        recommendations = [
          `Symptoms suggest possible ${totalScore >= 8 ? 'Moderate to Severe' : 'Mild'} Social Anxiety Disorder`,
          'Professional evaluation is recommended',
          'Cognitive-behavioral therapy is highly effective for social anxiety',
          'Call for professional evaluation: (859) 341-7453'
        ];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring anxiety in social situations', 'Practice gradual exposure to feared situations', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'ptsd_adult') {
      const hasQ1 = responses.ptsd_a1;
      const hasRequired = responses.ptsd_a22 && responses.ptsd_a23 && responses.ptsd_a24;
      const intrusion = [responses.ptsd_a2, responses.ptsd_a3, responses.ptsd_a4, responses.ptsd_a5, responses.ptsd_a6].filter(Boolean).length >= 1;
      const avoidance = [responses.ptsd_a7, responses.ptsd_a8].filter(Boolean).length >= 1;
      const negative = [responses.ptsd_a9, responses.ptsd_a10, responses.ptsd_a11, responses.ptsd_a12, responses.ptsd_a13, responses.ptsd_a14, responses.ptsd_a15].filter(Boolean).length >= 2;
      const arousal = [responses.ptsd_a16, responses.ptsd_a17, responses.ptsd_a18, responses.ptsd_a19, responses.ptsd_a20, responses.ptsd_a21].filter(Boolean).length >= 2;
      
      if (hasQ1 && hasRequired && intrusion && avoidance && negative && arousal) {
        level = 'PTSD suggested - immediate professional evaluation essential';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = ['Symptoms suggest possible Post-Traumatic Stress Disorder', 'Immediate professional evaluation is essential', 'Evidence-based trauma treatments are highly effective', 'Call immediately for urgent evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet full DSM-5 criteria for PTSD', 'Consider trauma-focused therapy if distressed', 'Monitor symptoms over time', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'ocd_adult') {
      const hasObsessions = responses.ocd_a1 && responses.ocd_a2;
      const hasCompulsions = responses.ocd_a3 && responses.ocd_a4 && responses.ocd_a5;
      const hasTimeOrDistress = responses.ocd_a6 || (responses.ocd_a7 && responses.ocd_a8);
      const hasExclusions = responses.ocd_a9 && responses.ocd_a10;
      
      if ((hasObsessions || hasCompulsions) && hasTimeOrDistress && hasExclusions) {
        const insight = responses.ocd_a11 ? 'good' : 'poor';
        level = `OCD with ${insight} insight suggested - ${insight === 'good' ? 'professional evaluation strongly' : 'immediate professional evaluation'} recommended`;
        levelClass = insight === 'good' ? 'bg-orange-100 text-orange-800 border-orange-300' : 'bg-red-100 text-red-800 border-red-300';
        recommendations = [`Symptoms suggest possible OCD with ${insight} insight`, insight === 'good' ? 'Professional evaluation is strongly recommended' : 'Immediate professional evaluation is essential', 'Exposure and Response Prevention therapy is highly effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria for OCD', 'Continue monitoring obsessions or compulsions', 'Practice mindfulness and anxiety management', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'bipolar1_adult') {
      const hasManic = responses.bp1_a1 && responses.bp1_a2;
      const manicSymptoms = [responses.bp1_a3, responses.bp1_a4, responses.bp1_a5, responses.bp1_a6, responses.bp1_a7, responses.bp1_a8, responses.bp1_a9].filter(Boolean).length;
      const hasImpairment = responses.bp1_a10;
      const hasExclusion = responses.bp1_a11;
      
      if (hasManic && manicSymptoms >= 3 && hasImpairment && hasExclusion) {
        level = 'Bipolar I Disorder suggested - immediate professional evaluation essential';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = ['Symptoms suggest possible Bipolar I Disorder', 'Immediate professional evaluation is essential', 'Mood stabilization treatments are highly effective', 'Call immediately for urgent evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria for Bipolar I', 'Continue monitoring mood episodes', 'Maintain regular sleep and routines', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'bipolar2_adult') {
      const hasHypomanic = responses.bp2_a1 && responses.bp2_a2 && responses.bp2_a10 && responses.bp2_a11 && responses.bp2_a12;
      const hypomanicSymptoms = [responses.bp2_a3, responses.bp2_a4, responses.bp2_a5, responses.bp2_a6, responses.bp2_a7, responses.bp2_a8, responses.bp2_a9].filter(Boolean).length >= 3;
      const hasDepressive = responses.bp2_a13 && responses.bp2_a14 && responses.bp2_a15;
      const hasExclusions = responses.bp2_a16 && responses.bp2_a17 && responses.bp2_a18;
      
      if (hasHypomanic && hypomanicSymptoms && hasDepressive && hasExclusions) {
        level = 'Bipolar II Disorder suggested - immediate professional evaluation essential';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = ['Symptoms suggest possible Bipolar II Disorder', 'Immediate professional evaluation is essential', 'Treatment can stabilize mood and prevent episodes', 'Call immediately for urgent evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria for Bipolar II', 'Continue monitoring mood changes', 'Track mood patterns in a journal', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'alcohol_use' || currentAssessment === 'opioid_use') {
      const substanceName = currentAssessment === 'alcohol_use' ? 'Alcohol' : 'Opioid';
      if (totalScore >= 6) {
        level = `Severe ${substanceName} Use Disorder suggested - immediate professional evaluation essential`;
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = [`Symptoms suggest possible Severe ${substanceName} Use Disorder`, 'Immediate professional evaluation is essential', 'Evidence-based addiction treatments are effective', 'Call immediately for urgent evaluation: (859) 341-7453'];
      } else if (totalScore >= 4) {
        level = `Moderate ${substanceName} Use Disorder suggested - professional evaluation strongly recommended`;
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = [`Symptoms suggest possible Moderate ${substanceName} Use Disorder`, 'Professional evaluation is strongly recommended', 'Treatment can prevent progression', 'Call for professional evaluation: (859) 341-7453'];
      } else if (totalScore >= 2) {
        level = `Mild ${substanceName} Use Disorder suggested - professional evaluation recommended`;
        levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
        recommendations = [`Symptoms suggest possible Mild ${substanceName} Use Disorder`, 'Professional evaluation is recommended', 'Early intervention is most effective', 'Schedule professional consultation: (859) 341-7453'];
      } else {
        level = `No ${substanceName} Use Disorder`;
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not meet criteria for substance use disorder', 'Continue healthy habits', 'Monitor substance use patterns', 'Contact our office if concerns develop'];
      }
    } else if (currentAssessment === 'persistent_depressive') {
      const hasCore = responses.pdd_a1 && responses.pdd_a8 && responses.pdd_a9;
      const symptoms = [responses.pdd_a2, responses.pdd_a3, responses.pdd_a4, responses.pdd_a5, responses.pdd_a6, responses.pdd_a7].filter(Boolean).length >= 2;
      
      if (hasCore && symptoms) {
        level = 'Persistent Depressive Disorder suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Persistent Depressive Disorder (Dysthymia)', 'Professional evaluation is strongly recommended', 'Long-term treatment can significantly improve quality of life', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring mood over time', 'Practice self-care and stress management', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'borderline_personality') {
      const symptoms = [responses.bpd_a1, responses.bpd_a2, responses.bpd_a3, responses.bpd_a4, responses.bpd_a5, responses.bpd_a6, responses.bpd_a7, responses.bpd_a8, responses.bpd_a9].filter(Boolean).length;
      const hasContext = responses.bpd_a10 && responses.bpd_a11;
      
      if (symptoms >= 5 && hasContext) {
        level = 'Borderline Personality Disorder suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Borderline Personality Disorder', 'Professional evaluation is strongly recommended', 'Dialectical Behavior Therapy is highly effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = [`${symptoms} symptoms present - below diagnostic threshold of 5`, 'Continue monitoring emotional patterns', 'Practice emotion regulation skills', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'adhd_adult') {
      const hasRequired = responses.adhd_ad19 && responses.adhd_ad20 && responses.adhd_ad21;
      const inattention = [responses.adhd_ad1, responses.adhd_ad2, responses.adhd_ad3, responses.adhd_ad4, responses.adhd_ad5, responses.adhd_ad6, responses.adhd_ad7, responses.adhd_ad8, responses.adhd_ad9].filter(Boolean).length;
      const hyperactivity = [responses.adhd_ad10, responses.adhd_ad11, responses.adhd_ad12, responses.adhd_ad13, responses.adhd_ad14, responses.adhd_ad15, responses.adhd_ad16, responses.adhd_ad17, responses.adhd_ad18].filter(Boolean).length;
      
      if (hasRequired) {
        if (inattention >= 5 && hyperactivity >= 5) {
          level = 'ADHD Combined Type suggested - professional evaluation strongly recommended';
          levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
          recommendations = ['Symptoms suggest possible ADHD Combined Type', 'Professional evaluation is strongly recommended', 'Multiple effective treatment options available', 'Call for professional evaluation: (859) 341-7453'];
        } else if (inattention >= 5 || hyperactivity >= 5) {
          level = `ADHD suggested (Predominantly ${inattention >= 5 ? 'Inattentive' : 'Hyperactive-Impulsive'}) - professional evaluation recommended`;
          levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
          recommendations = [`Symptoms suggest possible ADHD Predominantly ${inattention >= 5 ? 'Inattentive' : 'Hyperactive-Impulsive'} Type`, 'Professional evaluation is recommended', 'Treatment can significantly improve functioning', 'Schedule professional consultation: (859) 341-7453'];
        } else {
          level = 'Below diagnostic threshold';
          levelClass = 'bg-green-100 text-green-800 border-green-300';
          recommendations = ['Symptoms do not currently meet DSM-5 criteria for ADHD', 'Continue monitoring attention and activity', 'Practice organizational strategies', 'Contact our office if concerns persist'];
        }
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Duration or setting criteria not met', 'Continue monitoring symptoms', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'specific_phobia') {
      const hasRequired = responses.sp_5 && responses.sp_6 && responses.sp_7 && responses.sp_8;
      if (hasRequired && totalScore >= 6) {
        level = 'Specific Phobia suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Specific Phobia', 'Professional evaluation is strongly recommended', 'Exposure therapy is highly effective for specific phobias', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring phobic responses', 'Practice gradual exposure techniques', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'adjustment_disorder') {
      const hasRequired = responses.ad_1 && (responses.ad_2 || responses.ad_3) && responses.ad_4 && responses.ad_5 && responses.ad_6 && responses.ad_7;
      if (hasRequired) {
        level = 'Adjustment Disorder suggested - professional evaluation recommended';
        levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
        recommendations = ['Symptoms suggest possible Adjustment Disorder', 'Professional evaluation is recommended', 'Short-term therapy can be very effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Normal stress response to life changes', 'Practice coping strategies and self-care', 'Contact our office if distress persists'];
      }
    } else if (currentAssessment === 'acute_stress_disorder') {
      const hasRequired = responses.asd_1 && responses.asd_16;
      const symptoms = [responses.asd_2, responses.asd_3, responses.asd_4, responses.asd_5, responses.asd_6, responses.asd_7, responses.asd_8, responses.asd_9, responses.asd_10, responses.asd_11, responses.asd_12, responses.asd_13, responses.asd_14, responses.asd_15].filter(Boolean).length;
      
      if (hasRequired && symptoms >= 9) {
        level = 'Acute Stress Disorder suggested - immediate professional evaluation essential';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = ['Symptoms suggest possible Acute Stress Disorder', 'Immediate professional evaluation is essential', 'Early intervention can prevent PTSD development', 'Call immediately for urgent evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria for Acute Stress Disorder', 'Continue monitoring trauma-related symptoms', 'Practice grounding and coping techniques', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'agoraphobia') {
      const fearCount = [responses.ag_1, responses.ag_2, responses.ag_3, responses.ag_4, responses.ag_5].filter(Boolean).length;
      const hasRequired = responses.ag_6 && responses.ag_7 && responses.ag_8;
      
      if (fearCount >= 2 && hasRequired) {
        level = 'Agoraphobia suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Agoraphobia', 'Professional evaluation is strongly recommended', 'Cognitive-behavioral therapy and exposure therapy are effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria for Agoraphobia', 'Continue monitoring situational fears', 'Practice gradual exposure to feared situations', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'insomnia_disorder') {
      const hasSleepDifficulty = responses.in_1 || responses.in_2 || responses.in_3;
      const hasRequired = responses.in_4 && responses.in_5 && responses.in_6 && responses.in_7 && responses.in_8 && responses.in_9;
      
      if (hasSleepDifficulty && hasRequired) {
        level = 'Insomnia Disorder suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Insomnia Disorder', 'Professional evaluation is strongly recommended', 'Cognitive-behavioral therapy for insomnia (CBT-I) is highly effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria for Insomnia Disorder', 'Continue monitoring sleep patterns', 'Practice good sleep hygiene', 'Contact our office if sleep problems persist'];
      }
    } else if (currentAssessment === 'somatic_symptom_disorder') {
      const hasRequired = responses.ss_1 && (responses.ss_2 || responses.ss_3 || responses.ss_4) && responses.ss_5 && responses.ss_6 && responses.ss_7 && responses.ss_8;
      
      if (hasRequired) {
        level = 'Somatic Symptom Disorder suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Somatic Symptom Disorder', 'Professional evaluation is strongly recommended', 'Treatment can help manage health anxiety and physical symptoms', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue appropriate medical care for physical symptoms', 'Monitor health anxiety levels', 'Contact our office if concerns persist'];
      }
    } else if (currentAssessment === 'illness_anxiety_disorder') {
      const hasRequired = responses.ia_1 && responses.ia_2 && responses.ia_3 && (responses.ia_4 || responses.ia_5) && responses.ia_6 && responses.ia_7 && responses.ia_8;
      
      if (hasRequired) {
        level = 'Illness Anxiety Disorder suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Illness Anxiety Disorder', 'Professional evaluation is strongly recommended', 'Cognitive-behavioral therapy can effectively address health anxiety', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue appropriate medical care', 'Monitor anxiety about health concerns', 'Contact our office if preoccupation increases'];
      }
    } else if (currentAssessment === 'odd_youth') {
      const symptoms = [responses.odd_1, responses.odd_2, responses.odd_3, responses.odd_4, responses.odd_5, responses.odd_6, responses.odd_7, responses.odd_8].filter(Boolean).length;
      const hasRequired = responses.odd_9 && responses.odd_10 && responses.odd_11;
      
      if (symptoms >= 4 && hasRequired) {
        level = 'Oppositional Defiant Disorder suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Oppositional Defiant Disorder', 'Professional evaluation is strongly recommended', 'Parent management training and family therapy are effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria for ODD', 'Continue monitoring behavior patterns', 'Maintain consistent discipline and positive reinforcement', 'Contact our office if behaviors worsen'];
      }
    } else if (currentAssessment === 'conduct_disorder') {
      const hasRequired = responses.cd_16 && responses.cd_17 && responses.cd_18;
      
      if (hasRequired && totalScore >= 3) {
        level = 'Conduct Disorder suggested - immediate professional evaluation essential';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = ['Symptoms suggest possible Conduct Disorder', 'Immediate professional evaluation is essential', 'Early intervention is critical to prevent progression', 'Call immediately for urgent evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring behavior patterns', 'Maintain structure and supervision', 'Contact our office if concerning behaviors develop'];
      }
    } else if (currentAssessment === 'separation_anxiety_youth') {
      const symptoms = [responses.sad_1, responses.sad_2, responses.sad_3, responses.sad_4, responses.sad_5, responses.sad_6, responses.sad_7, responses.sad_8].filter(Boolean).length;
      const hasRequired = responses.sad_9 && responses.sad_10 && responses.sad_11;
      
      if (symptoms >= 3 && hasRequired) {
        level = 'Separation Anxiety Disorder suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Separation Anxiety Disorder', 'Professional evaluation is strongly recommended', 'Cognitive-behavioral therapy is highly effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring separation-related fears', 'Practice gradual separation in supportive ways', 'Contact our office if anxiety increases'];
      }
    } else if (currentAssessment === 'social_anxiety_youth') {
      const hasRequired = responses.say_6 && responses.say_7 && responses.say_8 && responses.say_9;
      
      if (hasRequired && totalScore >= 6) {
        level = 'Social Anxiety Disorder suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Social Anxiety Disorder in youth', 'Professional evaluation is strongly recommended', 'Cognitive-behavioral therapy is highly effective for social anxiety', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring anxiety in social situations', 'Practice gradual exposure to social situations', 'Contact our office if anxiety worsens'];
      }
    } else if (currentAssessment === 'gad_youth') {
      const hasRequired = responses.gady_1 && responses.gady_2 && responses.gady_9 && responses.gady_10;
      const symptoms = [responses.gady_3, responses.gady_4, responses.gady_5, responses.gady_6, responses.gady_7, responses.gady_8].filter(Boolean).length;
      
      if (hasRequired && symptoms >= 1) {
        level = 'Generalized Anxiety Disorder suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Generalized Anxiety Disorder in youth', 'Professional evaluation is strongly recommended', 'Cognitive-behavioral therapy is highly effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring worry and anxiety levels', 'Teach relaxation and coping skills', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'persistent_depressive_youth') {
      const hasCore = responses.pddy_1 && responses.pddy_8 && responses.pddy_9;
      const symptoms = [responses.pddy_2, responses.pddy_3, responses.pddy_4, responses.pddy_5, responses.pddy_6, responses.pddy_7].filter(Boolean).length;
      
      if (hasCore && symptoms >= 2) {
        level = 'Persistent Depressive Disorder suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Persistent Depressive Disorder in youth', 'Professional evaluation is strongly recommended', 'Long-term treatment can significantly improve quality of life', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring mood over time', 'Maintain supportive environment and routines', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'autism_youth') {
      const hasRequired = responses.asd_8 && responses.asd_9 && responses.asd_10 && responses.asd_11 && responses.asd_12;
      
      if (hasRequired) {
        level = 'Autism Spectrum Disorder suggested - comprehensive professional evaluation essential';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = ['Symptoms suggest possible Autism Spectrum Disorder', 'Comprehensive developmental evaluation is essential', 'Early intervention services can significantly improve outcomes', 'Call immediately for urgent evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria for Autism', 'Continue monitoring social and communication development', 'Contact our office if developmental concerns persist'];
      }
    } else if (currentAssessment === 'learning_disorder_youth') {
      const hasRequired = responses.sld_8 && responses.sld_9 && responses.sld_10 && responses.sld_11 && responses.sld_12;
      const difficulties = [responses.sld_1, responses.sld_2, responses.sld_3, responses.sld_4, responses.sld_5, responses.sld_6, responses.sld_7].filter(Boolean).length;
      
      if (hasRequired && difficulties >= 1) {
        level = 'Specific Learning Disorder suggested - comprehensive evaluation recommended';
        levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
        recommendations = ['Symptoms suggest possible Specific Learning Disorder', 'Comprehensive psychoeducational evaluation is recommended', 'Educational interventions and accommodations can be very effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring academic progress', 'Provide additional support as needed', 'Contact our office if learning difficulties persist'];
      }
    } else if (currentAssessment === 'intellectual_disability_youth') {
      const hasRequired = responses.id_1 && responses.id_4 && responses.id_8 && responses.id_9 && responses.id_10;
      
      if (hasRequired) {
        level = 'Intellectual Disability suggested - comprehensive evaluation essential';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = ['Symptoms suggest possible Intellectual Disability', 'Comprehensive cognitive and adaptive assessment is essential', 'Early support services can optimize development', 'Call immediately for urgent evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring developmental progress', 'Provide supportive environment', 'Contact our office if concerns persist'];
      }
    } else if (currentAssessment === 'enuresis_youth') {
      const hasRequired = responses.enu_1 && responses.enu_2 && responses.enu_3 && responses.enu_4 && responses.enu_5 && responses.enu_6;
      
      if (hasRequired) {
        level = 'Enuresis suggested - professional evaluation recommended';
        levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
        recommendations = ['Symptoms suggest possible Enuresis', 'Professional evaluation is recommended to rule out medical causes', 'Behavioral interventions are often effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring', 'Maintain supportive, non-punitive approach', 'Contact our office if symptoms persist'];
      }
    } else if (currentAssessment === 'selective_mutism_youth') {
      const hasRequired = responses.sm_1 && responses.sm_2 && responses.sm_3 && responses.sm_4 && responses.sm_5 && responses.sm_6 && responses.sm_7;
      
      if (hasRequired) {
        level = 'Selective Mutism suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Selective Mutism', 'Professional evaluation is strongly recommended', 'Behavioral therapy and gradual exposure are effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring speaking patterns', 'Provide supportive, low-pressure environment', 'Contact our office if mutism persists'];
      }
    } else if (currentAssessment === 'reactive_attachment_youth') {
      const hasRequired = responses.rad_6 && responses.rad_7 && responses.rad_8 && responses.rad_9;
      const symptoms = [responses.rad_1, responses.rad_2, responses.rad_3, responses.rad_4, responses.rad_5].filter(Boolean).length;
      
      if (hasRequired && symptoms >= 2) {
        level = 'Reactive Attachment Disorder suggested - immediate professional evaluation essential';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = ['Symptoms suggest possible Reactive Attachment Disorder', 'Immediate professional evaluation is essential', 'Trauma-informed attachment therapy is recommended', 'Call immediately for urgent evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring attachment behaviors', 'Provide consistent, nurturing care', 'Contact our office if concerns persist'];
      }
    } else if (currentAssessment === 'dmdd_youth') {
      const hasRequired = responses.dmdd_1 && responses.dmdd_2 && responses.dmdd_3 && responses.dmdd_4 && responses.dmdd_5 && responses.dmdd_6 && responses.dmdd_7 && responses.dmdd_8;
      
      if (hasRequired) {
        level = 'Disruptive Mood Dysregulation Disorder suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Disruptive Mood Dysregulation Disorder', 'Professional evaluation is strongly recommended', 'Combination of therapy and medication can be very effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring mood and behavior', 'Maintain consistent routines and structure', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'panic_youth') {
      const hasQ1 = responses.py_1;
      const symptoms = [responses.py_2, responses.py_3, responses.py_4, responses.py_5, responses.py_6, responses.py_7, responses.py_8, responses.py_9, responses.py_10, responses.py_11, responses.py_12, responses.py_13, responses.py_14].filter(Boolean).length;
      const hasRequired = responses.py_15 && responses.py_16;
      
      if (hasQ1 && symptoms >= 4 && hasRequired) {
        level = 'Panic Disorder suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Panic Disorder in youth', 'Professional evaluation is strongly recommended', 'Cognitive-behavioral therapy is highly effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring panic symptoms', 'Teach breathing and grounding techniques', 'Contact our office if panic attacks increase'];
      }
    } else if (currentAssessment === 'ocd_youth') {
      const hasObsessionsOrCompulsions = (responses.ocdy_1 && responses.ocdy_2) || (responses.ocdy_3 && responses.ocdy_4 && responses.ocdy_5);
      const hasImpairment = responses.ocdy_6 || (responses.ocdy_7 && responses.ocdy_8);
      const hasExclusions = responses.ocdy_9 && responses.ocdy_10;
      
      if (hasObsessionsOrCompulsions && hasImpairment && hasExclusions) {
        level = 'OCD suggested - professional evaluation strongly recommended';
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ['Symptoms suggest possible Obsessive-Compulsive Disorder in youth', 'Professional evaluation is strongly recommended', 'Exposure and Response Prevention therapy is highly effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria for OCD', 'Continue monitoring obsessive or compulsive behaviors', 'Avoid reinforcing rituals', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'ptsd_youth') {
      const hasTrauma = responses.ptsdy_1;
      const intrusion = [responses.ptsdy_2, responses.ptsdy_3, responses.ptsdy_4, responses.ptsdy_5, responses.ptsdy_6].filter(Boolean).length >= 1;
      const avoidance = [responses.ptsdy_7, responses.ptsdy_8].filter(Boolean).length >= 1;
      const negative = [responses.ptsdy_9, responses.ptsdy_10, responses.ptsdy_11, responses.ptsdy_12, responses.ptsdy_13, responses.ptsdy_14].filter(Boolean).length >= 2;
      const arousal = [responses.ptsdy_15, responses.ptsdy_16, responses.ptsdy_17, responses.ptsdy_18, responses.ptsdy_19, responses.ptsdy_20].filter(Boolean).length >= 2;
      
      if (hasTrauma && intrusion && avoidance && negative && arousal) {
        level = 'PTSD suggested - immediate professional evaluation essential';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = ['Symptoms suggest possible Post-Traumatic Stress Disorder in youth', 'Immediate professional evaluation is essential', 'Trauma-focused therapy is highly effective', 'Call immediately for urgent evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet full DSM-5 criteria for PTSD', 'Consider trauma-focused therapy if distressed', 'Provide supportive, safe environment', 'Contact our office if symptoms worsen'];
      }
    } else if (currentAssessment === 'tourettes_youth') {
      const hasRequired = responses.td_1 && responses.td_2 && responses.td_3 && responses.td_4 && responses.td_5 && responses.td_6 && responses.td_7 && responses.td_8;
      
      if (hasRequired) {
        level = "Tourette's Disorder suggested - professional evaluation strongly recommended";
        levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
        recommendations = ["Symptoms suggest possible Tourette's Disorder", 'Professional evaluation is strongly recommended', 'Behavioral therapy and medication can be effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ["Symptoms do not currently meet DSM-5 criteria for Tourette's", 'Continue monitoring tics', 'Avoid drawing excessive attention to tics', 'Contact our office if tics increase in severity'];
      }
    } else if (currentAssessment === 'encopresis_youth') {
      const hasRequired = responses.enc_1 && responses.enc_2 && responses.enc_3 && responses.enc_4 && responses.enc_5 && responses.enc_6;
      
      if (hasRequired) {
        level = 'Encopresis suggested - professional evaluation recommended';
        levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
        recommendations = ['Symptoms suggest possible Encopresis', 'Professional evaluation is recommended to rule out medical causes', 'Behavioral interventions are often effective', 'Call for professional evaluation: (859) 341-7453'];
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = ['Symptoms do not currently meet DSM-5 criteria', 'Continue monitoring', 'Maintain supportive, non-punitive approach', 'Contact our office if symptoms persist'];
      }
    } else {
      // Basic scoring logic for other assessments
      const maxScore = assessments[currentAssessment].questions.length * 3;
      const percentage = (totalScore / maxScore) * 100;
      
      if (percentage <= 30) {
        level = 'Low concern level';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = [
          'Your responses suggest minimal symptoms',
          'Continue practicing self-care',
          'Monitor symptoms over time',
          'Contact our office if symptoms worsen'
        ];
      } else if (percentage <= 60) {
        level = 'Moderate concern level';
        levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
        recommendations = [
          'Your responses suggest moderate symptoms',
          'Consider discussing with a mental health professional',
          'Monitor symptoms closely',
          'Practice healthy coping strategies'
        ];
      } else {
        level = 'High concern level';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = [
          'Your responses suggest significant symptoms',
          'Strongly recommend professional evaluation',
          'Consider immediate professional support',
          'Treatment options may be beneficial'
        ];
      }
    }
    
    return { score: totalScore, level, levelClass, recommendations };
  };

  const returnToGrid = () => {
    setCurrentAssessment(null);
    setCurrentQuestionIndex(0);
    setResponses({});
    setShowResults(false);
    setShowCrisis(false);
  };

  const downloadPDF = () => {
    if (!currentAssessment) return;
    
    const assessment = assessments[currentAssessment];
    const results = calculateResults();
    const doc = new jsPDF();
    
    // Set up colors
    const primaryColor: [number, number, number] = [37, 99, 235]; // Blue
    const secondaryColor: [number, number, number] = [249, 115, 22]; // Orange
    const textColor: [number, number, number] = [31, 41, 55]; // Dark gray
    
    // Header with gradient effect (simulated with rectangles)
    doc.setFillColor(37, 99, 235);
    doc.rect(0, 0, 210, 40, 'F');
    doc.setFillColor(59, 130, 246);
    doc.rect(0, 30, 210, 10, 'F');
    
    // Logo/Icon
    doc.setFontSize(32);
    doc.setTextColor(255, 255, 255);
    doc.text(assessment.icon, 20, 25);
    
    // Title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Assessment Results', 45, 20);
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text(assessment.title, 45, 30);
    
    // Date
    doc.setFontSize(10);
    const today = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    doc.text(`Date: ${today}`, 150, 20);
    
    // Reset to normal text color
    doc.setTextColor(...textColor);
    
    // Score Box
    let yPos = 55;
    doc.setFillColor(37, 99, 235);
    doc.roundedRect(20, yPos, 170, 25, 3, 3, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(`Your Score: ${results.score}`, 105, yPos + 10, { align: 'center' });
    doc.setFontSize(14);
    doc.text(`${results.level}`, 105, yPos + 19, { align: 'center' });
    
    // Questions and Answers Section
    yPos += 35;
    doc.setTextColor(...textColor);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Your Responses', 20, yPos);
    
    yPos += 10;
    
    // Create table data
    const tableData = assessment.questions.map((question, index) => {
      const response = responses[question.id];
      const selectedOption = question.options.find(opt => opt.value === response);
      return [
        `Q${index + 1}`,
        question.text,
        selectedOption ? selectedOption.text : 'Not answered'
      ];
    });
    
    autoTable(doc, {
      startY: yPos,
      head: [['#', 'Question', 'Your Answer']],
      body: tableData,
      theme: 'striped',
      headStyles: {
        fillColor: [37, 99, 235],
        textColor: [255, 255, 255],
        fontSize: 11,
        fontStyle: 'bold',
        halign: 'left'
      },
      bodyStyles: {
        fontSize: 9,
        textColor: [31, 41, 55]
      },
      columnStyles: {
        0: { cellWidth: 15, halign: 'center', fontStyle: 'bold' },
        1: { cellWidth: 110 },
        2: { cellWidth: 55 }
      },
      alternateRowStyles: {
        fillColor: [243, 244, 246]
      },
      margin: { left: 20, right: 20 }
    });
    
    // Get the final Y position after the table
    const finalY = (doc as any).lastAutoTable.finalY || yPos + 50;
    
    // Add new page if needed for recommendations
    if (finalY > 240) {
      doc.addPage();
      yPos = 20;
    } else {
      yPos = finalY + 15;
    }
    
    // Recommendations Section
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text('Personalized Recommendations', 20, yPos);
    
    yPos += 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textColor);
    
    results.recommendations.forEach((rec, index) => {
      const lines = doc.splitTextToSize(`• ${rec}`, 170);
      if (yPos + (lines.length * 7) > 280) {
        doc.addPage();
        yPos = 20;
      }
      doc.text(lines, 25, yPos);
      yPos += lines.length * 7;
    });
    
    // Add new page for footer info
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    } else {
      yPos += 15;
    }
    
    // Important Notice Box
    doc.setFillColor(254, 243, 199);
    doc.setDrawColor(251, 191, 36);
    doc.setLineWidth(1);
    doc.roundedRect(20, yPos, 170, 30, 3, 3, 'FD');
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(146, 64, 14);
    doc.text('Important Screening Disclaimer', 25, yPos + 8);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    const disclaimerText = doc.splitTextToSize(
      'This is a screening tool only. Only qualified mental health professionals can provide formal diagnoses. Please consult a licensed professional for comprehensive evaluation and diagnosis.',
      160
    );
    doc.text(disclaimerText, 25, yPos + 15);
    
    yPos += 40;
    
    // Contact Information Box
    doc.setFillColor(249, 115, 22);
    doc.roundedRect(20, yPos, 170, 35, 3, 3, 'F');
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('Schedule a Professional Consultation', 105, yPos + 10, { align: 'center' });
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Dr. Arnold G. Shapiro, MD - Board Certified Psychiatrist', 105, yPos + 18, { align: 'center' });
    doc.text('Cincinnati, OH & Fort Wright, KY', 105, yPos + 25, { align: 'center' });
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text('Call: (859) 341-7453', 105, yPos + 32, { align: 'center' });
    
    // Footer
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(107, 114, 128);
      doc.setFont('helvetica', 'normal');
      doc.text(
        'This assessment was generated by Dr. Shapiro Psychiatry - Confidential & Private',
        105,
        290,
        { align: 'center' }
      );
      doc.text(`Page ${i} of ${pageCount}`, 190, 290, { align: 'right' });
    }
    
    // Save the PDF
    const fileName = `${assessment.title.replace(/[^a-z0-9]/gi, '_')}_Results_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
  };

  if (showCrisis) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <Alert className="bg-red-50 border-red-200 mb-8">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <div className="ml-3">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Immediate Help Available</h3>
              <p className="text-red-700 mb-6">
                If you are having thoughts of suicide or self-harm, please reach out for immediate help. You are not alone.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-red-600 mb-2">Crisis Lifeline</h4>
                    <a href="tel:988" className="text-red-600 font-bold text-lg hover:underline">
                      📞 Call or Text 988
                    </a>
                    <p className="text-sm text-gray-600 mt-1">24/7 free and confidential support</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-red-600 mb-2">Emergency Services</h4>
                    <a href="tel:911" className="text-red-600 font-bold text-lg hover:underline">
                      📞 Call 911
                    </a>
                    <p className="text-sm text-gray-600 mt-1">For immediate emergency response</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-red-600 mb-2">Crisis Text Line</h4>
                    <a href="sms:741741?body=HOME" className="text-red-600 font-bold text-lg hover:underline">
                      📱 Text HOME to 741741
                    </a>
                    <p className="text-sm text-gray-600 mt-1">24/7 crisis support via text</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardContent className="p-4 text-center">
                    <h4 className="font-semibold text-red-600 mb-2">Call Our Office</h4>
                    <a href="tel:859-341-7453" className="text-red-600 font-bold text-lg hover:underline">
                      📞 (859) 341-7453
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Same-day response for urgent concerns</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button onClick={() => setShowCrisis(false)} variant="outline">
                  Continue with Assessment
                </Button>
                <Button onClick={returnToGrid} className="bg-blue-600 hover:bg-blue-700">
                  Return to Screening Tools
                </Button>
              </div>
            </div>
          </Alert>
        </div>
      </div>
    );
  }

  if (showResults && currentAssessment) {
    const results = calculateResults();
    const assessment = assessments[currentAssessment];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-blue-800 mb-4">Your Assessment Results</CardTitle>
              <div className="text-6xl mb-4">{assessment.icon}</div>
              <h2 className="text-2xl font-semibold mb-2">{assessment.title}</h2>
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block text-xl font-bold">
                Score: {results.score}
              </div>
              <div className={`mt-4 px-6 py-3 rounded-lg font-semibold text-lg border-2 ${results.levelClass}`}>
                {results.level}
              </div>
            </CardHeader>
            
            <CardContent>
              {/* DSM-5 Disclaimer for new assessments */}
              {['mdd_adult', 'gad_adult', 'panic_adult', 'adhd_child', 'mdd_youth', 'social_anxiety_adult', 'ptsd_adult', 'ocd_adult', 'bipolar1_adult', 'bipolar2_adult', 'alcohol_use', 'opioid_use', 'persistent_depressive', 'borderline_personality', 'adhd_adult', 'specific_phobia', 'adjustment_disorder', 'acute_stress_disorder', 'agoraphobia', 'insomnia_disorder', 'somatic_symptom_disorder', 'illness_anxiety_disorder', 'odd_youth', 'conduct_disorder', 'separation_anxiety_youth', 'social_anxiety_youth', 'gad_youth', 'persistent_depressive_youth', 'autism_youth', 'learning_disorder_youth', 'intellectual_disability_youth', 'enuresis_youth', 'selective_mutism_youth', 'reactive_attachment_youth', 'dmdd_youth', 'panic_youth', 'ocd_youth', 'ptsd_youth', 'tourettes_youth', 'encopresis_youth'].includes(currentAssessment) && (
                <Alert className="mb-6 bg-yellow-50 border-yellow-300">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <AlertDescription>
                    <p className="font-semibold text-yellow-800 mb-2">Important Screening Disclaimer</p>
                    <p className="text-gray-700">
                      This is a screening tool only. Only qualified mental health professionals can provide formal diagnoses. 
                      Please consult a licensed professional for comprehensive evaluation and diagnosis.
                    </p>
                  </AlertDescription>
                </Alert>
              )}

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Personalized Recommendations</h3>
                <ul className="space-y-3">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-orange-500 border-2 border-orange-300 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Discuss Your Results with a Professional</h3>
                <p className="mb-4 text-orange-100">Get professional interpretation of your screening results and personalized treatment recommendations.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="bg-white text-orange-600 hover:bg-orange-50" asChild>
                    <a href="tel:859-341-7453" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call (859) 341-7453
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <Button onClick={returnToGrid} variant="outline" size="lg">
                  Take Another Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (currentAssessment) {
    const assessment = assessments[currentAssessment];
    const currentQuestion = assessment.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / assessment.questions.length) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Back to Assessments Button */}
          <div className="mb-4">
            <Button
              onClick={returnToGrid}
              variant="ghost"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Assessments
            </Button>
          </div>
          
          <Card className="mb-6">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">{assessment.icon}</div>
              <CardTitle className="text-3xl text-blue-800 mb-2">{assessment.title}</CardTitle>
              <p className="text-gray-600 mb-4">{assessment.description}</p>
              <Progress value={progress} className="w-full mb-2" />
              <p className="text-sm text-gray-600">Question {currentQuestionIndex + 1} of {assessment.questions.length}</p>
            </CardHeader>
            
            <CardContent>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6">{currentQuestion.text}</h3>
                <RadioGroup
                  value={responses[currentQuestion.id]?.toString() || ''}
                  onValueChange={(value) => {
                    const numValue = parseInt(value);
                    const option = currentQuestion.options.find(opt => opt.value === numValue);
                    handleAnswer(currentQuestion.id, numValue, option?.crisis);
                  }}
                >
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-200">
                      <RadioGroupItem value={option.value.toString()} id={`${currentQuestion.id}_${index}`} />
                      <Label
                        htmlFor={`${currentQuestion.id}_${index}`} 
                        className="flex-1 cursor-pointer text-left"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div className="flex justify-between items-center">
                <Button
                  onClick={previousQuestion}
                  variant="outline"
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </Button>
                
                <Button
                  onClick={nextQuestion}
                  className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
                >
                  {currentQuestionIndex === assessment.questions.length - 1 ? 'Complete Assessment' : 'Next'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Free Mental Health Screening Tools | ADHD, Depression, Anxiety Tests | Cincinnati"
        description="Free, confidential mental health screening tools for ADHD, depression, anxiety, bipolar disorder, OCD, PTSD, and more. Evidence-based assessments from Dr. Arnold Shapiro, Cincinnati psychiatrist."
        path="/screening"
        includeAnalytics={false}
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
        <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <Card className="mb-8 border-2 border-blue-200">
          <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <div className="flex justify-center mb-4">
              <Button 
                variant="outline" 
                className="bg-white text-blue-700 hover:bg-blue-50 border-2 border-white"
                onClick={() => window.location.href = '/'}
              >
                🏠 Back to Main Site
              </Button>
            </div>
            <CardTitle className="text-4xl font-bold mb-4">
              Professional Mental Health Screening Tools
            </CardTitle>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Take the first step toward better mental health with our comprehensive, HIPAA-compliant screening assessments. 
              Developed by Dr. Arnold G. Shapiro, board-certified psychiatrist with 35+ years of experience serving Cincinnati and Fort Wright.
            </p>
            
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <Badge className="bg-white text-blue-700 px-4 py-2">
                🔒 Completely Confidential
              </Badge>
              <Badge className="bg-blue-500 text-white px-4 py-2">
                ⚕️ Clinically Validated
              </Badge>
              <Badge className="bg-orange-400 text-white px-4 py-2">
                📱 Mobile Optimized
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="bg-white">
            {/* Privacy Notice */}
            <Alert className="bg-blue-50 border-blue-300 mb-6">
              <Shield className="h-5 w-5 text-blue-600" />
              <AlertDescription>
                <p className="text-gray-700">
                  These screening tools are for your information only you can see the results. None of your information is collected or stored.
                </p>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Complete Screening Tools Grid - Now 18 tools! */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Complete Professional Assessments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {externalScreenings.map((screening, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-orange-400 bg-white"
                onClick={() => window.open(screening.url, '_blank')}
              >
                <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-t-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl bg-blue-600 text-white p-3 rounded-lg">{screening.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 text-blue-700">{screening.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{screening.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-center pt-4 border-t border-blue-200">
                    <div>
                      <div className="font-bold text-blue-600">{screening.stats.questions}</div>
                      <div className="text-xs text-gray-500">Questions</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-600">{screening.stats.minutes}</div>
                      <div className="text-xs text-gray-500">Minutes</div>
                    </div>
                    <div>
                      <div className="font-bold text-orange-500">⭐⭐⭐⭐⭐</div>
                      <div className="text-xs text-gray-500">{screening.stats.rating}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Demo Tools */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Quick Interactive Demos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Object.entries(assessments).map(([key, assessment]) => (
              <Card 
                key={key} 
                className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-blue-400 bg-white"
                onClick={() => startAssessment(key)}
              >
                <CardHeader className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl bg-gray-600 text-white p-3 rounded-lg">{assessment.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 text-gray-700">{assessment.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{assessment.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-center pt-4 border-t border-gray-200">
                    <div>
                      <div className="font-bold text-gray-600">{assessment.stats.questions}</div>
                      <div className="text-xs text-gray-500">Questions</div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-600">{assessment.stats.minutes}</div>
                      <div className="text-xs text-gray-500">Minutes</div>
                    </div>
                    <div>
                      <div className="font-bold text-blue-500">Demo</div>
                      <div className="text-xs text-gray-500">{assessment.stats.rating}</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* DSM-5 Disclaimer */}
        <Alert className="mb-8 bg-yellow-50 border-yellow-300">
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
          <AlertDescription>
            <p className="font-semibold text-yellow-800 mb-2">Important Screening Information</p>
            <p className="text-gray-700">
              These are screening tools for educational purposes only. They do not replace professional clinical evaluation. 
              For accurate diagnosis and treatment, schedule an appointment with a licensed professional.
            </p>
          </AlertDescription>
        </Alert>

        {/* Adult DSM-5 Diagnostic Screenings */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Adult DSM-5 Diagnostic Screenings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: '😔', title: 'Major Depressive Disorder', description: 'Screening for persistent sad mood and loss of interest in activities', questions: 11, time: '5-7', id: 'mdd_adult' },
              { icon: '😰', title: 'Generalized Anxiety Disorder', description: 'Screening for excessive worry and anxiety about various events', questions: 10, time: '4-6', id: 'gad_adult' },
              { icon: '😱', title: 'Panic Disorder', description: 'Screening for recurrent unexpected panic attacks', questions: 16, time: '6-8', id: 'panic_adult' },
              { icon: '😨', title: 'Social Anxiety Disorder', description: 'Screening for marked fear and avoidance of social situations', questions: 9, time: '4-6', id: 'social_anxiety_adult' },
              { icon: '💥', title: 'Post-Traumatic Stress Disorder (PTSD)', description: 'Screening for trauma-related symptoms following a distressing event', questions: 24, time: '10-12', id: 'ptsd_adult' },
              { icon: '🔄', title: 'Obsessive-Compulsive Disorder (OCD)', description: 'Screening for obsessive thoughts and compulsive behaviors', questions: 12, time: '6-8', id: 'ocd_adult' },
              { icon: '⚡', title: 'Bipolar I Disorder', description: 'Screening for manic episodes and mood cycling', questions: 15, time: '7-9', id: 'bipolar1_adult' },
              { icon: '🌗', title: 'Bipolar II Disorder', description: 'Screening for hypomanic and depressive episodes', questions: 18, time: '8-10', id: 'bipolar2_adult' },
              { icon: '🍺', title: 'Alcohol Use Disorder', description: 'Screening for problematic alcohol use patterns', questions: 13, time: '6-8', id: 'alcohol_use' },
              { icon: '💊', title: 'Opioid Use Disorder', description: 'Screening for problematic opioid use patterns', questions: 13, time: '6-8', id: 'opioid_use' },
              { icon: '☁️', title: 'Persistent Depressive Disorder (Dysthymia)', description: 'Screening for chronic depressed mood lasting 2+ years', questions: 9, time: '5-7', id: 'persistent_depressive' },
              { icon: '🎭', title: 'Borderline Personality Disorder', description: 'Screening for unstable relationships, self-image, and emotions', questions: 11, time: '6-8', id: 'borderline_personality' },
              { icon: '🎯', title: 'Adult ADHD', description: 'Screening for attention and hyperactivity difficulties in adults', questions: 21, time: '8-10', id: 'adhd_adult' },
              { icon: '😖', title: 'Specific Phobia', description: 'Screening for marked fear of specific objects or situations', questions: 8, time: '4-6', id: 'specific_phobia' },
              { icon: '🌊', title: 'Adjustment Disorder', description: 'Screening for emotional symptoms following a stressful life event', questions: 7, time: '3-5', id: 'adjustment_disorder' },
              { icon: '⚠️', title: 'Acute Stress Disorder', description: 'Screening for trauma symptoms within the first month after an event', questions: 16, time: '7-9', id: 'acute_stress_disorder' },
              { icon: '🏠', title: 'Agoraphobia', description: 'Screening for fear of situations where escape might be difficult', questions: 8, time: '4-6', id: 'agoraphobia' },
              { icon: '😴', title: 'Insomnia Disorder', description: 'Screening for persistent difficulty falling or staying asleep', questions: 9, time: '4-6', id: 'insomnia_disorder' },
              { icon: '🤕', title: 'Somatic Symptom Disorder', description: 'Screening for excessive focus on physical symptoms', questions: 8, time: '4-6', id: 'somatic_symptom_disorder' },
              { icon: '🩺', title: 'Illness Anxiety Disorder', description: 'Screening for preoccupation with having a serious illness', questions: 8, time: '4-6', id: 'illness_anxiety_disorder' }
            ].map((item, index) => (
              <Card 
                key={`adult-${index}`}
                className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-400 bg-white"
                onClick={() => {
                  if (item.id && assessments[item.id]) {
                    startAssessment(item.id);
                  } else {
                    alert('This assessment is being finalized. Full questionnaire coming soon.');
                  }
                }}
              >
                <CardHeader className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-t-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl bg-purple-600 text-white p-3 rounded-lg">{item.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 text-purple-700">{item.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-center pt-4 border-t border-purple-200">
                    <div>
                      <div className="font-bold text-purple-600">{item.questions}</div>
                      <div className="text-xs text-gray-500">Questions</div>
                    </div>
                    <div>
                      <div className="font-bold text-purple-600">{item.time}</div>
                      <div className="text-xs text-gray-500">Minutes</div>
                    </div>
                    <div>
                      <div className="font-bold text-orange-500">DSM-5</div>
                      <div className="text-xs text-gray-500">Adult</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Child & Adolescent DSM-5 Diagnostic Screenings */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Child & Adolescent DSM-5 Diagnostic Screenings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'ADHD (Child/Adolescent)', description: 'Screening for attention-deficit/hyperactivity symptoms in youth', questions: 21, time: '8-10', id: 'adhd_child' },
              { icon: '😤', title: 'Oppositional Defiant Disorder (ODD)', description: 'Screening for angry, defiant, and vindictive behavior patterns', questions: 11, time: '5-7', id: 'odd_youth' },
              { icon: '🚫', title: 'Conduct Disorder', description: 'Screening for aggression, rule-breaking, and destructive behavior', questions: 18, time: '8-10', id: 'conduct_disorder' },
              { icon: '👨‍👩‍👧', title: 'Separation Anxiety Disorder', description: 'Screening for excessive fear about separation from attachment figures', questions: 11, time: '5-7', id: 'separation_anxiety_youth' },
              { icon: '😨', title: 'Social Anxiety Disorder (Youth)', description: 'Screening for fear of social or performance situations in youth', questions: 9, time: '4-6', id: 'social_anxiety_youth' },
              { icon: '😰', title: 'Generalized Anxiety Disorder (Youth)', description: 'Screening for excessive worry in children and adolescents', questions: 10, time: '4-6', id: 'gad_youth' },
              { icon: '😔', title: 'Major Depressive Disorder (Youth)', description: 'Screening for persistent sad or irritable mood in youth', questions: 11, time: '5-7', id: 'mdd_youth' },
              { icon: '☁️', title: 'Persistent Depressive Disorder (Youth)', description: 'Screening for chronic depressed/irritable mood in youth (1+ year)', questions: 9, time: '5-7', id: 'persistent_depressive_youth' },
              { icon: '🧩', title: 'Autism Spectrum Disorder', description: 'Screening for social communication and behavior pattern differences', questions: 14, time: '7-9', id: 'autism_youth' },
              { icon: '📚', title: 'Specific Learning Disorder', description: 'Screening for difficulties in reading, writing, or mathematics', questions: 12, time: '6-8', id: 'learning_disorder_youth' },
              { icon: '🧠', title: 'Intellectual Disability', description: 'Screening for deficits in intellectual and adaptive functioning', questions: 10, time: '5-7', id: 'intellectual_disability_youth' },
              { icon: '💧', title: 'Enuresis', description: 'Screening for repeated urination in inappropriate places', questions: 6, time: '3-5', id: 'enuresis_youth' },
              { icon: '🤐', title: 'Selective Mutism', description: 'Screening for consistent failure to speak in specific situations', questions: 7, time: '3-5', id: 'selective_mutism_youth' },
              { icon: '💔', title: 'Reactive Attachment Disorder', description: 'Screening for emotionally withdrawn behavior toward caregivers', questions: 9, time: '4-6', id: 'reactive_attachment_youth' },
              { icon: '😡', title: 'Disruptive Mood Dysregulation Disorder', description: 'Screening for severe temper outbursts and persistent irritability', questions: 8, time: '4-6', id: 'dmdd_youth' },
              { icon: '😱', title: 'Panic Disorder (Youth)', description: 'Screening for recurrent panic attacks in children/adolescents', questions: 16, time: '6-8', id: 'panic_youth' },
              { icon: '🔄', title: 'OCD (Youth)', description: 'Screening for obsessions and compulsions in youth', questions: 12, time: '6-8', id: 'ocd_youth' },
              { icon: '💥', title: 'PTSD (Youth)', description: 'Screening for trauma-related symptoms in children/adolescents', questions: 20, time: '9-11', id: 'ptsd_youth' },
              { icon: '🎪', title: "Tourette's Disorder", description: 'Screening for multiple motor and vocal tics', questions: 8, time: '4-6', id: 'tourettes_youth' },
              { icon: '🚽', title: 'Encopresis', description: 'Screening for repeated passage of feces in inappropriate places', questions: 6, time: '3-5', id: 'encopresis_youth' }
            ].map((item, index) => (
              <Card 
                key={`child-${index}`}
                className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-green-200 hover:border-green-400 bg-white"
                onClick={() => {
                  if (item.id && assessments[item.id]) {
                    startAssessment(item.id);
                  } else {
                    alert('This assessment is being finalized. Full questionnaire coming soon.');
                  }
                }}
              >
                <CardHeader className="bg-gradient-to-br from-green-50 to-green-100 rounded-t-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl bg-green-600 text-white p-3 rounded-lg">{item.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2 text-green-700">{item.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-center pt-4 border-t border-green-200">
                    <div>
                      <div className="font-bold text-green-600">{item.questions}</div>
                      <div className="text-xs text-gray-500">Questions</div>
                    </div>
                    <div>
                      <div className="font-bold text-green-600">{item.time}</div>
                      <div className="text-xs text-gray-500">Minutes</div>
                    </div>
                    <div>
                      <div className="font-bold text-orange-500">DSM-5</div>
                      <div className="text-xs text-gray-500">Youth</div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Footer Disclaimer */}
        <Card className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-2 border-blue-300">
          <CardContent className="text-center py-6">
            <p className="text-sm text-blue-100 mb-2">
              <strong className="text-white">Medical Disclaimer:</strong> These screening tools are for informational purposes only and do not constitute medical advice or diagnosis.
            </p>
            <p className="text-sm text-blue-100">
              Please consult with Dr. Arnold G. Shapiro or another qualified healthcare provider for proper evaluation and treatment.
            </p>
            <div className="mt-4 text-xs text-blue-200">
              © 2024 Dr. Arnold G. Shapiro MD - Mental Health Screening Center. All rights reserved. | 
              🏥 Board-Certified Psychiatrist | 📍 Cincinnati, OH & Fort Wright, KY
            </div>
          </CardContent>
        </Card>
      </div>
      </div>
      <EmergencyDisclaimer />
      <Footer />
    </>
  );
};

export default Screening;