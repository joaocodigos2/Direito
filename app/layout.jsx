import "./globals.css";

export const metadata = {
  title: "Direito Claro — Organização do Curso",
  description: "Seu curso de Direito organizado com clareza e precisão."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans">{children}</body>
    </html>
  );
}
