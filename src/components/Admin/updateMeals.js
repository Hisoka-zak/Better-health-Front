import React, { useState ,useEffect } from 'react';
import img3 from '../data/logo.png'
import {Link,useParams,useNavigate} from 'react-router-dom'
import Axios from "axios";


function UpdateMeals() {
    let Navigate = useNavigate();
    const {id} = useParams();
    const [price, setNewPrice] = useState('');
    const [calories, setNewCalories] = useState('');
    const [Mname, setNewMname] = useState('');
    const [imgUrl, setNewImgUrl] = useState(''); 
    const [mealsID, setNewMealsID] = useState('');

    
         useEffect(()=>{
            Axios.get('http://localhost:8005/getMeals/'+id)
            .then((Meals)=>{console.log(Meals)
                setNewMname(Meals.data.Mname)
                setNewPrice(Meals.data.price)
                setNewCalories(Meals.data.calories)
                setNewImgUrl(Meals.data.imgUrl)
                setNewMealsID(Meals.data.mealsID)
            })
            .catch((err)=>console.log('Error: ',err)) 
            return;  
        },[])


        const UpdateMeals = () =>{
            Axios.put('http://localhost:8005/UpdateMeals/'+id, 
            {mealsID,calories,Mname,price,imgUrl})
            .then((res)=>{console.log(res)})
            .catch(err=>console.log(err))
            Navigate('/MealsSevies')
            alert(' Meal Updated Successfully 👍🏼')
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
                    value={mealsID} 
                    onChange={(e) => {
                        setNewMealsID(e.target.value);
                      }} 
                  />
                <label>Meal Name</label>
                    <input type="name"
                    value={Mname} 
                    onChange={(e) => {
                        setNewMname(e.target.value);
                    }}/>
                <label>Meal price</label>
                    <input type="name"
                    value={price} 
                    onChange={(e) => {
                        setNewPrice(e.target.value);
                    }}/>
                <label>Meal img Url </label>
                    <input type="name" 
                    value={imgUrl}
                    onChange={(e) => {
                        setNewImgUrl(e.target.value);
                    }}/>
                </div>
                <div class="input-group">
                <label>Calories</label>
                    <input type="number" 
                    value={calories} 
                    onChange={(e) => {
                        setNewCalories(e.target.value);
                    }}/>
                </div>
                <button class="sign-meals" onClick={UpdateMeals}>Update Meals</button>
            </form>
        </div> 
   
      </>
    );
  }
  
  export default UpdateMeals;
