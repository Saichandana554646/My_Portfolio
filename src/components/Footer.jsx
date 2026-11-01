import { profile } from "../data.js";
import { GithubIcon, LinkedinIcon } from "./Icons.jsx";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{profile.shortName}</p>
          <p className="muted">Entry-level Java Developer, building practical applications.</p>
        </div>
        <div className="hero__social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)"><GithubIcon /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)"><LinkedinIcon /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20} /></a>
        </div>
      </div>
      <p className="container footer__copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}
