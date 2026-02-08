import Link from "next/link";

import "./globals.css";

export const metadata = {
  title: "Direito Claro — Organização do Curso",
  description: "Seu curso de Direito organizado com clareza e precisão."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
          <div className="mx-auto flex w-[90%] max-w-6xl items-center justify-between py-5">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Direito Claro</span>
            </div>
            <nav className="flex items-center gap-6 text-sm font-semibold text-slate-200">
              <Link className="transition hover:text-white" href="/">
                Início
              </Link>
              <Link className="transition hover:text-white" href="/disciplinas">
                Disciplinas
              </Link>
              <Link className="transition hover:text-white" href="/cronograma">
                Cronograma
              </Link>
              <Link className="transition hover:text-white" href="/glossario">
                Glossário
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
