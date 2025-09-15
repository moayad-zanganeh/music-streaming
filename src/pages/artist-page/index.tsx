import ArtistPages from '@/components/artist-page/ArtistPage';
import MainLayout from '@/components/layout/main-layout/MainLayout';
import { ReactElement } from 'react';

export default function ArtistPageItem() {
  return <ArtistPages />;
}

ArtistPageItem.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
