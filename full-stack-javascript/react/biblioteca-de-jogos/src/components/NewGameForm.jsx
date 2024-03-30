import { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";

NewGameForm.propTypes = {
  addGame: PropTypes.func,
};

function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addGame({ title, cover });

    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput id={title} value={title} setValue={setTitle}>
        Título
      </TextInput>
      <TextInput id={cover} value={cover} setValue={setCover}>
        Capa
      </TextInput>
      <button type="submit">Adicionar à biblioteca</button>
    </form>
  );
}

export default NewGameForm;
