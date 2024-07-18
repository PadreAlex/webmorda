import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
import Users from "./pages/users/users";
import Pairs from "./pages/bots/pairs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/users",
    element: <Users />
  },
  {
    path: "/pairs",
    element: <Pairs />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
