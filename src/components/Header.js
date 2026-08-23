import { useState ,useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    let btnName="Login";
    useEffect(()=>{
    console.log("useEffect Hook");
},[])


    const [btnNameReact,setbtnNameReact]=useState("Login");
    console.log("Header Render");

    return (
        <div className="header">
            <div className="logo">
                <img className="img" src={LOGO_URL}/>
            </div>
             <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-button" onClick={()=>{btnNameReact=="Login"? setbtnNameReact("Logout"): setbtnNameReact("Login");
                    console.log(btnNameReact);
                    }}>{btnNameReact}</button>
                </ul>
             </div>
        </div>
    )
}
export default Header;