import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Screen/Landing";
import Apropos from "./Screen/Apropos";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ < Landing/> }/>
        <Route path="/Apropos" element={ <Apropos/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
