import {useState} from "react";
const User =({name}) =>{
    const [count,setCount]=useState(0);
     const [count2,setCount2]=useState(0);



     useEffect(async ()=>{
        const data=await fetch("https://api.github.com/users/srushtikhatale45-sketch");
        const json=data.json();
     },[])
    return(
        <div className="user-card">
            <h1>Count={count}</h1>
            <h2>Name:{name}</h2>
            <h3>Location:Nashik</h3>
            <h4>Contact:srushti@njchiuhf</h4>
        </div>
    )
}
export default User;