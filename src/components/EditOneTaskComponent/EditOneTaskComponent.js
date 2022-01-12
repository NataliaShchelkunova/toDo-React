import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import checkImg from "../../icon/checkImg.svg";
import cancelImg from "../../icon/cancelImg.svg";

const EditOneTaskComponent = ({
  task,
  setTasks,
  indexEditTask,
}) => {
  const { _id, isCheck } = task;
  const [taskValue, setTaskValue] = useState(task.text);
  const history = useHistory();
  const saveResultFunction = () => {
    axios
      .patch("https://node-js-app-project.herokuapp.com/updateTask", {
        _id,
        text: taskValue,
        isCheck,
      })
      .then((res) => {
        setTasks(res.data.data);
      });
  };
  const goToHome = () => {
    history.push(`/home`);
  };

  return (
    indexEditTask === 2 && (
      <div className="task-container">
        <input
          className="text-input"
          type="text"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
        <img src={cancelImg} alt="" onClick={() => goToHome()} />
        <img
          src={checkImg}
          alt=""
          onClick={() => {
            saveResultFunction();
            goToHome();
          }}
        />
      </div>
    )
  );
};

export default EditOneTaskComponent;
