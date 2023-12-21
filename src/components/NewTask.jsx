import React, { useState } from "react";
import Button from "./Button";

const NewTask = ({ onAdd }) => {
  const [enterTask, setEnterTask] = useState("");
  // console.log("enterTask", enterTask);
  const handleChange = (e) => {
    setEnterTask(e.target.value);
  };

  const handleClick = () => {
    if (enterTask.trim() == "") {
      return alert("Not Accept Empty Value");
    }
    onAdd(enterTask);
    setEnterTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 bg-stone-200 rounded-sm focus:outline-none"
        onChange={handleChange}
        value={enterTask}
      />
      <Button
        // className="text-stone-700 hover:text-lg hover:text-rose-700"
        onClick={handleClick}
      >
        Add Task
      </Button>
    </div>
  );
};

export default NewTask;
