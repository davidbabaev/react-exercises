import React from 'react'
import { Link } from 'react-router-dom'
import { useStyledAuth } from './StyledAuthContext'
import { 
    Box, 
    Typography, 
    Button, 
    Container,
    Card,
    CardContent,
    Grid
} from '@mui/material'
import SecurityIcon from '@mui/icons-material/Security'
import SpeedIcon from '@mui/icons-material/Speed'
import LockIcon from '@mui/icons-material/Lock'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function StyledHomePage() {
    const { user } = useStyledAuth()

    const features = [
        {
            icon: <SecurityIcon sx={{ fontSize: 40, color: '#e94560' }} />,
            title: 'Secure Authentication',
            description: 'Industry-standard JWT tokens keep your data safe and secure.'
        },
        {
            icon: <SpeedIcon sx={{ fontSize: 40, color: '#e94560' }} />,
            title: 'Lightning Fast',
            description: 'Optimized performance for seamless user experience.'
        },
        {
            icon: <LockIcon sx={{ fontSize: 40, color: '#e94560' }} />,
            title: 'Protected Routes',
            description: 'Control access to sensitive pages with ease.'
        }
    ]

    return (
        <Box
            sx={{
                minHeight: '90vh',
                background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)',
                pt: 8,
                pb: 6
            }}
        >
            <Container maxWidth="lg">
                {/* Hero Section */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 800,
                            color: '#fff',
                            mb: 2,
                            letterSpacing: '-1px',
                            fontSize: { xs: '2.5rem', md: '3.5rem' }
                        }}
                    >
                        Welcome to{' '}
                        <Box
                            component="span"
                            sx={{
                                background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}
                        >
                            AuthApp
                        </Box>
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'rgba(255,255,255,0.6)',
                            maxWidth: 600,
                            mx: 'auto',
                            mb: 4,
                            fontWeight: 400,
                            lineHeight: 1.6
                        }}
                    >
                        A complete authentication system built with React Context, 
                        JWT tokens, and protected routes.
                    </Typography>

                    {!user && (
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                            <Button
                                component={Link}
                                to="/authproject/register"
                                variant="contained"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #ff6b6b 0%, #e94560 100%)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 10px 30px rgba(233, 69, 96, 0.3)'
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Get Started
                            </Button>
                            <Button
                                component={Link}
                                to="/authproject/login"
                                variant="outlined"
                                size="large"
                                sx={{
                                    color: '#fff',
                                    borderColor: 'rgba(255,255,255,0.3)',
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    '&:hover': {
                                        borderColor: '#fff',
                                        backgroundColor: 'rgba(255,255,255,0.05)'
                                    }
                                }}
                            >
                                Sign In
                            </Button>
                        </Box>
                    )}

                    {user && (
                        <Button
                            component={Link}
                            to="/authproject/dashboard"
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
                                px: 4,
                                py: 1.5,
                                fontSize: '1rem',
                                fontWeight: 600,
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #ff6b6b 0%, #e94560 100%)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 10px 30px rgba(233, 69, 96, 0.3)'
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Go to Dashboard
                        </Button>
                    )}
                </Box>

                {/* Features Section */}
                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card
                                sx={{
                                    backgroundColor: 'rgba(255,255,255,0.03)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: 3,
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        borderColor: 'rgba(233, 69, 96, 0.3)',
                                        transform: 'translateY(-5px)'
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box sx={{ mb: 2 }}>
                                        {feature.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#fff',
                                            fontWeight: 600,
                                            mb: 1
                                        }}
                                    >
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'rgba(255,255,255,0.5)',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
