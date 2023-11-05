import React, { useState } from "react";
import "./api_template.css";
import ApiNav from "./RecipeMangement/api-nav";




export default function ApiTemplate(){
    const [setRecipeManger,showRecipeManger]=useState(false);
    function showOptions(){
        showRecipeManger(true);
    }

    return <div className="main-container">
        <div className="api-container">
        <div className="api-item">
            <h2 onClick={showOptions}>Recipe Management</h2>
            <h2>User Management</h2>
            <h2>Order Processing</h2>
            <h2>Search and Filters</h2>
        </div>

        </div>

       <div className="api-nav">
        {setRecipeManger && <ApiNav/> }

       </div>
        
    </div>

}