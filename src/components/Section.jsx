import { useReveal } from "../hooks.js";

export default function Section({ id, title, children, className = "" }) {
  const ref = useReveal();
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container reveal" ref={ref}>
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
