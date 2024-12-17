import { Song } from "@/app/types/song";

export const songs: Song[] = [
  {
    id: '1',
    title: 'Tetoris',
    artist: 'Hiiragi Magnetite',
    thumbnail: '/placeholder.svg?height=400&width=400',
    source: {
      type: 'youtube',
      url: 'https://music.youtube.com/watch?v=L2TrIJsTKHk&si=z4Ga6I_CKKW_aZ_B',
    },
  },
  {
    id: '2',
    title: 'YouTube Song',
    artist: 'YouTube Artist',
    thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    source: {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=iEr1aBephZ8&pp=ygURbWFmaWEgb3VybyBrcm9uaWk%3D',
    },
    
  }
];
