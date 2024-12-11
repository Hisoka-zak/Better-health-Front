import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react'
import './App.css';
import Home from "./components/pages/home";
import ContactUs from "./components/pages/contactUs";
import Meals from "./components/pages/Meals";
import About from "./components/pages/About";
import Navbar from './components/navbar/navbar';
import MealsSevies from "./components/Admin/MealsSevies";
import Admin from "./components/Admin/login";
import AddMeals from "./components/Admin/addMeals";
import UpdateMeals from "./components/Admin/updateMeals";
import Feedback from "./components/Admin/feedback";

function App() {
  return (
    <div class="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar/><Home/></> } />
          <Route path="/home" element={<><Navbar/><Home/></> } />
          <Route path="/about" element={<><Navbar/><About/></>} />
          <Route path="/ContactUs" element={<><Navbar/><ContactUs/></>} />
          <Route path="/product" element={<><Navbar/><Meals/></>} />
          <Route path="/login" element={<><Admin/></>}/>
          <Route path="/MealsSevies" element={<><MealsSevies/></>} />
          <Route path="/addMeals" element={<><AddMeals/></>}/>
          <Route path="/updateMeals/:id" element={<><UpdateMeals/></>}/>
          <Route path="/feedback" element={<><Feedback/></>}/>
        </Routes>        
      </BrowserRouter>
    </div>
  );
}

export default App;
