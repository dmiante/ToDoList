import React, { useState } from "react";

export default function InputArea(props) {
  const [newTask, setNewTask] = useState("")

  function handleChange(event) {
    const newValue = event.target.value;
    setNewTask(newValue);
  }

  function handleSubmit(e){
    e.preventDefault()
    props.onAdd(newTask)
    setNewTask("")
  }

  return (
      <form className="form" onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={newTask} />
        <button className="btnAdd"><span>Add</span></button>
      </form>
  )
}