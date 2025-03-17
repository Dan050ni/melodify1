import React, { useContext } from 'react';
import { MusicContext } from '../Context/MusicContext';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

const PlayerControls = () => {
  const { isPlaying, setIsPlaying } = useContext(MusicContext);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player-controls">
      <button onClick={() => {}}><FaBackward /></button>
      <button onClick={handlePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button onClick={() => {}}><FaForward /></button>
    </div>
  );
};

export default PlayerControls;