"use client";

import Link from "next/link";

import { disciplines } from "../../../data/courseData";

const videoByDiscipline = {
  "aprendizagem-na-educacao-superior": {
    unidade1: [
      { title: "Vídeo aula 1", url: "https://youtu.be/a87fZZbWq7g" },
      { title: "Vídeo aula 2", url: "https://youtu.be/OG0UmUuQxpk" },
      { title: "Vídeo aula 3", url: "https://youtu.be/F8WO_Qq83HQ" }
    ],
    unidade2: [
      { title: "Vídeo aula 1", url: "https://youtu.be/0tAbxfIqnrk" },
      { title: "Vídeo aula 2", url: "https://youtu.be/3K8z4ChVZyk" },
      { title: "Vídeo aula 3", url: "https://youtu.be/s7kfyXiSJw4" },
      { title: "Vídeo aula 4", url: "https://youtu.be/IKUtPV7i2aY" },
      { title: "Vídeo aula 5", url: "https://youtu.be/PBNVsUdg-Cw" }
    ]
  }
};

export default function VideoAulasPage({ params }) {
  const discipline = disciplines.find((d) => d.slug === params.slug);
  if (!discipline) {
    return (
      <main className="min-h-screen bg-slate-950 py-16">
        <div className="mx-auto w-[90%] max-w-5xl text-slate-200">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Materiais · Video aulas</p>
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

  const label = "Video aulas";
  const sectionEmptyText = "Nenhuma video aula foi enviada ainda. Quando o professor compartilhar, os links aparecerão aqui.";
  const videos = videoByDiscipline[params.slug];
  const hasU1 = !!videos?.unidade1?.length;
  const hasU2 = !!videos?.unidade2?.length;
  const toEmbed = (url) => {
    if (!url) return "";
    const short = url.match(/https?:\/\/youtu\.be\/([\w-]+)/i);
    if (short) return `https://www.youtube.com/embed/${short[1]}`;
    const watch = url.match(/[?&]v=([\w-]+)/i);
    if (watch) return `https://www.youtube.com/embed/${watch[1]}`;
    return url;
  };

  const showPlaceholder = !hasU1 && !hasU2;

  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto w-[90%] max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Materiais · {label}</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{discipline.name}</h1>
            <p className="mt-2 text-sm text-slate-400">Video aulas disponibilizadas para esta disciplina.</p>
          </div>
          <Link
            href={`/materiais`}
            className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Voltar para materiais
          </Link>
        </div>

        {showPlaceholder ? (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-6 text-sm text-slate-300">
            {sectionEmptyText}
          </div>
        ) : (
          <div className={`mt-10 grid gap-6 ${hasU1 && hasU2 ? "md:grid-cols-2" : ""}`}>
            {hasU1 && (
              <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20">
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="text-xl font-semibold text-white">Unidade 1</h2>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</span>
                </div>
                <div className="mt-4 grid gap-4">
                  {videos.unidade1.map((item) => (
                    <article
                      key={item.url}
                      className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/60 shadow-lg shadow-black/30"
                    >
                      <div className="aspect-video w-full bg-slate-900">
                        <iframe
                          title={item.title}
                          src={toEmbed(item.url)}
                          className="h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="px-4 py-3">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-slate-400">{item.url}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {hasU2 && (
              <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20">
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="text-xl font-semibold text-white">Unidade 2</h2>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</span>
                </div>
                <div className="mt-4 grid gap-4">
                  {videos.unidade2.map((item) => (
                    <article
                      key={item.url}
                      className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-950/60 shadow-lg shadow-black/30"
                    >
                      <div className="aspect-video w-full bg-slate-900">
                        <iframe
                          title={item.title}
                          src={toEmbed(item.url)}
                          className="h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="px-4 py-3">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-slate-400">{item.url}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
