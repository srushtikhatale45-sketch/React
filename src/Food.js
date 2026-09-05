import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenue from "./components/RestaurantMenue"
// import Grocery from "./components/Grocery";

//chunking
//lazy loading
//dynamic bundling
//code splitting
//on demand loading
//dynamic import

const Grocery=lazy(()=>import("./components/Grocery"));

const About =lazy(()=>import("./components/About"))



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
              {/* if path is / */}
              <Outlet/>
         </div>   
     )
}
const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      children:[
      {
      path:"/",
      element:<Body/>,
      },
         {
      path:"/about",
      element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
      },
      {
      path:"/contact",
      element:<ContactUs/>,
      },
      {
      path:"/restaurant/:resId",
      element:<RestaurantMenue/>,
      }
      ,
      {
      path:"/grocery",
      element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
      }
      ],
      errorElement:<Error/>
     
   },
   
   
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);