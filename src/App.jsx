import React, { useState, useEffect } from 'react';
import Display from './Components/Display';
import BanList from './Components/BanList';
import History from './Components/History';
import './App.css';

function App() {
  const [item, setItem] = useState(null);
  const [banList, setBanList] = useState([]);
  const [history, setHistory] = useState([]);

  // Example API URL
  const apiUrl = 'https://api.nekosapi.com/v3/images/random';

  const fetchNewItem = async () => {
    const apiUrl = 'https://api.nekosapi.com/v3/images/random';
    
    try {
      const response = await fetch(`${apiUrl}?rating=safe`); // Adding rating=safe to only get safe images
      const data = await response.json();
      const newItem = data.items[0]; // Get the first item from the "items" array
  
      // Check if item contains a banned attribute
      if (isBanned(newItem)) {
        console.log('Item contains banned attribute, skipping...');
        return;
      } else {
        setItem(newItem);
        setHistory((prevHistory) => [...prevHistory, newItem]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  const isBanned = (item) => {
    // Check if any attribute of the item is in the ban list
    const tags = item.tags.map(tag => tag.name);
    return tags.some(tag => banList.includes(tag));
  };

  const addToBanList = (value) => {
    if (!banList.includes(value)) {
      setBanList([...banList, value]);
    }
  };

  // useEffect to fetch new item when component mounts
  useEffect(() => {
    fetchNewItem();
  }, []);

  return (
    <div>
      <h1>Random Item Viewer</h1>

      {item ? (
        <Display item={item} addToBanList={addToBanList} />
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={fetchNewItem}>Fetch New Item</button>

      <BanList banList={banList} />
      <History history={history} />
    </div>
  );
}

export default App;
