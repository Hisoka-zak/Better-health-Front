import React, { useState ,useEffect} from 'react';
import './style.css'
import Footer from '../footer/footer'
import axios from 'axios';

const Meals = () => {
    let [MealsData,setMealsData] = useState([]);

useEffect(()=>{
    axios.get('https://better-health-server-rbzj.onrender.com/getMeals')
    .then((MealsData)=>{setMealsData(MealsData.data)})
    .catch((err)=>console.log('Error: ',err))   
},[])

let foods = MealsData.map((i)=>{
    return(
        <div class='col-3' id='col-meal'>
        <div class="card-food">
        <div class="content">
            <div class="back">
            <div class="back-content">
            <img src={i.imgUrl} style={{height : "150px", width : "150px" ,borderRadius:"4px"}} alt=''/>
                <strong>{i.Mname}</strong>
            </div>
            </div>
            <div class="front">
            <div class="img">
                <div class="circle">
                </div>
                <div class="circle" id="right">
                </div>
                <div class="circle" id="bottom">
                </div>
            </div>
            <div class="front-content">
                <small class="price">{i.price} OMR &nbsp;
                <a href="https://api.whatsapp.com/send/?phone=95616133&text&type=phone_number&app_absent=0">
                    <button class='button-o'>&nbsp; Order &nbsp; <i class="bi bi-whatsapp">&nbsp;</i></button></a>
                </small>
                <div class="description">
                <div class="title">
                    <p class="title">
                    <strong>{i.Mname}</strong>
                    </p>
                </div>
                <p class="card-footer">
                    {i.calories} Calories &nbsp; | &nbsp; 1 Serving
                </p>
                </div>
            </div>
            </div>
        </div>
        </div> 
        </div>
    )
})
    return(
    <>
    <div class="container" id='container-meal'>
              <div class="row" id='row-poss'>
                {foods}
                </div>
              </div>
              <Footer/>
    </>
    );

    }
export default Meals
