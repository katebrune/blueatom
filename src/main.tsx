import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { MarketingPage } from "./features/marketing/Marketing.page.tsx";
import { ReplPage } from "./features/repl/Repl.page.tsx";
import { RootLayout } from "./features/rootLayout/Root.layout.tsx";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { index: true, element: <MarketingPage /> },
//       {
//         path: "/repl",
//         element: <ReplPage />,
//       }
//     ],
//   },
// ]);

const replOnlyRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <ReplPage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={replOnlyRouter} />
  </React.StrictMode>
);
