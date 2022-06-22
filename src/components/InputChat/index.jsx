import React, { useState, useContext } from "react";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { MessagesContext } from "../Context/MessagesContext";

const InputChat = () => {
  const [task, setTask] = useState("");
  const { AddMessageFireBase } = useContext(MessagesContext);

  const handleSubmit = () => {
    console.log("apertou2");
    AddMessageFireBase(task);

    if (task !== "") {
      setTask("");
    }
  };

  return (
    <>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "70px",
          height: "50px",
          borderRadius: "5px",
          border: "none",
          background: "#008ef8",
          color: "white",
        }}
      >
        <AttachFileIcon></AttachFileIcon>
      </button>
      <input
        type="text"
        id="task"
        placeholder="Digite sua Task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        style={{
          width: "80%",
          height: "50px",
          borderRadius: "10px",
          outline: "none",
          border: "2px solid #008ef8",
        }}
      ></input>
      <button
        onClick={() => handleSubmit()}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "70px",
          height: "50px",
          borderRadius: "5px",
          border: "none",
          background: "#008ef8",
          color: "white",
        }}
      >
        <SendIcon></SendIcon>
      </button>
    </>
  );
};
export default InputChat;
