import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage/HomePage";
import CyberSecurityPage from "./page/rsapage/Rsa";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<CyberSecurityPage />} />

      </Routes>
    </Router>
  );
};

export default App;
