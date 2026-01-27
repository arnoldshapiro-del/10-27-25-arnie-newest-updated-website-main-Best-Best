// ============================================
// CONDITIONS DATA - TWO COLUMN LAYOUT
// ============================================
// Left column: 8 conditions
// Right column: 7 conditions
// Total: 15 unique conditions (no duplicates)
// ============================================

export interface Condition {
  name: string;        // Full display name
  path: string;        // URL path (must start with /)
}

// Left Column - 8 conditions (in exact order)
export const LEFT_COLUMN_CONDITIONS: Condition[] = [
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
  }
];

// Right Column - 7 conditions (in exact order)
export const RIGHT_COLUMN_CONDITIONS: Condition[] = [
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
    name: "Trichotillomania (Hair Pulling)",
    path: "/trichotillomania"
  },
  {
    name: "Autism Spectrum Disorder (ASD)",
    path: "/autism"
  }
];

// Combined list for backward compatibility and route checking
export const CONDITIONS: Condition[] = [
  ...LEFT_COLUMN_CONDITIONS,
  ...RIGHT_COLUMN_CONDITIONS
];

// Legacy exports for any components still using old names
export const ADULT_CONDITIONS = LEFT_COLUMN_CONDITIONS;
export const PEDIATRIC_CONDITIONS = RIGHT_COLUMN_CONDITIONS;
