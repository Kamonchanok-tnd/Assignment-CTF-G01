import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage/HomePage";
import CyberSecurityPage from "./page/rsapage/Rsa";
import Openning from "./page/openning/openning";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Openning />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/1" element={<CyberSecurityPage />} />

      </Routes>
    </Router>
  );
};

export default App;
