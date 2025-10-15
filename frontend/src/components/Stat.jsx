// components/StatsSection.js
import { Box, Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import StatCard from './Cards/StatCard';

const statsData = [
  { icon: <FavoriteBorderIcon fontSize="large" />, number: 165, label: 'Happy Clients' },
  { icon: <LaptopMacIcon fontSize="large" />, number: 179, label: 'Website Completed' },
  { icon: <CameraAltOutlinedIcon fontSize="large" />, number: 180, label: 'Businesses Ranked' },
  { icon: <ChatBubbleOutlineOutlinedIcon fontSize="large" />, number: 158, label: 'Lead Generation' },
];

const StatsSection = () => {
  return (
    <Box sx={{ backgroundColor: '#1e1e1e', py: 10 }}>
      <Grid container spacing={4} justifyContent="center">
        {statsData.map((stat, index) => (
          <Grid item key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
