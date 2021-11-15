import React, { useState } from "react";
import EditTaskComponent from "../EditTaskComponents/EditTaskComponent";
import "./taskContainer.scss";

const EditTaskContainer = ({ tasks, setTasks }) => {
  const [setIndexEditTask] = useState(-1);
  return (
    <div className="all-tasks-container">
      {tasks.map((task, index) => (
        <div className="task-container" key={`task-${index}`}>
          <EditTaskComponent
            task={task}
            setTasks={setTasks}
            setIndexEditTask={setIndexEditTask}
          />
        </div>
      ))}
    </div>
  );
};

export default EditTaskContainer;
