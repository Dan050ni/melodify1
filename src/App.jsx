import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MusicProvider } from './Context/MusicContext';
import Home from './Pages/Home';
import Search from './Pages/Search';
import PlaylistDetail from './Pages/PlaylistDetail';
import Navbar from './components/navbar';

function App() {
  return (
    <MusicProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist/:id" element={<PlaylistDetail />} />
        </Routes>
      </Router>
    </MusicProvider>
  );
}

export default App;