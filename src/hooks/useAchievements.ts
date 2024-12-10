import { useState, useEffect } from 'react';
import { Achievement, UserProgress } from '../types/achievements';
import { achievements } from '../config/achievements/achievements';
import { achievementsService } from '../services/achievementsService';
import { useAuth } from './useAuth';
import { worldLevels } from '../config/levels';

export const useAchievements = () => {
  const { user } = useAuth();
  const [userProgress, setUserProgress] = useState<UserProgress>({
    levelsCompleted: [],
    curiositiesRead: 0,
    dialogsCompleted: 0,
    timePlayed: 0,
    perfectLevels: 0,
    totalStars: 0,
    consecutiveDays: 0,
    lastLoginDate: new Date().toISOString(),
    worldsCompleted: {},
    achievements: {},
    totalPoints: 0,
    totalMatches: 0
  });

  // Verifica login diário
  useEffect(() => {
    const checkDailyLogin = async () => {
      if (!user) return;

      const today = new Date();
      const lastLogin = new Date(userProgress.lastLoginDate);
      
      // Se é o primeiro login do dia
      if (today.toDateString() !== lastLogin.toDateString()) {
        const isConsecutive = 
          today.getTime() - lastLogin.getTime() <= 24 * 60 * 60 * 1000;

        const newProgress = {
          ...userProgress,
          consecutiveDays: isConsecutive ? userProgress.consecutiveDays + 1 : 1,
          lastLoginDate: today.toISOString()
        };

        setUserProgress(newProgress);
        await achievementsService.updateUserProgress(user.uid, newProgress);
        await checkAchievements();
      }
    };

    checkDailyLogin();
  }, [user]);

  // Carrega o progresso do usuário do Firebase
  useEffect(() => {
    const loadUserProgress = async () => {
      if (!user) return;

      const progress = await achievementsService.getUserProgress(user.uid);
      if (progress) {
        setUserProgress(progress);
      }
    };

    loadUserProgress();
  }, [user]);

  // Verifica conquistas após qualquer atualização de progresso
  const checkAchievements = async () => {
    if (!user) return userProgress.achievements;

    const newAchievements = { ...userProgress.achievements };
    let totalPoints = 0;

    achievements.forEach((achievement) => {
      let progress = 0;

      switch (achievement.requirement.type) {
        case 'levels_completed':
          progress = userProgress.levelsCompleted.length;
          break;
        case 'curiosities_read':
          progress = userProgress.curiositiesRead;
          break;
        case 'dialogs_completed':
          progress = userProgress.dialogsCompleted;
          break;
        case 'time_played':
          progress = userProgress.timePlayed;
          break;
        case 'perfect_levels':
          progress = userProgress.perfectLevels;
          break;
        case 'total_stars':
          progress = userProgress.totalStars;
          break;
        case 'consecutive_days':
          progress = userProgress.consecutiveDays;
          break;
        case 'all_levels_world':
          if (achievement.requirement.worldId !== undefined) {
            const worldId = achievement.requirement.worldId;
            const worldLevelCount = Object.keys(worldLevels[worldId] || {}).length;
            const completedInWorld = userProgress.levelsCompleted.filter(
              levelId => Math.floor(levelId / 100) === worldId
            ).length;
            progress = completedInWorld === worldLevelCount ? 1 : 0;
          }
          break;
        case 'all_levels_world_one_star':
          if (achievement.requirement.worldId !== undefined) {
            const worldId = achievement.requirement.worldId;
            const worldLevelCount = Object.keys(worldLevels[worldId] || {}).length;
            const completedInWorld = userProgress.levelsCompleted.filter(
              levelId => {
                const worldOfLevel = Math.floor(levelId / 100);
                return worldOfLevel === worldId;
              }
            ).length;
            progress = completedInWorld === worldLevelCount ? 1 : 0;
          }
          break;
        case 'all_levels_world_two_stars':
          if (achievement.requirement.worldId !== undefined) {
            const worldId = achievement.requirement.worldId;
            const worldLevelCount = Object.keys(worldLevels[worldId] || {}).length;
            const completedInWorld = userProgress.levelsCompleted.filter(
              levelId => {
                const worldOfLevel = Math.floor(levelId / 100);
                return worldOfLevel === worldId;
              }
            ).length;
            progress = completedInWorld === worldLevelCount ? 1 : 0;
          }
          break;
        case 'total_matches':
          progress = userProgress.totalMatches || 0;
          break;
      }

      const isUnlocked = progress >= achievement.requirement.value;

      newAchievements[achievement.id] = {
        isUnlocked,
        progress: Math.min(progress, achievement.requirement.value)
      };

      if (isUnlocked) {
        totalPoints += achievement.rewardPoints;
      }
    });

    // Atualiza o Firebase com as novas conquistas
    await achievementsService.updateUserProgress(user.uid, {
      achievements: newAchievements,
      totalPoints
    });

    return newAchievements;
  };

  // Funções para atualizar o progresso
  const updateProgress = {
    completeLevel: async (levelId: number, stars: number = 0) => {
      if (!user) return;

      if (!userProgress.levelsCompleted.includes(levelId)) {
        const newProgress = {
          ...userProgress,
          levelsCompleted: [...userProgress.levelsCompleted, levelId],
          totalStars: userProgress.totalStars + stars
        };

        // Se completou com 3 estrelas, incrementa perfectLevels
        if (stars === 3) {
          newProgress.perfectLevels = userProgress.perfectLevels + 1;
        }

        // Verifica se completou todos os níveis do mundo com 3 estrelas
        const worldId = Math.floor(levelId / 10) + 1;
        const worldLevelsCount = worldLevels[worldId]?.levels?.length || 0;
        
        if (worldLevelsCount > 0) {
          const worldLevelIds = Array.from(
            { length: worldLevelsCount }, 
            (_, i) => (worldId - 1) * 10 + i
          );
          
          const allWorldLevelsPerfect = worldLevelIds.every(id => 
            (id === levelId && stars === 3) || // nível atual
            userProgress.levelsCompleted.includes(id) // níveis já completados
          );

          if (allWorldLevelsPerfect) {
            newProgress.worldsCompleted = {
              ...newProgress.worldsCompleted,
              [worldId]: true
            };
          }
        }
        
        setUserProgress(newProgress);
        await achievementsService.updateUserProgress(user.uid, newProgress);
        await checkAchievements();
      }
    },

    readCuriosity: async () => {
      if (!user) return;

      const newProgress = {
        ...userProgress,
        curiositiesRead: userProgress.curiositiesRead + 1
      };
      
      setUserProgress(newProgress);
      await achievementsService.updateUserProgress(user.uid, newProgress);
      await checkAchievements();
    },

    completeDialog: async () => {
      if (!user) return;

      const newProgress = {
        ...userProgress,
        dialogsCompleted: userProgress.dialogsCompleted + 1
      };
      
      setUserProgress(newProgress);
      await achievementsService.updateUserProgress(user.uid, newProgress);
      await checkAchievements();
    },

    updateTimePlayed: async (minutes: number) => {
      if (!user) return;

      const newProgress = {
        ...userProgress,
        timePlayed: userProgress.timePlayed + minutes
      };
      
      setUserProgress(newProgress);
      await achievementsService.updateUserProgress(user.uid, newProgress);
      await checkAchievements();
    }
  };

  const updateMatches = async () => {
    if (!user) return;

    try {
      // Incrementa o contador de matches
      const newProgress = {
        ...userProgress,
        totalMatches: (userProgress.totalMatches || 0) + 1
      };

      // Atualiza o estado local primeiro
      setUserProgress(newProgress);

      // Atualiza no Firebase
      await achievementsService.updateUserProgress(user.uid, {
        totalMatches: newProgress.totalMatches
      });

      // Verifica conquistas após a atualização
      const updatedAchievements = await checkAchievements();
      
      // Atualiza o estado local com as novas conquistas
      setUserProgress(prev => ({
        ...prev,
        achievements: updatedAchievements
      }));
    } catch (error) {
      console.error('Erro ao atualizar matches:', error);
    }
  };

  // Retorna as conquistas desbloqueadas
  const getUnlockedAchievements = (): Achievement[] => {
    return achievements.filter(
      achievement => userProgress.achievements[achievement.id]?.isUnlocked
    );
  };

  // Retorna o progresso de uma conquista específica
  const getAchievementProgress = (achievementId: string) => {
    const achievement = achievements.find(a => a.id === achievementId);
    if (!achievement) return null;

    const progress = userProgress.achievements[achievementId]?.progress || 0;
    return {
      current: progress,
      max: achievement.maxProgress,
      percentage: (progress / achievement.maxProgress) * 100
    };
  };

  return {
    userProgress,
    updateProgress,
    updateMatches,
    getUnlockedAchievements,
    getAchievementProgress
  };
};
