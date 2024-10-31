import style from "./ContactLink.module.css";

function ContactLink({ contactLink }) {
  return (
    <a
      className={style.contactLink}
      href={contactLink.link}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <i className={contactLink.icon} aria-hidden="true"></i>
      </div>
      <span></span> <span></span> <span></span>
    </a>
  );
}

export default ContactLink;
