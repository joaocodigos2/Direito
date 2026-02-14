"use client";

import Link from "next/link";

import { disciplines } from "../../../data/courseData";

const ebookFilesByDiscipline = {
  "aprendizagem-na-educacao-superior": {
    basePaths: {
      unidade1: "/ANES%20-%20Unidade%201/",
      unidade2: "/ANES%20-%20Unidade%202/"
    },
    unidade1: [
      {
        label: "E-Book da unidade 1",
        file: "E-Book da unidade 1 - Aprendizagem na Educação Superior.pdf"
      },
      {
        label: "Ambiente Virtual de Aprendizagem em Arquitetura e Design",
        file: "Ambiente Virtual de Aprendizagem em Arquitetura e Design - Aprendizagem na Educação Superior(EBOOK).pdf"
      },
      {
        label: "Aprendizagem Colaborativa e Web 2.0",
        file: "Aprendizagem Colaborativa e Web 2.0 - Aprendizagem na Educação Superior(EBOOK).pdf"
      },
      {
        label: "Arcabouço conceitual do letramento informacional",
        file: "Arcabouço conceitual do letramento informacional - Aprendizagem na Educação Superior(EBOOK).pdf"
      },
      {
        label: "Letramento Científico",
        file: "Letramento_Cientifico - Aprendizagem na Educação Superior(EBOOK).pdf"
      },
      {
        label: "Cronograma de avaliações",
        file: "Cronograma de avaliações - Aprendizagem na Educação Superior.pdf"
      }
    ],
    unidade2: [
      {
        label: "E-Book da unidade 2",
        file: "E-book da Unidade 2 -Aprendizagem na Educação Superior.pdf"
      },
      {
        label: "As sete teses equivocadas sobre conhecimento científico (reflexões epistemológicas)",
        file: "As sete teses equivocadas sobre conhecimento científico reflexões epistemológicas -Aprendizagem na Educação Superior.pdf"
      },
      {
        label: "Gêneros acadêmicos: práticas de interpretação e produção de textos",
        file: "Gêneros acadêmicos práticas de interpretação e produção de textos - Aprendizagem na Educação Superior.pdf"
      },
      {
        label: "Para começar um projeto de pesquisa",
        file: "Para começar um projeto de pesquisa - Aprendizagem na Educação Superior.pdf"
      }
    ]
  }
};

export default function EbooksPage({ params }) {
  const discipline = disciplines.find((d) => d.slug === params.slug);
  if (!discipline) {
    return (
      <main className="min-h-screen bg-slate-950 py-16">
        <div className="mx-auto w-[90%] max-w-5xl text-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Materiais · Ebooks</p>
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

  const files = ebookFilesByDiscipline[params.slug];
  const toHref = (file, unidade) => {
    const basePath = files?.basePaths?.[unidade] ?? "/materiais-pagina/";
    return `${basePath}${encodeURIComponent(file)}`;
  };

  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto w-[90%] max-w-5xl">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Materiais · Ebooks</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{discipline.name}</h1>
            <p className="mt-2 text-sm text-slate-400">
              {files ? "Ebooks organizados por unidade." : "Nenhum ebook cadastrado ainda para esta disciplina."}
            </p>
          </div>
          <Link
            href={`/materiais`}
            className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Voltar para materiais
          </Link>
        </div>

        {!files && (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-6 text-sm text-slate-300">
            Nenhum ebook foi enviado ainda. Quando o professor compartilhar, os links para download aparecerão aqui.
          </div>
        )}

        {files && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-xl font-semibold text-white">Unidade 1</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Ebooks</span>
              </div>
              {files.unidade1 && files.unidade1.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {files.unidade1.map((item) => (
                    <li
                      key={item.file}
                      className="flex flex-col gap-3 rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 shadow-md shadow-black/10 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                        <p className="text-xs text-slate-700">{item.file}</p>
                      </div>
                      <Link
                        href={toHref(item.file, "unidade1")}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-3 py-2 text-xs font-semibold text-white shadow transition hover:brightness-110"
                      >
                        Abrir
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-slate-400">Nenhum ebook enviado para esta unidade.</p>
              )}
            </section>

            <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-xl font-semibold text-white">Unidade 2</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Ebooks</span>
              </div>
              {files.unidade2 && files.unidade2.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {files.unidade2.map((item) => (
                    <li
                      key={item.file}
                      className="flex flex-col gap-3 rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 shadow-md shadow-black/10 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                        <p className="text-xs text-slate-700">{item.file}</p>
                      </div>
                      <Link
                        href={toHref(item.file, "unidade2")}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-gradient-to-r from-rose-500 to-orange-400 px-3 py-2 text-xs font-semibold text-white shadow transition hover:brightness-110"
                      >
                        Abrir
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-slate-400">Nenhum ebook enviado para esta unidade.</p>
              )}
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
