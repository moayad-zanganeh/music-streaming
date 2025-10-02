import { Box, TextField, Typography, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const BanerExplore = () => {
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
          left:{ xs: "56px", sm: "-16px", md: "-16px" },
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
            width: '60%',
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

        <Typography component="p" color="white">
          Search History
        </Typography>
      </Box>
    </Box>
  );
};

export default BanerExplore;
