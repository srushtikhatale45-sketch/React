import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body=()=>{
//Local State variable- Super Powerful Variable
const [listOfRestaurant,setListOfRestaurant]=useState(resList);
const[searchText,setSearchText]=useState(" ");
 console.log("Body Rendered")

 const[filteredRestaurant,setfilteredRestaurant]=useState(resList);

// useEffect(()=>{
//     fetchData();
// },[])
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
const onlineStatus=useOnlineStatus();
if(onlineStatus===false) return <h1>Looking like you are offline! Please Check Your Internet Connection</h1>

    return listOfRestaurant.length==0?<Shimmer/>:(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                       
                    }}/>
                    <button className="bg-green-100 m-4 px-4 py-2 rounded-lg" onClick={()=>{
                        // filter the restaurant cards and update the UI
                        // searchText
                        console.log(searchText);
                        const filteredRestaurant=listOfRestaurant.filter((restaurant)=>{
                            return restaurant.info.name .toLowerCase().includes(searchText.toLowerCase());
                        });
                        setfilteredRestaurant(filteredRestaurant);
                    }}> Search</button>
                   
                </div>
                <div className="search m-4 p-4">
                <button className="px-4 py-2 bg-gray-100" onClick={()=>{
                    
                    //Filter topic here
                   const filteredList= listOfRestaurant.filter(res=>res.info.avgRating > 4);
                   setListOfRestaurant(filteredList);
                    console.log(filteredList);


                }} >Top Rated Retaurant</button>
                </div>
            </div>

                <div className="flex-wrap rounded-lg">
                  {
                    filteredRestaurant.map((restaurant)=>{
                      return <Link key={restaurant.data.id} to={"/restaurant/"+ restaurant.data.id}><RestaurantCard  key={restaurant.info.id} resData={restaurant}/></Link>
                    })}
                 </div>

             </div>


    )
}
export default Body;