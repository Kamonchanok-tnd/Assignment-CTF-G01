import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage/HomePage";
import ChallengePage from "./page/ChallengePage";
import Rsa from './page/rsapage/Rsa'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/challenge/:id" element={<ChallengePage />} />
        <Route path="/rsa" element={<Rsa />} />
      </Routes>
    </Router>
  );
};

export default App;
