import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { LineChart } from '@mui/x-charts/LineChart';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const tabLabels = [
  'All',
  'Report',
  'Playlist',
  'Artists',
  'Favourite Tracks',
  'Following',
  'Followers',
];

const StatsTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const polarData = {
    labels: ['Pop', 'Rock', 'Hip-hop', 'Jazz'],
    datasets: [
      {
        label: 'Genres',
        data: [30, 25, 20, 25],
        backgroundColor: ['#3f51b5', '#f50057', '#00c853', '#ffab00'],
      },
    ],
  };

  const polarOptions = {
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      r: {
        pointLabels: {
          centerPointLabels: true,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <Box sx={{ width: '80%', mx: 'auto' }}>
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
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Stats Overview
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              justifyContent: 'center',
              alignItems: 'center',
              mt: 3,
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Typography variant="subtitle1" gutterBottom>
                Plays & Trends
              </Typography>
              <LineChart
                xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }]}
                series={[
                  {
                    data: [50, 70, 60, 90, 100],
                    area: true,
                    label: 'Plays',
                    color: '#3f51b5',
                  },
                  {
                    data: [30, 40, 45, 80, 60],
                    area: true,
                    label: 'Downloads',
                    color: '#f50057',
                  },
                ]}
                height={300}
              />
            </Box>

            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Typography variant="subtitle1" gutterBottom>
                Genre Distribution
              </Typography>
              <PolarArea data={polarData} options={polarOptions} />
            </Box>
          </Box>
        </Box>
      )}

      {value !== 0 && (
        <Box sx={{ p: 3 }}>
          <Typography variant="body1">{tabLabels[value]} content...</Typography>
        </Box>
      )}
    </Box>
  );
};

export default StatsTabs;
