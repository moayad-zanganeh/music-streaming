import { Box, Typography } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
const Profile = () => {
  return (
    <Box sx={{ position: 'relative', width: '80%' }}>
      <img
        src="dashboard\h-heyerlein-riYdn15o96U-unsplash 1.png"
        style={{ width: '125%' }}
      />
      <Box sx={{ position: 'absolute', bottom: -40, left: 80, width: '100%' }}>
        <img src="Ellipse 3379.svg" style={{ width: '20%' }} />
        <PhotoCameraIcon
          sx={{ position: 'absolute', bottom: 40, left: 20, width: '30%' }}
        />
      </Box>
      <Box>
        <Box sx={{ position: 'relative', left: '28%', width: '90%' }}>
          <Typography variant="h4">Jennifer Ford</Typography>
          <Box
            component="ol"
            sx={{
              pl: 2,
              display: 'flex',
              gap: 5,
            }}
          >
            <li>
              <Typography component="span" sx={{ mb: 2, display: 'inline' }}>
                3 Public Playlists
              </Typography>
            </li>
            <li>
              <Typography component="span" sx={{ mb: 2, display: 'inline' }}>
                2 Follower
              </Typography>
            </li>
            <li>
              <Typography component="span" sx={{ mb: 2, display: 'inline' }}>
                20 Following
              </Typography>
            </li>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
