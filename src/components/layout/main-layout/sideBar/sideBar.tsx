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
            width: open ? 'clamp(12rem, 25vw, 15rem)' : 'clamp(3rem, 8vw, 4rem)',
            overflow: 'hidden',
            transition: 'width 0.3s ease',
          },
        }}
      >
        <LogoContainer sx={{ border: 'none' }}>
          <Box
            component="img"
            src="/logo1.svg"
            alt="Logo"
            sx={{
              width: open ? 'clamp(3rem, 8vw, 7.5rem)' : 'clamp(1.25rem, 3vw, 2rem)',
              height: open ? 'clamp(1.25rem, 2.5vw, 2.5rem)' : 'clamp(1.25rem, 3vw, 2rem)',
              objectFit: 'contain',
              transition: 'all 0.3s ease',
            }}
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
                      minHeight: 'clamp(2.5rem, 6vh, 3rem)',
                      justifyContent: open ? 'initial' : 'center',
                      px: 'clamp(0.5rem, 2vw, 1rem)',
                      py: 'clamp(0.25rem, 1vh, 0.5rem)',
                      backgroundColor: isActive
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'transparent',
                      backdropFilter: isActive ? 'blur(8px)' : 'none',
                      borderRadius: 'clamp(0.5rem, 1.5vw, 0.75rem)',
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
                        mr: open ? 'clamp(1rem, 3vw, 1.5rem)' : 'auto',
                        justifyContent: 'center',
                        color: isActive ? 'white' : 'rgba(255,255,255,0.7)',
                        transition: 'color 0.3s ease',
                        '& .MuiSvgIcon-root': {
                          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                        },
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
                        '& .MuiListItemText-primary': {
                          fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                          fontWeight: 500,
                        },
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
          left: open ? 'clamp(20%, 25vw, 30%)' : 'clamp(5%, 8vw, 12%)',
          transform: 'translate(-50%, -50%)',
          rotate: '40deg',
          backgroundColor: '#110627',
          borderTop: 'solid 1px #2e2441',
          borderRight: 'solid 1px #2e2441',
          borderRadius: '0 18% 0 0',
          zIndex: 1300,
          padding: 'clamp(0.25rem, 1vw, 0.5rem)',
          backdropFilter: 'blur(6px)',
          cursor: 'pointer',
          transition: 'left 0.3s ease',
          '& .MuiSvgIcon-root': {
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          },
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
