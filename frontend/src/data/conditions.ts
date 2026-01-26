// ============================================
// CONDITIONS DATA - MASTER LIST
// ============================================
// To add a new condition in the future:
// 1. Add a new object to this array
// 2. That's it - the navigation will automatically update
// ============================================

export interface Condition {
  name: string;        // Full display name
  path: string;        // URL path (must start with /)
  shortName?: string;  // Display name for dropdown menu
}

export const CONDITIONS: Condition[] = [
  {
    name: "ADHD (Attention-Deficit/Hyperactivity Disorder)",
    path: "/adhd",
    shortName: "ADHD"
  },
  {
    name: "Other Anxiety Disorders",
    path: "/anxiety",
    shortName: "Other Anxiety Disorders"
  },
  {
    name: "Autism Spectrum Disorder (ASD)",
    path: "/autism",
    shortName: "Autism Spectrum Disorder (ASD)"
  },
  {
    name: "Bipolar Disorder",
    path: "/bipolar-disorder",
    shortName: "Bipolar Disorder"
  },
  {
    name: "Childhood Bipolar Disorder",
    path: "/childhood-bipolar",
    shortName: "Childhood Bipolar Disorder"
  },
  {
    name: "Depression",
    path: "/depression",
    shortName: "Depression"
  },
  {
    name: "DMDD (Disruptive Mood Dysregulation Disorder)",
    path: "/dmdd",
    shortName: "DMDD (Disruptive Mood Dysregulation Disorder)"
  },
  {
    name: "Insomnia",
    path: "/insomnia",
    shortName: "Insomnia"
  },
  {
    name: "OCD (Obsessive-Compulsive Disorder)",
    path: "/ocd",
    shortName: "OCD (Obsessive-Compulsive Disorder)"
  },
  {
    name: "Postpartum Depression",
    path: "/postpartum-depression",
    shortName: "Postpartum Depression"
  },
  {
    name: "Winter Depression (SAD)",
    path: "/seasonal-affective-disorder",
    shortName: "Winter Depression (SAD)"
  },
  {
    name: "Social Anxiety",
    path: "/social-anxiety",
    shortName: "Social Anxiety"
  },
  {
    name: "Trichotillomania (Hair-Pulling)",
    path: "/trichotillomania",
    shortName: "Trichotillomania (Hair-Pulling)"
  },
  {
    name: "Oppositional Defiant Disorder (ODD)",
    path: "/oppositional-defiant-disorder",
    shortName: "ODD (Oppositional Defiant Disorder)"
  }
];

// ============================================
// FUTURE CONDITIONS - Just uncomment and add to array above:
// ============================================
// {
//   name: "Oppositional Defiant Disorder (ODD)",
//   path: "/odd",
//   shortName: "ODD (Oppositional Defiant Disorder)"
// },
// {
//   name: "Childhood Bipolar Disorder",
//   path: "/childhood-bipolar",
//   shortName: "Childhood Bipolar Disorder"
// },
