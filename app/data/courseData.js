export const scheduleByDay = {
  segunda: [
    { time: "19:00–19:45", subject: "Direito Civil: Pessoas, Bens e Fatos - Split (Parte em Web Class Síncrona)" },
    { time: "19:45–20:30", subject: "Direito Civil: Pessoas, Bens e Fatos - Split (Parte em Web Class Síncrona)" },
    { time: "20:45–21:30", subject: "Direito Civil: Pessoas, Bens e Fatos - Split (Parte em Web Class Síncrona)" },
    { time: "21:30–22:15", subject: "Ambientação Jurídica" },
    { time: "22:15–23:00", subject: "Ambientação Jurídica" }
  ],
  terca: [
    { time: "19:00–19:45", subject: "Criminologia e Escolas Penais" },
    { time: "19:45–20:30", subject: "Criminologia e Escolas Penais" },
    { time: "20:45–21:30", subject: "Teoria Geral do Direito" },
    { time: "21:30–22:15", subject: "Teoria Geral do Direito" },
    { time: "22:15–23:00", subject: "Teoria Geral do Direito" }
  ],
  quarta: [
    { time: "19:00–19:45", subject: "Teoria do Estado e da Constituição" },
    { time: "19:45–20:30", subject: "Teoria do Estado e da Constituição" },
    { time: "20:45–21:30", subject: "Teoria do Estado e da Constituição" },
    { time: "21:30–22:15", subject: "Cosmovisão Bíblico-Cristã" },
    { time: "22:15–23:00", subject: "Cosmovisão Bíblico-Cristã" }
  ],
  quinta: [
    {
      time: "20:45–21:30",
      subject: "Direito Civil: Pessoas, Bens e Fatos - Split (Parte em Web Class Síncrona)"
    }
  ],
  sexta: [
    { time: "21:30–22:15", subject: "Aprendizagem na Educação Superior" },
    { time: "22:15–23:00", subject: "Aprendizagem na Educação Superior" }
  ],
  sabado: [],
  domingo: []
};

export const disciplines = [
  {
    slug: "criminologia",
    name: "Criminologia e Escolas Penais",
    teacher: "José Geraldo da Silva",
    credits: "2 créditos",
    focus: "Escolas penais, política criminal e análise social do crime.",
    tags: ["teoria", "sociologia", "penal"]
  },
  {
    slug: "teoria-geral-do-direito",
    name: "Teoria Geral do Direito",
    teacher: "Michael Lima de Jesus",
    credits: "3 créditos",
    focus: "Fontes do direito, norma jurídica e interpretação.",
    tags: ["fundamentos", "interpretação", "normas"]
  },
  {
    slug: "ambientacao-juridica",
    name: "Ambientação Jurídica",
    teacher: "Igor Emanuel de Souza Marques",
    credits: "2 créditos",
    focus: "Terminologia, prática acadêmica e panorama do curso.",
    tags: ["metodologia", "introdução"]
  },
  {
    slug: "teoria-do-estado-e-da-constituicao",
    name: "Teoria do Estado e da Constituição",
    teacher: "Lelio Maximino Lellis",
    credits: "3 créditos",
    focus: "Formação do Estado, Constituição e organização dos poderes.",
    tags: ["constitucional", "estado"]
  },
  {
    slug: "direito-civil-pessoas-bens-e-fatos",
    name: "Direito Civil: Pessoas, Bens e Fatos - Split (Parte em Web Class Síncrona)",
    teacher: "Andre de Carvalho Okano",
    credits: "4 créditos",
    focus: "Personalidade civil, bens e fatos jurídicos essenciais.",
    tags: ["civil", "pessoas", "bens"]
  },
  {
    slug: "aprendizagem-na-educacao-superior",
    name: "Aprendizagem na Educação Superior",
    teacher: "Everson Mückenberger / Stella de Mello Silva",
    credits: "2 créditos",
    focus: "Estratégias de estudo, autonomia e aprendizagem ativa.",
    tags: ["aprendizagem", "metodologia"]
  }
];

