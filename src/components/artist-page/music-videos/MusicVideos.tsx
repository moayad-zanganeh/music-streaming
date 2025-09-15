import React, { useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const musicItems = [
  {
    src: 'artist-page/music videos/Frame 71.png',
    alt: 'Adele',
    title1: 'Water Under The Bridge',
  },
  {
    src: 'artist-page/music videos/Frame 369.png',
    alt: 'Adele',
    title1: 'Easy On Me',
  },
  {
    src: 'artist-page/music videos/Frame 370.png',
    alt: 'Adele',
    title1: 'I Drink Wine',
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
        display: 'flex',
        my: '8%',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
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
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
