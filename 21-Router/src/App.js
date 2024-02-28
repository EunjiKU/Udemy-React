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
      {path: '/', element: <Homepage />},
      {path: '/products', element: <ProductsPage />},
      {path: '/products-detail/:productId', element: <ProductDetail />}
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
