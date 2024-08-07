import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
import Users from "./pages/users/users";
import Pairs from "./pages/bots/pairs";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Login />,
  },
  {
    path: "/webmorda/users",
    element: <Users />
  },
  {
    path: "/webmorda/pairs",
    element: <Pairs />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
