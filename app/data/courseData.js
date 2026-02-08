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
  },
  "teoria-geral-do-direito": {
    title: "Teoria Geral do Direito",
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
      "Postura reflexiva e visão crítica para aprendizagem autônoma e dinâmica."
    ],
    competencias: [
      "Demonstrar capacidade para comunicar-se com precisão.",
      "Dominar instrumentos da metodologia jurídica e aplicar conceitos fundamentais ao exercício do Direito.",
      "Desenvolver técnicas de raciocínio e argumentação jurídicos para propor soluções.",
      "Desenvolver a cultura do diálogo e meios consensuais de solução de conflitos.",
      "Compreender a hermenêutica e os métodos interpretativos com capacidade de pesquisa.",
      "Utilizar corretamente a terminologia e as categorias jurídicas.",
      "Aceitar a diversidade e o pluralismo cultural.",
      "Desenvolver a capacidade de trabalhar em grupos interdisciplinares."
    ],
    objetivos: [
      "Compreender o Direito como fenômeno social, cultural e normativo, reconhecendo sua universalidade, historicidade e função na organização da vida social.",
      "Dominar os conceitos fundamentais da Teoria Geral do Direito, compreendendo o Direito enquanto ciência, sistema normativo e ordenamento jurídico.",
      "Desenvolver capacidade de análise, interpretação, argumentação e reflexão crítica sobre o Direito positivo e a dogmática jurídica."
    ],
    planoAulas: [
      {
        date: "03/02/2026",
        content: "Apresentação do curso e introdução à disciplina.",
        atividades: "Aula expositiva dialogada, discussão e debate."
      },
      {
        date: "10/02/2026",
        content: "O fenômeno jurídico e sua universalidade.",
        atividades: "Texto introdutório e ficha de conceitos (atividade em espaços diversificados)."
      },
      {
        date: "24/02/2026",
        content: "Direito enquanto ciência.",
        atividades: "Texto doutrinário (atividade em espaços diversificados)."
      },
      {
        date: "03/03/2026",
        content: "Zetética e Dogmática Jurídica.",
        atividades: "Análise comparativa de trechos doutrinários (atividade em espaços diversificados)."
      },
      {
        date: "10/03/2026",
        content: "Teoria da Norma Jurídica.",
        atividades: "Aula expositiva dialogada, discussão e debate."
      },
      {
        date: "17/03/2026",
        content: "Regras e Princípios Jurídicos.",
        atividades: "Estudo de caso sobre colisão entre princípios (atividade em espaços diversificados)."
      },
      {
        date: "24/03/2026",
        content: "Teoria do Ordenamento Jurídico.",
        atividades: "Mapa esquemático do ordenamento jurídico brasileiro (atividade em espaços diversificados)."
      },
      {
        date: "31/03/2026",
        content: "LINDB: fundamentos e função.",
        atividades: "Leitura dirigida da LINDB + questionário (atividade em espaços diversificados)."
      },
      {
        date: "07/04/2026",
        content: "Avaliação.",
        atividades: "Atividades de aprendizagem."
      },
      {
        date: "14/04/2026",
        content: "Lei no tempo, no espaço e Direito Intertemporal.",
        atividades: "Análise de decisão judicial comentada (atividade em espaços diversificados)."
      },
      {
        date: "26/04/2026",
        content: "Fontes do Direito.",
        atividades: "Exercício prático sobre fontes em julgados (atividade em espaços diversificados)."
      },
      {
        date: "28/04/2026",
        content: "Sistemas de Direito: Civil Law e Common Law.",
        atividades: "Texto comparativo (atividade em espaços diversificados)."
      },
      {
        date: "05/05/2026",
        content: "Relação Jurídica, Direito Objetivo e Subjetivo.",
        atividades: "Análise de situação concreta (atividade em espaços diversificados)."
      },
      {
        date: "12/05/2026",
        content: "Interpretação Jurídica.",
        atividades: "Exercício interpretativo comparando métodos (atividade em espaços diversificados)."
      },
      {
        date: "24/05/2026",
        content: "Ramos do Direito Positivo.",
        atividades: "Classificação de casos por ramo do direito (atividade em espaços diversificados)."
      },
      {
        date: "26/05/2026",
        content: "Semana Jurídica.",
        atividades: "Simpósio."
      },
      {
        date: "02/06/2026",
        content: "Dogmática Jurídica e suas críticas.",
        atividades: "Texto crítico (atividade em espaços diversificados)."
      },
      {
        date: "09/06/2026",
        content: "Avaliação.",
        atividades: "Discussão e debate."
      },
      {
        date: "16/06/2026",
        content: "Correção e discussão.",
        atividades: "Discussão e debate."
      },
      {
        date: "23/06/2026",
        content: "Atendimento aos alunos.",
        atividades: "Discussão e debate."
      }
    ],
    calendario: [
      {
        date: "07/04/2026",
        activity: "Prova - Prova",
        weight: "30%"
      },
      {
        date: "26/04/2026",
        activity: "PI - Prova Interdisciplinar",
        weight: "10%"
      },
      {
        date: "31/05/2026",
        activity: "Atividade - Atividade",
        weight: "20%"
      },
      {
        date: "09/06/2026",
        activity: "Prova - Prova",
        weight: "30%"
      },
      {
        date: "26/06/2026",
        activity: "PINT - Projeto Integrador",
        weight: "10%"
      }
    ],
    bibliografiaBasica: [
      {
        code: "B1",
        text: "FERRAZ JÚNIOR, Tércio Sampaio. Introdução ao Estudo do Direito. São Paulo: Editora Atlas.",
        link: "https://integrada.minhabiblioteca.com.br/reader/books/9786559773763/pages/recent"
      },
      {
        code: "B2",
        text: "SOARES, Ricardo Maurício Freire. Teoria Geral do Direito. São Paulo: Saraiva Jur.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=692329"
      },
      {
        code: "B3",
        text: "MASCARO, Alysson Leandro Barbate. Introdução ao estudo do direito. Rio de Janeiro: Atlas.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691510"
      }
    ],
    bibliografiaComplementar: [
      {
        code: "C1",
        text: "FERRAZ JÚNIOR, Tércio Sampaio. A Ciência do Direito. São Paulo: Atlas.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690309"
      },
      {
        code: "C2",
        text: "JUSTEN FILHO, Marçal. Introdução ao estudo do Direito. 2. ed. Rio de Janeiro: Forense.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691508"
      },
      {
        code: "C3",
        text: "ZIPPELIUS, Reinhold. Teoria do Método Jurídico. São Paulo: Saraiva.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=692319"
      },
      {
        code: "C4",
        text: "ASCENSÃO, José de Oliveira. Teoria Geral do Direito Civil. v. 1-3. São Paulo: Editora Saraiva.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690812"
      },
      {
        code: "C4b",
        text: "ASCENSÃO, José de Oliveira. Teoria Geral do Direito Civil. v. 2. São Paulo: Editora Saraiva.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690811"
      },
      {
        code: "C4c",
        text: "ASCENSÃO, José de Oliveira. Teoria Geral do Direito Civil. v. 3. São Paulo: Editora Saraiva.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=690885"
      },
      {
        code: "C5",
        text: "VENOSA, Silvio de Salvo. Introdução ao Estudo do Direito: Primeiras Linhas. São Paulo: Editora Atlas.",
        link: "https://biblioteca.sophia.com.br/9198/index.asp?codigo_sophia=691509"
      }
    ],
    observacoes:
      "A gravação das aulas e/ou atividades acadêmicas por áudio e/ou vídeo, pelo discente, não é permitida, salvo em casos de prévia autorização docente.",
    interdisciplinaridade:
      "As estratégias de interdisciplinaridade no curso se revelam nas práticas de estágios, nos projetos experimentais, projetos de extensão, na formação profissionalizante em laboratórios, no exercício da pesquisa que visa à superação da dicotomia teoria/prática e, particularmente a partir da matriz curricular e por meio do exame interdisciplinar, além da conclusão por meio do desenvolvimento do trabalho de conclusão de curso.",
    filosofiaInstitucional:
      "Esta disciplina será desenvolvida em alinhamento com a filosofia, os princípios e os objetivos pedagógicos da instituição confessional, contribuindo para o fortalecimento dos valores e competências previstos no Plano Mestre de Desenvolvimento Espiritual (PMDE) do UNASP. Ao longo do semestre, os estudantes serão conduzidos em um processo formativo voltado à compreensão de seu propósito na missão institucional, reconhecendo habilidades e dons, aprimorando-os e aplicando-os em ações alinhadas com seus valores."
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
