import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
const tabLabels = [
  'Top Track',
  'Albums',
  'Singles',
  'Music Videos',
  'Comments',
];

const TabAlbom = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const topTracks = [
    {
      id: 1,
      src: 'artist-page/top track/Frame 14.png',
      song: 'Someone Like You',
      album: '21',
      time: '04:45',
    },
    {
      id: 2,
      src: 'artist-page/top track/Frame 15.png',
      song: 'Hello',
      album: '25',
      time: '04:55',
    },
    {
      id: 3,
      src: 'artist-page/top track/Frame 17.png',
      song: 'Rolling in the Deep',
      album: '21',
      time: '03:48',
    },
    {
      id: 4,
      src: 'artist-page/top track/Frame 18.png',
      song: 'Easy On Me',
      album: '30',
      time: '03:44',
    },
    {
      id: 5,
      src: 'artist-page/top track/Frame 17.png',
      song: 'Hometown Glory',
      album: '19',
      time: '04:31',
    },
  ];

  return (
    <Box
      sx={{
        width: '80%',
        mx: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabLabels.map((label, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>

      {value === 0 && (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Song</TableCell>
                <TableCell>Album</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>See All</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topTracks.map((track) => (
                <TableRow key={track.id}>
                  <TableCell>
                    <Box
                      sx={{ display: 'flex', alignItems: ' center', gap: '4%' }}
                    >
                      <img
                        src={track.src}
                        alt="See All"
                        style={{ marginRight: '8px' }}
                      />
                      <Typography>
                        {track.id.toString().padStart(2, '0')}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{track.song}</TableCell>
                  <TableCell>{track.album}</TableCell>
                  <TableCell>{track.time}</TableCell>
                  <TableCell>
                    <Box
                      sx={{ display: 'flex', alignItems: ' center', gap: '4%' }}
                    >
                      <FavoriteBorderIcon />
                      <ShareIcon />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {value !== 0 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="body1">{tabLabels[value]} content...</Typography>
        </Box>
      )}
    </Box>
  );
};

export default TabAlbom;
