import React from "react";
import "./cardDisplay.css"

// defined function
export default function RenderTableRows(props) {
    return  <tr key={props.no}>
    <td className="col-id">{props.no}</td>
    <td className="col-image">
            <img  className="recipeImage" src={props.imageUrl} alt="Chicken Tikka Masala" />
        
    </td>
    <td className="col-name">{props.name}</td>
    <td className="col-des">{props.desc}</td>
    <td className="col-amount">{props.cost}</td>
    
  </tr>
  }

function CardDisplay(){
    // const { data } = props;
    // if (!data) {
    //   return null;
    // }
    return <div className="tableFormation">
     {/**create table design */}
        <table>
        {/** table row for handing */}
        <thead>
            <tr>
                <th className="col-id">Id</th>
                <th className="col-image">Image</th>
                <th className="col-name">RecipeName</th>
                <th className="col-des">RecipeDesc</th>
                <th className="col-amount">Amount</th>
            </tr>
        </thead>
       
       
        
       

        </table>
    </div>

}
export {CardDisplay};
