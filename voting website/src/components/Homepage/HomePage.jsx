import "./HomePage.css"; 

function HomePage() {
  return (
    <div className="page">
      <div className="card">
        <h1>Welcome to VoteMe</h1>
        <p className="tagline">Cast your vote and see real-time results!</p>
        <button className="cta-btn">Get Started</button>

        <div className="features">
          <div className="feature">
            <h3>✅ Easy Voting</h3>
            <p>Select your candidate and submit your vote in seconds.</p>
          </div>
          <div className="feature">
            <h3>📊 Live Results</h3>
            <p>See real-time updates as votes come in.</p>
          </div>
          <div className="feature">
            <h3>🔒 Secure </h3>
            <p>Your votes are private and protected.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
