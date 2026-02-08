import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Direito Claro — Organização do Curso",
  description: "Seu curso de Direito organizado com clareza e precisão."
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cronograma", label: "Cronograma" },
  { href: "/disciplinas", label: "Disciplinas" },
  { href: "/glossario", label: "Glossário" }
];

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex w-[90%] max-w-6xl flex-wrap items-center justify-between gap-4 py-4">
            <Link className="text-sm font-semibold text-white" href="/">
              Direito Claro
            </Link>
            <nav className="flex flex-wrap gap-4 text-sm text-slate-300">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="transition hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
