import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, ArrowRight, Phone, Mail, Calendar, AlertTriangle, Shield, CheckCircle } from "lucide-react";

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
            'Schedule consultation with Dr. Shapiro: (859) 341-7453'
          ];
        } else if (totalScore <= 8) {
          level = 'Moderate Major Depressive Disorder suggested - professional evaluation strongly recommended';
          levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
          recommendations = [
            'Symptoms suggest possible Moderate Major Depressive Disorder',
            'Professional psychiatric evaluation is strongly recommended',
            'Treatment options include therapy and/or medication',
            'Call Dr. Shapiro today: (859) 341-7453'
          ];
        } else {
          level = 'Severe Major Depressive Disorder suggested - immediate professional evaluation essential';
          levelClass = 'bg-red-100 text-red-800 border-red-300';
          recommendations = [
            'Symptoms suggest possible Severe Major Depressive Disorder',
            'Immediate professional evaluation is essential',
            'Evidence-based treatments are available',
            'Call Dr. Shapiro immediately: (859) 341-7453'
          ];
        }
      } else {
        level = 'Below diagnostic threshold - symptoms do not meet criteria for Major Depressive Disorder';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = [
          'Symptoms do not currently meet DSM-5 criteria for Major Depressive Disorder',
          'Continue monitoring your mood',
          'Practice self-care and stress management',
          'Contact Dr. Shapiro if symptoms worsen'
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
            'Schedule consultation with Dr. Shapiro: (859) 341-7453'
          ];
        } else if (totalScore <= 9) {
          level = 'Moderate Generalized Anxiety Disorder suggested - professional evaluation strongly recommended';
          levelClass = 'bg-orange-100 text-orange-800 border-orange-300';
          recommendations = [
            'Symptoms suggest possible Moderate Generalized Anxiety Disorder',
            'Professional evaluation is strongly recommended',
            'Multiple effective treatments available',
            'Call Dr. Shapiro today: (859) 341-7453'
          ];
        } else {
          level = 'Severe Generalized Anxiety Disorder suggested - immediate professional evaluation essential';
          levelClass = 'bg-red-100 text-red-800 border-red-300';
          recommendations = [
            'Symptoms suggest possible Severe Generalized Anxiety Disorder',
            'Immediate professional evaluation is essential',
            'Treatment can significantly reduce anxiety',
            'Call Dr. Shapiro immediately: (859) 341-7453'
          ];
        }
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = [
          'Symptoms do not currently meet DSM-5 criteria for Generalized Anxiety Disorder',
          'Continue monitoring your anxiety levels',
          'Practice relaxation techniques',
          'Contact Dr. Shapiro if symptoms worsen'
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
            'Call Dr. Shapiro today: (859) 341-7453'
          ];
        } else {
          level = 'Panic Disorder with severe symptoms - immediate professional evaluation essential';
          levelClass = 'bg-red-100 text-red-800 border-red-300';
          recommendations = [
            'Symptoms suggest Panic Disorder with severe symptoms',
            'Immediate professional evaluation is essential',
            'Effective treatments can dramatically reduce panic attacks',
            'Call Dr. Shapiro immediately: (859) 341-7453'
          ];
        }
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = [
          'Symptoms do not currently meet DSM-5 criteria for Panic Disorder',
          'Continue monitoring panic symptoms',
          'Learn breathing and grounding techniques',
          'Contact Dr. Shapiro if symptoms worsen'
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
            'Call Dr. Shapiro for evaluation: (859) 341-7453'
          ];
        } else if (inattentionCount >= 6 || hyperactivityCount >= 6) {
          level = 'ADHD suggested (Predominantly Inattentive or Hyperactive-Impulsive) - professional evaluation recommended';
          levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
          recommendations = [
            inattentionCount >= 6 ? 'Symptoms suggest possible ADHD Predominantly Inattentive Type' : 'Symptoms suggest possible ADHD Predominantly Hyperactive-Impulsive Type',
            'Professional evaluation is recommended',
            'Early intervention can improve academic and social outcomes',
            'Schedule consultation with Dr. Shapiro: (859) 341-7453'
          ];
        } else {
          level = 'Below diagnostic threshold';
          levelClass = 'bg-green-100 text-green-800 border-green-300';
          recommendations = [
            'Symptoms do not currently meet DSM-5 criteria for ADHD',
            'Continue monitoring attention and behavior',
            'Maintain structure and routines',
            'Contact Dr. Shapiro if concerns persist'
          ];
        }
      } else {
        level = 'Below diagnostic threshold';
        levelClass = 'bg-green-100 text-green-800 border-green-300';
        recommendations = [
          'Symptoms do not currently meet DSM-5 criteria for ADHD',
          'Duration or setting criteria not met',
          'Continue monitoring',
          'Contact Dr. Shapiro if symptoms worsen'
        ];
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
          'Contact Dr. Shapiro if symptoms worsen'
        ];
      } else if (percentage <= 60) {
        level = 'Moderate concern level';
        levelClass = 'bg-yellow-100 text-yellow-800 border-yellow-300';
        recommendations = [
          'Your responses suggest moderate symptoms',
          'Consider discussing with Dr. Shapiro',
          'Monitor symptoms closely',
          'Practice healthy coping strategies'
        ];
      } else {
        level = 'High concern level';
        levelClass = 'bg-red-100 text-red-800 border-red-300';
        recommendations = [
          'Your responses suggest significant symptoms',
          'Strongly recommend evaluation with Dr. Shapiro',
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
                    <h4 className="font-semibold text-red-600 mb-2">Dr. Shapiro's Office</h4>
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
              {['mdd_adult', 'gad_adult', 'panic_adult', 'adhd_child', 'mdd_youth'].includes(currentAssessment) && (
                <Alert className="mb-6 bg-yellow-50 border-yellow-300">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <AlertDescription>
                    <p className="font-semibold text-yellow-800 mb-2">Important Screening Disclaimer</p>
                    <p className="text-gray-700">
                      This is a screening tool only. Only qualified mental health professionals can provide formal diagnoses. 
                      Please consult Dr. Shapiro or another licensed professional for comprehensive evaluation and diagnosis.
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
                <h3 className="text-xl font-semibold text-white mb-4">Discuss Your Results with Dr. Shapiro</h3>
                <p className="mb-4 text-orange-100">Get professional interpretation of your screening results and personalized treatment recommendations.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="bg-white text-orange-600 hover:bg-orange-50" asChild>
                    <a href="tel:859-341-7453" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call (859) 341-7453
                    </a>
                  </Button>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700" asChild>
                    <a href="mailto:ashapiro@zoomtown.com?subject=Screening Results Discussion" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Dr. Shapiro
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
                  onClick={() => setShowCrisis(true)}
                  variant="destructive"
                  className="flex items-center gap-2"
                >
                  <AlertTriangle className="h-4 w-4" />
                  Crisis Resources
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
              <Badge className="bg-orange-500 text-white px-4 py-2 hover:bg-orange-600">
                🏥 HIPAA Compliant
              </Badge>
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
            {/* HIPAA Notice */}
            <Alert className="bg-blue-50 border-blue-300 mb-6">
              <Shield className="h-5 w-5 text-blue-600" />
              <AlertDescription>
                <h3 className="font-semibold text-blue-700 mb-3">Your Privacy is Protected</h3>
                <p className="mb-4 text-gray-700">
                  <strong>HIPAA Compliance:</strong> All screening tools are completely confidential and comply with HIPAA privacy regulations. 
                  No personal health information is stored without your explicit consent.
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
              For accurate diagnosis and treatment, schedule an appointment with Dr. Shapiro.
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
              { icon: '😨', title: 'Social Anxiety Disorder', description: 'Screening for marked fear and avoidance of social situations', questions: 9, time: '4-6' },
              { icon: '💥', title: 'Post-Traumatic Stress Disorder (PTSD)', description: 'Screening for trauma-related symptoms following a distressing event', questions: 24, time: '10-12' },
              { icon: '🔄', title: 'Obsessive-Compulsive Disorder (OCD)', description: 'Screening for obsessive thoughts and compulsive behaviors', questions: 12, time: '6-8' },
              { icon: '⚡', title: 'Bipolar I Disorder', description: 'Screening for manic episodes and mood cycling', questions: 15, time: '7-9' },
              { icon: '🌗', title: 'Bipolar II Disorder', description: 'Screening for hypomanic and depressive episodes', questions: 18, time: '8-10' },
              { icon: '🍺', title: 'Alcohol Use Disorder', description: 'Screening for problematic alcohol use patterns', questions: 13, time: '6-8' },
              { icon: '💊', title: 'Opioid Use Disorder', description: 'Screening for problematic opioid use patterns', questions: 13, time: '6-8' },
              { icon: '☁️', title: 'Persistent Depressive Disorder (Dysthymia)', description: 'Screening for chronic depressed mood lasting 2+ years', questions: 9, time: '5-7' },
              { icon: '🎭', title: 'Borderline Personality Disorder', description: 'Screening for unstable relationships, self-image, and emotions', questions: 11, time: '6-8' },
              { icon: '🎯', title: 'Adult ADHD', description: 'Screening for attention and hyperactivity difficulties in adults', questions: 21, time: '8-10' },
              { icon: '😖', title: 'Specific Phobia', description: 'Screening for marked fear of specific objects or situations', questions: 8, time: '4-6' },
              { icon: '🌊', title: 'Adjustment Disorder', description: 'Screening for emotional symptoms following a stressful life event', questions: 7, time: '3-5' },
              { icon: '⚠️', title: 'Acute Stress Disorder', description: 'Screening for trauma symptoms within the first month after an event', questions: 16, time: '7-9' },
              { icon: '🏠', title: 'Agoraphobia', description: 'Screening for fear of situations where escape might be difficult', questions: 8, time: '4-6' },
              { icon: '😴', title: 'Insomnia Disorder', description: 'Screening for persistent difficulty falling or staying asleep', questions: 9, time: '4-6' },
              { icon: '🤕', title: 'Somatic Symptom Disorder', description: 'Screening for excessive focus on physical symptoms', questions: 8, time: '4-6' },
              { icon: '🩺', title: 'Illness Anxiety Disorder', description: 'Screening for preoccupation with having a serious illness', questions: 8, time: '4-6' }
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
              { icon: '😤', title: 'Oppositional Defiant Disorder (ODD)', description: 'Screening for angry, defiant, and vindictive behavior patterns', questions: 11, time: '5-7' },
              { icon: '🚫', title: 'Conduct Disorder', description: 'Screening for aggression, rule-breaking, and destructive behavior', questions: 18, time: '8-10' },
              { icon: '👨‍👩‍👧', title: 'Separation Anxiety Disorder', description: 'Screening for excessive fear about separation from attachment figures', questions: 11, time: '5-7' },
              { icon: '😨', title: 'Social Anxiety Disorder (Youth)', description: 'Screening for fear of social or performance situations in youth', questions: 9, time: '4-6' },
              { icon: '😰', title: 'Generalized Anxiety Disorder (Youth)', description: 'Screening for excessive worry in children and adolescents', questions: 10, time: '4-6' },
              { icon: '😔', title: 'Major Depressive Disorder (Youth)', description: 'Screening for persistent sad or irritable mood in youth', questions: 11, time: '5-7' },
              { icon: '☁️', title: 'Persistent Depressive Disorder (Youth)', description: 'Screening for chronic depressed/irritable mood in youth (1+ year)', questions: 9, time: '5-7' },
              { icon: '🧩', title: 'Autism Spectrum Disorder', description: 'Screening for social communication and behavior pattern differences', questions: 14, time: '7-9' },
              { icon: '📚', title: 'Specific Learning Disorder', description: 'Screening for difficulties in reading, writing, or mathematics', questions: 12, time: '6-8' },
              { icon: '🧠', title: 'Intellectual Disability', description: 'Screening for deficits in intellectual and adaptive functioning', questions: 10, time: '5-7' },
              { icon: '💧', title: 'Enuresis', description: 'Screening for repeated urination in inappropriate places', questions: 6, time: '3-5' },
              { icon: '🤐', title: 'Selective Mutism', description: 'Screening for consistent failure to speak in specific situations', questions: 7, time: '3-5' },
              { icon: '💔', title: 'Reactive Attachment Disorder', description: 'Screening for emotionally withdrawn behavior toward caregivers', questions: 9, time: '4-6' },
              { icon: '😡', title: 'Disruptive Mood Dysregulation Disorder', description: 'Screening for severe temper outbursts and persistent irritability', questions: 8, time: '4-6' },
              { icon: '😱', title: 'Panic Disorder (Youth)', description: 'Screening for recurrent panic attacks in children/adolescents', questions: 16, time: '6-8' },
              { icon: '🔄', title: 'OCD (Youth)', description: 'Screening for obsessions and compulsions in youth', questions: 12, time: '6-8' },
              { icon: '💥', title: 'PTSD (Youth)', description: 'Screening for trauma-related symptoms in children/adolescents', questions: 20, time: '9-11' },
              { icon: '🎪', title: "Tourette's Disorder", description: 'Screening for multiple motor and vocal tics', questions: 8, time: '4-6' },
              { icon: '🚽', title: 'Encopresis', description: 'Screening for repeated passage of feces in inappropriate places', questions: 6, time: '3-5' }
            ].map((item, index) => (
              <Card 
                key={`child-${index}`}
                className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 border-green-200 hover:border-green-400 bg-white"
                onClick={() => {
                  alert('This assessment is being finalized. Full questionnaire coming soon.');
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
              🔒 HIPAA Compliant | 🏥 Board-Certified Psychiatrist | 📍 Cincinnati, OH & Fort Wright, KY
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Screening;