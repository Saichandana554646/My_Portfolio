import { Award } from "lucide-react";
import Section from "./Section.jsx";
import { certifications } from "../data.js";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="certs">
        {certifications.map((c) => (
          <li className="cert" key={c.name}>
            <Award size={20} aria-hidden="true" />
            <div>
              <h3>{c.name}</h3>
              <p className="muted">{c.issuer}</p>
              <p className="cert__desc">{c.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
