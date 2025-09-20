import React from "react";
import "./status.css";

const mockResults = [
  { name: "Balen Shah", votes: 120 },
  { name: "Harka Sampang", votes: 95 },
  { name: "KP Oli", votes: 80 },
];

function Status() {
  const totalVotes = mockResults.reduce((sum, r) => sum + r.votes, 0);
  const leader = mockResults.reduce((max, r) => (r.votes > max.votes ? r : max), mockResults[0]);

  return (
    <div className="status-page">
      <h1>Voting Status</h1>
      <p className="subtitle">Live updates of the current voting...</p>

      <div className="status-list">
        {mockResults.map(r => {
          const percentage = ((r.votes / totalVotes) * 100).toFixed(1);
          const isLeader = leader.name === r.name;

          return (
            <div key={r.name} className={`status-card ${isLeader ? "leader" : ""}`}>
              <div className="status-header">
                <span className="candidate-name">{r.name}</span>
                <span className="votes">
                  {r.votes} votes ({percentage}%)
                </span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${percentage}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Status;
