import React, { useState } from "react";
import TaskComponent from "../TaskComponent/TaskComponent";
import "./taskContainer.scss";

const TaskContainerComponent = ({ tasks, setTasks, setItem }) => {
  const [setIndexEditTask] = useState(-1);
  return (
    <div className="all-tasks-container">
      {tasks
        .sort((a, b) =>
          a.isCheck > b.isCheck ? 1 : a.isCheck < b.isCheck ? -1 : 0
        )
        .map((task, index) => (
          <div className="task-container" key={`task-${index}`}>
            <TaskComponent
              task={task}
              setTasks={setTasks}
              setIndexEditTask={setIndexEditTask}
              index={index}
              setItem={setItem}
            />
          </div>
        ))}
    </div>
  );
};

export default TaskContainerComponent;
