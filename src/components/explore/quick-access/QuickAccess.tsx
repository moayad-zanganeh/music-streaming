import { Box, Typography } from '@mui/material';
const QuickAccess = () => {
  const items = [
    { label: 'Music' },
    { label: 'Podcasts', sx: { mx: '30%', width: '100%' } },
    { label: 'Trending', sx: { mx: '60%', width: '100%' } },
    { label: 'Made For You', sx: { mx: '110%', width: '100%' } },
    { label: 'Summer', sx: { mx: '60%', width: '100%' } },
    { label: 'Lives', sx: { mx: '30%', width: '100%' } },
    { label: 'Radio' },
  ];

  return (
    <Box
      sx={{
        backgroundImage: 'url("/explore/2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        minHeight: '1200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        px: 2,
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          position: 'absolute',
          left: '8%',
          top: 0,
        }}
      >
        <Typography variant="h4" color="white" gutterBottom sx={{ mb: 6 }}>
          Quick Access
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography variant="h4" color="white" gutterBottom>
            Explore Around the
          </Typography>
          <Typography
            variant="h4"
            color="white"
            gutterBottom
            sx={{ color: '#5E63EA' }}
          >
            Music World.
          </Typography>
        </Box>
        <Typography variant="h4" color="white" gutterBottom>
          Click Each Botton to Acccess the Page.
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: '10%',
          top: '20%',
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          pr: 4,
        }}
      >
        {items.map((item, index) => (
          <Typography
            key={index}
            variant="h4"
            color="white"
            gutterBottom
            sx={item.sx}
          >
            {item.label}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default QuickAccess;
