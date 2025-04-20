import '@mantine/core/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EventList } from './EventList';

import { MantineProvider } from '@mantine/core';

const router = createBrowserRouter([
  {
    path: '/',
    element: <EventList />,
  },
  // {
  //   path: '/volunteer',
  //   element: <VolunteerPage />,
  // },
]);

function App() {
  return <MantineProvider><RouterProvider router={router} /></MantineProvider>;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
