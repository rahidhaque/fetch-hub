import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";

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
      {
        path: "apps",
        loader: async () => {
          const res = await fetch('/apps.json');
          return res.json();
        },
        Component: Apps,
      },
      {
        path: "appDetails/:id",
        loader: async () => {
          const res = await fetch('/apps.json');
          return res.json();
        },
        Component: AppDetails,
      }
    ],
  },
]);

export default router;