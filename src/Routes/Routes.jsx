import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ErrorPageApp from "../pages/ErrorPageApp/ErrorPageApp";
import InstalledAps from "../pages/InstalledApps/InstalledAps";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,     
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("/apps.json");
          return res.json();
        },
        Component: Home,
      },
      {
        path: "apps",
        loader: async () => {
          const res = await fetch("/apps.json");
          return res.json();
        },
        Component: Apps,
      },
      {
        path: "installed",
        loader: async () => {
          const res = await fetch("/apps.json");
          return res.json();
        },
        Component: InstalledAps,
      },
      {
        path: "appDetails/:id",
        Component: AppDetails,
        loader: async ({ params }) => {
          const res = await fetch("/apps.json");
          const apps = await res.json();

          const app = apps.find((a) => a.id === parseInt(params.id));

          if (!app) {
            throw new Response("App not found", { 
              status: 404,
              statusText: "Not Found"
            });
          }

          return app;
        },
        errorElement: <ErrorPageApp />
      },
    ],
  },
]);

export default router;
