import AboutTheArtist from './about-the-artist/AboutTheArtist';
import Alboms from './Alboms/Alboms';
import BannerArtist from './banner-artist/BannerArtist';
import CommentSection from './comments/Comments';
import MusicVideos from './music-videos/MusicVideos';
import Singles from './Singles/Singles';
import TabAlbom from './tab-albom/TabAlboms';

export default function ArtistPages() {
  return (
    <>
      <BannerArtist />
      <TabAlbom />
      <Alboms />
      <Singles />
      <MusicVideos />
      <AboutTheArtist />
      <CommentSection />
    </>
  );
}
