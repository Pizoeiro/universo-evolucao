import { World } from './types'

export const world2: World = {
  name: 'A Era das Partículas e da Radiação',
  description: 'Mergulhe em um universo denso e quente, repleto de partículas subatômicas e radiação intensa. Acompanhe a formação das primeiras partículas, núcleos atômicos e o equilíbrio delicado entre matéria, antimatéria e energia.',
  icon: '🔆',
  gridSize: 7,
  specialEmoji: '🌟', // Special emoji for world 2
  explosionRadius: 2, // Explosion affects 2 grid cells around the special emoji
  levels: [
    {
      id: 1,
      name: 'Mar de Quarks e Glúons',
      description: 'Um caldo primordial de quarks e gluons permeia o jovem universo',
      story: 'Logo após a inflação, o universo era um caldo incrivelmente quente e denso, repleto de quarks e gluons dançando em alta energia. Essas partículas fundamentais ainda não formavam prótons ou nêutrons, apenas um mar caótico de matéria em sua forma mais básica.',
      icon: '🧪',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 combinações quárquicas',
          emoji: '🧪',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 combinações quárquicas',
          emoji: '🧪',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 combinações quárquicas',
          emoji: '🧪',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🧪',
          name: 'Partícula Fundamental',
          points: 0,
          description: 'O estado primordial de quarks e gluons'
        }
      ]
    },
    {
      id: 2,
      name: 'Formação de Prótons e Nêutrons',
      description: 'Quarks se unem para formar os primeiros núcleons estáveis',
      story: 'Conforme o universo esfria, quarks se combinam em trios para formar prótons e nêutrons. Esses núcleons serão a base para os futuros átomos que compõem toda a matéria visível do cosmos.',
      icon: '⚛️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 núcleos primordiais',
          emoji: '⚛️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 núcleos primordiais',
          emoji: '⚛️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 núcleos primordiais',
          emoji: '⚛️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⚛️',
          name: 'Núcleo Inicial',
          points: 0,
          description: 'Os primeiros prótons e nêutrons, base da matéria comum'
        }
      ]
    },
    {
      id: 3,
      name: 'Nucleossíntese Primordial',
      description: 'Forja dos primeiros núcleos de hidrogênio, hélio e lítio',
      story: 'Nos primeiros minutos do universo, as condições permitiram a fusão de prótons e nêutrons, formando os núcleos leves de hidrogênio, hélio e um pouco de lítio. Essa "cozinha cósmica" definiu a proporção inicial dos elementos.',
      icon: '⚗️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 núcleos leves',
          emoji: '⚗️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 núcleos leves',
          emoji: '⚗️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 núcleos leves',
          emoji: '⚗️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⚗️',
          name: 'Núcleo Leve',
          points: 0,
          description: 'A base química inicial do universo: H, He e Li'
        }
      ]
    },
    {
      id: 4,
      name: 'Equilíbrio Matéria-Antimatéria',
      description: 'Um balé cósmico entre partículas e antipartículas',
      story: 'Após o Big Bang, matéria e antimatéria se aniquilaram quase mutuamente. Um leve desequilíbrio a favor da matéria garantiu que sobrássemos para construir estrelas, planetas e vida. Esse balanço delicado foi crucial para o cosmos atual.',
      icon: '⚖️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 equilíbrios fundamentais',
          emoji: '⚖️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 equilíbrios fundamentais',
          emoji: '⚖️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 equilíbrios fundamentais',
          emoji: '⚖️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⚖️',
          name: 'Balança Cósmica',
          points: 0,
          description: 'O delicado equilíbrio entre matéria e antimatéria'
        }
      ]
    },
    {
      id: 5,
      name: 'Resfriamento do Universo',
      description: 'A temperatura cai, permitindo novas interações',
      story: 'À medida que o universo se expande, ele esfria. Essa queda de temperatura possibilita que as partículas interajam de novas formas, permitindo a sobrevivência de núcleos leves e preparando o caminho para a formação de átomos.',
      icon: '❄️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 pontos de resfriamento',
          emoji: '❄️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 pontos de resfriamento',
          emoji: '❄️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 pontos de resfriamento',
          emoji: '❄️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '❄️',
          name: 'Frio Cósmico',
          points: 0,
          description: 'A diminuição da temperatura que possibilita novas estruturas'
        }
      ]
    },
    {
      id: 6,
      name: 'Domínio da Radiação',
      description: 'Uma era onde a radiação ditava as regras',
      story: 'Antes da matéria dominar, a radiação (fótons, principalmente) era o componente mais influente. O universo era opaco, com fótons sendo constantemente espalhados, ditando o ritmo da evolução cósmica inicial.',
      icon: '🔆',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 domínios radiativos',
          emoji: '🔆',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 domínios radiativos',
          emoji: '🔆',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 domínios radiativos',
          emoji: '🔆',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔆',
          name: 'Raio Primordial',
          points: 0,
          description: 'A radiação dominante no jovem universo'
        }
      ]
    },
    {
      id: 7,
      name: 'Fótons Livres e Opacidade',
      description: 'Luz aprisionada em um mar de partículas',
      story: 'A radiação não podia viajar livremente; fótons eram espalhados por elétrons livres. O universo era opaco, sem transparência. Somente mais tarde, com a formação de átomos neutros, a luz conseguiria escapar.',
      icon: '💡',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 sinais opacos',
          emoji: '💡',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 sinais opacos',
          emoji: '💡',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 sinais opacos',
          emoji: '💡',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💡',
          name: 'Fóton Cativo',
          points: 0,
          description: 'Luz presa em um universo opaco'
        }
      ]
    },
    {
      id: 8,
      name: 'Primeiros Indícios de Matéria Escura',
      description: 'Uma presença invisível influencia o cosmos',
      story: 'Embora não interaja com a luz, a matéria escura influencia a gravidade e a distribuição da matéria. Nesta era, seus efeitos sutis já moldavam o futuro das estruturas cósmicas.',
      icon: '🌑',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 sinais de matéria escura',
          emoji: '🌑',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 sinais de matéria escura',
          emoji: '🌑',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 sinais de matéria escura',
          emoji: '🌑',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌑',
          name: 'Sombra Cósmica',
          points: 0,
          description: 'A matéria invisível que molda o universo'
        }
      ]
    },
    {
      id: 9,
      name: 'Sopa de Partículas',
      description: 'Uma mistura fervilhante de partículas ainda sem átomos',
      story: 'Elétrons, prótons e nêutrons, junto com fótons, estavam todos misturados em uma "sopa" fervilhante. A temperatura e densidade ainda impediam a formação de átomos neutros estáveis.',
      icon: '🥣',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 sopas de partículas',
          emoji: '🥣',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 sopas de partículas',
          emoji: '🥣',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 sopas de partículas',
          emoji: '🥣',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🥣',
          name: 'Mistura Particulada',
          points: 0,
          description: 'O caldo de partículas antes dos átomos'
        }
      ]
    },
    {
      id: 10,
      name: 'Interações Fracas e Fortes',
      description: 'Forças fundamentais modelando o universo',
      story: 'Além da gravidade e do eletromagnetismo, as interações fraca e forte desempenharam papéis cruciais na formação e estabilidade das partículas e núcleos no universo jovem.',
      icon: '🤝',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 interações fundamentais',
          emoji: '🤝',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 interações fundamentais',
          emoji: '🤝',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 interações fundamentais',
          emoji: '🤝',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🤝',
          name: 'Força Primordial',
          points: 0,
          description: 'As interações fraca e forte moldando a matéria'
        }
      ]
    },
    {
      id: 11,
      name: 'Papel da Gravidade Inicial',
      description: 'A gravidade começa a influenciar a distribuição da matéria',
      story: 'A gravidade, embora fraca em comparação com outras forças, desempenha um papel cumulativo. Desde cedo, ela começou a agregar matéria, criando sementes para as futuras galáxias e estruturas cósmicas.',
      icon: '🌌',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 focos gravitacionais',
          emoji: '🌌',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 focos gravitacionais',
          emoji: '🌌',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 focos gravitacionais',
          emoji: '🌌',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌌',
          name: 'Semente Gravitacional',
          points: 0,
          description: 'Gravidade guiando a formação das futuras estruturas'
        }
      ]
    },
    {
      id: 12,
      name: 'Definindo a Densidade do Universo',
      description: 'A quantidade de matéria e energia estabelece o destino cósmico',
      story: 'A densidade total do universo - matéria, radiação e energia escura - determina como ele evoluirá. Nesta fase, os parâmetros se ajustam para definir sua expansão futura.',
      icon: '🪨',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 pontos densos',
          emoji: '🪨',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 pontos densos',
          emoji: '🪨',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 pontos densos',
          emoji: '🪨',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🪨',
          name: 'Densidade Cósmica',
          points: 0,
          description: 'A massa e energia que definem o destino do universo'
        }
      ]
    },
    {
      id: 13,
      name: 'Flutuações de Densidade Primordiais',
      description: 'Pequenas variações que darão origem às galáxias',
      story: 'Apesar de ser quase uniforme, o universo apresenta pequenas flutuações de densidade. Essas “rugas” na estrutura cósmica serão a semente da formação de galáxias e grandes estruturas.',
      icon: '🌊',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 ondas de densidade',
          emoji: '🌊',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 ondas de densidade',
          emoji: '🌊',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 ondas de densidade',
          emoji: '🌊',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌊',
          name: 'Onda Primordial',
          points: 0,
          description: 'Pequenas irregularidades que moldarão o cosmos'
        }
      ]
    },
    {
      id: 14,
      name: 'Ajustando a Relatividade Geral',
      description: 'As leis do espaço-tempo determinam a evolução cósmica',
      story: 'A Relatividade Geral de Einstein descreve como a matéria e a energia curvam o espaço-tempo. Nesta fase inicial, as equações cósmicas já estão definindo o destino do universo em grande escala.',
      icon: '🌐',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 ajustes relativísticos',
          emoji: '🌐',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 ajustes relativísticos',
          emoji: '🌐',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 ajustes relativísticos',
          emoji: '🌐',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌐',
          name: 'Curvatura Espacial',
          points: 0,
          description: 'O espaço-tempo moldado pela matéria e energia'
        }
      ]
    },
    {
      id: 15,
      name: 'Competição entre Radiação e Matéria',
      description: 'Qual componente dominará a expansão cósmica?',
      story: 'Inicialmente, a radiação domina. Mas conforme o universo expande e esfria, a matéria ganha relevância. Este é um momento de transição entre o domínio da radiação e o predomínio da matéria.',
      icon: '⚔️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 disputas cósmicas',
          emoji: '⚔️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 disputas cósmicas',
          emoji: '⚔️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 disputas cósmicas',
          emoji: '⚔️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⚔️',
          name: 'Batalha Cósmica',
          points: 0,
          description: 'Matéria e radiação disputando o rumo do universo'
        }
      ]
    },
    {
      id: 16,
      name: 'Transição para a Era da Matéria',
      description: 'Do mar de partículas para a matéria comum',
      story: 'Conforme a radiação perde influência, a matéria começa a dominar. O universo se encaminha para a formação de átomos neutros, abrindo caminho para uma nova era de estruturas mais complexas.',
      icon: '🌊⚛️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 transições materiais',
          emoji: '🌊⚛️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 transições materiais',
          emoji: '🌊⚛️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 transições materiais',
          emoji: '🌊⚛️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌊⚛️',
          name: 'Ponte para a Matéria',
          points: 0,
          description: 'A passagem da era dominada pela radiação à era dominada pela matéria'
        }
      ]
    },
    {
      id: 17,
      name: 'Diminuindo a Interação Matéria-Luz',
      description: 'Elétrons começam a ser capturados, reduzindo a interação com fótons',
      story: 'Quando prótons e elétrons se unem, formam átomos neutros. Essa neutralidade diminui a quantidade de espalhamento de fótons, preparando o terreno para a transparência do universo.',
      icon: '🌗',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 laços neutros',
          emoji: '🌗',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 laços neutros',
          emoji: '🌗',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 laços neutros',
          emoji: '🌗',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌗',
          name: 'Vínculo Neutro',
          points: 0,
          description: 'A redução da interação entre matéria e luz'
        }
      ]
    },
    {
      id: 18,
      name: 'Preparando a Recombinação',
      description: 'Condições amadurecem para formação dos primeiros átomos neutros',
      story: 'A temperatura e a densidade agora permitem que elétrons se liguem aos núcleos, formando átomos estáveis de hidrogênio e hélio. O universo se aproxima da era da recombinação, quando finalmente se tornará transparente.',
      icon: '🛠️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 preparações atômicas',
          emoji: '🛠️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 preparações atômicas',
          emoji: '🛠️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 preparações atômicas',
          emoji: '🛠️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🛠️',
          name: 'Ferramenta Cósmica',
          points: 0,
          description: 'Preparando o universo para a formação de átomos neutros'
        }
      ]
    },
    {
      id: 19,
      name: 'Consolidando Níveis Energéticos',
      description: 'Átomos formam estruturas estáveis com níveis de energia definidos',
      story: 'A formação de átomos introduz níveis de energia bem definidos para os elétrons. O universo passa a ter uma química primordial simples, mas fundamental, que servirá de base para todas as transformações futuras.',
      icon: '💎',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 estruturas estáveis',
          emoji: '💎',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 estruturas estáveis',
          emoji: '💎',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 estruturas estáveis',
          emoji: '💎',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💎',
          name: 'Nível Energético',
          points: 0,
          description: 'A estabilidade eletrônica que permite a existência de átomos'
        }
      ]
    },
    {
      id: 20,
      name: 'Portal para a Transparência do Universo',
      description: 'Aproximando-se da era da recombinação e da liberação da luz',
      story: 'Logo, os elétrons serão capturados, os fótons poderão viajar livremente e o universo se tornará transparente. Este é o portal que leva à próxima era cósmica, onde a radiação de fundo se tornará visível para sempre.',
      icon: '⏳💫',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 portais translúcidos',
          emoji: '⏳💫',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 portais translúcidos',
          emoji: '⏳💫',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 portais translúcidos',
          emoji: '⏳💫',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⏳💫',
          name: 'Porta da Claridade',
          points: 0,
          description: 'A transição para a era da transparência cósmica'
        }
      ]
    }
  ]
}
