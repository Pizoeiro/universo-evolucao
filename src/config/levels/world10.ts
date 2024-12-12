import { World } from './types'

export const world10: World = {
  name: 'A Explosão da Vida Complexa',
  description: 'Com um planeta rico em oxigênio e ambientes diversificados, a vida complexa explode em variedade. Nesta fase, surgem animais com exoesqueletos, plantas na terra, peixes, anfíbios, répteis, aves, mamíferos, e eventualmente primatas e humanos. Este mundo conclui a jornada, mostrando a vasta diversidade da vida e conectando-a ao surgimento da humanidade, capaz de contemplar o próprio cosmos.',
  icon: '🔭',
  gridSize: 15,
  specialEmoji: '🌈',
  explosionRadius: 10,
  levels: [
    {
      id: 1,
      name: 'Explosão Cambriana: Animais com Exoesqueleto',
      description: 'Surgimento repentino de animais complexos em grande variedade',
      story: 'A Explosão Cambriana marca o aparecimento súbito de numerosos tipos de animais, muitos com exoesqueletos e estruturas complexas. Essa diversificação rápida define a base dos principais filos animais atuais.',
      icon: '🦐',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Revele 3 animais cambrianos',
          emoji: '🦐',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Revele 5 animais cambrianos',
          emoji: '🦐',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Revele 7 animais cambrianos',
          emoji: '🦐',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🦐',
          name: 'Fauna Cambriana',
          points: 0,
          description: 'A incrível diversidade inicial da vida animal'
        }
      ]
    },
    {
      id: 2,
      name: 'Diversificação dos Ecossistemas Oceânicos',
      description: 'Ecossistemas marinhos tornando-se mais complexos e ricos',
      story: 'Com novos tipos de animais, algas e microrganismos, os oceanos tornam-se ambientes repletos de nichos. Cadeias alimentares complexas e interações ecológicas emergem, aumentando a resiliência da vida marinha.',
      icon: '🐚',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 interações marinhas complexas',
          emoji: '🐚',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 interações marinhas complexas',
          emoji: '🐚',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 interações marinhas complexas',
          emoji: '🐚',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🐚',
          name: 'Ecossistema Oceânico Rico',
          points: 0,
          description: 'Oceanos com cadeias alimentares longas e variadas'
        }
      ]
    },
    {
      id: 3,
      name: 'Primeiras Plantas Terrestres',
      description: 'Vida vegetal conquista o ambiente terrestre',
      story: 'Musgos e plantas primitivas migram para a terra firme, aproveitando a luz solar e um ambiente com menos predadores. A vegetação terrestre muda a composição do solo e do ar, preparando o ambiente para outros organismos.',
      icon: '🌱',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Estabeleça 3 colônias vegetais terrestres',
          emoji: '🌱',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Estabeleça 5 colônias vegetais terrestres',
          emoji: '🌱',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Estabeleça 7 colônias vegetais terrestres',
          emoji: '🌱',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌱',
          name: 'Planta Terrestre Primitiva',
          points: 0,
          description: 'Vegetação conquistando ambientes fora d\'água'
        }
      ]
    },
    {
      id: 4,
      name: 'Primeiros Invertebrados Complexos',
      description: 'Surgimento de animais sem coluna vertebral mais elaborados',
      story: 'Invertebrados complexos, como artrópodes e moluscos, diversificam-se em múltiplos habitats. Suas inovações anatômicas e fisiológicas abrem caminho para formas de vida ainda mais complexas.',
      icon: '🦑',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 linhagens de invertebrados complexos',
          emoji: '🦑',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 linhagens de invertebrados complexos',
          emoji: '🦑',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 linhagens de invertebrados complexos',
          emoji: '🦑',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🦑',
          name: 'Invertebrado Avançado',
          points: 0,
          description: 'Animais sem coluna vertebral cada vez mais sofisticados'
        }
      ]
    },
    {
      id: 5,
      name: 'Peixes com Mandíbulas',
      description: 'Aparecimento de vertebrados mais eficientes na alimentação',
      story: 'A evolução das mandíbulas em peixes permite maior variedade de presas e estratégias alimentares. Esse avanço anatômico impulsiona a evolução dos vertebrados e sua dominação dos ecossistemas marinhos.',
      icon: '🐟',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 linhagens de peixes mandibulados',
          emoji: '🐟',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 linhagens de peixes mandibulados',
          emoji: '🐟',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 linhagens de peixes mandibulados',
          emoji: '🐟',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🐟',
          name: 'Peixe com Mandíbulas',
          points: 0,
          description: 'Vertebrados marinhos com nova ferramenta alimentar'
        }
      ]
    },
    {
      id: 6,
      name: 'Colonização da Terra por Plantas e Fungos',
      description: 'Vida pluricelular ocupa o ambiente terrestre',
      story: 'Plantas e fungos avançam para o interior dos continentes, formando solos, retendo água e criando ecossistemas terrestres. Essa mudança prepara o ambiente para a chegada de animais em terra firme.',
      icon: '🍄',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 comunidades terrestres de plantas/fungos',
          emoji: '🍄',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 comunidades terrestres de plantas/fungos',
          emoji: '🍄',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 comunidades terrestres de plantas/fungos',
          emoji: '🍄',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🍄',
          name: 'Ecossistema Terrestre Inicial',
          points: 0,
          description: 'Plantas e fungos criando a base para a vida fora d\'água'
        }
      ]
    },
    {
      id: 7,
      name: 'Insetos Primordiais',
      description: 'Artrópodes conquistando o ar e a terra',
      story: 'Insetos primitivos surgem na terra firme, explorando nichos desocupados. Voando, rastejando ou cavando, eles se tornam fundamentais na polinização, decomposição e equilíbrio dos ecossistemas terrestres.',
      icon: '🐜',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 linhagens de insetos primordiais',
          emoji: '🐜',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 linhagens de insetos primordiais',
          emoji: '🐜',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 linhagens de insetos primordiais',
          emoji: '🐜',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🐜',
          name: 'Inseto Primitivo',
          points: 0,
          description: 'Artrópodes explorando a terra firme'
        }
      ]
    },
    {
      id: 8,
      name: 'Anfíbios: Vida entre Água e Terra',
      description: 'Primeiros vertebrados a sair da água',
      story: 'Certos peixes com nadadeiras fortes dão origem aos anfíbios, capazes de viver tanto em ambientes aquáticos quanto terrestres. Esse passo crucial leva vertebrados à conquista definitiva da terra firme.',
      icon: '🐸',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Desenvolva 3 linhagens de anfíbios',
          emoji: '🐸',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Desenvolva 5 linhagens de anfíbios',
          emoji: '🐸',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Desenvolva 7 linhagens de anfíbios',
          emoji: '🐸',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🐸',
          name: 'Anfíbio Primordial',
          points: 0,
          description: 'Vertebrados pioneiros na transição água-terra'
        }
      ]
    },
    {
      id: 9,
      name: 'Reptéis e Aves Primevas',
      description: 'Domínio terrestre e aéreo com novas estratégias',
      story: 'Dos anfíbios surgem os répteis, melhor adaptados à vida terrestre. Em algum momento, alguns répteis dão origem às aves primitivas, capazes de voar, expandindo ainda mais a ocupação ambiental.',
      icon: '🦎',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Estabeleça 3 linhagens répteis/aves iniciais',
          emoji: '🦎',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Estabeleça 5 linhagens répteis/aves iniciais',
          emoji: '🦎',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Estabeleça 7 linhagens répteis/aves iniciais',
          emoji: '🦎',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🦎',
          name: 'Répteis e Aves Primitivas',
          points: 0,
          description: 'Vertebrados dominando terra e ar'
        }
      ]
    },
    {
      id: 10,
      name: 'Florestas Antigas, Ciclo de Carbono e Clima',
      description: 'Vegetação abundante influenciando o clima global',
      story: 'Florestas densas e antigas surgem, influenciando o ciclo do carbono e o clima global. A fotossíntese intensa e a formação de carvão mineral mudam a composição da atmosfera e a dinâmica planetária.',
      icon: '🌳',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 florestas antigas',
          emoji: '🌳',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 florestas antigas',
          emoji: '🌳',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 florestas antigas',
          emoji: '🌳',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌳',
          name: 'Floresta Primitiva',
          points: 0,
          description: 'Extensas áreas vegetais regulando o clima e o carbono'
        }
      ]
    },
    {
      id: 11,
      name: 'Extinções em Massa e Renovação da Vida',
      description: 'Grandes eventos de extinção abrindo espaço para novas formas',
      story: 'Ao longo do tempo, a Terra enfrenta extinções em massa que eliminam muitas espécies. Contudo, esses eventos abrem espaço para radiações evolutivas, renovando a diversidade da vida.',
      icon: '💀',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Cause 3 extinções em massa',
          emoji: '💀',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Cause 5 extinções em massa',
          emoji: '💀',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Cause 7 extinções em massa',
          emoji: '💀',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💀',
          name: 'Extinção em Massa',
          points: 0,
          description: 'Eventos catastróficos redefinindo a vida na Terra'
        }
      ]
    },
    {
      id: 12,
      name: 'Mamíferos Primitivos',
      description: 'Pequenos, noturnos, sobrevivendo à sombra dos répteis',
      story: 'Entre os répteis dominantes, mamíferos primitivos, pequenos e noturnos, encontram seu nicho. Eles desenvolvem pelo, glândulas mamárias e cérebros mais complexos, aguardando a chance de se diversificar.',
      icon: '🐀',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 linhagens de mamíferos primitivos',
          emoji: '🐀',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 linhagens de mamíferos primitivos',
          emoji: '🐀',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 linhagens de mamíferos primitivos',
          emoji: '🐀',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🐀',
          name: 'Mamífero Primitivo',
          points: 0,
          description: 'Pequenos vertebrados de sangue quente esperando sua vez'
        }
      ]
    },
    {
      id: 13,
      name: 'Dinossauros e o Domínio dos Répteis Gigantes',
      description: 'A era dos gigantes terrestres',
      story: 'Dinossauros emergem e dominam a terra firme, ocupando uma vasta gama de nichos. Grandes, pequenos, carnívoros, herbívoros, eles definem a era Mesozoica como a idade dos répteis gigantes.',
      icon: '🦖',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 linhagens de dinossauros',
          emoji: '🦖',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 linhagens de dinossauros',
          emoji: '🦖',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 linhagens de dinossauros',
          emoji: '🦖',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🦖',
          name: 'Dinossauro',
          points: 0,
          description: 'Répteis gigantes dominando o planeta'
        }
      ]
    },
    {
      id: 14,
      name: 'Asteroides e Extinções: Reconfigurando a Vida',
      description: 'Um impacto catastrófico e suas consequências',
      story: 'A queda de um grande asteroide provoca uma extinção em massa, eliminando os dinossauros não-avianos e abrindo caminho para a ascensão dos mamíferos. A vida se reorganiza mais uma vez.',
      icon: '☄️',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Provoque 3 mudanças pós-asteroide',
          emoji: '☄️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Provoque 5 mudanças pós-asteroide',
          emoji: '☄️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Provoque 7 mudanças pós-asteroide',
          emoji: '☄️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '☄️',
          name: 'Impacto Asteroidal',
          points: 0,
          description: 'Evento catastrófico que redefine a vida na Terra'
        }
      ]
    },
    {
      id: 15,
      name: 'Mamíferos Modernos e Primatas',
      description: 'Diversificação de mamíferos e surgimento dos primatas',
      story: 'Com a saída de cena dos dinossauros, mamíferos modernos se espalham, ocupando nichos antes indisponíveis. Entre eles surgem os primatas, com cérebros mais complexos e visão apurada.',
      icon: '🐒',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Estabeleça 3 linhagens de mamíferos modernos/primatas',
          emoji: '🐒',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Estabeleça 5 linhagens de mamíferos modernos/primatas',
          emoji: '🐒',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Estabeleça 7 linhagens de mamíferos modernos/primatas',
          emoji: '🐒',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🐒',
          name: 'Primata Inicial',
          points: 0,
          description: 'Mamíferos inteligentes explorando o ambiente'
        }
      ]
    },
    {
      id: 16,
      name: 'Mudanças Climáticas Globais',
      description: 'Clima influenciando a evolução e dispersão das espécies',
      story: 'Glaciações, secas, variações de temperatura e precipitação moldam a distribuição de plantas e animais, criando pressões seletivas e promovendo novas adaptações evolutivas.',
      icon: '🌍',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Ajuste 3 cenários climáticos',
          emoji: '🌍',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Ajuste 5 cenários climáticos',
          emoji: '🌍',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Ajuste 7 cenários climáticos',
          emoji: '🌍',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌍',
          name: 'Clima Dinâmico',
          points: 0,
          description: 'Condições ambientais em constante mudança'
        }
      ]
    },
    {
      id: 17,
      name: 'Primatas Avançados e Desenvolvimento do Cérebro',
      description: 'Maior inteligência e comportamento complexo',
      story: 'Alguns primatas evoluem cérebros maiores e comportamentos sociais mais complexos. Essas habilidades cognitivas permitem soluções inovadoras para desafios ambientais.',
      icon: '🧠',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Evolua 3 linhagens de primatas avançados',
          emoji: '🧠',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Evolua 5 linhagens de primatas avançados',
          emoji: '🧠',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Evolua 7 linhagens de primatas avançados',
          emoji: '🧠',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🧠',
          name: 'Cérebro Avançado',
          points: 0,
          description: 'Primatas com inteligência superior e comportamentos sociais'
        }
      ]
    },
    {
      id: 18,
      name: 'Surgimento do Gênero Homo',
      description: 'Humanos primitivos emergem com ferramentas e cultura',
      story: 'Dentro dos primatas evoluídos, surge o gênero Homo. Esses hominídeos fabricam ferramentas, caçam em grupo e começam a moldar o ambiente de maneiras inéditas.',
      icon: '🧑',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Destaque 3 linhagens do gênero Homo',
          emoji: '🧑',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Destaque 5 linhagens do gênero Homo',
          emoji: '🧑',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Destaque 7 linhagens do gênero Homo',
          emoji: '🧑',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🧑',
          name: 'Hominídeo Primordial',
          points: 0,
          description: 'Ancestrais humanos desenvolvendo ferramentas e cultura'
        }
      ]
    },
    {
      id: 19,
      name: 'Humanos Contemplando o Cosmos',
      description: 'A consciência olha para as estrelas',
      story: 'Com cérebros altamente desenvolvidos, humanos modernos observam o céu, questionam sua origem e começam a entender as forças que moldam o universo. A curiosidade é a marca da nossa espécie.',
      icon: '🔭',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 insights cósmicos',
          emoji: '🔭',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 insights cósmicos',
          emoji: '🔭',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 insights cósmicos',
          emoji: '🔭',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔭',
          name: 'Observação Cósmica',
          points: 0,
          description: 'Humanos estudando estrelas e galáxias'
        }
      ]
    },
    {
      id: 20,
      name: 'Fechando o Ciclo: A Consciência Observa o Universo',
      description: 'O retorno ao início, agora com compreensão e reflexão',
      story: 'Conectando o passado ao presente, a humanidade entende a história cósmica. Da singularidade inicial à explosão da vida complexa, chegamos à consciência capaz de contemplar e estudar o próprio universo. É o fechamento do ciclo e o começo de novas perguntas.',
      icon: '🧠🔭',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Abra 3 portais de compreensão cósmica',
          emoji: '🧠🔭',
          requiredMatches: 3,
          points: 0,
          maxMoves: 19
        },
        two: {
          description: 'Abra 5 portais de compreensão cósmica',
          emoji: '🧠🔭',
          requiredMatches: 5,
          points: 0,
          maxMoves: 15
        },
        three: {
          description: 'Abra 7 portais de compreensão cósmica',
          emoji: '🧠🔭',
          requiredMatches: 7,
          points: 0,
          maxMoves: 11
        }
      },
      combinations: [
        {
          emoji: '🧠🔭',
          name: 'Consciência Cósmica',
          points: 0,
          description: 'A mente humana refletindo sobre o universo e sua origem'
        }
      ]
    }
  ]
}
