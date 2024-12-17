import { useState, useEffect, useRef } from 'react';
import { Song } from '@/app/types/song';

export function useAudioPlayer(songs: Song[]) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const youtubePlayerRef = useRef<YT.Player | null>(null);
  const isYoutubeReady = useRef(false);

  useEffect(() => {
    if (songs[currentSongIndex].source.type === 'local') {
      audioRef.current = new Audio(songs[currentSongIndex].source.url);
      audioRef.current.addEventListener('timeupdate', updateProgress);
      audioRef.current.addEventListener('ended', handleSongEnd);
    } else {
      // Initialize YouTube player
      if (!youtubePlayerRef.current) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        (window as any).onYouTubeIframeAPIReady = () => {
          youtubePlayerRef.current = new YT.Player('youtube-player', {
            height: '0',
            width: '0',
            videoId: extractYouTubeId(songs[currentSongIndex].source.url),
            events: {
              onReady: () => {
                isYoutubeReady.current = true;
              },
              onStateChange: onPlayerStateChange
            }
          });
        };
      } else {
        youtubePlayerRef.current.loadVideoById(extractYouTubeId(songs[currentSongIndex].source.url));
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateProgress);
        audioRef.current.removeEventListener('ended', handleSongEnd);
      }
    };
  }, [currentSongIndex, songs]);

  const togglePlayPause = () => {
    if (songs[currentSongIndex].source.type === 'local') {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (isYoutubeReady.current && youtubePlayerRef.current) {
        if (isPlaying) {
          youtubePlayerRef.current.pauseVideo();
        } else {
          youtubePlayerRef.current.playVideo();
        }
        setIsPlaying(!isPlaying);
      }
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const duration = audioRef.current.duration;
      const currentTime = audioRef.current.currentTime;
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleSongEnd = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
    } else {
      setCurrentSongIndex(0);
    }
  };

  const onPlayerStateChange = (event: YT.OnStateChangeEvent) => {
    if (event.data === YT.PlayerState.ENDED) {
      handleSongEnd();
    } else if (event.data === YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else if (event.data === YT.PlayerState.PAUSED) {
      setIsPlaying(false);
    }
  };

  const changeSong = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(false);
    setProgress(0);
    if (songs[index].source.type === 'youtube' && youtubePlayerRef.current) {
      youtubePlayerRef.current.loadVideoById(extractYouTubeId(songs[index].source.url));
    }
  };

  return {
    currentSong: songs[currentSongIndex],
    isPlaying,
    progress,
    togglePlayPause,
    changeSong
  };
}

function extractYouTubeId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
}

