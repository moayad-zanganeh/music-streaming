import React, { useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const musicItems = [
  {
    src: 'dashboard/New folder/artists/image (1).png',
    alt: 'Coldplay',
    title2: 'Coldplay',
  },
  {
    src: 'dashboard/New folder/artists/image (2).png',
    alt: 'Celine Dion',
    title2: 'Celine Dion',
  },
  {
    src: 'dashboard/New folder/artists/image (3).png',
    alt: 'Metalica',
    title2: 'Metalica',
  },
  {
    src: 'dashboard/New folder/artists/image (4).png',
    alt: 'Taylor Swift',
    title2: 'Taylor Swift',
  },
  {
    src: 'dashboard/New folder/artists/image.png',
    alt: 'Adele',
    title2: 'Adele',
  },
];

export default function Artists() {
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
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          my: '0',
        }}
      >
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Artists
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
          ml: 8,
        }}
      >
        <IconButton
          onClick={handleScroll}
          sx={{
            transform: 'translateY(-50%)',
            zIndex: 1,
            color: 'white',
            height: '20px',
            ml: -2,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 4,
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
                {/* {   <Box
                  sx={{
                    mt: 1.5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="dashboard/New folder/artists/Ellipse 37.svg"
                    alt="Decoration"
                    style={{
                      width: '100%',
                      position: 'relative',
                      top: '-218px',
                      zIndex: -1,
                      height: 'auto',
                    }}
                  />
                </Box>} */}
              </Box>

              <Typography
                variant="body2"
                sx={{ color: '#fff', fontSize: '0.85rem' }}
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
