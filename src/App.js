import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios.get("http://localhost:7000/allTasks").then((res) => {
      setTasks(res.data.data);
    });
  });

  const addNewTask = () => {
    axios
      .post("http://localhost:7000/createTask", {
        text,
        isCheck: true,
      })
      .then((res) => {
        setText("");
        setTasks(res.data.data);
      });
  };

  // const editTask = () => {
  //   axios.patch("http://localhost:7000/updateTask", setTasks[text]).then((resp) => {
  //     setTasks(null);
  //   });
  // };

  return (
    <div>
      <header>
        <h1>ToDo List</h1>
        <div className='one-line-input-and-button'>
          <input
          className='add-task-input'
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => addNewTask()}>Add new</button>
        </div>
      </header>
      <div className='all-tasks-container'>
        {tasks.map((task, index) => (
          <div key={`task-${index}`}>
            <input type="checkbox" isCheck={task.isCheck} />
            <span> {task.text} </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
