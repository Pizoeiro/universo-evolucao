import { World } from './types'

export const world3: World = {
  name: 'O Universo Transparente e a Radiação Cósmica de Fundo',
  description: 'Descubra o momento em que o universo se torna transparente e a luz pode finalmente viajar livremente! Acompanhe a formação dos primeiros átomos neutros, a liberação da Radiação Cósmica de Fundo e as leves flutuações que darão origem às futuras galáxias.',
  icon: '🔭',
  levels: [
    {
      id: 1,
      name: 'Recombinação',
      description: 'O momento em que elétrons são capturados pelos núcleos',
      story: 'Após o resfriamento do universo, prótons e elétrons finalmente podem se unir, formando átomos neutros de hidrogênio. Esse processo, chamado de recombinação, é fundamental para que a luz possa, em breve, viajar sem ser constantemente desviada.',
      icon: '💫',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Forme 3 átomos neutros',
          emoji: '💫',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Forme 5 átomos neutros',
          emoji: '💫',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Forme 7 átomos neutros',
          emoji: '💫',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💫',
          name: 'Átomo Recém-Formado',
          points: 0,
          description: 'Um elétron capturado, um átomo neutro pronto'
        }
      ]
    },
    {
      id: 2,
      name: 'Hidrogênio Neutro',
      description: 'O universo se enche de átomos simples e estáveis',
      story: 'Agora, a maior parte da matéria bariônica é hidrogênio neutro, o elemento mais simples. Sem elétrons livres para dispersar a luz, o universo dá seus primeiros passos rumo à transparência.',
      icon: '⚪',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 núcleos de hidrogênio neutro',
          emoji: '⚪',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 núcleos de hidrogênio neutro',
          emoji: '⚪',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 núcleos de hidrogênio neutro',
          emoji: '⚪',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '⚪',
          name: 'Hidrogênio Neutro',
          points: 0,
          description: 'O átomo mais simples, base da matéria comum'
        }
      ]
    },
    {
      id: 3,
      name: 'Radiação Cósmica de Fundo',
      description: 'A primeira "fotografia" do universo',
      story: 'Com a recombinação concluída, a luz antes aprisionada finalmente viaja livremente. Essa radiação, que hoje detectamos como micro-ondas, é o eco do Big Bang: a Radiação Cósmica de Fundo (CMB).',
      icon: '📡',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Detecte 3 sinais de CMB',
          emoji: '📡',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Detecte 5 sinais de CMB',
          emoji: '📡',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Detecte 7 sinais de CMB',
          emoji: '📡',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '📡',
          name: 'CMB Detectada',
          points: 0,
          description: 'A luz primordial viajando livremente pelo cosmos'
        }
      ]
    },
    {
      id: 4,
      name: 'Universo Transparente',
      description: 'A luz viaja sem obstruções',
      story: 'Antes, o universo era opaco. Agora, sem elétrons livres para desviar fótons, o espaço é transparente. Essa mudança facilita a expansão da luz em todas as direções, revelando a verdadeira "paisagem" cósmica.',
      icon: '🔭',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 caminhos de luz livre',
          emoji: '🔭',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 caminhos de luz livre',
          emoji: '🔭',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 caminhos de luz livre',
          emoji: '🔭',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔭',
          name: 'Visão Cósmica',
          points: 0,
          description: 'A luz percorrendo o universo sem barreiras'
        }
      ]
    },
    {
      id: 5,
      name: 'Flutuações na CMB',
      description: 'Leves variações de temperatura e densidade',
      story: 'A Radiação Cósmica de Fundo não é perfeitamente uniforme. Pequenas flutuações de temperatura e densidade marcam as sementes da futura formação de galáxias. Essas assinaturas sutis são o mapa do passado cósmico.',
      icon: '🌗',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 flutuações sutis',
          emoji: '🌗',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 flutuações sutis',
          emoji: '🌗',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Crie 7 flutuações sutis',
          emoji: '🌗',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌗',
          name: 'Anisotropia Primordial',
          points: 0,
          description: 'Diferenças minúsculas na CMB que guiam a estrutura do universo'
        }
      ]
    },
    {
      id: 6,
      name: 'Mapeando Sementes das Galáxias',
      description: 'As irregularidades na CMB indicam onde nascerão as galáxias',
      story: 'A partir das flutuações na CMB, podemos localizar os "pontos" onde, milhares de milhões de anos depois, galáxias e aglomerados vão se formar. O universo, embora quase uniforme, já carrega em si o mapa do futuro.',
      icon: '🗺️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 mapas de sementes galácticas',
          emoji: '🗺️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Crie 5 mapas de sementes galácticas',
          emoji: '🗺️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 mapas de sementes galácticas',
          emoji: '🗺️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🗺️',
          name: 'Mapa Estrutural',
          points: 0,
          description: 'O esboço da distribuição futura de matéria'
        }
      ]
    },
    {
      id: 7,
      name: 'Matéria Escura Silenciosa',
      description: 'Invisível, mas essencial na formação estrutural',
      story: 'A matéria escura continua invisível à luz, mas sua gravidade ajuda a concentrar matéria comum nas regiões de maior densidade. Sem ela, as estruturas galácticas não se formariam tão facilmente.',
      icon: '🕳️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 concentrações sombrias',
          emoji: '🕳️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 concentrações sombrias',
          emoji: '🕳️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 11
        },
        three: {
          description: 'Crie 7 concentrações sombrias',
          emoji: '🕳️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 8
        }
      },
      combinations: [
        {
          emoji: '🕳️',
          name: 'Nó Escuro',
          points: 0,
          description: 'A matéria invisível que guia a aglomeração da matéria comum'
        }
      ]
    },
    {
      id: 8,
      name: 'Fótons Livres Viajando pelo Cosmos',
      description: 'A luz segue seu caminho quase intocada',
      story: 'Com o universo transparente, os fótons da CMB percorrem distâncias imensas praticamente sem interagir. Eles trazem informações valiosas sobre a época de recombinação, servindo como uma cápsula do tempo cósmica.',
      icon: '💡',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 rotas fotônicas livres',
          emoji: '💡',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 rotas fotônicas livres',
          emoji: '💡',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Crie 7 rotas fotônicas livres',
          emoji: '💡',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💡',
          name: 'Caminho de Luz',
          points: 0,
          description: 'Fótons viajando por um universo transparente'
        }
      ]
    },
    {
      id: 9,
      name: 'Temperatura em Queda',
      description: 'O universo continua esfriando e se expandindo',
      story: 'Com o tempo, a temperatura universal diminui lentamente. Hoje, a CMB está a cerca de 2,7 K, mas nesta época ainda era mais quente. Esse resfriamento contínuo é crucial para a estabilidade da matéria e a formação de estruturas.',
      icon: '❄️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 pontos de resfriamento adicional',
          emoji: '❄️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Crie 5 pontos de resfriamento adicional',
          emoji: '❄️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 pontos de resfriamento adicional',
          emoji: '❄️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '❄️',
          name: 'Arrefecimento Cósmico',
          points: 0,
          description: 'A queda gradual da temperatura universal'
        }
      ]
    },
    {
      id: 10,
      name: 'A Primeira "Foto" do Cosmos',
      description: 'A CMB como um instantâneo do universo jovem',
      story: 'A Radiação Cósmica de Fundo é como uma fotografia do universo quando ele tinha cerca de 380 mil anos. Ao estudá-la, entendemos suas condições iniciais e prevemos como as estruturas evoluíram.',
      icon: '📸',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Tire 3 "fotos" do passado',
          emoji: '📸',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Tire 5 "fotos" do passado',
          emoji: '📸',
          requiredMatches: 5,
          points: 0,
          maxMoves: 11
        },
        three: {
          description: 'Tire 7 "fotos" do passado',
          emoji: '📸',
          requiredMatches: 7,
          points: 0,
          maxMoves: 8
        }
      },
      combinations: [
        {
          emoji: '📸',
          name: 'Instantâneo Cósmico',
          points: 0,
          description: 'Uma imagem fossilizada do universo primordial'
        }
      ]
    },
    {
      id: 11,
      name: 'Ajuste da Densidade e a Formação de Estruturas',
      description: 'As flutuações guiam a aglomeração da matéria',
      story: 'As pequenas diferenças de densidade na CMB indicam onde a matéria se concentrará. Com o tempo, a gravidade amplificará essas flutuações, levando à formação das primeiras nuvens de gás e, futuramente, estrelas e galáxias.',
      icon: '🪨',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 concentrações de matéria',
          emoji: '🪨',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Crie 5 concentrações de matéria',
          emoji: '🪨',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 concentrações de matéria',
          emoji: '🪨',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🪨',
          name: 'Semente de Nuvem',
          points: 0,
          description: 'Aglomerações iniciais que levarão às galáxias'
        }
      ]
    },
    {
      id: 12,
      name: 'Papel da Gravidade Intensificando Flutuações',
      description: 'A força gravitacional amplia as diferenças de densidade',
      story: 'A gravidade é implacável. Pequenas regiões mais densas atraem mais matéria, tornando-se ainda mais densas. Assim, as flutuações iniciais são realçadas, preparando o caminho para a era das estruturas cósmicas.',
      icon: '🌌',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Crie 3 focos gravitacionais intensos',
          emoji: '🌌',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 focos gravitacionais intensos',
          emoji: '🌌',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Crie 7 focos gravitacionais intensos',
          emoji: '🌌',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌌',
          name: 'Poço Gravitacional',
          points: 0,
          description: 'A gravidade intensificando concentrações de matéria'
        }
      ]
    },
    {
      id: 13,
      name: 'Sementes para Formação Estelar',
      description: 'Átomos neutros e regiões densas: berçários futuros de estrelas',
      story: 'Com o hidrogênio neutro disponível e as concentrações de matéria se acentuando, a base para o surgimento de estrelas está sendo lançada. Embora as estrelas ainda não tenham nascido, as condições preliminares estão dadas.',
      icon: '💠',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Crie 3 aglomerados pré-estelares',
          emoji: '💠',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 aglomerados pré-estelares',
          emoji: '💠',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 aglomerados pré-estelares',
          emoji: '💠',
          requiredMatches: 7,
          points: 0,
          maxMoves: 8
        }
      },
      combinations: [
        {
          emoji: '💠',
          name: 'Núcleo Primordial',
          points: 0,
          description: 'Blocos iniciais onde as estrelas nascerão no futuro'
        }
      ]
    },
    {
      id: 14,
      name: 'Início da Era das Trevas',
      description: 'Um universo sem estrelas: luz presente, mas fraca',
      story: 'Após a liberação da CMB, não há fontes de luz além daquela radiação esticada pela expansão. O universo entra nas "Dark Ages", uma época sem estrelas, em que o gás neutro preenche o espaço, aguardando o acender das primeiras lâmpadas cósmicas.',
      icon: '🌑',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 indícios de escuridão cósmica',
          emoji: '🌑',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Crie 5 indícios de escuridão cósmica',
          emoji: '🌑',
          requiredMatches: 5,
          points: 0,
          maxMoves: 11
        },
        three: {
          description: 'Crie 7 indícios de escuridão cósmica',
          emoji: '🌑',
          requiredMatches: 7,
          points: 0,
          maxMoves: 8
        }
      },
      combinations: [
        {
          emoji: '🌑',
          name: 'Vazio Aparente',
          points: 0,
          description: 'Um universo sem fontes de luz estelar'
        }
      ]
    },
    {
      id: 15,
      name: 'A CMB como Eco do Big Bang',
      description: 'Prova permanente das condições iniciais',
      story: 'A CMB permanece como um fundo constante, evidência irrefutável do Big Bang e da evolução cósmica. Ela conta a história da infância do universo, uma assinatura preservada até os dias de hoje.',
      icon: '🎶',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 ecos cósmicos',
          emoji: '🎶',
          requiredMatches: 3,
          points: 0,
          maxMoves: 15
        },
        two: {
          description: 'Crie 5 ecos cósmicos',
          emoji: '🎶',
          requiredMatches: 5,
          points: 0,
          maxMoves: 11
        },
        three: {
          description: 'Crie 7 ecos cósmicos',
          emoji: '🎶',
          requiredMatches: 7,
          points: 0,
          maxMoves: 8
        }
      },
      combinations: [
        {
          emoji: '🎶',
          name: 'Eco Primordial',
          points: 0,
          description: 'A canção distante do Big Bang ainda ressoa'
        }
      ]
    },
    {
      id: 16,
      name: 'Leve Anisotropia',
      description: 'Diferenças sutis que orientam o futuro cósmico',
      story: 'As pequenas anisotropias na CMB são o que diferencia um universo completamente homogêneo de um cheio de galáxias e estrelas. Esses contrastes mínimos terão consequências gigantescas no futuro.',
      icon: '🌗',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 anisotropias suaves',
          emoji: '🌗',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 anisotropias suaves',
          emoji: '🌗',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Crie 7 anisotropias suaves',
          emoji: '🌗',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌗',
          name: 'Sutileza Cósmica',
          points: 0,
          description: 'Pequenas diferenças que moldam o destino do cosmos'
        }
      ]
    },
    {
      id: 17,
      name: 'Absorção e Linhas Espectrais',
      description: 'Átomos neutros interagindo sutilmente com a radiação',
      story: 'Mesmo sem estrelas, o hidrogênio neutro pode absorver certos comprimentos de onda, deixando impressões espectrais sutis. Esses sinais fornecem pistas adicionais sobre a densidade e temperatura do gás primordial.',
      icon: '🩸',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 marcas espectrais',
          emoji: '🩸',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Crie 5 marcas espectrais',
          emoji: '🩸',
          requiredMatches: 5,
          points: 0,
          maxMoves: 11
        },
        three: {
          description: 'Crie 7 marcas espectrais',
          emoji: '🩸',
          requiredMatches: 7,
          points: 0,
          maxMoves: 8
        }
      },
      combinations: [
        {
          emoji: '🩸',
          name: 'Impressão Espectral',
          points: 0,
          description: 'Linhas de absorção deixadas pelo hidrogênio neutro'
        }
      ]
    },
    {
      id: 18,
      name: 'Expansão Contínua',
      description: 'O universo segue crescendo e se tornando mais frio',
      story: 'O espaço continua se expandindo e, com isso, a radiação alonga seu comprimento de onda. O universo se torna cada vez mais frio e mais espaçoso, diluindo ainda mais a matéria e a energia.',
      icon: '🎈',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Crie 3 expansões suaves',
          emoji: '🎈',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 expansões suaves',
          emoji: '🎈',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 expansões suaves',
          emoji: '🎈',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🎈',
          name: 'Dilatação Cósmica',
          points: 0,
          description: 'O universo esticando o espaço e a radiação'
        }
      ]
    },
    {
      id: 19,
      name: 'Preparando-se para as Primeiras Estrelas',
      description: 'Condições quase prontas para acender a luz estelar',
      story: 'Embora ainda leve centenas de milhões de anos, a base está posta. O hidrogênio neutro e os aglomerados de matéria, guiados pela gravidade, servirão de combustível para a ignição das primeiras estrelas.',
      icon: '⚗️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 reservatórios pré-estelares',
          emoji: '⚗️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 reservatórios pré-estelares',
          emoji: '⚗️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Crie 7 reservatórios pré-estelares',
          emoji: '⚗️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '⚗️',
          name: 'Caldeirão Neutro',
          points: 0,
          description: 'Massa de hidrogênio pronta para formar estrelas'
        }
      ]
    },
    {
      id: 20,
      name: 'Portal para a Próxima Era',
      description: 'Do silêncio cósmico à luz das primeiras estrelas',
      story: 'As "Dark Ages" estão estabelecidas, mas não durarão para sempre. Em breve, a gravidade colapsará nuvens de gás, acendendo as primeiras estrelas e terminando com essa escuridão cósmica. Esse é o portal para a próxima fase da evolução do universo.',
      icon: '⏳🌟',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Crie 3 portais de transição',
          emoji: '⏳🌟',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 portais de transição',
          emoji: '⏳🌟',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 portais de transição',
          emoji: '⏳🌟',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⏳🌟',
          name: 'Portal Estelar',
          points: 0,
          description: 'A passagem das Dark Ages para o surgimento das primeiras estrelas'
        }
      ]
    }
  ]
}
