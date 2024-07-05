import { Home, Register, Login, Product, Detail } from './components/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/product',
      element: <Product />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/product/:id',
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
