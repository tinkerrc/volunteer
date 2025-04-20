import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EventList } from './EventList';
import VolunteerPage from './VolunteerPage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <EventList />,
  },
  {
    path: '/volunteer',
    element: <VolunteerPage />,
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
