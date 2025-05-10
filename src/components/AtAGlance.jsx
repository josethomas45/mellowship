import React from 'react';
import '../App.css';

function AtAGlance() {
  const ticketData = [
    { label: 'Special Ticket', count: 280, color: 'purple' },
    { label: 'Demo Paid Ticket', count: 3, color: 'green' },
    { label: 'Hackathon', count: 4, color: 'gray' },
    { label: 'New Ticket', count: 50, color: 'blue' },
  ];
  
  const totalTickets = ticketData.reduce((sum, t) => sum + t.count, 0);
  
  return (
    <div className="at-a-glance">
      <div className="glance-top">
        <div>
          <h3>At a Glance</h3>
          <p className="guest-count">80 unique guests</p>
        </div>
        <div className="glance-right">
          <p>Last Registered 1st May at 7:42 PM</p>
          <p align="right"> 
            59 <span className="green-text">shortlisted</span>{' '} 
            11 <span className="green-text">unclaimed</span> 
          </p>
        </div>
      </div>
      
      <div className="glance-bar">
        {ticketData.map((ticket, index) => (
          <div
            key={index}
            className={`bar-segment ${ticket.color}`}
            style={{ width: `${(ticket.count / totalTickets) * 100}%` }}
          ></div>
        ))}
      </div>
      
      <div className="glance-legend">
        {ticketData.map((ticket, index) => (
          <span key={index} className={ticket.color}>
            • ({ticket.count}) {ticket.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AtAGlance;