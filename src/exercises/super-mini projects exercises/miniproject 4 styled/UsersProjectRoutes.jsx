import React from 'react';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import {
  Box,
  Tabs,
  Tab,
  Breadcrumbs,
  Typography,
  Chip,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import theme from './theme';
import HomeUsers from './HomeUsers';
import CardsUsers from './CardsUsers';
import UserDetailsCard from './UserDetailsCard';

export default function UsersProjectRoutes() {
  const location = useLocation();

  // Determine active tab based on current path
  const getTabValue = () => {
    if (location.pathname.includes('/users/myusers')) return 1;
    if (location.pathname.includes('/users/user/')) return 1; // Keep Users tab active on detail page
    return 0; // Home
  };

  // Check if we're on a user detail page
  const isDetailPage = location.pathname.includes('/users/user/');

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '70vh' }}>
        {/* Internal Navigation Tabs */}
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            mb: 3,
            backgroundColor: 'white',
            borderRadius: 2,
            px: 1,
          }}
        >
          <Tabs
            value={getTabValue()}
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                minHeight: 56,
              },
              '& .Mui-selected': {
                color: 'primary.main',
              },
            }}
          >
            <Tab
              icon={<HomeIcon />}
              iconPosition="start"
              label="Home"
              component={Link}
              to="/users/home"
            />
            <Tab
              icon={<PeopleIcon />}
              iconPosition="start"
              label="Users"
              component={Link}
              to="/users/myusers"
            />
          </Tabs>
        </Box>

        {/* Breadcrumbs for detail page */}
        {isDetailPage && (
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            sx={{ mb: 3 }}
          >
            <Chip
              component={Link}
              to="/users/home"
              label="Home"
              size="small"
              clickable
              sx={{ cursor: 'pointer' }}
            />
            <Chip
              component={Link}
              to="/users/myusers"
              label="Users"
              size="small"
              clickable
              sx={{ cursor: 'pointer' }}
            />
            <Typography color="text.primary" variant="body2">
              User Details
            </Typography>
          </Breadcrumbs>
        )}

        {/* Routes Content */}
        <Routes>
          <Route path="/home" element={<HomeUsers />} />
          <Route path="/myusers" element={<CardsUsers />} />
          <Route path="/user/:id" element={<UserDetailsCard />} />
        </Routes>

        {/* Footer */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'grey.200',
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            UserHub • Built with React & Material-UI
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
