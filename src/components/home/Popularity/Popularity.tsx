import { Box } from '@mui/material';
import BillboardTop from './BillboardTop';
import NewReleased from './NewReleased';

export default function Popularity() {
  return (
    <Box
      sx={{
        width: '88%',
        display: 'flex',
        gap: 9,
        position: 'relative',
        mx: 'auto',
        left: '6%',
      }}
    >
      <BillboardTop />
      <NewReleased />
    </Box>
  );
}
