import React, { useState } from "react";
import NewTask from "./NewTask";
import Button from "./Button";

const Task = ({ onAdd, onDelet, tasks }) => {
  const [] = useState();
  return (
    <section>
      <h2 className="text-2xl font-bold mb-3 text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="my-4 text-stone-800">
          This Project Does not have any project.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-4 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span className="text-xl text-slate-950  bg-slate-300 p-3 rounded-lg ">{task.text}</span>
              <Button
                // className="text-stone-400 hover:text-red-600"
                onClick={() => onDelet(task.id)}
              >
                Clear
              </Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Task;
