import React, { useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const musicItems = [
  {
    src: 'dashboard/New folder/favourite-tracks/Frame 69 (1).png',
    alt: 'Harry Styles',
    title1: 'As It Was',
    title2: 'Harry Styles',
  },
  {
    src: 'dashboard/New folder/favourite-tracks/Frame 69 (2).png',
    alt: 'The Weeknd',
    title1: 'House of Balloons',
    title2: 'The Weeknd',
  },
  {
    src: 'dashboard/New folder/favourite-tracks/Frame 69 (3).png',
    alt: 'Beyonce',
    title1: 'Break My Soul',
    title2: 'Beyonce',
  },
  {
    src: 'dashboard/New folder/favourite-tracks/Frame 69 (4).png',
    alt: 'Mariah Carey',
    title1: 'Fantasy',
    title2: 'Mariah Carey',
  },
  {
    src: 'dashboard/New folder/favourite-tracks/Frame 69.png',
    alt: 'Adele',
    title1: 'Someone Like you',
    title2: 'Adele',
  },
];

export default function FavouriteTracks() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
        my: 10,
        mb: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '79%',
          my: '-2%',
        }}
      >
        <Typography variant="h6" sx={{ color: '#fff' }}>
          New Albums
        </Typography>
        <Typography sx={{ color: '#fff', cursor: 'pointer' }}>
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
            right: '32px',
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
            gap: 3,
            py: 4,
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {musicItems.map((item, index) => (
            <Box key={index} sx={{ textAlign: 'left', minWidth: 200 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 200,
                  borderRadius: 3,
                  overflow: 'hidden',
                  '&:hover .overlay': {
                    opacity: 1,
                  },
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{ color: '#fff', fontSize: '0.85rem' }}
              >
                {item.title1}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#fff', fontSize: '0.5rem' }}
              >
                {item.title2}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
