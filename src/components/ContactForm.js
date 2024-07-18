import React, { useContext, useRef } from "react";
import "../css/ContactForm.css";
import { Context } from "../context/Context";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const { language } = useContext(Context);

  const formRef = useRef();
  const submitButtonRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (language === "es") {
      submitButtonRef.current.innerHTML = "Enviando...";
    } else {
      submitButtonRef.current.innerHTML = "Sending...";
    }

    emailjs
      .sendForm(
        "service_b0b038a",
        "template_22u55ta",
        formRef.current,
        "CYgaeAeVZmfaobGxf"
      )
      .then(
        () => {
          if (language === "es") {
            alert("¡Enviado!");
            submitButtonRef.current.innerHTML = "Enviar";
          } else {
            alert("Sent!");
            submitButtonRef.current.innerHTML = "Send";
          }
          formRef.current.reset();
        },
        (error) => {
          alert(error.text);
          if (language === "es") {
            submitButtonRef.current.innerHTML = "Enviar";
          } else {
            submitButtonRef.current.innerHTML = "Send";
          }
          formRef.current.reset();
        }
      );
  };

  return (
    <form ref={formRef} id="contact-form" onSubmit={sendEmail}>
      <input
        type="name"
        name="name"
        autoComplete="on"
        placeholder={
          language === "es" ? "Nombre y Apellido" : "Name and Surname"
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
