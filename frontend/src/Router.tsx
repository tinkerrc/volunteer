import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CertsPage } from './pages/Certs.page';
import { EventsPage } from './pages/Events.page';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/events',
    element: <EventsPage />,
  },
  {
    path: '/certs',
    element: <CertsPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
