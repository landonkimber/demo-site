import React from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Page2 from "./pages/Page2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
}

export default App;
