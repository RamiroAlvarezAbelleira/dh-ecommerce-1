import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/Layouts/MainLayout.tsx'
import { CartProvider } from './context/CartProvider.tsx'
import './index.css'
import Checkout from './pages/Checkout/Checkout.tsx'
import Home from './pages/Home/Home.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import Login from './pages/Login/Login.tsx'
import Dashboard from './pages/Dashboard/Dashboard.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/checkout", element: <Checkout /> }
    ]
  },
  {
    path: "/login", element: <Login />
  },
  {
    path: "/dashboard", element: <Dashboard />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <QueryClientProvider client={queryClient}>
      {/* <CartProvider> */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      {/* </CartProvider> */}
    </QueryClientProvider>
  </StrictMode>,
)
