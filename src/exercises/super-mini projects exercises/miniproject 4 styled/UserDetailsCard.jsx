import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Grid,
  Paper,
  Button,
  Skeleton,
  Divider,
  IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';

export default function UserDetailsCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const user = users.find((p) => p.id === Number(id));

  // Loading State
  if (isLoading) {
    return (
      <Box>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/users/myusers')}
          sx={{ mb: 3 }}
        >
          Back to Users
        </Button>
        <Card sx={{ maxWidth: 800, mx: 'auto' }}>
          <Box sx={{ p: 4, background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)' }}>
            <Skeleton variant="circular" width={150} height={150} sx={{ mx: 'auto' }} />
          </Box>
          <CardContent sx={{ p: 4 }}>
            <Skeleton variant="text" height={40} width="60%" sx={{ mx: 'auto', mb: 2 }} />
            <Skeleton variant="text" height={24} width="40%" sx={{ mx: 'auto' }} />
            <Grid container spacing={3} sx={{ mt: 3 }}>
              {[1, 2, 3, 4].map((item) => (
                <Grid item xs={12} sm={6} key={item}>
                  <Skeleton variant="rectangular" height={80} sx={{ borderRadius: 2 }} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    );
  }

  // User not found
  if (!user) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <PersonIcon sx={{ fontSize: 80, color: 'grey.300', mb: 2 }} />
        <Typography variant="h4" sx={{ mb: 2, color: 'text.secondary' }}>
          User Not Found
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/users/myusers')}
        >
          Back to Users
        </Button>
      </Box>
    );
  }

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: user.email.toLowerCase(),
      color: '#3730A3',
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: user.phone,
      color: '#16A34A',
    },
    {
      icon: <LanguageIcon />,
      label: 'Website',
      value: user.website,
      color: '#F97316',
    },
  ];

  return (
    <Box>
      {/* Back Button */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/users/myusers')}
        sx={{ mb: 3, color: 'text.secondary' }}
      >
        Back to Users
      </Button>

      <Card sx={{ maxWidth: 800, mx: 'auto', overflow: 'visible' }}>
        {/* Header with Avatar */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #1E1B4B 0%, #3730A3 50%, #6366F1 100%)',
            pt: 5,
            pb: 8,
            px: 3,
            position: 'relative',
            textAlign: 'center',
          }}
        >
          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 40,
              left: 30,
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
            }}
          />

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              mb: 1,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            User Profile
          </Typography>
        </Box>

        {/* Avatar - overlapping the header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: -8,
            mb: 3,
          }}
        >
          <Avatar
            src={`https://i.pravatar.cc/150?img=${user.id}`}
            alt={user.name}
            sx={{
              width: 150,
              height: 150,
              border: '6px solid white',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            }}
          />
        </Box>

        <CardContent sx={{ px: { xs: 3, md: 5 }, pb: 5 }}>
          {/* Name and Company */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h2" sx={{ mb: 1, color: 'text.primary' }}>
              {user.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              @{user.username}
            </Typography>
            <Chip
              icon={<BusinessIcon />}
              label={user.company.name}
              color="primary"
              sx={{ fontWeight: 500 }}
            />
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Contact Information */}
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <PersonIcon color="primary" />
            Contact Information
          </Typography>

          <Grid container spacing={2} sx={{ mb: 4 }}>
            {contactInfo.map((item, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'grey.200',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: item.color,
                      boxShadow: `0 4px 12px ${item.color}20`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: `${item.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 1.5,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="caption" color="text.secondary" display="block">
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      wordBreak: 'break-word',
                    }}
                  >
                    {item.value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Address Section */}
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <HomeIcon color="primary" />
            Address
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'grey.200',
              mb: 4,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <LocationOnIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Street Address
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      {user.address.street}, {user.address.suite}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <LocationOnIcon sx={{ color: 'primary.main', mt: 0.5 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      City & Zipcode
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      {user.address.city}, {user.address.zipcode}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Company Section */}
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <WorkIcon color="primary" />
            Company Details
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #F8FAFC 0%, #EEF2FF 100%)',
              border: '1px solid',
              borderColor: 'grey.200',
            }}
          >
            <Typography variant="h4" sx={{ mb: 1, color: 'primary.main' }}>
              {user.company.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontStyle: 'italic',
                mb: 1.5,
              }}
            >
              "{user.company.catchPhrase}"
            </Typography>
            <Chip
              label={user.company.bs}
              size="small"
              variant="outlined"
              sx={{ textTransform: 'capitalize' }}
            />
          </Paper>
        </CardContent>
      </Card>
    </Box>
  );
}
