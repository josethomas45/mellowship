import React from 'react';
import '../App.css';

function ActionBar() {
  return (
    <div className="action-bar">
      <button className="action-button">
      <div className="user-label">
         <span>Dropped Users</span>
         <img src="/images/user.svg" alt="User Icon" width="15" height="15" />
      </div>

      </button>
      <button className="action-button">
        <div className="user-label">
         <span>Blacklisted Users</span>
         <img src="/images/user2.svg" alt="User Icon" width="15" height="15" />
      </div>
      </button>
      <button className="action-button">
        <div className="user-label">
         <span>Export Data</span>
         <img src="/images/data.svg" alt="User Icon" width="15" height="15" />
      </div>
      </button>
      <button className="action-button add-guest">
        <div className="user-label">
         <span>Add  Guest</span>
         <img src="/images/plus.svg" alt="User Icon" width="15" height="15" />
      </div>
      </button>
    </div>
  );
}

export default ActionBar;