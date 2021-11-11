import React from "react";
import axios from "axios";
import editImg from "../../icon/editImg.svg";
import deleteImg from "../../icon/deleteImg.svg";

const TaskComponent = ({ task, editTask, setTasks, index }) => {
  const { _id, isCheck } = task;

  const deleteTask = () => {
    axios.delete(`http://localhost:7000/deleteTask?id=${_id}`).then((resp) => {
      setTasks(resp.data.data);
    });
  };

  const onChangeCheckbox = () => {
    axios
      .patch("http://localhost:7000/updateTask", {
        _id,
        isCheck: !isCheck,
      })
      .then((res) => {
        setTasks(res.data.data);
      });
  };

  return (
    <div className="Task-container">
      <input
        className="Checkbox"
        type="checkbox"
        checked={isCheck}
        onChange={() => onChangeCheckbox()}
      />
      <span className="Text-input"> {task.text} </span>
      <img src={editImg} alt="" onClick={() => editTask(index)} />
      <img src={deleteImg} alt="" onClick={() => deleteTask()} />
    </div>
  );
};

export default TaskComponent;
