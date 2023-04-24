import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import StarsCanvas from "./layouts/components/Stars/";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <StarsCanvas />
        <Home />
      </div>
    </Router>
  );
}

export default App;
