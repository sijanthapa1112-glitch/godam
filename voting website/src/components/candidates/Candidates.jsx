import React from "react";
import './candidates.css'
import Balen from '../assets/Balen.jpg'
import harka from'../assets/harkka sampang.jpeg'
import kpoli from '../assets/kpoli.jpg'

const mockCandidates = [
  { id: 1, name: "Balen saha", description: "nepop bata niskeko", image:Balen },
  { id: 2, name: "Harka sampang", description: "malai pm banunus ma ramro xu", image: harka },
  { id: 3, name: "kp oli", description: "yemaley ", image: kpoli },
];

function Candidates() {
  return (
    <div className="page">
      <h1>Candidates</h1>
      <div className="candidates-grid">
        {mockCandidates.map(c => (
          <div key={c.id} className="candidate-card">
            <img src={c.image} alt={c.name} />
            <h3>{c.name}</h3>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Candidates;
