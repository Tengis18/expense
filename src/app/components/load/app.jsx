import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Load from "./components/load/Load";

const App = () => (
  <Router>
    <Routes>
      <Route path="/load" element={<Load />} />
    </Routes>
  </Router>
);

export default App;
