import React from "react";
import './style.css';
import Footer from '../footer/footer'

const About =()=>{
    return(
        <>
        <div class="container">
        <div class="card-about">
            <p>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEIproe_Jox9lRPhHrqv4u6gwTd9djS0sOg&usqp=CAU'} alt=""/>
            </p>
            <p class="small-desc">
            At Better Health, we are dedicated to providing you with the best selection of healthy food options to support your wellness journey. Our mission is to make nutritious eating easy and accessible for everyone. 
            We curate a diverse range of fresh, organic produce, whole grains, and wholesome snacks, ensuring that each item contributes to your overall well-being. With a commitment to quality and your health in mind, we strive to be your one-stop destination for nourishing choices that empower you to lead a healthier lifestyle.
            </p>
        </div>     
        </div>
        <Footer/>
        </>
    )

}
export default About