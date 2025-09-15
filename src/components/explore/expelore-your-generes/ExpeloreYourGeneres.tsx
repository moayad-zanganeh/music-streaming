import React, { useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const musicItems = [
  {
    src: '/explore/your-generes/Frame 69.png',
    alt: 'Regional',
    title1: 'Regional',
  },
  {
    src: '/explore/your-generes/Frame 69 (1).png',
    alt: 'Classic',
    title1: 'Classic',
  },
  {
    src: '/explore/your-generes/Frame 69 (2).png',
    alt: 'Jazz',
    title1: 'Jazz',
  },
  {
    src: '/explore/your-generes/Frame 69 (3).png',
    alt: 'Rock',
    title1: 'Rock',
  },
  {
    src: '/explore/your-generes/Frame 69 (4).png',
    alt: 'Pop',
    title1: 'Pop',
  },
];

export default function ExpeloreYourGeneres() {
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
        my: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '81%',
          ml: 3,
          my: '-2%',
        }}
      >
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Explore your Generes
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
          ml: 16,
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
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
