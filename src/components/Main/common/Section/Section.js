import style from "./Section.module.css";

function Section({ title, id, className, children }) {
  return (
    <section id={id} className={`${style.section} ${className}`}>
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  );
}

export default Section;
