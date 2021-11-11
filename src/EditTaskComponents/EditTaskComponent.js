import React, { useState } from "react";
import axios from "axios";
import checkImg from "../../icon/checkImg.svg";
import cancelImg from "../../icon/cancelImg.svg";

const EditTaskComponent = ({ task, setTasks, setIndexEditTask }) => {
  const { _id, isCheck } = task;

  const [taskValue, setTaskValue] = useState(task.text);
  const cancelFunction = () => {
    setIndexEditTask(-1);
  };

  const saveResultFunction = () => {
    axios
      .patch("http://localhost:7000/updateTask", {
        _id,
        text: taskValue,
        isCheck,
      })
      .then((res) => {
        setTasks(res.data.data);
      });
    setIndexEditTask(-1);
  };

  return (
    <div className="task-container">
      <input
        className="text-input"
        type="text"
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
      />
      <img src={cancelImg} alt="" onClick={() => cancelFunction()} />
      <img src={checkImg} alt="" onClick={() => saveResultFunction()} />
    </div>
  );
};

export default EditTaskComponent;
