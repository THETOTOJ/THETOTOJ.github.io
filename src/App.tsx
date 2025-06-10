import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // If you have this
import Sidebar from './Components/Sidebar';
import Channel from './Components/Channels';
import School from './Components/Channels/school';
import Work from './Components/Channels/work';
import Skills from './Components/Channels/skills';
import { ThemeProvider, useTheme } from './Contexts/ThemeContexts';

// Component to handle body background
const AppContent: React.FC = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Set body background based on theme
    const getBodyBackground = () => {
      switch (theme) {
        case 'dark-gray':
          return '#111827'; // gray-900
        case 'dark-purple':
          return '#0f172a'; // slate-900
        case 'light-purple':
          return '#f8fafc'; // slate-50
        case 'pink':
          return '#fdf2f8'; // pink-50
        case 'light-blue':
          return '#eff6ff'; // blue-50
        case 'alina':
          return '#fce7f3'; // pink-100
        default:
          return '#111827'; // gray-900
      }
    };

    document.body.style.backgroundColor = getBodyBackground();
    document.documentElement.style.backgroundColor = getBodyBackground();

    // Cleanup function to reset if needed
    return () => {
      document.body.style.backgroundColor = '';
      document.documentElement.style.backgroundColor = '';
    };
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Channel />} />
            <Route path="/schools" element={<School />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export const App: React.FC = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;