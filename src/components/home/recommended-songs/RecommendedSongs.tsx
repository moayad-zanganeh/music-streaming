import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const musicItems = [
  { src: "Recommended songs/Frame 69.png", alt: "Adele", title1: "Rolling in the Deep", title2: "Adele" },
  { src: "Recommended songs/Frame 69 (1).png", alt: "Adele", title1: "Oh My God", title2: "Adele" },
  { src: "Recommended songs/Frame 69 (2).png", alt: "Adele", title1: "Hometown Glory", title2: "Adele" },
  { src: "Recommended songs/Frame 69 (3).png", alt: "Taylor Swift", title1: "Midnights", title2: "Taylor Swift" },
  { src: "Recommended songs/Frame 69 (4).png", alt: "Ed Sheeran", title1: "Perfect", title2: "Ed Sheeran" },
];

export default function RecommendedSongs() {
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

  const getCardWidth = () => 160;
  const visibleItems = getVisibleItems();

  return (
    <Box
      sx={{
        width: { xs: "32%", sm: "81%", md: "87%", lg: "87%" },
        px: { xs: 1, sm: 2, md: 3, lg: 3 },
        m: "5% auto",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        left: { xs: "-17%", sm: "0", md: "16px", lg: "16px" },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h6" sx={{ color: "#fff", fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" } }}>
          Recommended Songs
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
        <Box sx={{ display: "flex", gap: { xs: "15px", sm: "20px", md: "25px", lg: '14px' } }}>
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
                  height: 200,
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Card sx={{ width: "100%", height: "100%", borderRadius: 3 }}>
                  <CardMedia
                    component="img"
                    image={item.src}
                    alt={item.alt}
                    sx={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </Box>

              <Typography
                sx={{
                  color: "#fff",
                  mt: 1,
                  fontWeight: 700,
                  fontSize: "14px", 
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
                  fontSize: "12px", 
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

        <ArrowForwardIosIcon 
          onClick={handleNext} 
          sx={{ 
            position: "absolute", 
            right: {xs:"-56px",md:"-40px"}, 
            top: "35%", 
            color: "white", 
            zIndex: 2, 
            cursor: "pointer",
            fontSize: "24px"
          }} 
        />
      </Box>
    </Box>
  );
}