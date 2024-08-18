import React from "react";
import "../styles/Nav.css";
function Nav(){
    return(
       <div class="nav">
        <div><h2 class="logo">Anup <span>Tigga</span></h2></div>
        <div><ul class="nav_list">
            <li class="active">Home</li>
            <li >Services</li>
            <li>Skills</li>
            <li>Education</li>
            <li>Experience</li>
        </ul></div>
        <div><button class="btn">Contact</button></div>
       </div> 
    );
}
export default Nav;