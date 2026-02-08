"use client";

import { dayDisplay, dayLabels, scheduleByDay } from "../data/courseData";

export default function CronogramaPage() {
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
      <section className="bg-slate-950 py-16">
        <div className="mx-auto w-[90%] max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Hoje</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Cronograma do dia</h1>
          <p className="mt-3 text-sm text-slate-400">
            {dayDisplay[dayKey]} · {formattedDate}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
        <div className="mx-auto w-[90%] max-w-6xl">
          <h2 className="text-2xl font-semibold">Visão geral da semana</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {Object.entries(scheduleByDay).map(([day, items]) => (
              <div key={day} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900">{dayDisplay[day]}</h3>
                {items.length === 0 ? (
                  <p className="mt-2 text-sm text-slate-500">Sem aulas regulares.</p>
                ) : (
                  <ul className="mt-3 grid gap-2 text-sm text-slate-600">
                    {items.map((item) => (
                      <li key={`${day}-${item.subject}-${item.time}`}>
                        <span className="font-semibold text-slate-800">{item.time}</span> · {item.subject}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
