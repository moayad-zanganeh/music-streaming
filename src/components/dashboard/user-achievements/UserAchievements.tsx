import React, { useRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const musicItems = [
  {
    src: 'dashboard/New folder/user-achievements/Image (11).png',
    alt: '5 Years membership',
    title2: '5 Years membership',
  },
  {
    src: 'dashboard/New folder/user-achievements/Image.png',
    alt: '100 Hours Listening',
    title2: '100 Hours Listening',
  },
];

export default function UserAchievements() {
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
          User Achievements
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '88%',
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
                    width: '70%',
                    height: '70%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    marginLeft: '8%',
                  }}
                />
                <Box
                  sx={{
                    mt: 1.5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="dashboard/New folder/user-achievements/Group.png"
                    alt="Decoration"
                    style={{
                      width: '90%',
                      position: 'relative',
                      top: '-218px',
                      zIndex: -1,
                      height: 'auto',
                    }}
                  />
                </Box>
              </Box>

              <Typography
                variant="body2"
                sx={{ color: '#fff', fontSize: '0.85rem', textAlign: 'center' }}
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
