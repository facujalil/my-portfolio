import { useContext, useRef } from "react";
import style from "./ContactForm.module.css";
import { Context } from "context/Context";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const { language } = useContext(Context);

  const formRef = useRef();
  const submitButtonRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    submitButtonRef.current.disabled = true;
    submitButtonRef.current.innerHTML =
      language === "es" ? "Enviando..." : "Sending...";

    emailjs
      .sendForm(
        "service_b0b038a",
        "template_22u55ta",
        formRef.current,
        "CYgaeAeVZmfaobGxf"
      )
      .then(
        () => {
          alert(language === "es" ? "¡Enviado!" : "Sent!");
        },
        (error) => {
          alert(error.text);
        }
      )
      .finally(() => {
        submitButtonRef.current.disabled = false;
        submitButtonRef.current.innerHTML =
          language === "es" ? "Enviar" : "Send";
        formRef.current.reset();
      });
  };

  return (
    <form ref={formRef} className={style.contactForm} onSubmit={sendEmail}>
      <input
        type="name"
        name="name"
        autoComplete="on"
        placeholder={
          language === "es" ? "Nombre y Apellido" : "First and Last Name"
        }
        required
      />
      <input
        type="email"
        name="email"
        autoComplete="on"
        placeholder="Email"
        required
      />
      <textarea
        type="text"
        name="message"
        autoComplete="off"
        placeholder={language === "es" ? "Mensaje" : "Message"}
        required
      />
      <button ref={submitButtonRef}>
        {language === "es" ? "Enviar" : "Send"}
      </button>
    </form>
  );
}

export default ContactForm;
