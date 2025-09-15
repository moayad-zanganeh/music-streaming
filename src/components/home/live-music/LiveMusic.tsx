import { Box, Typography } from '@mui/material';

export default function LiveMusic() {
  return (
    <Box sx={{ my: 5 }}>
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          alignItems: 'flex-end',
          flexDirection: 'column',
          width: '80%',
          margin: '16% 5%',
        }}
      >
        <img
          src="Live Music\image 87.png"
          style={{
            width: '70%',
            marginBottom: '16px',
            borderRadius: '0 6px 6px 0',
          }}
        />

        <img
          src="Live Music\image 85.png"
          style={{
            width: '40%',
            marginBottom: '1rem',
            position: 'absolute',
            bottom: 0,
            right: '20px',
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 50,
            height: '503px',
            width: '30%',
          }}
        >
          <img
            src="Live Music\Rectangle 176.png"
            style={{
              width: '86%',
              height: '71%%',
              marginLeft: '40%',
              borderRadius: '6px 0 0 6px',
              objectFit: 'fill',
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: '40%',
              width: '70%',
              height: 'auto',
            }}
          >
            <img
              src="Live Music\Ellipse 23.svg"
              style={{
                width: '64%',
                height: 'auto',
              }}
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
              <Typography>8 PM</Typography>
              <Typography variant="h5">FRI</Typography>
              <Typography variant="h5" fontWeight="bold">
                30
              </Typography>
              <Typography>AUG</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '32%',
              left: '50%',
              width: '100%',
              textAlign: 'left',
              color: '#fff',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: '#e15f08',
                }}
              />
              <Typography>Exclusive</Typography>
            </Box>
            <Typography sx={{ my: 1 }} variant="h5">
              Live Music 2024
            </Typography>
            <Typography sx={{ width: '60%' }}>
              Listen to live music concerts directly through the streaming that
              we provide for free.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
