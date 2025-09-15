import { Box, Button, Typography } from '@mui/material';

export default function Banner() {
  return (
    <Box sx={{ position: 'relative' }}>
      <img src="\home\09 1.png" />
      <Box sx={{ position: 'absolute', top: 32, right: 32, width: '50%' }}>
        <Typography variant="h4">This Month’s</Typography>
        <Typography variant="h4" sx={{ color: '#5E63EA' }}>
          Record Breaking Albums!
        </Typography>
        <Typography component="p" sx={{ mb: 2 }}>
          Dream your moments, Until I Met You.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            width: '50%',
            padding: '6px 19px',
            justifyContent: 'center',
            alignItems: 'center',
            mx: -2,
          }}
        >
          <Button
            sx={{
              width: '100%',
              borderRadius: '32px',
              border: 'solid #5E63EA',
              background: '#5E63EA',
              color: '#fff',
              height: '32px',
            }}
          >
            Listen Now
          </Button>
          <Button
            sx={{
              color: '#5E63EA',
              width: '100%',
              border: 'solid #5E63EA',
              borderRadius: '32px',
              height: '32px',
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
