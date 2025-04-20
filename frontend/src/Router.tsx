import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TableSort } from './components/TableSort/TableSort';
import { EventList } from './components/EventList/EventList';
import { HomePage } from './pages/Home.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TableSort />, // ✅ default route is the table
  },
  {
    path: '/table',
    element: <TableSort />,
  },
  {
    path: '/events',
    element: <EventList />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}

