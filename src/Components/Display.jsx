import React from 'react';
import './Display.css';

const Display = ({ item, addToBanList }) => {
  return (
    <div id="display">
      <p>Image ID: {item.id}</p>
      <img src={item.image_url} alt="Random Item" />

      <p>Tags:</p>
      <ul>
        {item.tags.map(tag => (
          <li key={tag.id}>
            <span onClick={() => addToBanList(tag.name)}>{tag.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
