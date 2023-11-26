import { RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: "/browser", element: <Body /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
