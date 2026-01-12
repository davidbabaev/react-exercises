import React from 'react'
import { Link } from 'react-router-dom'
import { 
    Box, 
    Typography, 
    Button, 
    Container,
    Card,
    CardContent
} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import LoginIcon from '@mui/icons-material/Login'

export default function StyledProtectedRoute({ user, children }) {
    if (user) {
        return children
    }

    return (
        <Box
            sx={{
                minHeight: '90vh',
                background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)',
                display: 'flex',
                alignItems: 'center',
                py: 6
            }}
        >
            <Container maxWidth="sm">
                <Card
                    sx={{
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 4,
                        textAlign: 'center'
                    }}
                >
                    <CardContent sx={{ p: 6 }}>
                        <Box
                            sx={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.2) 0%, rgba(255, 107, 107, 0.2) 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mx: 'auto',
                                mb: 3
                            }}
                        >
                            <LockIcon sx={{ fontSize: 40, color: '#e94560' }} />
                        </Box>

                        <Typography
                            variant="h4"
                            sx={{
                                color: '#fff',
                                fontWeight: 700,
                                mb: 2
                            }}
                        >
                            Access Denied
                        </Typography>

                        <Typography
                            sx={{
                                color: 'rgba(255,255,255,0.5)',
                                mb: 4,
                                maxWidth: 300,
                                mx: 'auto'
                            }}
                        >
                            You need to be logged in to view this page. Please sign in to continue.
                        </Typography>

                        <Button
                            component={Link}
                            to="/authproject/login"
                            variant="contained"
                            size="large"
                            startIcon={<LoginIcon />}
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
                            Go to Login
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}
