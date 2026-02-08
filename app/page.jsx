"use client";

const scheduleByDay = {
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

const disciplines = [
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

const dayLabels = {
  0: "domingo",
  1: "segunda",
  2: "terca",
  3: "quarta",
  4: "quinta",
  5: "sexta",
  6: "sabado"
};

const dayDisplay = {
  domingo: "Domingo",
  segunda: "Segunda-feira",
  terca: "Terça-feira",
  quarta: "Quarta-feira",
  quinta: "Quinta-feira",
  sexta: "Sexta-feira",
  sabado: "Sábado"
};

export default function Home() {
  const today = new Date();
  const dayKey = dayLabels[today.getDay()];
  const schedule = scheduleByDay[dayKey];
  const formattedDate = today.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  return (
    <main className="min-h-screen">
      <section className="bg-slate-950 bg-[radial-gradient(circle_at_top,_rgba(124,92,255,0.25),_transparent_55%)] py-20">
        <div className="mx-auto flex w-[90%] max-w-6xl flex-col gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Projeto Direito Claro</p>
            <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
              Seu curso de Direito, organizado com clareza.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Materiais por disciplina, cronograma inteligente e estrutura objetiva para revisar
              com precisão.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5"
              href="#cronograma"
            >
              Ver aulas de hoje
            </a>
            <a
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
              href="#disciplinas"
            >
              Ir para disciplinas
            </a>
          </div>
        </div>
      </section>

      <section id="cronograma" className="py-16">
        <div className="mx-auto w-[90%] max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Hoje</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Aulas do dia</h2>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-4 text-sm font-semibold text-slate-100">
              {dayDisplay[dayKey]} · {formattedDate}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {schedule.length === 0 ? (
              <div className="rounded-2xl border border-brand-500/30 bg-slate-900 px-6 py-6">
                <h3 className="text-lg font-semibold text-white">Sem aulas regulares hoje</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Aproveite para revisar, organizar resumos e atualizar o glossário.
                </p>
              </div>
            ) : (
              schedule.map((item) => (
                <div
                  key={`${item.subject}-${item.time}`}
                  className="rounded-2xl border border-brand-500/20 bg-slate-900 px-6 py-6 shadow-lg shadow-black/20"
                >
                  <h3 className="text-lg font-semibold text-white">{item.subject}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.time}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="section-light py-16">
        <div className="mx-auto grid w-[90%] max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Estrutura</p>
            <h2 className="mt-2 text-3xl font-semibold">Como o projeto está organizado</h2>
            <p className="mt-4 text-base text-slate-600">
              Cada disciplina possui um template padrão com visão geral, conteúdo por aula,
              leituras, exercícios e um resumo rápido. Assim, todo o conteúdo fica consistente
              e fácil de localizar.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40">
            <h3 className="text-lg font-semibold">Template por disciplina</h3>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              <li>Visão geral + ementa resumida</li>
              <li>Conteúdo por aula com conceitos-chave</li>
              <li>Fundamentos legais essenciais</li>
              <li>Referências e leituras recomendadas</li>
              <li>Resumo rápido para revisão</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="disciplinas" className="py-16">
        <div className="mx-auto w-[90%] max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Disciplinas</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Páginas específicas</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {disciplines.map((discipline) => (
              <article key={discipline.name} className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-6">
                <h3 className="text-lg font-semibold text-white">{discipline.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{discipline.focus}</p>
                <p className="mt-4 text-sm text-slate-200">
                  <strong>Professor:</strong> {discipline.teacher}
                </p>
                <p className="text-sm text-slate-200">
                  <strong>Carga:</strong> {discipline.credits}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {discipline.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light py-16">
        <div className="mx-auto grid w-[90%] max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40">
            <h3 className="text-lg font-semibold">Glossário rápido</h3>
            <p className="mt-3 text-sm text-slate-600">
              Centralize conceitos-chave, artigos e princípios para consulta rápida.
            </p>
            <button className="mt-6 rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700">
              Adicionar termos
            </button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40">
            <h3 className="text-lg font-semibold">Atalhos úteis</h3>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              <li>Constituição Federal de 1988</li>
              <li>Vade Mecum digital</li>
              <li>Jurisprudência essencial</li>
            </ul>
            <button className="mt-6 rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700">
              Gerenciar links
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-10 text-center text-sm text-slate-400">
        Direito Claro · Organização inteligente do curso de Direito
      </footer>
    </main>
  );
}
