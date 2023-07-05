import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./App";
import "./index.css";
import MarketPlace from "./pages/marketplace";
import Create from "./pages/create";
import BattleGround from "./pages/battleground";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="battleground" element={<BattleGround />} />
      <Route path="marketplace" element={<MarketPlace />} />
      <Route path="create" element={<Create />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root"),
);
