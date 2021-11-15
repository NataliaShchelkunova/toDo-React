import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import AddComponents from "./components/AddComponents/AddComponents";
import EditTaskComponent from "./components/EditTaskComponents/EditTaskComponent";
import TaskContainerComponent from "./components/TaskContanerComponent/TaskContainerComponent";
import "./App.scss";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [item, setItem] = useState({});

  const [indexEditTask, setIndexEditTask] = useState(-1);

  useEffect(() => {
    axios.get("http://localhost:7000/allTasks").then((res) => {
      setTasks(res.data.data);
    });
  }, []);

  return (
    <div>
      <header>
        <h1>ToDo List</h1>
      </header>
      <Switch>
        <Route path="/home">
          <div className="line-input-and-button">
            <AddComponents setTasks={setTasks} />
          </div>
          <TaskContainerComponent
            tasks={tasks}
            setTasks={setTasks}
            setItem={setItem}
          />
        </Route>
        <Route path="/edit">
          <EditTaskComponent setTasks={setTasks} item={item} />
        </Route>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    </div>
  );
};

export default App;
