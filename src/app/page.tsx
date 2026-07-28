import Link from "next/link";
import { aboutParagraphs, experience, heroLine, profile, skillGroups } from "@/lib/content";

export default function Home() {
  return (
    <main>
      <section className="hero" id="hero" aria-label="Introduction">
        <div className="terminal">
          <div className="terminal-bar">
            <span className="status" />
            zsh — hammad-ahmed — 80×24
          </div>
          <div className="terminal-body">
            <div className="prompt-line">
              <span className="sigil">➜</span> whoami
            </div>
            <div className="output">
              <span className="lead">
                {profile.name}
                <span className="cursor" />
              </span>
              <span className="sub">{heroLine}</span>
            </div>
            <div className="prompt-line">
              <span className="sigil">➜</span> ls projects/ --shipped
            </div>
            <div className="output" style={{ color: "var(--text-dim)", fontSize: "0.9rem" }}>
              chef-claude/&nbsp;&nbsp;&nbsp;whiteboard/
            </div>
          </div>
        </div>
        <div className="hero-links">
          <a className="btn primary" href={profile.resumeUrl}>
            Download résumé
          </a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener">
            GitHub ↗
          </a>
          <a className="btn" href="#contact">
            Get in touch
          </a>
        </div>
      </section>

      <section id="about" aria-label="About">
        <span className="eyebrow">ABOUT</span>
        <h2>A little context</h2>
        <div className="about-block">
          {aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section id="skills" aria-label="Skills">
        <span className="eyebrow">SKILLS</span>
        <h2>skills.json</h2>
        <div className="import-grid">
          {skillGroups.map((group) => (
            <div className="import-card" key={group.file}>
              <span className="filename">
                {group.file}
                <span className="ext">.{group.ext}</span>
              </span>
              <div className="chip-row">{group.items.join(" · ")}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" aria-label="Experience">
        <span className="eyebrow">EXPERIENCE</span>
        <h2>experience.log</h2>
        <div className="git-log">
          {experience.map((entry) => (
            <div className="commit" key={entry.hash}>
              <span className="commit-date">{entry.dateRange}</span>
              <h3>{entry.role}</h3>
              <div className="role">{entry.company}</div>
              <p className="desc">{entry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" aria-label="Contact">
        <span className="eyebrow">CONTACT</span>
        <h2>contact.sh</h2>
        <div className="contact-terminal">
          <div className="contact-row">
            <span className="flag">--email</span>{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="contact-row">
            <span className="flag">--linkedin</span>{" "}
            <a href={profile.linkedin} target="_blank" rel="noopener">
              linkedin.com/in/hammad23
            </a>
          </div>
          <div className="contact-row">
            <span className="flag">--github</span>{" "}
            <a href={profile.github} target="_blank" rel="noopener">
              github.com/madbat95
            </a>
          </div>
          <div className="contact-row">
            <span className="flag">--resume</span> <Link href={profile.resumeUrl}>download-cv.pdf</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
