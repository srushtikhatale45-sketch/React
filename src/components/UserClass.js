import React from "react";
class UserClass extends React.Component{
    constructor(props){
          super(props);
          console.log(props);
          this.state={
            count:0,
            count2:1,
            userInfo:{
                name:"srushti",
                location:"Nashik",
                avtar_url:"https://avatars.githubusercontent.com/u/120660168?v=4",
            }
          }
            }
        
       // console.log(this.props.name+"ChildConstructor");
    

    async componentDidMount(){
      //  console.log(this.props.name+"Child Component Did Mount");

      //api call
      const data = await fetch("https://api.github.com/users/srushtikhatale45-sketch");
      const json= await data.json();
      this.setState({
        userInfo:json,
    })
    

      console.log(json);
    }
    componentDidUpdate(){
        console.log("Component Did Update");
    }
    componentWillUnmount(){

    }
    render(){
      //  console.log(this.props.name+"Child Render");
        const {name,location,avtar_url}=this.state.userInfo;
       
        const{count}=this.state;
       // console.log("Render");
        return(
            <div className="user-card">
                <h1>Count={count}</h1>
                <button onClick={()=>{
                    // Never Update state directly
                    this.setState({
                       count:this.state.count+1,
                    });
                }}>Count Increase</button>
        
                 <img src={avtar_url} alt="User Avatar"/>
                <h1>Name:{name}</h1>
                <h2>Location:{location}</h2>
                <h3>Contact:srushti@bcuhufdj</h3>
            </div>
        )
    }
}
export default UserClass;


/*
<Mounting Phase>
 constructor (dummy)
 render(dummy)
 <HTML dummy>
  ComponentDidMount(
    API call
    this.setState() updated state variable 
    )
<Update Phase>

  render(API data)
  <HTML API data>
  ComponentDidUpdate()//checks the updated state variable and re-render the component
  ComponentWillUnmount()//when the component is removed from the DOM

*/