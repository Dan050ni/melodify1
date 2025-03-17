import React, { useContext } from 'react';
import { MusicContext } from '../Context/MusicContext';

const PlaylistDetail = () => {
  const { playlist } = useContext(MusicContext);

  return (
    <div className="playlist-detail">
      <h2>Lista de Reproducción</h2>
      <ul>
        {playlist.map((song) => (
          <li key={song.id}>{song.title} - {song.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistDetail;