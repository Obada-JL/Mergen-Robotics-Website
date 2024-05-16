import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./Components/MainPage";
import PageLayout from "./Components/PageLayout";
import "./App.css";
import ServicesPage from "./Components/ServicesPage";
import Tanitim from "./Components/Tanitim";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/services", element: <ServicesPage /> },
        { path: "/aboutUs", element: <Tanitim /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
