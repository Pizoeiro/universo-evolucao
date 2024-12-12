import { World } from './types'

export const world1: World = {
  name: 'O Grande Início',
  description: 'Explore o momento mais explosivo da história: o Big Bang! Descubra como tudo começou em uma fração de segundo e como o universo se transformou de um ponto minúsculo em algo gigantesco.',
  icon: '💥',
  gridSize: 6,
  specialEmoji: '✨', // Special emoji for world 1
  explosionRadius: 1, // Explosion affects 1 grid cell around the special emoji
  levels: [
    {
      id: 1,
      name: 'Ponto Zero',
      description: 'Concentração máxima de energia em um único ponto',
      story: 'Imagine toda a energia e matéria do universo comprimidas em um espaço infinitamente pequeno, uma singularidade. Neste estado extremo, as leis da física como conhecemos deixam de funcionar. Este é o Ponto Zero, o início de toda a existência!',
      icon: '⚫️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 pontos de energia concentrada',
          emoji: '⚫️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 pontos de energia concentrada',
          emoji: '⚫️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 pontos de energia concentrada',
          emoji: '⚫️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⚫️',
          name: 'Singularidade',
          points: 0,
          description: 'O ponto inicial de toda a existência'
        }
      ]
    },
    {
      id: 2,
      name: 'A Grande Explosão',
      description: 'Libere a energia em uma explosão gigantesca',
      story: 'BOOM! De repente, toda aquela energia comprimida explode com uma força inimaginável. É como se milhões de bombas atômicas explodissem ao mesmo tempo, mas ainda maior! Este é o Big Bang, a maior explosão que já aconteceu - o nascimento do nosso universo.',
      icon: '💥',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 explosões cósmicas',
          emoji: '💥',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 explosões cósmicas',
          emoji: '💥',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 explosões cósmicas',
          emoji: '💥',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💥',
          name: 'Explosão Cósmica',
          points: 0,
          description: 'A explosão que deu início a tudo'
        }
      ]
    },
    {
      id: 3,
      name: 'Caldeirão Primordial',
      description: 'Misture os ingredientes primordiais do universo',
      story: 'Logo após a grande explosão, o universo era como um caldeirão gigante fervendo! Imagine o maior e mais quente caldeirão que você já viu, agora multiplique por trilhões. Neste caldeirão primordial, a energia dança e se transforma, criando os primeiros "ingredientes" do universo.',
      icon: '🔥',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 misturas cósmicas',
          emoji: '🔥',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 misturas cósmicas',
          emoji: '🔥',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 misturas cósmicas',
          emoji: '🔥',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔥',
          name: 'Mistura Primordial',
          points: 0,
          description: 'A receita inicial do universo'
        }
      ]
    },
    {
      id: 4,
      name: 'Inflacão Cósmica',
      description: 'Expansão exponencial do universo',
      story: 'Em uma fração de segundo após o Big Bang, o universo passou por uma expansão inflacionária ultrarrápida. Imagine um balão que é inflado extremamente rápido, aumentando de tamanho milhares de vezes em um piscar de olhos. Essa expansão criou a estrutura básica do universo, tornando-o vasto e uniforme.',
      icon: '📈',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 expansões inflacionárias',
          emoji: '📈',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 expansões inflacionárias',
          emoji: '📈',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 expansões inflacionárias',
          emoji: '📈',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '📈',
          name: 'Inflacão',
          points: 0,
          description: 'A expansão exponencial do universo'
        }
      ]
    },
    {
      id: 5,
      name: 'Panela de Pressão',
      description: 'Controle da energia sob pressão extrema',
      story: 'O universo jovem era como uma panela de pressão gigante! A energia estava tão comprimida e quente que criava uma pressão imensa em todas as direções. Essa pressão mantinha o universo em um estado denso e quente, essencial para a formação das primeiras partículas.',
      icon: '♨️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 pontos de pressão',
          emoji: '♨️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 pontos de pressão',
          emoji: '♨️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 pontos de pressão',
          emoji: '♨️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '♨️',
          name: 'Pressão Cósmica',
          points: 0,
          description: 'A força comprimida do universo inicial'
        }
      ]
    },
    {
      id: 6,
      name: 'Sopa Primordial',
      description: 'Formação das partículas fundamentais',
      story: 'Como cozinhar uma sopa, o universo jovem estava fervendo com partículas fundamentais. Nesta "sopa primordial", quarks, elétrons e outras partículas começaram a interagir e se combinar, formando os blocos básicos da matéria.',
      icon: '🥣',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 sopas cósmicas',
          emoji: '🥣',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 sopas cósmicas',
          emoji: '🥣',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 sopas cósmicas',
          emoji: '🥣',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🥣',
          name: 'Sopa Primordial',
          points: 0,
          description: 'A mistura inicial de partículas do universo'
        }
      ]
    },
    {
      id: 7,
      name: 'Fogos de Artifício Cósmicos',
      description: 'Liberação de energia luminosa',
      story: 'Assim como fogos de artifício iluminam o céu, a energia do universo jovem se manifestava em intensas liberações de luz e radiação. Essas "explosões de luz" ajudaram a aquecer e moldar o universo emergente.',
      icon: '🎇',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 explosões luminosas',
          emoji: '🎇',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 explosões luminosas',
          emoji: '🎇',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 explosões luminosas',
          emoji: '🎇',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🎇',
          name: 'Explosão Luminosa',
          points: 0,
          description: 'Liberação intensa de luz no universo jovem'
        }
      ]
    },
    {
      id: 8,
      name: 'Ondas de Choque',
      description: 'Propagação das ondas de energia',
      story: 'Quando uma explosão ocorre, ondas de choque se espalham pelo ambiente. No universo inicial, as ondas de choque transportavam energia e matéria através do espaço em expansão, influenciando a formação das primeiras estruturas cósmicas.',
      icon: '🌊',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 ondas de choque',
          emoji: '🌊',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 ondas de choque',
          emoji: '🌊',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 ondas de choque',
          emoji: '🌊',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌊',
          name: 'Onda de Choque',
          points: 0,
          description: 'As ondas de energia que se propagam no universo inicial'
        }
      ]
    },
    {
      id: 9,
      name: 'Bolhas de Energia',
      description: 'Formação de estruturas energéticas',
      story: 'Assim como bolhas sobem em uma panela de água fervente, o universo inicial apresentava regiões de alta energia que se agrupavam e se separavam, formando estruturas complexas que mais tarde se tornariam as primeiras partículas e átomos.',
      icon: '🫧',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 bolhas de energia',
          emoji: '🫧',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 bolhas de energia',
          emoji: '🫧',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 bolhas de energia',
          emoji: '🫧',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🫧',
          name: 'Bolha de Energia',
          points: 0,
          description: 'Regiões concentradas de energia no universo jovem'
        }
      ]
    },
    {
      id: 10,
      name: 'Turbilhão Cósmico',
      description: 'Movimento caótico da energia',
      story: 'Imagine um redemoinho ou tornado de energia pura. No universo inicial, os turbilhões cósmicos misturavam e distribuíam a energia de forma caótica, promovendo a formação das primeiras partículas fundamentais e influenciando a estrutura do espaço-tempo.',
      icon: '🌀',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 turbilhões de energia',
          emoji: '🌀',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 turbilhões de energia',
          emoji: '🌀',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 turbilhões de energia',
          emoji: '🌀',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌀',
          name: 'Turbilhão de Energia',
          points: 0,
          description: 'O movimento caótico que molda o universo inicial'
        }
      ]
    },
    {
      id: 11,
      name: 'Mistura Energética',
      description: 'Combinação de diferentes tipos de energia',
      story: 'Assim como misturar ingredientes em uma receita, diferentes formas de energia no universo jovem começaram a interagir e combinar. Essas misturas energéticas foram fundamentais para a formação das partículas subatômicas e, eventualmente, dos átomos.',
      icon: '🔄',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 misturas energéticas',
          emoji: '🔄',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 misturas energéticas',
          emoji: '🔄',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 misturas energéticas',
          emoji: '🔄',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔄',
          name: 'Mistura Energética',
          points: 0,
          description: 'A combinação de diferentes formas de energia'
        }
      ]
    },
    {
      id: 12,
      name: 'Fervura Universal',
      description: 'Energia em ebulição constante',
      story: 'Imagine uma panela fervendo continuamente. O universo inicial era assim: uma energia em constante ebulição, criando condições extremas para a formação das primeiras partículas e núcleos atômicos durante a nucleossíntese primordial.',
      icon: '🔥🌌',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 pontos de fervura',
          emoji: '🔥🌌',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 pontos de fervura',
          emoji: '🔥🌌',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 pontos de fervura',
          emoji: '🔥🌌',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔥🌌',
          name: 'Fervura Universal',
          points: 0,
          description: 'Energia em constante ebulição no universo inicial'
        }
      ]
    },
    {
      id: 13,
      name: 'Dança das Partículas',
      description: 'Movimento frenético das partículas subatômicas',
      story: 'Imagine uma festa onde todos dançam sem parar. No universo inicial, as partículas subatômicas estavam em constante movimento e colisão, interagindo de forma frenética. Essa "dança" energética permitiu que as forças fundamentais começassem a moldar a estrutura do universo.',
      icon: '💃🕺',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 danças de partículas',
          emoji: '💃🕺',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 danças de partículas',
          emoji: '💃🕺',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 danças de partículas',
          emoji: '💃🕺',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💃🕺',
          name: 'Dança de Partículas',
          points: 0,
          description: 'O movimento constante das partículas subatômicas'
        }
      ]
    },
    {
      id: 14,
      name: 'Tempestade de Energia',
      description: 'Caos energético no universo jovem',
      story: 'Imagine uma super tempestade com raios cortando o céu. No universo inicial, tempestades de energia eram comuns, com raios de radiação e partículas carregadas movendo-se em alta velocidade. Esse caos energético foi crucial para a formação das primeiras partículas e a distribuição de energia pelo universo.',
      icon: '⚡🌩️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 tempestades energéticas',
          emoji: '⚡🌩️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 tempestades energéticas',
          emoji: '⚡🌩️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 tempestades energéticas',
          emoji: '⚡🌩️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⚡🌩️',
          name: 'Tempestade Energética',
          points: 0,
          description: 'Caos energético no universo jovem'
        }
      ]
    },
    {
      id: 15,
      name: 'Redemoinho Cósmico',
      description: 'Vórtice de energia no espaço-tempo',
      story: 'Imagine um redemoinho gigante no oceano. No universo inicial, redemoinhos cósmicos de energia influenciavam a curvatura do espaço-tempo, ajudando a distribuir a energia e a matéria de maneira desigual, o que eventualmente levaria à formação de estruturas maiores.',
      icon: '🌀🌌',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 redemoinhos cósmicos',
          emoji: '🌀🌌',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 redemoinhos cósmicos',
          emoji: '🌀🌌',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 redemoinhos cósmicos',
          emoji: '🌀🌌',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌀🌌',
          name: 'Redemoinho Cósmico',
          points: 0,
          description: 'O vórtice de energia que molda o universo'
        }
      ]
    },
    {
      id: 16,
      name: 'Explosão em Cascata',
      description: 'Reação em cadeia de eventos cósmicos',
      story: 'Imagine uma fileira de dominós sendo derrubados um após o outro. No universo inicial, uma explosão causava outra, criando uma reação em cadeia que espalhava energia e matéria por todo o espaço, facilitando a formação de estruturas cada vez mais complexas.',
      icon: '🎇🎆',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 explosões em cascata',
          emoji: '🎇🎆',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 explosões em cascata',
          emoji: '🎇🎆',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 explosões em cascata',
          emoji: '🎇🎆',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🎇🎆',
          name: 'Explosão em Cascata',
          points: 0,
          description: 'Reação em cadeia de explosões no universo'
        }
      ]
    },
    {
      id: 17,
      name: 'Vulcão Cósmico',
      description: 'Erupções massivas de energia',
      story: 'Imagine um vulcão gigante lançando lava e cinzas ao mesmo tempo. No universo inicial, vulcões cósmicos representavam erupções massivas de energia e matéria, distribuindo elementos essenciais para a formação das primeiras partículas e átomos.',
      icon: '🌋🔥',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 erupções cósmicas',
          emoji: '🌋🔥',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 erupções cósmicas',
          emoji: '🌋🔥',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 erupções cósmicas',
          emoji: '🌋🔥',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌋🔥',
          name: 'Erupção Cósmica',
          points: 0,
          description: 'Erupções massivas de energia no universo inicial'
        }
      ]
    },
    {
      id: 18,
      name: 'Tsunami de Energia',
      description: 'Ondas de energia massivas pelo universo',
      story: 'Imagine um tsunami colossal varrendo a costa. No universo inicial, tsunamis de energia eram ondas massivas que percorriam vastas distâncias, distribuindo energia e matéria e influenciando a formação das primeiras estruturas cósmicas.',
      icon: '🌊⚡',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 tsunamis de energia',
          emoji: '🌊⚡',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 tsunamis de energia',
          emoji: '🌊⚡',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 tsunamis de energia',
          emoji: '🌊⚡',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌊⚡',
          name: 'Tsunami de Energia',
          points: 0,
          description: 'Ondas massivas de energia no universo inicial'
        }
      ]
    },
    {
      id: 19,
      name: 'Furacão Primordial',
      description: 'Turbulência intensa no universo jovem',
      story: 'Imagine milhões de furacões girando simultaneamente. No universo inicial, furacões primordiais representavam turbulências intensas de energia que influenciavam a distribuição e a interação das partículas, contribuindo para a formação de estruturas maiores.',
      icon: '🌪️🌌',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 furacões primordiais',
          emoji: '🌪️🌌',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 furacões primordiais',
          emoji: '🌪️🌌',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 furacões primordiais',
          emoji: '🌪️🌌',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌪️🌌',
          name: 'Furacão Primordial',
          points: 0,
          description: 'Turbulências intensas de energia no universo inicial'
        }
      ]
    },
    {
      id: 20,
      name: 'Portal do Tempo',
      description: 'Transição para a próxima era cósmica',
      story: 'Imagine atravessar um portal mágico para uma nova dimensão. O universo estava se preparando para a próxima grande fase de sua evolução. Esse portal simboliza a transição de um estado caótico para uma era de maior organização, onde as estruturas maiores começariam a se formar.',
      icon: '⏳✨',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 portais temporais',
          emoji: '⏳✨',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 portais temporais',
          emoji: '⏳✨',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 portais temporais',
          emoji: '⏳✨',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⏳✨',
          name: 'Portal Temporal',
          points: 0,
          description: 'A passagem para a próxima era cósmica'
        }
      ]
    }
  ]
}
