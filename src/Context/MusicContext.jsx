import React, { createContext, useState } from 'react';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MusicContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </MusicContext.Provider>
  );
};