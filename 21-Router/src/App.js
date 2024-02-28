import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import Homepage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetail from './pages/ProductDetail';
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage />,
    children: [
      // {index: true, path: '', element: <Homepage />},
      {index: true, element: <Homepage />},
      {path: 'products', element: <ProductsPage />},
      {path: 'products/:productId', element: <ProductDetail />}
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
