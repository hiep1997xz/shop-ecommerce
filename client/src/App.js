import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Products from "./pages/products/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/products/:id',
      element: <Products />
    },
    {
      path: '/product/:id',
      element: <Product />
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
