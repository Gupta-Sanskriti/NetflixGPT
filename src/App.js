import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Browse from "./Pages/Browse";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: "/browse", element: <Browse /> },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
