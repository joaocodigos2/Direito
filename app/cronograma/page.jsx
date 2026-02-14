"use client";

import { useMemo, useState } from "react";

import { disciplines, disciplineDetails } from "../data/courseData";

export default function CronogramaPage() {
  const fold = (value = "") =>
    value
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();

  const [query, setQuery] = useState("");
  const normalized = fold(query.trim());

  const rows = useMemo(() => {
    const base = disciplines
      .map((d) => ({ meta: d, detail: disciplineDetails[d.slug] }))
      .filter((item) => item.detail && item.detail.conteudos);
    if (!normalized) return base;
    return base.filter(({ meta, detail }) =>
      fold([detail.title, detail.professor, detail.curso, detail.yearSemester, meta.slug].filter(Boolean).join(" ")).includes(
        normalized
      )
    );
  }, [normalized]);

  const highlight = (text) => {
    if (!normalized || !text) return text;
    const src = text.toString();
    const folded = fold(src);
    const q = normalized;
    const hits = [];
    let start = 0;
    while (true) {
      const idx = folded.indexOf(q, start);
      if (idx === -1) break;
      hits.push([idx, idx + q.length]);
      start = idx + q.length;
    }
    if (!hits.length) return src;
    const parts = [];
    let cursor = 0;
    hits.forEach(([s, e], i) => {
      if (cursor < s) parts.push(<span key={`p-${i}-pre`}>{src.slice(cursor, s)}</span>);
      parts.push(
        <span key={`h-${i}`} className="wc-search-hit">
          {src.slice(s, e)}
        </span>
      );
      cursor = e;
    });
    if (cursor < src.length) parts.push(<span key="tail">{src.slice(cursor)}</span>);
    return parts;
  };

  return (
    <main className="min-h-screen">
      <section className="bg-slate-950 py-16">
        <div className="mx-auto w-[90%] max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Conteúdos do semestre</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Cronograma por disciplina</h2>
              <p className="mt-2 text-sm text-slate-400">
                Veja o conteúdo planejado em sala, EAD e espaços diversificados de cada matéria.
              </p>
            </div>
            <div className="wc-search w-full md:w-[340px] lg:w-[380px]">
              <div className="wc-search-box">
                <svg
                  className="wc-search-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
                </svg>
                <input
                  aria-label="Buscar cronograma"
                  type="search"
                  placeholder="Buscar cronograma"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="wc-search-input"
                />
              </div>
              <div className="wc-search-nav" role="status" aria-live="polite">
                <span className="wc-search-count">{`${rows.length}/${disciplines.length}`}</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <a
                  href="/cronograma"
                  className="rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
                >
                  Ver todos
                </a>
                <a
                  href="/disciplinas"
                  className="rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
                >
                  Ir para disciplinas
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {rows.map(({ meta, detail }) => (
              <article
                key={meta.slug}
                className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-6 shadow-lg shadow-black/20"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{highlight(detail.curso)}</p>
                    <h3 className="text-lg font-semibold text-white">{highlight(detail.title)}</h3>
                    <p className="text-sm text-slate-400">{highlight(detail.professor)}</p>
                  </div>
                  <div className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200">
                    {highlight(detail.yearSemester)}
                  </div>
                </div>

                <a
                  className="mt-4 inline-flex rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
                  href={`/cronograma/${meta.slug}`}
                >
                  Ver cronograma da disciplina
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
