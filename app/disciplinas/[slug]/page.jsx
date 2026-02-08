import { notFound } from "next/navigation";
import Link from "next/link";

import DisciplinaClient from "../DisciplinaClient";
import { disciplineDetails, disciplines } from "../../data/courseData";

export default function DisciplinaDetalhePage({ params }) {
  const { slug } = params;
  const discipline = disciplines.find((item) => item.slug === slug);
  const details = disciplineDetails[slug];
  const complementoItems = details?.bibliografiaComplementar ?? [];
  const complementoMeio = Math.ceil(complementoItems.length / 2);
  const complementoCols = complementoItems.length
    ? [complementoItems.slice(0, complementoMeio), complementoItems.slice(complementoMeio)]
    : [];

  if (!discipline) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 py-16">
      <div className="mx-auto w-[90%] max-w-5xl">
        <Link className="text-sm font-semibold text-brand-200 hover:text-brand-100" href="/disciplinas">
          ← Voltar para disciplinas
        </Link>
        <DisciplinaClient
          discipline={discipline}
          details={details}
          complementoCols={complementoCols}
          complementoItems={complementoItems}
        />
      </div>
    </main>
  );
}
