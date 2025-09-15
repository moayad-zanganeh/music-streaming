import { Box, Typography } from '@mui/material';

const BrowseAll = () => {
  const images = Array.from(
    { length: 18 },
    (_, i) => `/explore/Browse All/${i + 1}.png`
  );

  const rows = [];
  for (let i = 0; i < images.length; i += 3) {
    rows.push(images.slice(i, i + 3));
  }

  return (
    <Box
      sx={{
        px: 4,
        py: 6,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '90%',
        mx: '7%',
      }}
    >
      <Typography variant="h4" color="white" gutterBottom>
        Browse All
      </Typography>

      {rows.map((row, rowIndex) => (
        <Box
          key={rowIndex}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 4,
          }}
        >
          {row.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${rowIndex * 3 + index + 1}`}
              style={{
                width: '32%',
                borderRadius: '8px',
              }}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default BrowseAll;
