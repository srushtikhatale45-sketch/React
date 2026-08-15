import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
  -Logo
  -Nav Items

Body
  -search
  -Restaurant Container
     -restaurant Card
        - img
        - name of res,star,ratings,cusins,delivery time
 
Footer
    -copyrights
    -links
    -address
    -contact

*/
const Header=()=>{
    return (
        <div className="header">
            <div className="logo">
                <img className="img" src="https://www.magnific.com/free-vector/food-shopping-logo-template-design_23254587.htm#fromView=keyword&page=1&position=0&uuid=6ed02dc7-2747-4543-90ec-599f489aa02e&track=ais_hybrid&query=Food+app+logo"/>
            </div>
             <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
             </div>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>

                <div className="res-container">
                  <RestaurantCard/>

                 </div>

             </div>


    )
}

const RestaurantCard=()=>{
    return(
        <div className="res-card">
            <h3>Meghna Foods</h3>

        </div>
    )
}
const AppLayout=()=>{
     return (
        <div className="app">
           {/* Header */}
           {/* Body */}
           {/* Footer */}
              <Header/>
              <Body/>
         </div>   
     )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);