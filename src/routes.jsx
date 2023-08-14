

import { createBrowserRouter, } from "react-router-dom";
import { Home } from "./pages/Home";
import { MainLayout } from "./layouts/MainLayout";
import { Medical } from "./pages/Medical";
import { GreenCard } from "./pages/GreenCard";
import { Rca } from "./pages/Rca";
import { MedicalFacultative } from "./pages/MedicalFacultative";
import { Ipoteca } from "./pages/Ipoteca";
import { Blog } from "./pages/Blog";
import { BlogSingle } from "./pages/BlogSingle";
import { Contact } from "./pages/Contact/Contact";

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
        element: <Rca />
      },
      {
        path: 'medical-facultative',
        element: <MedicalFacultative />
      },
      {
        path: 'ipoteca',
        element: <Ipoteca />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'blog/:id',
        element: <BlogSingle />
      },
      {
        path: 'contact',
        element: <Contact />
      },

    ]
  }

]);