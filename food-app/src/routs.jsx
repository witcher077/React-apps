import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { Home } from "./Pages/Home";
import Team, { ProductListing } from "./Pages/ProductListing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: rootLoader,
    children: [
      {
        path: "home",
        element: <Home />,
        loader: teamLoader,
      },
      {
        path: "products",
        element: <ProductListing />,
        loader: teamLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
