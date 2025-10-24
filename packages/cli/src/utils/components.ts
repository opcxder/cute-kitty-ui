interface Component {
  name: string;
  type: 'core' | 'composition';
  description: string;
}

/**
 * Returns a list of all available components in the Kitty-UI library
 */
export function getAvailableComponents(): Component[] {
  return [
    // Core components
    {
      name: 'SittingCat',
      type: 'core',
      description: 'A cat in a sitting pose',
    },
    {
      name: 'LyingCat',
      type: 'core',
      description: 'A cat in a lying pose',
    },
    {
      name: 'StandingCat',
      type: 'core',
      description: 'A cat in a standing pose',
    },
    {
      name: 'SleepingCat',
      type: 'core',
      description: 'A cat in a sleeping pose',
    },
    {
      name: 'PlayingCat',
      type: 'core',
      description: 'A cat in a playful pose',
    },
    
    // Composition components
    {
      name: 'HoldingSignCat',
      type: 'composition',
      description: 'A cat holding a customizable sign',
    },
    {
      name: 'PeekingCat',
      type: 'composition',
      description: 'A cat peeking from an edge of the container',
    },
    {
      name: 'FaceOnlyCat',
      type: 'composition',
      description: 'Just the face of a cat',
    },
  ];
}