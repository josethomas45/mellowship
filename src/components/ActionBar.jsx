import React from 'react';
import '../App.css';

function ActionBar() {
  return (
    <div className="action-bar">
      <button className="action-button">
      <div className="user-label">
         <span>Dropped Users</span>
         <img src="/images/drop.png" alt="User Icon" width="15" height="15" />
      </div>

      </button>
      <button className="action-button">
        <div className="user-label">
         <span>Blacklisted Users</span>
         <img src="/images/black.png" alt="User Icon" width="15" height="15" />
      </div>
      </button>
      <button className="action-button">
        <div className="user-label">
         <span>Export Data</span>
         <img src="/images/export.png" alt="User Icon" width="15" height="15" />
      </div>
      </button>
      <button className="action-button add-guest">
        <div className="user-label">
         <span>Add  Guest</span>
         <img src="/images/add.png" alt="User Icon" width="15" height="15" />
      </div>
      </button>
    </div>
  );
}

export default ActionBar;