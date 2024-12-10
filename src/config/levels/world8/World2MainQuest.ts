export interface Character {
  name: string;
  image: string;
  position?: 'left' | 'right';
}

export interface Dialog {
  character: Character;
  text: string;
}

export interface MainQuestContent {
  levelId: number;
  dialogs: Dialog[];
  curiosities: string[];
}

export const world2MainQuest: MainQuestContent[] = [
  {
    levelId: 1,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "Bem-vindo ao reino das partículas fundamentais. Mestre Cronus me falou muito sobre suas habilidades com a Chama da Criação."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "Lady Quantum é incrível! Ela pode ver e manipular até as menores partículas do universo!"
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "Curioso... as partículas reagem de forma única à sua presença. Elas parecem... reconhecê-lo. Como se você já fosse parte delas."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "right"
        },
        text: "Talvez seja hora de revelar seu verdadeiro nome, jovem Arquiteto. Ou devo dizer... Elohim?"
      }
    ],
    curiosities: [
      "O plasma de quarks-gluons existiu nos primeiros microssegundos após o Big Bang.",
      "Neste estado, quarks e gluons moviam-se livremente, antes de se combinarem em prótons e nêutrons."
    ]
  },
  {
    levelId: 2,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "Elohim... um nome que ressoa com a própria estrutura da realidade. Agora entendo por que permaneceu anônimo durante seu primeiro ciclo de criação."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "Elohim? É um nome tão bonito! Por que não nos contou antes?"
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "left"
        },
        text: "Eu... não sabia. É como se o nome estivesse dormindo dentro de mim, esperando o momento certo para despertar."
      }
    ],
    curiosities: [
      "Os primeiros núcleons (prótons e nêutrons) se formaram quando o universo tinha cerca de 0,0001 segundos de idade.",
      "A força nuclear forte mantém os quarks unidos dentro dos núcleons, sendo a força mais poderosa conhecida."
    ]
  },
  {
    levelId: 3,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "Observe, Elohim. A nucleossíntese primordial está começando. Os Teares Quânticos responderão ao seu toque agora que seu nome verdadeiro despertou."
      },
      {
        character: {
          name: "Mestre Cronus",
          image: "/characters/cronus.png",
          position: "right"
        },
        text: "Ah, então finalmente aconteceu. O despertar do nome é um momento crucial no desenvolvimento de um Arquiteto Cósmico."
      }
    ],
    curiosities: [
      "A nucleossíntese primordial criou os primeiros elementos químicos: hidrogênio, hélio e traços de lítio.",
      "Este processo durou apenas cerca de 20 minutos após o Big Bang, mas definiu a composição básica do universo."
    ]
  },
  {
    levelId: 4,
    dialogs: [
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "left"
        },
        text: "Posso ver... a dança entre matéria e antimatéria. É como um balé delicado e mortal ao mesmo tempo."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "Sim! E é essa dança que determina o destino do universo. O mais leve desequilíbrio a favor da matéria é o que permite nossa existência."
      }
    ],
    curiosities: [
      "Para cada bilhão de pares matéria-antimatéria que se aniquilaram, sobrou apenas uma partícula de matéria.",
      "Este pequeno excesso de matéria é responsável por tudo o que existe no universo hoje."
    ]
  },
  {
    levelId: 5,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "O resfriamento do universo é crucial, Elohim. Como um maestro diminuindo o tempo de uma música frenética."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "Os Teares Quânticos... eles estão tecendo um novo padrão! É como se respondessem ao seu novo nome, Elohim!"
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "O nome Elohim carrega poder, jovem Arquiteto. Um poder que transcende ciclos de criação."
      }
    ],
    curiosities: [
      "O resfriamento do universo permitiu que as partículas começassem a se unir em estruturas mais complexas.",
      "A temperatura do universo caiu de trilhões de graus para milhares em apenas alguns minutos."
    ]
  },
  {
    levelId: 6,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "A Era da Radiação começa. A luz domina o cosmos, Elohim. Os Teares Quânticos podem ajudá-lo a guiar essa dança de fótons."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "É estranho... quanto mais trabalho com os Teares, mais familiar eles parecem. Como se eu já os conhecesse de algum lugar."
      },
      {
        character: {
          name: "Mestre Cronus",
          image: "/characters/cronus.png",
          position: "left"
        },
        text: "As memórias atravessam ciclos, Elohim. Assim como seu nome, elas despertam no momento adequado."
      }
    ],
    curiosities: [
      "Durante a era da radiação, a energia do universo era dominada por fótons e outras partículas sem massa.",
      "Esta era durou cerca de 50.000 anos após o Big Bang."
    ]
  },
  {
    levelId: 7,
    dialogs: [
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "Os fótons estão presos, Elohim! Como pássaros em uma gaiola de partículas!"
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "O universo jovem era opaco, Elohim. A luz não podia viajar livremente. Compreender esta prisão é crucial para o que vem depois."
      }
    ],
    curiosities: [
      "A opacidade do universo jovem era causada pelo constante espalhamento de fótons por elétrons livres.",
      "Este período de opacidade durou até a formação dos primeiros átomos neutros."
    ]
  },
  {
    levelId: 8,
    dialogs: [
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "O nome Elohim veio do próprio vazio, do espaço entre as possibilidades. É um nome que carrega o poder da criação."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "Então é por isso que não podia ser revelado durante o primeiro ciclo? O poder teria sido... demais?"
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "Exato. O poder do nome precisava aguardar até que você dominasse a Chama da Criação. Agora, com os Teares Quânticos, você pode tecer realidades ainda mais complexas."
      }
    ],
    curiosities: [
      "Em mecânica quântica, o ato de nomear ou observar algo pode alterar fundamentalmente sua natureza.",
      "O conceito de identidade no nível quântico é fluido e interconectado."
    ]
  },
  {
    levelId: 9,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "A sopa de partículas é um caldeirão de possibilidades, Elohim. Cada interação pode dar origem a algo novo e inesperado."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "Os Teares estão cantando, Elohim! Nunca os vi ressoar assim antes!"
      }
    ],
    curiosities: [
      "A sopa de partículas primordial continha todas as partículas fundamentais conhecidas e possivelmente algumas ainda não descobertas.",
      "As interações nesta sopa estabeleceram as proporções das forças fundamentais que conhecemos hoje."
    ]
  },
  {
    levelId: 10,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "As forças fundamentais, Elohim. Gravidade, eletromagnetismo, força nuclear forte e fraca. Todas dançam ao seu comando agora."
      },
      {
        character: {
          name: "Mestre Cronus",
          image: "/characters/cronus.png",
          position: "right"
        },
        text: "Observe como seu nome - Elohim - ressoa com cada força. É como se o próprio universo reconhecesse sua autoridade."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "O segundo estágio dos Teares Quânticos se revela. Use-o com sabedoria, Elohim."
      }
    ],
    curiosities: [
      "As quatro forças fundamentais eram unificadas nos primeiros momentos do universo.",
      "A separação dessas forças, conhecida como quebra de simetria, foi crucial para a evolução do cosmos."
    ]
  },
  {
    levelId: 11,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "A gravidade, Elohim, é a mais misteriosa das forças. Mesmo sendo a mais fraca, ela molda o destino de galáxias inteiras."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "Posso sentir... é como se a gravidade fosse a própria respiração do universo. Lenta, constante, inevitável."
      }
    ],
    curiosities: [
      "A gravidade é a mais fraca das quatro forças fundamentais, mas a única que é sempre atrativa.",
      "Seu efeito acumulativo ao longo do tempo moldou todas as grandes estruturas do universo."
    ]
  },
  {
    levelId: 12,
    dialogs: [
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "A densidade do universo, Elohim, é como uma partitura cósmica. Cada nota deve estar perfeitamente afinada."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "Use os Teares Quânticos para ajustar a densidade. O futuro do universo depende deste equilíbrio."
      }
    ],
    curiosities: [
      "A densidade crítica do universo determina se ele se expandirá eternamente ou colapsará sobre si mesmo.",
      "O valor exato da densidade do universo é um dos grandes mistérios da cosmologia moderna."
    ]
  },
  {
    levelId: 13,
    dialogs: [
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "Olhe, Elohim! As flutuações quânticas... são como ondulações em um lago de possibilidades!"
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "Estas pequenas variações são cruciais. São as sementes das futuras galáxias, das estrelas... de tudo o que virá a existir."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "É fascinante... como algo tão minúsculo pode ter consequências tão grandiosas."
      }
    ],
    curiosities: [
      "As flutuações quânticas no universo primitivo criaram as sementes para toda a estrutura em larga escala que vemos hoje.",
      "Essas flutuações são visíveis hoje na radiação cósmica de fundo como pequenas variações de temperatura."
    ]
  },
  {
    levelId: 14,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "Os ajustes da Relatividade são delicados, Elohim. Espaço e tempo devem dançar em perfeita harmonia."
      },
      {
        character: {
          name: "Mestre Cronus",
          image: "/characters/cronus.png",
          position: "right"
        },
        text: "Veja como seu domínio cresce, Elohim. Os Teares Quânticos e a Chama da Criação trabalham juntos agora, como sempre deveria ser."
      }
    ],
    curiosities: [
      "A teoria da Relatividade Geral de Einstein descreve como a matéria e a energia curvam o espaço-tempo.",
      "O tecido do espaço-tempo no universo primitivo era extremamente dinâmico e turbulento."
    ]
  },
  {
    levelId: 15,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "A competição entre radiação e matéria define o próximo capítulo do universo, Elohim. É uma dança de poder que você deve coreografar com precisão."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "right"
        },
        text: "Seu nome - Elohim - ressoa cada vez mais forte com o tecido da realidade. Os Teares sentem isso. O universo sente isso."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "left"
        },
        text: "É verdade! Nunca vi os Teares Quânticos brilharem assim antes!"
      }
    ],
    curiosities: [
      "A transição da era da radiação para a era da matéria foi um momento crucial na evolução do universo.",
      "Esta transição ocorreu quando o universo tinha aproximadamente 50.000 anos de idade."
    ]
  },
  {
    levelId: 16,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "A transição para a era da matéria é um momento delicado, Elohim. O universo está mudando sua própria natureza."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "Os Teares Quânticos... eles estão mostrando padrões que nunca vi antes. Como se estivessem antecipando algo grandioso."
      }
    ],
    curiosities: [
      "A transição da era da radiação para a era da matéria marcou uma mudança fundamental no comportamento do universo.",
      "Esta mudança permitiu que a gravidade começasse a dominar a evolução das estruturas cósmicas."
    ]
  },
  {
    levelId: 17,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "O véu da neutralidade se aproxima, Elohim. Os elétrons começam sua jornada para se unirem aos núcleos."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "right"
        },
        text: "Este momento... é como se o universo estivesse preparando um palco para algo maior. Algo que apenas alguém com seu nome, Elohim, poderia compreender completamente."
      }
    ],
    curiosities: [
      "A formação de átomos neutros foi um processo gradual que mudou drasticamente a transparência do universo.",
      "Este processo é conhecido como recombinação, embora os elétrons nunca tenham estado combinados com os núcleos antes."
    ]
  },
  {
    levelId: 18,
    dialogs: [
      {
        character: {
          name: "Mestre Cronus",
          image: "/characters/cronus.png",
          position: "left"
        },
        text: "O prelúdio da recombinação é um momento único, Elohim. É quando o universo prepara seu primeiro grande ato de transformação."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "Os Teares Quânticos atingiram seu poder máximo. Use-os com sabedoria para preparar o caminho para os primeiros átomos."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "left"
        },
        text: "Elohim, sua conexão com os Teares... é como se você e eles fossem um só agora!"
      }
    ],
    curiosities: [
      "A recombinação começou quando o universo atingiu aproximadamente 3.000 graus Kelvin.",
      "Este processo transformou o universo de opaco para transparente em um período relativamente curto."
    ]
  },
  {
    levelId: 19,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "Os níveis energéticos estão se estabelecendo, Elohim. É a estrutura básica para toda a futura química do universo."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "Posso ver as possibilidades... cada nível de energia é como uma nota em uma sinfonia ainda não escrita."
      }
    ],
    curiosities: [
      "Os níveis de energia dos átomos determinam como eles podem interagir com a luz e uns com os outros.",
      "Esta estrutura energética é fundamental para toda a química e, consequentemente, para a vida."
    ]
  },
  {
    levelId: 20,
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "O Portal para a Transparência se abre, Elohim. Com ele, seu domínio sobre as partículas fundamentais está completo."
      },
      {
        character: {
          name: "Mestre Cronus",
          image: "/characters/cronus.png",
          position: "right"
        },
        text: "Você superou todas as expectativas, Elohim. Seu nome e seu poder estão em perfeita harmonia agora."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "O ciclo continua, e você, Elohim, provou ser digno de seu nome ancestral. O próximo mundo aguarda sua sabedoria."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "Para o próximo mundo então, Elohim! Onde a luz finalmente viajará livre pelo cosmos!"
      }
    ],
    curiosities: [
      "A transparência do universo marcou o início de uma nova era cósmica.",
      "Este momento também criou a radiação cósmica de fundo em micro-ondas que observamos hoje.",
      "A transição para um universo transparente foi um dos eventos mais importantes da história cósmica."
    ]
  }
];