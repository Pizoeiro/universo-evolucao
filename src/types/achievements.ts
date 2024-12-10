export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  requirement: AchievementRequirement;
  isUnlocked: boolean;
  progress: number;
  maxProgress: number;
  category: AchievementCategory;
  rewardPoints: number;
}

export type AchievementCategory = 
  | 'exploration'     // Exploração de conteúdo
  | 'knowledge'       // Conhecimento adquirido
  | 'dedication'      // Tempo dedicado ao aprendizado
  | 'perfection'      // Níveis completados com perfeição
  | 'mastery'         // Conquistas de maestria
  | 'legendary';      // Conquistas lendárias

export type CategoryFilter = AchievementCategory | 'all';

export type AchievementRequirementType = 
  | 'levels_completed' 
  | 'curiosities_read' 
  | 'dialogs_completed' 
  | 'time_played'
  | 'perfect_levels'
  | 'total_stars'
  | 'total_points'
  | 'consecutive_days'
  | 'all_levels_world'
  | 'all_levels_world_one_star'
  | 'all_levels_world_two_stars'
  | 'total_matches';

export interface AchievementRequirement {
  type: AchievementRequirementType;
  value: number;
  worldId?: number; // Para conquistas específicas de um mundo
}

export interface UserProgress {
  levelsCompleted: number[];
  curiositiesRead: number;
  dialogsCompleted: number;
  timePlayed: number;
  perfectLevels: number;
  totalStars: number;
  consecutiveDays: number;
  lastLoginDate: string;
  worldsCompleted: { [worldId: number]: boolean };
  totalMatches: number;
  achievements: {
    [achievementId: string]: {
      isUnlocked: boolean;
      progress: number;
    };
  };
  totalPoints: number;
}
