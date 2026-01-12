import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStyledAuth } from './StyledAuthContext'
import { 
    Box, 
    Typography, 
    TextField, 
    Button, 
    Container,
    Card,
    CardContent,
    InputAdornment,
    IconButton,
    Divider
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LockIcon from '@mui/icons-material/Lock'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import LoginIcon from '@mui/icons-material/Login'

export default function StyledLoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const { login } = useStyledAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
        navigate('/authproject/dashboard')
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
                        overflow: 'hidden'
                    }}
                >
                    {/* Header */}
                    <Box
                        sx={{
                            background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
                            py: 4,
                            textAlign: 'center'
                        }}
                    >
                        <Box
                            sx={{
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mx: 'auto',
                                mb: 2
                            }}
                        >
                            <LoginIcon sx={{ fontSize: 30, color: '#fff' }} />
                        </Box>
                        <Typography
                            variant="h4"
                            sx={{
                                color: '#fff',
                                fontWeight: 700
                            }}
                        >
                            Welcome Back
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgba(255,255,255,0.8)',
                                mt: 1
                            }}
                        >
                            Sign in to your account
                        </Typography>
                    </Box>

                    {/* Form */}
                    <CardContent sx={{ p: 4 }}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{
                                    mb: 3,
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        '& fieldset': {
                                            borderColor: 'rgba(255,255,255,0.2)'
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(255,255,255,0.3)'
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#e94560'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'rgba(255,255,255,0.5)'
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#e94560'
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: '#fff'
                                    }
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <TextField
                                fullWidth
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{
                                    mb: 4,
                                    '& .MuiOutlinedInput-root': {
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        '& fieldset': {
                                            borderColor: 'rgba(255,255,255,0.2)'
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'rgba(255,255,255,0.3)'
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#e94560'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'rgba(255,255,255,0.5)'
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#e94560'
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: '#fff'
                                    }
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                                sx={{ color: 'rgba(255,255,255,0.5)' }}
                                            >
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{
                                    background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
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
                                Sign In
                            </Button>
                        </form>

                        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }}>
                            <Typography sx={{ color: 'rgba(255,255,255,0.4)', px: 2 }}>
                                or
                            </Typography>
                        </Divider>

                        <Typography
                            sx={{
                                textAlign: 'center',
                                color: 'rgba(255,255,255,0.5)'
                            }}
                        >
                            Don't have an account?{' '}
                            <Link
                                to="/authproject/register"
                                style={{
                                    color: '#e94560',
                                    textDecoration: 'none',
                                    fontWeight: 600
                                }}
                            >
                                Sign Up
                            </Link>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}
