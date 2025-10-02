import React, { useRef } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const musicItems = [
  {
    src: "Top Shows/Frame 67.png",
    alt: "Enrique Iglesias",
    title1: "Hero",
    title2: "Enrique Iglesias",
  },
  {
    src: "Top Shows/Frame 68.png",
    alt: "Adele",
    title1: "Easy on me",
    title2: "Adele",
  },
  {
    src: "Top Shows/Frame 69.png",
    alt: "Metallica",
    title1: "Master of puppets",
    title2: "Metallica",
  },
  {
    src: "Top Shows/Frame 70.png",
    alt: "Ice Cube",
    title1: "Big Subwoofer",
    title2: "Ice Cube",
  },
  {
    src: "Top Shows/Frame 71.png",
    alt: "Post Malone",
    title1: "I Had Some Help",
    title2: "Post Malone",
  },
];

export default function TopShows() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));
  
  const itemsToShow = isMobile ? 1 : isTablet ? 3 : isLaptop ? 4 : 5;
  const gap = 64;
  const containerWidth = 800;
  const cardWidth = `calc((100% - ${
    gap * (itemsToShow - 1)
  }px) / ${itemsToShow})`;

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "32%", sm: "81%", md: "85%", lg: "85%" },
        px: { xs: 1, sm: 2, md: 3, lg: 4 },
        m: "5% auto",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        left: { xs: "-17%", sm: "0", md: "0", lg: "0" },
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
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
          }}
        >
          Top Shows
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
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "hidden",
            gap: `${gap}px`,
            scrollBehavior: "smooth",
            width: "100%",
          }}
        >
          {musicItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "left",
                flexShrink: 0,
                minWidth: cardWidth,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 292,
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
                  fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.95rem" },
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
                  fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
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
