import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./Components/MainPage";
import PageLayout from "./Components/PageLayout";
import "./App.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [{ path: "/", element: <MainPage /> }],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
