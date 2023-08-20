import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";

import "./index.css";

import FormSecondStage from "./second-step.jsx";
import FormFirstStage from "./index.jsx";
import ResultPageWithDownload from "./result-page";

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
    element: <ResultPageWithDownload />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
