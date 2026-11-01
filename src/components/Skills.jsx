import Section from "./Section.jsx";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group} className={`skill-card ${g.featured ? "skill-card--java" : ""}`}>
            <h3>{g.group}</h3>
            <ul className="chips">
              {g.items.map((s) => <li key={s} className={s === "Java" ? "chip chip--java" : "chip"}>{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
