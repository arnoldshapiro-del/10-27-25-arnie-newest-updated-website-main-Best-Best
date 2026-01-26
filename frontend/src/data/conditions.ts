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
  shortName?: string;  // Optional shorter name for mobile
}

export const CONDITIONS: Condition[] = [
  {
    name: "ADHD (Attention-Deficit/Hyperactivity Disorder)",
    path: "/adhd",
    shortName: "ADHD"
  },
  {
    name: "Anxiety Disorders",
    path: "/anxiety",
    shortName: "Anxiety"
  },
  {
    name: "Autism Spectrum Disorder",
    path: "/autism",
    shortName: "Autism"
  },
  {
    name: "Bipolar Disorder",
    path: "/bipolar-disorder",
    shortName: "Bipolar"
  },
  {
    name: "Depression",
    path: "/depression",
    shortName: "Depression"
  },
  {
    name: "Disruptive Mood Dysregulation Disorder (DMDD)",
    path: "/dmdd",
    shortName: "DMDD"
  },
  {
    name: "Insomnia / Sleep Disorders",
    path: "/insomnia",
    shortName: "Insomnia"
  },
  {
    name: "Obsessive-Compulsive Disorder (OCD)",
    path: "/ocd",
    shortName: "OCD"
  },
  {
    name: "Postpartum Depression",
    path: "/postpartum-depression",
    shortName: "Postpartum"
  },
  {
    name: "Seasonal Affective Disorder (SAD)",
    path: "/seasonal-affective-disorder",
    shortName: "SAD"
  },
  {
    name: "Social Anxiety Disorder",
    path: "/social-anxiety",
    shortName: "Social Anxiety"
  },
  {
    name: "Trichotillomania (Hair-Pulling Disorder)",
    path: "/trichotillomania",
    shortName: "Trichotillomania"
  }
];

// ============================================
// FUTURE CONDITIONS - Just uncomment and add to array above:
// ============================================
// {
//   name: "Pediatric Bipolar Disorder",
//   path: "/pediatric-bipolar",
//   shortName: "Pediatric Bipolar"
// },
// {
//   name: "Oppositional Defiant Disorder (ODD)",
//   path: "/odd",
//   shortName: "ODD"
// },
