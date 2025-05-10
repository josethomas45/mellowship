function Header() {
  return (
    <header className="header">
      <div className="responsive-header">
        <div className="top-logo">
          <img src="/images/ticket.png" alt="Logo" className="logo" />
          <span className="app-name">MAKEMYPASS</span>
        </div>

        <div className="title-row">
          <button className="back-btn">←</button>
          <span className="demo-badge">DEMO</span>
          <h1 className="event-title">Paradox Productions Meet-Up</h1>
        </div>

        <div className="right-section">
          <div className="user-row">
            <span className="username">Hi, username</span>
            <img src="/images/pf.jpg" alt="Profile" className="profile-pic" />
          </div>
          <button className="docs-btn">📖 View Docs</button>
        </div>
      </div>

      <nav className="nav-links">
        <a href="#">Overview</a>
        <a href="#">Insights</a>
        <a href="#" className="active">Guests</a>
        <a href="#">Event Page</a>
        <a href="#">Form Builder</a>
        <a href="#">Scan QR</a>
        <a href="#">In-Event</a>
        <a href="#">Logs</a>
        <a href="#">Finance</a>
        <a href="#">Post Event</a>
        <a href="#">Child Events</a>
      </nav>
    </header>
  );
}

export default Header;
