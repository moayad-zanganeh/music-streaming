import { Box } from '@mui/material';
import BillboardTop from './BillboardTop';
import NewReleased from './NewReleased';

export default function Popularity() {
  return (
    <Box
      sx={{
        width: '88%',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 4, md: 9 },
        position: 'relative',
        mx: 'auto',
        left: { xs: "11%", md: '8%' },
      }}
    >
      <BillboardTop />
      <NewReleased />
    </Box>
  );
}
