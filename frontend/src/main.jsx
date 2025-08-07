// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToolDropdown from './components/ToolDropdown';
import ProjectDetail from './components/ProjectDetail';
import RepositoryTable from './components/RepositoryTable';
import StudyMaterialTable from './components/StudyMaterialTable';

function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Your Personal LMS</h1>
      <p>Navigate using the browser URL or add a navbar.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/repository" element={<RepositoryTable />} />
        <Route path="/study-materials" element={<StudyMaterialTable />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
