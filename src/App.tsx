import { useState } from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import Blog from "./screens/Blog/Blog";

function App() {
  const broweserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);

  return <RouterProvider router={broweserRouter} />;
}

export default App;
