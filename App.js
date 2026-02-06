/** @format */
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "parent", key: "chlid-1" }, [
  React.createElement("div", { id: "child", key: 1 }, [
    React.createElement(
      "h1",
      { key: "c1-h1" },
      "this is 1st h1 tag in side child",
    ),
    React.createElement(
      "h2",
      { key: "c1-h2" },
      "this is 1st h2 tag in side child",
    ),
  ]),
  React.createElement("div", { id: "child2", key: "chlid-12" }, [
    React.createElement(
      "h1",
      { key: "c2-h1" },
      "this is 1st h1 tag in side child2",
    ),
    React.createElement(
      "h2",
      { key: "c2-h2" },
      "this is 1st h2 tag in side child2",
    ),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
