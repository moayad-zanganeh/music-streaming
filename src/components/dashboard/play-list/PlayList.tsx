import React, { useRef } from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface MusicItem {
  src: string;
  alt: string;
  title1: string;
}

const musicItems: MusicItem[] = [
  {
    src: 'dashboard/New folder/play-list/1/Frame 473.png',
    alt: '1',
    title1: 'Calm',
  },
  {
    src: 'dashboard/New folder/play-list/1/Frame 474.png',
    alt: '2',
    title1: 'Calm',
  },
  {
    src: 'dashboard/New folder/play-list/1/Frame 475.png',
    alt: '3',
    title1: 'Calm',
  },
  {
    src: 'dashboard/New folder/play-list/1/Frame 476.png',
    alt: '4',
    title1: 'Calm',
  },
  {
    src: 'dashboard/New folder/play-list/2/Frame 261.png',
    alt: '5',
    title1: 'Happy',
  },
  {
    src: 'dashboard/New folder/play-list/2/Frame 473.png',
    alt: '6',
    title1: 'Happy',
  },
  {
    src: 'dashboard/New folder/play-list/2/Frame 475.png',
    alt: '7',
    title1: 'Happy',
  },
  {
    src: 'dashboard/New folder/play-list/2/image (1).png',
    alt: '8',
    title1: 'Happy',
  },
  {
    src: 'dashboard/New folder/play-list/3/Frame 12.png',
    alt: '9',
    title1: 'Travel',
  },
  {
    src: 'dashboard/New folder/play-list/3/image 98.png',
    alt: '10',
    title1: 'Travel',
  },
  {
    src: 'dashboard/New folder/play-list/3/image 99.png',
    alt: '11',
    title1: 'Travel',
  },
  {
    src: 'dashboard/New folder/play-list/3/image.png',
    alt: '12',
    title1: 'Travel',
  },
  {
    src: 'dashboard/New folder/play-list/4/Frame 69.svg',
    alt: '13',
    title1: 'Create a Playlist',
  },
];

const groupByTitle = (items: MusicItem[]) => {
  const groups: { [key: string]: MusicItem[] } = {};
  items.forEach((item) => {
    if (!groups[item.title1]) {
      groups[item.title1] = [];
    }
    groups[item.title1].push(item);
  });
  return groups;
};

export default function PlaylistGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const mainItems = musicItems.filter(
    (item) => item.title1 !== 'Create a Playlist'
  );
  const specialItem = musicItems.find(
    (item) => item.title1 === 'Create a Playlist'
  );
  const groupedItems = groupByTitle(mainItems);

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      sx={{
        my: '8%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '84%',
        }}
      >
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Playlists
        </Typography>
        <Typography sx={{ color: '#fff', cursor: 'pointer', display: { xs: 'none', sm: 'block' } }}>
          View More
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 8,
          ml: 12,
        }}
      >
        <IconButton
          onClick={handleScroll}
          sx={{
            transform: 'translateY(-50%)',
            zIndex: 1,
            color: 'white',
            position: 'relative',
            right: '64px',
            height: '20px',
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 6,
            py: 4,
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {Object.entries(groupedItems).map(([title, items], index) => (
            <Box key={index}>
              <Box
                sx={{
                  borderRadius: 3,
                  width: 250,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <Grid container spacing={1}>
                  {items.slice(0, 4).map((item, i) => (
                    <Grid item xs={6} key={i}>
                      <Box
                        component="img"
                        src={item.src}
                        alt={item.alt}
                        sx={{
                          width: '100%',
                          height: 100,
                          borderRadius: 2,
                          objectFit: 'cover',
                          transition: 'transform 0.3s',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 1, ml: 1, color: '#fff', fontWeight: 600 }}
                >
                  {title}
                </Typography>
              </Box>
            </Box>
          ))}

          {specialItem && (
            <Box>
              <Box
                sx={{
                  borderRadius: 3,
                  width: 250,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={specialItem.src}
                  alt={specialItem.alt}
                  sx={{
                    width: '100%',
                    height: 200,
                    borderRadius: 2,
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 1, ml: 1, color: '#fff', fontWeight: 600 }}
                >
                  {specialItem.title1}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
