import React, { useState } from "react";
import axios from "axios";
import "./addComponents.scss";

const AddComponents = ({ setTasks }) => {
  const [text, setText] = useState("");
  const addNewTask = () => {
    {
      text.trim()
        ? axios
            .post("https://node-js-app-project.herokuapp.com/createTask", {
              text,
              isCheck: false,
            })
            .then((res) => {
              setText("");
              setTasks(res.data.data);
            })
        : alert("Fill in the field");
    }
  };

  return (
    <div className="one-line-input-and-button">
      <input
        className="add-task-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addNewTask();
        }}
      >
        Add new
      </button>
    </div>
  );
};

export default AddComponents;
