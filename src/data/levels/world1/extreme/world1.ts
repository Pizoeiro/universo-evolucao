import { World } from '../../types'

export const world1Extreme: World = {
  name: 'O Grande Início - MODO EXTREMO',
  description: 'Desafie-se no modo extremo do Big Bang! Uma experiência ainda mais intensa onde cada movimento conta e a precisão é fundamental.',
  icon: '💥',
  gridSize: 8,
  specialEmoji: '✨',
  explosionRadius: 8,
  combinations: [
    {
      emoji: '⚛️',
      name: 'Átomo Primordial',
      points: 150,
      description: 'A menor unidade da matéria'
    },
    {
      emoji: '⚡',
      name: 'Energia Fundamental',
      points: 175,
      description: 'Força que move o universo'
    },
    {
      emoji: '✨',
      name: 'Centelha Cósmica',
      points: 200,
      description: 'Brilho das primeiras energias'
    },
    {
      emoji: '💥',
      name: 'Explosão Primordial',
      points: 250,
      description: 'O poder do Big Bang'
    },
    {
      emoji: '🌠',
      name: 'Estrela Nascente',
      points: 225,
      description: 'O nascimento de uma estrela'
    },
    {
      emoji: '🌌',
      name: 'Nebulosa Cósmica',
      points: 300,
      description: 'Berçário de estrelas'
    },
    {
      emoji: '🌟',
      name: 'Partícula Quântica',
      points: 300,
      description: 'Uma partícula em superposição'
    },
    {
      emoji: '💫',
      name: 'Explosão Estelar',
      points: 500,
      description: 'A morte espetacular de uma estrela massiva'
    },
    {
      emoji: '🌊',
      name: 'Onda de Choque',
      points: 550,
      description: 'Uma onda de energia que atravessa o cosmos'
    },
    {
      emoji: '🌑',
      name: 'Matéria Escura',
      points: 600,
      description: 'A misteriosa força que mantém as galáxias unidas'
    },
    {
      emoji: '🕳️',
      name: 'Singularidade',
      points: 700,
      description: 'O ponto onde o espaço-tempo se curva infinitamente'
    }
  ],
  levels: [
    {
      id: 1,
      name: 'Ponto Zero - Extremo',
      description: 'Concentração máxima de energia em condições extremas',
      story: 'No modo extremo, a singularidade inicial é ainda mais instável. Cada movimento deve ser perfeitamente calculado para controlar a energia primordial do universo.',
      icon: '⚫️',
      magicaCosmicaCount: 3,
      gridSize: 7,
      starObjectives: {
        one: {
          description: 'Faça 8 matches de energia concentrada e alcance 1000 pontos',
          emoji: '⚫️',
          requiredMatches: 8,
          points: 10000,
          maxMoves: 30
        },
        two: {
          description: 'Faça 12 matches de energia concentrada e alcance 2000 pontos',
          emoji: '⚫️',
          requiredMatches: 12,
          points: 20000,
          maxMoves: 25
        },
        three: {
          description: 'Faça 15 matches de energia concentrada e alcance 3000 pontos',
          emoji: '⚫️',
          requiredMatches: 15,
          points: 30000,
          maxMoves: 20
        }
      }
    },
    {
      id: 2,
      name: 'Explosão Primordial - Extremo',
      description: 'O Big Bang em sua forma mais intensa',
      story: 'A explosão inicial agora é muito mais poderosa. Você precisará de habilidade excepcional para controlar a liberação de energia.',
      icon: '💥',
      magicaCosmicaCount: 3,
      gridSize: 8,
      starObjectives: {
        one: {
          description: 'Faça 5 matches de explosão primordial e alcance 1500 pontos',
          emoji: '💥',
          requiredMatches: 5,
          points: 15000,
          maxMoves: 35
        },
        two: {
          description: 'Faça 7 matches de explosão primordial e alcance 2500 pontos',
          emoji: '💥',
          requiredMatches: 7,
          points: 25000,
          maxMoves: 30
        },
        three: {
          description: 'Faça 9 matches de explosão primordial e alcance 3500 pontos',
          emoji: '💥',
          requiredMatches: 9,
          points: 35000,
          maxMoves: 25
        }
      }
    },
    {
      id: 3,
      name: 'Sopa Quântica - Extremo',
      description: 'Um caldeirão de partículas em estado crítico',
      story: 'No modo extremo, a sopa quântica é ainda mais instável. Cada movimento pode desencadear reações em cadeia imprevisíveis.',
      icon: '🌟',
      magicaCosmicaCount: 3,
      gridSize: 9,
      starObjectives: {
        one: {
          description: 'Faça 6 matches de partículas quânticas e alcance 2000 pontos',
          emoji: '🌟',
          requiredMatches: 6,
          points: 20000,
          maxMoves: 40
        },
        two: {
          description: 'Faça 9 matches de partículas quânticas e alcance 3000 pontos',
          emoji: '🌟',
          requiredMatches: 9,
          points: 30000,
          maxMoves: 35
        },
        three: {
          description: 'Faça 12 matches de partículas quânticas e alcance 4000 pontos',
          emoji: '🌟',
          requiredMatches: 12,
          points: 40000,
          maxMoves: 30
        }
      }
    },
    {
      id: 4,
      name: 'Inflação Cósmica - Extremo',
      description: 'Expansão exponencial em ritmo frenético',
      story: 'A inflação cósmica no modo extremo é ainda mais violenta. O universo se expande tão rapidamente que você precisa agir com precisão absoluta para manter o controle.',
      icon: '🌌',
      magicaCosmicaCount: 3,
      gridSize: 10,
      starObjectives: {
        one: {
          description: 'Faça 5 matches de expansão rápida e alcance 2500 pontos',
          emoji: '🌌',
          requiredMatches: 5,
          points: 25000,
          maxMoves: 45
        },
        two: {
          description: 'Faça 7 matches de expansão rápida e alcance 3500 pontos',
          emoji: '🌌',
          requiredMatches: 7,
          points: 35000,
          maxMoves: 40
        },
        three: {
          description: 'Faça 9 matches de expansão rápida e alcance 4500 pontos',
          emoji: '🌌',
          requiredMatches: 9,
          points: 45000,
          maxMoves: 35
        }
      }
    },
    {
      id: 5,
      name: 'Era da Radiação - Extremo',
      description: 'Domínio da luz em sua forma mais intensa',
      story: 'Na versão extrema da Era da Radiação, a energia é tão intensa que cada movimento pode desencadear uma cascata de fótons. A precisão é crucial para não ser ofuscado pelo brilho primordial.',
      icon: '☀️',
      magicaCosmicaCount: 3,
      gridSize: 11,
      starObjectives: {
        one: {
          description: 'Faça 6 matches de cascata de fótons e alcance 3000 pontos',
          emoji: '☀️',
          requiredMatches: 6,
          points: 30000,
          maxMoves: 50
        },
        two: {
          description: 'Faça 8 matches de cascata de fótons e alcance 4000 pontos',
          emoji: '☀️',
          requiredMatches: 8,
          points: 40000,
          maxMoves: 45
        },
        three: {
          description: 'Faça 10 matches de cascata de fótons e alcance 5000 pontos',
          emoji: '☀️',
          requiredMatches: 10,
          points: 50000,
          maxMoves: 40
        }
      }
    },
    {
      id: 6,
      name: 'Núcleo Estelar - Extremo',
      description: 'Forja cósmica em temperatura crítica',
      story: 'No modo extremo, o núcleo estelar opera em temperaturas inimagináveis. A fusão nuclear acontece em ritmo frenético, e cada movimento pode desencadear uma reação em cadeia devastadora.',
      icon: '⭐️',
      magicaCosmicaCount: 3,
      gridSize: 11,
      starObjectives: {
        one: {
          description: 'Faça 7 matches de fusão nuclear e alcance 3500 pontos',
          emoji: '⭐️',
          requiredMatches: 7,
          points: 35000,
          maxMoves: 50
        },
        two: {
          description: 'Faça 9 matches de fusão nuclear e alcance 4500 pontos',
          emoji: '⭐️',
          requiredMatches: 9,
          points: 45000,
          maxMoves: 45
        },
        three: {
          description: 'Faça 11 matches de fusão nuclear e alcance 5500 pontos',
          emoji: '⭐️',
          requiredMatches: 11,
          points: 55000,
          maxMoves: 40
        }
      }
    },
    {
      id: 7,
      name: 'Supernova - Extremo',
      description: 'Explosão estelar catastrófica',
      story: 'A versão extrema de uma supernova é um espetáculo de destruição cósmica sem precedentes. A energia liberada é capaz de criar e destruir mundos em um piscar de olhos.',
      icon: '💫',
      magicaCosmicaCount: 3,
      gridSize: 12,
      starObjectives: {
        one: {
          description: 'Faça 6 matches de explosão estelar e alcance 4000 pontos',
          emoji: '💫',
          requiredMatches: 6,
          points: 40000,
          maxMoves: 55
        },
        two: {
          description: 'Faça 8 matches de explosão estelar e alcance 5000 pontos',
          emoji: '💫',
          requiredMatches: 8,
          points: 50000,
          maxMoves: 50
        },
        three: {
          description: 'Faça 10 matches de explosão estelar e alcance 6000 pontos',
          emoji: '💫',
          requiredMatches: 10,
          points: 60000,
          maxMoves: 45
        }
      }
    },
    {
      id: 8,
      name: 'Ondas de Choque - Extremo',
      description: 'Tsunami cósmico devastador',
      story: 'As ondas de choque no modo extremo são tsunamis cósmicos de proporções inimagináveis. Cada movimento pode desencadear uma reação em cadeia que atravessa todo o universo primitivo.',
      icon: '🌊',
      magicaCosmicaCount: 3,
      gridSize: 12,
      starObjectives: {
        one: {
          description: 'Faça 7 matches de onda de choque e alcance 4500 pontos',
          emoji: '🌊',
          requiredMatches: 7,
          points: 45000,
          maxMoves: 55
        },
        two: {
          description: 'Faça 9 matches de onda de choque e alcance 5500 pontos',
          emoji: '🌊',
          requiredMatches: 9,
          points: 55000,
          maxMoves: 50
        },
        three: {
          description: 'Faça 11 matches de onda de choque e alcance 6500 pontos',
          emoji: '🌊',
          requiredMatches: 11,
          points: 6500,
          maxMoves: 45
        }
      }
    },
    {
      id: 9,
      name: 'Matéria Escura - Extremo',
      description: 'O mistério invisível do cosmos',
      story: 'No modo extremo, a matéria escura é ainda mais enigmática e poderosa. Suas interações com o universo visível são mais intensas e imprevisíveis.',
      icon: '🌑',
      magicaCosmicaCount: 3,
      gridSize: 13,
      starObjectives: {
        one: {
          description: 'Faça 8 matches de matéria escura e alcance 5000 pontos',
          emoji: '🌑',
          requiredMatches: 8,
          points: 50000,
          maxMoves: 60
        },
        two: {
          description: 'Faça 10 matches de matéria escura e alcance 6000 pontos',
          emoji: '🌑',
          requiredMatches: 10,
          points: 60000,
          maxMoves: 55
        },
        three: {
          description: 'Faça 12 matches de matéria escura e alcance 7000 pontos',
          emoji: '🌑',
          requiredMatches: 12,
          points: 70000,
          maxMoves: 50
        }
      }
    },
    {
      id: 10,
      name: 'Energia Escura - Extremo',
      description: 'A força da expansão acelerada',
      story: 'A energia escura no modo extremo é uma força ainda mais misteriosa e potente. Sua influência na expansão do universo é mais dramática e desafiadora de controlar.',
      icon: '🌌',
      magicaCosmicaCount: 3,
      gridSize: 13,
      starObjectives: {
        one: {
          description: 'Faça 7 matches de energia escura e alcance 5500 pontos',
          emoji: '🌌',
          requiredMatches: 7,
          points: 5500,
          maxMoves: 60
        },
        two: {
          description: 'Faça 9 matches de energia escura e alcance 6500 pontos',
          emoji: '🌌',
          requiredMatches: 9,
          points: 65000,
          maxMoves: 55
        },
        three: {
          description: 'Faça 11 matches de energia escura e alcance 7500 pontos',
          emoji: '🌌',
          requiredMatches: 11,
          points: 75000,
          maxMoves: 50
        }
      }
    },
    {
      id: 11,
      name: 'Buracos Negros - Extremo',
      description: 'Voragens do espaço-tempo',
      story: 'Os buracos negros no modo extremo são ainda mais vorazes e instáveis. Seu poder gravitacional é tão intenso que até mesmo a luz tem dificuldade em escapar de sua influência.',
      icon: '🕳️',
      magicaCosmicaCount: 3,
      gridSize: 14,
      starObjectives: {
        one: {
          description: 'Faça 6 matches de singularidade e alcance 6000 pontos',
          emoji: '🕳️',
          requiredMatches: 6,
          points: 60000,
          maxMoves: 65
        },
        two: {
          description: 'Faça 8 matches de singularidade e alcance 7000 pontos',
          emoji: '🕳️',
          requiredMatches: 8,
          points: 70000,
          maxMoves: 60
        },
        three: {
          description: 'Faça 10 matches de singularidade e alcance 8000 pontos',
          emoji: '🕳️',
          requiredMatches: 10,
          points: 80000,
          maxMoves: 55
        }
      }
    },
    {
      id: 12,
      name: 'Singularidade Final - Extremo',
      description: 'O desafio definitivo do universo primordial',
      story: 'O último e mais desafiador nível do modo extremo. Aqui, todas as forças do universo convergem em um teste final de habilidade e estratégia.',
      icon: '🌟',
      magicaCosmicaCount: 3,
      gridSize: 15,
      starObjectives: {
        one: {
          description: 'Faça 5 matches de convergência universal e alcance 7000 pontos',
          emoji: '🌟',
          requiredMatches: 5,
          points: 70000,
          maxMoves: 70
        },
        two: {
          description: 'Faça 7 matches de convergência universal e alcance 8000 pontos',
          emoji: '🌟',
          requiredMatches: 7,
          points: 80000,
          maxMoves: 65
        },
        three: {
          description: 'Faça 9 matches de convergência universal e alcance 10000 pontos',
          emoji: '🌟',
          requiredMatches: 9,
          points: 100000,
          maxMoves: 60
        }
      }
    }
  ]
}
