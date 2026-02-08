import Link from "next/link";
import { notFound } from "next/navigation";

import { disciplineDetails, disciplines } from "../../data/courseData";

export default function DisciplinaDetalhePage({ params }) {
  const { slug } = params;
  const discipline = disciplines.find((item) => item.slug === slug);
  const details = disciplineDetails[slug];

  if (!discipline) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto w-[90%] max-w-5xl">
        <Link className="text-sm font-semibold text-brand-200 hover:text-brand-100" href="/disciplinas">
          ← Voltar para disciplinas
        </Link>
        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-black/20">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Plano de ensino</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">{details?.title ?? discipline.name}</h1>
          <p className="mt-3 text-sm text-slate-300">{discipline.focus}</p>

          <div className="mt-6 grid gap-4 text-sm text-slate-200 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Informações gerais</p>
              <div className="mt-3 grid gap-2">
                <p>
                  <strong>Campus:</strong> {details?.campus ?? "Em atualização"}
                </p>
                <p>
                  <strong>Modalidade:</strong> {details?.modalidade ?? "Em atualização"}
                </p>
                <p>
                  <strong>Curso:</strong> {details?.curso ?? "Em atualização"}
                </p>
                <p>
                  <strong>Código:</strong> {details?.code ?? "Em atualização"}
                </p>
                <p>
                  <strong>Professor:</strong> {discipline.teacher}
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Créditos e carga horária</p>
              <div className="mt-3 grid gap-2">
                <p>
                  <strong>Ano/Semestre:</strong> {details?.yearSemester ?? "Em atualização"}
                </p>
                <p>
                  <strong>Créditos:</strong> {details?.credits ?? discipline.credits}
                </p>
                <p>
                  <strong>Em sala:</strong> {details?.hours?.sala ?? "Em atualização"}
                </p>
                <p>
                  <strong>Espaços diversificados:</strong> {details?.hours?.diversificados ?? "Em atualização"}
                </p>
                <p>
                  <strong>EAD:</strong> {details?.hours?.ead ?? "Em atualização"}
                </p>
                <p>
                  <strong>Total:</strong> {details?.hours?.total ?? "Em atualização"}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white">Ementa</h2>
            <p className="mt-3 text-sm text-slate-300">{details?.ementa ?? "Conteúdo em atualização."}</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white">Perfil do egresso</h3>
              <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                {(details?.perfilEgresso ?? ["Conteúdo em atualização."]).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white">Competências e habilidades</h3>
              <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                {(details?.competencias ?? ["Conteúdo em atualização."]).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <h3 className="text-lg font-semibold text-white">Objetivos</h3>
            <ul className="mt-4 grid gap-2 text-sm text-slate-300">
              {(details?.objetivos ?? ["Conteúdo em atualização."]).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <h3 className="text-lg font-semibold text-white">Avaliações</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              {(details?.calendario ?? []).length > 0 ? (
                details.calendario.map((item) => (
                  <div key={`${item.date}-${item.activity}`} className="flex flex-col gap-1 border-b border-slate-800 pb-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.date}</span>
                    <p className="text-sm text-slate-200">{item.activity}</p>
                    <p className="text-xs text-slate-400">Peso {item.weight}</p>
                  </div>
                ))
              ) : (
                <p>Calendário em atualização.</p>
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white">Bibliografia básica</h3>
              <ul className="mt-4 grid gap-3 text-sm text-slate-300">
                {(details?.bibliografiaBasica ?? []).length > 0 ? (
                  details.bibliografiaBasica.map((item) => (
                    <li key={item.code}>
                      <p className="font-semibold text-slate-200">{item.code}</p>
                      <p>{item.text}</p>
                      <a className="text-brand-200 hover:text-brand-100" href={item.link} target="_blank" rel="noreferrer">
                        Acessar na biblioteca
                      </a>
                    </li>
                  ))
                ) : (
                  <li>Bibliografia em atualização.</li>
                )}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white">Bibliografia complementar</h3>
              <ul className="mt-4 grid gap-3 text-sm text-slate-300">
                {(details?.bibliografiaComplementar ?? []).length > 0 ? (
                  details.bibliografiaComplementar.map((item) => (
                    <li key={item.code}>
                      <p className="font-semibold text-slate-200">{item.code}</p>
                      <p>{item.text}</p>
                      <a className="text-brand-200 hover:text-brand-100" href={item.link} target="_blank" rel="noreferrer">
                        Acessar na biblioteca
                      </a>
                    </li>
                  ))
                ) : (
                  <li>Bibliografia em atualização.</li>
                )}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <h3 className="text-lg font-semibold text-white">Observações</h3>
            <p className="mt-3 text-sm text-slate-300">{details?.observacoes ?? "Observações em atualização."}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
