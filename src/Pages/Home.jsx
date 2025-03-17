import React, { useContext } from 'react';
import { MusicContext } from '../Context/MusicContext';
import Playlist from '../components/Playlist';
import PlayerControls from '../components/PlayerControls';

const Home = () => {
  const { playlist } = useContext(MusicContext);

  return (
    <div className="home">
      <h1>Mis Listas de Reproducción</h1>
      <Playlist playlists={playlist} />
      <PlayerControls />
    </div>
  );
};

export default Home;