import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import OperationsPage, { load as operationsLoad } from "./pages/OperationsPage";
import OperationDetailPage, {
  load as OperationDetailLoad,
} from "./pages/OperationDetailPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import NewOperationPage from "./pages/NewOperationPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "user", element: <UserPage /> },
        {
          path: "operations",
          element: <OperationsPage />,
          loader: operationsLoad,
        },
        { path: "about", element: <AboutPage /> },
        {
          path: "operations/:id",
          element: <OperationDetailPage />,
          loader: OperationDetailLoad,
        },
        { path: "operations/new", element: <NewOperationPage /> },
      ],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/registration", element: <RegistrationPage /> },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
