import Link from "next/link";
import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(() => import("./components/ThemeSwitch").then((m) => m.ThemeSwitch), { ssr: false });
import "./globals.css";

export const metadata = {
  title: "Direito Claro — Organização do Curso",
  description: "Seu curso de Direito organizado com clareza e precisão.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  const themeScript = `(() => {
    try {
      const key = "theme-preference";
      const stored = window.localStorage.getItem(key);
      const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
      const theme = stored === "light" || stored === "dark" ? stored : prefersLight ? "light" : "dark";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (e) {
      document.documentElement.dataset.theme = "dark";
      document.documentElement.style.colorScheme = "dark";
    }
  })();`;

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur">
          <div className="mx-auto flex w-[90%] max-w-6xl items-center justify-between py-5">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Direito Claro</span>
            </div>
            <div className="flex items-center gap-6">
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
              <ThemeSwitch />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
