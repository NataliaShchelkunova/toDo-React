import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import editImg from "../../icon/editImg.svg";
import deleteImg from "../../icon/deleteImg.svg";

const TaskComponent = ({ task, setTasks, index, setItem }) => {
  const { _id, isCheck, text } = task;
  let history = useHistory();

  const deleteTask = () => {
    axios.delete(`https://node-js-app-project.herokuapp.com/deleteTask?id=${_id}`).then((resp) => {
      setTasks(resp.data.data);
    });
  };

  const editTask = (index) => {
    setItem(task);
    history.push(`/edit/${_id}`);
  };

  const onChangeCheckbox = () => {
    axios
      .patch("https://node-js-app-project.herokuapp.com/updateTask", {
        _id,
        isCheck: !isCheck,
      })
      .then((res) => {
        setTasks(res.data.data);
      });
  };

  return (
    <div className="task-container">
      <input
        className="checkbox"
        type="checkbox"
        checked={isCheck}
        onChange={() => onChangeCheckbox()}
      />
      <span className="text-input"> {text} </span>
      {!isCheck && (
        <img src={editImg} alt="" onClick={() => editTask(index)} />
      )}
      <img src={deleteImg} alt="" onClick={() => deleteTask()} />
    </div>
  );
};

export default TaskComponent;
