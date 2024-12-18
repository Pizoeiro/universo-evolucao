import { World } from '../../types'

export const world1Extreme: World = {
  name: 'O Grande Início - MODO EXTREMO',
  description: 'Desafie-se no modo extremo do Big Bang! Uma experiência ainda mais intensa onde cada movimento conta e a precisão é fundamental.',
  icon: '💥',
  gridSize: 8,
  specialEmoji: '✨',
  explosionRadius: 2,
  combinations: [
    {
      emoji: '🌀',
      name: 'Portal Dimensional',
      points: 150,
      description: 'Portal para outras dimensões'
    },
    {
      emoji: '💥',
      name: 'Explosão Cósmica',
      points: 200,
      description: 'Explosão de energia primordial'
    },
    {
      emoji: '🎯',
      name: 'Vórtice Quântico',
      points: 175,
      description: 'Precisão quântica'
    },
    {
      emoji: '✨',
      name: 'Centelha Cósmica',
      points: 200,
      description: 'Energia pura do cosmos'
    },
    {
      emoji: '☀️',
      name: 'Radiação Cósmica',
      points: 250,
      description: 'Radiação primordial'
    },
    {
      emoji: '⚡',
      name: 'Energia Fundamental',
      points: 225,
      description: 'Energia em estado puro'
    },
    {
      emoji: '🔮',
      name: 'Campo de Força',
      points: 275,
      description: 'Campo de energia concentrada'
    },
    {
      emoji: '🌟',
      name: 'Partícula Quântica',
      points: 280,
      description: 'Partícula em superposição'
    },
    {
      emoji: '🌐',
      name: 'Anomalia Espacial',
      points: 300,
      description: 'Distorção no espaço-tempo'
    },
    {
      emoji: '🌌',
      name: 'Nebulosa Cósmica',
      points: 300,
      description: 'Berçário de estrelas'
    },
    {
      emoji: '💎',
      name: 'Cristal Cósmico',
      points: 500,
      description: 'Cristal de energia pura'
    },
    {
      emoji: '🌑',
      name: 'Matéria Escura',
      points: 550,
      description: 'A força misteriosa do universo'
    },
    {
      emoji: '🎆',
      name: 'Vórtice Espacial',
      points: 600,
      description: 'Turbilhão de energia cósmica'
    },
    {
      emoji: '🔆',
      name: 'Campo Quântico',
      points: 700,
      description: 'Campo de energia quântica'
    },
    {
      emoji: '💫',
      name: 'Explosão Estelar',
      points: 800,
      description: 'A morte espetacular de uma estrela'
    },
    {
      emoji: '🌊',
      name: 'Onda Gravitacional',
      points: 350,
      description: 'Ondulações no tecido do espaço-tempo'
    }
  ],
  levels: [
    {
      id: 1,
      name: 'Explosão Primordial',
      description: 'Concentração máxima de energia em um único ponto sob condições extremas',
      story: 'No modo extremo, a singularidade inicial é ainda mais instável e poderosa. Cada movimento deve ser perfeitamente calculado para controlar a energia primordial do universo, onde as leis da física são levadas ao limite!',
      icon: '🌀',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 5 portais dimensionais',
          emoji: '🌀',
          requiredMatches: 5,
          points: 3000,
          maxMoves: 60
        },
        two: {
          description: 'Crie 7 portais dimensionais',
          emoji: '🌀',
          requiredMatches: 7,
          points: 6000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 10 portais dimensionais',
          emoji: '🌀',
          requiredMatches: 10,
          points: 9000,
          maxMoves: 40
        }
      }
    },
    {
      id: 2,
      name: 'Explosão Primordial Extrema',
      description: 'Libere a energia em uma explosão cataclísmica',
      story: 'KABOOM! A explosão é muito mais poderosa no modo extremo. A energia liberada é tão intensa que poderia criar milhões de universos! Controle esse poder inimaginável com precisão.',
      icon: '💥',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 5 explosões cósmicas',
          emoji: '💥',
          requiredMatches: 5,
          points: 3600,
          maxMoves: 60
        },
        two: {
          description: 'Crie 8 explosões cósmicas',
          emoji: '💥',
          requiredMatches: 8,
          points: 7200,
          maxMoves: 50
        },
        three: {
          description: 'Crie 12 explosões cósmicas',
          emoji: '💥',
          requiredMatches: 12,
          points: 10800,
          maxMoves: 40
        }
      }
    },
    {
      id: 3,
      name: 'Caldeirão Quântico',
      description: 'Domine o caos do caldeirão primordial em estado quântico',
      story: 'O caldeirão primordial está em um estado de superposição quântica! As partículas dançam entre diferentes estados simultaneamente, tornando cada movimento um desafio multidimensional.',
      icon: '🎯',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 6 vórtices quânticos',
          emoji: '🎯',
          requiredMatches: 6,
          points: 2250,
          maxMoves: 60
        },
        two: {
          description: 'Crie 9 átomos primordiais',
          emoji: '🎯',
          requiredMatches: 9,
          points: 4500,
          maxMoves: 50
        },
        three: {
          description: 'Crie 13 átomos primordiais',
          emoji: '🎯',
          requiredMatches: 13,
          points: 6750,
          maxMoves: 40
        }
      }
    },
    {
      id: 4,
      name: 'Inflação Hipercósmica',
      description: 'Controle a expansão acelerada do universo em velocidade extrema',
      story: 'A inflação cósmica está fora de controle! O espaço-tempo se expande muito mais rapidamente que o normal, criando bolhas de universo que precisam ser estabilizadas antes que tudo se despedace.',
      icon: '✨',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 7 centelhas cósmicas',
          emoji: '✨',
          requiredMatches: 7,
          points: 1800,
          maxMoves: 60
        },
        two: {
          description: 'Crie 10 centelhas cósmicas',
          emoji: '✨',
          requiredMatches: 10,
          points: 3600,
          maxMoves: 50
        },
        three: {
          description: 'Crie 14 centelhas cósmicas',
          emoji: '✨',
          requiredMatches: 14,
          points: 5400,
          maxMoves: 40
        }
      }
    },
    {
      id: 5,
      name: 'Radiação Hiperbólica',
      description: 'Manipule a radiação em seu estado mais energético',
      story: 'A radiação está em níveis críticos! Cada fóton carrega energia suficiente para criar ou destruir matéria. Você precisa equilibrar essas forças primordiais antes que elas se tornem incontroláveis.',
      icon: '☀️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 8 radiações cósmicas',
          emoji: '☀️',
          requiredMatches: 8,
          points: 2000,
          maxMoves: 60
        },
        two: {
          description: 'Crie 12 radiações cósmicas',
          emoji: '☀️',
          requiredMatches: 12,
          points: 4000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 15 radiações cósmicas',
          emoji: '☀️',
          requiredMatches: 15,
          points: 6000,
          maxMoves: 40
        }
      }
    },
    {
      id: 6,
      name: 'Plasma Primordial Extremo',
      description: 'Domine o plasma cósmico em seu estado mais volátil',
      story: 'O plasma primordial está em um estado de energia nunca antes visto! As partículas estão tão energizadas que podem rasgar o próprio tecido do espaço-tempo. Cada movimento deve ser preciso para evitar uma catástrofe cósmica.',
      icon: '⚡',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 9 energias fundamentais',
          emoji: '⚡',
          requiredMatches: 9,
          points: 2500,
          maxMoves: 60
        },
        two: {
          description: 'Crie 13 energias fundamentais',
          emoji: '⚡',
          requiredMatches: 13,
          points: 5000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 16 energias fundamentais',
          emoji: '⚡',
          requiredMatches: 16,
          points: 7500,
          maxMoves: 40
        }
      }
    },
    {
      id: 7,
      name: 'Nebulosa Hiperdensa',
      description: 'Controle uma nebulosa em estado de compressão extrema',
      story: 'Esta nebulosa está tão densa que está à beira do colapso gravitacional! As forças em jogo são tão intensas que poderiam criar dezenas de estrelas simultaneamente. Você precisa gerenciar essa energia colossal com maestria.',
      icon: '🌌',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 10 nebulosas cósmicas',
          emoji: '🌌',
          requiredMatches: 10,
          points: 3000,
          maxMoves: 60
        },
        two: {
          description: 'Crie 14 nebulosas cósmicas',
          emoji: '🌌',
          requiredMatches: 14,
          points: 6000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 17 nebulosas cósmicas',
          emoji: '🌌',
          requiredMatches: 17,
          points: 9000,
          maxMoves: 40
        }
      }
    },
    {
      id: 8,
      name: 'Ondas Gravitacionais Extremas',
      description: 'Sincronize ondas gravitacionais de potência máxima',
      story: 'As ondas gravitacionais atingiram amplitude máxima! O espaço-tempo está ondulando como um oceano em tempestade cósmica. Sua missão é harmonizar essas ondas antes que elas rasguem o tecido da realidade.',
      icon: '🌊',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 11 ondas de choque',
          emoji: '🌊',
          requiredMatches: 11,
          points: 3500,
          maxMoves: 60
        },
        two: {
          description: 'Crie 15 ondas de choque',
          emoji: '🌊',
          requiredMatches: 15,
          points: 7000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 18 ondas de choque',
          emoji: '🌊',
          requiredMatches: 18,
          points: 10500,
          maxMoves: 40
        }
      }
    },
    {
      id: 9,
      name: 'Vórtice Quântico',
      description: 'Manipule um turbilhão de partículas em superposição',
      story: 'Um vórtice quântico surgiu, misturando estados quânticos em velocidades inimagináveis! As partículas estão em milhares de estados simultaneamente, criando um desafio único de manipulação multidimensional.',
      icon: '🌟',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 12 partículas quânticas',
          emoji: '🌟',
          requiredMatches: 12,
          points: 4000,
          maxMoves: 60
        },
        two: {
          description: 'Crie 16 partículas quânticas',
          emoji: '🌟',
          requiredMatches: 16,
          points: 8000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 19 partículas quânticas',
          emoji: '🌟',
          requiredMatches: 19,
          points: 12000,
          maxMoves: 40
        }
      }
    },
    {
      id: 10,
      name: 'Fusão Estelar Extrema',
      description: 'Controle reações de fusão em estado crítico',
      story: 'As reações de fusão atingiram temperaturas inimagináveis! O núcleo estelar está tão instável que poderia desencadear uma supernova a qualquer momento. Você precisa equilibrar essas reações nucleares antes que tudo exploda!',
      icon: '🔮',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 13 campos de força',
          emoji: '🔮',
          requiredMatches: 13,
          points: 4500,
          maxMoves: 60
        },
        two: {
          description: 'Crie 17 campos de força',
          emoji: '🔮',
          requiredMatches: 17,
          points: 9000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 20 campos de força',
          emoji: '🔮',
          requiredMatches: 20,
          points: 13500,
          maxMoves: 40
        }
      }
    },
    {
      id: 11,
      name: 'Supernova Hipermassiva',
      description: 'Gerencie uma explosão estelar de proporções catastróficas',
      story: 'Uma estrela hipermassiva está prestes a explodir com força mil vezes maior que uma supernova normal! A energia liberada poderia vaporizar sistemas solares inteiros. Você precisa controlar essa explosão titânica!',
      icon: '💫',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 14 explosões estelares',
          emoji: '💫',
          requiredMatches: 14,
          points: 5000,
          maxMoves: 60
        },
        two: {
          description: 'Crie 18 explosões estelares',
          emoji: '💫',
          requiredMatches: 18,
          points: 10000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 21 explosões estelares',
          emoji: '💫',
          requiredMatches: 21,
          points: 15000,
          maxMoves: 40
        }
      }
    },
    {
      id: 12,
      name: 'Magnetar Extremo',
      description: 'Domine os campos magnéticos mais poderosos do universo',
      story: 'Este magnetar gera campos magnéticos tão intensos que poderiam distorcer a estrutura atômica da matéria a milhões de quilômetros de distância! Cada movimento deve ser calculado para não ser despedaçado pelas forças magnéticas.',
      icon: '⚡',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 15 energias fundamentais',
          emoji: '⚡',
          requiredMatches: 15,
          points: 5500,
          maxMoves: 60
        },
        two: {
          description: 'Crie 19 energias fundamentais',
          emoji: '⚡',
          requiredMatches: 19,
          points: 11000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 22 energias fundamentais',
          emoji: '⚡',
          requiredMatches: 22,
          points: 16500,
          maxMoves: 40
        }
      }
    },
    {
      id: 13,
      name: 'Buraco Negro Supermassivo',
      description: 'Controle um monstro cósmico devorador de galáxias',
      story: 'Um buraco negro supermassivo está em frenesi alimentar! Sua gravidade é tão intensa que está devorando estrelas e gases em um ritmo alucinante. Você precisa dominar essas forças gravitacionais colossais!',
      icon: '🌐',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 16 anomalias espaciais',
          emoji: '🌐',
          requiredMatches: 16,
          points: 6000,
          maxMoves: 60
        },
        two: {
          description: 'Crie 20 anomalias espaciais',
          emoji: '🌐',
          requiredMatches: 20,
          points: 12000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 23 anomalias espaciais',
          emoji: '🌐',
          requiredMatches: 23,
          points: 18000,
          maxMoves: 40
        }
      }
    },
    {
      id: 14,
      name: 'Colisão de Universos',
      description: 'Gerencie o choque entre universos paralelos',
      story: 'Dois universos paralelos estão em rota de colisão! O choque entre estas realidades alternativas poderia destruir o tecido do espaço-tempo. Você precisa equilibrar as forças cósmicas para evitar o fim de todas as realidades!',
      icon: '🌌',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 17 nebulosas cósmicas',
          emoji: '🌌',
          requiredMatches: 17,
          points: 6500,
          maxMoves: 60
        },
        two: {
          description: 'Crie 21 nebulosas cósmicas',
          emoji: '🌌',
          requiredMatches: 21,
          points: 13000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 24 nebulosas cósmicas',
          emoji: '🌌',
          requiredMatches: 24,
          points: 19500,
          maxMoves: 40
        }
      }
    },
    {
      id: 15,
      name: 'Singularidade Quântica',
      description: 'Manipule o ponto onde todas as forças se unificam',
      story: 'Uma singularidade quântica surgiu, um ponto onde todas as forças fundamentais do universo se tornam uma só! As leis da física estão completamente distorcidas, criando um desafio ��nico de manipulação da própria realidade.',
      icon: '💎',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 18 cristais cósmicos',
          emoji: '💎',
          requiredMatches: 18,
          points: 7000,
          maxMoves: 60
        },
        two: {
          description: 'Crie 22 cristais cósmicos',
          emoji: '💎',
          requiredMatches: 22,
          points: 14000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 25 cristais cósmicos',
          emoji: '💎',
          requiredMatches: 25,
          points: 21000,
          maxMoves: 40
        }
      }
    },
    {
      id: 16,
      name: 'Matéria Escura Hiperdensa',
      description: 'Controle concentrações extremas de matéria escura',
      story: 'Uma concentração anormal de matéria escura está distorcendo a própria estrutura do cosmos! Sua gravidade é tão intensa que está rasgando o tecido do espaço-tempo. Você precisa dominar essa força misteriosa antes que seja tarde demais!',
      icon: '🌑',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 19 matérias escuras',
          emoji: '🌑',
          requiredMatches: 19,
          points: 7500,
          maxMoves: 60
        },
        two: {
          description: 'Crie 23 matérias escuras',
          emoji: '🌑',
          requiredMatches: 23,
          points: 15000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 26 matérias escuras',
          emoji: '🌑',
          requiredMatches: 26,
          points: 22500,
          maxMoves: 40
        }
      }
    },
    {
      id: 17,
      name: 'Energia Escura Turbulenta',
      description: 'Domine a força mais misteriosa do universo',
      story: 'A energia escura está em um estado de turbulência nunca antes visto! Sua influência na expansão do universo está completamente fora de controle, ameaçando rasgar a realidade em pedaços. Apenas você pode restaurar o equilíbrio cósmico!',
      icon: '✨',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 20 centelhas cósmicas',
          emoji: '✨',
          requiredMatches: 20,
          points: 8000,
          maxMoves: 60
        },
        two: {
          description: 'Crie 24 centelhas cósmicas',
          emoji: '✨',
          requiredMatches: 24,
          points: 16000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 27 centelhas cósmicas',
          emoji: '✨',
          requiredMatches: 27,
          points: 24000,
          maxMoves: 40
        }
      }
    },
    {
      id: 18,
      name: 'Fusão de Buracos Negros',
      description: 'Gerencie a colisão de titãs cósmicos',
      story: 'Dois buracos negros supermassivos estão prestes a colidir! O evento será tão violento que enviará ondas gravitacionais por todo o universo observável. Você precisa controlar esta fusão cataclísmica!',
      icon: '🎆',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 21 vórtices espaciais',
          emoji: '🎆',
          requiredMatches: 21,
          points: 8500,
          maxMoves: 60
        },
        two: {
          description: 'Crie 25 vórtices espaciais',
          emoji: '🎆',
          requiredMatches: 25,
          points: 17000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 28 vórtices espaciais',
          emoji: '🎆',
          requiredMatches: 28,
          points: 25500,
          maxMoves: 40
        }
      }
    },
    {
      id: 19,
      name: 'Paradoxo Quântico',
      description: 'Resolva uma anomalia na estrutura da realidade',
      story: 'Um paradoxo quântico está ameaçando a própria existência! Realidades alternativas estão se sobrepondo, criando um caos multidimensional que poderia destruir o tecido do espaço-tempo. Você deve resolver este enigma cósmico!',
      icon: '🔆',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 22 campos quânticos',
          emoji: '🔆',
          requiredMatches: 22,
          points: 9000,
          maxMoves: 60
        },
        two: {
          description: 'Crie 26 campos quânticos',
          emoji: '🔆',
          requiredMatches: 26,
          points: 18000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 29 campos quânticos',
          emoji: '🔆',
          requiredMatches: 29,
          points: 27000,
          maxMoves: 40
        }
      }
    },
    {
      id: 20,
      name: 'Singularidade Universal',
      description: 'O desafio final do universo extremo',
      story: 'Você chegou ao ponto mais extremo do cosmos! Todas as forças fundamentais do universo convergem neste momento único, criando uma singularidade universal que desafia todas as leis da física. Este é o teste definitivo do seu domínio sobre as forças cósmicas!',
      icon: '💫',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 23 explosões estelares',
          emoji: '💫',
          requiredMatches: 23,
          points: 30000,
          maxMoves: 60
        },
        two: {
          description: 'Crie 27 explosões estelares',
          emoji: '💫',
          requiredMatches: 27,
          points: 60000,
          maxMoves: 50
        },
        three: {
          description: 'Crie 30 explosões estelares',
          emoji: '💫',
          requiredMatches: 30,
          points: 90000,
          maxMoves: 40
        }
      }
    }
  ]
}
