import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardHome from "./modules/DashboardHome";
import "./common/styles.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardHome> </DashboardHome>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
