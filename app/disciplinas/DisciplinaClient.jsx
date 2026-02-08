"use client";

import { useEffect, useMemo, useState } from "react";

export default function DisciplinaClient({ discipline, details, complementoCols }) {
  const withFallback = (value, fallback = "") => (value ? value : fallback);
  const fold = (value = "") =>
    value
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase();

  const searchableBlocks = useMemo(() => {
    const blocks = [
      {
        id: "cabecalho",
        label: "Cabeçalho",
        text: [withFallback(details?.title, discipline.name), discipline.focus]
          .filter(Boolean)
          .join(" ")
      },
      {
        id: "informacoes-gerais",
        label: "Informações gerais",
        text: [
          withFallback(details?.campus, "Em atualização"),
          withFallback(details?.modalidade, "Em atualização"),
          withFallback(details?.curso, "Em atualização"),
          withFallback(details?.code, "Em atualização"),
          discipline.teacher
        ]
          .filter(Boolean)
          .join(" ")
      },
      {
        id: "carga-horaria",
        label: "Créditos e carga horária",
        text: [
          withFallback(details?.yearSemester, "Em atualização"),
          withFallback(details?.credits ?? discipline.credits, "Em atualização"),
          withFallback(details?.hours?.sala, "Em atualização"),
          withFallback(details?.hours?.diversificados, "Em atualização"),
          withFallback(details?.hours?.ead, "Em atualização"),
          withFallback(details?.hours?.total, "Em atualização")
        ]
          .filter(Boolean)
          .join(" ")
      },
      {
        id: "ementa",
        label: "Ementa",
        text: withFallback(details?.ementa ?? discipline.focus, "Conteúdo em atualização.")
      },
      {
        id: "perfil-egresso",
        label: "Perfil do egresso",
        text: (details?.perfilEgresso ?? ["Conteúdo em atualização."]).join(" ")
      },
      {
        id: "competencias",
        label: "Competências",
        text: (details?.competencias ?? ["Conteúdo em atualização."]).join(" ")
      },
      {
        id: "objetivos",
        label: "Objetivos",
        text: (details?.objetivos ?? ["Conteúdo em atualização."]).join(" ")
      },
      {
        id: "avaliacoes",
        label: "Avaliações",
        text:
          (details?.calendario ?? []).map((item) => `${item.date} ${item.activity} Peso ${item.weight}`).join(" ") ||
          "Calendário em atualização."
      },
      {
        id: "bibliografia-basica",
        label: "Bibliografia básica",
        text:
          (details?.bibliografiaBasica ?? []).map((i) => `${i.code} ${i.text} Acessar na biblioteca`).join(" ") ||
          "Bibliografia em atualização."
      },
      {
        id: "bibliografia-complementar",
        label: "Bibliografia complementar",
        text:
          (details?.bibliografiaComplementar ?? []).map((i) => `${i.code} ${i.text} Acessar na biblioteca`).join(" ") ||
          "Bibliografia em atualização."
      },
      {
        id: "observacoes",
        label: "Observações",
        text: withFallback(details?.observacoes, "Observações em atualização.")
      }
    ];

    // Inclui o rótulo no texto pesquisável para que termos como “Bibliografia” também sejam encontrados.
    return blocks.map((block) => ({
      ...block,
      text: [block.label, block.text].filter(Boolean).join(" "),
      searchText: fold([block.label, block.text].filter(Boolean).join(" "))
    }));
  }, [details, discipline]);

  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim();
  const normalizedQueryFolded = fold(normalizedQuery);

  const matches = useMemo(() => {
    if (!normalizedQueryFolded) return [];
    return searchableBlocks.filter((block) => block.searchText.includes(normalizedQueryFolded));
  }, [normalizedQueryFolded, searchableBlocks]);

  const [cursor, setCursor] = useState(0);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  };

  const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const highlight = (text) => {
    if (!normalizedQueryFolded || !text) return text;
    const foldedText = fold(text);
    const q = normalizedQueryFolded;

    const hits = [];
    let startIndex = 0;
    while (true) {
      const index = foldedText.indexOf(q, startIndex);
      if (index === -1) break;
      hits.push([index, index + q.length]);
      startIndex = index + q.length;
    }

    if (hits.length === 0) return text;

    const parts = [];
    let cursor = 0;
    hits.forEach(([start, end], idx) => {
      if (cursor < start) {
        parts.push(<span key={`part-${idx}-pre`}>{text.slice(cursor, start)}</span>);
      }
      parts.push(
        <span key={`hit-${idx}`} className="wc-search-hit">
          {text.slice(start, end)}
        </span>
      );
      cursor = end;
    });

    if (cursor < text.length) {
      parts.push(<span key="tail">{text.slice(cursor)}</span>);
    }

    return parts;
  };

  useEffect(() => {
    setCursor(0);
  }, [normalizedQuery]);

  useEffect(() => {
    const target = matches[cursor];
    if (!target) return;
    const el = document.getElementById(target.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }, [cursor, matches]);

  return (
    <div className="relative mt-6 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-black/20">
      <div
        className="wc-search"
        style={{
          top: "12px",
          right: "12px",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "10px"
        }}
      >
        <div className="flex flex-wrap items-center justify-end gap-2">
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
              aria-label="Buscar palavra-chave nesta disciplina"
              type="search"
              placeholder="Buscar palavra-chave"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="wc-search-input"
            />
          </div>
          <div className="wc-search-nav" role="status" aria-live="polite">
            <span className="wc-search-count">{matches.length > 0 ? `${cursor + 1}/${matches.length}` : "0/0"}</span>
            <button
              type="button"
              className="wc-search-btn"
              onClick={() => setCursor((prev) => (prev - 1 + matches.length) % matches.length)}
              disabled={matches.length === 0}
              aria-label="Resultado anterior"
            >
              ←
            </button>
            <button
              type="button"
              className="wc-search-btn"
              onClick={() => setCursor((prev) => (prev + 1) % matches.length)}
              disabled={matches.length === 0}
              aria-label="Próximo resultado"
            >
              →
            </button>
          </div>
        </div>
        <div className="flex gap-2 text-xs font-semibold text-slate-200 justify-end">
          <button
            type="button"
            onClick={() => scrollToId("bibliografia-basica")}
            className="rounded-full border border-slate-700 px-3 py-2 transition hover:border-slate-500 hover:text-white"
          >
            Ir para bibliografias
          </button>
          <button
            type="button"
            onClick={() => scrollToId("avaliacoes")}
            className="rounded-full border border-slate-700 px-3 py-2 transition hover:border-slate-500 hover:text-white"
          >
            Ir para provas
          </button>
        </div>
      </div>
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Plano de ensino</p>
      <h1 className="mt-2 text-3xl font-semibold text-white">{details?.title ?? discipline.name}</h1>
      <p className="mt-3 text-sm text-slate-300">{highlight(discipline.focus)}</p>

      <div className="mt-6 grid gap-4 text-sm text-slate-200 md:grid-cols-2">
        <div id="informacoes-gerais" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Informações gerais</p>
          <div className="mt-3 grid gap-2">
            <p>
              <strong>Campus:</strong> {highlight(details?.campus ?? "Em atualização")}
            </p>
            <p>
              <strong>Modalidade:</strong> {highlight(details?.modalidade ?? "Em atualização")}
            </p>
            <p>
              <strong>Curso:</strong> {highlight(details?.curso ?? "Em atualização")}
            </p>
            <p>
              <strong>Código:</strong> {highlight(details?.code ?? "Em atualização")}
            </p>
            <p>
              <strong>Professor:</strong> {highlight(discipline.teacher)}
            </p>
          </div>
        </div>
        <div id="carga-horaria" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Créditos e carga horária</p>
          <div className="mt-3 grid gap-2">
            <p>
              <strong>Ano/Semestre:</strong> {highlight(details?.yearSemester ?? "Em atualização")}
            </p>
            <p>
              <strong>Créditos:</strong> {highlight(details?.credits ?? discipline.credits)}
            </p>
            <p>
              <strong>Em sala:</strong> {highlight(details?.hours?.sala ?? "Em atualização")}
            </p>
            <p>
              <strong>Espaços diversificados:</strong> {highlight(details?.hours?.diversificados ?? "Em atualização")}
            </p>
            <p>
              <strong>EAD:</strong> {highlight(details?.hours?.ead ?? "Em atualização")}
            </p>
            <p>
              <strong>Total:</strong> {highlight(details?.hours?.total ?? "Em atualização")}
            </p>
          </div>
        </div>
      </div>

      <div id="ementa" className="mt-8">
        <h2 className="text-xl font-semibold text-white">Ementa</h2>
        <p className="mt-3 text-sm text-slate-300">{highlight(details?.ementa ?? "Conteúdo em atualização.")}</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div id="perfil-egresso" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
          <h3 className="text-lg font-semibold text-white">Perfil do egresso</h3>
          <ul className="mt-4 grid gap-2 text-sm text-slate-300">
            {(details?.perfilEgresso ?? ["Conteúdo em atualização."]).map((item) => (
              <li key={item}>• {highlight(item)}</li>
            ))}
          </ul>
        </div>
        <div id="competencias" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
          <h3 className="text-lg font-semibold text-white">Competências e habilidades</h3>
          <ul className="mt-4 grid gap-2 text-sm text-slate-300">
            {(details?.competencias ?? ["Conteúdo em atualização."]).map((item) => (
              <li key={item}>• {highlight(item)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div id="objetivos" className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
        <h3 className="text-lg font-semibold text-white">Objetivos</h3>
        <ul className="mt-4 grid gap-2 text-sm text-slate-300">
          {(details?.objetivos ?? ["Conteúdo em atualização."]).map((item) => (
            <li key={item}>• {highlight(item)}</li>
          ))}
        </ul>
      </div>

      <div id="avaliacoes" className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
        <h3 className="text-lg font-semibold text-white">Avaliações</h3>
        <div className="mt-4 grid gap-3 text-sm text-slate-300">
          {(details?.calendario ?? []).length > 0 ? (
            details.calendario.map((item) => (
              <div key={`${item.date}-${item.activity}`} className="flex flex-col gap-1 border-b border-slate-800 pb-3">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{highlight(item.date)}</span>
                <p className="text-sm text-slate-200">{highlight(item.activity)}</p>
                <p className="text-xs text-slate-400">Peso {highlight(item.weight)}</p>
              </div>
            ))
          ) : (
            <p>Calendário em atualização.</p>
          )}
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div id="bibliografia-basica" className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
          <h3 className="text-lg font-semibold text-white">Bibliografia básica</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300">
            {(details?.bibliografiaBasica ?? []).length > 0 ? (
              details.bibliografiaBasica.map((item) => (
                <li key={item.code} className="break-words">
                  <p className="font-semibold text-slate-200">{highlight(item.code)}</p>
                  <p className="whitespace-pre-line break-all">{highlight(item.text)}</p>
                  <a
                    className="mt-1 block break-all text-brand-200 hover:text-brand-100"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {highlight("Acessar na biblioteca")}
                  </a>
                </li>
              ))
            ) : (
              <li>Bibliografia em atualização.</li>
            )}
          </ul>
        </div>
        {complementoCols.length > 0 ? (
          complementoCols.map((colItems, idx) => (
            <div
              key={`comp-col-${idx}`}
              id={idx === 0 ? "bibliografia-complementar" : undefined}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
            >
              <h3 className="text-lg font-semibold text-white">Bibliografia complementar</h3>
              <ul className="mt-4 grid gap-3 text-sm text-slate-300">
                {colItems.length > 0 ? (
                  colItems.map((item) => (
                    <li key={item.code} className="break-words">
                      <p className="font-semibold text-slate-200">{highlight(item.code)}</p>
                      <p className="whitespace-pre-line break-all">{highlight(item.text)}</p>
                      <a
                        className="mt-1 block break-all text-brand-200 hover:text-brand-100"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {highlight("Acessar na biblioteca")}
                      </a>
                    </li>
                  ))
                ) : (
                  <li>Bibliografia em atualização.</li>
                )}
              </ul>
            </div>
          ))
        ) : (
          <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
            <h3 className="text-lg font-semibold text-white">Bibliografia complementar</h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-300">
              <li>Bibliografia em atualização.</li>
            </ul>
          </div>
        )}
      </div>

      <div id="observacoes" className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
        <h3 className="text-lg font-semibold text-white">Observações</h3>
        <p className="mt-3 text-sm text-slate-300">{highlight(details?.observacoes ?? "Observações em atualização.")}</p>
      </div>
    </div>
  );
}
