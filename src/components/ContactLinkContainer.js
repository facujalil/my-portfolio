import React from "react";
import "../css/ContactLinkContainer.css";

function ContactLinkContainer({ link, icon }) {
  return (
    <div className="contact-link-container">
      <a href={link} target="_blank" rel="noreferrer">
        {" "}
        <i className={icon} aria-hidden="true"></i>{" "}
      </a>
      <span></span> <span></span> <span></span>
    </div>
  );
}

export default ContactLinkContainer;
