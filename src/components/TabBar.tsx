"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const tabs = [
  { label: "about.tsx", href: "/#about", id: "about" },
  { label: "skills.json", href: "/#skills", id: "skills" },
  { label: "work/", href: "/work", id: "work" },
  { label: "experience.log", href: "/#experience", id: "experience" },
  { label: "contact.sh", href: "/#contact", id: "contact" },
];

export function TabBar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = tabs
      .filter((t) => t.id !== "work")
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav className="tabbar" aria-label="Section navigation">
      <div className="tab-brand">~/hammad-ahmed</div>
      {tabs.map((tab) => {
        const isActive =
          tab.id === "work" ? pathname === "/work" : pathname === "/" && activeSection === tab.id;
        return (
          <Link key={tab.id} href={tab.href} className={`tab${isActive ? " active" : ""}`}>
            <span className="dot" />
            {tab.label}
          </Link>
        );
      })}
      <div className="tab-spacer" />
    </nav>
  );
}
