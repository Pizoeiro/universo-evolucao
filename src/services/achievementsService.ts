import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Achievement, UserProgress } from '../types/achievements';
import { achievements } from '../config/achievements/achievements';

export const achievementsService = {
  async getUserProgress(userId: string): Promise<UserProgress | null> {
    try {
      const userProgressRef = doc(db, 'achievements', userId);
      const userProgressDoc = await getDoc(userProgressRef);

      if (userProgressDoc.exists()) {
        return userProgressDoc.data() as UserProgress;
      }

      // Se não existir, cria um novo documento com o progresso inicial
      const initialProgress: UserProgress = {
        levelsCompleted: [],
        curiositiesRead: 0,
        dialogsCompleted: 0,
        timePlayed: 0,
        achievements: this.initializeAchievements(),
        totalPoints: 0,
        lastLoginDate: new Date().toISOString(),
        perfectLevels: 0,
        totalStars: 0,
        consecutiveDays: 0,
        worldsCompleted: {},
        totalMatches: 0
      };

      await setDoc(userProgressRef, initialProgress);
      return initialProgress;
    } catch (error) {
      console.error('Erro ao buscar progresso do usuário:', error);
      return null;
    }
  },

  async updateUserProgress(userId: string, progress: Partial<UserProgress>): Promise<void> {
    try {
      const userProgressRef = doc(db, 'achievements', userId);
      const currentProgress = await this.getUserProgress(userId);
      
      if (!currentProgress) return;

      // Atualiza o progresso
      const updatedProgress = { ...currentProgress, ...progress };
      
      // Verifica e atualiza as conquistas
      const updatedAchievements = this.checkAchievements(updatedProgress);
      updatedProgress.achievements = updatedAchievements;
      
      // Recalcula pontos totais
      updatedProgress.totalPoints = this.calculateTotalPoints(updatedAchievements);

      await updateDoc(userProgressRef, updatedProgress);
    } catch (error) {
      console.error('Erro ao atualizar progresso do usuário:', error);
    }
  },

  initializeAchievements() {
    const initialAchievements: UserProgress['achievements'] = {};
    achievements.forEach(achievement => {
      initialAchievements[achievement.id] = {
        isUnlocked: false,
        progress: 0
      };
    });
    return initialAchievements;
  },

  checkAchievements(progress: UserProgress) {
    const updatedAchievements = { ...progress.achievements };

    achievements.forEach(achievement => {
      const currentAchievement = updatedAchievements[achievement.id];
      let newProgress = 0;

      switch (achievement.requirement.type) {
        case 'levels_completed':
          newProgress = progress.levelsCompleted.length;
          break;
        case 'curiosities_read':
          newProgress = progress.curiositiesRead;
          break;
        case 'dialogs_completed':
          newProgress = progress.dialogsCompleted;
          break;
        case 'time_played':
          newProgress = progress.timePlayed;
          break;
      }

      const finalProgress = Math.max(newProgress, currentAchievement?.progress || 0);

      updatedAchievements[achievement.id] = {
        progress: finalProgress,
        isUnlocked: finalProgress >= achievement.requirement.value
      };
    });

    return updatedAchievements;
  },

  calculateTotalPoints(achievements: UserProgress['achievements']): number {
    return Object.entries(achievements).reduce((total, [achievementId, userAchievement]) => {
      if (userAchievement.isUnlocked) {
        const achievement = this.getAchievementById(achievementId);
        return total + (achievement?.rewardPoints || 0);
      }
      return total;
    }, 0);
  },

  getAchievementById(achievementId: string): Achievement | undefined {
    return achievements.find(a => a.id === achievementId);
  }
};
