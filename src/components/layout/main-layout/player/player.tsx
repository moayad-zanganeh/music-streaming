import { Box, IconButton, Paper } from '@mui/material';
import { PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material';

export default function Player() {
  return (
    <Paper elevation={3} sx={{ width: '100%', zIndex: 2 }}>
      <Box display="flex" justifyContent="center" alignItems="center" p={2}>
        <IconButton>
          <SkipPrevious />
        </IconButton>
        <IconButton>
          <PlayArrow />
        </IconButton>
        <IconButton>
          <SkipNext />
        </IconButton>
      </Box>
    </Paper>
  );
}
