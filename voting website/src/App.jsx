import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/Homepage/HomePage';
import Candidates from './components/candidates/Candidates';
import Vote from './components/vote/vote';
import Status from './components/status/status';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <Router>

       <Navbar />  

      <Routes>
  
    
        <Route path="/home" element={<HomePage />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </Router>
  );
}

export default App;
