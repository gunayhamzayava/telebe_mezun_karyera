import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Xidmetler from "../pages/Xidmetler";
import Tedbirler from "../pages/Tedbirler";
import Layout from "../components/shared/Layout";
import Elaqe from "../pages/Elaqe";
import SingleXidmet from "../pages/SingleXidmet";
import Department from "../pages/Department";
import Singletedbir from "../pages/Singletedbir";
import SingleAdpu from "../pages/SingleAdpu";
import SingleRehberlik from "../pages/SingleRehberlik";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/service",
        element: <Xidmetler />,
      },
      {
        path: "/service/:id",
        element: <SingleXidmet />,
      },
      {
        path: "/conference",
        element: <Tedbirler />,
      },
      {
        path: "/conference/:id",
        element: <Singletedbir />,
      },
      {
        path: "/department",
        element: <Department />,
      },
      {
        path: "/relations",
        element: <Elaqe />,
      },
      {
        path: "/adpu",
        element: <SingleAdpu />,
      },
      {
        path: "/rehberlik",
        element: <SingleRehberlik />,
      },

    ],
  },
]);
