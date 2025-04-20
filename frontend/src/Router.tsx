import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { EventList } from './components/EventList/EventList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/events',
    element: <EventList />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
