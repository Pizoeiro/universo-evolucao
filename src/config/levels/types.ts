export interface Combination {
  emoji: string
  name: string
  points: number
  description: string
}

export interface StarObjective {
  description: string
  emoji: string
  requiredMatches: number
  points: number
  maxMoves: number // Número máximo de movimentos permitidos para este objetivo
}

export interface Level {
  id: number
  name: string
  description: string
  story: string
  icon: string
  starObjectives: {
    one: StarObjective
    two: StarObjective
    three: StarObjective
  }
  combinations: Combination[]
  targetScore?: number
  unlockMessage?: string
  magicaCosmicaCount?: number // Número de vezes que a Mágica Cósmica pode ser usada no nível
}

export interface World {
  name: string
  description: string
  icon: string
  levels: Level[]
}

export interface WorldLevels {
  [key: string]: World
}
