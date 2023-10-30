import React from "react";
import Homepage from "./pages/Homepage.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
    </Routes>
  );
}

export default App;
