/** @format */
import React from "react";
import ReactDOM from "react-dom/client";
//React.createElement => object =>HTMLElement(render)
const heading = React.createElement("h1", {}, "Hello world");
console.log("@@heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//JSX=>Babel transpiles it to React.createElement => ReactElement.js object=>HTMLElement(render)
const jsxElment = (
  <>
    <h1 tabIndex={1}>Hello worl using jsx</h1>
    <h2>new</h2>
  </>
);
console.log("@@jsxElment", jsxElment);
root.render(jsxElment);
