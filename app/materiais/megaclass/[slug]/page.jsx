"use client";

import Link from "next/link";
import { useState } from "react";

import { disciplines } from "../../../data/courseData";

const megaClassByDiscipline = {
  "aprendizagem-na-educacao-superior": {
    unidade1: [
      { title: "MegaClass 1", url: "https://youtu.be/Y6x0H59F-8Y", availableAt: "02 a 06/Fev" },
      { title: "MegaClass 2", url: "https://youtu.be/g86DsN9OGQs", availableAt: "09 a 13/Fev" },
      { title: "MegaClass 3", url: "https://youtu.be/pGX34HKB4Hk", availableAt: "23/Fev a 27/Fev" },
      { title: "MegaClass 4", url: "https://youtu.be/YS9QLEBmwm0", availableAt: "02 a 06/Mar" },
      { title: "MegaClass 5", url: "https://youtu.be/pn6LvEP-YQ8", availableAt: "09 a 13/Mar" },
      { title: "MegaClass 6", url: "https://youtu.be/6mtC0a5ghug", availableAt: "17 a 21/Mar" },
      { title: "MegaClass 7", url: "https://youtu.be/P0YyvhqVKOA", availableAt: "23 a 27/Mar" }
    ],
    unidade2: [
      { title: "MegaClass 1", url: "https://youtu.be/4IJaLiYQ9mY", availableAt: "13 a 17/Abr" },
      { title: "MegaClass 2", url: "https://youtu.be/QQfJhANXxUw", availableAt: "20 a 24/Abr" },
      { title: "MegaClass 3", url: "https://youtu.be/ZqiFH5pUFfs", availableAt: "27/Abr a 01/Mai" },
      { title: "MegaClass 4", url: "https://youtu.be/vqHuqQYOlqk", availableAt: "04 a 08/Mai" },
      { title: "MegaClass 5", url: "https://youtu.be/OC-9ZAoYcTA", availableAt: "11 a 15/Mai" },
      { title: "MegaClass 6", url: "https://youtu.be/3et10KRykRw", availableAt: "18 a 22/Mai" }
    ]
  }
};

export default function MegaClassPage({ params }) {
  const [infoMode, setInfoMode] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});
  const discipline = disciplines.find((d) => d.slug === params.slug);
  const megaClass = megaClassByDiscipline[params.slug] || {};

  const normalizeUnitLabel = (unitKey) => {
    if (unitKey === "unidade1") return "Unidade 1";
    if (unitKey === "unidade2") return "Unidade 2";
    return unitKey;
  };

  const youtubeToEmbed = (url) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes("youtu.be")) {
        return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
      }
      if (parsed.hostname.includes("youtube.com")) {
        const id = parsed.searchParams.get("v");
        if (id) return `https://www.youtube.com/embed/${id}`;
      }
    } catch (err) {
      return url;
    }
    return url;
  };

  const sections = ["unidade1", "unidade2"]
    .map((key) => ({ key, items: megaClass[key] || [] }))
    .filter((section) => section.items.length > 0);

  const toggleCard = (id) => {
    if (!infoMode) return;
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!discipline) {
    return (
      <main className="min-h-screen bg-slate-950 py-16">
        <div className="mx-auto w-[90%] max-w-5xl text-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Materiais · MegaClass</p>
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
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Materiais · MegaClass</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{discipline.name}</h1>
            <p className="mt-2 text-sm text-slate-400">Conteúdos e materiais da MegaClass desta disciplina.</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Link
              href={`/materiais`}
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Voltar para materiais
            </Link>
            <button
              type="button"
              onClick={() => setInfoMode((prev) => !prev)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ease-out shadow-sm ${
                infoMode
                  ? "bg-sky-200 text-slate-900 ring-1 ring-sky-300"
                  : "border border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white"
              }`}
            >
              <span
                className={`flex h-4 w-8 items-center rounded-full border transition-all duration-300 ease-out ${
                  infoMode ? "border-sky-500 bg-sky-400/80" : "border-slate-500 bg-slate-700"
                }`}
              >
                <span
                  className={`h-3 w-3 rounded-full bg-white shadow transition-all duration-300 ease-out ${
                    infoMode ? "translate-x-4" : "translate-x-1"
                  }`}
                />
              </span>
              {infoMode ? "Mais informações: ligado" : "Mais informações"}
            </button>
            <p className="text-[11px] text-slate-500">Quando ligado, clique no card para ver a data prevista.</p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.length === 0 ? (
            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-200 shadow-lg shadow-black/20">
              <h2 className="text-xl font-semibold text-white">MegaClass em breve</h2>
              <p className="mt-3 text-sm text-slate-400">
                Nenhum material de MegaClass foi enviado ainda. Assim que forem liberados, eles aparecerão aqui.
              </p>
            </section>
          ) : (
            sections.map((section) => (
              <section
                key={section.key}
                className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="text-xl font-semibold text-white">{normalizeUnitLabel(section.key)}</h2>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500">MegaClass</span>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <article
                      key={item.url}
                      className={`relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 ${
                        infoMode ? "cursor-pointer" : ""
                      }`}
                      onClick={() => toggleCard(item.url)}
                    >
                      <div
                        className={`relative h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                          infoMode && flippedCards[item.url] ? "[transform:rotateY(180deg)]" : ""
                        }`}
                      >
                        <div className="h-full [backface-visibility:hidden]">
                          <div className="aspect-video w-full max-h-[220px] overflow-hidden bg-slate-900">
                            <iframe
                              src={youtubeToEmbed(item.url)}
                              title={item.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="h-full w-full"
                            />
                          </div>
                          <div className="flex items-center justify-between px-4 py-3 text-sm text-slate-200">
                            <span className="font-semibold">{item.title}</span>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-semibold text-sky-400 transition hover:text-sky-300"
                            >
                              Abrir
                            </a>
                          </div>
                        </div>

                        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950 p-4 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Data prevista</p>
                          <p className="text-base font-semibold">
                            {item.availableAt || "Em breve"}
                          </p>
                          <p className="text-[11px] text-slate-500">Clique novamente para voltar</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
