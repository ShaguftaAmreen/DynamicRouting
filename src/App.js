import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Data from './components/Data';
import UserCard from './components/Card'; // Import the user detail component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/user/:id" element={<UserCard />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  );
};

export default App;


