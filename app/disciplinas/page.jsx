"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { disciplines } from "../data/courseData";

export default function DisciplinasPage() {
  const fold = (value = "") =>
    value
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();

  const [query, setQuery] = useState("");
  const normalized = fold(query.trim());

  const filtered = useMemo(() => {
    if (!normalized) return disciplines;
    return disciplines.filter((d) =>
      fold([d.name, d.focus, d.teacher, d.credits, d.slug].filter(Boolean).join(" ")).includes(normalized)
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
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto w-[90%] max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Disciplinas</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Todas as disciplinas</h1>
            <p className="mt-3 max-w-2xl text-sm text-slate-400">
              Encontre a matéria que precisa e acesse plano de ensino, leituras, resumos e materiais em um só lugar.
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
                aria-label="Buscar disciplina"
                type="search"
                placeholder="Buscar disciplina"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="wc-search-input"
              />
            </div>
            <div className="wc-search-nav" role="status" aria-live="polite">
              <span className="wc-search-count">{`${filtered.length}/${disciplines.length}`}</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <Link
                href="/disciplinas"
                className="rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                Ver todas
              </Link>
              <Link
                href="/cronograma"
                className="rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                Ir para cronograma
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((discipline) => (
            <article key={discipline.name} className="rounded-2xl border border-slate-800 bg-slate-900 px-6 py-6 shadow-lg shadow-black/15">
              <h3 className="text-lg font-semibold text-white">{highlight(discipline.name)}</h3>
              <p className="mt-2 text-sm text-slate-400">{highlight(discipline.focus)}</p>
              <p className="mt-4 text-sm text-slate-200">
                <strong>Professor:</strong> {highlight(discipline.teacher)}
              </p>
              <p className="text-sm text-slate-200">
                <strong>Carga:</strong> {highlight(discipline.credits)}
              </p>
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
