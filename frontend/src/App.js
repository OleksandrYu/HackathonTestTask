import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import OperationsPage from "./pages/OperationsPage";
import OperationDetailPage from "./pages/OperationDetailPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "user", element: <UserPage /> },
        { path: "operations", element: <OperationsPage /> },
        { path: "operations/:id", element: <OperationDetailPage /> },
      ],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/registration", element: <RegistrationPage /> },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
