import React, { useState ,useEffect} from 'react';
import Footer from '../footer/footer';
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios'; 

const Mystyle={
    color:'white',
    fontSize:'18px'

}


const MealsSevies = () => {
    let [Mealsdata,setMealsData] = useState([]);
    let Navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8005/getMeals')
        .then((Mealsdata)=>{setMealsData(Mealsdata.data)})
        .catch((err)=>console.log('Error: ',err)) 
        return;  
    },[])
    
    const handleDelete = (id) =>{
        axios.delete('http://localhost:8005/deleteMeals/'+id)
        .then(res => {console.log(res)})
        .catch(errr => console.log(errr))
        alert(' Meal deleted Successfully 👍🏼 ')
        Navigate('/MealsSevies')
        window.location.reload();
    }
    
    let foods = Mealsdata.map((i)=>
        <div class='col-3' id='col-meal'>
            <div class="card-food">
            <div class="content">
                <div class="back">
                <div class="back-content">
                <img src={i.imgUrl} style={{height : "150px", width : "150px" ,borderRadius:"4px"}} alt=''/>
                    <strong>ID:{i.mealsID}</strong>
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
                    <Link  class='link' >
                        <i class="bi bi-trash3-fill mb-5 mt-3" style={Mystyle} //delete
                        onClick={(e)=>handleDelete(i._id)} ></i>&nbsp;&nbsp;&nbsp;
                    </Link>
                    <Link class='link' to={`/updateMeals/${i._id}`}>
                        <i class="bi bi-gear-wide-connected" style={Mystyle} //update
                        ></i>&nbsp;&nbsp;&nbsp;
                    </Link>
                    <Link  class='link' to="/addMeals">
                        <i class="bi bi-plus-square-dotted" style={Mystyle} //add
                        ></i>
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div> 
            </div>)
            
    return(
    <>
        <nav class='navbar'>
        <Link class='link' to="/home">
            <button class="btn btn-warning rounded-lg"><i class="bi bi-box-arrow-left"></i></button>
            </Link>
        <Link class='link' to="/feedback" >
            <button class="btn btn-warning rounded-lg">Feedback 📌</button>
            </Link>
        </nav>
    <div class="container" id='container-meal'>
              <div class="row" id='row-poss'>
                {foods}
                </div>
              </div>
              <Footer/>
    </>
    );

    }
export default MealsSevies
