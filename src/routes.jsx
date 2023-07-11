

import {createBrowserRouter,} from "react-router-dom";
import { Home } from "./pages/Home";
import { MainLayout } from "./layouts/MainLayout";
import { Medical } from "./pages/Medical";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {
         path:'/',
         element:<Home/>
      },
      {
        path:'medical',
        element:<Medical/>
     }
    ]
  }
  
]);