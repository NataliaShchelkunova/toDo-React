import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskComponent from "./components/TaskComponent/TaskComponent";
import EditTaskComponent from "./components/EditTaskComponents/EditTaskComponent";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [indexEditTask, setIndexEditTask] = useState(-1);

  useEffect(() => {
    axios.get("http://localhost:7000/allTasks").then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  const addNewTask = () => {
    axios
      .post("http://localhost:7000/createTask", {
        text,
        isCheck: false,
      })
      .then((res) => {
        setText("");
        setTasks(res.data.data);
      });
  };

  const editTask = (index) => {
    setIndexEditTask(index);
  };

  return (
    <div>
      <header>
        <h1>ToDo List</h1>
        <div className="one-line-input-and-button">
          <input
            className="add-task-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => addNewTask()}>Add new</button>
        </div>
      </header>
      <div className="all-tasks-container">
        {tasks
          .sort((a, b) =>
            a.isCheck > b.isCheck ? 1 : a.isCheck < b.isCheck ? -1 : 0
          )
          .map((task, index) => (
            <div className="task-container" key={`task-${index}`}>
              {index !== indexEditTask && (
                <TaskComponent
                  task={task}
                  editTask={editTask}
                  setTasks={setTasks}
                  index={index}
                />
              )}
              {index === indexEditTask && (
                <EditTaskComponent
                  task={task}
                  setTasks={setTasks}
                  setIndexEditTask={setIndexEditTask}
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
