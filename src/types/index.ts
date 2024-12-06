export interface User {
  id: string;
  email: string;
  username: string;
  currentLevel: number;
  totalScore: number;
  highestLevel?: number;
}

export interface Level {
  id: number;
  world: string;
  name: string;
  description: string;
  requiredScore: number;
  gridSize: { rows: number; cols: number };
  elements: string[]; // emojis disponíveis no nível
  objectives: { element: string; count: number }[];
}

export interface GameState {
  score: number;
  moves: number;
  objectives: { element: string; current: number; required: number }[];
  grid: string[][];
}

export interface Rankings {
  id: string;
  userId: string;
  username: string;
  score: number;
  level: number;
  timestamp: Date;
}
