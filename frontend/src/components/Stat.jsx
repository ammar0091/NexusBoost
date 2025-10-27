import { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

// Stat data
const statsData = [
  { icon: <FavoriteBorderIcon sx={{ fontSize: 40, color: '#ff4c60' }} />, number: 165, label: 'Happy Clients' },
  { icon: <LaptopMacIcon sx={{ fontSize: 40, color: '#ff4c60' }} />, number: 179, label: 'Website Completed' },
  { icon: <CameraAltOutlinedIcon sx={{ fontSize: 40, color: '#ff4c60' }} />, number: 180, label: 'Businesses Ranked' },
  { icon: <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 40, color: '#ff4c60' }} />, number: 158, label: 'Lead Generation' },
];

// Animated Number component
const AnimatedNumber = ({ target, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [trigger, target]);

  const formattedCount = count < 10 ? `0${count}` : count;

  return (
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        letterSpacing: 1,
        color: '#fff',
        mb: 0.5,
      }}
    >
      {formattedCount}
    </Typography>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // once visible, stop observing
        }
      },
      { threshold: 0.3 } // 30% visible triggers
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        backgroundColor: '#111',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        py: 8,
        px: 2,
        flexWrap: 'wrap',
      }}
    >
      {statsData.map((stat, index) => (
        <Box
          key={index}
          sx={{
            flex: { xs: '1 1 100%', sm: '1 1 50%', md: '1 1 25%' },
            textAlign: 'center',
            color: 'white',
            px: 3,
            py: 3,
            fontFamily: `'Poppins', sans-serif`,
            borderRight: {
              xs: 'none',
              md: index !== statsData.length - 1 ? '1px solid #333' : 'none',
            },
            borderBottom: {
              xs: index !== statsData.length - 1 ? '1px solid #333' : 'none',
              md: 'none',
            },
          }}
        >
          <Box sx={{ mb: 1 }}>{stat.icon}</Box>
          <AnimatedNumber target={stat.number} trigger={isVisible} />
          <Typography
            variant="subtitle1"
            sx={{
              color: '#aaa',
              fontWeight: 500,
              textTransform: 'uppercase',
              fontSize: '0.9rem',
            }}
          >
            {stat.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default StatsSection;
