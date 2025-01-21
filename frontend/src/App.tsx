import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/homepage/HomePage";
import Openning from "./page/openning/openning";
import End from "./page/EndScreen/EndScreen";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Openning />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/end" element={<End />} />

      </Routes>
    </Router>
  );
};

export default App;
