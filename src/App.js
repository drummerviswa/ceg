import React from "react";
import Home from "./pages/Home";
import Dept from "./pages/Dept";
import MapView from "./pages/MapView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/dept" element={<Dept />} />
        <Route path="/map" element={<MapView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
