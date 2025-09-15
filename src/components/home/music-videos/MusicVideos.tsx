import React, { useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const musicItems = [
  {
    src: 'Music Videos/Frame 71.png',
    alt: 'Adele',
    title1: 'Water Under The Bridge',
    title2: 'Adele',
  },
  {
    src: 'Music Videos/Frame 369.png',
    alt: 'Billie Eilish',
    title1: 'Ocean Eyes',
    title2: 'Billie Eilish',
  },
  {
    src: 'Music Videos/Frame 370.png',
    alt: 'Taylor Swift ',
    title1: 'Bejeweled',
    title2: 'Taylor Swift',
  },
];

export default function MusicVideos() {
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
        m: '0 auto 6%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '88%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '88%',
          mx: 'auto',
          my: '-2%',
        }}
      >
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Music Videos
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
          gap: 4,
          ml: 9,
        }}
      >
        <IconButton
          onClick={handleScroll}
          sx={{
            transform: 'translateY(-50%)',
            zIndex: 1,
            color: 'white',
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
