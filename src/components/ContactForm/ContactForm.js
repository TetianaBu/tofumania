"use client";
import React from "react";
import styles from "./ContactForm.module.css";

// todo 1)create valid endpoint 2) validate data on backend

const ENDPOINT = "http://localhost:3301/api/forms";

function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  // idle > loading > success/error
  const [status, setStatus] = React.useState("idle");

  const id = React.useId();
  const nameId = `${id}-name`;
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    console.log(name, email, message, "data");

    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const json = await response.json();
    if (json.ok) {
      setStatus("success");
      setMessage("");
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroupsContainer}>
        <div className={styles.formGroup}>
          <label htmlFor={nameId}>Name:</label>
          <input
            className={styles.input}
            id={nameId}
            name="name"
            required
            type="text"
            aria-label="Name"
            autoComplete="on"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={emailId}>Email:</label>
          <input
            className={styles.input}
            id={emailId}
            name="email"
            required={true}
            disabled={status === "loading"}
            type="email"
            aria-label="Email address"
            autoComplete="on"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={messageId}>Your message:</label>
        <textarea
          className={styles.input}
          id={messageId}
          name="message"
          required={true}
          minLength={10}
          maxLength={1000}
          disabled={status === "loading"}
          type="text"
          aria-label="Message"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </div>
      <div className={styles.buttonGroup}>
        <button
          disabled={status === "loading"}
          type="submit"
          className={styles.submitButton}
        >
          {status === "loading" ? "Submitting…" : "Submit"}
        </button>
      </div>
      {status === "success" && <p>Message sent!</p>}
      {status === "error" && <p>Sorry, but something went wrong!</p>}
    </form>
  );
}

export default ContactForm;
