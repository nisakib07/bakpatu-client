import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import Teachers from "./Pages/Teachers/Teachers";
import AddTeacher from "./Pages/Teachers/AddTeacher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Courses from "./Pages/Courses/Courses";
import AdminCourseDetails from "./Pages/AdminCourseDetails/AdminCourseDetails";
import AddCourse from "./Pages/AddCourse/AddCourse";
import AddClass from "./Pages/AddClass/AddClass";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/adminLogin",
    element: <AdminLogin></AdminLogin>,
  },
  {
    path: "/bpbpadmin",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/bpbpadmin/teachers",
        element: <Teachers></Teachers>,
      },
      {
        path: "/bpbpadmin/addTeacher",
        element: <AddTeacher></AddTeacher>,
      },
      {
        path: "/bpbpadmin/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/bpbpadmin/adminCourseDetails/:id",
        element: <AdminCourseDetails></AdminCourseDetails>,
      },
      {
        path: "/bpbpadmin/addCourse",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "/bpbpadmin/addClass/:id",
        element: <AddClass></AddClass>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
