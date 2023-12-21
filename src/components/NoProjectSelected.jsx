import React from "react";
import noProjImg from '../assets/images.png'
import Button from "./Button";
const NoProjectSelected = ({onstartAddProject}) => {
  return (
    <div className="mt-24 text-center w-2/3">
        <img src={noProjImg} className="h-21 w-86 object-contain mx-auto"/>
      <h2 className="my-4 font-bold text-xl text-stone-500">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select The project Get Start The New One.</p>
      <p className="mt-8">
        <Button onClick = {onstartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
