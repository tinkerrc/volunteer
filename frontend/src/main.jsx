import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // optional global styles
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './dashboard.jsx';
import VolunteerPage from './volpage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/volunteer',
    element: <VolunteerPage />,
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}
// function App() {
//   const [currentPage, setCurrentPage] = useState("home");

//   const goto = (page) => setCurrentPage(page);

//   if (currentPage === "home") return <Dashboard goto={goto} />;
//   if (currentPage === "vol") return <Vol goto={goto} />;
//   if (currentPage === "login") return <Login goto={goto} />;

//   return <div>Page not found</div>;
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
