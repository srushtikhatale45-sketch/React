import { useState, useEffect } from "react";
const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus]=useState(true);
// check online status of user
    useEffect(()=>{
     window.addEventListener("offline",()=>{
        setOnlineStatus(false);
    })
    window.addEventListener("online",()=>{
        setOnlineStatus(true);
    })
    },[]);



   //boolean value to check if user is online or offline
   return onlineStatus;

}

export default useOnlineStatus;