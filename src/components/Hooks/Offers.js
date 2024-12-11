import React from "react"

let date = new Date();
let day = date.getDate(); 
let month = date.getMonth() +1 ; 
let year = date.getFullYear(); 
let fulldate = day + "-" + month  + "-" + year;
let offer; 
    if(day===12 || day===10 || day===15 ||
        day===20 || day===25 || day===30){
        offer ='🎊 Offer 25% for UTAS Student use this code : d39174 🎉'
    }else{
        offer ='No Offer'
    }

function Offers()
{
return(
<>
<nav class="navbar fixed-bottom">
<marquee direction = "right" class="text-bg-warning" style={{color:'#1f4625'}}>
<h2>Welcome to The Better Health website! Today is {fulldate} : {offer} </h2>
</marquee>
</nav>
</>
);
}
export default Offers;   