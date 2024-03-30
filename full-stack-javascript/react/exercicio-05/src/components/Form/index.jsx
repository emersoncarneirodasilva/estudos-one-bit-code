/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.css";

function Form({ addComments }) {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addComments({ email, text });

    setEmail("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="comments">Comentários</label>
      <textarea
        name="comments"
        id="comments"
        cols="30"
        rows="10"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button type="submit">Enviar comentário</button>

      <hr />
    </form>
  );
}

export default Form;
