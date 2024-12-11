import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Counter from "./Like";


    
    function Quotes(){
        return (
            <>
            <body class="quots-body">
            <div class="container">
                <h1 id="best"> Healthy Quotes <i class="bi bi-chat-quote-fill"></i></h1>
              <div class="row" id='row-poss'>
                <div class="col">
                    <div class="cookieCard">
                        <p class="cookieHeading">Nutrition</p>
                        <p class="cookieDescription">Let food be thy medicine and medicine be thy food.</p>
                        <Counter/>
                        
                    </div> 
                </div>
                <div class="col">
                <div class="cookieCard">
                        <p class="cookieHeading">Self-Care</p>
                        <p class="cookieDescription">Self-care is giving the world the best of you, instead of what's left of you.</p>
                        <Counter/>
                    </div>  
                </div>
                <div class="col">
                <div class="cookieCard">
                        <p class="cookieHeading">Mindfulness</p>
                        <p class="cookieDescription">The power of now: the more you engage in any spiritual practice or mindfulness, the better you get at it.</p>
                        <Counter/>
                    </div>   
                </div>
                <div class="col">
                <div class="cookieCard">
                        <p class="cookieHeading">Wellness</p>
                        <p class="cookieDescription">Health is a state of complete physical, mental, and social well-being, not merely the absence of disease or infirmity.</p>
                        <Counter/>
                    </div>  
                </div>
                <div class="col">
                <div class="cookieCard">
                        <p class="cookieHeading">Mental Health</p>
                        <p class="cookieDescription">Taking care of your mental health is as important as taking care of your physical health.</p>
                        <Counter/>
                    </div>   
                </div>
                <div class="col">
                <div class="cookieCard">
                        <p class="cookieHeading">Exercise</p>
                        <p class="cookieDescription">The only bad workout is the one that didn't happen. </p>
                        <Counter/>
                    </div>   
                </div>
              </div>
            </div>
            </body>
            </>
          );
    }
    export default Quotes;