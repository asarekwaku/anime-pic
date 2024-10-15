import React from 'react';
import './BanList.css';

const BanList = ({ banList }) => {
  return (
    <div id="ban-list">
      <h3>Ban List</h3>
      <ul>
        {banList.map((banItem, index) => (
          <li key={index}>{banItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default BanList;
