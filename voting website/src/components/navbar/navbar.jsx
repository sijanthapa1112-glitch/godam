import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🗳VoteMe</div>
      <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/candidates">Candidates</a></li>
        <li><a href="/vote">Vote</a></li>
        <li><a href="/status">Status</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
