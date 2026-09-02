import {useState, useEffect} from "react";
import { MENUE_URL } from "../utils/constants";
const useRestaurantMenueCard=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        const fetchMenue= async()=>{
            const data = await fetch(MENUE_URL + resId);
            const json=await data.json();
            setResInfo(json.data);
        }
    },[]);

    return resInfo;

}
export default useRestaurantMenueCard;