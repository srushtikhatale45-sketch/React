import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect, use} from "react";
import Shimmer from "./Shimmer";
const Body=()=>{
//Local State variable- Super Powerful Variable
const [listOfRestaurant,setListOfRestaurant]=useState([]);
const[searchText,setSearchText]=useState(" ");
 console.log("Body Rendered")

 const[filteredRestaurant,setfilteredRestaurant]=useState([]);

useEffect(()=>{
    fetchData();
},[])
console.log("Body Rendered");

const fetchData = async () => {
    const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.9728896&lng=73.8229516&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();

 
    setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
//conditional renderring

//Normal Js Variable
// let listOfRetaurant=[];
//Ternary Operator
    return listOfRestaurant.length==0?<Shimmer/>:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                       
                    }}/>
                    <button onClick={()=>{
                        // filter the restaurant cards and update the UI
                        // searchText
                        console.log(searchText);
                        const filteredRestaurant=listOfRestaurant.filter((restaurant)=>{
                            return restaurant.info.name .toLowerCase().includes(searchText.toLowerCase());
                        });
                        setfilteredRestaurant(filteredRestaurant);
                    }}> Search</button>
                   
                </div>
                <button className="filter-btn" onClick={()=>{
                    
                    //Filter topic here
                   const filteredList= listOfRestaurant.filter(res=>res.info.avgRating > 4);
                   setListOfRestaurant(filteredList);
                    console.log(filteredList);


                }} >Top Rated Retaurant</button>
            </div>

                <div className="res-container">
                  {
                    filteredRestaurant.map((restaurant)=>{
                      return <RestaurantCard  key={restaurant.info.id} resData={restaurant}/>
                    })}
                 </div>

             </div>


    )
}
export default Body;