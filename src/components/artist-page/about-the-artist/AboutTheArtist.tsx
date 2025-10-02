import React from 'react';
import { Box, Typography } from '@mui/material';

export default function AboutTheArtist() {
  return (
    <Box sx={{ my: 5 }}>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "flex", lg: "flex", xl: "flex" },
          position: 'relative',
          alignItems: 'flex-end',
          flexDirection: 'column',
          mx: '-2%',
          width: '90%',
        }}
      >
        <img
          src="artist-page/about the artist/About Artsit Cover (1).png"
          style={{
            width: '90%',
            marginBottom: '16px',
            borderRadius: '0 6px 6px 0',
          }}
        />

        <img
          src="artist-page/about the artist/image.svg"
          style={{
            width: '36%',
            marginBottom: '1rem',
            position: 'absolute',
            bottom: '21px',
            right: '-32px',
            zIndex: 1,
          }}
        />
      </Box>
    </Box>
  );
}
