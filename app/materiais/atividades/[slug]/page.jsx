"use client";

import Link from "next/link";

import { disciplines } from "../../../data/courseData";

export default function AtividadesPage({ params }) {
  const discipline = disciplines.find((d) => d.slug === params.slug);
  if (!discipline) {
    return (
      <main className="min-h-screen bg-slate-950 py-16">
        <div className="mx-auto w-[90%] max-w-5xl text-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Materiais · Atividades</p>
          <h1 className="mt-2 text-3xl font-semibold">Disciplina não encontrada</h1>
          <p className="mt-2 text-sm text-slate-400">Verifique o endereço ou volte para a lista de materiais.</p>
          <Link
            href={`/materiais`}
            className="mt-6 inline-flex rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Voltar para materiais
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto w-[90%] max-w-5xl">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Materiais · Atividades</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{discipline.name}</h1>
            <p className="mt-2 text-sm text-slate-400">Listas, exercícios e atividades compartilhadas para esta disciplina.</p>
          </div>
          <Link
            href={`/materiais`}
            className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Voltar para materiais
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20">
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold text-white">Unidade 1</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Atividades</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Nenhuma atividade foi enviada ainda. Quando o professor compartilhar, os links aparecerão aqui.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20">
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold text-white">Unidade 2</h2>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Atividades</span>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Nenhuma atividade foi enviada ainda. Quando o professor compartilhar, os links aparecerão aqui.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
