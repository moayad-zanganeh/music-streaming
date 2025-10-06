import * as React from 'react';
import { Box, TextField, Typography, InputAdornment } from '@mui/material';
import { useRouter } from 'next/router';
import SearchIcon from '@mui/icons-material/Search';
const BanerExplore = () => {
  const router = useRouter();
  const [value, setValue] = React.useState("");
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const q = value.trim();
      if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  };
  return (
    <Box
      sx={{
        backgroundImage: 'url("/explore/unnamed (1) 1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          position: 'relative',
          left:{ xs: 0, sm: "-16px", md: "-16px" },
          textAlign: { xs: 'center', sm: 'left' },
          mx: { xs: 'auto', sm: 0 },
        }}
      >
        <Typography variant="h4" color="white" gutterBottom>
          Explore
        </Typography>
        <TextField
          id="outlined-basic"
          label="Search"
          placeholder="What do you want to listen to?"
          variant="outlined"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            sx: {
              color: '#aaa',
              '&.Mui-focused': {
                color: '#5E63EA',
              },
            },
          }}
          sx={{
            width: { xs: '90%', sm: '60%' },
            backgroundColor: '#252758',
            borderRadius: '16px',
            mb: 2,
            '& .MuiOutlinedInput-root': {
              borderRadius: '16px',
              '& fieldset': {
                borderColor: '#5E63EA',
              },
              '&:hover fieldset': {
                borderColor: '#5E63EA',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#5E63EA',
                borderWidth: '2px',
              },
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
          }}
        />

        <Typography component="p" color="white" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          Search History
        </Typography>
      </Box>
    </Box>
  );
};

export default BanerExplore;
