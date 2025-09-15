import BanerExplore from './baner-explore/BanerExplore';
import BrowseAll from './browse-all/BrowseAll';
import ExpeloreYourGeneres from './expelore-your-generes/ExpeloreYourGeneres';
import QuickAccess from './quick-access/QuickAccess';

const Explore = () => {
  return (
    <>
      <BanerExplore />
      <ExpeloreYourGeneres />
      <QuickAccess />
      <BrowseAll />
    </>
  );
};
export default Explore;
