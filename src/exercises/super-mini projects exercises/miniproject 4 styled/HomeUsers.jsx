import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function HomeUsers() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      title: 'Smart Search',
      description: 'Find users instantly with our debounced search feature that filters as you type.',
    },
    {
      icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
      title: 'Favorites',
      description: 'Save your favorite users and access them quickly. Your favorites persist between sessions.',
    },
    {
      icon: <FilterListIcon sx={{ fontSize: 40 }} />,
      title: 'Advanced Filters',
      description: 'Sort by name, filter by city, and organize your user list exactly how you want.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1E1B4B 0%, #3730A3 50%, #6366F1 100%)',
          borderRadius: 4,
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
          mb: 6,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            left: -50,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }}
        />

        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 2,
              maxWidth: 600,
            }}
          >
            Manage Your Users with Ease
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: { xs: '1rem', md: '1.125rem' },
              mb: 4,
              maxWidth: 500,
              lineHeight: 1.7,
            }}
          >
            A modern user management dashboard with powerful search, filtering, 
            and organization features. Built with React and Material-UI.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<PeopleIcon />}
              onClick={() => navigate('/users/myusers')}
              sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                  boxShadow: '0 8px 24px rgba(249, 115, 22, 0.4)',
                },
              }}
            >
              Browse Users
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'rgba(255,255,255,0.5)',
                color: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 1,
            color: 'text.primary',
          }}
        >
          Powerful Features
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mb: 5,
            color: 'text.secondary',
            maxWidth: 500,
            mx: 'auto',
          }}
        >
          Everything you need to manage and organize your users effectively
        </Typography>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'grey.200',
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      color: 'primary.main',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h4" sx={{ mb: 1.5, color: 'text.primary' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)',
          borderRadius: 4,
          py: 5,
          px: 4,
          border: '1px solid',
          borderColor: 'grey.200',
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {[
            { value: '10+', label: 'Users Available' },
            { value: '∞', label: 'Favorites Possible' },
            { value: '3', label: 'Filter Options' },
          ].map((stat, index) => (
            <Grid item xs={6} md={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h1"
                  sx={{
                    color: 'primary.main',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
