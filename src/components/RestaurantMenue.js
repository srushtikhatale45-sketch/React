import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenue=()=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenue();
    },[]);
    const fetchMenue =async ()=>{
       const data= await fetch("");
       const json = await data.json();
       console.log(json);
       setResInfo(json.data);

    }
    const {name,cuisines,costForTwoMessage}=resInfo?.data?.cards[0]?.card?.card?.info;

    const {itemCards}= resInfo?.cards[2]?.groupedCard.cardGroupMap?.RestaurantMenue?.REGULAR?.cards[1]?.card?.card;


    return resInfo==null?<Shimmer/>:(
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}- {costForTwoMessage}</p>
            <ul>
                <li>Biryani</li>
                <li>Maski</li>
                <li>Chisee Burger</li>
            </ul>
        </div>
    )
}
export default RestaurantMenue;