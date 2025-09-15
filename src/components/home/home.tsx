import Banner from './banner/banner';
import Slider from './slider/slider';
import Popularity from './Popularity/Popularity';
import BasedMusic from './based-on-your-recent-listening/BasedMusic';
import PopularArtists from './popular-artists/PopularArtists';
import NewAlbums from './new-albums/NewAlbums';
import LiveMusic from './live-music/LiveMusic';
import MusicVideos from './music-videos/MusicVideos';
import RecommendedSongs from './recommended-songs/RecommendedSongs';
import TopShows from './top-shows/TopShows';

export default function Home() {
  return (
    <>
      <Banner />
      <Slider />
      <Popularity />
      <BasedMusic />
      <PopularArtists />
      <NewAlbums />
      <LiveMusic />
      <MusicVideos />
      <RecommendedSongs />
      <TopShows />
    </>
  );
}
