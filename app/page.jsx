"use client";

import { dayDisplay, dayLabels, scheduleByDay } from "./data/courseData";

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
              href="/disciplinas"
            >
              Ver páginas de disciplinas
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

      <footer className="border-t border-slate-800 py-10 text-center text-sm text-slate-400">
        Direito Claro · Organização inteligente do curso de Direito
      </footer>
    </main>
  );
}
