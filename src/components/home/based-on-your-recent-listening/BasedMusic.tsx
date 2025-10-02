import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Card,
  CardMedia,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const musicItems = [
  {
    src: "based-music/Frame 69.png",
    alt: "Adele",
    title1: "Water Under the Bridge",
    title2: "Adele",
  },
  {
    src: "based-music/Frame 69 (1).png",
    alt: "Adele",
    title1: "Million Years Ago",
    title2: "Adele",
  },
  {
    src: "based-music/Frame 69 (2).png",
    alt: "Adele",
    title1: "Hometown Glory",
    title2: "Adele",
  },
  {
    src: "based-music/Frame 69 (3).png",
    alt: "Taylor Swift",
    title1: "Love Story",
    title2: "Taylor Swift",
  },
  {
    src: "based-music/Frame 69 (4).png",
    alt: "Taylor Swift",
    title1: "Shake it Off",
    title2: "Taylor Swift",
  },
];

export default function BasedMusic() {
  const scrollRef = useRef<HTMLDivElement>(null);
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
        width: { xs: "32%", sm: "80%", md: "82%", lg: "84%", xl: "87%" },
        px: { xs: 1, sm: 2, md: 3, lg: 3, xl: 3 },
        m: "5% auto",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        left: { xs: "-17%", sm: "0", md: "16px", lg: "16px", xl: "16px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem", lg: "1.25rem", xl: "1.25rem" },
          }}
        >
          Based on Your Recent Listening
        </Typography>
        <Typography
          sx={{
            display: { xs: "none", sm: "block", md: "block", lg: "block", xl: "block" },
            color: "#fff",
            cursor: "pointer",
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1rem", xl: "1rem" },
          }}
        >
          View More
        </Typography>
      </Box>

      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: { xs: "15px", sm: "20px", md: "20px", lg: "25px", xl: "30px" },
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
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 160, sm: 170, md: 180, lg: 180, xl: 185 },
                  borderRadius: 3,
                  overflow: "hidden",
                  "&:hover .overlay": { opacity: 1 },
                }}
              >
                <Card sx={{ width: "100%", height: "100%", borderRadius: 3 }}>
                  <CardMedia
                    component="img"
                    image={item.src}
                    alt={item.alt}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Card>

                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                      px: 1,
                    }}
                  >
                    <IconButton sx={{ color: "#743ae9" }}>
                      <PlayCircleFilledWhiteIcon
                        fontSize={isMobile ? "medium" : "large"}
                      />
                    </IconButton>
                    <IconButton sx={{ color: "white" }}>
                      <FavoriteBorderIcon
                        fontSize={isMobile ? "small" : "medium"}
                      />
                    </IconButton>
                    <IconButton sx={{ color: "white" }}>
                      <MoreHorizIcon fontSize={isMobile ? "small" : "medium"} />
                    </IconButton>
                  </Box>
                </Box>
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
          sx={{
            position: "absolute",
            right: "-56px",
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