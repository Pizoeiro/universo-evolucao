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

export const world5MainQuest: MainQuestContent[] = [
  {
    levelId: 1,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "Bem-vindo ao reino das estruturas cósmicas, Elohim. Eu sou Arquimedes, guardião da ordem e da harmonia universal."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "Olhe! Os padrões ao redor dele... são como constelações vivas, mas em formas geométricas perfeitas!"
      },
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "A matéria escura, Elohim, é nossa primeira aliada. Com o Compasso do Infinito, podemos traçar suas estruturas invisíveis."
      }
    ],
    curiosities: [
      "A matéria escura forma uma rede cósmica invisível que guia a formação de galáxias.",
      "Embora não possamos ver a matéria escura diretamente, podemos detectar sua influência através da gravidade."
    ]
  },
  {
    levelId: 2,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "As estrelas que criamos começam a se agrupar, Elohim. São as primeiras protogaláxias nascendo."
      },
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "right"
        },
        text: "O Compasso do Infinito vibra com cada nova estrutura. Ele reconhece os padrões fundamentais da criação em você, Elohim."
      }
    ],
    curiosities: [
      "As protogaláxias eram muito menores e mais irregulares que as galáxias atuais.",
      "Estas primeiras estruturas galácticas começaram a se formar cerca de 400 milhões de anos após o Big Bang."
    ]
  },
  {
    levelId: 3,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "Observe o crescimento através de fusões, Elohim. Cada encontro entre protogaláxias é uma dança cósmica única."
      },
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "right"
        },
        text: "As luzes das estrelas se mesclam e criam novos padrões! É como uma sinfonia visual!"
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "Cada fusão é um passo em direção a estruturas mais complexas. O cosmos aprende e evolui através destas uniões."
      }
    ],
    curiosities: [
      "O crescimento por fusão é um dos principais mecanismos de evolução galáctica.",
      "Durante as fusões, as galáxias podem passar por intensos períodos de formação estelar."
    ]
  },
  {
    levelId: 4,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "Os discos galácticos começam a tomar forma, Elohim. Use o Compasso para traçar suas órbitas perfeitas."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "O Compasso... ele responde ao meu pensamento, como se já conhecesse os padrões que desejo criar."
      }
    ],
    curiosities: [
      "Os discos galácticos se formam devido à conservação do momento angular.",
      "A maioria das galáxias espirais possui um disco fino onde novas estrelas continuam se formando."
    ]
  },
  {
    levelId: 5,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "As galáxias anãs são como sementes, Elohim. Pequenas, mas essenciais para o crescimento de estruturas maiores."
      },
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "right"
        },
        text: "O Compasso do Infinito pode trabalhar em qualquer escala. Da menor galáxia anã ao maior aglomerado."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "left"
        },
        text: "São como bebês galáxias! Cada uma com seu próprio brilho especial!"
      }
    ],
    curiosities: [
      "As galáxias anãs são as mais numerosas no universo.",
      "Muitas galáxias anãs acabam sendo absorvidas por galáxias maiores em um processo chamado canibalismo galáctico."
    ]
  },
  {
    levelId: 6,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "A diversidade começa a emergir, Elohim. Algumas galáxias escolhem a forma elíptica, outras a espiral. Cada padrão tem seu propósito."
      },
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "right"
        },
        text: "E cada forma influencia como as estrelas nascem e evoluem em seu interior. É uma dança complexa entre forma e função."
      }
    ],
    curiosities: [
      "A forma de uma galáxia é determinada por sua história de formação e interações.",
      "Galáxias elípticas são geralmente mais antigas e contêm estrelas mais velhas que as espirais."
    ]
  },
  {
    levelId: 7,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "As interações entre galáxias jovens são cruciais, Elohim. Use o Compasso para guiar suas danças gravitacionais."
      },
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "right"
        },
        text: "Olhe como a luz flui entre elas durante as interações! É como um balé cósmico!"
      },
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "left"
        },
        text: "E nas sombras entre elas, novas estruturas começam a se formar."
      }
    ],
    curiosities: [
      "As interações galácticas podem desencadear intensos surtos de formação estelar.",
      "Durante uma fusão galáctica, as estrelas raramente colidem devido às grandes distâncias entre elas."
    ]
  },
  {
    levelId: 8,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "No centro de cada galáxia, Elohim, um gigante adormece. Os buracos negros supermassivos são os ancoradores da estrutura galáctica."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "right"
        },
        text: "Mesmo eu sinto reverência diante destes senhores do vazio. Seu poder transcende a própria luz."
      }
    ],
    curiosities: [
      "Quase todas as galáxias grandes possuem um buraco negro supermassivo em seu centro.",
      "O tamanho do buraco negro central está relacionado com o tamanho e a massa da galáxia que o hospeda."
    ]
  },
  {
    levelId: 9,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "Os jatos relativísticos são as vozes dos núcleos galácticos ativos, Elohim. Use o Compasso para guiar sua energia."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "É incrível... posso sentir o poder fluindo através do Compasso, como se ele amplificasse minha conexão com as estruturas cósmicas."
      }
    ],
    curiosities: [
      "Os jatos relativísticos podem se estender por milhares de anos-luz além de suas galáxias de origem.",
      "Estes jatos são formados por partículas aceleradas a velocidades próximas à da luz."
    ]
  },
  {
    levelId: 10,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "As regiões de formação estelar são como jardins cósmicos, Elohim. Cada uma nutre milhares de novas estrelas."
      },
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "right"
        },
        text: "O Compasso pode ajudar a organizar estas regiões. A geometria da galáxia influencia onde as estrelas nascem."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "left"
        },
        text: "É como ver milhares de Sementes Estelares florescendo ao mesmo tempo!"
      }
    ],
    curiosities: [
      "As regiões de formação estelar são mais comuns nos braços das galáxias espirais.",
      "A compressão do gás por ondas de densidade nos braços espirais estimula o nascimento de novas estrelas."
    ]
  },
  {
    levelId: 11,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "O hidrogênio é como a tinta com que pintamos as galáxias, Elohim. Sua distribuição determina onde novas estrelas nascerão."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "É fascinante como o elemento mais simples tem papel tão fundamental na arquitetura cósmica."
      }
    ],
    curiosities: [
      "O hidrogênio molecular é o principal combustível para a formação de novas estrelas.",
      "A distribuição de hidrogênio em uma galáxia pode revelar sua história evolutiva."
    ]
  },
  {
    levelId: 12,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "O feedback galáctico é como a respiração das galáxias, Elohim. Use o Compasso para guiar estes ventos cósmicos."
      },
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "right"
        },
        text: "Os padrões de formação estelar também se estabelecem. Cada galáxia encontra seu próprio ritmo de criar novas estrelas."
      }
    ],
    curiosities: [
      "O feedback galáctico pode regular a formação de estrelas em toda a galáxia.",
      "Ventos galácticos podem transportar elementos pesados por grandes distâncias no espaço intergaláctico."
    ]
  },
  {
    levelId: 13,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "Agora veremos os filamentos cósmicos, Elohim. São as maiores estruturas do universo, uma teia que conecta todas as galáxias."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "right"
        },
        text: "Mesmo eu, que observo o vazio, me maravilho com estes padrões. São como os fios que tecem o próprio cosmos."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "left"
        },
        text: "O Compasso vibra diferente ao traçar estas estruturas... como se reconhecesse algo familiar nestes padrões primordiais."
      }
    ],
    curiosities: [
      "Os filamentos cósmicos formam a maior estrutura conhecida no universo, chamada 'teia cósmica'.",
      "Estas estruturas podem se estender por centenas de milhões de anos-luz."
    ]
  },
  {
    levelId: 14,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "Cada galáxia é uma cidade de estrelas, Elohim. Cada forma, cada padrão, conta uma história única de criação e evolução."
      },
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "right"
        },
        text: "E cada cidade brilha com sua própria luz, como um farol no cosmos!"
      }
    ],
    curiosities: [
      "A variedade morfológica das galáxias é classificada pelo sistema de Hubble.",
      "A forma de uma galáxia está intimamente ligada à sua história evolutiva e ambiente."
    ]
  },
  {
    levelId: 15,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "As galáxias começam a se estabilizar, Elohim. É hora de usar o Compasso para harmonizar suas estruturas internas."
      },
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "right"
        },
        text: "Os padrões de formação estelar também se estabelecem. Cada galáxia encontra seu próprio ritmo de criar novas estrelas."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "left"
        },
        text: "É como se cada galáxia estivesse encontrando sua própria personalidade!"
      }
    ],
    curiosities: [
      "Uma galáxia estabilizada mantém um equilíbrio delicado entre diferentes forças e processos.",
      "A estabilização galáctica é crucial para o desenvolvimento de sistemas planetários duradouros."
    ]
  },
  {
    levelId: 16,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "Os aglomerados começam a se formar, Elohim. São as maiores estruturas ligadas pela gravidade no universo."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "right"
        },
        text: "Observe como o vazio entre os aglomerados também tem seu papel. É o equilíbrio entre o cheio e o vazio que define a estrutura do cosmos."
      }
    ],
    curiosities: [
      "Aglomerados de galáxias podem conter milhares de galáxias individuais.",
      "O espaço entre aglomerados contém gás extremamente quente e rarefeito."
    ]
  },
  {
    levelId: 17,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "A matéria escura revela seus padrões maiores agora, Elohim. Use o Compasso para mapear sua distribuição em grande escala."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "Os padrões são hipnotizantes... como se pudesse ver a própria estrutura do espaço se dobrando."
      }
    ],
    curiosities: [
      "A distribuição de matéria escura forma uma 'teia cósmica' que conecta aglomerados de galáxias.",
      "Esta rede invisível contém a maior parte da massa do universo."
    ]
  },
  {
    levelId: 18,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "A evolução química das galáxias continua, Elohim. Cada geração de estrelas enriquece o meio intergaláctico com novos elementos."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "É fascinante ver como os elementos que tecemos com os Teares Quânticos agora se espalham por escalas tão vastas."
      }
    ],
    curiosities: [
      "O enriquecimento químico do universo é um processo contínuo que ainda ocorre hoje.",
      "A metalicidade de uma galáxia pode revelar muito sobre sua história evolutiva."
    ]
  },
  {
    levelId: 19,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "Os berçários de estrelas estão em plena atividade, Elohim. Cada galáxia agora é uma fábrica de novas estrelas."
      },
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "right"
        },
        text: "E cada estrela nasce com o potencial de criar seus próprios planetas. O ciclo de criação continua, em escalas cada vez menores."
      }
    ],
    curiosities: [
      "Diferentes regiões de uma galáxia podem ter diferentes taxas de formação estelar.",
      "Os braços espirais das galáxias são particularmente ativos na formação de novas estrelas."
    ]
  },
  {
    levelId: 20,
    name: "O Compasso do Infinito",
    dialogs: [
      {
        character: {
          name: "Arquimedes",
          image: "/characters/arquimedes.png",
          position: "left"
        },
        text: "O portal para os sistemas planetários se abre, Elohim. Seu domínio sobre as estruturas galácticas está completo."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "right"
        },
        text: "As galáxias que você teceu serão o palco para a próxima grande aventura da criação."
      },
      {
        character: {
          name: "Forjadora Stella",
          image: "/characters/stella.png",
          position: "left"
        },
        text: "E em algum lugar, em uma galáxia espiral comum, uma estrela amarela aguarda seu momento de criar algo extraordinário."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "O Compasso do Infinito vibra de uma forma diferente agora... como se antecipasse algo especial por vir."
      }
    ],
    curiosities: [
      "A formação de sistemas planetários é um processo natural que ocorre ao redor de muitas estrelas.",
      "Nosso Sistema Solar é apenas um entre bilhões em nossa galáxia, e cada um tem potencial para desenvolver sua própria história única."
    ]
  }
];