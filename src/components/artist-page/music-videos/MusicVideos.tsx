import React, { useState } from "react";
import { Box, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const musicItems = [
  {
    src: 'artist-page/music videos/Frame 71.png',
    alt: 'Adele',
    title1: 'Water Under The Bridge',
    title2: 'Adele'
  },
  {
    src: 'artist-page/music videos/Frame 369.png',
    alt: 'Adele',
    title1: 'Easy On Me',
    title2: 'Adele'
  },
  {
    src: 'artist-page/music videos/Frame 370.png',
    alt: 'Adele',
    title1: 'I Drink Wine',
    title2: 'Adele'
  },
];

export default function MusicVideos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  
  const itemsToShow = isMobile ? 1 : isTablet ? 2 : isLaptop ? 3 : 4;

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

  const getCardWidth = () => 200;
  const visibleItems = getVisibleItems();

  return (
    <Box
      sx={{
        width: { xs: "48%", sm: "81%", md: "87%", lg: "87%" },
        px: { xs: 1, sm: 2, md: 3, lg: 4 },
        m: "5% auto",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        left: { xs: "-3%", sm: "0", md: "16px", lg: "16px" },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Typography variant="h6" sx={{ color: "#fff" }}>
          Music Videos
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

      <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        <Box sx={{ display: "flex", gap: { xs: "15px", sm: "20px", md: "25px" }, overflow: "hidden" }}>
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
                  width: "100%",
                  height: 200,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
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
              <Typography
                variant="body2"
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  textAlign: "left",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.title2}
              </Typography>
            </Box>
          ))}
        </Box>

        <IconButton
          onClick={handleNext}
          sx={{ position: "absolute", right: "-56px", top: "32%", zIndex: 2, color: "white" }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}