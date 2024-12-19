import React from 'react';
import { Song } from '../types/song';
import { useAudioPlayer } from './hooks/useAudioPlayer';

interface MusicPlayerProps {
    songs: Song[];
}

export function MusicPlayer({ songs }: MusicPlayerProps) {
    const { currentSong, isPlaying, progress, togglePlayPause, changeSong } = useAudioPlayer(songs);

    return (
        <div className="w-full mx-auto h-72  shadow-md rounded-lg overflow-hidden">
            <div className="p-4 space-y-4">
                <div
                    className="bg-cover flex justify-center items-center bg-center rounded-lg h-[90px]"
                    style={{
                        backgroundImage: `url(${currentSong.thumbnail})`,
                    }}
                >
                    <h1 className='text-white dark:text-[#00ff41] font-extrabold italic bg-black bg-opacity-50'>"Tunes I’m totally vibing to 🎶"</h1>
                </div>

                <div className="flex justify-between items-center">

                    <div>
                        <h2 className="text-lg text-white font-semibold">{currentSong.title}</h2>
                        <p className="text-sm text-gray-100 ">{currentSong.artist}</p>
                    </div>
                    <button
                        className="h-12 text-black border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] transition-all duration-300 rounded-md"
                        onClick={togglePlayPause}
                    >
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>
                <div className="w-full bg-black rounded-full h-1">
                    <div
                        className="bg-blue-500 h-1 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="space-y-1 max-h-40 overflow-y-auto">
                    {songs.map((song, index) => (
                        <button
                            key={song.id}
                            className={`w-full text-left text-[#8B4513] dark:text-white py-1 px-2 text-sm rounded ${currentSong.id === song.id ? 'bg-slate-200 dark:bg-[#11ac5e]' : 'hover:bg-slate-50 dark:hover:bg-[#00ff7f]'
                                }`}
                            onClick={() => changeSong(index)}
                        >
                            {song.title} - {song.artist}
                        </button>
                    ))}
                </div>
            </div>
            <div id="youtube-player" className="hidden"></div>
        </div>
    );
}

