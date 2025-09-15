import Home from '@/components/home/home';
import MainLayout from '@/components/layout/main-layout/MainLayout';
import { ReactElement } from 'react';

export default function HomePage() {
  return <Home />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
