"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { disciplines, disciplineDetails } from "../../data/courseData";

export default function CronogramaDisciplina({ params }) {
  const { slug } = params;
  const detail = disciplineDetails[slug];
  const meta = disciplines.find((d) => d.slug === slug);

  const fold = (value = "") =>
    value
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();

  const [query, setQuery] = useState("");
  const normalized = fold(query.trim());

  const entries = useMemo(() => {
    const base = detail?.conteudos ?? [];
    if (!normalized) return base;
    return base.filter((entry) =>
      fold([entry.title, entry.date, entry.metodo, entry.refs, entry.horasSala, entry.horasEad, entry.horasDiversificados].filter(Boolean).join(" ")).includes(
        normalized
      )
    );
  }, [detail, normalized]);

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

  if (!detail || !detail.conteudos) {
    return (
      <main className="min-h-screen bg-slate-950 py-16">
        <div className="mx-auto w-[90%] max-w-4xl text-slate-200">
          <h1 className="text-3xl font-semibold">Cronograma não encontrado</h1>
          <p className="mt-3 text-sm text-slate-400">Verifique o slug da disciplina ou volte para o cronograma geral.</p>
          <Link
            className="mt-6 inline-flex rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            href="/cronograma"
          >
            Voltar para cronograma
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto w-[90%] max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Conteúdos do semestre</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{detail.title}</h1>
            <p className="text-sm text-slate-400">
              {detail.professor}
              {detail.curso ? ` · ${detail.curso}` : ""}
              {detail.yearSemester ? ` · ${detail.yearSemester}` : ""}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
            <Link
              className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-slate-500 hover:text-white"
              href="/cronograma"
            >
              Voltar
            </Link>
            <Link
              className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-slate-500 hover:text-white"
              href={`/disciplinas/${slug}`}
            >
              Página da disciplina
            </Link>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <div className="wc-search" style={{ position: "static" }}>
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
                aria-label="Buscar no cronograma"
                type="search"
                placeholder="Buscar no cronograma"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="wc-search-input"
              />
            </div>
            <div className="wc-search-nav" role="status" aria-live="polite">
              <span className="wc-search-count">{`${entries.length}/${detail.conteudos.length}`}</span>
            </div>
            <div className="mt-2 flex gap-2 text-xs font-semibold text-slate-200">
              <button
                type="button"
                onClick={() => setQuery("")}
                className="rounded-full border border-slate-700 px-3 py-2 transition hover:border-slate-500 hover:text-white"
              >
                Limpar busca
              </button>
              <a
                href={`/disciplinas/${slug}`}
                className="rounded-full border border-slate-700 px-3 py-2 transition hover:border-slate-500 hover:text-white"
              >
                Ir para disciplina
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          {entries.map((entry) => (
            <article
              key={`${slug}-${entry.date}-${entry.title}`}
              className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 shadow-lg shadow-black/20"
            >
              <div className="flex flex-wrap justify-between gap-3 text-xs font-semibold text-slate-300">
                <span>{highlight(entry.date)}</span>
                {(entry.horasSala || entry.horasEad || entry.horasDiversificados) && (
                  <span className="text-[11px] text-slate-400">
                    {entry.horasSala ? `Sala ${entry.horasSala}` : ""}
                    {entry.horasEad ? `${entry.horasSala ? " · " : ""}EAD ${entry.horasEad}` : ""}
                    {entry.horasDiversificados ? `${entry.horasSala || entry.horasEad ? " · " : ""}Esp. ${entry.horasDiversificados}` : ""}
                  </span>
                )}
              </div>
              <h2 className="mt-2 text-lg font-semibold text-white">{highlight(entry.title)}</h2>
              {entry.metodo && <p className="text-sm text-slate-400">{highlight(entry.metodo)}</p>}
              {entry.refs && <p className="mt-1 text-[12px] text-slate-500">Refs: {highlight(entry.refs)}</p>}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
