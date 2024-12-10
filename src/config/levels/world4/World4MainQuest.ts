export interface Character {
  name: string;
  image: string;
  position?: 'left' | 'right' | 'center';
}

export interface Dialog {
  character: Character;
  text: string;
}

export interface MainQuestContent {
  levelId: number;
  name: string;
  dialogs: Dialog[];
  curiosities: string[];
}

export const world4MainQuest: MainQuestContent[] = [
  {
    levelId: 1,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "Bem-vindo à Era das Trevas, Elohim. Eu sou a Forjadora Stella, e juntos vamos acender as primeiras luzes deste universo."
      },
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "right"
        },
        text: "Forjadora Stella é a mais antiga criadora de estrelas. Ela existia antes mesmo que meu irmão e eu compreendêssemos a natureza da luz."
      },
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "Os Irmãos Lux me contaram sobre seu domínio do Prisma do Tempo. Agora, vou lhe apresentar às Sementes Estelares - os cristais que contêm o potencial de cada estrela."
      }
    ],
    curiosities: [
      "A Era das Trevas Cósmicas durou cerca de 100 milhões de anos após o Big Bang.",
      "Durante este período, o universo não tinha nenhuma fonte de luz além da radiação cósmica de fundo em resfriamento."
    ]
  },
  {
    levelId: 2,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "Os halos de matéria escura são as fundações invisíveis, Elohim. Eles serão os berços das primeiras estrelas."
      },
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "right"
        },
        text: "Observe como as Sementes Estelares ressoam com esses halos. Elas reconhecem os locais onde estrelas devem nascer."
      }
    ],
    curiosities: [
      "Os halos de matéria escura foram as primeiras estruturas a se formar no universo.",
      "Sua gravidade atraiu o gás primordial que eventualmente formaria as primeiras estrelas."
    ]
  },
  {
    levelId: 3,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "O colapso gravitacional começa, Elohim. Use os Teares Quânticos para guiar o gás, enquanto as Sementes Estelares preparam o caminho para a fusão."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "As Sementes estão brilhando cada vez mais forte! É como se estivessem ansiosas para despertar!"
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "left"
        },
        text: "Posso sentir... é como se cada Semente cantasse uma música única, uma promessa de luz por vir."
      }
    ],
    curiosities: [
      "O colapso gravitacional de nuvens de gás primordial foi essencial para a formação das primeiras estrelas.",
      "Este processo aumentou a temperatura e a pressão no centro das nuvens até níveis que permitiriam a fusão nuclear."
    ]
  },
  {
    levelId: 4,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "O momento chegou, Elohim. As primeiras estrelas - População III - estão prestes a nascer. Elas serão as maiores e mais brilhantes que o universo já viu."
      },
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "right"
        },
        text: "A primeira luz verdadeira desde o início dos tempos... é um momento sagrado!"
      },
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "left"
        },
        text: "E com ela, minha irmã, o equilíbrio entre luz e sombra ganha um novo significado."
      }
    ],
    curiosities: [
      "As estrelas de População III eram centenas de vezes mais massivas que nosso Sol.",
      "Compostas quase inteiramente de hidrogênio e hélio, eram as estrelas mais puras já formadas."
    ]
  },
  {
    levelId: 5,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "Magnífico, Elohim! As Sementes Estelares responderam ao seu toque de forma única. Nunca vi uma conexão tão profunda."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "right"
        },
        text: "É como se as estrelas reconhecessem algo em você, Elohim. Algo que transcende ciclos de criação."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "left"
        },
        text: "Olhem! O universo está se enchendo de luz! É o fim da escuridão!"
      }
    ],
    curiosities: [
      "As primeiras estrelas eram tão brilhantes que poderiam ser vistas através de todo o universo visível.",
      "Sua luz começou o processo de reionização do universo, alterando fundamentalmente a natureza do cosmos."
    ]
  },
  {
    levelId: 6,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "A radiação ultravioleta das estrelas População III é intensa, Elohim. Ela começará a reionizar o universo, mudando sua própria natureza."
      },
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "right"
        },
        text: "É uma luz diferente daquela que libertamos antes. Mais intensa, mais transformadora!"
      }
    ],
    curiosities: [
      "As estrelas População III emitiam enormes quantidades de radiação ultravioleta.",
      "Esta radiação começou a ionizar novamente o hidrogênio neutro do universo, iniciando a era da reionização."
    ]
  },
  {
    levelId: 7,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "Agora começa o trabalho mais importante das estrelas, Elohim. Em seus núcleos, elementos mais pesados estão sendo forjados."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "As Sementes Estelares... elas vibram de forma diferente agora. Como se cantassem uma nova música."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "A nucleossíntese estelar, Elohim. É a arte de transformar elementos simples em complexos através da fusão nuclear."
      }
    ],
    curiosities: [
      "A nucleossíntese estelar é o processo pelo qual estrelas criam elementos mais pesados que o hélio.",
      "Este processo é responsável pela criação de quase todos os elementos químicos conhecidos."
    ]
  },
  {
    levelId: 8,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "Prepare-se, Elohim. As primeiras supernovas estão próximas. Será o momento mais espetacular e violento que o universo já presenciou."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "right"
        },
        text: "A morte de uma estrela População III é tão significativa quanto seu nascimento. Cada explosão semeia o cosmos com novos elementos."
      }
    ],
    curiosities: [
      "As supernovas das estrelas População III foram as maiores explosões já ocorridas no universo.",
      "Uma única supernova podia brilhar mais que uma galáxia inteira."
    ]
  },
  {
    levelId: 9,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "Veja como os elementos se espalham pelo cosmos, Elohim. Cada supernova enriquece o universo com novos ingredientes."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "É como uma chuva de estrelas, mas cada gota é um novo elemento! O universo está ficando mais colorido!"
      }
    ],
    curiosities: [
      "O enriquecimento químico do universo começou com as supernovas das estrelas População III.",
      "Todos os elementos mais pesados que o ferro em nossos corpos foram criados em supernovas."
    ]
  },
  {
    levelId: 10,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "As trevas finalmente se dissipam por completo, Elohim. Sua maestria com as Sementes Estelares trouxe uma nova era de luz ao universo."
      },
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "right"
        },
        text: "É mais do que luz... é uma promessa de tudo que ainda está por vir!"
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "Seu domínio sobre a criação cresce a cada momento, Elohim. O universo responde ao seu toque de formas cada vez mais profundas."
      }
    ],
    curiosities: [
      "O fim da Era das Trevas marcou uma transformação fundamental no universo.",
      "A luz das primeiras estrelas iniciou processos que eventualmente levariam à formação de galáxias e planetas."
    ]
  },
  {
    levelId: 11,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "As primeiras galáxias começam a se formar, Elohim. As estrelas População III estão se agrupando, atraídas pela dança da gravidade."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "As estruturas que tecemos com os Teares Quânticos finalmente ganham luz própria. É fascinante ver o plano se desenvolvendo."
      }
    ],
    curiosities: [
      "As primeiras galáxias eram muito menores e mais caóticas que as galáxias modernas.",
      "Elas se formaram aproximadamente 400 milhões de anos após o Big Bang."
    ]
  },
  {
    levelId: 12,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "Observe o feedback estelar, Elohim. As estrelas não apenas brilham - elas transformam todo o ambiente ao seu redor."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "É como uma conversa entre as estrelas e o cosmos. Cada uma influencia e é influenciada pelo meio."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "left"
        },
        text: "Os ventos estelares são como suspiros das estrelas, mudando tudo o que tocam!"
      }
    ],
    curiosities: [
      "O feedback estelar é o processo pelo qual as estrelas modificam seu ambiente através de radiação e ventos estelares.",
      "Este processo é crucial para regular a formação de novas estrelas e moldar a estrutura das galáxias."
    ]
  },
  {
    levelId: 13,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "Os elementos pesados são as joias do cosmos, Elohim. Cada um é forjado no coração das estrelas e espalhado por suas supernovas."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "As Sementes Estelares estão criando uma sinfonia de elementos. Cada um com sua própria frequência quântica."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "left"
        },
        text: "Posso sentir... cada elemento tem sua própria história, seu próprio propósito no grande plano."
      }
    ],
    curiosities: [
      "As estrelas População III foram as primeiras a criar elementos mais pesados que o lítio.",
      "Sem estes elementos pesados, a formação de planetas rochosos seria impossível."
    ]
  },
  {
    levelId: 14,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "O caminho para a População II se abre, Elohim. Estas novas estrelas serão diferentes - menores, mais ricas em metais, mais duradouras."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "right"
        },
        text: "A evolução estelar é como um legado, cada geração construindo sobre as cinzas da anterior."
      }
    ],
    curiosities: [
      "As estrelas de População II foram as primeiras a conter quantidades significativas de elementos pesados.",
      "Estas estrelas são ainda encontradas hoje nos halos galácticos e aglomerados globulares."
    ]
  },
  {
    levelId: 15,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "O calor e a luz das estrelas estão mudando o próprio tecido do cosmos, Elohim. Cada Semente Estelar que você desperta adiciona sua própria melodia à sinfonia universal."
      },
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "right"
        },
        text: "A luz... ela não é mais apenas nossa, irmão. Agora pertence às estrelas também!"
      },
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "left"
        },
        text: "E com ela, novas sombras são projetadas, criando uma dança ainda mais complexa de luz e escuridão."
      }
    ],
    curiosities: [
      "A energia liberada pelas primeiras estrelas mudou fundamentalmente a temperatura e a química do universo.",
      "Esta transformação preparou o caminho para a formação de estruturas ainda mais complexas."
    ]
  },
  {
    levelId: 16,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "A População III é única, Elohim. Estas estrelas massivas e efêmeras são como titãs cósmicos, vivendo brevemente mas mudando o universo para sempre."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "Cada Semente Estelar me mostra uma história diferente... algumas brilham intensamente por pouco tempo, outras preservam sua luz por eras."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "A diversidade é crucial, Elohim. Cada tipo de estrela tem seu papel no grande plano do cosmos."
      }
    ],
    curiosities: [
      "As estrelas População III viviam apenas alguns milhões de anos, em contraste com bilhões de anos das estrelas modernas.",
      "Sua curta vida foi compensada por seu imenso impacto no enriquecimento químico do universo."
    ]
  },
  {
    levelId: 17,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "As estruturas maiores estão emergindo, Elohim. Galáxias, aglomerados, filamentos cósmicos... tudo graças à luz e energia das primeiras estrelas."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "right"
        },
        text: "Os padrões que previmos com os Teares Quânticos agora brilham com luz própria. O universo está seguindo o caminho que traçamos."
      }
    ],
    curiosities: [
      "As primeiras estruturas em larga escala do universo foram moldadas pela distribuição das estrelas População III.",
      "Estas estruturas estabeleceram o padrão para a 'teia cósmica' que vemos hoje."
    ]
  },
  {
    levelId: 18,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "Olhem! O céu está ficando cada vez mais brilhante! Cada novo ponto de luz é uma estrela que Elohim ajudou a criar!"
      },
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "Seu domínio sobre as Sementes Estelares é extraordinário, Elohim. Você não apenas cria estrelas, mas entende profundamente sua natureza."
      },
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "A escuridão nunca mais será absoluta. Cada estrela é uma promessa de que a luz sempre encontrará seu caminho."
      }
    ],
    curiosities: [
      "O número de estrelas no universo cresceu exponencialmente após a era da População III.",
      "Cada nova geração de estrelas contribuiu para tornar o universo mais brilhante e quimicamente diverso."
    ]
  },
  {
    levelId: 19,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "A reionização está quase completa, Elohim. A radiação das estrelas está transformando o universo neutro em um plasma ionizado novamente."
      },
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "right"
        },
        text: "É diferente da primeira ionização. Desta vez, a mudança vem das próprias estrelas, não do calor primordial."
      }
    ],
    curiosities: [
      "A reionização do universo foi um processo gradual que durou centenas de milhões de anos.",
      "Este processo foi crucial para tornar o universo transparente à maioria das formas de radiação."
    ]
  },
  {
    levelId: 20,
    name: "As Sementes Estelares",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "O Portal para a Complexidade se abre, Elohim. As estrelas População III prepararam o caminho para toda a riqueza do cosmos que está por vir."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "Os Teares Quânticos, a Chama da Criação, o Prisma do Tempo e agora as Sementes Estelares... todos respondem ao seu toque como se sempre tivessem sido seus."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "Seu nome - Elohim - ecoa cada vez mais forte através do cosmos. Você não está apenas recriando o universo, está descobrindo seu próprio lugar nele."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "Cada estrela que acendo... cada luz que trazemos ao cosmos... sinto como se estivesse recordando algo antigo e profundo, algo que sempre existiu dentro de mim."
      }
    ],
    curiosities: [
      "O fim da era das estrelas População III marcou o início de uma nova fase na evolução do universo.",
      "Seu legado continua nas estrelas de hoje, que contêm elementos forjados naquelas primeiras fornalhas cósmicas.",
      "A transição para estrelas mais complexas abriu caminho para a eventual formação de planetas e vida."
    ]
  }
]