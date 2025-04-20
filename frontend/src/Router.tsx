import { AppShell, AppShellNavbar } from '@mantine/core';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { CertsPage } from './pages/Certs.page';
import { EventsPage } from './pages/Events.page';
import { HomePage } from './pages/Home.page';

const AppLayout = () => (
  <>
    <AppShell>
      <AppShellNavbar><Nav></Nav></AppShellNavbar>
      <Outlet />
    </AppShell>
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
