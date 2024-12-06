import { World } from './types'

export const world7: World = {
  name: 'Terra Primitiva e Ambientes Inóspitos',
  description: 'Acompanhe a formação e estabilização da Terra, desde sua origem a partir do disco solar até a criação de condições propícias ao surgimento da vida. Neste estágio, o planeta passa por bombardeamentos, formação da Lua, resfriamento e desenvolvimento de uma atmosfera e oceanos primordiais, preparando o terreno para a grande transição biológica que está por vir.',
  icon: '🌍',
  levels: [
    {
      id: 1,
      name: 'Formação da Terra a partir do Disco Solar',
      description: 'Agregação de planetesimais e protoplanetas dando origem ao nosso lar',
      story: 'Após o disco protoplanetário se consolidar, grãos de poeira, planetesimais e protoplanetas colidem e se fundem. Deste processo caótico surge a Terra, ainda em um estado inicial, quente e sem condições para a vida.',
      icon: '🌎',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Forme 3 blocos terrestres',
          emoji: '🌎',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Forme 5 blocos terrestres',
          emoji: '🌎',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Forme 7 blocos terrestres',
          emoji: '🌎',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌎',
          name: 'Embrião Terrestre',
          points: 0,
          description: 'A jovem Terra em construção a partir do disco solar'
        }
      ]
    },
    {
      id: 2,
      name: 'Bombardeamento Pesado Tardio (Asteroides e Cometas)',
      description: 'Chuva de corpos impactando a Terra jovem',
      story: 'Asteroides e cometas bombardeiam a Terra primitiva, trazendo água, materiais orgânicos e calor. Embora violento, este bombardeamento contribui para a formação de oceanos e o enriquecimento químico do planeta.',
      icon: '☄️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Provoque 3 impactos cósmicos',
          emoji: '☄️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Provoque 5 impactos cósmicos',
          emoji: '☄️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Provoque 7 impactos cósmicos',
          emoji: '☄️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '☄️',
          name: 'Bombardeamento Cósmico',
          points: 0,
          description: 'Asteroides e cometas moldando a superfície terrestre'
        }
      ]
    },
    {
      id: 3,
      name: 'Formação da Lua (Impacto de Theia)',
      description: 'Um impacto gigantesco cria o satélite natural da Terra',
      story: 'Um protoplaneta chamado Theia colide com a jovem Terra, ejetando material para a órbita. Esse material se aglomera, formando a Lua. A Lua estabiliza a rotação da Terra, influenciando marés e clima futuro.',
      icon: '🌒',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 fragmentos lunares',
          emoji: '🌒',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 fragmentos lunares',
          emoji: '🌒',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 fragmentos lunares',
          emoji: '🌒',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌒',
          name: 'Embrião Lunar',
          points: 0,
          description: 'A formação da Lua a partir do impacto de Theia'
        }
      ]
    },
    {
      id: 4,
      name: 'Resfriamento da Superfície Terrestre',
      description: 'A crosta sólida começa a se formar',
      story: 'Com o tempo, a Terra perde calor para o espaço. A superfície derretida se resfria, formando uma crosta sólida. Essa crosta inicial é frágil, mas crucial para a futura geologia e estabilidade ambiental.',
      icon: '❄️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Resfrie 3 pontos da superfície',
          emoji: '❄️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Resfrie 5 pontos da superfície',
          emoji: '❄️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Resfrie 7 pontos da superfície',
          emoji: '❄️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '❄️',
          name: 'Crosta Sólida',
          points: 0,
          description: 'A superfície da Terra se tornando estável e fria'
        }
      ]
    },
    {
      id: 5,
      name: 'Vulcanismo Intenso e Atmosfera Primordial',
      description: 'Gases e lava moldando a jovem atmosfera',
      story: 'Vulcões ativos liberam gases, formando uma atmosfera primordial rica em vapor d\'água, dióxido de carbono e outros compostos. Essa atmosfera será chave no desenvolvimento químico do planeta.',
      icon: '🌋',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Ative 3 vulcanismos',
          emoji: '🌋',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Ative 5 vulcanismos',
          emoji: '🌋',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Ative 7 vulcanismos',
          emoji: '🌋',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌋',
          name: 'Vulcanismo Primordial',
          points: 0,
          description: 'Erupções alimentando a atmosfera jovem da Terra'
        }
      ]
    },
    {
      id: 6,
      name: 'Oceanos Primordiais: Água na Superfície',
      description: 'A superfície se enche de água líquida',
      story: 'A água trazida por cometas e liberada pelos vulcões condensa, formando oceanos primordiais. Esses oceanos são um ingrediente crucial para o surgimento da vida, fornecendo um ambiente estável e reações químicas fundamentais.',
      icon: '💧',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Preencha 3 áreas com água',
          emoji: '💧',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Preencha 5 áreas com água',
          emoji: '💧',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Preencha 7 áreas com água',
          emoji: '💧',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '💧',
          name: 'Oceano Primordial',
          points: 0,
          description: 'A Terra coberta por mares primitivos'
        }
      ]
    },
    {
      id: 7,
      name: 'Placas Tectônicas Iniciais',
      description: 'Movimento da crosta influenciando a geologia futura',
      story: 'A crosta sólida da Terra começa a se fragmentar em placas tectônicas. Esse movimento interno influencia a distribuição de continentes, montanhas e vulcões, preparando o palco geológico para a vida futura.',
      icon: '🧩',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Forme 3 placas iniciais',
          emoji: '🧩',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Forme 5 placas iniciais',
          emoji: '🧩',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Forme 7 placas iniciais',
          emoji: '🧩',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🧩',
          name: 'Placa Tectônica',
          points: 0,
          description: 'Fragmentos da crosta moldando a superfície terrestre'
        }
      ]
    },
    {
      id: 8,
      name: 'Armazenamento de Carbono e Formação de Minerais',
      description: 'Minerais aprisionando carbono e estabilizando o clima',
      story: 'O carbono atmosférico é absorvido pela superfície, formando carbonatos e minerais. Esse processo ajuda a regular o clima, mantendo a temperatura da Terra em níveis adequados para a estabilidade química.',
      icon: '💎',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Armazene carbono em 3 minerais',
          emoji: '💎',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Armazene carbono em 5 minerais',
          emoji: '💎',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Armazene carbono em 7 minerais',
          emoji: '💎',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '💎',
          name: 'Mineral Carbonático',
          points: 0,
          description: 'Carbono estabilizado em estruturas sólidas'
        }
      ]
    },
    {
      id: 9,
      name: 'Ambientes Hidrotermais Profundos',
      description: 'Fumarolas subaquáticas ricas em química',
      story: 'Nas profundezas oceânicas, surgem fontes hidrotermais. Esses ambientes quentes e ricos em minerais podem ter sido locais-chave para o surgimento de compostos orgânicos complexos, precursores da vida.',
      icon: '♨️',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Crie 3 fontes hidrotermais',
          emoji: '♨️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 fontes hidrotermais',
          emoji: '♨️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 fontes hidrotermais',
          emoji: '♨️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '♨️',
          name: 'Fonte Hidrotermal',
          points: 0,
          description: 'Laboratórios químicos naturais em águas profundas'
        }
      ]
    },
    {
      id: 10,
      name: 'Radiação Solar Intensa sem Camada de Ozônio',
      description: 'Luz solar afetando a química superficial',
      story: 'Sem uma camada de ozônio, a radiação ultravioleta do Sol atinge a superfície. Isso influencia reações químicas, podendo criar ou destruir moléculas orgânicas, preparando o terreno para futuras adaptações.',
      icon: '🌞',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Exponha 3 pontos à radiação',
          emoji: '🌞',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Exponha 5 pontos à radiação',
          emoji: '🌞',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Exponha 7 pontos à radiação',
          emoji: '🌞',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌞',
          name: 'Radiação UV',
          points: 0,
          description: 'Luz solar intensa sem proteção de ozônio'
        }
      ]
    },
    {
      id: 11,
      name: 'Relâmpagos e Tempestades Elétricas',
      description: 'Descargas elétricas acelerando reações químicas',
      story: 'Tempestades com relâmpagos fornecem energia para reações químicas, criando compostos orgânicos simples a partir de moléculas inorgânicas. Esse “laboratório natural” é um passo crucial rumo à vida.',
      icon: '⚡',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Gere 3 descargas elétricas',
          emoji: '⚡',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Gere 5 descargas elétricas',
          emoji: '⚡',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Gere 7 descargas elétricas',
          emoji: '⚡',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⚡',
          name: 'Descarga Primordial',
          points: 0,
          description: 'Relâmpagos ajudando a criar moléculas orgânicas'
        }
      ]
    },
    {
      id: 12,
      name: 'Crescente Estabilidade Química na Superfície',
      description: 'Menos impacto, mais equilíbrio',
      story: 'À medida que o bombardeamento diminui e a crosta estabiliza, o ambiente químico da Terra se torna mais previsível. Essa estabilidade é essencial para a formação e manutenção de moléculas orgânicas complexas.',
      icon: '⚗️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Estabilize 3 reações químicas',
          emoji: '⚗️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Estabilize 5 reações químicas',
          emoji: '⚗️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Estabilize 7 reações químicas',
          emoji: '⚗️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '⚗️',
          name: 'Estabilidade Química',
          points: 0,
          description: 'Um ambiente mais calmo para reações orgânicas'
        }
      ]
    },
    {
      id: 13,
      name: 'O Papel da Geologia na Formação de Compostos Orgânicos',
      description: 'Rochas e minerais catalisando reações',
      story: 'A geologia da Terra primitiva fornece superfícies catalíticas onde moléculas simples podem se combinar em compostos mais complexos. Minerais e rochas servem como "placas de Petri" naturais.',
      icon: '⛰️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Catalise 3 reações geológicas',
          emoji: '⛰️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Catalise 5 reações geológicas',
          emoji: '⛰️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Catalise 7 reações geológicas',
          emoji: '⛰️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⛰️',
          name: 'Catálise Mineral',
          points: 0,
          description: 'Rochas ajudando na formação de compostos orgânicos'
        }
      ]
    },
    {
      id: 14,
      name: 'Cianobactérias Primordiais? Ainda Não, Mas Logo Virão',
      description: 'Antecedendo o surgimento da vida fotossintética',
      story: 'Ainda não há vida, mas o ambiente químico e a presença de água líquida preparam o terreno para organismos como as cianobactérias. Elas só surgirão mais tarde, mas as condições básicas estão se formando agora.',
      icon: '🦠',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Prepare 3 nichos pré-bióticos',
          emoji: '🦠',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Prepare 5 nichos pré-bióticos',
          emoji: '🦠',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Prepare 7 nichos pré-bióticos',
          emoji: '🦠',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🦠',
          name: 'Nicho Pré-Biótico',
          points: 0,
          description: 'Ambientes prontos para futuros organismos'
        }
      ]
    },
    {
      id: 15,
      name: 'Gradiente de Temperatura e Energia Química',
      description: 'Diferenças térmicas impulsionando reações',
      story: 'Gradientes de temperatura, como entre água quente e fria, fornecem energia química para reações orgânicas. Essas diferenças energéticas são motores essenciais para a complexidade molecular.',
      icon: '🌡️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Estabeleça 3 gradientes energéticos',
          emoji: '🌡️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Estabeleça 5 gradientes energéticos',
          emoji: '🌡️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Estabeleça 7 gradientes energéticos',
          emoji: '🌡️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌡️',
          name: 'Gradiente Térmico',
          points: 0,
          description: 'Diferenças de temperatura gerando energia química'
        }
      ]
    },
    {
      id: 16,
      name: 'Formação de Moléculas Orgânicas Simples',
      description: 'Os blocos de construção da vida emergindo',
      story: 'A partir de água, CO₂, N₂ e outros gases, reações químicas impulsionadas por raios, vulcanismo e radiação UV criam moléculas orgânicas simples, como aminoácidos e bases nitrogenadas, os blocos da vida.',
      icon: '🧬',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Sintetize 3 moléculas orgânicas',
          emoji: '🧬',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Sintetize 5 moléculas orgânicas',
          emoji: '🧬',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Sintetize 7 moléculas orgânicas',
          emoji: '🧬',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🧬',
          name: 'Molécula Orgânica',
          points: 0,
          description: 'A base química da vida em formação'
        }
      ]
    },
    {
      id: 17,
      name: 'Ensaios Pré-Bióticos: Experimento Urey-Miller Cósmico',
      description: 'A natureza fazendo seus próprios experimentos químicos',
      story: 'Sem um cientista para conduzir experimentos, a Terra primitiva realiza seu próprio "Urey-Miller" natural. Condições atmosféricas e energéticas promovem reações criando compostos orgânicos complexos.',
      icon: '🔬',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Reproduza 3 reações pré-bióticas',
          emoji: '🔬',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Reproduza 5 reações pré-bióticas',
          emoji: '🔬',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Reproduza 7 reações pré-bióticas',
          emoji: '🔬',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔬',
          name: 'Reação Pré-Biótica',
          points: 0,
          description: 'Ensaios naturais criando compostos complexos'
        }
      ]
    },
    {
      id: 18,
      name: 'A Terra Esperando pela Faísca da Vida',
      description: 'Tudo pronto, falta apenas o passo final',
      story: 'A Terra já possui água líquida, moléculas orgânicas simples, fontes de energia e gradientes químicos. Falta apenas o "click" que dará origem à primeira forma de vida. O planeta aguarda a faísca da biogênese.',
      icon: '⏳',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Aguarde 3 instantes críticos',
          emoji: '⏳',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Aguarde 5 instantes críticos',
          emoji: '⏳',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Aguarde 7 instantes críticos',
          emoji: '⏳',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '⏳',
          name: 'Momento Crucial',
          points: 0,
          description: 'O planeta pronto para o surgimento da vida'
        }
      ]
    },
    {
      id: 19,
      name: 'Condições para a Vida Emergir (Água, Moléculas, Energia)',
      description: 'O trio fundamental para o surgimento da vida',
      story: 'Água líquida, moléculas orgânicas e uma fonte de energia. Esses são os ingredientes mínimos necessários para a vida surgir. A Terra agora reúne essas condições fundamentais.',
      icon: '💧',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Combine 3 ingredientes vitais',
          emoji: '💧',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Combine 5 ingredientes vitais',
          emoji: '💧',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Combine 7 ingredientes vitais',
          emoji: '💧',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💧',
          name: 'Ingrediente Essencial',
          points: 0,
          description: 'Água, moléculas orgânicas e energia se encontram'
        }
      ]
    },
    {
      id: 20,
      name: 'Um Portal para a Biosfera: A Próxima Etapa é a Vida',
      description: 'A transição da química para a biologia',
      story: 'Tudo está pronto. As condições ambientais, a química complexa e as fontes de energia estão alinhadas. Este nível marca a passagem da Terra inóspita para o surgimento da vida, um portal para a biosfera.',
      icon: '🚪🌱',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Abra 3 portais biológicos',
          emoji: '🚪🌱',
          requiredMatches: 3,
          points: 0,
          maxMoves: 19
        },
        two: {
          description: 'Abra 5 portais biológicos',
          emoji: '🚪🌱',
          requiredMatches: 5,
          points: 0,
          maxMoves: 15
        },
        three: {
          description: 'Abra 7 portais biológicos',
          emoji: '🚪🌱',
          requiredMatches: 7,
          points: 0,
          maxMoves: 11
        }
      },
      combinations: [
        {
          emoji: '🚪🌱',
          name: 'Portal à Vida',
          points: 0,
          description: 'A entrada definitiva para a era biológica na Terra'
        }
      ]
    }
  ]
}
