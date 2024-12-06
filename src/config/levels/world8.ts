import { World } from './types'

export const world8: World = {
  name: 'A Origem da Vida',
  description: 'Acompanhe a transição da química pré-biótica para as primeiras formas de vida. Veja o surgimento de moléculas autorreplicantes, protobiontes e os primeiros organismos, passando pelo RNA Mundo até a formação de cadeias alimentares e a modificação da atmosfera pela vida. Este é o momento em que a biologia começa a ganhar espaço no jovem planeta Terra.',
  icon: '🧬',
  levels: [
    {
      id: 1,
      name: 'Surgimento de Moléculas Autorreplicantes (RNA?)',
      description: 'O primeiro passo rumo à vida: moléculas capazes de copiar a si mesmas',
      story: 'Moléculas de RNA ou similares surgem, capazes de se autorreplicar. Esse é um marco fundamental: a informação genética e a capacidade de replicação estabelecem a base da vida.',
      icon: '🧬',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Forme 3 moléculas autorreplicantes',
          emoji: '🧬',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Forme 5 moléculas autorreplicantes',
          emoji: '🧬',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Forme 7 moléculas autorreplicantes',
          emoji: '🧬',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🧬',
          name: 'RNA Primordial',
          points: 0,
          description: 'A molécula capaz de armazenar informação e se copiar'
        }
      ]
    },
    {
      id: 2,
      name: 'Micelas e Protobiontes',
      description: 'Estruturas primitivas parecidas com células',
      story: 'Micelas e protobiontes são agregados de moléculas que formam barreiras, separando o interior do exterior. Eles estabelecem um ambiente interno propício para reações químicas mais complexas.',
      icon: '🫧',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Forme 3 protobiontes',
          emoji: '🫧',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Forme 5 protobiontes',
          emoji: '🫧',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Forme 7 protobiontes',
          emoji: '🫧',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🫧',
          name: 'Protobionte',
          points: 0,
          description: 'Agregados moleculares pré-celulares'
        }
      ]
    },
    {
      id: 3,
      name: 'Hipóteses da Vida em Chaminés Hidrotermais',
      description: 'Ambientes profundos e quentes favorecendo a química orgânica',
      story: 'Chaminés hidrotermais no fundo do mar fornecem calor, minerais e gradientes químicos. Esses ambientes podem ter sido locais cruciais para o surgimento das primeiras reações pré-bióticas complexas.',
      icon: '♨️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Crie 3 ambientes hidrotermais',
          emoji: '♨️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 ambientes hidrotermais',
          emoji: '♨️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 ambientes hidrotermais',
          emoji: '♨️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '♨️',
          name: 'Chaminé Hidrotermal',
          points: 0,
          description: 'Locais propícios para o surgimento da vida'
        }
      ]
    },
    {
      id: 4,
      name: 'Primeiras Reações Metabólicas Simples',
      description: 'Caminho para extrair energia do ambiente',
      story: 'Organismos primitivos precisam obter energia. Reações metabólicas simples, como usar gradientes químicos, surgem, permitindo a manutenção e crescimento desses protossistemas vivos.',
      icon: '⚗️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Ative 3 reações metabólicas',
          emoji: '⚗️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Ative 5 reações metabólicas',
          emoji: '⚗️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Ative 7 reações metabólicas',
          emoji: '⚗️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '⚗️',
          name: 'Metabolismo Inicial',
          points: 0,
          description: 'Reações simples para obter energia do ambiente'
        }
      ]
    },
    {
      id: 5,
      name: 'RNA Mundo: Informação e Catálise',
      description: 'O RNA atuando como gene e enzima',
      story: 'Antes das proteínas, o RNA pode ter assumido o papel de catalisador e armazenador de informação. Esse "RNA Mundo" fornece a base para a complexidade biológica posterior.',
      icon: '🧬',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 catálises de RNA',
          emoji: '🧬',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 catálises de RNA',
          emoji: '🧬',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 catálises de RNA',
          emoji: '🧬',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🧬',
          name: 'Riboenzima',
          points: 0,
          description: 'RNA atuando como enzima e molécula de informação'
        }
      ]
    },
    {
      id: 6,
      name: 'Seletividade e Erros de Cópia: Mutação Inicial',
      description: 'Variabilidade genética surgindo',
      story: 'Ao se replicar, o RNA comete erros. Alguns erros prejudicam, outros beneficiam. Esse surgimento de mutações cria diversidade genética, impulsionando a evolução inicial.',
      icon: '🔀',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Gere 3 mutações',
          emoji: '🔀',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Gere 5 mutações',
          emoji: '🔀',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Gere 7 mutações',
          emoji: '🔀',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🔀',
          name: 'Mutação Primordial',
          points: 0,
          description: 'A origem da variabilidade genética inicial'
        }
      ]
    },
    {
      id: 7,
      name: 'Pressão Seletiva em Ambiente Hostil',
      description: 'Somente os mais adaptados sobrevivem',
      story: 'No ambiente inóspito da Terra primitiva, apenas organismos mais resistentes sobrevivem. A seleção natural começa a atuar, favorecendo moléculas e sistemas mais estáveis e funcionais.',
      icon: '🔥',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Selecione 3 variantes resistentes',
          emoji: '🔥',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Selecione 5 variantes resistentes',
          emoji: '🔥',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Selecione 7 variantes resistentes',
          emoji: '🔥',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔥',
          name: 'Seleção Natural Inicial',
          points: 0,
          description: 'A pressão ambiental moldando a evolução precoce'
        }
      ]
    },
    {
      id: 8,
      name: 'Estabilidade dos Primeiros Organismos Unicelulares',
      description: 'Células primitivas estabelecendo identidade',
      story: 'Protobiontes que conseguem manter sua integridade e replicar suas moléculas internas tornam-se os primeiros organismos unicelulares. A estabilidade estrutural e funcional é chave.',
      icon: '⚖️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Estabilize 3 organismos unicelulares',
          emoji: '⚖️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Estabilize 5 organismos unicelulares',
          emoji: '⚖️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Estabilize 7 organismos unicelulares',
          emoji: '⚖️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '⚖️',
          name: 'Célula Estável',
          points: 0,
          description: 'Primeiras células estabelecendo equilíbrio interno'
        }
      ]
    },
    {
      id: 9,
      name: 'Bactérias e Arqueas Primitivas',
      description: 'Os ancestrais mais antigos dos seres vivos atuais',
      story: 'Os primeiros seres vivos que reconhecemos como organismos celulares simples são bactérias e arqueas primitivas. Elas se alimentam de compostos químicos e crescem, iniciando a história da vida na Terra.',
      icon: '🦠',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 linhagens microbianas',
          emoji: '🦠',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 linhagens microbianas',
          emoji: '🦠',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 linhagens microbianas',
          emoji: '🦠',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🦠',
          name: 'Micro-organismo Primitivo',
          points: 0,
          description: 'As primeiras bactérias e arqueas da Terra'
        }
      ]
    },
    {
      id: 10,
      name: 'Fotossíntese Anoxigênica Inicia?',
      description: 'A luz do sol sendo aproveitada sem produzir oxigênio',
      story: 'Alguns organismos começam a usar a luz solar para obter energia, mas sem liberar oxigênio. Essa fotossíntese anoxigênica é um passo crucial para aproveitar a energia do sol.',
      icon: '🔆',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Ative 3 reações fotossintéticas simples',
          emoji: '🔆',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Ative 5 reações fotossintéticas simples',
          emoji: '🔆',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Ative 7 reações fotossintéticas simples',
          emoji: '🔆',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🔆',
          name: 'Fotossíntese Primitiva',
          points: 0,
          description: 'Obtendo energia da luz sem liberar O₂'
        }
      ]
    },
    {
      id: 11,
      name: 'Interações entre Organismos e Minerais',
      description: 'Superfícies minerais auxiliando processos biológicos',
      story: 'Organismos primitivos interagem com minerais, usando-os como catalisadores ou fontes de nutrientes. Essa parceria mineral-biológica amplia a diversidade metabólica.',
      icon: '💎',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Estabeleça 3 interações mineral-biológicas',
          emoji: '💎',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Estabeleça 5 interações mineral-biológicas',
          emoji: '💎',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Estabeleça 7 interações mineral-biológicas',
          emoji: '💎',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💎',
          name: 'Catálise Mineral Biológica',
          points: 0,
          description: 'Minerais auxiliando processos vitais'
        }
      ]
    },
    {
      id: 12,
      name: 'Adaptações à Radiação Ultravioleta',
      description: 'Sobrevivendo à luz solar intensa sem ozônio',
      story: 'Sem camada de ozônio, a radiação UV é forte. Os organismos desenvolvem pigmentos protetores e outras adaptações para resistir à radiação, garantindo sua sobrevivência.',
      icon: '☀️',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Desenvolva 3 adaptações UV',
          emoji: '☀️',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Desenvolva 5 adaptações UV',
          emoji: '☀️',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Desenvolva 7 adaptações UV',
          emoji: '☀️',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '☀️',
          name: 'Proteção UV',
          points: 0,
          description: 'Mecanismos para suportar radiação intensa'
        }
      ]
    },
    {
      id: 13,
      name: 'Gradual Complexidade das Vias Metabólicas',
      description: 'De reações simples a rotas metabólicas complexas',
      story: 'Com o tempo, as reações metabólicas se interconectam, formando vias metabólicas complexas. Essa complexidade permite maior eficiência e uso de uma variedade de recursos.',
      icon: '🔬',
      magicaCosmicaCount: 1,
      starObjectives: {
        one: {
          description: 'Estabeleça 3 vias metabólicas',
          emoji: '🔬',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Estabeleça 5 vias metabólicas',
          emoji: '🔬',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Estabeleça 7 vias metabólicas',
          emoji: '🔬',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔬',
          name: 'Via Metabólica',
          points: 0,
          description: 'Conjunto integrado de reações bioquímicas'
        }
      ]
    },
    {
      id: 14,
      name: 'Surgimento das Membranas Celulares mais Complexas',
      description: 'Barreiras seletivas e eficientes',
      story: 'Membranas celulares mais complexas, com lipídios e proteínas, surgem, tornando a célula mais estável e controlando melhor a entrada e saída de substâncias.',
      icon: '🧫',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Melhore 3 membranas celulares',
          emoji: '🧫',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Melhore 5 membranas celulares',
          emoji: '🧫',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Melhore 7 membranas celulares',
          emoji: '🧫',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🧫',
          name: 'Membrana Complexa',
          points: 0,
          description: 'Estruturas celulares mais eficientes e seletivas'
        }
      ]
    },
    {
      id: 15,
      name: 'Cooperação e Competição entre Microrganismos',
      description: 'Ecologia microbiana emergente',
      story: 'Os micro-organismos interagem, cooperam, competem por recursos. Essas relações ecológicas determinam quais linhagens prosperam, levando à dinâmica da vida em comunidade.',
      icon: '🤝',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Estabeleça 3 interações ecológicas',
          emoji: '🤝',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Estabeleça 5 interações ecológicas',
          emoji: '🤝',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Estabeleça 7 interações ecológicas',
          emoji: '🤝',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🤝',
          name: 'Interação Microbiana',
          points: 0,
          description: 'Cooperação e competição moldando a diversidade'
        }
      ]
    },
    {
      id: 16,
      name: 'Incremento na Diversidade Química e Genética',
      description: 'Mais variantes, mais possibilidades',
      story: 'Com mutações, recombinações e pressões seletivas, aumenta a diversidade genética. Quimicamente, novos metabólitos e rotas surgem, expandindo o repertório biológico.',
      icon: '🌈',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Aumente 3 vezes a diversidade',
          emoji: '🌈',
          requiredMatches: 3,
          points: 0,
          maxMoves: 17
        },
        two: {
          description: 'Aumente 5 vezes a diversidade',
          emoji: '🌈',
          requiredMatches: 5,
          points: 0,
          maxMoves: 13
        },
        three: {
          description: 'Aumente 7 vezes a diversidade',
          emoji: '🌈',
          requiredMatches: 7,
          points: 0,
          maxMoves: 9
        }
      },
      combinations: [
        {
          emoji: '🌈',
          name: 'Diversidade Genética',
          points: 0,
          description: 'Variedade crescente de genes e metabólitos'
        }
      ]
    },
    {
      id: 17,
      name: 'Formação das Primeiras Cadeias Alimentares',
      description: 'Organismos usando uns aos outros como recurso',
      story: 'Alguns micro-organismos produzem substâncias, outros as consomem, formando cadeias alimentares simples. Isso cria interdependência e refina a ecologia microbiana.',
      icon: '🔗',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Crie 3 elos alimentares',
          emoji: '🔗',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Crie 5 elos alimentares',
          emoji: '🔗',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Crie 7 elos alimentares',
          emoji: '🔗',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🔗',
          name: 'Cadeia Alimentar Primordial',
          points: 0,
          description: 'Seres ligados pelo fluxo de energia e matéria'
        }
      ]
    },
    {
      id: 18,
      name: 'Modificação da Atmosfera pela Vida (Oxigênio a Caminho?)',
      description: 'As atividades biológicas alterando a química do ar',
      story: 'Mesmo antes da fotossíntese oxigênica plena, a vida já começa a impactar a atmosfera. Com o tempo, certos processos vão conduzir ao surgimento do oxigênio livre, mudando drasticamente o planeta.',
      icon: '💨',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Altere a atmosfera 3 vezes',
          emoji: '💨',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Altere a atmosfera 5 vezes',
          emoji: '💨',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Altere a atmosfera 7 vezes',
          emoji: '💨',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '💨',
          name: 'Atmosfera em Mudança',
          points: 0,
          description: 'A vida começa a influenciar a composição do ar'
        }
      ]
    },
    {
      id: 19,
      name: 'Biosfera Primordial Estabelecida',
      description: 'Um mundo vivo, ainda microscópico, mas estável',
      story: 'A partir de um punhado de moléculas autorreplicantes, chegamos a uma biosfera primitiva com organismos diversos interagindo, metabolizando, crescendo e evoluindo. A vida, mesmo simples, domina a cena.',
      icon: '🌐',
      magicaCosmicaCount: 2,
      starObjectives: {
        one: {
          description: 'Estabeleça 3 nichos biológicos',
          emoji: '🌐',
          requiredMatches: 3,
          points: 0,
          maxMoves: 18
        },
        two: {
          description: 'Estabeleça 5 nichos biológicos',
          emoji: '🌐',
          requiredMatches: 5,
          points: 0,
          maxMoves: 14
        },
        three: {
          description: 'Estabeleça 7 nichos biológicos',
          emoji: '🌐',
          requiredMatches: 7,
          points: 0,
          maxMoves: 10
        }
      },
      combinations: [
        {
          emoji: '🌐',
          name: 'Biosfera Primitiva',
          points: 0,
          description: 'A vida estabelecida na Terra em escala microbiana'
        }
      ]
    },
    {
      id: 20,
      name: 'Transição para o Próximo Mundo: Da Vida Microbiana à Complexidade',
      description: 'Rumo à evolução de organismos mais complexos',
      story: 'Agora que a vida microbiana está firmemente estabelecida, a porta para a evolução de organismos mais complexos está aberta. Este nível marca a transição para um mundo de maior diversidade e complexidade biológica.',
      icon: '🚪🧬',
      magicaCosmicaCount: 3,
      starObjectives: {
        one: {
          description: 'Abra 3 portais evolutivos',
          emoji: '🚪🧬',
          requiredMatches: 3,
          points: 0,
          maxMoves: 19
        },
        two: {
          description: 'Abra 5 portais evolutivos',
          emoji: '🚪🧬',
          requiredMatches: 5,
          points: 0,
          maxMoves: 15
        },
        three: {
          description: 'Abra 7 portais evolutivos',
          emoji: '🚪🧬',
          requiredMatches: 7,
          points: 0,
          maxMoves: 11
        }
      },
      combinations: [
        {
          emoji: '🚪🧬',
          name: 'Portal Evolutivo',
          points: 0,
          description: 'A passagem da vida simples para a complexidade biológica'
        }
      ]
    }
  ]
}
