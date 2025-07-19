import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import StudentDetailsPage from './pages/StudentDetailsPage.jsx';
import StudentEditPage from './pages/StudentEditPage.jsx';
import AddStudent from './pages/AddStudent.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/student/:id" element={<StudentDetailsPage />} />
        <Route path="/student/:id/edit" element={<StudentEditPage />} />
      </Routes>
    </Router>
  );
}
export default App;