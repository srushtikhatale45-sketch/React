import React from "react";
import ReactDOM from "react-dom/client";

//React.CreateElement =>Object => HTML(DOM)

const heading = React.createElement("h1",{id:"heading"}, "Namaste React");







const jsxHeading = <h1>Namaste React using JSX !</h1>

const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);

