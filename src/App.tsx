import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import Blog from "./screens/Blog/Blog";
import BlogPost from "./screens/Blog/BlogPost";
import Faq from "./screens/Faq/Faq";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/blog/:slug",
      element: <BlogPost />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
  ]);

  return <RouterProvider router={browserRouter} />;
}

export default App;
