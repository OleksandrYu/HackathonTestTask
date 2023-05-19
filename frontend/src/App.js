import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout, { loader as rootLoader } from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import SingleOperationsPage, {
  load as operationsLoad,
} from "./pages/SingleOperationsPage";
import OperationDetailPage, {
  load as OperationDetailLoad,
} from "./pages/OperationDetailPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage, { action } from "./pages/RegistrationPage";
import NewOperationPage from "./pages/NewOperationPage";
import AboutPage from "./pages/AboutPage";
import OperationsPage from "./pages/OperationsPage";
import AnalyticsPage from "./pages/AnalyticsPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <HomePage />, loader: rootLoader },
        { path: "user", element: <UserPage />, loader: rootLoader },
        {
          path: "operations",
          element: <OperationsPage />,
          loader: rootLoader,
        },
        {
          path: "analytics",
          element: <AnalyticsPage />,
          loader: operationsLoad,
        },
        {
          path: "operations/single",
          element: <SingleOperationsPage />,
          loader: operationsLoad,
        },
        { path: "about", element: <AboutPage />, loader: rootLoader },
        {
          path: "operations/single/:id",
          element: <OperationDetailPage />,
          loader: OperationDetailLoad,
        },
        { path: "operations/single/new", element: <NewOperationPage /> },
      ],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/registration", element: <RegistrationPage />, action: action },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
