import { World } from './types'

export const world5: World = {
  name: 'O Nascimento das Galáxias',
  description: 'A aglomeração de matéria dá origem às primeiras galáxias, estruturas fundamentais do cosmos. Acompanhe a formação e evolução das primeiras galáxias, do caos inicial até a estabilização de complexos sistemas estelares que moldarão o universo.',
  icon: '🌌',
  gridSize: 10,
  specialEmoji: '🌃', // Special emoji for world 5
  explosionRadius: 5, // Explosion affects 5 grid cells around the special emoji
  levels: [
    {
      id: 1,
      name: 'Aglomerados de Matéria Escura Moldam a Estrutura',
      description: 'Moldando a distribuição de matéria no universo',
      story: 'A matéria escura, invisível porém dominante gravitacionalmente, forma aglomerados que servem de andaime para a matéria bariônica. Esses “esqueletos” invisíveis guiam a formação das galáxias.',
      icon: '🕸️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Forme 3 estruturas esqueléticas',
          emoji: '🕸️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Forme 5 estruturas esqueléticas',
          emoji: '🕸️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Forme 7 estruturas esqueléticas',
          emoji: '🕸️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🕸️',
          name: 'Esqueleto Escuro',
          points: 0,
          description: 'A base invisível para as futuras galáxias'
        }
      ]
    },
    {
      id: 2,
      name: 'Pequenas Protogaláxias se Fundem',
      description: 'União de blocos iniciais para formar galáxias maiores',
      story: 'As primeiras estruturas luminosas são pequenas protogaláxias. Pela gravidade, elas se fundem, crescendo e dando origem a galáxias cada vez mais complexas.',
      icon: '🔗',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Funda 3 protogaláxias',
          emoji: '🔗',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Funda 5 protogaláxias',
          emoji: '🔗',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Funda 7 protogaláxias',
          emoji: '🔗',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🔗',
          name: 'Fusão Protogaláctica',
          points: 0,
          description: 'A união de pequenas galáxias embrionárias'
        }
      ]
    },
    {
      id: 3,
      name: 'Crescimento de Galáxias por Fusão',
      description: 'Galáxias aumentando de massa ao se fundirem',
      story: 'A fusão de protogaláxias e galáxias menores é um processo contínuo. Esse mecanismo de crescimento constrói galáxias maiores e mais complexas, estabelecendo a diversidade galáctica.',
      icon: '🌀',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Amplie 3 galáxias',
          emoji: '🌀',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Amplie 5 galáxias',
          emoji: '🌀',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Amplie 7 galáxias',
          emoji: '🌀',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌀',
          name: 'Galáxia em Crescimento',
          points: 0,
          description: 'Aumentando massa e complexidade pela fusão'
        }
      ]
    },
    {
      id: 4,
      name: 'Formação de Discos e Bulbos Galácticos',
      description: 'Estruturas internas das galáxias se formando',
      story: 'Em seu interior, as galáxias se estruturam em discos e bulbos. O disco abriga a maioria das estrelas mais jovens, enquanto o bulbo central concentra estrelas mais velhas e, muitas vezes, um buraco negro supermassivo.',
      icon: '💿',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 discos galácticos',
          emoji: '💿',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 discos galácticos',
          emoji: '💿',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 discos galácticos',
          emoji: '💿',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💿',
          name: 'Disco Galáctico',
          points: 0,
          description: 'Regiões planas onde estrelas se organizam'
        }
      ]
    },
    {
      id: 5,
      name: 'As Primeiras Galáxias Anãs',
      description: 'Pequenos sistemas estelares, blocos para galáxias maiores',
      story: 'Antes de galáxias gigantes, havia galáxias anãs, com poucas estrelas. Elas são peças-chave no quebra-cabeça da formação galáctica, servindo de blocos construtores para sistemas maiores.',
      icon: '💫',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 galáxias anãs',
          emoji: '💫',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 galáxias anãs',
          emoji: '💫',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Crie 7 galáxias anãs',
          emoji: '💫',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '💫',
          name: 'Galáxia Anã',
          points: 0,
          description: 'Pequenas precursoras das grandes galáxias'
        }
      ]
    },
    {
      id: 6,
      name: 'Galáxias Elípticas e Espirais Iniciais',
      description: 'Diversidade de formas galácticas surgindo',
      story: 'As galáxias não são todas iguais. Algumas formam elipses suaves, outras desenvolvem braços espirais. Essa variedade morfológica resulta da história de fusões, rotações e composições internas.',
      icon: '🌀',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 padrões galácticos',
          emoji: '🌀',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 padrões galácticos',
          emoji: '🌀',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 padrões galácticos',
          emoji: '🌀',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌀',
          name: 'Arquitetura Galáctica',
          points: 0,
          description: 'A diversidade de formas entre galáxias primitivas'
        }
      ]
    },
    {
      id: 7,
      name: 'Interações e Merger de Galáxias Jovens',
      description: 'Galáxias colidindo e se fundindo',
      story: 'As galáxias jovens interagem gravitacionalmente, colidindo e se fundindo. Esses eventos podem alterar sua forma, criar starbursts (explosões de formação estelar) e lançar matéria no espaço.',
      icon: '🤝',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Funda 3 galáxias jovens',
          emoji: '🤝',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Funda 5 galáxias jovens',
          emoji: '🤝',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Funda 7 galáxias jovens',
          emoji: '🤝',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🤝',
          name: 'Fusão Galáctica',
          points: 0,
          description: 'Interações que alteram o destino das galáxias'
        }
      ]
    },
    {
      id: 8,
      name: 'Buracos Negros Supermassivos no Centro das Galáxias',
      description: 'Gigantes invisíveis no coração galáctico',
      story: 'Muitas galáxias abrigam buracos negros supermassivos em seu centro. Apesar de invisíveis, sua gravidade é imensa, influenciando a dinâmica estelar, o crescimento da galáxia e a atividade de núcleos ativos.',
      icon: '🕳️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Localize 3 centros massivos',
          emoji: '🕳️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Localize 5 centros massivos',
          emoji: '🕳️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Localize 7 centros massivos',
          emoji: '🕳️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🕳️',
          name: 'Buraco Negro Central',
          points: 0,
          description: 'O núcleo invisível e poderoso das galáxias'
        }
      ]
    },
    {
      id: 9,
      name: 'Jatos Relativísticos de Núcleos Ativos',
      description: 'Energia liberada por buracos negros vorazes',
      story: 'Alguns buracos negros ativos lançam jatos relativísticos de matéria a velocidades próximas à da luz. Esses jatos podem se estender por milhares de anos-luz, afetando o meio galáctico.',
      icon: '⚡',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Gere 3 jatos relativísticos',
          emoji: '⚡',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Gere 5 jatos relativísticos',
          emoji: '⚡',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Gere 7 jatos relativísticos',
          emoji: '⚡',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⚡',
          name: 'Jato Relativístico',
          points: 0,
          description: 'Fluxos intensos de matéria do núcleo galáctico'
        }
      ]
    },
    {
      id: 10,
      name: 'Regiões de Formação Estelar Intensiva',
      description: 'Berçários de estrelas em escala galáctica',
      story: 'Em algumas partes das galáxias, o gás e a poeira se aglomeram, formando regiões de intensa formação estelar. Essas “fábricas” de estrelas criam populações inteiras de novas estrelas.',
      icon: '🌠',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 berçários estelares',
          emoji: '🌠',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 berçários estelares',
          emoji: '🌠',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Crie 7 berçários estelares',
          emoji: '🌠',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌠',
          name: 'Ninho de Estrelas',
          points: 0,
          description: 'Regiões onde novas estrelas nascem em massa'
        }
      ]
    },
    {
      id: 11,
      name: 'O Papel do Hidrogênio e da Poeira Cósmica',
      description: 'Matéria-prima das estrelas e planetas',
      story: 'Hidrogênio, hélio e uma pitada de poeira cósmica são os ingredientes básicos das galáxias. Sem eles, não haveria formação de estrelas ou planetas. Eles determinam a cor, a evolução e a química galáctica.',
      icon: '💨',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Colete 3 nuvens de matéria-prima',
          emoji: '💨',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Colete 5 nuvens de matéria-prima',
          emoji: '💨',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Colete 7 nuvens de matéria-prima',
          emoji: '💨',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💨',
          name: 'Nuvem Interestelar',
          points: 0,
          description: 'Gás e poeira, a base da formação estelar'
        }
      ]
    },
    {
      id: 12,
      name: 'Feedback Estelar e Galáctico (Ventilação de Gases)',
      description: 'Ventos estelares e supernovas redistribuindo matéria',
      story: 'As estrelas não apenas formam matéria, elas também a redistribuem. Ventos estelares e explosões de supernovas expulsam gás e poeira, afetando a formação estelar futura e o crescimento galáctico.',
      icon: '🌬️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 fluxos de feedback',
          emoji: '🌬️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 fluxos de feedback',
          emoji: '🌬️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Crie 7 fluxos de feedback',
          emoji: '🌬️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌬️',
          name: 'Vento Galáctico',
          points: 0,
          description: 'Matéria sendo redistribuída pelas estrelas'
        }
      ]
    },
    {
      id: 13,
      name: 'Ajuste das Estruturas em Grande Escala (Filamentos Cósmicos)',
      description: 'Galáxias se organizam em padrões em larga escala',
      story: 'Não são apenas galáxias isoladas: elas se agrupam em filamentos cósmicos, tecendo uma imensa “teia” no universo, onde voids e aglomerados alternam-se, moldando o mapa cósmico.',
      icon: '🕸️',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Forme 3 filamentos cósmicos',
          emoji: '🕸️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Forme 5 filamentos cósmicos',
          emoji: '🕸️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Forme 7 filamentos cósmicos',
          emoji: '🕸️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🕸️',
          name: 'Filamento Cósmico',
          points: 0,
          description: 'A estrutura em larga escala do universo'
        }
      ]
    },
    {
      id: 14,
      name: '"Cidades de Estrelas": A Variedade Morfológica',
      description: 'Galáxias como cidades cósmicas',
      story: 'As galáxias são verdadeiras cidades de estrelas, cada uma com sua “arquitetura”. Das elípticas tranquilas às espirais dinâmicas, essa variedade morfológica reflete a história de cada galáxia.',
      icon: '🏙️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Desenvolva 3 morfologias galácticas',
          emoji: '🏙️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Desenvolva 5 morfologias galácticas',
          emoji: '🏙️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Desenvolva 7 morfologias galácticas',
          emoji: '🏙️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🏙️',
          name: 'Cidade Estelar',
          points: 0,
          description: 'Variedade de formas e estruturas galácticas'
        }
      ]
    },
    {
      id: 15,
      name: 'Estabilização das Galáxias-Mãe',
      description: 'Consolidando grandes galáxias',
      story: 'Com o tempo, as galáxias crescem e estabilizam sua estrutura interna. Discos, bulbos e halos escuros estabelecem uma identidade, definindo as propriedades a longo prazo.',
      icon: '🪨',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Estabilize 3 galáxias-mãe',
          emoji: '🪨',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Estabilize 5 galáxias-mãe',
          emoji: '🪨',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Estabilize 7 galáxias-mãe',
          emoji: '🪨',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🪨',
          name: 'Núcleo Estável',
          points: 0,
          description: 'A estrutura galáctica alcançando equilíbrio'
        }
      ]
    },
    {
      id: 16,
      name: 'Formação de Aglomerados e Superaglomerados',
      description: 'Organizando galáxias em escalas ainda maiores',
      story: 'Galáxias não existem sozinhas. Elas formam aglomerados e, por sua vez, esses aglomerados se reúnem em superaglomerados, criando uma hierarquia de estruturas cósmicas gigantescas.',
      icon: '🔗',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Forme 3 aglomerados',
          emoji: '🔗',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Forme 5 aglomerados',
          emoji: '🔗',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Forme 7 aglomerados',
          emoji: '🔗',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔗',
          name: 'Aglomerado Galáctico',
          points: 0,
          description: 'Galáxias unidas em grupos cada vez maiores'
        }
      ]
    },
    {
      id: 17,
      name: 'Distribuição de Matéria Escura nos Halos Galácticos',
      description: 'Matéria escura esculpindo a rotação e estabilidade',
      story: 'A matéria escura nos halos galácticos influencia a rotação e a estabilidade das galáxias. Sem ela, as estrelas externas se dispersariam; com ela, as galáxias mantêm sua coesão.',
      icon: '🌑',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Ajuste 3 halos escuros',
          emoji: '🌑',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Ajuste 5 halos escuros',
          emoji: '🌑',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Ajuste 7 halos escuros',
          emoji: '🌑',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌑',
          name: 'Halo Escuro',
          points: 0,
          description: 'O papel fundamental da matéria escura na dinâmica galáctica'
        }
      ]
    },
    {
      id: 18,
      name: 'Metais e Química Evoluindo nas Galáxias',
      description: 'Aumento da diversidade química',
      story: 'Com várias gerações de estrelas forjando elementos mais pesados, a química das galáxias se enriquece. Esse enriquecimento químico terá impactos na formação de planetas e, eventualmente, da vida.',
      icon: '🔬',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Amplie 3 reservas metálicas',
          emoji: '🔬',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Amplie 5 reservas metálicas',
          emoji: '🔬',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Amplie 7 reservas metálicas',
          emoji: '🔬',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔬',
          name: 'Complexidade Química',
          points: 0,
          description: 'A evolução da química galáctica'
        }
      ]
    },
    {
      id: 19,
      name: 'Galáxias como Berçários de Inúmeras Estrelas',
      description: 'Produtoras incessantes de novas estrelas',
      story: 'As galáxias são fábricas estelares. Ao longo do tempo, elas formam gerações de estrelas, construindo a complexidade do universo. Cada estrela é um novo ponto de luz no vasto cosmos.',
      icon: '🌱',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Cultive 3 berçários estelares',
          emoji: '🌱',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Cultive 5 berçários estelares',
          emoji: '🌱',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Cultive 7 berçários estelares',
          emoji: '🌱',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌱',
          name: 'Semente Estelar',
          points: 0,
          description: 'Galáxias nutrindo incontáveis estrelas'
        }
      ]
    },
    {
      id: 20,
      name: 'Um Novo Caminho: Formação de Sistemas Estelares e Planetas',
      description: 'A complexidade crescente do universo',
      story: 'Com a evolução das galáxias e o enriquecimento químico, formam-se sistemas estelares complexos, com discos protoplanetários e, eventualmente, planetas. A jornada cósmica avança rumo à possibilidade da vida.',
      icon: '🪐',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Crie 3 sistemas estelares em potencial',
          emoji: '🪐',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 sistemas estelares em potencial',
          emoji: '🪐',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 sistemas estelares em potencial',
          emoji: '🪐',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🪐',
          name: 'Berço Planetário',
          points: 0,
          description: 'A formação dos blocos para mundos e, quem sabe, vida'
        }
      ]
    }
  ]
}
