import { World } from './types'

export const world6: World = {
  name: 'A Forja dos Sistemas Estelares',
  description: 'Dentro das galáxias, nuvens moleculares gigantes dão origem a discos protoplanetários e, eventualmente, sistemas estelares completos. Acompanhe o processo que culmina na formação de planetas, incluindo o nosso próprio Sistema Solar.',
  icon: '🪐',
  levels: [
    {
      id: 1,
      name: 'Nuvens Moleculares Gigantes',
      description: 'Berços estelares compostos por gás e poeira',
      story: 'As estrelas e seus sistemas nascem em nuvens moleculares gigantes. Compostas principalmente de hidrogênio molecular, essas nuvens frias e densas são o ponto de partida para a formação de protoestrelas e, um dia, planetas.',
      icon: '🌫️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Forme 3 nuvens densas',
          emoji: '🌫️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Forme 5 nuvens densas',
          emoji: '🌫️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Forme 7 nuvens densas',
          emoji: '🌫️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌫️',
          name: 'Nuvem Molecular',
          points: 0,
          description: 'A matéria-prima das futuras estrelas e planetas'
        }
      ]
    },
    {
      id: 2,
      name: 'Colapso de Nuvens e Formação de Protoestrelas',
      description: 'Gravidade comprimindo nuvens em embriões estelares',
      story: 'A gravidade faz com que regiões mais densas das nuvens moleculares colapsem, formando protoestrelas - núcleos quentes e densos que em breve iniciarão fusão nuclear, tornando-se estrelas.',
      icon: '🔻',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Colapse 3 núcleos',
          emoji: '🔻',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Colapse 5 núcleos',
          emoji: '🔻',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Colapse 7 núcleos',
          emoji: '🔻',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🔻',
          name: 'Protoestrela em Formação',
          points: 0,
          description: 'O embrião de uma futura estrela'
        }
      ]
    },
    {
      id: 3,
      name: 'Discos Circunstelares de Gás e Poeira',
      description: 'Matéria orbitando a protoestrela',
      story: 'Ao redor da protoestrela, forma-se um disco de gás e poeira. É neste disco circunstelar que ocorrerá a formação de planetesimais, embriões dos planetas.',
      icon: '💿',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Forme 3 discos',
          emoji: '💿',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Forme 5 discos',
          emoji: '💿',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Forme 7 discos',
          emoji: '💿',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💿',
          name: 'Disco Protoplanetário',
          points: 0,
          description: 'O berço dos futuros planetas'
        }
      ]
    },
    {
      id: 4,
      name: 'Processo de Acreção e Formação de Planetesimais',
      description: 'Pequenos corpos sólidos emergindo do disco',
      story: 'Grãos de poeira colidem e se unem, formando corpos maiores chamados planetesimais. Esses objetos, com alguns quilômetros de diâmetro, são as sementes dos planetas.',
      icon: '🪨',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 planetesimais',
          emoji: '🪨',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 planetesimais',
          emoji: '🪨',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Crie 7 planetesimais',
          emoji: '🪨',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🪨',
          name: 'Planetesimal',
          points: 0,
          description: 'Um bloco inicial para a formação de planetas'
        }
      ]
    },
    {
      id: 5,
      name: 'Primeiros Planetas Rochosos e Gasosos',
      description: 'Corpos planetários ganhando forma',
      story: 'Os planetesimais colidem e crescem, formando protoplanetas. Alguns se tornam rochosos e pequenos, outros acumulam grandes quantidades de gás, tornando-se gigantes gasosos.',
      icon: '🌍',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Forme 3 protoplanetas',
          emoji: '🌍',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Forme 5 protoplanetas',
          emoji: '🌍',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Forme 7 protoplanetas',
          emoji: '🌍',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌍',
          name: 'Protoplaneta',
          points: 0,
          description: 'A etapa intermediária entre planetesimal e planeta'
        }
      ]
    },
    {
      id: 6,
      name: 'Ventos Estelares Limpando o Disco',
      description: 'Removendo o excesso de gás e poeira',
      story: 'A jovem estrela emite ventos estelares fortes. Esses fluxos de partículas sopram o gás e a poeira remanescentes do disco, deixando para trás apenas os corpos planetários mais estáveis.',
      icon: '🌬️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Remova 3 excessos de poeira',
          emoji: '🌬️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Remova 5 excessos de poeira',
          emoji: '🌬️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Remova 7 excessos de poeira',
          emoji: '🌬️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌬️',
          name: 'Vento Estelar',
          points: 0,
          description: 'Limpando o disco e definindo a arquitetura final do sistema'
        }
      ]
    },
    {
      id: 7,
      name: 'Diferenciação Química nos Discos',
      description: 'Materiais separados por temperatura e distância',
      story: 'Nos discos protoplanetários, a temperatura diminui com a distância da estrela. Materiais diferentes condensam em diferentes regiões, definindo onde se formam planetas rochosos ou gasosos.',
      icon: '🧪',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 zonas químicas',
          emoji: '🧪',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Crie 5 zonas químicas',
          emoji: '🧪',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 zonas químicas',
          emoji: '🧪',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🧪',
          name: 'Zonamento Químico',
          points: 0,
          description: 'A distribuição de materiais no disco planetário'
        }
      ]
    },
    {
      id: 8,
      name: 'Migração Planetária',
      description: 'Planetas mudando de órbita',
      story: 'Planetas recém-formados podem migrar no disco, alterando suas órbitas. Essa dinâmica molda a arquitetura final do sistema, empurrando gigantes gasosos para mais perto ou mais longe da estrela.',
      icon: '↔️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Realize 3 migrações',
          emoji: '↔️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Realize 5 migrações',
          emoji: '↔️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Realize 7 migrações',
          emoji: '↔️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '↔️',
          name: 'Órbita Móvel',
          points: 0,
          description: 'Planetas mudando de posição no sistema'
        }
      ]
    },
    {
      id: 9,
      name: 'Impactos e Formação de Satélites',
      description: 'Colisões criando luas e satélites naturais',
      story: 'Grandes impactos entre protoplanetas e planetesimais podem ejetar material para órbita, formando satélites. Assim surgem luas e outros corpos menores orbitando planetas.',
      icon: '💥',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Provoque 3 impactos formadores',
          emoji: '💥',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Provoque 5 impactos formadores',
          emoji: '💥',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Provoque 7 impactos formadores',
          emoji: '💥',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💥',
          name: 'Impacto Formador de Satélite',
          points: 0,
          description: 'Colisões que geram luas e anéis'
        }
      ]
    },
    {
      id: 10,
      name: 'Sistemas Múltiplos de Estrelas e Exoplanetas',
      description: 'Variedade de configurações estelares',
      story: 'Nem todos os sistemas têm uma única estrela. Sistemas binários ou triplos são comuns, e exoplanetas podem orbitar uma ou várias estrelas, criando cenários complexos.',
      icon: '✨',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Forme 3 sistemas múltiplos',
          emoji: '✨',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Forme 5 sistemas múltiplos',
          emoji: '✨',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Forme 7 sistemas múltiplos',
          emoji: '✨',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '✨',
          name: 'Sistema Múltiplo',
          points: 0,
          description: 'Várias estrelas e exoplanetas interagindo'
        }
      ]
    },
    {
      id: 11,
      name: 'Diversidade Planetária (Gigantes Gasosos, Superterras, Anãs Marrons)',
      description: 'Uma variedade de tipos de planetas',
      story: 'Os sistemas estelares apresentam uma diversidade incrível de planetas: gigantes gasosos maiores que Júpiter, superterras rochosas e até anãs marrons, entre estrela e planeta.',
      icon: '🔆',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Revele 3 tipos planetários',
          emoji: '🔆',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Revele 5 tipos planetários',
          emoji: '🔆',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Revele 7 tipos planetários',
          emoji: '🔆',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔆',
          name: 'Ecossistema Planetário',
          points:0,
          description: 'A grande variedade de mundos possíveis'
        }
      ]
    },
    {
      id: 12,
      name: 'Formação do Sistema Solar (Nível especial)',
      description: 'Nosso lar cósmico ganhando forma',
      story: 'Entre tantos sistemas, um se destaca: o futuro Sistema Solar. Um disco protoplanetário ao redor de uma estrela jovem (o Sol) consolidará planetas, incluindo a Terra, onde a vida florescerá.',
      icon: '🌞',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Forme 3 componentes solares',
          emoji: '🌞',
          requiredMatches: 3,
          points: 0,
          maxMoves: 19
        },
        two: {
          description: 'Forme 5 componentes solares',
          emoji: '🌞',
          requiredMatches: 5,
          points: 0,
          maxMoves: 15
        },
        three: {
          description: 'Forme 7 componentes solares',
          emoji: '🌞',
          requiredMatches: 7,
          points: 0,
          maxMoves: 11
        }
      },
      combinations: [
        {
          emoji: '🌞',
          name: 'Embrião do Sistema Solar',
          points:0,
          description: 'A origem do nosso lar cósmico'
        }
      ]
    },
    {
      id: 13,
      name: 'Cinturão de Asteroides e Cometas',
      description: 'Reservatórios de material primordial',
      story: 'Nem todo material forma planetas. Alguns restos se tornam cinturões de asteroides e nuvens de cometas, reservando partículas primitivas, água e compostos orgânicos para o futuro.',
      icon: '☄️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 cinturões primitivos',
          emoji: '☄️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 cinturões primitivos',
          emoji: '☄️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Crie 7 cinturões primitivos',
          emoji: '☄️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '☄️',
          name: 'Cinturão Primitivo',
          points:0,
          description: 'Asteroides e cometas: reservas de materiais antigos'
        }
      ]
    },
    {
      id: 14,
      name: 'Interações Gravitacionais Estabilizando Órbitas',
      description: 'A dança cósmica resultando em harmonia orbital',
      story: 'A gravidade ajusta as órbitas dos planetas, estabilizando o sistema estelar. Com o tempo, essas interações resultam em configurações estáveis, garantindo a longevidade do sistema.',
      icon: '⚖️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Estabilize 3 órbitas',
          emoji: '⚖️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Estabilize 5 órbitas',
          emoji: '⚖️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Estabilize 7 órbitas',
          emoji: '⚖️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '⚖️',
          name: 'Harmonia Orbital',
          points:0,
          description: 'Órbitas ajustadas pela dança gravitacional'
        }
      ]
    },
    {
      id: 15,
      name: 'Ajustando a Metalicidade das Estrelas',
      description: 'Influência da composição química no sistema',
      story: 'A metalicidade da estrela (quantidade de elementos pesados) influencia o tipo de planetas formados. Estrelas mais ricas em metais facilitam o surgimento de planetas rochosos e complexos.',
      icon: '🔬',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Ajuste 3 metalicidades',
          emoji: '🔬',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Ajuste 5 metalicidades',
          emoji: '🔬',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Ajuste 7 metalicidades',
          emoji: '🔬',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🔬',
          name: 'Ajuste Metálico',
          points:0,
          description: 'A composição da estrela influenciando seus planetas'
        }
      ]
    },
    {
      id: 16,
      name: 'Ciclo de Vida Estelar e Suprimento de Matéria',
      description: 'Estrelas reciclando matéria cósmica',
      story: 'As estrelas nascem, vivem e morrem, liberando matéria e enriquecendo o meio interestelar. Esse ciclo contínuo abastece novos discos protoplanetários, garantindo a evolução cósmica.',
      icon: '🔄',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Completar 3 ciclos de matéria',
          emoji: '🔄',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Completar 5 ciclos de matéria',
          emoji: '🔄',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Completar 7 ciclos de matéria',
          emoji: '🔄',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🔄',
          name: 'Ciclo Cósmico',
          points:0,
          description: 'A vida e morte de estrelas reabastecendo o cosmos'
        }
      ]
    },
    {
      id: 17,
      name: 'Sistemas Estelares Binários',
      description: 'Duas estrelas dançando em torno de um centro comum',
      story: 'Muitos sistemas são binários, com duas estrelas orbitando seu centro de massa. Esses sistemas podem ter planetas em órbitas complexas, mostrando a diversidade infinita dos mundos cósmicos.',
      icon: '🌗',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 sistemas binários',
          emoji: '🌗',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 sistemas binários',
          emoji: '🌗',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Crie 7 sistemas binários',
          emoji: '🌗',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌗',
          name: 'Dança Binária',
          points:0,
          description: 'Duas estrelas em harmonia orbital'
        }
      ]
    },
    {
      id: 18,
      name: 'Condições para Água e Compostos Orgânicos',
      description: 'O surgimento de ingredientes da vida',
      story: 'Em algumas regiões dos discos, a temperatura e a química permitem a existência de água líquida ou compostos orgânicos complexos. Esses ingredientes são essenciais para a origem da vida.',
      icon: '💧',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Encontre 3 reservas de água/orgânicos',
          emoji: '💧',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Encontre 5 reservas de água/orgânicos',
          emoji: '💧',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Encontre 7 reservas de água/orgânicos',
          emoji: '💧',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '💧',
          name: 'Reservatório de Vida',
          points:0,
          description: 'Água e compostos orgânicos em potencial'
        }
      ]
    },
    {
      id: 19,
      name: 'Da Poeira às Sementes da Vida (Moléculas Orgânicas Complexas)',
      description: 'A química complexa precedendo a vida',
      story: 'A poeira no disco pode conter moléculas orgânicas complexas, precursoras da vida. Antes mesmo dos planetas se formarem completamente, a química básica da vida já está presente.',
      icon: '🌱',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Gere 3 complexos orgânicos',
          emoji: '🌱',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Gere 5 complexos orgânicos',
          emoji: '🌱',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Gere 7 complexos orgânicos',
          emoji: '🌱',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌱',
          name: 'Molécula Orgânica',
          points:0,
          description: 'As sementes químicas da vida no disco planetário'
        }
      ]
    },
    {
      id: 20,
      name: 'Transição: Um Planeta Especial Chamado Terra',
      description: 'Caminhando para o surgimento da vida',
      story: 'A formação do Sistema Solar chega a um ponto crítico, surgindo a Terra com condições propícias para a vida. Este portal simboliza a passagem da formação dos sistemas estelares para a evolução da vida em um planeta único.',
      icon: '🌍',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Crie 3 portais planetários',
          emoji: '🌍',
          requiredMatches: 3,
          points: 0,
          maxMoves: 19
        },
        two: {
          description: 'Crie 5 portais planetários',
          emoji: '🌍',
          requiredMatches: 5,
          points: 0,
          maxMoves: 15
        },
        three: {
          description: 'Crie 7 portais planetários',
          emoji: '🌍',
          requiredMatches: 7,
          points: 0,
          maxMoves: 11
        }
      },
      combinations: [
        {
          emoji: '🌍',
          name: 'Portal Terrestre',
          points:0,
          description: 'A preparação final para o surgimento da vida na Terra'
        }
      ]
    }
  ]
}
