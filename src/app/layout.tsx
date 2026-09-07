import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ondrej Muzik — Software Developer",
  description: "Portfolio of Ondrej Muzik, a software developer based in Bristol.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
