import React from "react";
import ReactDOM from "react-dom";

function Note(probs) {
  function handleClick() {
    probs.onDelete(probs.id);
  }

  return (
    <div className="note">
      <h1>{probs.title}</h1>
      <p>{probs.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
