import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Form from "./components/Form";
import SuccessPage from "./components/SuccessPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
