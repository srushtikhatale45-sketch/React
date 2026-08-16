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
                  <RestaurantCard resName="Meghna Foods" cusine="Biryani,North Indian,Asian"/>
                  <RestaurantCard resName="KFC" cusine="Fast Food,Burgers"/>
                  

                 </div>

             </div>


    )
}


const RestaurantCard=(props)=>{
    console.log(props);
    return(
        <div className="res-card" style={{backgroundColor:"#b49999"}}>
            <img className="res-logo" src="https://unsplash.com/photos/vegetable-and-meat-on-bowl-kcA-c3f_3FE" alt="Restaurant Logo"/>
            <h3>{props.resName}</h3>
            <h4>{props.cusine}</h4>
            <h4>4.5 stars</h4>
            <h4>38 minutes</h4>

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