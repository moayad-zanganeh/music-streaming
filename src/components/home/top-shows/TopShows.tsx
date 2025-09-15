import React, { useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const musicItems = [
  {
    src: 'Top Shows/Frame 67.png',
    alt: 'Enrique Iglesias',
    title1: 'Hero',
    title2: 'Enrique Iglesias',
  },
  {
    src: 'Top Shows/Frame 68.png',
    alt: 'Adele',
    title1: 'Easy on me',
    title2: 'Adele',
  },
  {
    src: 'Top Shows/Frame 69.png',
    alt: 'Metallica',
    title1: 'Master of puppets',
    title2: 'Metallica',
  },
  {
    src: 'Top Shows/Frame 70.png',
    alt: 'Ice Cube',
    title1: 'Big Subwoofer',
    title2: 'Ice Cube',
  },
  {
    src: 'Top Shows/Frame 71.png',
    alt: 'Post Malone',
    title1: 'I Had Some Help',
    title2: 'Post Malone',
  },
];

export default function TopShows() {
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
        my: 5,
        mb: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          mx: 'auto',
          my: '-2%',
        }}
      >
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Top shows
        </Typography>
        <Typography sx={{ color: '#fff', cursor: 'pointer' }}>
          View More
        </Typography>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={handleScroll}
          sx={{
            position: 'absolute',
            right: { xs: '-40px', sm: '-44px', md: '-48px', lg: '-56px' },
            top: '40%',
            zIndex: 2,
            color: 'white',
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
                  height: 300,
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
