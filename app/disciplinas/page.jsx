import Link from "next/link";

import { disciplines } from "../data/courseData";

export default function DisciplinasPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto w-[90%] max-w-6xl">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Disciplinas</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Páginas específicas</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-400">
          Cada disciplina possui estrutura padrão com visão geral, aulas, leituras e resumo
          rápido para facilitar a revisão.
        </p>

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
              <Link
                className="mt-6 inline-flex rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
                href={`/disciplinas/${discipline.slug}`}
              >
                Abrir página da disciplina
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
