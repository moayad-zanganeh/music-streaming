import Explore from '@/components/explore/Explore';
import MainLayout from '@/components/layout/main-layout/MainLayout';
import { ReactElement } from 'react';

export default function ExplorePage() {
  return <Explore />;
}

ExplorePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
