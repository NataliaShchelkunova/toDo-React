import React, { useState } from "react";
import TaskComponent from "../TaskComponent/TaskComponent";
import EditTaskComponent from "../EditTaskComponents/EditTaskComponent";
import './taskContainer.scss'

const TaskContainerComponent = ({ tasks, setTasks }) => {
  const [indexEditTask, setIndexEditTask] = useState(-1);
  return (
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
                setTasks={setTasks}
                setIndexEditTask={setIndexEditTask}
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
  );
};

export default TaskContainerComponent;
