import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Channel from './Components/Channels';
import School from './Components/Channels/school';
import Work from './Components/Channels/work';
import Skills from './Components/Channels/skills';
export const App: React.FC = () => (
  <BrowserRouter>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Routes>
        <Route path="/" element={<Channel />} />
          <Route path="/school" element={<School />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
