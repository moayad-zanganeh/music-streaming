import { Box, Typography, IconButton, Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function BillboardTop() {
  const songs = [
    {
      img: 'Bikkboard Top 100/Frame 12.png',
      title: 'Espresso',
      artist: 'Sabrina Carpenter',
    },
    {
      img: 'Bikkboard Top 100/Frame 13.png',
      title: 'Birds Of A Feather',
      artist: 'Billie Eilish',
    },
    {
      img: 'Bikkboard Top 100/Frame 12 (1).png',
      title: 'Lies Lies Lies',
      artist: 'Morgan Wallen',
    },
    {
      img: 'Bikkboard Top 100/Frame 12 (2).png',
      title: 'Good Luck, Babe!',
      artist: 'Future, Metro Boomin & Kendrick Lamar',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        alignItems: 'flex-start',
        width: '40%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
          }}
        >
          Billboard Top 100
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#fff',
            cursor: 'pointer',
            '&:hover': { color: '#f3c242' },
          }}
        >
          See All
        </Typography>
      </Box>

      <Box sx={{ marginTop: 2, width: '100%' }}>
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
              <Box sx={{ display: 'flex', gap: 2 }}>
                <img src={song.img} alt={song.title} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ color: '#fff' }}>{song.title}</Typography>
                  <Typography sx={{ color: '#aaa' }}>{song.artist}</Typography>
                </Box>
              </Box>
              <IconButton>
                <FavoriteBorderIcon sx={{ color: '#fff' }} />
              </IconButton>
            </Box>

            {index !== songs.length - 1 && (
              <Divider
                sx={{
                  height: '4px',
                  width: '56%',
                  my: 2,
                  mx: 'auto',
                  background:
                    'linear-gradient(90deg, #1F214E 0%, #5E63EA 49%, #1F214E 100%)',
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
