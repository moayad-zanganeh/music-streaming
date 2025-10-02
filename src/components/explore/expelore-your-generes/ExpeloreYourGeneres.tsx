import React, { useState } from 'react';
import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const musicItems = [
  { src: '/explore/your-generes/Frame 69.png', alt: 'Regional', title1: 'Regional' },
  { src: '/explore/your-generes/Frame 69 (1).png', alt: 'Classic', title1: 'Classic' },
  { src: '/explore/your-generes/Frame 69 (2).png', alt: 'Jazz', title1: 'Jazz' },
  { src: '/explore/your-generes/Frame 69 (3).png', alt: 'Rock', title1: 'Rock' },
  { src: '/explore/your-generes/Frame 69 (4).png', alt: 'Pop', title1: 'Pop' },
];

export default function ExpeloreYourGeneres() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = isMobile ? 1 : isTablet ? 3 : musicItems.length;

  const handleNext = () => {
    if (startIndex + itemsPerPage < musicItems.length) {
      setStartIndex(startIndex + itemsPerPage);
    } else {
      setStartIndex(0);
    }
  };

  const visibleItems = isMobile || isTablet 
    ? musicItems.slice(startIndex, startIndex + itemsPerPage)
    : musicItems;

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
          gap: 2,
          ml: 4,
        }}
      >
        {(isMobile || isTablet) && (
          <IconButton onClick={handleNext} sx={{ color: 'white', position: 'relative', left: '16px' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        )}

        <Box
          sx={{
            display: 'flex',
            gap: 3,
            py: 4,
            position: 'relative',
            left: { sm: '5%', md: 0 },
            overflowX: isMobile || isTablet ? 'hidden' : 'auto',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {visibleItems.map((item, index) => (
            <Box key={index} sx={{ textAlign: 'left', minWidth: 200 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 200,
                  borderRadius: 3,
                  overflow: 'hidden',
                  '&:hover .overlay': { opacity: 1 },
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