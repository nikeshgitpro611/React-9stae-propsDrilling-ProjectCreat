import React from "react";
import Button from "./Button";

const ProjectSideBar = ({
  onstartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  console.log("projects ", projects);

  return (
    <aside className="w-1/8 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <div className="">
        <Button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={onstartAddProject}
        >
          + Add Project
        </Button>
      </div>
      <div className="">
        <ul className="mt-8">
          {projects.map((projectList) => {
            // console.log('project', projectList);
            let cssClasses  = "w-full text-stone-400 my-1 px-2 py-1 text-left rounded-sm hover:text-stone-500 hover:bg-stone-700"

            if (projectList.id === selectedProjectId) {
              cssClasses = 'bg-lime-400 text-stone-100 my-1 px-2 py-1 text-left rounded-sm bg-stone-100 text-stone-200'
            }
          
            return (
              <li key={projectList.id}>
                <button
                  className= {cssClasses}
                  onClick={() => onSelectProject(projectList.id)}
                >
                  {projectList.enterTitle}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ProjectSideBar;
