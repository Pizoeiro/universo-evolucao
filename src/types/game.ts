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
  spaceShooterProgress?: {
    levelId: number;
    completed: boolean;
    highScore: number;
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

export interface Position {
  row: number;
  col: number;
}

export interface Tile {
  id: string;
  emoji: string;
  isSelected: boolean;
  isMatched: boolean;
  shake?: boolean;
  fall?: boolean;
  pop?: boolean;
  isNew?: boolean;
  originalRow?: number;
}

export interface Objective {
  emojis: string[];
  requiredMatches: number;
  description: string;
  currentMatches: number;
  star: number;
  isActive: boolean;
  isCompleted: boolean;
}

export interface Match {
  positions: Position[];
  length: number;
  type: 'horizontal' | 'vertical';
}

export type StarLevel = 'one' | 'two' | 'three';