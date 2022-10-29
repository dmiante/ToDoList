import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import AddTask from "./AddTask";

function App() {
  const [items, setItems] = useState([])

  function addItem(newTask) {
    if(newTask){
      const num = items.length + 1
      const newValue = {
        id: num,
        title: newTask
    }
    setItems([...items, newValue])
    }
    // setItems((prevItems) => {
    //   return [...prevItems, newValue];
    // });
  }

  function deleteItem(id) {
    //Crea un nuevo array sin la id que le pasamos
    let deleteTasks = items.filter((item) => item.id !== id )
    console.log(deleteTasks);
    setItems(deleteTasks)

    // setItems((prevItems) => {
    //   return prevItems.filter((item, index) => {
    //     return index !== id;
    //   });
    // });
  }

  function updateItem(id, updateTask){

    //creamos copia
    const temp = [...items]
    // Search the item
    const item = temp.find((item) => item.id === id);
    item.title = updateTask;
    setItems([...temp]);
    
    
    // const filter = temp.filter( task => task.id !== updateTask.id)
    // const updatedObject = [...filter, updateTask]
    // setItems(updatedObject)
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
          <AddTask onAdd={addItem} />
      <div className="list">
          {items.map((item, index) => (
            <ToDoItem
              key={item.id}
              item={item}
              onUpdate={updateItem}
              onDelete={deleteItem}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
