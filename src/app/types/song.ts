export interface Song {
    id: string;
    title: string;
    artist: string;
    thumbnail: string;
    source: {
      type: 'local' | 'youtube';
      url: string;
    };
  }
  
  