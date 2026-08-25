import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENUE_URL } from "../utils/constants";
const RestaurantMenue=()=>{
    const [resInfo,setResInfo]=useState(null);

    const {resId}=useParams();


    useEffect(()=>{
        fetchMenue();
    },[]);
    const fetchMenue =async ()=>{
       const data= await fetch({MENUE_URL}+{resId});
       const json = await data.json();
       console.log(json);
       setResInfo(json.data);

    }
    const {name,cuisines,costForTwoMessage}=resInfo?.data?.cards[0]?.card?.card?.info;

    const {itemCards}= resInfo?.cards[2]?.groupedCard.cardGroupMap?.RestaurantMenue?.REGULAR?.cards[1]?.card?.card;

    if(resInfo==null) return(<Shimmer/>);
    return(
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}- {costForTwoMessage}</p>
            <ul>
                {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}-{"Rs."}{item[0].card.info.price/100 ||item.card.info.defaultPrice/100}</li>)}
                <li>{itemCards[0].card.info.name}</li>
                <li>Maski</li>
                <li>Chisee Burger</li>
            </ul>
        </div>
    )
}
export default RestaurantMenue;