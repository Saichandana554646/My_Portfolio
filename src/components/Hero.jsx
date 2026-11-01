import { Mail } from "lucide-react";
import { profile } from "../data.js";
import { GithubIcon, LinkedinIcon } from "./Icons.jsx";

// Decorative code panel: every value below is taken from the resume.
const code = [
  ["kw", "public class ", "ty", "Developer", "", " {"],
  ["", "  String name = ", "st", '"Atiketi Sai Chandana"', "", ";"],
  ["", "  String degree = ", "st", '"B.Tech, Computer Science"', "", ";"],
  ["", "  String[] skills = { ", "st", '"Java", "Spring Boot", "SQL"', "", " };"],
  ["", "  String goal = ", "st", '"Java Developer"', "", ";"],
  ["", "", "", "", "", ""],
  ["kw", "  boolean ", "fn", "isLearning", "", "() { return true; }"],
  ["", "}", "", "", "", ""],
];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__role">Computer Science Graduate · Java Developer</p>
          <h1 id="hero-title">Hi, I’m {profile.name}.</h1>
          <p className="hero__lead">
            I’m a Computer Science graduate with a strong foundation in Core Java, OOP, and SQL.
            I build Java applications and web projects, and I’m looking for an entry-level
            Java Developer role.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">View My Projects</a>
            <a className="btn btn--ghost" href="#contact">Contact Me</a>
          </div>
          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)"><GithubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)"><LinkedinIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email"><Mail size={20} /></a>
          </div>
        </div>

        <figure className="code" aria-label="Decorative Java snippet summarising my profile">
          <div className="code__bar"><span /><span /><span /><figcaption>Developer.java</figcaption></div>
          <pre aria-hidden="true"><code>
            {code.map((l, i) => (
              <span className="code__line" key={i} style={{ "--i": i }}>
                <span className={l[0]}>{l[1]}</span>
                <span className={l[2]}>{l[3]}</span>
                <span className={l[4]}>{l[5]}</span>
                {"\n"}
              </span>
            ))}
          </code></pre>
        </figure>
      </div>
    </section>
  );
}