export const disciplineDetails = {
  criminologia: {
    title: "Criminologia e Escolas Penais",
    downloadUrl: "/Planos%20de%20Estudo/Plano%20de%20Estudo%20-%20Criminologia%20e%20Escolas%20Penais.pdf",
    cronogramaDownloadUrl: "/Cronogramas/Cronograma%20-%20Crimonologia%20Escolas%20Penais.pdf",
    campus: "UNASP EC",
    modalidade: "Presencial",
    curso: "Direito",
    code: "G00066.1",
    professor: "José Geraldo da Silva",
    yearSemester: "2026/1",
    credits: "2",
    hours: {
      sala: "30h",
      diversificados: "10h",
      ead: "0h",
      total: "40h"
    },
    ementa:
      "Escolas penais. Evolução das ideias penais. Escolas e tendências penais. Evolução do direito penal brasileiro. Psicologia forense. História da criminologia. Criminologia e direito penal. Criminologia como ciência empírica e interdisciplinar. Métodos da criminologia. Objetos e objetivos da criminologia. Funções da criminologia. Criminologia pré-científica, científica e radical.",
    perfilEgresso: [
      "Sólida formação geral, humanística e axiológica.",
      "Capacidade de análise, argumentação, interpretação e valorização dos fenômenos jurídicos e sociais.",
      "Domínio de conceitos e da terminologia jurídica.",
      "Postura reflexiva e visão crítica para aprendizagem autônoma e dinâmica."
    ],
    competencias: [
      "Dominar instrumentos da metodologia jurídica e aplicar conceitos fundamentais ao exercício do Direito.",
      "Utilizar corretamente a terminologia e as categorias jurídicas.",
      "Aceitar a diversidade e o pluralismo cultural.",
      "Desenvolver capacidade de trabalhar em grupos interdisciplinares.",
      "Apreender conceitos deontológico-profissionais e perspectivas transversais sobre direitos humanos."
    ],
    objetivos: [
      "Desenvolver o uso da linguagem jurídica apropriada, oral e escrita.",
      "Construir sólida formação humanística com conceitos éticos e morais.",
      "Desenvolver capacidade interpretativa da realidade com aplicação de diversos conceitos."
    ],
    calendario: [
      {
        date: "07/04/2026",
        activity: "P01 - Prova Escrita no Campus",
        weight: "30%"
      },
      {
        date: "26/04/2026",
        activity: "PI - Prova Interdisciplinar",
        weight: "10%"
      },
      {
        date: "24/05/2026",
        activity: "EC - Estudo de Caso para Debate",
        weight: "20%"
      },
      {
        date: "09/06/2026",
        activity: "P02 - Prova Escrita no Campus",
        weight: "30%"
      },
      {
        date: "22/06/2026",
        activity: "PINT - Projeto Integrador",
        weight: "10%"
      }
    ],
    conteudos: [
      {
        date: "03/02/2026",
        title: "Apresentação do Plano de Ensino, bibliografia básica e complementar",
        metodo: "Aula expositiva dialogada",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C2, C3"
      },
      {
        date: "10/02/2026",
        title: "Escolas Penais: evolução das ideias penais",
        metodo: "Aula expositiva dialogada · atividade em espaços diversificados (leitura no AVA)",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "C3, B1"
      },
      {
        date: "24/02/2026",
        title: "Evolução do Direito Penal Brasileiro; História da Criminologia e da Psicologia Forense",
        metodo: "Estudo de texto · atividade em espaços diversificados (leitura no AVA)",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "02:30",
        refs: "B1"
      },
      {
        date: "03/03/2026",
        title: "Criminologia e Direito Penal: conceitos e diferenciações",
        metodo: "Discussão e debate",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B3, C1, C3"
      },
      {
        date: "10/03/2026",
        title: "Criminologia como ciência empírica e interdisciplinar",
        metodo: "Estudo dirigido · atividade em espaços diversificados (leitura no AVA)",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B2, C5"
      },
      {
        date: "17/03/2026",
        title: "Métodos da Criminologia",
        metodo: "Discussão e debate",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, C5"
      },
      {
        date: "24/03/2026",
        title: "Objetos e Objetivos da Criminologia",
        metodo: "Aula expositiva dialogada · atividade em espaços diversificados (leitura no AVA)",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B2, C2"
      },
      {
        date: "31/03/2026",
        title: "Objetos e Objetivos da Criminologia",
        metodo: "Discussão e debate",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, C2"
      },
      {
        date: "07/04/2026",
        title: "Aplicação da Prova 01",
        metodo: "Resolução de exercícios",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B3, B2, C3"
      },
      {
        date: "14/04/2026",
        title: "Funções da Criminologia",
        metodo: "Estudo de texto · atividade em espaços diversificados (leitura no AVA)",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "C2, B3"
      },
      {
        date: "26/04/2026",
        title: "Criminologia pré-científica",
        metodo: "Aula invertida · atividade em espaços diversificados (leitura no AVA)",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "C2, B3"
      },
      {
        date: "28/04/2026",
        title: "Criminologia científica",
        metodo: "Aula expositiva dialogada",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, C4"
      },
      {
        date: "05/05/2026",
        title: "Criminologia radical",
        metodo: "Resolução de exercícios · atividade em espaços diversificados (leitura no AVA)",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B2, C2"
      },
      {
        date: "12/05/2026",
        title: "Minimalismo Penal",
        metodo: "Aula expositiva dialogada",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B2, C2, B3"
      },
      {
        date: "24/05/2026",
        title: "Minimalismo Penal",
        metodo: "Discussão e debate · estudo de caso",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C3"
      },
      {
        date: "26/05/2026",
        title: "Semana Jurídica",
        metodo: "Simpósio",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B2, C2"
      },
      {
        date: "02/06/2026",
        title: "Abolicionismo e Expansionismo Penal",
        metodo: "Estudo dirigido",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B2, C3"
      },
      {
        date: "09/06/2026",
        title: "Aplicação da Prova 02",
        metodo: "Resolução de exercícios · atividade em espaços diversificados (leitura no AVA)",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "01:30",
        refs: "B1, B2, B3, C5"
      },
      {
        date: "16/06/2026",
        title: "Correção da Prova 02",
        metodo: "Resolução de exercícios",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C2"
      },
      {
        date: "23/06/2026",
        title: "Correção da prova, fechamento de notas e faltas, encerramento do semestre",
        metodo: "Resolução de exercícios",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C3"
      }
    ],
    bibliografiaBasica: [
      {
        code: "B1",
        text: "PRADO, Luiz Regis; MAÍLLO, Alfonso Serrano. Criminologia. Rio de Janeiro: Forense. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690551",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690551"
      },
      {
        code: "B2",
        text: "GONZAGA, Christiano. Manual de Criminologia. São Paulo: Saraiva Jur. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691655",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691655"
      },
      {
        code: "B3",
        text: "BACILA, Carlos Roberto. Introdução ao direito penal e à criminologia. Editora Intersaberes. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=662855",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=662855"
      }
    ],
    bibliografiaComplementar: [
      {
        code: "C1",
        text: "BRANDÃO, Cláudio. Curso de direito penal: parte geral. Rio de Janeiro: Forense. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=687112",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=687112"
      },
      {
        code: "C2",
        text: "PENTEADO FILHO, Nestor Sampaio. Manual esquemático de criminologia. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691763.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691763"
      },
      {
        code: "C3",
        text: "SOUZA, Artur de Brito Gueiros; JAPIASSÚ, Carlos Eduardo Adriano. Direito penal: volume único. São Paulo: Atlas. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691099",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691099"
      },
      {
        code: "C4",
        text: "MOTTA, Felipe Heringer Roxo da. Introdução ao Estudo da Criminologia. Editora Intersaberes. disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=663704",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=663704"
      },
      {
        code: "C5",
        text: "PASCHOAL, Janaina Conceição. Direito penal: parte geral. São Paulo: Manole. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691056.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691056"
      }
    ],
    observacoes:
      "A gravação das aulas e/ou atividades acadêmicas por áudio e/ou vídeo, pelo discente, não é permitida, salvo em casos de prévia autorização docente."
  },
  "teoria-geral-do-direito": {
    title: "Teoria Geral do Direito",
    downloadUrl: "/Planos%20de%20Estudo/Plano%20de%20Estudo%20-%20Teoria%20Geral%20do%20Direito.pdf",
    cronogramaDownloadUrl: "/Cronogramas/Cronograma%20-%20Teoria%20Geral%20do%20Direito.pdf",
    campus: "UNASP EC",
    modalidade: "Presencial",
    curso: "Direito",
    code: "G00063.1",
    professor: "Michael Lima de Jesus",
    yearSemester: "2026/1",
    credits: "3",
    hours: {
      sala: "45h",
      diversificados: "15h",
      ead: "0h",
      total: "60h"
    },
    ementa:
      "A universalidade do fenômeno jurídico. Direito enquanto ciência. Zetética e Dogmática Jurídica. Teoria da Norma Jurídica. Regras e Princípios Jurídicos. Teoria do Ordenamento Jurídico. A Lei de Introdução às Normas do Direito Brasileiro: abrangência; definição; lei no tempo e no espaço; conhecimento da lei; aplicação. Direito Intertemporal. Fontes do Direito. Os Sistemas de Direito: Civil law e Common Law e o direito brasileiro. Introdução à Relação Jurídica. Direito Objetivo e Subjetivo. Introdução à interpretação jurídica: gramatical; histórica; teleológica; sistêmica. Ramos do Direito Positivo. Dogmática Jurídica e sua função social. Visões críticas da dogmática jurídica.",
    perfilEgresso: [
      "Sólida formação geral, humanística e axiológica.",
      "Capacidade de análise, argumentação, interpretação e valorização dos fenômenos jurídicos e sociais.",
      "Domínio de conceitos e da terminologia jurídica.",
      "Postura reflexiva e de visão crítica que fomente a aprendizagem autônoma e dinâmica indispensável ao exercício da ciência do Direito, da prestação da justiça e do desenvolvimento da cidadania."
    ],
    competencias: [
      "Demonstrar capacidade para comunicar-se com precisão.",
      "Dominar instrumentos da metodologia jurídica, compreendendo e aplicando conceitos, estruturas e racionalidades fundamentais ao exercício do Direito.",
      "Desenvolver técnicas de raciocínio e de argumentação jurídicos para propor soluções e decidir questões no âmbito do Direito.",
      "Desenvolver a cultura do diálogo e o uso de meios consensuais de solução de conflitos.",
      "Compreender a hermenêutica e os métodos interpretativos, com capacidade de pesquisa e uso de legislação, jurisprudência, doutrina e outras fontes do Direito.",
      "Utilizar corretamente a terminologia e as categorias jurídicas.",
      "Aceitar a diversidade e o pluralismo cultural.",
      "Desenvolver a capacidade de trabalhar em grupos formados por profissionais do Direito ou de caráter interdisciplinar."
    ],
    objetivos: [
      "Compreender o Direito como fenômeno social, cultural e normativo, reconhecendo sua universalidade, historicidade e função na organização da vida social.",
      "Dominar os conceitos fundamentais da Teoria Geral do Direito, entendendo o Direito como ciência, sistema normativo e ordenamento jurídico, com uso adequado da terminologia jurídica.",
      "Desenvolver análise, interpretação, argumentação e reflexão crítica sobre o Direito positivo e a dogmática jurídica, utilizando métodos interpretativos e fontes do Direito com postura dialógica e crítica."
    ],
    calendario: [
      {
        date: "07/04/2026",
        activity: "Prova",
        weight: "30%"
      },
      {
        date: "26/04/2026",
        activity: "PI - Prova Interdisciplinar",
        weight: "10%"
      },
      {
        date: "31/05/2026",
        activity: "Atividade",
        weight: "20%"
      },
      {
        date: "09/06/2026",
        activity: "Prova",
        weight: "30%"
      },
      {
        date: "26/06/2026",
        activity: "PINT - Projeto Integrador",
        weight: "10%"
      }
    ],
    conteudos: [
      {
        date: "03/02/2026",
        title: "Apresentação do curso e introdução à disciplina",
        metodo: "Aula expositiva dialogada · discussão e debate",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "10/02/2026",
        title: "O fenômeno jurídico e sua universalidade",
        metodo: "Aula expositiva dialogada · discussão e debate · atividade em espaços diversificados (texto guiado + ficha de conceitos)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "02:00",
        refs: "B1, C1"
      },
      {
        date: "24/02/2026",
        title: "Direito enquanto ciência",
        metodo: "Aula expositiva dialogada · discussão e debate · atividade em espaços diversificados (texto doutrinário)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B1, C1"
      },
      {
        date: "03/03/2026",
        title: "Zetética e Dogmática Jurídica",
        metodo: "Aula expositiva dialogada · discussão e debate · atividade em espaços diversificados (análise comparativa zetético × dogmático)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B1, C3"
      },
      {
        date: "10/03/2026",
        title: "Teoria da Norma Jurídica",
        metodo: "Aula expositiva dialogada · discussão e debate",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B2, C5"
      },
      {
        date: "17/03/2026",
        title: "Regras e Princípios Jurídicos",
        metodo: "Aula expositiva dialogada · discussão e debate · estudo de caso (colisão entre princípios)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B2, C3"
      },
      {
        date: "24/03/2026",
        title: "Teoria do Ordenamento Jurídico",
        metodo: "Aula expositiva dialogada · discussão e debate · mapa esquemático (atividade em espaços diversificados)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B1, C1"
      },
      {
        date: "31/03/2026",
        title: "LINDB: fundamentos e função",
        metodo: "Aula expositiva dialogada · discussão e debate · leitura dirigida + questionário (atividade em espaços diversificados)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "02:00",
        refs: "B1, C2"
      },
      {
        date: "07/04/2026",
        title: "Avaliação",
        metodo: "Atividades de aprendizagem",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "14/04/2026",
        title: "Lei no tempo, no espaço e Direito Intertemporal",
        metodo: "Aula expositiva dialogada · discussão e debate · análise de decisão judicial (atividade em espaços diversificados)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B2, C4"
      },
      {
        date: "26/04/2026",
        title: "Fontes do Direito",
        metodo: "Aula expositiva dialogada · discussão e debate · exercício prático (identificação de fontes em julgado)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B3, C1"
      },
      {
        date: "28/04/2026",
        title: "Sistemas de Direito: Civil Law e Common Law",
        metodo: "Aula expositiva dialogada · discussão e debate · texto comparativo (atividade em espaços diversificados)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B3, C3"
      },
      {
        date: "05/05/2026",
        title: "Relação Jurídica, Direito Objetivo e Subjetivo",
        metodo: "Aula expositiva dialogada · discussão e debate · análise de situação concreta (atividade em espaços diversificados)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B2, C5"
      },
      {
        date: "12/05/2026",
        title: "Interpretação Jurídica",
        metodo: "Aula expositiva dialogada · discussão e debate · exercício comparando métodos interpretativos",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B1, C3"
      },
      {
        date: "24/05/2026",
        title: "Ramos do Direito Positivo",
        metodo: "Aula expositiva dialogada · discussão e debate · classificação de casos práticos",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B3, C5"
      },
      {
        date: "26/05/2026",
        title: "Semana Jurídica",
        metodo: "Simpósio",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "02/06/2026",
        title: "Dogmática Jurídica e suas críticas",
        metodo: "Aula expositiva dialogada · discussão e debate · texto crítico (atividade em espaços diversificados)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B3, C1"
      },
      {
        date: "09/06/2026",
        title: "Avaliação",
        metodo: "Discussão e debate",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "16/06/2026",
        title: "Correção e discussão",
        metodo: "Discussão e debate",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "23/06/2026",
        title: "Atendimento aos alunos",
        metodo: "Discussão e debate",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      }
    ],
    bibliografiaBasica: [
      {
        code: "B1",
        text: "FERRAZ JÚNIOR, Tércio Sampaio. Introdução ao Estudo do Direito. São Paulo: Editora Atlas. Disponível em: https://integrada.minhabiblioteca.com.br/reader/books/9786559773763/pages/recent",
        link: "https://integrada.minhabiblioteca.com.br/reader/books/9786559773763/pages/recent"
      },
      {
        code: "B2",
        text: "SOARES, Ricardo Maurício Freire. Teoria Geral do Direito. São Paulo: Saraiva Jur. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=692329",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=692329"
      },
      {
        code: "B3",
        text: "MASCARO, Alysson Leandro Barbate. Introdução ao estudo do direito. Rio de Janeiro: Atlas. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691510",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691510"
      }
    ],
    bibliografiaComplementar: [
      {
        code: "C1",
        text: "FERRAZ JÚNIOR, Tércio Sampaio. A Ciência do Direito. São Paulo: Atlas. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690309",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690309"
      },
      {
        code: "C2",
        text: "JUSTEN FILHO, Marçal. Introdução ao estudo do Direito. 2. ed. Rio de Janeiro, Forense. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691508",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691508"
      },
      {
        code: "C3",
        text: "ZIPPELIUS, Reinhold. Teoria do Método Jurídico. São Paulo: Saraiva. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=692319",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=692319"
      },
      {
        code: "C4",
        text: "ASCENSÃO, José de Oliveira. Teoria Geral do Direito Civil. v. 1-3. São Paulo: Editora Saraiva. Disponível em: v. 1: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690812. v. 2: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690811. v. 3: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690885.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690812"
      },
      {
        code: "C5",
        text: "VENOSA, Silvio de Salvo. Introdução ao Estudo do Direito: Primeiras Linhas. São Paulo: Editora Atlas. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691509",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691509"
      }
    ],
    observacoes:
      "A gravação das aulas e/ou atividades acadêmicas por áudio e/ou vídeo, pelo discente, não é permitida, salvo em casos de prévia autorização docente."
  },
  "ambientacao-juridica": {
    title: "Ambientação Jurídica",
    downloadUrl: "/Planos%20de%20Estudo/Plano%20de%20Estudo%20-%20Ambientação%20Jurídica.pdf",
    cronogramaDownloadUrl: "/Cronogramas/Cronograma%20-%20Ambientação%20Jurídica.pdf",
    campus: "UNASP EC",
    modalidade: "Presencial",
    curso: "Direito",
    code: "G00064.1",
    professor: "Igor Emanuel de Souza Marques",
    yearSemester: "2026/1",
    credits: "2",
    hours: {
      sala: "30h",
      diversificados: "10h",
      ead: "0h",
      total: "40h"
    },
    ementa:
      "Conceitos elementares dos Poderes da República (Executivo, Legislativo e Judiciário); conceitos elementares da estrutura do Poder Judiciário (Tribunais Superiores, Tribunais e Fórum); iniciação ao vocabulário jurídico. Elementos da legislação brasileira (leis, códigos, índice remissivo, súmulas; inciso, alínea e algarismos romanos); manuseio do arcabouço legislativo brasileiro (atividades práticas de localização de artigos, leis, súmulas). Jurisprudência (localização, ementa e voto); súmula vinculante. Funcionamento de ambientes eletrônicos dos processos judiciais.",
    perfilEgresso: [
      "Sólida formação geral, humanística e axiológica.",
      "Capacidade de análise, argumentação, interpretação e valorização dos fenômenos jurídicos e sociais.",
      "Domínio de conceitos e da terminologia jurídica.",
      "Domínio das formas consensuais de composição de conflito.",
      "Postura reflexiva e de visão crítica para aprendizagem autônoma e dinâmica indispensável ao exercício da ciência do Direito, da prestação da justiça e do desenvolvimento da cidadania.",
      "Uso adequado de TIC aplicadas à atividade jurídica."
    ],
    competencias: [
      "Interpretar e aplicar normas do sistema jurídico nacional articulando teoria e prática.",
      "Ler, compreender e elaborar textos, atos e documentos jurídicos com uso correto das normas técnico-jurídicas.",
      "Dominar instrumentos da metodologia jurídica e aplicá-los ao exercício do Direito.",
      "Desenvolver técnicas de raciocínio e argumentação jurídicos para propor soluções e decidir questões.",
      "Atuar em instâncias extrajudiciais, administrativas ou judiciais com domínio de processos, atos e procedimentos.",
      "Utilizar corretamente a terminologia e as categorias jurídicas."
    ],
    objetivos: [
      "Operar o manuseio técnico do Vade Mecum físico e de sistemas de busca jurisprudencial, localizando normas e precedentes com precisão.",
      "Identificar a estrutura e o funcionamento dos Três Poderes e do Poder Judiciário brasileiro, compreendendo o papel de cada instância.",
      "Analisar casos concretos elementares, extraindo soluções jurídicas fundamentadas na legislação e na jurisprudência pesquisada."
    ],
    calendario: [
      { date: "06/04/2026", activity: "AV1 - Avaliação 1", weight: "30%" },
      { date: "26/04/2026", activity: "PI - Prova Integradora", weight: "10%" },
      { date: "08/06/2026", activity: "AV2 - Avaliação 2", weight: "30%" },
      { date: "16/06/2026", activity: "ATIV - Estudos de Caso / Atividades Práticas", weight: "20%" },
      { date: "22/06/2026", activity: "PINT - Projeto Integrador", weight: "10%" }
    ],
    conteudos: [
      {
        date: "02/02/2026",
        title: "O Despertar do Jurista: Carreiras, mercado e o 'porquê' do Direito",
        metodo: "Aula expositiva dialogada · discussão e debate",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "09/02/2026",
        title: "Mapa do Estado: conceitos elementares dos Três Poderes da República",
        metodo: "Aula expositiva dialogada · discussão e debate · atividades práticas (esp. diversificados)",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "01:00",
        refs: "B1, B2, B3, C1, C2, C3, C5, C4"
      },
      {
        date: "16/02/2026",
        title: "Dicionário Jurídico: iniciação ao vocabulário e expressões fundamentais",
        metodo: "Atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C2, C1, C3, C4, C5"
      },
      {
        date: "23/02/2026",
        title: "Vade Mecum I: anatomia do livro, leis, códigos e índices remissivos",
        metodo: "Atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "02/03/2026",
        title: "Vade Mecum I: anatomia do livro, leis, códigos e índices remissivos (continuação)",
        metodo: "Atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "09/03/2026",
        title: "Vade Mecum II: Hierarquia das Normas e a Pirâmide de Kelsen na prática",
        metodo: "Aula expositiva dialogada · atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "16/03/2026",
        title: "Vade Mecum II: Hierarquia das Normas e a Pirâmide de Kelsen na prática (continuação)",
        metodo: "Aula expositiva dialogada · atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "23/03/2026",
        title: "Vade Mecum II: Hierarquia das Normas e a Pirâmide de Kelsen na prática (reforço)",
        metodo: "Aula expositiva dialogada",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "30/03/2026",
        title: "Exercícios de Revisão: prática de localização normativa e precedentes",
        metodo: "Atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "06/04/2026",
        title: "1ª Avaliação Dissertativa (AV1)",
        metodo: "Atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "13/04/2026",
        title: "Devolução e correção da prova",
        metodo: "Atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "20/04/2026",
        title: "Estrutura Judiciária: organização dos Tribunais e instâncias",
        metodo: "Aula expositiva dialogada",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "27/04/2026",
        title: "Jurisprudência I: o que é um acórdão? Como ler ementas e votos",
        metodo: "Aula expositiva dialogada · atividade em espaços diversificados (PI - Prova Interdisciplinar)",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "03:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "04/05/2026",
        title: "Jurisprudência I: o que é um acórdão? Como ler ementas e votos (continuação)",
        metodo: "Aula expositiva dialogada · atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "11/05/2026",
        title: "Jurisprudência II: pesquisa prática nos portais do STF e STJ",
        metodo: "Aula expositiva dialogada · atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "18/05/2026",
        title: "Jurisprudência II: pesquisa prática nos portais do STF e STJ (continuação)",
        metodo: "Atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "25/05/2026",
        title: "Semana Jurídica (palestras e apresentações de TCC)",
        metodo: "Simpósio · atividade em espaços diversificados",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "02:30",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "01/06/2026",
        title: "Revisão Geral: consolidação de conteúdos para a avaliação final",
        metodo: "Atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "08/06/2026",
        title: "Avaliação Dissertativa 2",
        metodo: "Atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "15/06/2026",
        title: "Entrega de resultados e considerações finais",
        metodo: "Atividades de aprendizagem",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "22/06/2026",
        title: "PINT - Projeto Integrador (execução do projeto durante o semestre)",
        metodo: "Seminário · atividade em espaços diversificados",
        horasSala: "01:30",
        horasEad: "00:00",
        horasDiversificados: "04:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      }
    ],
    bibliografiaBasica: [
      {
        code: "B1",
        text: "TEIXEIRA, Tarcísio. Curso de direito e processo eletrônico: doutrina, jurisprudência e prática. São Paulo: Saraiva. Disponível em: https://integrada.minhabiblioteca.com.br/books/9788553172740",
        link: "https://integrada.minhabiblioteca.com.br/books/9788553172740"
      },
      {
        code: "B2",
        text: "BARROSO, Darlan. Prática no Processo Civil. 9. ed. São Paulo: Saraiva. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691999",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691999"
      },
      {
        code: "B3",
        text: "FIGUEIREDO, Leonardo Vizeu. Lições de direito constitucional. Rio de Janeiro: Forense. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691616",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691616"
      }
    ],
    bibliografiaComplementar: [
      {
        code: "C1",
        text: "VENOSA, Silvio de Salvo. Introdução ao Estudo do Direito: Primeiras Linhas. São Paulo: Atlas.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691509"
      },
      {
        code: "C2",
        text: "GUSMÃO, Paulo Dourado de. Introdução ao estudo do direito. Rio de Janeiro: Forense.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=688567"
      },
      {
        code: "C3",
        text: "MOTTA, Sylvio. Direito constitucional: teoria, jurisprudência e questões.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690897"
      },
      {
        code: "C4",
        text: "SOARES, Ricardo Maurício Freire. Teoria Geral do Direito. São Paulo: Saraiva Jur.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=692329"
      },
      {
        code: "C5",
        text: "TEIXEIRA, Tarcisio. Direito Digital e Processo eletrônico. São Paulo: Saraiva, 2020.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690944"
      }
    ],
    observacoes:
      "A gravação das aulas e/ou atividades acadêmicas por áudio e/ou vídeo, pelo discente, não é permitida, salvo em casos de prévia autorização docente."
  },
  "teoria-do-estado-e-da-constituicao": {
    title: "Teoria do Estado e da Constituição",
    downloadUrl: "/Planos%20de%20Estudo/Plano%20de%20Estudo%20-%20Teoria%20do%20Estado%20e%20da%20Constituição.pdf",
    cronogramaDownloadUrl: "/Cronogramas/Cronograma%20-%20Teoria%20do%20Estado%20e%20da%20Constituição.pdf",
    campus: "UNASP EC",
    modalidade: "Presencial",
    curso: "Direito",
    code: "G00065.1",
    professor: "Lelio Maximino Lellis",
    yearSemester: "2026/1",
    credits: "3",
    hours: {
      sala: "45h",
      diversificados: "15h",
      ead: "0h",
      total: "60h"
    },
    ementa:
      "Conceitos básicos e elementos do Estado. Contratualismo Moderno; Republicanismo; Socialismo e Liberalismo. Formas e sistemas de Estado e de Governo. Conceito de Constituição. Constitucionalismo. Poder Constituinte. Classificação das Constituições. Teoria das Normas Constitucionais. Hermenêutica e interpretação constitucional. Ativismo Judicial e efeito backlash.",
    perfilEgresso: [
      "Sólida formação geral, humanística e axiológica.",
      "Capacidade de análise, argumentação, interpretação e valorização dos fenômenos jurídicos e sociais.",
      "Domínio de conceitos e da terminologia jurídica.",
      "Postura reflexiva e de visão crítica para aprendizagem autônoma e dinâmica indispensável ao exercício da ciência do Direito, da prestação da justiça e do desenvolvimento da cidadania.",
      "Atuação como agente de transformação social, promovendo a defesa de direitos humanos fundamentais e o bem-estar social, especialmente em prol dos desfavorecidos socialmente."
    ],
    competencias: [
      "Interpretar e aplicar normas do sistema jurídico nacional articulando teoria e prática, considerando experiência estrangeira quando couber.",
      "Ler, compreender e elaborar textos, atos e documentos jurídicos (negocial, processual ou normativo) com uso das normas técnico-jurídicas.",
      "Comunicar-se com precisão.",
      "Dominar instrumentos da metodologia jurídica e aplicá-los ao exercício do Direito.",
      "Compreender hermenêutica e métodos interpretativos, pesquisando legislação, jurisprudência, doutrina e outras fontes do Direito.",
      "Utilizar corretamente terminologia e categorias jurídicas.",
      "Aceitar a diversidade e o pluralismo cultural.",
      "Apreender conceitos deontológico-profissionais e desenvolver perspectivas transversais sobre direitos humanos."
    ],
    objetivos: [
      "Desenvolver a cidadania e incentivar seu exercício, defendendo princípios do Estado de Direito e do regime democrático, com foco em direitos fundamentais.",
      "Estimular reflexão e investigação científicas para pesquisa jurídica interdisciplinar e formação continuada.",
      "Proporcionar base sólida para estudo dogmático autônomo do Estado e da Constituição e das disciplinas correlatas."
    ],
    calendario: [
      { date: "08/04/2026", activity: "P1 - Prova 1 (Bimestral)", weight: "30%" },
      { date: "26/04/2026", activity: "PI - Prova Interdisciplinar", weight: "10%" },
      { date: "20/05/2026", activity: "AT - Estudo de Caso (AT) em grupo", weight: "20%" },
      { date: "10/06/2026", activity: "P2 - Prova 2 (Semestral)", weight: "30%" },
      { date: "17/06/2026", activity: "PINT - Projeto Integrador", weight: "10%" }
    ],
    bibliografiaBasica: [
      {
        code: "B1",
        text: "BITTAR, Eduardo C. B. Teoria do Estado: filosofia política e teoria da democracia. São Paulo: Atlas. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=692313",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=692313"
      },
      {
        code: "B2",
        text: "SARLET, Ingo Wolfgang; MARINONI, Luiz Guilherme; MITIDIERO, Daniel. Curso de Direito Constitucional. São Paulo: Saraiva Jur. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690606.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690606"
      },
      {
        code: "B3",
        text: "PINTO, Kleber Couto. Curso de Teoria Geral do Estado: Fundamento do direito constitucional positivo. São Paulo: Atlas. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=687128",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=687128"
      }
    ],
    bibliografiaComplementar: [
      {
        code: "C1",
        text: "FRIEDE, Reis. Curso de ciência política e teoria geral do Estado. São Paulo: Atlas. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=687128.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=687128"
      },
      {
        code: "C2",
        text: "MENDES, Gilmar Ferreira; BRANCO, Paulo Gonet. Curso de Direito Constitucional. São Paulo: Saraiva Jur. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690609",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690609"
      },
      {
        code: "C3",
        text: "RAMOS. Elival. Ativismo judicial: parâmetros dogmáticos. São Paulo: Saraiva, Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690274",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690274"
      },
      {
        code: "C4",
        text: "DANTAS, Miguel Calmon. Constitucionalismo dirigente e pós-modernidade. São Paulo: Saraiva. Disponível em: https://integrada.minhabiblioteca.com.br/books/9788553610112",
        link: "https://integrada.minhabiblioteca.com.br/books/9788553610112"
      },
      {
        code: "C5",
        text: "BARROSO, Luís Roberto. Curso de direito constitucional contemporâneo: os conceitos fundamentais e a construção do novo modelo. São Paulo: Saraiva Jur. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690617",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690617"
      }
    ],
    conteudos: [
      {
        date: "04/02/2026",
        title: "Apresentação do plano, metodologia e bibliografia (comentada)",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "11/02/2026",
        title: "Conceitos básicos e elementos do Estado",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B3, C1, C4"
      },
      {
        date: "18/02/2026",
        title: "Pensadores da filosofia política (antiga, medieval, moderna, contemporânea)",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B3, C1, C2"
      },
      {
        date: "25/02/2026",
        title: "Pensadores da filosofia política (continuação)",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B3, C1, C2"
      },
      {
        date: "04/03/2026",
        title: "Formas e sistemas de Estado e de governo. Federalismo EUA/Brasil",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, C1, C4"
      },
      {
        date: "11/03/2026",
        title: "Constituição: origem, evolução histórica, conceitos; constitucionalismo brasileiro",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C5"
      },
      {
        date: "18/03/2026",
        title: "Poder Constituinte: espécies, formas de atuação e limites",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, C2, C5"
      },
      {
        date: "25/03/2026",
        title: "Poder Constituinte: espécies, formas de atuação e limites (continuação)",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, C2, C5"
      },
      {
        date: "01/04/2026",
        title: "Classificação das constituições e elementos estruturais; revisão bimestral",
        metodo: "Aula expositiva dialogada · exercícios de revisão (esp. diversificados)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "05:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "08/04/2026",
        title: "Prova 1 (bimestral)",
        metodo: "Atividades de aprendizagem",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "15/04/2026",
        title: "Correção da Prova 1; classificação das constituições (retomada)",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "22/04/2026",
        title: "Mutação, recepção e repristinação constitucionais",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B2, C2, C5"
      },
      {
        date: "29/04/2026",
        title: "Mutação, recepção e repristinação constitucionais (continuação)",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B2, C2, C5"
      },
      {
        date: "06/05/2026",
        title: "Aplicabilidade e efetividade das normas constitucionais",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, C2, C5"
      },
      {
        date: "13/05/2026",
        title: "Aplicabilidade e efetividade das normas constitucionais; semana de oração",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, C2, C5"
      },
      {
        date: "20/05/2026",
        title: "Hermenêutica e interpretação das normas constitucionais",
        metodo: "Aula expositiva dialogada · atividade em grupo no AVA (esp. diversificados)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "05:45",
        refs: "B1, B2, C2, C5"
      },
      {
        date: "27/05/2026",
        title: "Semana Jurídica",
        metodo: "Simpósio",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "03/06/2026",
        title: "Soberania democrática e relação entre Poderes: ativismo e efeito backlash; revisão semestral",
        metodo: "Aula expositiva dialogada · exercícios de revisão (esp. diversificados)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "05:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "10/06/2026",
        title: "Prova 2 (semestral)",
        metodo: "Atividades de aprendizagem",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "17/06/2026",
        title: "Correção da Prova 2; seletivas do Projeto Integrador",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "24/06/2026",
        title: "Aspectos inovadores em Teoria da Constituição: Europa, USA, Canadá; solução de pendências",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      }
    ],
    observacoes:
      "A gravação das aulas e/ou atividades acadêmicas por áudio e/ou vídeo, pelo discente, não é permitida, salvo em casos de prévia autorização docente."
  },
  "direito-civil-pessoas-bens-e-fatos": {
    title: "Direito Civil: Pessoas, Bens e Fatos - Split (Parte em Web Class Síncrona)",
    downloadUrl: "/Planos%20de%20Estudo/Plano%20de%20Estudo%20-%20Direito%20Civil%20Pessoas,%20Bens%20e%20Fatos.pdf",
    cronogramaDownloadUrl:
      "/Cronogramas/Cronograma%20-%20Direito%20Civil%20Pessoas,%20Bens%20e%20Fatos%20-%20Split%20Parte%20em%20Web%20Class%20Síncrona.pdf",
    campus: "UNASP EC",
    modalidade: "Split (Parte em Web Class Síncrona)",
    curso: "Direito",
    code: "G00067.1",
    professor: "Andre de Carvalho Okano",
    yearSemester: "2026/1",
    credits: "4",
    hours: {
      sala: "45h",
      diversificados: "15h",
      ead: "20h",
      total: "80h"
    },
    ementa:
      "Constitucionalização do direito civil. Estrutura do Código Civil. Das Pessoas: Pessoa Natural (sujeito, personalidade e nascituro; capacidade civil; direitos da personalidade; comoriência e ausência). Pessoa Jurídica (classificação; associações civis; fundações; organizações religiosas; partidos políticos). Domicílio civil (pessoa natural e pessoa jurídica). Bens jurídicos: classificação; bens em si mesmos (móveis/ imóveis; fungíveis/ infungíveis; consumíveis/ inconsumíveis; divisíveis/ indivisíveis; singulares/ coletivos); bens reciprocamente considerados (principais/ acessórios); bens públicos (uso comum, uso especial, dominicais). Dos fatos jurídicos: definição e classificação; negócios jurídicos; escada ponteana (existência, validade, eficácia); interpretação do negócio jurídico; defeitos (vícios do consentimento e sociais); elementos acidentais (condição, termo, encargo); invalidades (nulidade, anulabilidade, teoria da inexistência); prescrição e decadência.",
    perfilEgresso: [
      "Sólida formação geral, humanística e axiológica.",
      "Capacidade de análise, argumentação, interpretação e valorização dos fenômenos jurídicos e sociais.",
      "Domínio de conceitos e da terminologia jurídica.",
      "Postura reflexiva e de visão crítica para aprendizagem autônoma e dinâmica indispensável ao exercício da ciência do Direito, da prestação da justiça e do desenvolvimento da cidadania.",
      "Atuação como agente de transformação social, promovendo a defesa de direitos humanos fundamentais e o bem-estar social, especialmente em prol dos desfavorecidos socialmente."
    ],
    competencias: [
      "Interpretar e aplicar normas do sistema jurídico nacional articulando teoria e prática, considerando experiência estrangeira quando couber.",
      "Ler, compreender e elaborar textos, atos e documentos jurídicos (negocial, processual ou normativo) com uso das normas técnico-jurídicas.",
      "Dominar instrumentos da metodologia jurídica e aplicá-los ao exercício do Direito.",
      "Desenvolver técnicas de raciocínio e argumentação jurídicos para propor soluções e decidir questões.",
      "Compreender hermenêutica e métodos interpretativos, pesquisando legislação, jurisprudência, doutrina e outras fontes do Direito.",
      "Utilizar corretamente terminologia e categorias jurídicas.",
      "Apreender conceitos deontológico-profissionais e desenvolver perspectivas transversais sobre direitos humanos."
    ],
    objetivos: [
      "Conhecer os principais elementos do negócio jurídico.",
      "Entender a legislação e aplicá-la no contexto social.",
      "Desenvolver visão humanística do Direito Civil, com viés constitucional."
    ],
    calendario: [
      { date: "06/04/2026", activity: "P1 - Prova", weight: "30%" },
      { date: "26/04/2026", activity: "PI - Prova", weight: "10%" },
      { date: "08/06/2026", activity: "P2 - Prova", weight: "30%" },
      { date: "08/06/2026", activity: "E.C. - Estudo de Caso / Debate", weight: "20%" },
      { date: "22/06/2026", activity: "PInt - Atividade / Projeto Integrador", weight: "10%" }
    ],
    bibliografiaBasica: [
      {
        code: "B1",
        text: "GAGLIANO, Pablo Stolze; PAMPLONA FILHO, Rodolfo. Manual de direito civil: volume único. 6. ed. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=706389",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=706389"
      },
      {
        code: "B2",
        text: "TARTUCE, Flávio. Direito Civil: Lei de Introdução e Parte Geral. v. 17. Rio de Janeiro: Forense. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690849",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690849"
      },
      {
        code: "B3",
        text: "GONÇALVES, Carlos Roberto. Direito Civil Brasileiro: Parte Geral. v. 1. 15. ed. São Paulo: Saraiva Jur. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690828",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690828"
      }
    ],
    bibliografiaComplementar: [
      {
        code: "C1",
        text: "AMARAL, Francisco. Direito Civil: Introdução. São Paulo: Saraiva. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690816",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690816"
      },
      {
        code: "C2",
        text: "LOBO, Paulo. Direito Civil: Parte Geral. São Paulo: Saraiva Jur. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690853",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690853"
      },
      {
        code: "C3",
        text: "VENOSA, Sílvio de Salvo. Direito Civil: Parte Geral. v. 1. São Paulo: Atlas. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690852",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690852"
      },
      {
        code: "C4",
        text: "MONTEIRO, Washington de Barros. Curso de Direito Civil: Parte Geral. v. 1. São Paulo: Saraiva. Disponível em: https://integrada.minhabiblioteca.com.br/books/9788502196124",
        link: "https://integrada.minhabiblioteca.com.br/books/9788502196124"
      },
      {
        code: "C5",
        text: "TARTUCE, Flávio. Manual de Direito Civil: volume único. São Paulo: Método. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=706390",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=706390"
      }
    ],
    conteudos: [
      {
        date: "02/02/2026",
        title: "Recepção dos alunos",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1"
      },
      {
        date: "05/02/2026",
        title: "Apresentação do plano de ensino",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, C1, B2, C2, B3, C3, C4, C5"
      },
      {
        date: "09/02/2026",
        title: "Das pessoas: personalidade jurídica",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "12/02/2026",
        title: "Das pessoas: personalidade jurídica (continuação)",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "16/02/2026",
        title: "Teorias da personalidade jurídica",
        metodo: "Discussão e debate · atividade opinativa (esp. diversificados)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "05:45",
        refs: "B1, B2, B3"
      },
      {
        date: "19/02/2026",
        title: "Teorias da personalidade jurídica (continuação)",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "23/02/2026",
        title: "Direitos da personalidade",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2"
      },
      {
        date: "26/02/2026",
        title: "Direitos da personalidade (continuação)",
        metodo: "Aula invertida",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2"
      },
      {
        date: "02/03/2026",
        title: "Direitos da personalidade II",
        metodo: "Discussão e debate",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "05/03/2026",
        title: "Direitos da personalidade II (continuação)",
        metodo: "Discussão e debate",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "09/03/2026",
        title: "Ausência e fim da personalidade jurídica",
        metodo: "Aula expositiva dialogada · discussão e debate",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2"
      },
      {
        date: "12/03/2026",
        title: "Ausência e fim da personalidade jurídica (continuação)",
        metodo: "Aula expositiva dialogada · discussão e debate",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2"
      },
      {
        date: "16/03/2026",
        title: "Classificação dos bens",
        metodo: "Discussão e debate · aula expositiva dialogada · atividade em esp. diversificados (relevância de classificar bens)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "05:00",
        refs: "B1, B2, B3"
      },
      {
        date: "19/03/2026",
        title: "Classificação dos bens (continuação)",
        metodo: "Discussão e debate · aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "23/03/2026",
        title: "Classificação dos bens II",
        metodo: "Aula expositiva dialogada · discussão e debate",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2"
      },
      {
        date: "26/03/2026",
        title: "Classificação dos bens II (continuação)",
        metodo: "Aula expositiva dialogada · discussão e debate",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2"
      },
      {
        date: "30/03/2026",
        title: "Classificação dos bens III",
        metodo: "Discussão e debate · aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "02/04/2026",
        title: "Classificação dos bens III (continuação)",
        metodo: "Discussão e debate",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "06/04/2026",
        title: "Prova 1",
        metodo: "Atividades de aprendizagem",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, C1, C2, C3, C4, C5, B3, B2"
      },
      {
        date: "09/04/2026",
        title: "Correção de prova",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1"
      },
      {
        date: "13/04/2026",
        title: "Fatos, Atos e Negócios Jurídicos; classificação; aquisição, modificação, defesa e extinção dos direitos",
        metodo: "Aula expositiva dialogada · atividade em esp. diversificados (necessidade de regulamentação dos NJ)",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "05:00",
        refs: "B1, B2, B3"
      },
      {
        date: "16/04/2026",
        title: "Fatos, Atos e Negócios Jurídicos (continuação)",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "20/04/2026",
        title: "Elementos do Negócio Jurídico: existência, validade, eficácia; Escada Ponteana; elementos constitutivos",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, C1, C2"
      },
      {
        date: "23/04/2026",
        title: "Elementos do Negócio Jurídico (continuação)",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, C2, C1"
      },
      {
        date: "27/04/2026",
        title: "Elementos do Negócio Jurídico (continuação)",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, C1, C2"
      },
      {
        date: "30/04/2026",
        title: "Condição, Termo e Encargo; Invalidade do Negócio Jurídico; Nulidade; Anulabilidade",
        metodo: "Discussão e debate · aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "04/05/2026",
        title: "Interpretação do Negócio Jurídico; Defeitos do Negócio Jurídico",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "07/05/2026",
        title: "Coação e Estado de Perigo",
        metodo: "Discussão e debate · aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2"
      },
      {
        date: "11/05/2026",
        title: "Coação e Estado de Perigo (continuação)",
        metodo: "Discussão e debate · aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2"
      },
      {
        date: "14/05/2026",
        title: "Lesão. Simulação",
        metodo: "Discussão e debate · aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2"
      },
      {
        date: "18/05/2026",
        title: "Lesão. Simulação (continuação)",
        metodo: "Discussão e debate · aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2"
      },
      {
        date: "21/05/2026",
        title: "Erro e dolo",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2"
      },
      {
        date: "25/05/2026",
        title: "Semana Jurídica",
        metodo: "Discussão e debate",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1"
      },
      {
        date: "28/05/2026",
        title: "Disposições legais sobre a prescrição; impedimento, suspensão e extinção",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2"
      },
      {
        date: "01/06/2026",
        title: "Prazos prescricionais; prescrição e decadência no CC",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "08/06/2026",
        title: "Prova 2",
        metodo: "Atividades de aprendizagem",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5"
      },
      {
        date: "11/06/2026",
        title: "Correção de prova",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "15/06/2026",
        title: "Seletivas Projeto Integrador",
        metodo: "Aula expositiva dialogada",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "18/06/2026",
        title: "Seletivas Projeto Integrador (continuação)",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3"
      },
      {
        date: "22/06/2026",
        title: "Apresentação do Projeto Integrador",
        metodo: "Atividades de aprendizagem",
        horasSala: "02:15",
        horasEad: "00:00",
        horasDiversificados: "00:00",
        refs: "B1"
      },
      {
        date: "25/06/2026",
        title: "Encerramento do semestre",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "01:00",
        horasDiversificados: "00:00",
        refs: "B1"
      }
    ],
    observacoes:
      "A gravação das aulas e/ou atividades acadêmicas por áudio e/ou vídeo, pelo discente, não é permitida, salvo em casos de prévia autorização docente."
  },
  "aprendizagem-na-educacao-superior": {
    title: "Aprendizagem na Educação Superior",
    downloadUrl: "/Planos%20de%20Estudo/Plano%20de%20Estudo%20-%20Aprendizagem%20na%20Educação%20Superior.pdf",
    cronogramaDownloadUrl: "/Cronogramas/Cronograma%20-%20Aprendizagem%20no%20Ensino%20Superior.pdf",
    campus: "UNASP EC",
    modalidade: "Mega Class",
    curso: "Direito",
    code: "G0208.2",
    professor: "Everson Mückenberger / Stella de Mello Silva",
    yearSemester: "2026/1",
    credits: "2",
    hours: {
      sala: "0h",
      diversificados: "0h",
      ead: "40h",
      total: "40h"
    },
    ementa:
      "Apresentação das ferramentas tecnológicas e formas de trabalho no ambiente virtual de aprendizagem (AVA). Desenvolvimento de competências e estratégias de aprendizagem, letramento científico e de informação. Caracterização de trabalhos acadêmicos, técnicas e tecnologias para a escrita colaborativa. Apresentação dos tipos de conhecimento científico, levantamento e seleção de informação em suas diferentes abordagens. Plágio.",
    perfilEgresso: [
      "Sólida formação geral, humanística e axiológica.",
      "Capacidade de análise, argumentação, interpretação e valorização dos fenômenos jurídicos e sociais.",
      "Domínio de conceitos e da terminologia jurídica.",
      "Postura reflexiva e de visão crítica que fomente a capacidade e a aptidão para a aprendizagem autônoma e dinâmica indispensável ao exercício da ciência do Direito, da prestação da justiça e do desenvolvimento da cidadania.",
      "Uso das novas Tecnologias da Informação e Comunicação, aplicando-as adequadamente na atividade jurídica.",
      "Atuação como agente de transformação social, promovendo a defesa de direitos humanos fundamentais e o bem-estar social, especialmente em prol dos desfavorecidos socialmente."
    ],
    competencias: [
      "Demonstrar capacidade para comunicar-se com precisão.",
      "Utilizar corretamente a terminologia e as categorias jurídicas.",
      "Aceitar a diversidade e o pluralismo cultural.",
      "Compreender o impacto das novas tecnologias na área jurídica.",
      "Possuir o domínio de tecnologias e métodos para permanente compreensão e aplicação do Direito."
    ],
    objetivos: [
      "Reconhecer, no processo de pesquisa, um elemento fundamental para a construção de um profissional questionador e inovador, compreendendo o espaço acadêmico como detentor de linguagem específica e de estratégias para a formação de um aluno pesquisador e autorregulado.",
      "Utilizar o processo de pesquisa como arcabouço teórico para compreender procedimentos relativos à ação discente, demonstrar a relevância de ser um aluno pesquisador e produzir material que contribua para o aprimoramento da prática de estudos e divulgação de resultados acadêmico-científicos.",
      "Desenvolver capacidade de pesquisa, pensamento crítico e analítico por meio de estratégias de aprendizagem, questionando informações e adotando atitudes que contribuam para o futuro no mercado de trabalho."
    ],
    calendario: [
      { date: "29/03/2026", activity: "AO1 - Atividade Online 1", weight: "20%" },
      { date: "05/04/2026", activity: "AV1 - Avaliação 1", weight: "30%" },
      { date: "24/05/2026", activity: "AO2 - Atividade Online 2", weight: "20%" },
      { date: "31/05/2026", activity: "AV2 - Avaliação 2", weight: "30%" }
    ],
    bibliografiaBasica: [
      {
        code: "B1",
        text: "CORTELLA, M. S.; DIMENSTEIN, G. A era da curadoria: o que importa é saber o que importa!. Livro eletrônico Campinas: Papirus; 7mares, 2016. Recurso On-line. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=821097",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=821097"
      },
      {
        code: "B2",
        text: "COSTA, F. (Org.). Manual de trabalhos acadêmicos. 1. ed. Engenheiro Coelho: Unaspress, 2013. Recurso On-line. Disponível em: http://digital.unaspress.com.br/index.php/ebook/manual-de-trabalho-de-conclusao-de-curso-graduacao-e-pos-graduacao/",
        link: "http://digital.unaspress.com.br/index.php/ebook/manual-de-trabalho-de-conclusao-de-curso-graduacao-e-pos-graduacao/"
      },
      {
        code: "B3",
        text: "RIBEIRO, R. A. Introdução à EaD. São Paulo: Pearson Education do Brasil, 2014. Recurso On-line. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=808597",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=808597"
      }
    ],
    bibliografiaComplementar: [
      {
        code: "C1",
        text: "KENSKI, V. M. Educação e tecnologia: o novo ritmo da informação. 7. ed. Campinas: Papirus, 2010. Recurso On-line. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=807208",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=807208"
      },
      {
        code: "C2",
        text: "CORTELAZZO, I. B. C. Prática Pedagógica, Aprendizagem e Avaliação em EAD. Curitiba: IBPEX, 2009. Recurso On-line. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=808167",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=808167"
      },
      {
        code: "C3",
        text: "BRITO, G. S.; PURIFICAÇÃO, I. Educação e novas tecnologias: um (re)pensar. Curitiba: Intersaberes, 2012. Recurso On-line. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=808992",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=808992"
      },
      {
        code: "C4",
        text: "KENSKI, V. M. Tecnologias e ensino presencial e a distância. 9. ed. Campinas: Papirus, 2012. Recurso On-line. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=807250",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=807250"
      },
      {
        code: "C5",
        text: "MEDEIROS, J. B. Redação científica: guia prático para trabalhos científicos. 13. ed. Rio de Janeiro: Atlas, 2019. Recurso On-line. Disponível em: https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=844228",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=844228"
      },
      {
        code: "A1",
        text: "GARCIA, Joe. Dossiê Avaliação da Aprendizagem na Educação Superior. Eccos, n. 55, 2020. Recurso on-line. Disponível em: https://rnpprimo.hosted.exlibrisgroup.com/permalink/f/vsvpiv/TN_cdi_proquest_journals_2475937324",
        link: "https://rnpprimo.hosted.exlibrisgroup.com/permalink/f/vsvpiv/TN_cdi_proquest_journals_2475937324"
      },
      {
        code: "A2",
        text: "CONTE, Isaura Isabel; PAULO, Fernanda dos Santos; BIERHALS, Patricia Rutz. Avaliação do ensino-aprendizagem na educação superior: reflexões da experiência. Revista Cocar, v. 13, n. 27, 2019. Recurso on-line. Disponível em: https://rnpprimo.hosted.exlibrisgroup.com/permalink/f/vsvpiv/TN_cdi_doaj_primary_oai_doaj_org_article_90a3afb77cd8463aa36c9cf49946a2428",
        link: "https://rnpprimo.hosted.exlibrisgroup.com/permalink/f/vsvpiv/TN_cdi_doaj_primary_oai_doaj_org_article_90a3afb77cd8463aa36c9cf49946a2428"
      },
      {
        code: "A3",
        text: "PACHECO, José Augusto; SOUSA, Joana; MAIA, Ila Beatriz. Conhecimento e aprendizagem na educação superior: desafios curriculares e pedagógicos no século XXI. Revista Diálogo Educacional, v. 20, n. 65, 2020. Recurso on-line. Disponível em: https://rnpprimo.hosted.exlibrisgroup.com/permalink/f/vsvpiv/TN_cdi_doaj_primary_oai_doaj_org_article_0e1841bb672c423a82e8eb74eabef9b6",
        link: "https://rnpprimo.hosted.exlibrisgroup.com/permalink/f/vsvpiv/TN_cdi_doaj_primary_oai_doaj_org_article_0e1841bb672c423a82e8eb74eabef9b6"
      }
    ],
    conteudos: [
      {
        date: "07/02/2026",
        title: "Ambientação; apresentação da disciplina; plano de ensino",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B1, C1, A1"
      },
      {
        date: "14/02/2026",
        title: "Contexto da educação brasileira; papel da disciplina Aprendizagem na Educação Superior",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B2, C2, A2"
      },
      {
        date: "21/02/2026",
        title: "Estratégias de aprendizagem: um sobrevoo",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B3, C3, A3"
      },
      {
        date: "28/02/2026",
        title: "Estratégias cognitivas de aprendizagem",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B3, C3, C4, C5, A3"
      },
      {
        date: "07/03/2026",
        title: "Estratégias metacognitivas de aprendizagem",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B1, C1, A1"
      },
      {
        date: "14/03/2026",
        title: "Letramento científico",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B2, C2, A2"
      },
      {
        date: "21/03/2026",
        title: "Letramento informacional",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B3, C3, A3"
      },
      {
        date: "28/03/2026",
        title: "Atividade online 1: estratégias de aprendizagem, letramento científico e informacional",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B3, C3, C4, C5, A3"
      },
      {
        date: "04/04/2026",
        title: "Avaliação 01: conteúdo parcial",
        metodo: "Atividades de aprendizagem",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B1, C1, A1"
      },
      {
        date: "11/04/2026",
        title: "Ferramentas tecnológicas de aprendizagem",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B2, C2, A2"
      },
      {
        date: "18/04/2026",
        title: "Os vários tipos de conhecimento",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B3, C3, A3"
      },
      {
        date: "25/04/2026",
        title: "Tipos de conhecimento científico",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B3, C3, A3, C4, C5"
      },
      {
        date: "02/05/2026",
        title: "Projeto de pesquisa",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B1, C1, A1"
      },
      {
        date: "09/05/2026",
        title: "Gêneros textuais do ambiente acadêmico",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B2, C2, A2"
      },
      {
        date: "16/05/2026",
        title: "Introdução à escrita acadêmica",
        metodo: "Aula expositiva dialogada",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B3, C3, A3"
      },
      {
        date: "23/05/2026",
        title:
          "Atividade online 2: tipos de conhecimento, conhecimento científico, projeto de pesquisa e gêneros textuais",
        metodo: "Atividades de aprendizagem",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B3, C3, A3, C4, C5, B1, B2, C1, C2, A1, A2"
      },
      {
        date: "30/05/2026",
        title: "Avaliação 02: conteúdo total",
        metodo: "Atividades de aprendizagem",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B1, C1, A1, B2, B3, C2, C3, C4, C5, A2, A3"
      },
      {
        date: "06/06/2026",
        title: "Atividade substitutiva",
        metodo: "Atividades de aprendizagem",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B2, C2, A2, B1, C1, A1, B3, C3, A3, C4, C5"
      },
      {
        date: "13/06/2026",
        title: "Avaliação substitutiva",
        metodo: "Atividades de aprendizagem",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B1, B2, B3, C1, C2, C3, C4, C5, A1, A2, A3"
      },
      {
        date: "20/06/2026",
        title: "Fechamento de notas e diário",
        metodo: "Ensino individualizado (orientação)",
        horasSala: "00:00",
        horasEad: "02:00",
        horasDiversificados: "00:00",
        refs: "B1, C1, A1"
      }
    ],
    observacoes:
      "A gravação das aulas e/ou atividades acadêmicas por áudio e/ou vídeo, pelo discente, não é permitida, salvo em casos de prévia autorização docente."
  }
};

export const dayLabels = {
  0: "domingo",
  1: "segunda",
  2: "terca",
  3: "quarta",
  4: "quinta",
  5: "sexta",
  6: "sabado"
};

export const dayDisplay = {
  domingo: "Domingo",
  segunda: "Segunda-feira",
  terca: "Terça-feira",
  quarta: "Quarta-feira",
  quinta: "Quinta-feira",
  sexta: "Sexta-feira",
  sabado: "Sábado"
};
