const shortcuts = [
  "Constituição Federal de 1988",
  "Vade Mecum digital",
  "Jurisprudência essencial",
  "Calendário acadêmico"
];

const glossary = [
  {
    term: "Norma jurídica",
    description: "Regra de conduta criada pelo Estado para regular as relações sociais."
  },
  {
    term: "Competência",
    description: "Poder atribuído a órgão jurisdicional para processar e julgar determinada causa."
  },
  {
    term: "Fato jurídico",
    description: "Acontecimento que gera efeitos no mundo do direito, criando, modificando ou extinguindo direitos."
  }
];

export default function GlossarioPage() {
  return (
    <main className="min-h-screen section-light py-16">
      <div className="mx-auto w-[90%] max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Glossário</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Glossário jurídico e atalhos</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          Centralize conceitos-chave, artigos e princípios para consulta rápida durante os estudos.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40">
            <h2 className="text-lg font-semibold">Termos essenciais</h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600">
              {glossary.map((item) => (
                <li key={item.term}>
                  <p className="font-semibold text-slate-800">{item.term}</p>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
            <button className="mt-6 rounded-full border border-slate-200 px-5 py-2 text-xs font-semibold text-slate-700">
              Adicionar termo
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40">
            <h2 className="text-lg font-semibold">Atalhos úteis</h2>
            <ul className="mt-4 grid gap-2 text-sm text-slate-600">
              {shortcuts.map((shortcut) => (
                <li key={shortcut}>{shortcut}</li>
              ))}
            </ul>
            <button className="mt-6 rounded-full border border-slate-200 px-5 py-2 text-xs font-semibold text-slate-700">
              Gerenciar links
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
