import React, { useState } from 'react';

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
    <div style={{ margin: '2rem' }}>
      <h1>Item List Manager</h1>

      <div style={{ marginBottom: '1rem' }}>
        {/* Controlled input field */}
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter item" 
          style={{ marginRight: '1rem' }}
        />
        {/* Button to add the new item */}
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      {/* Display items in an unordered list */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
