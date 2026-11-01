import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Section from "./Section.jsx";
import { profile } from "../data.js";
import { GithubIcon, LinkedinIcon } from "./Icons.jsx";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend: opens the visitor's email app with the message pre-filled.
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\nFrom: ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" title="Contact">
      <div className="contact">
        <ul className="contact__list">
          <li><Mail size={18} aria-hidden="true" /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><Phone size={18} aria-hidden="true" /><a href={profile.phoneHref}>{profile.phone}</a></li>
          <li><MapPin size={18} aria-hidden="true" /><span>{profile.location}</span></li>
          <li><LinkedinIcon width="18" height="18" /><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedinLabel}</a></li>
          <li><GithubIcon width="18" height="18" /><a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.githubLabel}</a></li>
        </ul>

        <form className="form" onSubmit={onSubmit}>
          <label>Name<input name="name" type="text" autoComplete="name" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button className="btn btn--primary" type="submit">Send Message</button>
          <p className="form__note" role="status">
            {sent ? "Your email app should open with the message ready to send." : "Sending opens your email app with the message filled in."}
          </p>
        </form>
      </div>
    </Section>
  );
}
