import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
//Local State variable- Super Powerful Variable
const [listOfRestaurant,setListOfRestaurant]=useState(resList);


//Normal Js Variable
// let listOfRetaurant=[];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    
                    //Filter topic here
                   const filteredList= listOfRestaurant.filter(res=>res.info.avgRating > 4);
                   setListOfRestaurant(filteredList);
                    console.log(filteredList);


                }} >Top Rated Retaurant</button>
            </div>

                <div className="res-container">
                  {
                    listOfRestaurant.map((restaurant)=>{
                      return <RestaurantCard  key={restaurant.info.id} resData={restaurant}/>
                    })}
                 </div>

             </div>


    )
}
export default Body;