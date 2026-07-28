import type { Metadata } from "next";
import { clientProjects, profile, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: `Work — ${profile.name}`,
  description: "Open-source projects and client/employer work.",
};

export default function WorkPage() {
  return (
    <main>
      <section id="projects" aria-label="Projects" style={{ paddingTop: "3.5rem" }}>
        <span className="eyebrow">PROJECTS</span>
        <h2>Two things I shipped recently</h2>

        {projects.map((project) => (
          <div className="project" key={project.slug}>
            <div className="project-head">{project.fileHeader}</div>
            <div className="project-body">
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>
              <p>{project.description}</p>
              <div className="stack-line">{project.stack.join(" · ")}</div>
              <div className="project-links">
                <a href={project.codeUrl} target="_blank" rel="noopener">
                  View code
                </a>
                <a href={project.demoUrl} target="_blank" rel="noopener">
                  Live demo ↗
                </a>
              </div>
              <details className="subnote">
                <summary>{project.noteSummary}</summary>
                <p>{project.noteBody}</p>
              </details>
            </div>
          </div>
        ))}
      </section>

      <section id="client-work" aria-label="Client and employer projects">
        <span className="eyebrow">CLIENT &amp; EMPLOYER WORK</span>
        <h2>client-work.log</h2>
        <div className="client-list">
          {clientProjects.map((cp) => (
            <div className="client-item" key={cp.name}>
              <span className="name">{cp.name}</span>
              <div className="meta">
                <div className="role-line">{cp.roleLine}</div>
                <p>{cp.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="client-note">
          Built these on the job, not on my own time — the code isn&rsquo;t mine to hand out, so
          there&rsquo;s nothing to link to here.
        </p>
      </section>
    </main>
  );
}
