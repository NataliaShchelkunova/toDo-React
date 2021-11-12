import React, { useEffect, useState } from "react";
import axios from "axios";
import AddComponents from "./components/AddComponents/AddComponents";
import TaskContainerComponent from "./components/TaskContanerComponent/TackContainerComponent";
import "./App.scss";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:7000/allTasks").then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  return (
    <div>
      <header>
        <h1>ToDo List</h1>
        <div className="line-input-and-button">
          <AddComponents setTasks={setTasks} />
        </div>
      </header>
      <TaskContainerComponent tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
