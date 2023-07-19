

import { createBrowserRouter, } from "react-router-dom";
import { Home } from "./pages/Home";
import { MainLayout } from "./layouts/MainLayout";
import { Medical } from "./pages/Medical";
import { GreenCard } from "./pages/GreenCard";
import { Rca } from "./pages/Rca";
import { MedicalFacultative } from "./pages/MedicalFacultative";
import { Ipoteca } from "./pages/Ipoteca";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'medical',
        element: <Medical />
      },
      {
        path: 'green-card',
        element: <GreenCard />
      },
      {
        path: 'rca',
        element: <Rca/>
      },
      {
        path: 'medical-facultative',
        element: <MedicalFacultative/>
      },
      {
        path: 'ipoteca',
        element: <Ipoteca/>
      }
    ]
  }

]);