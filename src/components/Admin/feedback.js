import React, { useState ,useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'; 

const Feedback = () => {
    let [Emails,setEmail] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8005/getEmail')
        .then((Emails)=>{setEmail(Emails.data)})
        .catch((err)=>console.log('Error: ',err)) 
        return;  
    },[])

    let FeedbackTable= Emails.map((i)=>
         <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Feedback</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{i.email}</td>
                    <td>{i.feedback}</td>
                </tr>
                </tbody>
            </table>
            </div>
    );
            
    return(
    <>
        <nav class='navbar'>
        <Link class='link' to="/MealsSevies">
            <button class="btn btn-warning rounded-lg"><i class="bi bi-box-arrow-left"></i></button>
            </Link>
        </nav>
        <div>
        {FeedbackTable}
        </div>
    </>
    );
}
export default Feedback
