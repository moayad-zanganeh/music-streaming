import React, { useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const musicItems = [
  {
    src: 'dashboard/New folder/followers/image (9).png',
    alt: 'Pixel',
    title2: 'Pixel',
  },
  {
    src: 'dashboard/New folder/followers/image (10).png',
    alt: 'Ideh',
    title2: 'Ideh',
  },
];

export default function Followers() {
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
          width: '82%',
          my: '0',
        }}
      >
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Followers
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 4,
          ml: 8,
          width: '88%',
          justifyContent: 'space-between',
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
                  width: '90%',
                  height: 175,
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
                {/* {    <Box
                  sx={{
                    mt: "8px",
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
