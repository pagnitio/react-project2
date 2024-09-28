// import React from 'react'
import { Movies } from "./MovieZone/Movies";
import Meal from "./FoodRecipe/Meal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
       
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/meals" element={<Meal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
