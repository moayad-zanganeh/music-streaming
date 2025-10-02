import React, { useState } from "react";
import { Box, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const musicItems = [
  { src: "popular artists/image 89.png", alt: "Adele", title2: "Adele" },
  { src: "popular artists/Shot 0033_prev_ui 1.png", alt: "Taylor Swift", title2: "Taylor Swift" },
  { src: "popular artists/Shot 0023_prev_ui 1.png", alt: "Lady Gaga", title2: "Lady Gaga" },
  { src: "popular artists/Billie-Eilish-Happier- 1.png", alt: "Billie Eilish", title2: "Billie Eilish" },
  { src: "popular artists/image 95.png", alt: "Ed Sheeran", title2: "Ed Sheeran" },
];

export default function PopularArtists() {
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
           width: { xs: "32%", sm: "80%", md: "82x%", lg: "84%", xl: "87%" },
           px: { xs: 1, sm: 2, md: 3, lg: 3, xl: 3 },
           m: "5% auto",
           position: "relative",
           flexDirection: "column",
           alignItems: "center",
           left: { xs: "-17%", sm: "0", md: "16px", lg: "16px", xl: "16px" },
         }}
       >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h6" sx={{ color: "#fff", fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" } }}>
          Popular Artists
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
        <Box sx={{ display: "flex", gap: { xs: "15px", sm: "20px", md: "19px", lg: "19px" }, overflow: "hidden" }}>
          {visibleItems.map((item, index) => (
            <Box
              key={`${item.title2}-${index}`}
              sx={{
                textAlign: "center",
                minWidth: getCardWidth(),
                flexShrink: 0,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 160, sm: 170, md: 180, lg: 180 },
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
                variant="body2"
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  textAlign: "center",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  mt: 1,
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
