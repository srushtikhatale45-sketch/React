import React from "react";
import ReactDOM from "react-dom/client";

//React.CreateElement =>Object => HTML(DOM)

// const heading = React.createElement("h1",{id:"heading"}, "Namaste React");






//JSX=>Babel Transpiles it to React.CreateElement =>Object => HTML(DOM)

// React element
const jsxHeading = <h1 >Namaste React using JSX !</h1>
console.log(jsxHeading);


// React component
// Type1.Class based component 2.Function based component
const ele=<span>React Element</span>
const title =(

<h1>{ele} Here the React Start!!</h1>
);

const number=1000;
// Function based component
const HeadingComponent=()=>{
    return(
    <div id ="container"> 
       {title}  {/* Component Composition */}
      
       <title></title>
        <h2>{number}</h2>
        <h1>Namaste React from function component</h1>
        <h2>Function component present here</h2>
    </div>
    )
}

// const HeadingComponent2 =()=> <h1>This is the clear Syntax for function component</h1>;


const root=ReactDOM.createRoot(document.getElementById("root"));
// console.log(jsxHeading);
// root.render(jsxHeading);
root.render(<HeadingComponent/>);

