import React from 'react';
import '../App.css';

function GuestsTable() {
  const guestData = [
    { name: 'Ananth M P', email: 'impactedx9', daysAgo: 5},
    { name: 'Arc Arc', email: 'impactdx2', daysAgo: 1},
    { name: 'Ananth M P', email: 'impactedx9', daysAgo: 2},
    { name: 'Ananth M P', email: 'ananth.mp332', daysAgo: 2},
    { name: 'Ananth M P', email: 'impactedx9', daysAgo: 2},
    { name: 'Aasth Asok', email: 'aasthkasofficial', daysAgo: 3},
    { name: 'Ananth M P', email: 'impactedx9', daysAgo: 4},
    { name: 'Aasth Asok', email: 'aasthkasofficial', daysAgo: 4},
    { name: 'Ananth M P', email: 'ananth.nandu.magic', daysAgo: 5},
  ];

  return (
    <div className="guests-table">
      {/* Table Header */}
      <div className="table-header">
        <h3>Recent Guests(30)</h3>
        <div className="table-actions">
          <button className="select-multiple">Select Multiple</button>
          <div className="status-dropdown">
            <button className="dropdown-button">
              Checked In
              <span className="dropdown-icon">▼</span>
            </button>
          </div>
          <div className="status-dropdown">
            <button className="dropdown-button">
              Approval Status
              <span className="dropdown-icon">▼</span>
            </button>
          </div>
          <div className="status-dropdown">
            <button className="dropdown-button">
              Registration Status
              <span className="dropdown-icon">▼</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table Content */}
      <div className="table-content">
        {guestData.map((guest, index) => (
          <div key={index} className="guest-row">
            <div className="guest-info">
              <div className="guest-name">{guest.name}</div>
              <div className="guest-email">{guest.email}</div>
            </div>
            <div className="guest-status">
              <div className="days-ago">{guest.daysAgo} days ago</div>
              <div className="status-icons">
                <span className="status-icon edit-icon">✏️</span>
                <span className="status-icon check-icon">✓</span>
                <span className="status-icon dollar-icon">$</span>
                <span className="status-icon ticket-icon">🎟️</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GuestsTable;
