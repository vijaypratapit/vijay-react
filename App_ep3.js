/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className='head'>Head component</h1>;

const Heading = () => (
  <>
    <Title />
    <h1 className='heading'>Heading Component</h1>;
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
