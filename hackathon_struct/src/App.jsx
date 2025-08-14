import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardHome from "./modules/DashboardHome";
// import "./common/styles.css";
import "../src/modules/DashboardHome/components/LayoutTest/base_generated.css";

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
