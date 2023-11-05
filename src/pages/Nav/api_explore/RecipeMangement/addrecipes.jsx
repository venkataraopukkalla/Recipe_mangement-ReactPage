
import React, { useState } from "react";
import "./addrecipe.css"
import axios from "axios";
import { toast } from 'react-toastify';



function AddRecipes(){
  // set image
  const [selectedImage, setSelectedImage] = useState(null);

  const handImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };
 
  // assign 
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setingredients] = useState('');
  const [recipeInformation, setRecipeInformation] = useState('');
  const [recipeCost, setRecipeCost] = useState('');


  //submit
  const handSubmit = async (e) => {

    
    e.preventDefault();
    
    //if without selecting image 
    if (!selectedImage) {
      alert('Please select an image to upload.');
      return;
    }
   

        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
   

        const formData={
          recipeName,
          recipeInformation,
          recipeCost,
          ingredients,
        }
     const response  = await axios.post('http://localhost:8080/recipes', formData, config);

    if (response.status === 200) {
      console.log('Form data posted successfully!');
       // Reset the state of the form fields
       setRecipeName('');
       setingredients('');
       setRecipeInformation('');
       setRecipeCost('');

       //Toast sucessFull message
       toast.success("Sucessfull Add Recipe 😋");
      
      
    } else {
      console.error('Error posting form data:', response.data);
      //toast error message
      toast.error("Error ..please check console")
    }

    // now image logic --------------------------------------------------------
         
      // mow append image to FormData object
      const imageDate= new FormData();
      imageDate.append('image', selectedImage);
      // image post using axios 
      axios.post('http://localhost:8080/addimages', imageDate)
        .then((response) => {
          if (response.status === 200) {
            
            console.log('Image uploaded successfully.');
            
             // Reset the state of the form fields

            // Handle the success response from the API as needed
          } else {
            console.log('Error uploading image.');
            // Handle the error response from the API as needed
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });

       



  };


    return <>
        <div className="recipes-container">

         <div className="recipe-title">
           <h2>Add Recipes</h2>
         </div>
         
         <div className="recipe-form">
                <form >
               {/* Enter recipe Name -----
               */}
                <label  className="label-title" name="name" >Enter recipe Name </label>
                <label>
                <input  type="text"  value={recipeName} onChange={e=>setRecipeName(e.target.value)} /><br/>
                </label>

                {/* Enter  Recipe Description -----
               */}
                <label  className="label-title" >Enter Recipe Description </label>
                 <textarea className="desc" rows="4" cols="50" name="des" value={recipeInformation} onChange={e=>setRecipeInformation(e.target.value)} ></textarea>


                 {/* Enter  Recipe Cost-----
               */}
                <label  className="label-title">Enter Cost of recipe:</label>
                <label>
                <input type="text" name="cost" value={recipeCost} onChange={e=>setRecipeCost(e.target.value)} /><br/>
                </label>

                {/** Enter Recipe ingredients */}
                <label  className="label-title" >Enter Recipe ingredients </label>
                 <textarea className="ingredients" rows="2" cols="30" name="ingredients" value={ingredients} onChange={e=>setingredients(e.target.value)} ></textarea>


               

                 {/* choose image-----
               */}

                 <label className="label-title">Choose an recipe image</label>
               <input className="image-file" type="file" id="image" name="image" accept="image/*" onChange={handImageChange}></input><br/> 

               <button onClick={handSubmit}>Submit</button>

                </form>

         </div>
        

        </div>
    </>
}

export default AddRecipes;