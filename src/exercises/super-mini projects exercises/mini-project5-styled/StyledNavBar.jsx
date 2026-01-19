import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStyledAuth } from './StyledAuthContext'
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Button, 
    Box, 
    Avatar,
    Chip
} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home'
import DashboardIcon from '@mui/icons-material/Dashboard'

export default function StyledNavBar() {
    const { user, logOut } = useStyledAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
        navigate('/authproject/home')
    }

    return (
        <AppBar 
            position="static" 
            elevation={0}
            sx={{ 
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                borderBottom: '1px solid rgba(255,255,255,0.1)'
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Logo & Brand */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '12px',
                            background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            color: 'white'
                        }}
                    >
                        A
                    </Box>
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            fontWeight: 700,
                            letterSpacing: '-0.5px',
                            color: '#fff'
                        }}
                    >
                        AuthApp
                    </Typography>
                </Box>

                {/* Navigation Links */}
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button 
                        component={Link} 
                        to="/authproject/home"
                        startIcon={<HomeIcon />}
                        sx={{ 
                            color: 'rgba(255,255,255,0.8)',
                            '&:hover': { 
                                color: '#fff',
                                backgroundColor: 'rgba(255,255,255,0.1)'
                            }
                        }}
                    >
                        Home
                    </Button>
                    <Button 
                        component={Link} 
                        to="/authproject/dashboard"
                        startIcon={<DashboardIcon />}
                        sx={{ 
                            color: 'rgba(255,255,255,0.8)',
                            '&:hover': { 
                                color: '#fff',
                                backgroundColor: 'rgba(255,255,255,0.1)'
                            }
                        }}
                    >
                        Dashboard
                    </Button>
                </Box>

                {/* Auth Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {user ? (
                        <>
                            <Chip
                                avatar={
                                    <Avatar 
                                        sx={{ 
                                            bgcolor: '#e94560',
                                            color: '#fff !important'
                                        }}
                                    >
                                        {user.name.charAt(0).toUpperCase()}
                                    </Avatar>
                                }
                                label={user.name}
                                sx={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    color: '#fff',
                                    fontWeight: 500,
                                    '& .MuiChip-avatar': {
                                        color: '#fff'
                                    }
                                }}
                            />
                            <Button 
                                onClick={handleLogout}
                                startIcon={<LogoutIcon />}
                                variant="outlined"
                                sx={{ 
                                    color: '#e94560',
                                    borderColor: '#e94560',
                                    '&:hover': { 
                                        backgroundColor: 'rgba(233, 69, 96, 0.1)',
                                        borderColor: '#ff6b6b'
                                    }
                                }}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button 
                                component={Link} 
                                to="/authproject/login"
                                startIcon={<LoginIcon />}
                                variant="outlined"
                                sx={{ 
                                    color: '#fff',
                                    borderColor: 'rgba(255,255,255,0.3)',
                                    '&:hover': { 
                                        borderColor: '#fff',
                                        backgroundColor: 'rgba(255,255,255,0.1)'
                                    }
                                }}
                            >
                                Login
                            </Button>
                            <Button 
                                component={Link} 
                                to="/authproject/register"
                                startIcon={<PersonAddIcon />}
                                variant="contained"
                                sx={{ 
                                    background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
                                    '&:hover': { 
                                        background: 'linear-gradient(135deg, #ff6b6b 0%, #e94560 100%)',
                                    }
                                }}
                            >
                                Register
                            </Button>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    )
}
