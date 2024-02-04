import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Screen/Landing";
import Apropos from "./Screen/Apropos";
import Prices from "./Screen/Prices";
import Service from "./Screen/Service";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ < Landing/> }/>
        <Route path="/Apropos" element={ <Apropos/> }/>
        <Route path="/Prices" element={ <Prices/> }/>
        <Route path="/Service" element={ <Service/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
