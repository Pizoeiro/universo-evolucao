export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  photoURL?: string;
  levelProgress?: {
    worldId: string;
    levelId: number;
    stars: number;
    completed: boolean;
    objectives?: {
      one?: boolean;
      two?: boolean;
      three?: boolean;
    };
  }[];
  createdAt: Date;
  lastLoginAt: Date;
  totalStars?: number;
}

export interface Level {
  id: number;
  name: string;
  description: string;
  icon: string;
  story?: string;
  starObjectives: {
    one: {
      emoji: string;
      requiredMatches: number;
      maxMoves: number;
      description: string;
    };
    two: {
      emoji: string;
      requiredMatches: number;
      maxMoves: number;
      description: string;
    };
    three: {
      emoji: string;
      requiredMatches: number;
      maxMoves: number;
      description: string;
    };
  };
  magicaCosmicaCount?: number;
}

export interface Character {
  name: string;
  position?: 'left' | 'right';
} 