import { ReactNode, useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import Header from './header/Header';
import Sidebar from './sideBar/sideBar';
import Footer from './footer/Footer';
import Player from './player/player';

export default function MainLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{ overflowX: 'hidden' }}
    >
      <Header />
      <Box display="flex" flex={1}>
        <Sidebar />
        <Box component="main" flex={1}>
          {children}
        </Box>
      </Box>
      <Player />
      <Footer />
    </Box>
  );
}
