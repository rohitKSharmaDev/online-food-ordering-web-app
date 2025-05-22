import { createBrowserRouter } from 'react-router-dom'
import LandingPage from '@/pages/LandingPage';
import AuthPage from '@/pages/Auth';
import AppLayout from '@/layout/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/auth',
        element: <AuthPage />
      },
    ]
  }
]);


export default router;