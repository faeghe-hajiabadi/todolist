import React, { useState, useEffect, Fragment } from "react";
import ListItem from "./components/ListItem";
import Form from "./components/Form";



const tasks = [
  { name: "task 1", priority: 10, color: '' },
  { name: "task 2", priority: 10, color: '' },
  { name: "task 3", priority: 10, color: '' }
];

function TodoApp() {
  const [todos, setTodos] = useState(tasks);
  const [doneTasks, setDone] = useState();
  const [inputValue, setInputValue] = useState("");
  const [priority, setPriority] = useState();
  const [color, setColor] = useState();

  useEffect(() => {
    let count = 0;
    todos.map(todo => (!todo.done ? count++ : null));
    document.title = `${count} task${count > 1 ? "s" : ""} todo`;
  });

  const _handleSubmit = e => {

    e.preventDefault();
    if (inputValue === "") return alert("Task name is required");
    const newArr = todos.slice();
    newArr.splice(0, 0, { name: inputValue, priority: priority, color: color });
    setTodos(newArr);
    setInputValue("");
  };

  //
  const _handleBntClick = ({ type, index }) => {
    const newArr = doneTasks ? doneTasks : [];
    newArr.push(todos[index]);
    setDone(newArr);
    todos.splice(index, 1);
    return setTodos(todos);
  };

  const compare = () => {
    todos.sort((itema, itemb) => (itema.priority > itemb.priority) ? 1 : -1)

  }

  compare(todos);
  

  return (
    <Fragment>
      <Form
        onSubmit={_handleSubmit}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        setColor={e => setColor(e.target.value)}
        prioritySubmit={e => setPriority(e.target.value)}
      />
      <ul>
        {todos.map((todo, index) => (
          <ListItem
            key={index}
            todo={todo}
            done={false}
            completed={() => _handleBntClick({ type: "completed", index })}
          />
        ))}

      </ul>
      {doneTasks &&
        <ul>
          {doneTasks.map((todo, index) => {
            
            return (
              <ListItem
                key={index}
                todo={todo}
                done={true}

              />
            )
          })}
        </ul>
      }

    </Fragment>
  );
}

export default TodoApp;
