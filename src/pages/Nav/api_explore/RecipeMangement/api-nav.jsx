import React,{ useState } from "react";
import AddRecipes from "./addrecipes";
import "./api-nav.css";

import DisplayRecipe from "./displayrecipe";



export default function ApiNav(){
   const[setAddRecipe,showAddRecipe]=useState(false);
   // for display
   const [setDisplay,showDisplay]=useState(false);
   //function 
   function showRecipeLogic(){ 
      showAddRecipe(setAddRecipe?false:true);
      showDisplay(false);
      
   }
   
   function showDisplayLogic(){
      showDisplay(setDisplay?false:true);
      showAddRecipe(false);
     
   }
    return <>
       <div className="api-nav-container">
       <div className="api-item">
         <ul>
            <li><h4 onClick={showRecipeLogic}>Add Recipes</h4></li>
            <li><h4 href="/">Delete Recipe</h4></li>
            <li><h4 href="/"onClick={showDisplayLogic}>Display </h4></li>
           
         </ul>

       </div>
       
       {setAddRecipe && <AddRecipes/>}
        {setDisplay && <DisplayRecipe/>}

       </div>
    </>
}