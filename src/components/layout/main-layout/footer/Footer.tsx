import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const footerData = [
  ['Company', 'About', 'Jobs', 'For the Record'],
  [
    'Communities',
    'For Artists',
    'Developers',
    'Advertising',
    'Inventors',
    'Vendors',
  ],
  ['Useful links', 'Support', 'Free Mobile Apps'],
  [
    'Plans',
    'Premium individual',
    'Premium Duo',
    'Premium Family',
    'Premium Student',
    'Audiobooks Access',
  ],
  [
    'Subscribe to our Newsletter',
    'email-input',
    'social-icons',
    'Follow Us',
    'Security',
  ],
];

const Footer = () => {
  return (
    <Box
      px={4}
      py={6}
      sx={{
        width: '90%',
        mx: '7%',
        zIndex: 1,
        bgcolor: '#101720',
      }}
    >
      <Box display="flex" flexWrap="wrap" justifyContent="space-between">
        {footerData.map((column, colIndex) => (
          <Box key={colIndex} minWidth={180} mb={4}>
            {column.map((item, itemIndex) => {
              if (item === 'email-input') {
                return (
                  <Box key={itemIndex} display="flex" gap={1} mt={1} mb={2}>
                    <TextField
                      size="small"
                      variant="outlined"
                      placeholder="Enter your email"
                      fullWidth
                    />
                    <Button variant="contained">Submit</Button>
                  </Box>
                );
              }

              if (item === 'social-icons') {
                return (
                  <Box key={itemIndex} display="flex" gap={1} mt={1} mb={2}>
                    <IconButton color="primary">
                      <FacebookIcon />
                    </IconButton>
                    <IconButton color="primary">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton color="primary">
                      <InstagramIcon />
                    </IconButton>
                  </Box>
                );
              }

              return (
                <Typography
                  key={itemIndex}
                  variant="body2"
                  fontWeight={itemIndex === 0 ? 'bold' : 'normal'}
                  gutterBottom
                >
                  {item}
                </Typography>
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
