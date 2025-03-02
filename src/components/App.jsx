import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function saveText(event) {
    setInputText(event.target.value);
  }

  function addItem() {
    if (inputText.trim() !== "") {
      setItems((prevItems) => [...prevItems, inputText]);
      setInputText(""); // Limpiar el input después de agregar
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addItem();
    }
  }

  function deleteItem(index) {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={saveText}
          onKeyPress={handleKeyPress}
          type="text"
          value={inputText}
          placeholder="Add a new task"
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => deleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
