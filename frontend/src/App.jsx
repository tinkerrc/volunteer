import { useState } from 'react';
import './App.css';

import Dashboard from './dashboard';
import Vol from './volpage';
import Login from './userpage';

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const goto = (page) => setCurrentPage(page);

  if (currentPage === "home") return <Dashboard goto={goto} />;
  if (currentPage === "vol") return <Vol goto={goto} />;
  if (currentPage === "login") return <Login goto={goto} />;

  return <div>Page not found</div>;
}

export default App;
