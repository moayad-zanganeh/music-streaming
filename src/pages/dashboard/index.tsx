import Dashboard from '@/components/dashboard/Dashboard';
import MainLayout from '@/components/layout/main-layout/MainLayout';
import { ReactElement } from 'react';

export default function DashboardPage() {
  return <Dashboard />;
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
