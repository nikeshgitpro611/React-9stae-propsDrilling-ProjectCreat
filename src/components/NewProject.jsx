import React, { useRef } from "react";
import Input from "./Input";
import NoProjectSelected from "./NoProjectSelected";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancle }) => {
  const modal = useRef();
  const title = useRef();
  const Description = useRef();
  const DueDate = useRef();

  const handleSave = () => {
    const enterTitle = title.current.value.toLocaleUpperCase();
    const enterDescription = Description.current.value;
    const enterDueDate = DueDate.current.value;

    if (
      enterTitle.trim() === "" ||
      enterDescription.trim() === "" ||
      enterDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    // console.log("enterTitle", enterTitle);
    onAdd({
      enterTitle,
      enterDescription,
      enterDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold my-4 text-stone-500">Invalid input</h2>
        <p className="text-stone-700 mb-4">Opps.... Some thing Went Wrong</p>
        <p className="text-stone-400 mb-4">Pleas Provide currect data...</p>
        <p className="text-rose-600 mb-4">Pleas Provide vaid Input of Each Field</p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end items-center gap-4 my-4">
          <li>
            <button className="text-stone-500 hover:text-rose-500" onClick={onCancle}>
              Cancle
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className=" px-6 py-2 rounded-md bg-stone-900 text-stone-50 hover:text-stone-950 hover:bg-lime-700"
            >
              Save
            </button>
          </li>
        </menu>
        <div className="text-slate-600">
          <Input type="text" ref={title} lable="Title" />
          <Input ref={Description} lable="Description" textarea />
          <Input type="date" ref={DueDate} lable="Due Date" />
        </div>
        <div className="">{/* <NoProjectSelected /> */}</div>
      </div>
    </>
  );
};

export default NewProject;
