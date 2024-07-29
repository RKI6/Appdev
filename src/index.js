import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ToggleTagAndContent from "./ToggleTagAndContent";
import ErrorPage from "./router_components/ErrorPage";
import HomeChild1 from "./router_components/child_home_component/HomeChild1";
import HomeChild2 from "./router_components/child_home_component/HomeChild2";
import Teams from "./router_components/dynamic_routing_comp/Teams";
import Team from "./router_components/dynamic_routing_comp/Team";
import BootGrid from "./Bootstrap/BootGrid";
import HoverDropdown from "./Bootstrap/BootstrapHoverDrop";
import BootstrapNav from "./Bootstrap/BootstrapNav";
import Home from "./Bootstrap/Home";
import Layout from "./Bootstrap/Layout";
import CasesCount from "./Bootstrap/CasesCount";
import MyNavbar from "./Bootstrap/RespNavBar";
import MyChatBot from "./Bootstrap/MyChatBot";
import Register from "./Bootstrap/ECourt/Register";
import Login from "./Bootstrap/ECourt/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home/children1",
        element: <HomeChild1 />,
        errorElement: <ErrorPage />,
      },
      {
        path: "home/children2",
        element: <HomeChild2 />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/toggletagandcontent",
    element: <ToggleTagAndContent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/teams",
    element: <Teams />,
    children: [
      {
        path: "/teams/:teamId",
        element: <Team />,
      },
    ],
  },
  {
    path: "/bootstrap/grid",
    element: <BootGrid />,
  },
  {
    path: "bootstrap/hover-dropdown",
    element: <HoverDropdown />,
  },

  {
    path: "/bootstrap/navbar",
    element: <BootstrapNav />,
  },
  {
    path: "/respnavbar" ,
    element : <MyNavbar />
  } ,
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path : '/home/casecount' , 
        element : <CasesCount />
      }
    ],
  }, 
  {
    path : '/chat' ,
    element : <MyChatBot />
  } ,
  {
    path : '/register' , 
    element : <Register />
  } , 
  {
    path : '/login' , 
    element : <Login />
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
