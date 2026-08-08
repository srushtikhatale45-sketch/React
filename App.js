/*

<div id="parent">
   <div id="child">
   <h1>Hello World From React</h1>
   </div>
</div>

 
 
 
 
 
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I am Child 1"),
    React.createElement("h2", {}, "Hello I am Child 2"),
  ]),React.createElement("div", { id: "child 2" }, [
    React.createElement("h1", {}, "Hello I am Child 1 2"),
    React.createElement("h2", {}, "Hello I am Child 2 2"),
  ])]
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React",
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);
