import React, { useState } from 'react';
import { Box, IconButton, Typography, useTheme, useMediaQuery } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const musicItems = [
  {
    src: 'artist-page/albums/Frame 69 (1).png',
    alt: 'Adele',
    title1: '21',
  },
  {
    src: 'artist-page/albums/Frame 69 (2).png',
    alt: 'Adele',
    title1: '25',
  },
  {
    src: 'artist-page/albums/Frame 69 (3).png',
    alt: 'Adele',
    title1: '19',
  },
  {
    src: 'artist-page/albums/Frame 69.png',
    alt: 'Adele',
    title1: '30',
  },
  {
    src: 'artist-page/albums/Frame 70.png',
    alt: 'Adele',
    title1: 'Skyfall',
  },
];

export default function Albums() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  
  const itemsToShow = isMobile ? 1 : isTablet ? 3 : isLaptop ? 4 : 5;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % musicItems.length);
  };

  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % musicItems.length;
      visible.push(musicItems[index]);
    }
    return visible;
  };

  const getCardWidth = () => 180;
  const visibleItems = getVisibleItems();

  return (
    <Box
      sx={{
        width: { xs: "48%", sm: "80%", md: "77%", lg: "84%", xl: "87%" },
        px: { xs: 1, sm: 2, md: 3, lg: 3, xl: 3 },
        m: "5% auto",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        left: { xs: "0", sm: "0", md: "16px", lg: "16px", xl: "16px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          width:"95%"
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
          }}
        >
          Albums
        </Typography>
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
            color: "#fff",
            cursor: "pointer",
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
          }}
        >
          View More
        </Typography>
      </Box>

      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "15px", sm: "20px", md: "25px", lg: "16px", xl: "30px" },
            overflow: "hidden",
          }}
        >
          {visibleItems.map((item, index) => (
            <Box
              key={`${item.title1}-${index}`}
              sx={{
                textAlign: "left",
                minWidth: getCardWidth(),
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 160, sm: 170, md: 180, lg: 185 },
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  mt: 1,
                  fontWeight: 700,
                  fontSize: "16px",
                  textAlign: "left",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.title1}
              </Typography>
            </Box>
          ))}
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: "-32px",
            top: "32%",
            zIndex: 2,
            color: "white",
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}