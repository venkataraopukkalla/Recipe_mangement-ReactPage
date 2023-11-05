import React from "react";

import "./style.css";



function Nav(){
    return <div className="container">
     <div className="title">
     <h2>Recipe Food Order</h2>  
     </div>

     <div className="nav-item">
        <ul>
         <li><a href="/" >Home</a></li> 
         <li><a href="/api">API Explorer</a></li> 
         <li><a href="/documentation">Documentation</a></li> 
         <li><a href="/login">Login</a></li> 
        </ul>

     </div>

    </div>

}
export default Nav;