import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import A from '../data/Chicken-Pasta.webp'
import B from '../data/BBQ-Chicken.webp'
import C from '../data/Banana-Pancake.webp'
import D from '../data/Sandwich-Grilled-Chicken.webp'

    
    function Best(){
        return (
            <>
            <body id="body">
            <h1 id="best">THE BEST SELLER <i class="bi bi-fire" id="best"></i></h1>
            <div class="container">
              <div class="row ">
              <div class="col mb-3">
              <div class="card">
                <div class="card1" >
                    <p>Chicken Pasta</p>
                    <img src={A} class="small" alt=""></img>
                    <div class="go-corner" >
                    <div class="go-arrow">
                    <i class="bi bi-feather"></i>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-md-3 mb-3">
                <div class="card">
                <div class="card1" >
                    <p>BBQ Chicken</p>
                    <img src={B} class="small" alt=""></img>
                    <div class="go-corner">
                    <div class="go-arrow">
                    <i class="bi bi-feather"></i>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-md-3 mb-3">
                <div class="card">
                <div class="card1" >
                    <p>Banana Pancake</p>
                    <img src={C} class="small" alt=""></img>
                    <div class="go-corner" >
                    <div class="go-arrow">
                    <i class="bi bi-feather"></i>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="col-md-3 mb-3">
                <div class="card">
                <div class="card1">
                    <p>Sandwich Chicken</p>
                    <img src={D} class="small" alt=""></img>
                    <div class="go-corner">
                    <div class="go-arrow">
                    <i class="bi bi-feather"></i>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
            </body>
            </>
          );
    }
    export default Best;