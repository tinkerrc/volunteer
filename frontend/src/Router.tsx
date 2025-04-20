import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EventList } from './components/EventList/EventList';
import { HomePage } from './pages/Home.page';

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
