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
    name: "Criminologia",
    teacher: "José Geraldo da Silva",
    credits: "2 créditos",
    focus: "Escolas penais, política criminal e análise social do crime.",
    tags: ["teoria", "sociologia", "penal"]
  },
  {
    name: "Teoria Geral do Direito",
    teacher: "Michael Lima de Jesus",
    credits: "3 créditos",
    focus: "Fontes do direito, norma jurídica e interpretação.",
    tags: ["fundamentos", "interpretação", "normas"]
  },
  {
    name: "Ambientação Jurídica",
    teacher: "Igor Emanuel de Souza Marques",
    credits: "2 créditos",
    focus: "Terminologia, prática acadêmica e panorama do curso.",
    tags: ["metodologia", "introdução"]
  },
  {
    name: "Teoria do Estado e da Constituição",
    teacher: "Lelio Maximino Lellis",
    credits: "3 créditos",
    focus: "Formação do Estado, Constituição e organização dos poderes.",
    tags: ["constitucional", "estado"]
  },
  {
    name: "Direito Civil: Pessoas, Bens e Fatos",
    teacher: "Andre de Carvalho Okano",
    credits: "4 créditos",
    focus: "Personalidade civil, bens e fatos jurídicos essenciais.",
    tags: ["civil", "pessoas", "bens"]
  },
  {
    name: "Aprendizagem na Educação Superior",
    teacher: "Everson Mückenberger / Stella de Mello Silva",
    credits: "2 créditos",
    focus: "Estratégias de estudo, autonomia e aprendizagem ativa.",
    tags: ["aprendizagem", "metodologia"]
  }
];

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
