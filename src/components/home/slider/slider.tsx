import { useEffect, useState } from 'react';
import { Box, Card, CardMedia, Typography, IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  { src: 'slider/Addel.jpg', title1: 'To Be Loved', title2: 'Adele' },
  { src: 'slider/billie_eilish-.jpg', title1: 'Blue', title2: 'Billie Eilish' },
  { src: 'slider/e76f3cc33c3ea3748db2c4f964b24d7f.jpg', title1: 'Everyday', title2: 'Ariana Grande' },
  { src: 'slider/ed-sheeran.jpg', title1: 'Shivers', title2: 'Ed Sheeran' },
  { src: 'slider/taylorswift.webp', title1: 'Cruel Summer', title2: 'Taylor Swift' },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isTablet = useMediaQuery('(max-width:1024px)');
  const isMobile = useMediaQuery('(max-width:600px)');

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '95%',
        mx: 'auto',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: {xs: "54%", sm: "48%", md: "83%", lg: "83%"},
          maxWidth: 1200,
          height: isMobile ? 320 : 420,
          perspective: '2500px',
          right:{xs: "16%", sm: "0", md: "-2%", lg: "-2%"}
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            width: 32,
            height: 32,
            position: 'absolute',
            left: 0,
            zIndex: 2,
            color: '#fff',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.4)' },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        {images.map((image, index) => {
          const modOffset = (index - currentIndex + images.length) % images.length;
          let show = false;
          if (!isTablet && !isMobile) {
            show = [0, 1, 2, images.length - 1, images.length - 2].includes(modOffset);
          } else if (isTablet && !isMobile) {
            show = [0, 1, images.length - 1].includes(modOffset);
          } else if (isMobile) {
            show = modOffset === 0;
          }
          if (!show) return null;

          let scale = 0.7;
          let rotate = 0;
          let translateX = 0;
          let zIndex = 0;

          if (modOffset === 0) {
            scale = 1;
            rotate = 0;
            translateX = 0;
            zIndex = 5;
          } else if (modOffset === 1 || modOffset === images.length - 1) {
            scale = 0.8;
            rotate = modOffset === 1 ? 30 : -30;
            translateX = modOffset === 1 ? 200 : -200;
            zIndex = 3;
          } else {
            scale = 0.6;
            rotate = modOffset === 2 ? 50 : -50;
            translateX = modOffset === 2 ? 320 : -320;
            zIndex = 1;
          }

          const transformStyles = `translateX(${translateX}px) scale(${scale}) rotateY(${rotate}deg)`;

          return (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                transform: transformStyles,
                transition: 'transform 0.6s ease',
                zIndex,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: isMobile ? 250 : 220,
                height: isMobile ? 280 : 250,
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  height: isMobile ? '220px' : '200px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
                  backgroundColor: '#121212',
                }}
              >
                <CardMedia
                  component="img"
                  image={image.src}
                  alt={image.title2}
                  sx={{ height: '100%', objectFit: 'cover' }}
                />
              </Card>
              <Box
                sx={{
                  marginTop: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: '#fff',
                    transform: 'scale(0.9)',
                    textAlign: 'center',
                  }}
                >
                  {image.title1}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#fff',
                    fontSize: '0.9rem',
                    transform: 'scale(0.9)',
                    textAlign: 'center',
                    marginTop: '4px',
                  }}
                >
                  {image.title2}
                </Typography>
              </Box>
            </Box>
          );
        })}

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 0,
            zIndex: 2,
            color: '#fff',
            width: 32,
            height: 32,
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.4)' },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
