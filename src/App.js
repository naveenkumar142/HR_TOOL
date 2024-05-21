import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./Signupage/Signup";
import Signin from "./Signinpage/Signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
