import React from "react";
import Button from "./Button";
import Task from "./Task";

const SelectedProject = ({ projects, projectDelete, onAddedTask, onDeletedTask, tasks }) => {
  
    const formatDate = new Date(projects.enterDueDate).toLocaleString('en-US', {
        year : 'numeric',
        month : 'long',
        day: '2-digit'
    })
  return (
    <div className="w-[35rem] mt-16">
      <header className="pd-4 mb-4 border-b-4">
        <div className="flex text-center justify-between">
          <h1 className="text-3xl font-bold mb-2 text-stone-600">{projects.enterTitle}</h1>
          <Button onClick = {projectDelete}>Delete</Button>
        </div>
        <p className="mb-4 text-stone-400">
          {formatDate}
        </p>
        <p className="text-stone-500 whitespace-pre-wrap">
          {projects.enterDescription}
        </p>
      </header>
      <Task onAdd = {onAddedTask} onDelet = {onDeletedTask} tasks = {tasks}/>
    </div>
  );
};

export default SelectedProject;
