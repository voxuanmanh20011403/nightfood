import { createBrowserRouter } from 'react-router-dom'
import Home from '~/pages/Home/Home'
import Cart from '~/pages/Cart/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'cart',
    element: <Cart />,
    children: [
      {
        path: '/cart/dashboard',
        element: <Home />
      }
    ]
  }
])

export { router }
