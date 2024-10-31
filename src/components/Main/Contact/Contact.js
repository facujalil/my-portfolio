import { useContext } from "react";
import style from "./Contact.module.css";
import { Context } from "context/Context";
import Section from "../common/Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactLink from "./ContactLink/ContactLink";

function Contact() {
  const { language } = useContext(Context);

  const contactLinks = [
    {
      link: "https://www.linkedin.com/in/facundojalil",
      icon: "fa fa-linkedin",
    },
    {
      link: "https://api.whatsapp.com/send?phone=5493415152182",
      icon: "fa-brands fa-whatsapp",
    },
    {
      link: "https://www.instagram.com/facu.jalil7",
      icon: "fa-brands fa-instagram",
    },
    {
      link: "https://twitter.com/FacuJalil7",
      icon: "fa-brands fa-x-twitter",
    },
  ];

  return (
    <Section
      title={language === "es" ? "Contacto" : "Contact"}
      id="contact"
      className={style.contact}
    >
      <ContactForm />
      <div className={style.contactLinks}>
        {contactLinks.map((contactLink, index) => (
          <ContactLink key={index} contactLink={contactLink} />
        ))}
      </div>
    </Section>
  );
}

export default Contact;
