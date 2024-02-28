import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Homepage from "./pages/Home";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {path: '/', element: <Homepage />},
      {path: '/products', element: <ProductsPage />},
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
