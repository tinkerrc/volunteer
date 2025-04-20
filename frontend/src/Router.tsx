import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
]);

export function Router() {
  return <RouterProvider router={router} />;
}
