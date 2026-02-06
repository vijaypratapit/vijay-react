/** @format */

// const heading = React.createElement(
//   "h1",
//   { id: "heading", data: "new data" },
//   "Hello woreld from React!",
// );
// console.log("welcome");
// console.log(heading);
{
  /* <div id='parent'>
  <div id='child'>
    <h1>this is 1st h1 tag in side child</h1>
  </div>
  <div id='child2'>
    <h1>this is 1st h1 tag in side child</h1>
  </div>
</div>; */
}
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is 1st h1 tag in side child"),
    React.createElement("h1", {}, "this is 1st h2 tag in side child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is 1st h1 tag in side child2"),
    React.createElement("h1", {}, "this is 1st h2 tag in side child2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
