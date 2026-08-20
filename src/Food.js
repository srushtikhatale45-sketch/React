import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
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

// not using key;o <<<index as key<<<<unique key
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