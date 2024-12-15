import { Achievement } from '../../types/achievements';

export const achievements: Achievement[] = [
  // EXPLORAÇÃO - Tutorial e Primeiros Passos
  {
    id: 'first_step',
    title: 'Primeiro Passo',
    description: 'Complete o tutorial do jogo',
    icon: '🎓',
    requirement: { type: 'levels_completed', value: 1 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1,
    category: 'exploration',
    rewardPoints: 5
  },
  {
    id: 'space_beginner',
    title: 'Iniciante Espacial',
    description: 'Complete 3 níveis do jogo',
    icon: '🌱',
    requirement: { type: 'levels_completed', value: 3 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 3,
    category: 'exploration',
    rewardPoints: 10
  },

  // EXPLORAÇÃO - Progressão Inicial
  {
    id: 'space_cadet',
    title: 'Cadete Espacial',
    description: 'Complete 5 níveis do jogo',
    icon: '🚀',
    requirement: { type: 'levels_completed', value: 5 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'exploration',
    rewardPoints: 15
  },
  {
    id: 'space_pilot',
    title: 'Piloto Espacial',
    description: 'Complete 8 níveis do jogo',
    icon: '✨',
    requirement: { type: 'levels_completed', value: 8 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 8,
    category: 'exploration',
    rewardPoints: 20
  },

  // EXPLORAÇÃO - Progressão Intermediária
  {
    id: 'space_navigator',
    title: 'Navegador Espacial',
    description: 'Complete 12 níveis do jogo',
    icon: '🌍',
    requirement: { type: 'levels_completed', value: 12 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 12,
    category: 'exploration',
    rewardPoints: 25
  },
  {
    id: 'space_explorer',
    title: 'Explorador Espacial',
    description: 'Complete 16 níveis do jogo',
    icon: '🌎',
    requirement: { type: 'levels_completed', value: 16 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 16,
    category: 'exploration',
    rewardPoints: 30
  },

  // EXPLORAÇÃO - Progressão Avançada
  {
    id: 'space_captain',
    title: 'Capitão Espacial',
    description: 'Complete 20 níveis do jogo',
    icon: '👨‍🚀',
    requirement: { type: 'levels_completed', value: 20 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 20,
    category: 'exploration',
    rewardPoints: 40
  },
  {
    id: 'space_commander',
    title: 'Comandante do Espaço',
    description: 'Complete 25 níveis do jogo',
    icon: '🌌',
    requirement: { type: 'levels_completed', value: 25 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 25,
    category: 'exploration',
    rewardPoints: 50
  },

  // CONHECIMENTO - Curiosidades Básicas
  {
    id: 'curious_mind',
    title: 'Mente Curiosa',
    description: 'Leia 3 curiosidades diferentes',
    icon: '🤔',
    requirement: { type: 'curiosities_read', value: 3 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 3,
    category: 'knowledge',
    rewardPoints: 10
  },
  {
    id: 'space_student',
    title: 'Estudante Espacial',
    description: 'Leia 3 curiosidades espaciais',
    icon: '📚',
    requirement: { type: 'curiosities_read', value: 3 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 3,
    category: 'knowledge',
    rewardPoints: 10
  },

  // CONHECIMENTO - Progressão Inicial
  {
    id: 'knowledge_seeker_basic',
    title: 'Aprendiz do Conhecimento',
    description: 'Leia 6 curiosidades espaciais',
    icon: '🔍',
    requirement: { type: 'curiosities_read', value: 6 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 6,
    category: 'knowledge',
    rewardPoints: 15
  },
  {
    id: 'space_researcher',
    title: 'Pesquisador Espacial',
    description: 'Leia 9 curiosidades espaciais',
    icon: '🔭',
    requirement: { type: 'curiosities_read', value: 9 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 9,
    category: 'knowledge',
    rewardPoints: 20
  },

  // CONHECIMENTO - Progressão Intermediária
  {
    id: 'space_scholar',
    title: 'Estudioso do Espaço',
    description: 'Leia 12 curiosidades espaciais',
    icon: '📡',
    requirement: { type: 'curiosities_read', value: 12 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 12,
    category: 'knowledge',
    rewardPoints: 25
  },
  {
    id: 'space_scientist',
    title: 'Cientista Espacial',
    description: 'Leia 15 curiosidades espaciais',
    icon: '🛸',
    requirement: { type: 'curiosities_read', value: 15 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 15,
    category: 'knowledge',
    rewardPoints: 30
  },

  // DIÁLOGOS - Primeiros Passos
  {
    id: 'first_contact',
    title: 'Primeiro Contato',
    description: 'Complete seu primeiro diálogo espacial',
    icon: '💬',
    requirement: { type: 'dialogs_completed', value: 1 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1,
    category: 'knowledge',
    rewardPoints: 5
  },
  {
    id: 'space_friend',
    title: 'Amigo do Espaço',
    description: 'Complete 3 diálogos espaciais',
    icon: '👋',
    requirement: { type: 'dialogs_completed', value: 3 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 3,
    category: 'knowledge',
    rewardPoints: 10
  },

  // DIÁLOGOS - Progressão
  {
    id: 'space_communicator',
    title: 'Comunicador Espacial',
    description: 'Complete 5 diálogos espaciais',
    icon: '📱',
    requirement: { type: 'dialogs_completed', value: 5 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'knowledge',
    rewardPoints: 15
  },
  {
    id: 'space_diplomat',
    title: 'Diplomata Espacial',
    description: 'Complete 8 diálogos espaciais',
    icon: '🤝',
    requirement: { type: 'dialogs_completed', value: 8 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 8,
    category: 'knowledge',
    rewardPoints: 20
  },

  // DEDICAÇÃO - Sessões Curtas
  {
    id: 'space_visitor',
    title: 'Visitante Espacial',
    description: 'Explore o espaço por 5 minutos',
    icon: '⏱️',
    requirement: { type: 'time_played', value: 5 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'dedication',
    rewardPoints: 5
  },
  {
    id: 'space_enthusiast',
    title: 'Entusiasta Espacial',
    description: 'Explore o espaço por 15 minutos',
    icon: '⏰',
    requirement: { type: 'time_played', value: 15 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 15,
    category: 'dedication',
    rewardPoints: 10
  },

  // DEDICAÇÃO - Sessões Médias
  {
    id: 'space_adventurer',
    title: 'Aventureiro Espacial',
    description: 'Explore o espaço por 30 minutos',
    icon: '⌛',
    requirement: { type: 'time_played', value: 30 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 30,
    category: 'dedication',
    rewardPoints: 15
  },
  {
    id: 'space_devotee',
    title: 'Devoto Espacial',
    description: 'Explore o espaço por 45 minutos',
    icon: '🕐',
    requirement: { type: 'time_played', value: 45 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 45,
    category: 'dedication',
    rewardPoints: 20
  },

  // DEDICAÇÃO - Sessões Longas
  {
    id: 'space_veteran',
    title: 'Veterano Espacial',
    description: 'Explore o espaço por 1 hora',
    icon: '🕐',
    requirement: { type: 'time_played', value: 60 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 60,
    category: 'dedication',
    rewardPoints: 30
  },
  {
    id: 'space_master',
    title: 'Mestre do Espaço',
    description: 'Explore o espaço por 2 horas',
    icon: '👑',
    requirement: { type: 'time_played', value: 120 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 120,
    category: 'dedication',
    rewardPoints: 50
  },

  // EXPLORAÇÃO - Desafios de Perfeição
  {
    id: 'perfect_start',
    title: 'Início Perfeito',
    description: 'Complete 3 níveis seguidos sem errar',
    icon: '✨',
    requirement: { type: 'levels_completed', value: 3 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 3,
    category: 'perfection',
    rewardPoints: 25
  },
  {
    id: 'flawless_explorer',
    title: 'Explorador Impecável',
    description: 'Complete 5 níveis seguidos sem errar',
    icon: '💫',
    requirement: { type: 'levels_completed', value: 5 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'perfection',
    rewardPoints: 40
  },

  // EXPLORAÇÃO - Desafios de Velocidade
  {
    id: 'quick_thinker',
    title: 'Pensador Rápido',
    description: 'Complete 3 níveis em menos de 10 minutos',
    icon: '⚡',
    requirement: { type: 'levels_completed', value: 3 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 3,
    category: 'exploration',
    rewardPoints: 30
  },
  {
    id: 'speed_master',
    title: 'Mestre da Velocidade',
    description: 'Complete 5 níveis em menos de 15 minutos',
    icon: '🏃',
    requirement: { type: 'levels_completed', value: 5 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'exploration',
    rewardPoints: 45
  },

  // CONHECIMENTO - Maratona de Aprendizado
  {
    id: 'quick_learner',
    title: 'Aprendiz Veloz',
    description: 'Leia 5 curiosidades em 10 minutos',
    icon: '📚',
    requirement: { type: 'curiosities_read', value: 5 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'knowledge',
    rewardPoints: 25
  },
  {
    id: 'knowledge_master',
    title: 'Mestre do Conhecimento',
    description: 'Leia 10 curiosidades em 20 minutos',
    icon: '🎓',
    requirement: { type: 'curiosities_read', value: 10 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 10,
    category: 'knowledge',
    rewardPoints: 40
  },

  // CONHECIMENTO - Especialização
  {
    id: 'planet_expert',
    title: 'Especialista em Planetas',
    description: 'Leia todas as curiosidades sobre planetas',
    icon: '🌍',
    requirement: { type: 'curiosities_read', value: 8 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 8,
    category: 'knowledge',
    rewardPoints: 35
  },
  {
    id: 'star_expert',
    title: 'Especialista em Estrelas',
    description: 'Leia todas as curiosidades sobre estrelas',
    icon: '⭐',
    requirement: { type: 'curiosities_read', value: 8 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 8,
    category: 'knowledge',
    rewardPoints: 35
  },

  // DIÁLOGOS - Desafios de Comunicação
  {
    id: 'quick_talker',
    title: 'Comunicador Veloz',
    description: 'Complete 3 diálogos em 5 minutos',
    icon: '💨',
    requirement: { type: 'dialogs_completed', value: 3 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 3,
    category: 'knowledge',
    rewardPoints: 25
  },
  {
    id: 'dialog_master',
    title: 'Mestre do Diálogo',
    description: 'Complete 5 diálogos em 8 minutos',
    icon: '🗣️',
    requirement: { type: 'dialogs_completed', value: 5 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'knowledge',
    rewardPoints: 35
  },

  // DEDICAÇÃO - Desafios Diários
  {
    id: 'daily_explorer_short',
    title: 'Explorador Diário Iniciante',
    description: 'Jogue por 15 minutos em 3 dias diferentes',
    icon: '📅',
    requirement: { type: 'time_played', value: 45 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 45,
    category: 'dedication',
    rewardPoints: 30
  },
  {
    id: 'weekly_master',
    title: 'Mestre Semanal',
    description: 'Jogue por 30 minutos em 5 dias diferentes',
    icon: '📆',
    requirement: { type: 'time_played', value: 150 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 150,
    category: 'dedication',
    rewardPoints: 50
  },

  // DEDICAÇÃO - Maratonas
  {
    id: 'space_marathon',
    title: 'Maratonista Espacial',
    description: 'Jogue por 3 horas em um único dia',
    icon: '🏃‍♂️',
    requirement: { type: 'time_played', value: 180 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 180,
    category: 'dedication',
    rewardPoints: 60
  },
  {
    id: 'cosmic_dedication',
    title: 'Dedicação Cósmica',
    description: 'Jogue por 5 horas no total',
    icon: '🌠',
    requirement: { type: 'time_played', value: 300 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 300,
    category: 'dedication',
    rewardPoints: 100
  },

  // EXPLORAÇÃO - Progressão Avançada (continuação)
  {
    id: 'space_admiral',
    title: 'Almirante Espacial',
    description: 'Complete 30 níveis do jogo',
    icon: '🎖️',
    requirement: { type: 'levels_completed', value: 30 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 30,
    category: 'exploration',
    rewardPoints: 60
  },
  {
    id: 'space_fleet_commander',
    title: 'Comandante da Frota',
    description: 'Complete 35 níveis do jogo',
    icon: '⭐',
    requirement: { type: 'levels_completed', value: 35 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 35,
    category: 'exploration',
    rewardPoints: 70
  },
  {
    id: 'space_general',
    title: 'General do Espaço',
    description: 'Complete 40 níveis do jogo',
    icon: '🌟',
    requirement: { type: 'levels_completed', value: 40 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 40,
    category: 'exploration',
    rewardPoints: 80
  },
  {
    id: 'space_marshal',
    title: 'Marechal Espacial',
    description: 'Complete 45 níveis do jogo',
    icon: '✨',
    requirement: { type: 'levels_completed', value: 45 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 45,
    category: 'exploration',
    rewardPoints: 90
  },
  {
    id: 'space_overlord',
    title: 'Soberano do Espaço',
    description: 'Complete 50 níveis do jogo',
    icon: '👑',
    requirement: { type: 'levels_completed', value: 50 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 50,
    category: 'exploration',
    rewardPoints: 100
  },

  // EXPLORAÇÃO - Mestre do Universo
  {
    id: 'space_master_60',
    title: 'Mestre do Sistema Solar',
    description: 'Complete 60 níveis do jogo',
    icon: '🌞',
    requirement: { type: 'levels_completed', value: 60 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 60,
    category: 'exploration',
    rewardPoints: 120
  },
  {
    id: 'space_master_70',
    title: 'Mestre da Via Láctea',
    description: 'Complete 70 níveis do jogo',
    icon: '🌌',
    requirement: { type: 'levels_completed', value: 70 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 70,
    category: 'exploration',
    rewardPoints: 140
  },
  {
    id: 'space_master_80',
    title: 'Mestre do Grupo Local',
    description: 'Complete 80 níveis do jogo',
    icon: '🌠',
    requirement: { type: 'levels_completed', value: 80 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 80,
    category: 'exploration',
    rewardPoints: 160
  },
  {
    id: 'space_master_90',
    title: 'Mestre do Superaglomerado',
    description: 'Complete 90 níveis do jogo',
    icon: '💫',
    requirement: { type: 'levels_completed', value: 90 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 90,
    category: 'exploration',
    rewardPoints: 180
  },
  {
    id: 'space_master_100',
    title: 'Mestre do Universo Observable',
    description: 'Complete 100 níveis do jogo',
    icon: '🌌',
    requirement: { type: 'levels_completed', value: 100 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 100,
    category: 'exploration',
    rewardPoints: 200
  },

  // EXPLORAÇÃO - Conquistas Finais
  {
    id: 'space_master_110',
    title: 'Mestre do Multiverso',
    description: 'Complete 110 níveis do jogo',
    icon: '🎆',
    requirement: { type: 'levels_completed', value: 110 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 110,
    category: 'exploration',
    rewardPoints: 250
  },
  {
    id: 'space_master_120',
    title: 'Mestre Supremo do Cosmos',
    description: 'Complete todos os 120 níveis do jogo',
    icon: '👑',
    requirement: { type: 'levels_completed', value: 120 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 120,
    category: 'exploration',
    rewardPoints: 500
  },

  // EXPLORAÇÃO - Conquista Secreta
  {
    id: 'cosmic_perfection',
    title: 'Perfeição Cósmica',
    description: 'Complete todos os níveis com pontuação máxima',
    icon: '💎',
    requirement: { type: 'levels_completed', value: 120 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 120,
    category: 'exploration',
    rewardPoints: 1000
  },

  // Conquistas de Exploração
  {
    id: 'first_steps',
    title: 'Primeiros Passos',
    description: 'Complete seu primeiro nível',
    icon: '🌟',
    requirement: { type: 'levels_completed', value: 1 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1,
    category: 'exploration',
    rewardPoints: 10
  },
  {
    id: 'cosmic_explorer',
    title: 'Explorador Cósmico',
    description: 'Complete 5 níveis diferentes',
    icon: '🚀',
    requirement: { type: 'levels_completed', value: 5 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'exploration',
    rewardPoints: 50
  },
  {
    id: 'universe_master',
    title: 'Mestre do Universo',
    description: 'Complete 15 níveis diferentes',
    icon: '🌌',
    requirement: { type: 'levels_completed', value: 15 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 15,
    category: 'exploration',
    rewardPoints: 100
  },

  // Conquistas de Conhecimento
  {
    id: 'curious_mind_advanced',
    title: 'Mente Muito Curiosa',
    description: 'Leia 10 curiosidades diferentes',
    icon: '🤔',
    requirement: { type: 'curiosities_read', value: 10 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 10,
    category: 'knowledge',
    rewardPoints: 30
  },
  {
    id: 'knowledge_seeker_advanced',
    title: 'Buscador do Conhecimento',
    description: 'Leia 25 curiosidades diferentes',
    icon: '📚',
    requirement: { type: 'curiosities_read', value: 25 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 25,
    category: 'knowledge',
    rewardPoints: 75
  },
  {
    id: 'dialogue_master',
    title: 'Mestre do Diálogo',
    description: 'Complete 20 diálogos com personagens',
    icon: '💭',
    requirement: { type: 'dialogs_completed', value: 20 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 20,
    category: 'knowledge',
    rewardPoints: 40
  },
  {
    id: 'cosmic_scholar',
    title: 'Estudioso Cósmico',
    description: 'Complete 50 diálogos com personagens',
    icon: '🎓',
    requirement: { type: 'dialogs_completed', value: 50 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 50,
    category: 'knowledge',
    rewardPoints: 100
  },

  // Conquistas de Dedicação
  {
    id: 'dedicated_learner',
    title: 'Aprendiz Dedicado',
    description: 'Passe 1 hora explorando o universo',
    icon: '⏰',
    requirement: { type: 'time_played', value: 60 }, // em minutos
    isUnlocked: false,
    progress: 0,
    maxProgress: 60,
    category: 'dedication',
    rewardPoints: 50
  },
  {
    id: 'cosmic_enthusiast',
    title: 'Entusiasta Cósmico',
    description: 'Passe 3 horas explorando o universo',
    icon: '⭐',
    requirement: { type: 'time_played', value: 180 }, // em minutos
    isUnlocked: false,
    progress: 0,
    maxProgress: 180,
    category: 'dedication',
    rewardPoints: 100
  },
  {
    id: 'universe_devotee',
    title: 'Devoto do Universo',
    description: 'Passe 10 horas explorando o universo',
    icon: '🌠',
    requirement: { type: 'time_played', value: 600 }, // em minutos
    isUnlocked: false,
    progress: 0,
    maxProgress: 600,
    category: 'dedication',
    rewardPoints: 200
  },

  // Conquistas de Perfeição
  {
    id: 'perfect_level',
    title: 'Nível Perfeito',
    description: 'Complete um nível com 3 estrelas',
    icon: '⭐⭐⭐',
    requirement: { type: 'perfect_levels', value: 1 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1,
    category: 'perfection',
    rewardPoints: 25
  },
  {
    id: 'perfectionist',
    title: 'Perfeccionista',
    description: 'Complete 5 níveis com 3 estrelas',
    icon: '👑',
    requirement: { type: 'perfect_levels', value: 5 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'perfection',
    rewardPoints: 100
  },
  {
    id: 'cosmic_perfectionist',
    title: 'Perfeccionista Cósmico',
    description: 'Complete 10 níveis com 3 estrelas',
    icon: '🏆',
    requirement: { type: 'perfect_levels', value: 10 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 10,
    category: 'perfection',
    rewardPoints: 200
  },

  // Conquistas de Maestria (Longo Prazo)
  {
    id: 'world_master_1',
    title: 'Mestre do Mundo 1',
    description: 'Complete todos os níveis do Mundo 1 com 3 estrelas',
    category: 'mastery',
    icon: '🌟',
    requirement: {
      type: 'all_levels_world',
      value: 1,
      worldId: 1
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 100,
    maxProgress: 1
  },
  {
    id: 'world_master_2',
    title: 'Mestre do Mundo 2',
    description: 'Complete todos os níveis do Mundo 2 com 3 estrelas',
    category: 'mastery',
    icon: '🌟',
    requirement: {
      type: 'all_levels_world',
      value: 1,
      worldId: 2
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 100,
    maxProgress: 1
  },
  {
    id: 'world_master_3',
    title: 'Mestre do Mundo 3',
    description: 'Complete todos os níveis do Mundo 3 com 3 estrelas',
    category: 'mastery',
    icon: '🌟',
    requirement: {
      type: 'all_levels_world',
      value: 1,
      worldId: 3
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 100,
    maxProgress: 1
  },
  {
    id: 'world_master_4',
    title: 'Mestre do Mundo 4',
    description: 'Complete todos os níveis do Mundo 4 com 3 estrelas',
    category: 'mastery',
    icon: '🌟',
    requirement: {
      type: 'all_levels_world',
      value: 1,
      worldId: 4
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 100,
    maxProgress: 1
  },
  {
    id: 'world_master_5',
    title: 'Mestre do Mundo 5',
    description: 'Complete todos os níveis do Mundo 5 com 3 estrelas',
    category: 'mastery',
    icon: '🌟',
    requirement: {
      type: 'all_levels_world',
      value: 1,
      worldId: 5
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 100,
    maxProgress: 1
  },
  {
    id: 'world_master_6',
    title: 'Mestre do Mundo 6',
    description: 'Complete todos os níveis do Mundo 6 com 3 estrelas',
    category: 'mastery',
    icon: '🌟',
    requirement: {
      type: 'all_levels_world',
      value: 1,
      worldId: 6
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 100,
    maxProgress: 1
  },
  {
    id: 'world_master_7',
    title: 'Mestre do Mundo 7',
    description: 'Complete todos os níveis do Mundo 7 com 3 estrelas',
    category: 'mastery',
    icon: '🌟',
    requirement: {
      type: 'all_levels_world',
      value: 1,
      worldId: 7
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 100,
    maxProgress: 1
  },
  {
    id: 'world_master_8',
    title: 'Mestre do Mundo 8',
    description: 'Complete todos os níveis do Mundo 8 com 3 estrelas',
    category: 'mastery',
    icon: '🌟',
    requirement: {
      type: 'all_levels_world',
      value: 1,
      worldId: 8
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 100,
    maxProgress: 1
  },
  {
    id: 'world_master_9',
    title: 'Mestre do Mundo 9',
    description: 'Complete todos os níveis do Mundo 9 com 3 estrelas',
    category: 'mastery',
    icon: '🌟',
    requirement: {
      type: 'all_levels_world',
      value: 1,
      worldId: 9
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 100,
    maxProgress: 1
  },
  {
    id: 'world_master_10',
    title: 'Mestre do Mundo 10',
    description: 'Complete todos os níveis do Mundo 10 com 3 estrelas',
    category: 'mastery',
    icon: '🌟',
    requirement: {
      type: 'all_levels_world',
      value: 1,
      worldId: 10
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 100,
    maxProgress: 1
  },
  {
    id: 'star_collector',
    title: 'Colecionador de Estrelas',
    description: 'Acumule 50 estrelas no total',
    icon: '✨',
    requirement: { type: 'total_stars', value: 50 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 50,
    category: 'mastery',
    rewardPoints: 250
  },
  {
    id: 'star_master',
    title: 'Mestre das Estrelas',
    description: 'Acumule 100 estrelas no total',
    icon: '💫',
    requirement: { type: 'total_stars', value: 100 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 100,
    category: 'mastery',
    rewardPoints: 500
  },

  // Conquistas Lendárias (Muito Longo Prazo)
  {
    id: 'cosmic_legend',
    title: 'Lenda Cósmica',
    description: 'Acumule 1000 pontos de conquistas',
    icon: '🌟',
    requirement: { type: 'total_points', value: 1000 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1000,
    category: 'legendary',
    rewardPoints: 500
  },
  {
    id: 'daily_explorer',
    title: 'Explorador Diário',
    description: 'Jogue por 30 dias consecutivos',
    icon: '📅',
    requirement: { type: 'consecutive_days', value: 30 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 30,
    category: 'legendary',
    rewardPoints: 1000
  },
  {
    id: 'universe_legend',
    title: 'Lenda do Universo',
    description: 'Complete todos os níveis de todos os mundos com 3 estrelas',
    icon: '🌌',
    requirement: { type: 'perfect_levels', value: 100 }, // 10 níveis por mundo * 10 mundos
    isUnlocked: false,
    progress: 0,
    maxProgress: 100,
    category: 'legendary',
    rewardPoints: 2000
  },

  // Conquistas de Maestria (A cada 5 níveis)
  {
    id: 'mastery_5',
    title: 'Maestria: Iniciante',
    description: 'Complete 5 níveis com 3 estrelas',
    icon: '⭐',
    requirement: { type: 'perfect_levels', value: 5 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'mastery',
    rewardPoints: 50
  },
  {
    id: 'mastery_10',
    title: 'Maestria: Aprendiz',
    description: 'Complete 10 níveis com 3 estrelas',
    icon: '⭐',
    requirement: { type: 'perfect_levels', value: 10 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 10,
    category: 'mastery',
    rewardPoints: 100
  },
  {
    id: 'mastery_15',
    title: 'Maestria: Estudante',
    description: 'Complete 15 níveis com 3 estrelas',
    icon: '⭐',
    requirement: { type: 'perfect_levels', value: 15 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 15,
    category: 'mastery',
    rewardPoints: 150
  },
  {
    id: 'mastery_20',
    title: 'Maestria: Praticante',
    description: 'Complete 20 níveis com 3 estrelas',
    icon: '⭐',
    requirement: { type: 'perfect_levels', value: 20 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 20,
    category: 'mastery',
    rewardPoints: 200
  },
  {
    id: 'mastery_25',
    title: 'Maestria: Explorador',
    description: 'Complete 25 níveis com 3 estrelas',
    icon: '⭐⭐',
    requirement: { type: 'perfect_levels', value: 25 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 25,
    category: 'mastery',
    rewardPoints: 250
  },
  {
    id: 'mastery_30',
    title: 'Maestria: Aventureiro',
    description: 'Complete 30 níveis com 3 estrelas',
    icon: '⭐⭐',
    requirement: { type: 'perfect_levels', value: 30 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 30,
    category: 'mastery',
    rewardPoints: 300
  },
  {
    id: 'mastery_35',
    title: 'Maestria: Descobridor',
    description: 'Complete 35 níveis com 3 estrelas',
    icon: '⭐⭐',
    requirement: { type: 'perfect_levels', value: 35 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 35,
    category: 'mastery',
    rewardPoints: 350
  },
  {
    id: 'mastery_40',
    title: 'Maestria: Viajante',
    description: 'Complete 40 níveis com 3 estrelas',
    icon: '⭐⭐',
    requirement: { type: 'perfect_levels', value: 40 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 40,
    category: 'mastery',
    rewardPoints: 400
  },
  {
    id: 'mastery_45',
    title: 'Maestria: Pesquisador',
    description: 'Complete 45 níveis com 3 estrelas',
    icon: '⭐⭐',
    requirement: { type: 'perfect_levels', value: 45 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 45,
    category: 'mastery',
    rewardPoints: 450
  },
  {
    id: 'mastery_50',
    title: 'Maestria: Cientista',
    description: 'Complete 50 níveis com 3 estrelas',
    icon: '⭐⭐⭐',
    requirement: { type: 'perfect_levels', value: 50 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 50,
    category: 'mastery',
    rewardPoints: 500
  },
  {
    id: 'mastery_60',
    title: 'Maestria: Astrônomo',
    description: 'Complete 60 níveis com 3 estrelas',
    icon: '⭐⭐⭐',
    requirement: { type: 'perfect_levels', value: 60 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 60,
    category: 'mastery',
    rewardPoints: 600
  },
  {
    id: 'mastery_70',
    title: 'Maestria: Astrofísico',
    description: 'Complete 70 níveis com 3 estrelas',
    icon: '⭐⭐⭐',
    requirement: { type: 'perfect_levels', value: 70 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 70,
    category: 'mastery',
    rewardPoints: 700
  },
  {
    id: 'mastery_80',
    title: 'Maestria: Cosmólogo',
    description: 'Complete 80 níveis com 3 estrelas',
    icon: '⭐⭐⭐',
    requirement: { type: 'perfect_levels', value: 80 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 80,
    category: 'mastery',
    rewardPoints: 800
  },
  {
    id: 'mastery_90',
    title: 'Maestria: Guardião Estelar',
    description: 'Complete 90 níveis com 3 estrelas',
    icon: '⭐⭐⭐',
    requirement: { type: 'perfect_levels', value: 90 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 90,
    category: 'mastery',
    rewardPoints: 900
  },
  {
    id: 'mastery_100',
    title: 'Maestria: Mestre das Galáxias',
    description: 'Complete 100 níveis com 3 estrelas',
    icon: '🌌',
    requirement: { type: 'perfect_levels', value: 100 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 100,
    category: 'mastery',
    rewardPoints: 1000
  },
  {
    id: 'mastery_120',
    title: 'Maestria: Mestre do Cosmos',
    description: 'Complete 120 níveis com 3 estrelas',
    icon: '🌌✨',
    requirement: { type: 'perfect_levels', value: 120 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 120,
    category: 'mastery',
    rewardPoints: 1200
  },
  {
    id: 'mastery_140',
    title: 'Maestria: Mestre do Universo',
    description: 'Complete 140 níveis com 3 estrelas',
    icon: '🌌🌟',
    requirement: { type: 'perfect_levels', value: 140 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 140,
    category: 'mastery',
    rewardPoints: 1400
  },
  {
    id: 'mastery_160',
    title: 'Maestria: Mestre do Multiverso',
    description: 'Complete 160 níveis com 3 estrelas',
    icon: '🌌💫',
    requirement: { type: 'perfect_levels', value: 160 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 160,
    category: 'mastery',
    rewardPoints: 1600
  },
  {
    id: 'mastery_180',
    title: 'Maestria: Mestre da Realidade',
    description: 'Complete 180 níveis com 3 estrelas',
    icon: '🌌⚡',
    requirement: { type: 'perfect_levels', value: 180 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 180,
    category: 'mastery',
    rewardPoints: 1800
  },
  {
    id: 'mastery_200',
    title: 'Maestria: Mestre Supremo',
    description: 'Complete todos os 200 níveis com 3 estrelas',
    icon: '👑🌌',
    requirement: { type: 'perfect_levels', value: 200 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 200,
    category: 'mastery',
    rewardPoints: 2000
  },
  // Conquistas de Maestria (Matches)
  {
    id: 'mastery_matches_5',
    title: 'Combinador Iniciante',
    description: 'Faça 5 matches corretos',
    icon: '🎯',
    requirement: { type: 'total_matches', value: 5 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 5,
    category: 'mastery',
    rewardPoints: 50
  },
  {
    id: 'mastery_matches_10',
    title: 'Combinador Aprendiz',
    description: 'Faça 10 matches corretos',
    icon: '🎯',
    requirement: { type: 'total_matches', value: 10 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 10,
    category: 'mastery',
    rewardPoints: 100
  },
  {
    id: 'mastery_matches_25',
    title: 'Combinador Dedicado',
    description: 'Faça 25 matches corretos',
    icon: '🎯',
    requirement: { type: 'total_matches', value: 25 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 25,
    category: 'mastery',
    rewardPoints: 250
  },
  {
    id: 'mastery_matches_50',
    title: 'Combinador Experiente',
    description: 'Faça 50 matches corretos',
    icon: '🎯✨',
    requirement: { type: 'total_matches', value: 50 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 50,
    category: 'mastery',
    rewardPoints: 500
  },
  {
    id: 'mastery_matches_100',
    title: 'Combinador Mestre',
    description: 'Faça 100 matches corretos',
    icon: '🎯💫',
    requirement: { type: 'total_matches', value: 100 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 100,
    category: 'mastery',
    rewardPoints: 1000
  },
  {
    id: 'mastery_matches_200',
    title: 'Combinador Elite',
    description: 'Faça 200 matches corretos',
    icon: '🎯🌟',
    requirement: { type: 'total_matches', value: 200 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 200,
    category: 'mastery',
    rewardPoints: 2000
  },
  {
    id: 'mastery_matches_300',
    title: 'Combinador Supremo',
    description: 'Faça 300 matches corretos',
    icon: '🎯👑',
    requirement: { type: 'total_matches', value: 300 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 300,
    category: 'mastery',
    rewardPoints: 3000
  },
  {
    id: 'mastery_matches_400',
    title: 'Combinador Lendário',
    description: 'Faça 400 matches corretos',
    icon: '🎯⚡',
    requirement: { type: 'total_matches', value: 400 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 400,
    category: 'mastery',
    rewardPoints: 4000
  },
  {
    id: 'mastery_matches_500',
    title: 'Combinador Mítico',
    description: 'Faça 500 matches corretos',
    icon: '🎯🌠',
    requirement: { type: 'total_matches', value: 500 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 500,
    category: 'mastery',
    rewardPoints: 5000
  },
  {
    id: 'mastery_matches_600',
    title: 'Combinador Celestial',
    description: 'Faça 600 matches corretos',
    icon: '🎯🌌',
    requirement: { type: 'total_matches', value: 600 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 600,
    category: 'mastery',
    rewardPoints: 6000
  },
  {
    id: 'mastery_matches_700',
    title: 'Combinador Cósmico',
    description: 'Faça 700 matches corretos',
    icon: '🎯💫',
    requirement: { type: 'total_matches', value: 700 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 700,
    category: 'mastery',
    rewardPoints: 7000
  },
  {
    id: 'mastery_matches_800',
    title: 'Combinador Universal',
    description: 'Faça 800 matches corretos',
    icon: '🎯🌍',
    requirement: { type: 'total_matches', value: 800 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 800,
    category: 'mastery',
    rewardPoints: 8000
  },
  {
    id: 'mastery_matches_900',
    title: 'Combinador Multiversal',
    description: 'Faça 900 matches corretos',
    icon: '🎯🌎',
    requirement: { type: 'total_matches', value: 900 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 900,
    category: 'mastery',
    rewardPoints: 9000
  },
  {
    id: 'mastery_matches_1000',
    title: 'Combinador Divino',
    description: 'Faça 1000 matches corretos',
    icon: '👑🎯',
    requirement: { type: 'total_matches', value: 1000 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1000,
    category: 'mastery',
    rewardPoints: 10000
  },
  {
    id: 'mastery_matches_1100',
    title: 'Combinador Transcendental',
    description: 'Faça 1100 matches corretos',
    icon: '🌠🎯',
    requirement: { type: 'total_matches', value: 1100 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1100,
    category: 'mastery',
    rewardPoints: 11000
  },
  {
    id: 'mastery_matches_1200',
    title: 'Combinador Dimensional',
    description: 'Faça 1200 matches corretos',
    icon: '🌌🎯',
    requirement: { type: 'total_matches', value: 1200 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1200,
    category: 'mastery',
    rewardPoints: 12000
  },
  {
    id: 'mastery_matches_1300',
    title: 'Combinador do Infinito',
    description: 'Faça 1300 matches corretos',
    icon: '♾️🎯',
    requirement: { type: 'total_matches', value: 1300 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1300,
    category: 'mastery',
    rewardPoints: 13000
  },
  {
    id: 'mastery_matches_1400',
    title: 'Combinador Quântico',
    description: 'Faça 1400 matches corretos',
    icon: '⚛️🎯',
    requirement: { type: 'total_matches', value: 1400 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1400,
    category: 'mastery',
    rewardPoints: 14000
  },
  {
    id: 'mastery_matches_1500',
    title: 'Combinador Primordial',
    description: 'Faça 1500 matches corretos',
    icon: '💫🎯',
    requirement: { type: 'total_matches', value: 1500 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1500,
    category: 'mastery',
    rewardPoints: 15000
  },
  {
    id: 'mastery_matches_1600',
    title: 'Combinador da Eternidade',
    description: 'Faça 1600 matches corretos',
    icon: '🌟🎯',
    requirement: { type: 'total_matches', value: 1600 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1600,
    category: 'mastery',
    rewardPoints: 16000
  },
  {
    id: 'mastery_matches_1700',
    title: 'Combinador do Destino',
    description: 'Faça 1700 matches corretos',
    icon: '⭐🎯',
    requirement: { type: 'total_matches', value: 1700 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1700,
    category: 'mastery',
    rewardPoints: 17000
  },
  {
    id: 'mastery_matches_1800',
    title: 'Combinador da Criação',
    description: 'Faça 1800 matches corretos',
    icon: '✨🎯',
    requirement: { type: 'total_matches', value: 1800 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1800,
    category: 'mastery',
    rewardPoints: 18000
  },
  {
    id: 'mastery_matches_1900',
    title: 'Combinador do Absoluto',
    description: 'Faça 1900 matches corretos',
    icon: '💥🎯',
    requirement: { type: 'total_matches', value: 1900 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 1900,
    category: 'mastery',
    rewardPoints: 19000
  },
  {
    id: 'mastery_matches_2000',
    title: 'Combinador Supremo do Universo',
    description: 'Faça 2000 matches corretos - A maior conquista de matches possível!',
    icon: '👑🎯💫',
    requirement: { type: 'total_matches', value: 2000 },
    isUnlocked: false,
    progress: 0,
    maxProgress: 2000,
    category: 'mastery',
    rewardPoints: 25000
  },
  // Conquistas de Maestria (Aprendiz do Mundo)
  {
    id: 'world_apprentice_1',
    title: 'Aprendiz do Mundo 1',
    description: 'Complete todos os níveis do Mundo 1 com pelo menos 1 estrela',
    category: 'mastery',
    icon: '⭐',
    requirement: {
      type: 'all_levels_world_one_star',
      value: 1,
      worldId: 1
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 50,
    maxProgress: 1
  },
  {
    id: 'world_apprentice_2',
    title: 'Aprendiz do Mundo 2',
    description: 'Complete todos os níveis do Mundo 2 com pelo menos 1 estrela',
    category: 'mastery',
    icon: '⭐',
    requirement: {
      type: 'all_levels_world_one_star',
      value: 1,
      worldId: 2
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 50,
    maxProgress: 1
  },
  {
    id: 'world_apprentice_3',
    title: 'Aprendiz do Mundo 3',
    description: 'Complete todos os níveis do Mundo 3 com pelo menos 1 estrela',
    category: 'mastery',
    icon: '⭐',
    requirement: {
      type: 'all_levels_world_one_star',
      value: 1,
      worldId: 3
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 50,
    maxProgress: 1
  },
  {
    id: 'world_apprentice_4',
    title: 'Aprendiz do Mundo 4',
    description: 'Complete todos os níveis do Mundo 4 com pelo menos 1 estrela',
    category: 'mastery',
    icon: '⭐',
    requirement: {
      type: 'all_levels_world_one_star',
      value: 1,
      worldId: 4
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 50,
    maxProgress: 1
  },
  {
    id: 'world_apprentice_5',
    title: 'Aprendiz do Mundo 5',
    description: 'Complete todos os níveis do Mundo 5 com pelo menos 1 estrela',
    category: 'mastery',
    icon: '⭐',
    requirement: {
      type: 'all_levels_world_one_star',
      value: 1,
      worldId: 5
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 50,
    maxProgress: 1
  },
  {
    id: 'world_apprentice_6',
    title: 'Aprendiz do Mundo 6',
    description: 'Complete todos os níveis do Mundo 6 com pelo menos 1 estrela',
    category: 'mastery',
    icon: '⭐',
    requirement: {
      type: 'all_levels_world_one_star',
      value: 1,
      worldId: 6
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 50,
    maxProgress: 1
  },
  {
    id: 'world_apprentice_7',
    title: 'Aprendiz do Mundo 7',
    description: 'Complete todos os níveis do Mundo 7 com pelo menos 1 estrela',
    category: 'mastery',
    icon: '⭐',
    requirement: {
      type: 'all_levels_world_one_star',
      value: 1,
      worldId: 7
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 50,
    maxProgress: 1
  },
  {
    id: 'world_apprentice_8',
    title: 'Aprendiz do Mundo 8',
    description: 'Complete todos os níveis do Mundo 8 com pelo menos 1 estrela',
    category: 'mastery',
    icon: '⭐',
    requirement: {
      type: 'all_levels_world_one_star',
      value: 1,
      worldId: 8
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 50,
    maxProgress: 1
  },
  {
    id: 'world_apprentice_9',
    title: 'Aprendiz do Mundo 9',
    description: 'Complete todos os níveis do Mundo 9 com pelo menos 1 estrela',
    category: 'mastery',
    icon: '⭐',
    requirement: {
      type: 'all_levels_world_one_star',
      value: 1,
      worldId: 9
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 50,
    maxProgress: 1
  },
  {
    id: 'world_apprentice_10',
    title: 'Aprendiz do Mundo 10',
    description: 'Complete todos os níveis do Mundo 10 com pelo menos 1 estrela',
    category: 'mastery',
    icon: '⭐',
    requirement: {
      type: 'all_levels_world_one_star',
      value: 1,
      worldId: 10
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 50,
    maxProgress: 1
  },
  // Conquistas de Maestria (Explorador do Mundo - 2 estrelas)
  {
    id: 'world_explorer_1',
    title: 'Explorador do Mundo 1',
    description: 'Complete todos os níveis do Mundo 1 com pelo menos 2 estrelas',
    category: 'mastery',
    icon: '⭐⭐',
    requirement: {
      type: 'all_levels_world_two_stars',
      value: 1,
      worldId: 1
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 75,
    maxProgress: 1
  },
  {
    id: 'world_explorer_2',
    title: 'Explorador do Mundo 2',
    description: 'Complete todos os níveis do Mundo 2 com pelo menos 2 estrelas',
    category: 'mastery',
    icon: '⭐⭐',
    requirement: {
      type: 'all_levels_world_two_stars',
      value: 1,
      worldId: 2
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 75,
    maxProgress: 1
  },
  {
    id: 'world_explorer_3',
    title: 'Explorador do Mundo 3',
    description: 'Complete todos os níveis do Mundo 3 com pelo menos 2 estrelas',
    category: 'mastery',
    icon: '⭐⭐',
    requirement: {
      type: 'all_levels_world_two_stars',
      value: 1,
      worldId: 3
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 75,
    maxProgress: 1
  },
  {
    id: 'world_explorer_4',
    title: 'Explorador do Mundo 4',
    description: 'Complete todos os níveis do Mundo 4 com pelo menos 2 estrelas',
    category: 'mastery',
    icon: '⭐⭐',
    requirement: {
      type: 'all_levels_world_two_stars',
      value: 1,
      worldId: 4
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 75,
    maxProgress: 1
  },
  {
    id: 'world_explorer_5',
    title: 'Explorador do Mundo 5',
    description: 'Complete todos os níveis do Mundo 5 com pelo menos 2 estrelas',
    category: 'mastery',
    icon: '⭐⭐',
    requirement: {
      type: 'all_levels_world_two_stars',
      value: 1,
      worldId: 5
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 75,
    maxProgress: 1
  },
  {
    id: 'world_explorer_6',
    title: 'Explorador do Mundo 6',
    description: 'Complete todos os níveis do Mundo 6 com pelo menos 2 estrelas',
    category: 'mastery',
    icon: '⭐⭐',
    requirement: {
      type: 'all_levels_world_two_stars',
      value: 1,
      worldId: 6
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 75,
    maxProgress: 1
  },
  {
    id: 'world_explorer_7',
    title: 'Explorador do Mundo 7',
    description: 'Complete todos os níveis do Mundo 7 com pelo menos 2 estrelas',
    category: 'mastery',
    icon: '⭐⭐',
    requirement: {
      type: 'all_levels_world_two_stars',
      value: 1,
      worldId: 7
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 75,
    maxProgress: 1
  },
  {
    id: 'world_explorer_8',
    title: 'Explorador do Mundo 8',
    description: 'Complete todos os níveis do Mundo 8 com pelo menos 2 estrelas',
    category: 'mastery',
    icon: '⭐⭐',
    requirement: {
      type: 'all_levels_world_two_stars',
      value: 1,
      worldId: 8
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 75,
    maxProgress: 1
  },
  {
    id: 'world_explorer_9',
    title: 'Explorador do Mundo 9',
    description: 'Complete todos os níveis do Mundo 9 com pelo menos 2 estrelas',
    category: 'mastery',
    icon: '⭐⭐',
    requirement: {
      type: 'all_levels_world_two_stars',
      value: 1,
      worldId: 9
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 75,
    maxProgress: 1
  },
  {
    id: 'world_explorer_10',
    title: 'Explorador do Mundo 10',
    description: 'Complete todos os níveis do Mundo 10 com pelo menos 2 estrelas',
    category: 'mastery',
    icon: '⭐⭐',
    requirement: {
      type: 'all_levels_world_two_stars',
      value: 1,
      worldId: 10
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 75,
    maxProgress: 1
  },
  {
    id: 'world_master_1',
    title: 'Mestre do Mundo 1',
    description: 'Complete todos os níveis do Mundo 1 com 3 estrelas',
    category: 'mastery',
    icon: '🌟',
    requirement: {
      type: 'all_levels_world',
      value: 1,
      worldId: 1
    },
    isUnlocked: false,
    progress: 0,
    rewardPoints: 100,
    maxProgress: 1
  }
];
