export const scheduleByDay = {
  segunda: [
    { time: "19:00–19:45", subject: "Direito Civil: Pessoas, Bens e Fatos" },
    { time: "19:45–20:30", subject: "Direito Civil: Pessoas, Bens e Fatos" },
    { time: "20:45–21:30", subject: "Direito Civil: Pessoas, Bens e Fatos" },
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
  quinta: [{ time: "20:45–21:30", subject: "Direito Civil: Pessoas, Bens e Fatos" }],
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
    name: "Criminologia",
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
    name: "Direito Civil: Pessoas, Bens e Fatos",
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
    bibliografiaBasica: [
      {
        code: "B1",
        text: "PRADO, Luiz Regis; MAÍLLO, Alfonso Serrano. Criminologia. Rio de Janeiro: Forense.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690551"
      },
      {
        code: "B2",
        text: "GONZAGA, Christiano. Manual de Criminologia. São Paulo: Saraiva Jur.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691655"
      },
      {
        code: "B3",
        text: "BACILA, Carlos Roberto. Introdução ao direito penal e à criminologia. Editora Intersaberes.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=662855"
      }
    ],
    bibliografiaComplementar: [
      {
        code: "C1",
        text: "BRANDÃO, Cláudio. Curso de direito penal: parte geral. Rio de Janeiro: Forense.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=687112"
      },
      {
        code: "C2",
        text: "PENTEADO FILHO, Nestor Sampaio. Manual esquemático de criminologia.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691763"
      },
      {
        code: "C3",
        text: "SOUZA, Artur de Brito Gueiros; JAPIASSÚ, Carlos Eduardo Adriano. Direito penal: volume único. São Paulo: Atlas.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691099"
      },
      {
        code: "C4",
        text: "MOTTA, Felipe Heringer Roxo da. Introdução ao Estudo da Criminologia. Editora Intersaberes.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=663704"
      },
      {
        code: "C5",
        text: "PASCHOAL, Janaina Conceição. Direito penal: parte geral. São Paulo: Manole.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691056"
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
