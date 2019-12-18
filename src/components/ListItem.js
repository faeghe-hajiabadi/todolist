import React, { useState } from "react";

export default function ListItem(props) {
  console.log("props.done of listitem", props)
  const { name } = props.todo;
  const [clicked, setClick] = useState(false);
  const fixItClick = (bool) => {
    setClick(bool);
    props.todo.priority = 0;

  }
  return (
    <div style={{ textDecoration: props.done ? "line-through" : "", padding: '30px', backgroundColor: props.todo.color }}>
      {name}
      {!props.done ? <button onClick={props.completed}>Completed</button> : ""}
      {!clicked &&
        <button onClick={() => fixItClick(true)}>pin it!!!</button>
      }

      {clicked && !props.done &&
        <button onClick={() => fixItClick(false)}>unpin</button>
      }
    </div>
  );
}
