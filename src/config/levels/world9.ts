import { World } from './types'

export const world9: World = {
  name: 'A Grande Oxigenação e a Diversificação da Vida',
  description: 'Acompanhe a transformação do planeta com o surgimento da fotossíntese oxigênica. O oxigênio começa a se acumular na atmosfera, a química do planeta muda e organismos mais complexos surgem. Este é o estágio em que a vida se prepara para dar um salto rumo à complexidade biológica que culminará na famosa "Explosão Cambriana".',
  icon: '💨',
  levels: [
    {
      id: 1,
      name: 'Cianobactérias Fotossintetizantes',
      description: 'Organismos capazes de liberar oxigênio pela fotossíntese',
      story: 'As cianobactérias realizam fotossíntese oxigênica, produzindo oxigênio como subproduto. Essa inovação mudará radicalmente a atmosfera e o rumo da vida na Terra.',
      icon: '🦠',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Forme 3 colônias de cianobactérias',
          emoji: '🦠',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Forme 5 colônias de cianobactérias',
          emoji: '🦠',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Forme 7 colônias de cianobactérias',
          emoji: '🦠',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🦠',
          name: 'Cianobactéria',
          points: 0,
          description: 'Micro-organismos que iniciam a produção de oxigênio livre'
        }
      ]
    },
    {
      id: 2,
      name: 'Acúmulo de Oxigênio nos Oceanos',
      description: 'O oxigênio dissolve-se na água, alterando a química marinha',
      story: 'O oxigênio produzido pelas cianobactérias começa a se acumular nos oceanos, mudando a química marinha e preparando o caminho para reações que formarão depósitos minerais.',
      icon: '🌊',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Aumente O₂ em 3 regiões oceânicas',
          emoji: '🌊',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Aumente O₂ em 5 regiões oceânicas',
          emoji: '🌊',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Aumente O₂ em 7 regiões oceânicas',
          emoji: '🌊',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌊',
          name: 'Oceano Oxigenado',
          points: 0,
          description: 'Águas enriquecidas com oxigênio'
        }
      ]
    },
    {
      id: 3,
      name: 'Formação de Óxidos de Ferro (BIFs)',
      description: 'Camadas minerais indicam a reação entre ferro e oxigênio',
      story: 'O ferro dissolvido nos oceanos reage com o oxigênio, formando óxidos de ferro e criando as "Banded Iron Formations". Esses depósitos são registros geológicos da grande oxidação planetária.',
      icon: '🩸',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Forme 3 BIFs',
          emoji: '🩸',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Forme 5 BIFs',
          emoji: '🩸',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Forme 7 BIFs',
          emoji: '🩸',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🩸',
          name: 'Banded Iron Formation',
          points: 0,
          description: 'Depósitos de ferro que marcam a presença crescente de oxigênio'
        }
      ]
    },
    {
      id: 4,
      name: 'A Grande Oxidação: Mudando a Química do Planeta',
      description: 'Oxigênio passa a se acumular na atmosfera',
      story: 'Com o tempo, o oxigênio produzido excede a capacidade de reagir com materiais dissolvidos. Assim, o gás se acumula na atmosfera, mudando a química do planeta e preparando cenários para formas de vida mais complexas.',
      icon: '💨',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Aumente O₂ atmosférico em 3 etapas',
          emoji: '💨',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Aumente O₂ atmosférico em 5 etapas',
          emoji: '💨',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Aumente O₂ atmosférico em 7 etapas',
          emoji: '💨',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '💨',
          name: 'Atmosfera Oxigenada',
          points: 0,
          description: 'A atmosfera começa a conter quantidades significativas de O₂'
        }
      ]
    },
    {
      id: 5,
      name: 'Extinções de Organismos Anaeróbicos',
      description: 'Nem todos sobrevivem à presença de oxigênio',
      story: 'Para organismos que vivem sem oxigênio, a presença do gás é tóxica. Muitos deles não sobrevivem às novas condições, levando a extinções em massa e liberando nichos para outras formas de vida.',
      icon: '💀',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Cause 3 extinções anaeróbicas',
          emoji: '💀',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Cause 5 extinções anaeróbicas',
          emoji: '💀',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Cause 7 extinções anaeróbicas',
          emoji: '💀',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💀',
          name: 'Extinção Anaeróbica',
          points: 0,
          description: 'Organismos que não toleram O₂ desaparecem'
        }
      ]
    },
    {
      id: 6,
      name: 'Camada de Ozônio Se Formando',
      description: 'Proteção contra a radiação UV',
      story: 'O oxigênio na alta atmosfera forma ozônio, criando uma camada protetora contra a radiação ultravioleta mais intensa. Isso abre caminho para a colonização de ambientes superficiais.',
      icon: '☂️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Forme 3 camadas de ozônio',
          emoji: '☂️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Forme 5 camadas de ozônio',
          emoji: '☂️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Forme 7 camadas de ozônio',
          emoji: '☂️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '☂️',
          name: 'Escudo Ozonio',
          points: 0,
          description: 'Proteção contra radiação UV agressiva'
        }
      ]
    },
    {
      id: 7,
      name: 'Diversificação de Metabólitos',
      description: 'Novas rotas bioquímicas, mais complexidade',
      story: 'Com mais recursos e condições estáveis, os organismos desenvolvem novos metabólitos e vias bioquímicas. Essa diversificação metabólica permite explorar nichos e fontes de energia diferentes.',
      icon: '🧪',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 novos metabólitos',
          emoji: '🧪',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 novos metabólitos',
          emoji: '🧪',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 novos metabólitos',
          emoji: '🧪',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🧪',
          name: 'Metabólito Avançado',
          points: 0,
          description: 'Novas substâncias ampliando o repertório biológico'
        }
      ]
    },
    {
      id: 8,
      name: 'Primeiras Células Eucarióticas (Endossimbiose)',
      description: 'Simbiogênese e o surgimento da complexidade celular',
      story: 'Células maiores englobam outras menores, formando organelas como mitocôndrias e cloroplastos. Essa endossimbiose dá origem às primeiras células eucarióticas, mais complexas que as procarióticas.',
      icon: '🧫',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Forme 3 células eucarióticas iniciais',
          emoji: '🧫',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Forme 5 células eucarióticas iniciais',
          emoji: '🧫',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Forme 7 células eucarióticas iniciais',
          emoji: '🧫',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🧫',
          name: 'Célula Eucariótica Primordial',
          points: 0,
          description: 'A fusão simbiótica que gera complexidade celular'
        }
      ]
    },
    {
      id: 9,
      name: 'Complexidade Genômica e Organelas',
      description: 'Genomas maiores e organelas diversas',
      story: 'As células eucarióticas possuem genomas maiores e compartimentos internos (organelas), aumentando a eficiência e a especialização. Isso abre a porta para a evolução de seres mais complexos.',
      icon: '🧬',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Expanda 3 genomas e organelas',
          emoji: '🧬',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Expanda 5 genomas e organelas',
          emoji: '🧬',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Expanda 7 genomas e organelas',
          emoji: '🧬',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🧬',
          name: 'Genoma Complexo',
          points: 0,
          description: 'A base para a diferenciação celular'
        }
      ]
    },
    {
      id: 10,
      name: 'Multicelularidade Emergente',
      description: 'Células unindo-se para formar organismos maiores',
      story: 'Algumas células eucarióticas começam a viver em conjunto, formando colônias e, eventualmente, organismos multicelulares. Essa inovação permite divisão de trabalho e maior eficiência.',
      icon: '🌿',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Forme 3 agrupamentos multicelulares',
          emoji: '🌿',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Forme 5 agrupamentos multicelulares',
          emoji: '🌿',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Forme 7 agrupamentos multicelulares',
          emoji: '🌿',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌿',
          name: 'Organismo Multicelular Inicial',
          points: 0,
          description: 'Várias células trabalhando juntas como um todo'
        }
      ]
    },
    {
      id: 11,
      name: 'Colônias de Células Especializadas',
      description: 'Divisão de funções dentro de um mesmo organismo',
      story: 'Agora as células não são apenas várias juntas, mas começam a se especializar em funções diferentes. Surgem tecidos e estruturas simples, aumentando a eficiência do organismo.',
      icon: '🫂',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 colônias especializadas',
          emoji: '🫂',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 colônias especializadas',
          emoji: '🫂',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 colônias especializadas',
          emoji: '🫂',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🫂',
          name: 'Colônia Especializada',
          points: 0,
          description: 'Células com funções distintas convivendo em harmonia'
        }
      ]
    },
    {
      id: 12,
      name: 'Primeiras Algas e Fungos Primordiais',
      description: 'Eucariontes fotossintetizantes e decompositores iniciais',
      story: 'O surgimento de algas fotossintetizantes e fungos primitivos aumenta a complexidade dos ecossistemas. Esses organismos introduzem novas formas de obter energia e reciclar nutrientes.',
      icon: '🍄',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Estabeleça 3 populações de algas/fungos',
          emoji: '🍄',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Estabeleça 5 populações de algas/fungos',
          emoji: '🍄',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Estabeleça 7 populações de algas/fungos',
          emoji: '🍄',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🍄',
          name: 'Organismo Eucariótico Primordial',
          points: 0,
          description: 'Algas e fungos adicionam complexidade ecológica'
        }
      ]
    },
    {
      id: 13,
      name: 'Ecossistemas Marinhos Mais Complexos',
      description: 'Cadeias alimentares mais longas e variadas',
      story: 'Com mais tipos de organismos, os ecossistemas marinhos se tornam mais complexos. Predadores, presas, decompositores e produtores interagem, criando redes tróficas mais ricas.',
      icon: '🐚',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Forme 3 interações ecológicas marinhas',
          emoji: '🐚',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Forme 5 interações ecológicas marinhas',
          emoji: '🐚',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Forme 7 interações ecológicas marinhas',
          emoji: '🐚',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🐚',
          name: 'Ecossistema Marinho',
          points: 0,
          description: 'Ambientes aquáticos cheios de vida e diversidade'
        }
      ]
    },
    {
      id: 14,
      name: 'Pressão Seletiva Cria Novas Formas de Vida',
      description: 'Inovações morfológicas e funcionais',
      story: 'À medida que o ambiente muda, novas pressões seletivas surgem. Organismos evoluem novas formas, adaptando-se a nichos específicos e gerando a variedade morfológica e funcional crescente.',
      icon: '🦋',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Provoque 3 inovações morfológicas',
          emoji: '🦋',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Provoque 5 inovações morfológicas',
          emoji: '🦋',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Provoque 7 inovações morfológicas',
          emoji: '🦋',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🦋',
          name: 'Inovação Morfológica',
          points: 0,
          description: 'Novas estruturas e formas surgindo pela seleção natural'
        }
      ]
    },
    {
      id: 15,
      name: 'Adaptações para Ambientes Diversos',
      description: 'Organismos colonizando múltiplos habitats',
      story: 'A vida não fica restrita a um único ambiente. Organismos se adaptam a regiões profundas, superficiais, frias, quentes, escuras ou iluminadas, expandindo a presença da vida na Terra.',
      icon: '🦎',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 adaptações ambientais',
          emoji: '🦎',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 adaptações ambientais',
          emoji: '🦎',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 adaptações ambientais',
          emoji: '🦎',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🦎',
          name: 'Adaptação Ambiental',
          points: 0,
          description: 'Traços que permitem a vida em diversos habitats'
        }
      ]
    },
    {
      id: 16,
      name: 'Aumento da Produção Primária (Biomassa)',
      description: 'Mais fotossíntese, mais alimento e energia',
      story: 'Com o aumento de organismos fotossintetizantes, a produção primária cresce, gerando mais biomassa. Essa abundância de alimento permite o surgimento de cadeias alimentares mais complexas.',
      icon: '🌳',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Aumente a biomassa em 3 passos',
          emoji: '🌳',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Aumente a biomassa em 5 passos',
          emoji: '🌳',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Aumente a biomassa em 7 passos',
          emoji: '🌳',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌳',
          name: 'Biomassa Aumentada',
          points: 0,
          description: 'Mais energia disponível na base da cadeia alimentar'
        }
      ]
    },
    {
      id: 17,
      name: 'Tecidos e Simetria nos Organismos Multicelulares',
      description: 'Corpos mais organizados',
      story: 'Organismos multicelulares desenvolvem tecidos especializados e simetria corporal. Isso melhora a funcionalidade e a eficiência, abrindo caminho para formas de vida mais avançadas.',
      icon: '🦴',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Desenvolva 3 tipos de tecido',
          emoji: '🦴',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Desenvolva 5 tipos de tecido',
          emoji: '🦴',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Desenvolva 7 tipos de tecido',
          emoji: '🦴',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🦴',
          name: 'Tecido Diferenciado',
          points: 0,
          description: 'Células formando estruturas complexas e funcionais'
        }
      ]
    },
    {
      id: 18,
      name: 'Caminho Aberto para a "Explosão Cambriana"',
      description: 'Condições prontas para um salto evolutivo',
      story: 'A presença de oxigênio, a camada de ozônio, organismos multicelulares e rotas metabólicas diversas preparam o cenário para a explosão de formas de vida mais complexas no futuro próximo.',
      icon: '💥',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Crie 3 condições pré-Cambrianas',
          emoji: '💥',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 condições pré-Cambrianas',
          emoji: '💥',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 condições pré-Cambrianas',
          emoji: '💥',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💥',
          name: 'Preparação Cambriana',
          points: 0,
          description: 'O cenário perfeito para a diversificação explosiva da vida'
        }
      ]
    },
    {
      id: 19,
      name: 'O Mundo Pronto para a Diversificação Animal',
      description: 'Ecossistemas complexos aguardando novos protagonistas',
      story: 'Com a base ecológica estabelecida, a vida aguarda a chegada de animais mais diversos. Os ecossistemas estão prontos para receber organismos com estruturas corporais complexas.',
      icon: '🐠',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Prepare 3 nichos para animais',
          emoji: '🐠',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Prepare 5 nichos para animais',
          emoji: '🐠',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Prepare 7 nichos para animais',
          emoji: '🐠',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🐠',
          name: 'Nicho Animal',
          points: 0,
          description: 'Espaços ecológicos prontos para a chegada de animais complexos'
        }
      ]
    },
    {
      id: 20,
      name: 'Portal para um Planeta Cheio de Vida',
      description: 'A transição para uma biosfera diversificada e complexa',
      story: 'Este nível marca a passagem do mundo dominado por formas simples para um planeta repleto de vida complexa. É um portal para uma era de organismos multicelulares, diversificados e prontos para conquistas evolutivas maiores.',
      icon: '🚪🌍',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Abra 3 portais evolutivos finais',
          emoji: '🚪🌍',
          requiredMatches: 3,
          points: 0,
          maxMoves: 19
        },
        two: {
          description: 'Abra 5 portais evolutivos finais',
          emoji: '🚪🌍',
          requiredMatches: 5,
          points: 0,
          maxMoves: 15
        },
        three: {
          description: 'Abra 7 portais evolutivos finais',
          emoji: '🚪🌍',
          requiredMatches: 7,
          points: 0,
          maxMoves: 11
        }
      },
      combinations: [
        {
          emoji: '🚪🌍',
          name: 'Portal à Biodiversidade',
          points: 0,
          description: 'A entrada definitiva para um planeta repleto de vida complexa'
        }
      ]
    }
  ]
}
