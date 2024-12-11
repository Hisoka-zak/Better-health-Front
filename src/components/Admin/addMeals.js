import React, { useState } from 'react';
import img3 from '../data/logo.png'
import {Link,useNavigate} from 'react-router-dom'
import Axios from "axios";


function AddMeals() {
  let Navigate = useNavigate();

    const [Mname, setMname] = useState("");
    const [price, setMprice] = useState("");
    const [calories, setMcalories] = useState("");
    const [imgUrl, setMurl] = useState("");
    const [mealsID, setmealsID] = useState("");
    const [hResMsg, setResMsg] = useState("");

    const addMeals = () => {
        // Check if any of the fields are empty
        if (!Mname || !price || !calories || !imgUrl || !mealsID) {
          alert("Please fill in all the fields");
          return;
         }   
      
      Axios.post("https://better-health-server-rbzj.onrender.com/AddMeals", {
        mealsID:mealsID,
        calories:calories,
        Mname:Mname,
        price:price,
        imgUrl:imgUrl
      })
      .then((Meals) => {setResMsg(Meals.data);})
      .catch((err) => {setResMsg(err);});
      alert(' Meal added Successfully 👍🏼')
      Navigate('/MealsSevies')
     } 

    return (
      <>
        <nav class='navbar'>
        <Link class='link' to="/MealsSevies">
            <button class="btn btn-warning rounded-lg">Back</button>
        </Link>
        </nav>
        <div class='container' id="form-container-Meal">
        <img src={img3} alt='' style={{width:'100px',height:'100px'}}/>
            <form class="form">
                <div class="input-group">
                <label>Meal Id</label>
                    <input type="number" 
                      onChange={(e) => {
                      setmealsID(e.target.value);
                      }}
                  />
                <label>Meal Name</label>
                    <input type="name" 
                     onChange={(e) => {
                      setMname(e.target.value);
                    }}/>
                <label>Meal price</label>
                    <input type="name" 
                     onChange={(e) => {
                      setMprice(e.target.value);
                    }}/>
                <label>Meal img Url </label>
                    <input type="name" 
                     onChange={(e) =>{
                      setMurl(e.target.value);
                    }}/>
                </div>
                <div class="input-group">
                <label>Calories</label>
                    <input type="number"  
                     onChange={(e) =>{
                      setMcalories(e.target.value);
                    }}/>
                </div>
                <p>{hResMsg}</p>
                <button class="sign-meals" onClick={addMeals}>Add Meals</button>
            </form>
        </div> 
   
      </>
    );
  }

  export default AddMeals;
