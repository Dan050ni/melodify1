import React from 'react';

const SongItem = ({ song }) => {
  return (
    <div className="song-item">
      <img src={song.cover} alt={song.title} />
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
    </div>
  );
};

export default SongItem;