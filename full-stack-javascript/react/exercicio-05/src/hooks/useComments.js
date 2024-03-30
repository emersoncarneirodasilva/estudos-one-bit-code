import { useState } from "react";

function useComments() {
  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem("historical-comments");

    if (!storedComments) return [];

    return JSON.parse(storedComments);
  });

  const addComments = ({ email, text }) => {
    // const id = Math.floor(Math.random() * 1000000);
    const id =
      "_" + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    const date = new Date().toLocaleString("pt-BR");
    const comment = { id, email, text, date };

    setComments((currentState) => {
      const newState = [...currentState, comment];

      localStorage.setItem("historical-comments", JSON.stringify(newState));

      return newState;
    });
  };

  const removeComments = (id) => {
    setComments((currentState) => {
      const newState = currentState.filter((comment) => comment.id !== id);
      localStorage.setItem("historical-comments", JSON.stringify(newState));

      return newState;
    });
  };

  return { comments, addComments, removeComments };
}

export default useComments;
