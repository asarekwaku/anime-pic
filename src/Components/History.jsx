import React from 'react';
import './History.css';

const History = ({ history }) => {
  return (
    <div id="history">
      <h3>Previously Viewed Items</h3>
      <ul>
        {history.map((historyItem, index) => (
          <li key={index}>
            <p>Item {index + 1}:</p>
            <p>ID: {historyItem.id}</p>
            <p>Tags: {historyItem.tags.map(tag => tag.name).join(', ')}</p>
            <img src={historyItem.image_url} alt={`Item ${index + 1}`} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
