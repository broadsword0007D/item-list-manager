import React, { useState } from 'react';
// Import the CSS file
import './App.css';

function App() {
  // State for the current text in the input
  const [inputValue, setInputValue] = useState('');
  // State for the list of items
  const [items, setItems] = useState([]);

  // Function that handles adding a new item
  const handleAddItem = () => {
    // Only add if the input is not empty (trim removes whitespace)
    if (inputValue.trim() !== '') {
      // Add the new item
      setItems([...items, inputValue]);
      // Clear the input field
      setInputValue('');
    }
  };

  return (
    <div className="container">
      <h1>Item List Manager</h1>
      <div className="input-section">
        {/* Controlled input field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter item"
        />
        {/* Button to add the new item */}
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      {/* Display items in an unordered list */}
      <ul>
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
