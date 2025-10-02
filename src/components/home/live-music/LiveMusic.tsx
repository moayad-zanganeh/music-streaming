import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';

export default function LiveMusic() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      mt: 5,
      mb:0,
      width: '100%',
      overflow: 'hidden',
      display: { xs: 'none', sm: 'none', md: 'block' },
    }}>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          flexDirection: 'column',
          width: { xs: '95%', sm: '90%', md: '85%', lg: '80%' },
          margin: { xs: '10% auto', sm: '8% auto', md: '5% auto' },
          height: isMobile ? '300px' : '552px',
        }}
      >
        <img
          src="Live Music/image 87.png"
          style={{
            width: isMobile ? '85%' : '70%',
            height: isMobile ? '60%' : '80%',
            objectFit: 'cover',
            borderRadius: '0 6px 6px 0',
          }}
          alt="Live Music Background"
        />

        <img
          src="Live Music/image 85.png"
          style={{
            width: isMobile ? '50%' : '40%',
            position: 'absolute',
            bottom: '20%' ,
            right: '20px',
            zIndex: 1,
          }}
          alt="Live Music Foreground"
        />

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: isMobile ? '5%' : '-72px',
            height: isMobile ? '250px' : '622px',
            width: isMobile ? '60%' : '34%',
          }}
        >
          <img
            src="Live Music/Rectangle 176.png"
            style={{
              width: isMobile ? '100%' : '86%',
              height: isMobile ? '100%' : '71%',
              marginLeft: isMobile ? '0' : '40%',
              borderRadius: '6px',
              objectFit: 'cover',
            }}
            alt="Live Music Event"
          />

          <Box
            sx={{
              position: 'absolute',
              top: isMobile ? '5%' : '0',
              left: isMobile ? '5%' : '40%',
              width: isMobile ? '30%' : '70%',
              height: 'auto',
              display: isMobile ? 'none' : 'block',
            }}
          >
            <img
              src="Live Music/Ellipse 23.svg"
              style={{
                width: '64%',
                height: 'auto',
              }}
              alt="Date Background"
            />

            <Box
              sx={{
                position: 'absolute',
                top: '8%',
                left: '-16%',
                width: '88%',
                textAlign: 'center',
                color: '#fff',
              }}
            >
              <Typography fontSize={isMobile ? '0.7rem' : '0.8rem'}>8 PM</Typography>
              <Typography variant={isMobile ? 'body1' : 'h5'}>FRI</Typography>
              <Typography variant={isMobile ? 'body1' : 'h5'} fontWeight="bold">
                30
              </Typography>
              <Typography fontSize={isMobile ? '0.7rem' : '0.8rem'}>AUG</Typography>
            </Box>
          </Box>
          
          <Box
            sx={{
              position: 'absolute',
              top: isMobile ? '60%' : '32%',
              left: isMobile ? '5%' : '50%',
              width: isMobile ? '90%' : '100%',
              textAlign: isMobile ? 'center' : 'left',
              color: '#fff',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: isMobile ? 'center' : 'flex-start' }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: '#e15f08',
                }}
              />
              <Typography fontSize={isMobile ? '0.8rem' : '0.9rem'}>Exclusive</Typography>
            </Box>
            <Typography sx={{ my: 1 }} variant={isMobile ? 'h6' : 'h5'}>
              Live Music 2024
            </Typography>
            <Typography sx={{ 
              width: isMobile ? '100%' : '60%',
              fontSize: isMobile ? '0.7rem' : '0.8rem',
              display: isMobile ? 'none' : 'block'
            }}>
              Listen to live music concerts directly through the streaming that
              we provide for free.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}