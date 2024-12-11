import {Link} from "react-router-dom";
import "./navbar.css"
import React from "react";
import Logo from '../data/logo.png';
import { useState } from "react";


const Footer_header =()=>{
  const [menu,setMenu] = useState("home");
    return(
    <>
    <nav class="navbar ">
      <img class="logo" src={Logo} style={{width :'100px' , height:'100px'} } alt="logo"/>
      <div class="nav-menu">
        <ul class="btn">
            <Link class="link" to="/home">
              <li onClick={()=>{setMenu("home")}} class="button_text">Home
              {menu ==="home"?<hr/> :<></>}</li>
            </Link>
            <Link class="link" to="/product">
              <li onClick={()=>{setMenu("product")}} class="button_text">Meals
              {menu ==="product"?<hr/> :<></>}</li>
            </Link>
            <Link class="link" to="/ContactUs">
              <li onClick={()=>{setMenu("contactUs")}} class="button_text">Contact Us
              {menu ==="contactUs"?<hr/> :<></>}</li>
            </Link>
            <Link class="link" to="/about">
              <li onClick={()=>{setMenu("about")}} class="button_text">About Us
              {menu ==="about"?<hr/> :<></>}</li>
              </Link>
          </ul>
        </div>
        <div>
        <Link class="link" to="/login">
        <button class="buttonpma">
          <span class="actual-text">&nbsp;Admin&nbsp;&nbsp;<i class="bi bi-person-fill-lock"></i></span>
        </button></Link>
      </div>
    </nav>
    </>
    )
}

export default Footer_header