import { World } from './types'

export const world4: World = {
  name: 'O Surgimento das Primeiras Estrelas (População III)',
  description: 'Após a era escura do universo, as primeiras estrelas - enormes e efêmeras - acendem sua luz. Essas estrelas primordiais, conhecidas como População III, forjam novos elementos e iniciam a reionização, abrindo caminho para galáxias e estruturas cósmicas mais complexas.',
  icon: '🌟',
  levels: [
    {
      id: 1,
      name: 'As "Dark Ages" (Idade das Trevas Cósmicas)',
      description: 'Um universo sem estrelas, iluminado apenas pela CMB',
      story: 'Após a recombinação, o universo mergulhou na escuridão. Não havia estrelas, apenas a luz fraca da Radiação Cósmica de Fundo. Esta época, conhecida como "Dark Ages", durou até o surgimento das primeiras fontes estelares.',
      icon: '🌑',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 pontos escuros',
          emoji: '🌑',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 pontos escuros',
          emoji: '🌑',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 pontos escuros',
          emoji: '🌑',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌑',
          name: 'Treva Cósmica',
          points: 0,
          description: 'A ausência de estrelas no universo jovem'
        }
      ]
    },
    {
      id: 2,
      name: 'Formação dos Primeiros Halos de Matéria Escura',
      description: 'Estruturas invisíveis que guiam a matéria',
      story: 'A matéria escura formou "halos" gravitacionais antes mesmo das estrelas nascerem. Esses halos são a infraestrutura invisível onde a matéria bariônica se acumulará, preparando o cenário para a formação das primeiras estrelas.',
      icon: '🕸️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Forme 3 halos escuros',
          emoji: '🕸️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Forme 5 halos escuros',
          emoji: '🕸️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Forme 7 halos escuros',
          emoji: '🕸️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🕸️',
          name: 'Halo de Matéria Escura',
          points: 0,
          description: 'A estrutura invisível que guia a matéria bariônica'
        }
      ]
    },
    {
      id: 3,
      name: 'Colapso Gravitacional em Nuvens de Hidrogênio',
      description: 'Matéria bariônica concentrando-se sob gravidade',
      story: 'No interior dos halos de matéria escura, nuvens de hidrogênio começam a colapsar devido à gravidade. Essa contração é o primeiro passo para o nascimento das primeiras estrelas.',
      icon: '🔻',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Colapse 3 nuvens',
          emoji: '🔻',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Colapse 5 nuvens',
          emoji: '🔻',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Colapse 7 nuvens',
          emoji: '🔻',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🔻',
          name: 'Nuvem em Colapso',
          points: 0,
          description: 'Hidrogênio contraído pela força gravitacional'
        }
      ]
    },
    {
      id: 4,
      name: 'Primeiras Estrelas: População III',
      description: 'Grandes, quentes e de vida curta',
      story: 'As primeiras estrelas, conhecidas como População III, eram gigantescas e quase sem metais. Sua formação marca o fim das Dark Ages, trazendo luz estelar ao universo pela primeira vez.',
      icon: '💥',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Forme 3 estrelas primordiais',
          emoji: '💥',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Forme 5 estrelas primordiais',
          emoji: '💥',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Forme 7 estrelas primordiais',
          emoji: '💥',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '💥',
          name: 'Estrela Pop. III',
          points: 0,
          description: 'As primeiras estrelas a iluminar o cosmos'
        }
      ]
    },
    {
      id: 5,
      name: 'Acendendo as Primeiras Luzes Estelares',
      description: 'O fim da escuridão absoluta',
      story: 'Quando as primeiras estrelas se acendem, suas luzes atravessam o vazio cósmico. A escuridão absoluta termina, e pontos de luz começam a surgir no céu, dando novo caráter ao universo.',
      icon: '✨',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Acenda 3 pontos de luz',
          emoji: '✨',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Acenda 5 pontos de luz',
          emoji: '✨',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Acenda 7 pontos de luz',
          emoji: '✨',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '✨',
          name: 'Luz Estelar Primordial',
          points: 0,
          description: 'A primeira iluminação estelar do universo'
        }
      ]
    },
    {
      id: 6,
      name: 'Radiação Ultravioleta e Reionização Parcial do Universo',
      description: 'Estrelas emitindo luz ionizante',
      story: 'A radiação ultravioleta dessas estrelas ioniza novamente parte do hidrogênio neutro. O universo, antes neutro, começa a se tornar parcialmente ionizado, iniciando o processo de reionização.',
      icon: '⚡',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 pontos de reionização',
          emoji: '⚡',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 pontos de reionização',
          emoji: '⚡',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Crie 7 pontos de reionização',
          emoji: '⚡',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '⚡',
          name: 'Fóton Ionizante',
          points: 0,
          description: 'A radiação UV que começa a reionizar o universo'
        }
      ]
    },
    {
      id: 7,
      name: 'Forjando Elementos Além do Hélio (Nucleossíntese Estelar)',
      description: 'O berço dos elementos mais pesados',
      story: 'Dentro do núcleo dessas estrelas massivas, a fusão nuclear cria elementos mais pesados que o hélio. Carbono, oxigênio e outros metais começam a surgir, enriquecendo o universo químico.',
      icon: '⚗️',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Forje 3 novos elementos',
          emoji: '⚗️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Forje 5 novos elementos',
          emoji: '⚗️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Forje 7 novos elementos',
          emoji: '⚗️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '⚗️',
          name: 'Metal Primordial',
          points: 0,
          description: 'Elementos mais pesados sendo criados no interior estelar'
        }
      ]
    },
    {
      id: 8,
      name: 'Supernovas Primordiais: Espalhando Metais',
      description: 'Explosões estelares sem precedentes',
      story: 'As estrelas População III, massivas, vivem pouco e explodem como supernovas poderosas. Essas explosões espalham metais recém-forjados pelo espaço, semeando o meio interestelar com nova química.',
      icon: '💫',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Cause 3 supernovas primordiais',
          emoji: '💫',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Cause 5 supernovas primordiais',
          emoji: '💫',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Cause 7 supernovas primordiais',
          emoji: '💫',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💫',
          name: 'Supernova Primordial',
          points: 0,
          description: 'Explosões estelares distribuindo metais pelo cosmos'
        }
      ]
    },
    {
      id: 9,
      name: 'Enriquecimento Químico do Meio Interestelar',
      description: 'O espaço entre as estrelas fica mais rico',
      story: 'Com os metais espalhados pelas supernovas, o meio interestelar não é mais puro hidrogênio e hélio. Agora, há sementes químicas para a formação de futuras estrelas com composições mais complexas.',
      icon: '🧪',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Enriqueça 3 regiões interestelares',
          emoji: '🧪',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Enriqueça 5 regiões interestelares',
          emoji: '🧪',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Enriqueça 7 regiões interestelares',
          emoji: '🧪',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🧪',
          name: 'Meio Enriquecido',
          points: 0,
          description: 'Regiões interestelares agora com elementos mais pesados'
        }
      ]
    },
    {
      id: 10,
      name: 'Dissipando a Era das Trevas',
      description: 'O cosmo cada vez mais iluminado',
      story: 'Com a luz estelar se espalhando, a era das trevas é definitivamente deixada para trás. O universo ganha gradualmente um aspecto mais iluminado e diversificado.',
      icon: '🕯️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Dissipe 3 áreas escuras',
          emoji: '🕯️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Dissipe 5 áreas escuras',
          emoji: '🕯️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Dissipe 7 áreas escuras',
          emoji: '🕯️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🕯️',
          name: 'Chama Cósmica',
          points: 0,
          description: 'A luz estelar banindo a escuridão primitiva'
        }
      ]
    },
    {
      id: 11,
      name: 'Formação das Primeiras Pequenas Galáxias',
      description: 'Aglomerados estelares se unem',
      story: 'À medida que mais estrelas se formam e se reúnem, surgem as primeiras pequenas galáxias. Esses aglomerados estelares são os protótipos das grandes estruturas que dominarão o universo.',
      icon: '🌀',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Forme 3 protogaláxias',
          emoji: '🌀',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Forme 5 protogaláxias',
          emoji: '🌀',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Forme 7 protogaláxias',
          emoji: '🌀',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌀',
          name: 'Protogaláxia',
          points: 0,
          description: 'O embrião das futuras grandes galáxias'
        }
      ]
    },
    {
      id: 12,
      name: 'Interação entre Estrelas Primitivas e Matéria Circundante',
      description: 'Estrelas modificando seu ambiente',
      story: 'Os ventos estelares e radiação das estrelas primordiais mexem com o gás e a poeira ao seu redor, moldando o meio interestelar e influenciando a formação de novas estrelas.',
      icon: '⚙️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 interações estelares',
          emoji: '⚙️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 interações estelares',
          emoji: '⚙️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 interações estelares',
          emoji: '⚙️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '⚙️',
          name: 'Mecanismo Estelar',
          points: 0,
          description: 'As estrelas alterando o meio ao seu redor'
        }
      ]
    },
    {
      id: 13,
      name: 'Primeiras Linhagens de Elementos Pesados (Carbono, Oxigênio...)',
      description: 'A riqueza química crescente',
      story: 'Com as estrelas formando elementos mais pesados e supernovas espalhando-os, o universo passa a contar com carbono, oxigênio e outros elementos fundamentais para a química complexa e, futuramente, para a vida.',
      icon: '💎',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 estoques de elementos pesados',
          emoji: '💎',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Crie 5 estoques de elementos pesados',
          emoji: '💎',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Crie 7 estoques de elementos pesados',
          emoji: '💎',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '💎',
          name: 'Núcleo Metálico',
          points: 0,
          description: 'Elementos pesados enriquecendo o universo'
        }
      ]
    },
    {
      id: 14,
      name: 'Abertura de Caminho para Estrelas de Segunda Geração',
      description: 'Novo ciclo estelar mais rico em elementos',
      story: 'Agora que o universo possui metais, as próximas estrelas (População II) serão diferentes: menor massa, maior longevidade e mais complexidade química. O caminho para a formação de sistemas planetários mais elaborados começa aqui.',
      icon: '🔄',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Inicie 3 ciclos estelares avançados',
          emoji: '🔄',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Inicie 5 ciclos estelares avançados',
          emoji: '🔄',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Inicie 7 ciclos estelares avançados',
          emoji: '🔄',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🔄',
          name: 'Renovação Estelar',
          points: 0,
          description: 'Transição para populações estelares mais evoluídas'
        }
      ]
    },
    {
      id: 15,
      name: 'Calor e Luz Acelerando a Evolução Cósmica',
      description: 'Energia estelar impulsionando mudanças',
      story: 'A radiação e o calor das estrelas primordiais não apenas iluminam o cosmos, mas também influenciam a química e a dinâmica do gás, acelerando a evolução cósmica rumo a estruturas mais complexas.',
      icon: '🔥',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Aqueça 3 regiões cósmicas',
          emoji: '🔥',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Aqueça 5 regiões cósmicas',
          emoji: '🔥',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Aqueça 7 regiões cósmicas',
          emoji: '🔥',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔥',
          name: 'Calor Estelar',
          points: 0,
          description: 'A energia das estrelas impulsionando mudanças'
        }
      ]
    },
    {
      id: 16,
      name: 'Diferenças entre a População III e Estrelas Modernas',
      description: 'Mudanças na metalicidade e na massa',
      story: 'As primeiras estrelas eram massivas e pobres em metais. As estrelas modernas tendem a ser menores, com maior conteúdo de metais e maior longevidade. Essa diferença é crucial para a formação de planetas e da vida.',
      icon: '🔬',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Destaque 3 diferenças estelares',
          emoji: '🔬',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Destaque 5 diferenças estelares',
          emoji: '🔬',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Destaque 7 diferenças estelares',
          emoji: '🔬',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🔬',
          name: 'Análise Estelar',
          points: 0,
          description: 'Comparando as estrelas primitivas com as atuais'
        }
      ]
    },
    {
      id: 17,
      name: 'Início da Formação de Estruturas Maiores',
      description: 'Caminho para grandes galáxias e aglomerados',
      story: 'Com galáxias anãs se fundindo e matéria se reunindo, estruturas maiores começam a emergir. A evolução cósmica segue em direção a galáxias maiores, aglomerados e superaglomerados.',
      icon: '🏗️',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Construa 3 estruturas maiores',
          emoji: '🏗️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 16
        },
        two: {
          description: 'Construa 5 estruturas maiores',
          emoji: '🏗️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 12
        },
        three: {
          description: 'Construa 7 estruturas maiores',
          emoji: '🏗️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🏗️',
          name: 'Base Estrutural',
          points: 0,
          description: 'O alicerce das futuras galáxias gigantes'
        }
      ]
    },
    {
      id: 18,
      name: 'O Céu Começa a se Encher de Pontos Luminosos',
      description: 'A abundância crescente de estrelas',
      story: 'Com mais estrelas nascendo e galáxias emergindo, o céu cósmico se torna cada vez mais salpicado de pontos luminosos. Este é o prenúncio de um universo mais vivo e diversificado.',
      icon: '🌠',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 pontos luminosos adicionais',
          emoji: '🌠',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 pontos luminosos adicionais',
          emoji: '🌠',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 pontos luminosos adicionais',
          emoji: '🌠',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌠',
          name: 'Campo Estelar',
          points: 0,
          description: 'Um céu cósmico cada vez mais estrelado'
        }
      ]
    },
    {
      id: 19,
      name: 'Reionização Avançando: O Universo volta a ser ionizado',
      description: 'Regiões neutras cedendo à luz ionizante',
      story: 'Com mais estrelas e galáxias emissoras de radiação ultravioleta, a reionização do universo avança. Regiões antes neutras tornam-se ionizadas novamente, permitindo a luz viajar ainda mais livremente.',
      icon: '💡',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Reionize 3 regiões',
          emoji: '💡',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Reionize 5 regiões',
          emoji: '💡',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Reionize 7 regiões',
          emoji: '💡',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '💡',
          name: 'Zona Reionizada',
          points: 0,
          description: 'A luz das estrelas ionizando o gás cósmico'
        }
      ]
    },
    {
      id: 20,
      name: 'Portal para a Criação de Galáxias mais Complexas',
      description: 'A evolução cósmica continua',
      story: 'O universo não para de se transformar. Com estrelas, galáxias e elementos pesados, o caminho está aberto para a formação de galáxias mais complexas, ricas em estrelas e em potencial para a formação de sistemas planetários e, quem sabe, vida.',
      icon: '🚪🌌',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Crie 3 portais evolutivos',
          emoji: '🚪🌌',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 portais evolutivos',
          emoji: '🚪🌌',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 portais evolutivos',
          emoji: '🚪🌌',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🚪🌌',
          name: 'Portal Galáctico',
          points: 0,
          description: 'A passagem para estruturas cada vez mais complexas no cosmos'
        }
      ]
    }
  ]
}
