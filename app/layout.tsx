import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ripaldi | Fullstack Web Developer",
  description:
    "Portfolio Muhammad Ripaldi, Fullstack Web Developer yang membangun aplikasi web modern, responsif, dan siap produksi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
