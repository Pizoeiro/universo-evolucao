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
  gridSize?: number // Tamanho do grid específico para o nível
  starObjectives: {
    one: StarObjective
    two: StarObjective
    three: StarObjective
  }
  targetScore?: number
  unlockMessage?: string
  magicaCosmicaCount?: number // Número de vezes que a Mágica Cósmica pode ser usada no nível
}

export interface World {
  name: string
  description: string
  icon: string
  gridSize: number
  levels: Level[]
  specialEmoji?: string
  explosionRadius?: number
  combinations: Combination[] // Adicionando combinações no nível do mundo
}

export interface WorldLevels {
  [key: string]: World
  [key: `${string}-extreme`]: World  // Suporte para versões extremas dos mundos
}
