import React from "react";
import styles from "./Contact.module.css";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <article className={styles.container}>
      <section>
        <h1>Contact Tofcio</h1>
        <p>Get in touch and let me know how I can help</p>
      </section>
      <ContactForm />
    </article>
  );
}

export default Contact;
