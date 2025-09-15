import Artists from './artists/Artists';
import FavouriteTracks from './favourite-tracks/FavouriteTracks';
import Followers from './followers/Followers';
import Following from './following/Following';
import PlayLists from './play-list/PlayList';
import Profile from './profile/Profile';
import StatsTabs from './Tabs/Tabs';
import UserAchievements from './user-achievements/UserAchievements';

const Dashboard = () => {
  return (
    <>
      <Profile />
      <PlayLists />
      <Artists />
      <Following />
      <Followers />
      <UserAchievements />
    </>
  );
};

export default Dashboard;
