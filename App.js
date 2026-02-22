/** @format */

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header/Header";
import Body from "./src/component/Body/Body";
import { Provider } from "react-redux";
import Contact from "./src/component/Contact/Contact.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "./src/utils/appStore.js";

const About = lazy(() => import("./src/component/About/About"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className='Container'>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback='Lodding......'>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
