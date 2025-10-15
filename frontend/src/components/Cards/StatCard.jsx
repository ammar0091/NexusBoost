// components/StatCard.js
import { Card, CardContent, Typography, Box } from '@mui/material';

const StatCard = ({ icon, number, label }) => {
  return (
    <Box
      sx={{
        border: '2px solid white', // Outer white border
        borderRadius: '8px',
        display: 'inline-block', 
      }}
    >
      <Card
        sx={{
          width: 230,
          height: 190,
          textAlign: 'center',
          boxShadow: 3,
          border: '4px solid black', // Inner black border
          transition: 'all 0.3s ease',
          backgroundColor: '#fff',
          '&:hover': {
            border: '4px solid #771a1a',
            color: '#771a1a',
            '& svg': {
              color: '#771a1a',
            },
          },
        }}
      >
        <CardContent>
          <Box sx={{ mb: 2 }}>{icon}</Box>
          <Typography variant="h5" fontWeight="bold">
            {number}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default StatCard;
