// ============================================
// CONDITIONS DATA - ORGANIZED BY CATEGORY
// ============================================
// Adult and Pediatric conditions are separated
// for organized navigation display
// ============================================

export interface Condition {
  name: string;        // Full display name
  path: string;        // URL path (must start with /)
  shortName?: string;  // Display name for dropdown menu (deprecated - use name)
}

// Adult Conditions - in display order
export const ADULT_CONDITIONS: Condition[] = [
  {
    name: "Anxiety Disorders",
    path: "/anxiety"
  },
  {
    name: "Social Anxiety Disorder",
    path: "/social-anxiety"
  },
  {
    name: "Depression (MDD)",
    path: "/depression"
  },
  {
    name: "Postpartum Depression",
    path: "/postpartum-depression"
  },
  {
    name: "Seasonal Affective Disorder (Seasonal Depression)",
    path: "/seasonal-affective-disorder"
  },
  {
    name: "Obsessive-Compulsive Disorder (OCD)",
    path: "/ocd"
  },
  {
    name: "Insomnia and Sleep Disorders",
    path: "/insomnia"
  },
  {
    name: "Bipolar Disorder",
    path: "/bipolar-disorder"
  },
  {
    name: "Trichotillomania (Hair Pulling)",
    path: "/trichotillomania"
  },
  {
    name: "Autism Spectrum Disorder (ASD)",
    path: "/autism"
  }
];

// Pediatric Conditions - in display order
export const PEDIATRIC_CONDITIONS: Condition[] = [
  {
    name: "ADHD",
    path: "/adhd"
  },
  {
    name: "Oppositional Defiant Disorder (ODD)",
    path: "/odd"
  },
  {
    name: "Disruptive Mood Dysregulation Disorder (DMDD)",
    path: "/dmdd"
  },
  {
    name: "Childhood Bipolar Disorder",
    path: "/childhood-bipolar"
  },
  {
    name: "Tic Disorders and Tourette's Syndrome",
    path: "/tic-disorders"
  },
  {
    name: "Autism Spectrum Disorder (ASD)",
    path: "/autism"
  }
];

// Combined list for backward compatibility and route checking
export const CONDITIONS: Condition[] = [
  ...ADULT_CONDITIONS,
  ...PEDIATRIC_CONDITIONS.filter(p => !ADULT_CONDITIONS.some(a => a.path === p.path))
];
