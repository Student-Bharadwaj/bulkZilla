import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import SplitDetails from "./pages/SplitDetails";
import WeeklySchedule from "./pages/WeeklySchedule";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="splitWorkouts" element={<SplitDetails />} />
      <Route path="weeklySchedule" element={<WeeklySchedule/>} />
         </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
