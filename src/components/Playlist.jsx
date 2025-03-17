import React from 'react';

const Playlist = ({ playlists }) => {
  return (
    <div className="playlist">
      {playlists.map((playlist) => (
        <div key={playlist.id} className="playlist-item">
          <h3>{playlist.name}</h3>
          <p>{playlist.songs.length} canciones</p>
        </div>
      ))}
    </div>
  );
};

export default Playlist;