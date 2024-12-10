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

export const world3MainQuest: MainQuestContent[] = [
  {
    levelId: 1,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "Bem-vindo ao reino da luz primordial, Elohim. Eu sou Aurora, e este é meu irmão, Crepúsculo. Somos os guardiões do Prisma do Tempo."
      },
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "right"
        },
        text: "Lady Quantum nos contou sobre seu domínio dos Teares. Agora é hora de aprender a dança entre luz e sombra."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "left"
        },
        text: "O Prisma do Tempo... posso sentir sua ressonância com a Chama da Criação e os Teares Quânticos."
      }
    ],
    curiosities: [
      "A recombinação começou quando o universo tinha aproximadamente 380.000 anos.",
      "Este processo transformou o universo de um plasma opaco em um meio transparente."
    ]
  },
  {
    levelId: 2,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "Observe, Elohim. Os primeiros átomos de hidrogênio neutro estão se formando. É como uma dança entre elétrons e prótons."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "O Prisma está brilhando de forma diferente! Como se estivesse respondendo à formação dos átomos!"
      },
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "left"
        },
        text: "Sim, pequena Eco. O Prisma do Tempo reflete todas as transformações do universo, do início ao fim."
      }
    ],
    curiosities: [
      "O hidrogênio neutro é o elemento mais abundante no universo.",
      "A formação de átomos neutros foi crucial para permitir que a luz viajasse livremente pelo espaço."
    ]
  },
  {
    levelId: 3,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "A Radiação Cósmica de Fundo está nascendo, Elohim. É a primeira luz verdadeiramente livre do universo."
      },
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "right"
        },
        text: "Use o Prisma do Tempo agora. Ele revelará os segredos desta luz primordial."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "A primeira fotografia do cosmos... um momento verdadeiramente único."
      }
    ],
    curiosities: [
      "A Radiação Cósmica de Fundo é a luz mais antiga que podemos observar no universo.",
      "Esta radiação nos dá uma imagem do universo quando ele tinha apenas 380.000 anos de idade."
    ]
  },
  {
    levelId: 4,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "left"
        },
        text: "A grande transformação começa, Elohim. O universo opaco deve dar lugar ao transparente."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "É como se um véu estivesse sendo levantado... Posso ver através do Prisma como a luz começa a viajar livremente."
      }
    ],
    curiosities: [
      "A transição para um universo transparente aconteceu relativamente rápido em termos cósmicos.",
      "Este período é conhecido como época da recombinação ou do desacoplamento."
    ]
  },
  {
    levelId: 5,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "Veja as flutuações na radiação, Elohim. Cada variação é uma semente do futuro cosmos."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "As flutuações quânticas que criamos antes... agora podemos vê-las impressas na própria luz!"
      },
      {
        character: {
          name: "Prisma do Tempo",
          image: "/characters/prisma.png",
          position: "center"
        },
        text: "* O Prisma pulsa com um brilho suave, revelando padrões complexos na radiação *"
      }
    ],
    curiosities: [
      "As flutuações na CMB são apenas de 1 parte em 100.000, mas foram cruciais para a formação de estruturas.",
      "Estas pequenas variações são as sementes das futuras galáxias e aglomerados."
    ]
  },
  {
    levelId: 6,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "O Prisma do Tempo nos mostra mais que o presente, Elohim. Ele revela o mapa do futuro escrito na luz primordial."
      },
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "right"
        },
        text: "Cada flutuação que vemos agora será um berço de galáxias. O destino do cosmos está escrito nestas sutis variações."
      }
    ],
    curiosities: [
      "As regiões ligeiramente mais densas na CMB se tornariam os locais onde galáxias se formariam.",
      "Podemos prever a distribuição de galáxias estudando estes padrões primordiais."
    ]
  },
  {
    levelId: 7,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "A matéria escura trabalha em silêncio, Elohim. Invisível à luz, mas fundamental para a estrutura do cosmos."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "Através do Prisma, posso ver sua influência... como sombras que guiam a dança da matéria luminosa."
      },
      {
        character: {
          name: "Prisma do Tempo",
          image: "/characters/prisma.png",
          position: "center"
        },
        text: "* O Prisma revela padrões escuros entrelaçados com a radiação *"
      }
    ],
    curiosities: [
      "A matéria escura representa aproximadamente 27% do universo.",
      "Sua distribuição pode ser mapeada através de seus efeitos gravitacionais na matéria visível."
    ]
  },
  {
    levelId: 8,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "Os fótons estão finalmente livres, Elohim! Depois de tanto tempo presos na sopa cósmica, podem finalmente viajar sem obstáculos."
      },
      {
        character: {
          name: "Eco",
          image: "/characters/eco.png",
          position: "right"
        },
        text: "É como se o universo inteiro estivesse soltando um longo suspiro de alívio!"
      }
    ],
    curiosities: [
      "Os fótons da CMB viajaram por mais de 13 bilhões de anos antes de chegarem até nós.",
      "Esta luz primordial contém informações cruciais sobre o universo primitivo."
    ]
  },
  {
    levelId: 9,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "left"
        },
        text: "À medida que o universo esfria, Elohim, a radiação muda. O Prisma do Tempo nos mostra esta transformação."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "Lembre-se das lições sobre energia e matéria. Tudo está conectado nesta dança cósmica."
      }
    ],
    curiosities: [
      "Conforme o universo se expande, a radiação cósmica de fundo esfria.",
      "De uma temperatura inicial de milhares de graus, hoje ela está a apenas 2.7 Kelvin acima do zero absoluto."
    ]
  },
  {
    levelId: 10,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "Chegou o momento de capturar a primeira fotografia do cosmos, Elohim. O Prisma do Tempo revelará a verdadeira face do universo jovem."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "É incrível... posso ver as cores da criação através do Prisma. Cada tonalidade conta uma história diferente."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "Esta imagem ecoará através das eras, Elohim. É o retrato do nascimento de tudo."
      }
    ],
    curiosities: [
      "O mapa da radiação cósmica de fundo é frequentemente chamado de 'a face do universo bebê'.",
      "As variações de temperatura neste mapa são incrivelmente pequenas, apenas 1/100.000 de grau."
    ]
  },
  {
    levelId: 11,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "left"
        },
        text: "A densidade do universo precisa ser ajustada com precisão, Elohim. Use o Prisma para encontrar o equilíbrio perfeito."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "As lições dos Teares Quânticos serão úteis agora. Cada ajuste na densidade afetará o futuro do cosmos."
      }
    ],
    curiosities: [
      "A densidade do universo é um parâmetro crucial que determina seu destino final.",
      "Se a densidade fosse ligeiramente diferente, o universo poderia colapsar ou se expandir tão rapidamente que galáxias nunca se formariam."
    ]
  },
  {
    levelId: 12,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "A gravidade está intensificando seu trabalho, Elohim. O Prisma mostra como ela amplifica as pequenas diferenças na CMB."
      },
      {
        character: {
          name: "Prisma do Tempo",
          image: "/characters/prisma.png",
          position: "center"
        },
        text: "* O Prisma pulsa com um brilho profundo, revelando as teias gravitacionais se formando *"
      }
    ],
    curiosities: [
      "A gravidade amplifica as pequenas flutuações iniciais ao longo do tempo.",
      "Este processo é fundamental para a formação de todas as estruturas grandes no universo."
    ]
  },
  {
    levelId: 13,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "left"
        },
        text: "Veja através do Prisma, Elohim. As sementes das primeiras estrelas estão sendo plantadas nas regiões mais densas."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "Posso ver... são como pequenas centelhas de possibilidade, esperando o momento certo para brilhar."
      },
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "O Prisma do Tempo revela não apenas o que é, mas o que será. Em cada uma dessas sementes, há uma estrela aguardando seu nascimento."
      }
    ],
    curiosities: [
      "As primeiras estrelas se formariam em regiões onde a matéria era ligeiramente mais densa.",
      "O processo de formação estelar começaria cerca de 100 milhões de anos após o Big Bang."
    ]
  },
  {
    levelId: 14,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "A Era das Trevas se aproxima, Elohim. Mas não tema - é uma escuridão necessária, um prelúdio para o nascimento das estrelas."
      },
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "right"
        },
        text: "Meu domínio sobre as sombras será especialmente útil agora. O universo deve atravessar esta noite para alcançar seu próximo amanhecer."
      }
    ],
    curiosities: [
      "A Era das Trevas Cósmicas durou cerca de 100 milhões de anos.",
      "Durante este período, o universo era preenchido principalmente por hidrogênio neutro."
    ]
  },
  {
    levelId: 15,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "O eco do Big Bang ressoa através do Prisma, Elohim. A CMB é a memória viva do início de tudo."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "Veja como os padrões dos Teares Quânticos se manifestam na radiação. Tudo está conectado, do menor quantum à maior estrutura."
      },
      {
        character: {
          name: "Prisma do Tempo",
          image: "/characters/prisma.png",
          position: "center"
        },
        text: "* O Prisma vibra em harmonia com as ondas da radiação cósmica de fundo *"
      }
    ],
    curiosities: [
      "A CMB é frequentemente chamada de 'eco do Big Bang' pois nos traz informações diretas do universo primitivo.",
      "Esta radiação permeia todo o universo observável uniformemente."
    ]
  },
  {
    levelId: 16,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "As anisotropias na radiação são sutis, Elohim, mas cruciais. Como pequenas ondulações em um lago cósmico."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "Através do Prisma, posso ver como cada variação carrega o potencial para algo maior. É... fascinante."
      }
    ],
    curiosities: [
      "As anisotropias na CMB são variações de temperatura de apenas 1 em 100.000.",
      "Estas pequenas diferenças foram essenciais para a formação de toda a estrutura do universo."
    ]
  },
  {
    levelId: 17,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "left"
        },
        text: "Observe as linhas de absorção, Elohim. O hidrogênio neutro deixa sua marca na radiação."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "right"
        },
        text: "É como um código escrito na própria luz, revelando a composição do universo primitivo."
      },
      {
        character: {
          name: "Prisma do Tempo",
          image: "/characters/prisma.png",
          position: "center"
        },
        text: "* O Prisma decompõe a luz, revelando padrões escuros nas diferentes frequências *"
      }
    ],
    curiosities: [
      "As linhas de absorção são como 'impressões digitais' dos elementos químicos na luz.",
      "Estudando estas linhas, podemos determinar a composição do universo primitivo."
    ]
  },
  {
    levelId: 18,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "O universo continua sua expansão eterna, Elohim. O Prisma mostra como a luz se estica com o próprio espaço."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "Os padrões são hipnotizantes... cada onda de luz carrega a história de sua longa jornada através do cosmos."
      }
    ],
    curiosities: [
      "A expansão do universo faz com que a luz se estique, ficando mais vermelha.",
      "Este processo, chamado redshift cosmológico, nos ajuda a medir a expansão do universo."
    ]
  },
  {
    levelId: 19,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "left"
        },
        text: "O palco está quase pronto, Elohim. Logo as primeiras estrelas acenderão suas luzes neste teatro cósmico."
      },
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "right"
        },
        text: "O Prisma mostra o futuro brilhante que aguarda. Cada região densa é uma promessa de luz por vir."
      },
      {
        character: {
          name: "Observador do Vazio",
          image: "/characters/observer.png",
          position: "left"
        },
        text: "Seu domínio sobre a luz e as sombras está quase completo, Elohim. O próximo ato será verdadeiramente espetacular."
      }
    ],
    curiosities: [
      "As condições para a formação das primeiras estrelas levaram centenas de milhões de anos para se desenvolver.",
      "A combinação precisa de densidade, temperatura e composição química foi necessária."
    ]
  },
  {
    levelId: 20,
    name: "O Prisma do Tempo",
    dialogs: [
      {
        character: {
          name: "Aurora",
          image: "/characters/aurora.png",
          position: "left"
        },
        text: "O Portal à Escuridão se abre, Elohim. Não tema - é através desta noite cósmica que as primeiras estrelas nascerão."
      },
      {
        character: {
          name: "Crepúsculo",
          image: "/characters/crepusculo.png",
          position: "right"
        },
        text: "Minha irmã tem razão. Às vezes é preciso abraçar a escuridão para que a luz possa brilhar ainda mais forte."
      },
      {
        character: {
          name: "Lady Quantum",
          image: "/characters/lady-quantum.png",
          position: "left"
        },
        text: "Os Teares Quânticos e o Prisma do Tempo agora são verdadeiramente seus, Elohim. Use-os sabiamente no próximo mundo."
      },
      {
        character: {
          name: "Elohim",
          image: "/characters/elohim.png",
          position: "right"
        },
        text: "Sinto que cada passo nos aproxima de algo maior... como se todo o cosmos conspirasse para um grande despertar."
      }
    ],
    curiosities: [
      "A Era das Trevas Cósmicas foi um período crucial de preparação para o nascimento das primeiras estrelas.",
      "Este período de transição permitiu que a matéria se organizasse nas estruturas necessárias para a próxima fase do universo."
    ]
  }
];