import React, { useEffect, useState } from "react";
import RenderTableRows, { CardDisplay } from "./cardDisplay";
import axios from "axios";
import "./displayrecipe.css"



function DisplayRecipe() {
  // useState hooks for recipe and image data
  const [recipeData, setRecipeData] = useState([]);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    // Fetch recipe data from the "recipes" endpoint
    axios.get("http://localhost:8080/recipes")
      .then((res) => {
        setRecipeData(res.data);
      })
      .catch((error) => {
        console.log("Error from Recipe API:", error);
      });

   // Fetch image data from the "showmeimages" endpoint
    axios.get("http://localhost:8080/showmeimages")
      .then((res) => {
        setImageData(res.data);
      })
      .catch((error) => {
        console.log("Error from Image API:", error);
      });
  }, []);

  // inner function
  function box(recipeData){
   // const isImageMatching=imageData.find(e => recipeData.id === imageData.id);
   const matchingImage = imageData.find(image => image.id === recipeData.id);
   const imageSrc = matchingImage ? matchingImage.imageName : "";
   const fullImageurl=`http://localhost:8080/images/${imageSrc}`
  
    return <RenderTableRows
        key={recipeData.id}
        no={recipeData.id}
        imageUrl={fullImageurl}
        name={recipeData.recipeName}
        desc={recipeData.recipeInformation}
        cost={recipeData.recipeCost}
      />
    

  }

  return (
    <div className="display-container">
      <div className="display-card">
        {/** table header */}
         {<CardDisplay/>}
          {recipeData.map(box)}
      </div>
    </div>
  );
}

export default DisplayRecipe;
