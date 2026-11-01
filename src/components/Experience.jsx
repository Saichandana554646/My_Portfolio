import Section from "./Section.jsx";
import { experience } from "../data.js";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {experience.map((e) => (
        <article className="exp" key={e.role}>
          <h3>{e.role}</h3>
          <p className="muted">{e.org}</p>
          <ul className="chips" aria-label="Tech stack">
            {e.tech.map((t) => <li className="chip" key={t}>{t}</li>)}
          </ul>
          <ul className="bullets">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </article>
      ))}
    </Section>
  );
}
