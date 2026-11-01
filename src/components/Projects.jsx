import Section from "./Section.jsx";
import { projects } from "../data.js";
import { GithubIcon } from "./Icons.jsx";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="projects">
        {projects.map((p) => (
          <article className="project" key={p.title}>
            <h3>{p.title}</h3>
            <ul className="chips" aria-label="Tech stack">
              {p.tech.map((t) => <li className="chip" key={t}>{t}</li>)}
            </ul>
            <ul className="bullets">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
            {p.url && (
              <a className="btn btn--ghost btn--sm" href={p.url} target="_blank" rel="noopener noreferrer">
                <GithubIcon width="16" height="16" /> View on GitHub
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
