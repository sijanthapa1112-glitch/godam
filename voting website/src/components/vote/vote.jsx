import React, { useState } from "react";
import './vote.css'

const mockCandidates = ["Balen saha", "Harka sampang", "kp oli"];

function Vote() {
  const [selected, setSelected] = useState(null);

  const handleVote = () => {
    if (selected) {
      alert(`You voted for ${selected}`);
    } else {
      alert("Please select a candidate first!");
    }
  };

  return (
    <div className="page">
      <h1>Vote</h1>
      <div className="vote-options">
        {mockCandidates.map(c => (
          <label key={c} className="vote-option">
            <input
              type="radio"
              name="candidate"
              value={c}
              onChange={() => setSelected(c)}
            />
            {c}
          </label>
        ))}
      </div>
      <button onClick={handleVote}>Submit Vote</button>
    </div>
  );
}

export default Vote;
