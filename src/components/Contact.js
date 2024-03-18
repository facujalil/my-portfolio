import React, { useContext } from "react";
import "../css/Contact.css";
import { Context } from "../context/Context";
import ContactForm from "./ContactForm";
import ContactLinkContainer from "./ContactLinkContainer";

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
    <section id="contact">
      <h4>{language === "es" ? "Contacto" : "Contact"}</h4>
      <ContactForm />

      <div className="contact-links">
        {contactLinks.map((contactLink, index) => (
          <ContactLinkContainer
            key={index}
            link={contactLink.link}
            icon={contactLink.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Contact;
