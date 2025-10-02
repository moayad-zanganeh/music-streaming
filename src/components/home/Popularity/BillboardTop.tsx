import { Box, Typography, IconButton, Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function BillboardTop() {
  const songs = [
    { img: 'Bikkboard Top 100/Frame 12.png', title: 'Espresso', artist: 'Sabrina Carpenter' },
    { img: 'Bikkboard Top 100/Frame 13.png', title: 'Birds Of A Feather', artist: 'Billie Eilish' },
    { img: 'Bikkboard Top 100/Frame 12 (1).png', title: 'Lies Lies Lies', artist: 'Morgan Wallen' },
    { img: 'Bikkboard Top 100/Frame 12 (2).png', title: 'Good Luck, Babe!', artist: 'Future, Metro Boomin & Kendrick Lamar' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        p: { xs: 2, sm: 3, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        alignItems: 'flex-start',
        width: { xs: '40%', sm: '90%', md: '40%' },
      }}
    >
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
          }}
        >
          Billboard Top 100
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#fff',
            cursor: 'pointer',
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' },
            '&:hover': { color: '#f3c242' },
          }}
        >
          See All
        </Typography>
      </Box>

      <Box sx={{ mt: 2, width: '100%' }}>
        {songs.map((song, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 } }}>
                <img
                  src={song.img}
                  alt={song.title}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '6px',
                  }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    sx={{
                      color: '#fff',
                      fontSize: { xs: '0.7rem', sm: '0.85rem', md: '1rem' },
                    }}
                  >
                    {song.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#aaa',
                      fontSize: { xs: '0.6rem', sm: '0.75rem', md: '0.9rem' },
                    }}
                  >
                    {song.artist}
                  </Typography>
                </Box>
              </Box>
              <IconButton>
                <FavoriteBorderIcon sx={{ color: '#fff', fontSize: { xs: 16, sm: 20, md: 22 } }} />
              </IconButton>
            </Box>

            {index !== songs.length - 1 && (
              <Divider
                sx={{
                  height: '3px',
                  width: '56%',
                  my: { xs: 1.2, sm: 1.5, md: 2 },
                  mx: 'auto',
                  background: 'linear-gradient(90deg, #1F214E 0%, #5E63EA 49%, #1F214E 100%)',
                  borderRadius: '3px',
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
