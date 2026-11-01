import Section from "./Section.jsx";
import { education } from "../data.js";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="timeline">
        {[...education].reverse().map((e) => (
          <li key={e.school}>
            <p className="timeline__years">{e.years}</p>
            <div className="timeline__body">
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
              <p className="muted">CGPA: {e.cgpa}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
