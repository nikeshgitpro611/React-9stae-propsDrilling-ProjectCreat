import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import "./index.css";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  // console.log('projectState : ', projectState);
  const handleAddedTask = (text) => {
    setProjectState((prevTask) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectedId: prevTask.selectedProjectId,
        id: taskId.toFixed(2),
      };

      return {
        ...prevTask,
        tasks: [newTask, ...prevTask.tasks],
      };
    });
  };

  const handleDeletedTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        // selectedProjectId: undefined,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  // console.log("pro", projectState);
  const handleStatrtAddProject = () => {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  };

  const handleCancleProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleAddProject = (onAddProjectData) => {
    setProjectState((prevDaetails) => {
      const newProject = {
        ...onAddProjectData,
        id: Math.random().toFixed(2),
      };
      console.log("newProject", newProject);
      return {
        ...prevDaetails,
        selectedProjectId: undefined,
        projects: [...prevDaetails.projects, newProject],
      };
    });
  };

  const handleSlectProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectState((prevState) => {
      console.log("56", prevState);
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  // console.log("projectState : ", projectState);

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  // console.log("selectedProject", selectedProject);
  let content = (
    <SelectedProject
      projects={selectedProject}
      projectDelete={handleDeleteProject}
      onAddedTask={handleAddedTask}
      onDeletedTask={handleDeletedTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancle={handleCancleProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onstartAddProject={handleStatrtAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-2">
      <ProjectSideBar
        onstartAddProject={handleStatrtAddProject}
        projects={projectState.projects}
        onSelectProject={handleSlectProject}
        selectedProjectId = {projectState.selectedProjectId}
      />
      {content}
      {/* <SelectedProject /> */}
    </main>
  );
}

export default App;
