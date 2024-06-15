// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Agriculture from "./pages/Agriculture"; 
import FullDetails from "./components/FullDetails"; 
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Education from "./pages/Education";
import Centralgovt from "./pages/Centralgovt";
import HealthandWellness from "./pages/HealthandWellness";
import HousingandPension from "./pages/HousingandPension";
import About from "./pages/About";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  

  return (
   
    
    <Router>
        <Navbar />
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/education" element={<Education />} />
        <Route path="/centralgovt" element={<Centralgovt />} />
        <Route path="/healthandwellness" element={<HealthandWellness />} />
        <Route path="/housingandpension" element={<HousingandPension />} />
        <Route path="/full-details" element={<FullDetails />} />

        {/*  */}
      </Routes>
      <Footer />
    </Router>

    
  );
};

export default App;


