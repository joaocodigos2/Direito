import Link from "next/link";
import { disciplines } from "./data/courseData";

export default function Home() {
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
              href="/cronograma"
            >
              Ver aulas de hoje
            </a>
            <a
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
              href="/disciplinas"
            >
              Ir para disciplinas
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-[90%] max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Cronograma</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Veja o cronograma do dia e planeje seus estudos.
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                A página de cronograma mostra automaticamente as aulas do dia atual e a visão
                completa da semana.
              </p>
              <Link
                className="mt-6 inline-flex rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white"
                href="/cronograma"
              >
                Abrir cronograma
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Glossário</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Centralize conceitos e referências jurídicas.
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                Mantenha definições, artigos e links essenciais para consulta rápida em aula.
              </p>
              <Link
                className="mt-6 inline-flex rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-white"
                href="/glossario"
              >
                Ir para o glossário
              </Link>
            </div>
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

      <section className="py-16">
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
          <div className="mt-8">
            <Link className="text-sm font-semibold text-brand-200 hover:text-white" href="/disciplinas">
              Ver todas as disciplinas →
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-10 text-center text-sm text-slate-400">
        Direito Claro · Organização inteligente do curso de Direito
      </footer>
    </main>
  );
}
