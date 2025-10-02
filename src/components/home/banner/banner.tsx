import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';

export default function Banner() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <img 
        src="/home/09 1.png" 
        style={{ 
          width: '100%', 
          height: isMobile ? '200px' : '300px', 
          objectFit: 'cover' 
        }} 
        alt="Banner" 
      />
      <Box sx={{ 
        position: 'absolute', 
        top: isMobile ? '20%' : '50%', 
        right: {xs: "37%", sm: "10%", md: "10%", lg: "10%"},
        transform: isMobile ? 'translate(0, -20%)' : 'translate(0, -50%)',
        width: {xs: "40%", sm: "48%", md: "40%", lg: "40%"},
        textAlign: isMobile ? 'center' : 'left'
      }}>
        <Typography variant={isMobile ? 'h6' : 'h4'}>This Month's</Typography>
        <Typography variant={isMobile ? 'h6' : 'h4'} sx={{ color: '#5E63EA' }}>
          Record Breaking Albums!
        </Typography>
        <Typography component="p" sx={{ 
          mb: 2, 
          fontSize: isMobile ? '0.8rem' : '1rem',
          display: isMobile ? 'none' : 'block'
        }}>
          Dream your moments, Until I Met You.
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: {xs: "column", sm: "row", md: "row", lg: "row"},
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          mt: isMobile ? 1 : 0
        }}>
          <Button
            sx={{
              width:{xs: "60%", sm: "100%", md: "100%", lg: "100%"},
              borderRadius: '32px',
              border: 'solid #5E63EA',
              background: '#5E63EA',
              color: '#fff',
              height: '32px',
              fontSize: isMobile ? '0.7rem' : '0.8rem'
            }}
          >
            Listen Now
          </Button>
          <Button
            sx={{
              color: '#5E63EA',
              width:{xs: "60%", sm: "100%", md: "100%", lg: "100%"},
              border: 'solid #5E63EA',
              borderRadius: '32px',
              height: '32px',
              fontSize: isMobile ? '0.7rem' : '0.8rem'
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Box>
  );
}