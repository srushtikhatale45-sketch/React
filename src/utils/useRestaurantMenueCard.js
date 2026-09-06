import {useState, useEffect} from "react";
import { MENUE_URL } from "../utils/constants";
import RestaurantCard from "../components/RestaurantCard";
const useRestaurantMenueCard=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        const fetchMenue= async()=>{
            const data = await fetch(MENUE_URL + resId);
            const json=await data.json();
            setResInfo(json.data);
        }
        fetchMenue();
    },[]);

    return resInfo;

}

export default useRestaurantMenueCard;