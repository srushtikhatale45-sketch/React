import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
    constructor(props) {
        super(props);
        //console.log("Parent Constructor");
    }
    componentDidMount(){
       // console.log("Parent Component Did Mount");
    }

    render(){
      //  console.log("Parent Render");
        return(
        
            <div>
                <h1>About Section is Present Here!</h1>
                <UserClass name={"First"} location={"Nashik"}/>
                 {/* <UserClass name={"Second"} location={"Nashik"}/>*/} </div> 
        )
    }   
}
export default About;
{
/*
parent constructor-
 parent render
  -First constructor
  -First render
  -Second construscor
  -Second render
  <--dom updated in a single batch-->
  -First didmount
  -Second didmount
parent didmount
  -
*/     }                                      