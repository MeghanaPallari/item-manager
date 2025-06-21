import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ViewItems from './pages/ViewItems';
import AddItem from './pages/AddItem';

function App() {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex space-x-4">
        <Link to="/">View Items</Link>
        <Link to="/add">Add Item</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ViewItems />} />
        <Route path="/add" element={<AddItem />} />
      </Routes>
    </Router>
  );
}

export default App;
