import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { CertsPage } from './pages/Certs.page';
import { EventsPage } from './pages/Events.page';
import { HomePage } from './pages/Home.page';

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
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
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />
}
