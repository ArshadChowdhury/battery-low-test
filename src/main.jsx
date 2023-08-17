import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import FormSecondStage from "./second-step.jsx";
import FormFirstStage from "./index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormFirstStage />,
  },
  {
    path: "second-step",
    element: <FormSecondStage />,
  },
  {
    path: "result-page",
    element: <FormSecondStage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
