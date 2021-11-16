import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./editTaskComponent.scss";
import checkImg from "../../icon/checkImg.svg";
import cancelImg from "../../icon/cancelImg.svg";

const EditTaskComponent = ({ setTasks, item }) => {
  const { _id, isCheck } = item;
  const [taskValue, setTaskValue] = useState(item.text);
  const history = useHistory();

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
  };

  const goToHome = () => {
    history.push(`/`);
  };

  return (
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
  );
};

export default EditTaskComponent;

