import React from "react";

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit} style={{ paddingLeft: 40, marginTop: 16 }}>
      <input style={{ margin: '40px', width: '40%', height: '40px' }}
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Ex.: meeting at 4:20"
      />
      <span>please enter 1 for the most important tasks and 2 and 3 for midlevel and low level ones</span>
      <input style={{ margin: '40px', width: '20%', height: '40px' }} placeholder='1,2 or 3' onChange={props.prioritySubmit}></input>
      <input type="color" onChange={props.setColor}></input>
      <button type="submit">Add ToDo</button>
    </form>
  );
}
