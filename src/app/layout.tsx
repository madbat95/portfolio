import type { Metadata } from "next";
import { TabBar } from "@/components/TabBar";
import { profile } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: `Portfolio of ${profile.name}, ${profile.title.toLowerCase()}.`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <TabBar />
        {children}
        <footer>
          © {new Date().getFullYear()} {profile.name} · built with Next.js ·{" "}
          <a href={profile.github} target="_blank" rel="noopener">
            source
          </a>
        </footer>
      </body>
    </html>
  );
}
