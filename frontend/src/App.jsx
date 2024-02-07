// App.js

import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home"; // Correct import path
import Service from "./Pages/Service/Service";
import Feedback from "./Pages/Feedback/Feedback";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/feedback" element={<Feedback />} /> {/* Corrected the path */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
