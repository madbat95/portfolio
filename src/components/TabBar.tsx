"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

const tabs = [
  { label: "about.tsx", href: "/#about", id: "about" },
  { label: "skills.json", href: "/#skills", id: "skills" },
  { label: "work/", href: "/work", id: "work" },
  { label: "experience.log", href: "/#experience", id: "experience" },
  { label: "contact.sh", href: "/#contact", id: "contact" },
];

const sectionIds = ["hero", "about", "skills", "experience", "contact"];

export function TabBar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id === "hero" ? null : entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // Same-page section jumps are handled entirely in JS (scrollIntoView +
  // history.replaceState) instead of letting the browser or next/link
  // manage the hash. Letting real anchor navigation set the hash was
  // occasionally leaving stale fragments in place or appending onto them
  // (e.g. "/#skills#experience#experience") rather than replacing cleanly.
  const jumpTo = (id: string | null) => (e: MouseEvent) => {
    e.preventDefault();
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    history.replaceState(null, "", id ? `#${id}` : pathname);
    setActiveSection(id);
  };

  return (
    <nav className="tabbar" aria-label="Section navigation">
      {pathname === "/" ? (
        <a href="#" onClick={jumpTo(null)} className="tab-brand">
          ~/hammad-ahmed
        </a>
      ) : (
        <Link href="/" className="tab-brand">
          ~/hammad-ahmed
        </Link>
      )}
      {tabs.map((tab) => {
        const isActive =
          tab.id === "work" ? pathname === "/work" : pathname === "/" && activeSection === tab.id;
        const className = `tab${isActive ? " active" : ""}`;

        if (tab.id !== "work" && pathname === "/") {
          return (
            <a key={tab.id} href={`#${tab.id}`} onClick={jumpTo(tab.id)} className={className}>
              <span className="dot" />
              {tab.label}
            </a>
          );
        }

        return (
          <Link key={tab.id} href={tab.href} className={className}>
            <span className="dot" />
            {tab.label}
          </Link>
        );
      })}
      <div className="tab-spacer" />
    </nav>
  );
}
