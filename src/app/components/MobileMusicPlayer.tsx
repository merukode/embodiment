import React from 'react';
import { Song } from '../types/song';

interface MobileMusicPlayerProps {
  currentSong: Song;
  isPlaying: boolean;
  togglePlayPause: () => void;
}

export function MobileMusicPlayer({ currentSong, isPlaying, togglePlayPause }: MobileMusicPlayerProps) {
  return (
    <div className="w-full bg-[#FF7F50] border-t-2 border-black p-2 flex items-center justify-between">
      <div className="flex items-center">
        <img src={currentSong.thumbnail} alt={currentSong.title} className="w-12 h-12 rounded-md mr-3" />
        <div>
          <h3 className="text-sm font-semibold text-white">{currentSong.title}</h3>
          <p className="text-xs text-[#A52A2A]">{currentSong.artist}</p>
        </div>
      </div>
      <button
        className="h-10 w-10 text-black border-black border-2 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] transition-all duration-300 rounded-md flex items-center justify-center"
        onClick={togglePlayPause}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
    </div>
  );
}

