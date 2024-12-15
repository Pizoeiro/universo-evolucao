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
    name: string;
    dialogs: Dialog[];
    curiosities: string[];
  }
  
  export const world1MainQuest: MainQuestContent[] = [
    {
      levelId: 1,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "Bem-vindo à Academia de Criação Universal, jovem Arquiteto. Você está prestes a iniciar sua jornada no momento mais singular de todos - o Ponto Zero."
        },
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "Mestre Cronus é o guardião do Tempo Zero! Não existe ninguém mais sábio sobre os mistérios do início do universo."
        },
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "Sua primeira lição é aprender a concentrar toda a energia existente em um único ponto. A Chama da Criação irá ajudá-lo nesta tarefa."
        }
      ],
      curiosities: [
        "O Ponto Zero, ou singularidade inicial, continha toda a matéria e energia do universo em um espaço infinitamente pequeno.",
        "A temperatura no momento do Ponto Zero era tão alta que nenhuma partícula poderia existir da forma como conhecemos hoje."
      ]
    },
    {
      levelId: 2,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "Incrível! Você conseguiu concentrar a energia! Mas... está ficando instável!"
        },
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "Agora vem o momento crucial - o Big Bang. Use a Chama da Criação para controlar a explosão. Um universo estável depende deste momento."
        },
        {
          character: {
            name: "Observador do Vazio",
            image: "/characters/observer.png",
            position: "left"
          },
          text: "Interessante... este jovem Arquiteto possui um dom natural para manipular as forças primordiais."
        }
      ],
      curiosities: [
        "O Big Bang não foi uma explosão no espaço, mas uma explosão do próprio espaço.",
        "Em menos de um segundo após o Big Bang, o universo se expandiu mais rápido que a velocidade da luz."
      ]
    },
    {
      levelId: 3,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "O Caldeirão Primordial está formado. Agora você deve manter o equilíbrio das forças fundamentais."
        },
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "É como uma receita cósmica! Cada ingrediente precisa estar na medida certa para que o universo se desenvolva corretamente."
        }
      ],
      curiosities: [
        "As quatro forças fundamentais do universo são: gravidade, força eletromagnética, força nuclear forte e força nuclear fraca.",
        "Nos primeiros momentos após o Big Bang, todas essas forças estavam unificadas em uma única superforça."
      ]
    },
    {
      levelId: 4,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "Chegamos à Inflação Cósmica. O universo precisa se expandir rapidamente, como um balão sendo soprado em velocidade impossível."
        },
        {
          character: {
            name: "Observador do Vazio",
            image: "/characters/observer.png",
            position: "right"
          },
          text: "Cuidado, jovem Arquiteto. Uma expansão descontrolada pode rasgar o próprio tecido do espaço-tempo."
        }
      ],
      curiosities: [
        "Durante a inflação cósmica, o universo aumentou de tamanho em um fator de pelo menos 10^78 em menos de um segundo.",
        "A teoria da inflação cósmica explica por que o universo parece tão uniforme em grandes escalas."
      ]
    },
    {
      levelId: 5,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "A pressão está aumentando! É como se todo o universo fosse uma panela de pressão gigante!"
        },
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "Exatamente, Eco. E você, jovem Arquiteto, deve controlar essa pressão. É ela que moldará a futura estrutura do cosmos."
        }
      ],
      curiosities: [
        "A pressão nos primeiros momentos do universo era tão intensa que poderia comprimir toda a Terra atual ao tamanho de uma bolinha de gude.",
        "A alta pressão do universo primordial foi essencial para a formação das primeiras partículas."
      ]
    },
    {
      levelId: 6,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "Agora precisamos preparar a Sopa Primordial. Os ingredientes fundamentais do universo devem ser misturados na proporção correta."
        },
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "Olhe! As partículas estão dançando na sopa! É como se soubessem que um dia farão parte de algo maior."
        },
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "Cada partícula que você mistura hoje poderá um dia fazer parte de uma estrela, um planeta... ou até mesmo de vida."
        }
      ],
      curiosities: [
        "A sopa primordial do universo era composta principalmente de quarks e gluons em um estado chamado plasma de quarks-gluons.",
        "Este 'caldo' primordial era trilhões de vezes mais quente que o núcleo do Sol."
      ]
    },
    {
      levelId: 7,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "Uau! O universo está se tornando um verdadeiro espetáculo de luz! Como fogos de artifício cósmicos!"
        },
        {
          character: {
            name: "Observador do Vazio",
            image: "/characters/observer.png",
            position: "left"
          },
          text: "A liberação de energia deve ser precisa. Um show de luzes bonito não significa necessariamente um universo funcional."
        }
      ],
      curiosities: [
        "A liberação de energia nos primeiros momentos do universo foi mais poderosa que bilhões de explosões nucleares combinadas.",
        "Esta energia inicial ainda pode ser detectada hoje como radiação cósmica de fundo."
      ]
    },
    {
      levelId: 8,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "As Ondas de Choque começaram. Cada onda que você cria agora determinará como a matéria se distribuirá pelo cosmos."
        },
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "É como ondas em um lago, mas o lago é o próprio espaço-tempo! Como devemos navegar nessas águas cósmicas, Mestre?"
        }
      ],
      curiosities: [
        "As ondas de choque do universo primitivo criaram pequenas flutuações que mais tarde dariam origem a galáxias.",
        "Cientistas podem detectar 'ecos' dessas ondas primordiais estudando a radiação cósmica de fundo."
      ]
    },
    {
      levelId: 9,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Observador do Vazio",
            image: "/characters/observer.png",
            position: "left"
          },
          text: "As Bolhas de Energia estão se formando. Cada bolha é um laboratório onde as leis da física estão sendo testadas."
        },
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "right"
          },
          text: "Manipule essas bolhas com cuidado. Elas são como sementes de realidade, cada uma contendo potencial infinito."
        }
      ],
      curiosities: [
        "A teoria da inflação cósmica sugere que nosso universo pode ser apenas uma de muitas 'bolhas' em um multiverso em expansão.",
        "Cada bolha de energia no universo primitivo pode ter tido suas próprias variações das leis físicas."
      ]
    },
    {
      levelId: 10,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "O Turbilhão Cósmico está ficando mais forte! É como se todo o universo estivesse em um liquidificador gigante!"
        },
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "Este é um momento crucial, jovem Arquiteto. O caos do turbilhão deve ser domado, mas não completamente eliminado. O universo precisa de um equilíbrio entre ordem e caos."
        },
        {
          character: {
            name: "Observador do Vazio",
            image: "/characters/observer.png",
            position: "left"
          },
          text: "Impressionante... Você está começando a entender a dança entre ordem e caos. Talvez seja hora de revelar o segundo estágio da Chama da Criação."
        }
      ],
      curiosities: [
        "O movimento turbulento da matéria no universo primitivo criou os primeiros padrões de densidade que levariam à formação de estruturas cósmicas.",
        "Os turbilhões do universo primitivo podem ter criado campos magnéticos primordiais que ainda existem hoje."
      ]
    },
    {
      levelId: 11,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "Chegou o momento de trabalhar com diferentes tipos de energia. Como um maestro regendo uma orquestra cósmica, você deve encontrar a harmonia entre elas."
        },
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "A Chama da Criação está brilhando diferente! Parece que ela está respondendo às novas energias!"
        }
      ],
      curiosities: [
        "No universo primitivo, existiam diferentes formas de energia que hoje conhecemos como energia escura, radiação e matéria.",
        "A proporção entre essas energias determinou como o universo se expandiria e evoluiria."
      ]
    },
    {
      levelId: 12,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "O universo está fervendo! É como se cada bolha contivesse um milhão de sóis!"
        },
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "A Fervura Universal é um processo delicado. É neste caldeirão cósmico que as primeiras partículas estáveis começarão a se formar."
        },
        {
          character: {
            name: "Observador do Vazio",
            image: "/characters/observer.png",
            position: "left"
          },
          text: "A temperatura precisa ser exata. Um grau a mais ou a menos, e este universo nunca verá suas primeiras estrelas nascerem."
        }
      ],
      curiosities: [
        "A temperatura do universo durante a fervura universal era de aproximadamente 10^32 graus Kelvin.",
        "Se o universo tivesse esfriado um pouco mais rápido ou mais devagar, a matéria como conhecemos não existiria."
      ]
    },
    {
      levelId: 13,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "Olhe! As partículas estão dançando! É o balé mais bonito que já vi!"
        },
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "A Dança das Partículas é um momento mágico. Cada movimento, cada giro, cada colisão... tudo isso moldará o futuro do universo."
        }
      ],
      curiosities: [
        "As partículas subatômicas realizam uma 'dança' constante de criação e aniquilação, seguindo as leis da mecânica quântica.",
        "Esta 'dança' é regida por forças fundamentais que determinam como as partículas interagem entre si."
      ]
    },
    {
      levelId: 14,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Observador do Vazio",
            image: "/characters/observer.png",
            position: "left"
          },
          text: "Uma Tempestade de Energia se aproxima. Mostre-nos se você é capaz de navegar através dela."
        },
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "right"
          },
          text: "Use a Chama da Criação em seu segundo estágio. Lembre-se: não se trata de evitar a tempestade, mas de guiá-la na direção certa."
        },
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "As energias estão tão intensas! É como se o próprio tempo estivesse sendo tecido diante dos nossos olhos!"
        }
      ],
      curiosities: [
        "As tempestades de energia no universo primitivo foram cruciais para criar as primeiras estruturas de larga escala.",
        "Estas tempestades criaram ondulações no espaço-tempo que até hoje podemos detectar como ondas gravitacionais."
      ]
    },
    {
      levelId: 15,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "O Redemoinho Cósmico está se formando. É hora de aprender a criar ordem a partir do caos absoluto."
        },
        {
          character: {
            name: "Observador do Vazio",
            image: "/characters/observer.png",
            position: "right"
          },
          text: "Este jovem Arquiteto está pronto para o teste final. A Chama da Criação responde cada vez mais intensamente ao seu toque."
        }
      ],
      curiosities: [
        "Os redemoinhos cósmicos primitivos ajudaram a distribuir matéria e energia de forma não uniforme pelo universo.",
        "Essa distribuição desigual foi essencial para que estruturas como galáxias pudessem se formar mais tarde."
      ]
    },
    {
      levelId: 16,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "As Explosões em Cascata começaram. Cada explosão desencadeia a próxima, como um dominó cósmico. Você precisa manter o ritmo perfeito."
        },
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "A Chama da Criação... ela está pulsando com o ritmo das explosões! Como se estivesse dançando com o próprio universo!"
        },
        {
          character: {
            name: "Observador do Vazio",
            image: "/characters/observer.png",
            position: "left"
          },
          text: "O padrão das explosões... é idêntico ao da criação do nosso próprio universo. Não pode ser coincidência."
        }
      ],
      curiosities: [
        "As reações em cadeia no universo primitivo criaram padrões que se repetem em diferentes escalas até hoje.",
        "Cientistas acreditam que estas cascatas de eventos determinaram a distribuição atual de galáxias no universo."
      ]
    },
    {
      levelId: 17,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "Os Vulcões Cósmicos estão entrando em erupção! É como se o próprio espaço-tempo estivesse fervendo!"
        },
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "Chegou a hora da verdade, jovem Arquiteto. A Chama da Criação deve atingir seu estágio final. Você está pronto para controlar seu poder máximo?"
        }
      ],
      curiosities: [
        "Eventos explosivos no universo primitivo criaram 'bolhas' de espaço-tempo que podem ter dado origem a outros universos.",
        "A energia liberada por um único vulcão cósmico seria suficiente para criar um sistema solar inteiro."
      ]
    },
    {
      levelId: 18,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Observador do Vazio",
            image: "/characters/observer.png",
            position: "left"
          },
          text: "O Tsunami de Energia se aproxima. É o momento que determinará se este universo sobreviverá ou colapsará."
        },
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "right"
          },
          text: "Agora entendo... Você não está apenas criando um universo. Você está recriando o nosso universo, garantindo sua própria existência."
        },
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "Então... nós somos parte de um ciclo eterno de criação? Cada Arquiteto garante que o próximo existirá?"
        }
      ],
      curiosities: [
        "A teoria do universo cíclico sugere que cada universo pode dar origem a outro universo.",
        "Alguns cientistas propõem que informações de universos anteriores podem ser preservadas através de buracos negros."
      ]
    },
    {
      levelId: 19,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "O Furacão Primordial está no seu auge. A Chama da Criação alcançou seu poder máximo. Use-a com sabedoria."
        },
        {
          character: {
            name: "Observador do Vazio",
            image: "/characters/observer.png",
            position: "right"
          },
          text: "Finalmente compreendemos. Você não foi escolhido por acaso. Você é o Arquiteto que criará o universo que um dia nos criará."
        }
      ],
      curiosities: [
        "O conceito de causalidade temporal no universo primitivo pode não seguir uma linha reta como imaginamos.",
        "Alguns modelos teóricos sugerem que o tempo pode formar loops fechados em condições extremas."
      ]
    },
    {
      levelId: 20,
      name: "O Tear Quântico",
      dialogs: [
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "left"
          },
          text: "O Portal do Tempo está aberto. Este é o momento para o qual toda sua preparação o conduziu. Você está pronto para completar o ciclo?"
        },
        {
          character: {
            name: "Eco",
            image: "/characters/eco.png",
            position: "right"
          },
          text: "A Chama da Criação... ela está brilhando como nunca! É como se todo o conhecimento do universo estivesse fluindo através dela!"
        },
        {
          character: {
            name: "Observador do Vazio",
            image: "/characters/observer.png",
            position: "left"
          },
          text: "O ciclo está completo. Este universo que você criou será o mesmo que um dia o trará até nós. A dança eterna da criação continua."
        },
        {
          character: {
            name: "Mestre Cronus",
            image: "/characters/cronus.png",
            position: "right"
          },
          text: "Parabéns, jovem Arquiteto. Você não apenas completou seu treinamento - você garantiu a existência de todo o ciclo de criação. Agora, é hora de observar sua obra se desenvolver."
        }
      ],
      curiosities: [
        "O conceito de 'bootstrap paradox' em física teórica descreve situações onde um evento é causa e consequência de si mesmo.",
        "A ideia de que informação pode viajar através de diferentes ciclos do universo é estudada em teorias de cosmologia quântica.",
        "O princípio antrópico sugere que as condições do universo precisam ser exatamente corretas para permitir nossa própria existência."
      ]
    }
  ];
