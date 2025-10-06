import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CssBaseline from '@mui/material/CssBaseline';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
import Image from 'next/image'; 

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    background:
      'radial-gradient(17.92% 215.65% at 234.78% 17.1%, #19093A 0%, #2F185E 50%, #1F0E40 72.27%, #110627 100%)',
    color: '#fff',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const LogoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px 0',
  marginBottom: '16px',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
});

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    { id: 1, label: 'Home', icon: <HomeIcon />, path: '/' },
    { id: 2, label: 'Explore', icon: <ExploreIcon />, path: '/explore' },
    { id: 3, label: 'Artist', icon: <LibraryBooksIcon />, path: '/artist-page' },
    // { id: 4, label: 'Advanced Search', icon: <SearchIcon />, path: '/search' },
  ];

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          '& .MuiDrawer-paper': {
            width: open ? 220 : 60,
            overflow: 'hidden',
          },
        }}
      >
        <LogoContainer sx={{ border: 'none' }}>
          <Image
            src="/logo1.svg"
            alt="Logo"
            width={open ? 120 : 32}
            height={open ? 40 : 32}
          />
        </LogoContainer>

        <Box sx={{ position: 'relative' }}>
          <List>
            {menuItems.map((item) => {
              const isActive = router.pathname === item.path;
              return (
                <ListItem
                  key={item.id}
                  disablePadding
                  sx={{ display: 'block', mt: 1 }}
                >
                  <ListItemButton
                    onClick={() => router.push(item.path)}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2,
                      backgroundColor: isActive
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'transparent',
                      backdropFilter: isActive ? 'blur(8px)' : 'none',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: isActive ? 'white' : 'rgba(255,255,255,0.7)',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={{
                        color: 'white',
                        opacity: open ? 1 : 0,
                        display: open ? 'block' : 'none',
                        transition: 'opacity 0.3s',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>

      <Box
        sx={{
          position: 'fixed',
          top: '64%',
          left: open ? {xs: "45.8%", sm: "24.8%",md:'18.8%',lg:'15.8%',xl:'7.8%'} : {xs: "8.8%", sm: "4.8%",md:'4.8%',lg:'3.1%',xl:'1.8%'},
          transform: 'translate(-50%, -50%)',
          rotate: '40deg',
          backgroundColor: '#110627',
          borderTop: 'solid 1px #2e2441',
          borderRight: 'solid 1px #2e2441',
          borderRadius: '0 18% 0 0',
          zIndex: 1300,
          padding: '8px',
          backdropFilter: 'blur(6px)',
          cursor: 'pointer',
          transition: 'left 0.3s ease',
        }}
        onClick={handleDrawerToggle}
      >
        {open ? (
          <ChevronLeftIcon sx={{ rotate: '-45deg' }} />
        ) : (
          <ChevronRightIcon sx={{ rotate: '-45deg' }} />
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
