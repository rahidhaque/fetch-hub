import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch('/apps.json');
          return res.json();
        },
        Component: Home,
      },
    ],
  },
]);

export default router;