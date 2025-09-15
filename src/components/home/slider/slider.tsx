import { useEffect, useState } from 'react';
import { Box, Card, CardMedia, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  { src: 'slider/Addel.jpg', title1: 'To Be Loved', title2: 'Adele' },
  {
    src: 'slider/billie_eilish-.jpg',
    title1: 'Blue',
    title2: 'Billie Eilish',
  },
  {
    src: 'slider/e76f3cc33c3ea3748db2c4f964b24d7f.jpg',
    title1: 'Everyday',
    title2: 'Ariana Grande',
  },
  {
    src: 'slider/ed-sheeran.jpg',
    title1: 'Shivers',
    title2: 'Ed Sheeran',
  },
  {
    src: 'slider/taylorswift.webp',
    title1: 'Cruel Summer',
    title2: 'Taylor Swift',
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
        width: '88%',
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
          width: '83%',
          right: '8px',
          maxWidth: 1200,
          height: 420,
          perspective: '2500px',
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            width: '16px',
            height: '16px',
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
          const offset = index - currentIndex;
          const modOffset =
            (index - currentIndex + images.length) % images.length;

          let transformStyles = '';
          let zIndex = 0;
          let scale = 0.7;
          let rotate = 0;
          let translateX = 0;

          if (
            modOffset === 0 ||
            modOffset === 1 ||
            modOffset === 2 ||
            modOffset === images.length - 1 ||
            modOffset === images.length - 2
          ) {
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

            transformStyles = `translateX(${translateX}px) scale(${scale}) rotateY(${rotate}deg)`;
          } else {
            return null;
          }

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
                width: 200,
                height: 250,
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  height: '200px',
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
                  sx={{ height: '100%', objectFit: 'fill' }}
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
                    transform: 'scale(0.8)',
                    display: 'block',
                    textAlign: 'left',
                  }}
                >
                  {image.title1}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#fff',
                    fontSize: '0.9rem',
                    transform: 'scale(0.8)',
                    textAlign: 'left',
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
            width: '16px',
            height: '16px',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.4)' },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
