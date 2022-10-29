import React, {useState} from "react";

export default function ToDoItem({item, onUpdate, onDelete}) {
  const [isEdit, setIsEdit] = useState(false);
  const [updateTask, setUpdateTask] = useState(item.title ?? '')

  function handleChange(event) {
    setUpdateTask(event.target.value);
  }

  function handleUpdate(){
    onUpdate(item.id, updateTask)
    setIsEdit(false)
  }

  function handleSubmit(e){
    e.preventDefault()
    onUpdate(item.id, updateTask);
    setIsEdit(false)
  }


  return (
    <div>
      {isEdit ? (
        <form className="form" onSubmit={handleSubmit}>
          <input
          autoFocus
          onChange={handleChange}
          value={updateTask}
          onBlur={(evt) => {
            setIsEdit(false)
            setUpdateTask(evt.target.value)
            }} 
            />
            {/* onMouseDown have more priority than onblur */}
          <button className="btnAdd" onMouseDown={handleUpdate}>
            <span>Update</span>
          </button>
        </form>
      ) : (
        <div className="listItem">
          <span
            className="taskUpdate"
            onDoubleClick={() => {
              setIsEdit(true)
            }}
          >
            {item.title}
          </span>
          <button
            className="detelebtn"
            onClick={() => 
              onDelete(item.id)
            }
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
