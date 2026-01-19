import React from 'react'
import { useStyledAuth } from './StyledAuthContext'
import { 
    Box, 
    Typography, 
    Container,
    Card,
    CardContent,
    Grid,
    Avatar,
    Chip,
    LinearProgress
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import AssignmentIcon from '@mui/icons-material/Assignment'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'

export default function StyledDashboardPage() {
    const { user } = useStyledAuth()

    const stats = [
        { label: 'Projects', value: '12', change: '+2 this week', icon: <AssignmentIcon /> },
        { label: 'Tasks', value: '48', change: '8 pending', icon: <TrendingUpIcon /> },
        { label: 'Notifications', value: '5', change: '3 unread', icon: <NotificationsActiveIcon /> }
    ]

    return (
        <Box
            sx={{
                minHeight: '90vh',
                background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)',
                pt: 6,
                pb: 6
            }}
        >
            <Container maxWidth="lg">
                {/* Welcome Header */}
                <Box sx={{ mb: 5 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            color: '#fff',
                            mb: 1
                        }}
                    >
                        Welcome back, {user?.name || 'User'}! 👋
                    </Typography>
                    <Typography
                        sx={{
                            color: 'rgba(255,255,255,0.5)'
                        }}
                    >
                        Here's what's happening with your account today.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {/* Profile Card */}
                    <Grid item xs={12} md={4}>
                        <Card
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 3,
                                height: '100%'
                            }}
                        >
                            <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                <Avatar
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        mx: 'auto',
                                        mb: 3,
                                        background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
                                        fontSize: '2.5rem',
                                        fontWeight: 700
                                    }}
                                >
                                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                                </Avatar>
                                
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 600,
                                        mb: 1
                                    }}
                                >
                                    {user?.name || 'User'}
                                </Typography>

                                <Chip
                                    icon={<VerifiedUserIcon sx={{ color: '#4ade80 !important' }} />}
                                    label="Verified Account"
                                    sx={{
                                        backgroundColor: 'rgba(74, 222, 128, 0.1)',
                                        color: '#4ade80',
                                        mb: 3
                                    }}
                                />

                                <Box sx={{ textAlign: 'left', mt: 3 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                        <PersonIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                                        <Box>
                                            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
                                                Name
                                            </Typography>
                                            <Typography sx={{ color: '#fff' }}>
                                                {user?.name || 'N/A'}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <EmailIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                                        <Box>
                                            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
                                                Email
                                            </Typography>
                                            <Typography sx={{ color: '#fff' }}>
                                                {user?.email || 'N/A'}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Stats Section */}
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={3}>
                            {stats.map((stat, index) => (
                                <Grid item xs={12} sm={4} key={index}>
                                    <Card
                                        sx={{
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: 3,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255,255,255,0.05)',
                                                borderColor: 'rgba(233, 69, 96, 0.3)'
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 3 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                                <Box
                                                    sx={{
                                                        width: 45,
                                                        height: 45,
                                                        borderRadius: 2,
                                                        background: 'linear-gradient(135deg, rgba(233, 69, 96, 0.2) 0%, rgba(255, 107, 107, 0.2) 100%)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: '#e94560'
                                                    }}
                                                >
                                                    {stat.icon}
                                                </Box>
                                            </Box>
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    color: '#fff',
                                                    fontWeight: 700,
                                                    mb: 0.5
                                                }}
                                            >
                                                {stat.value}
                                            </Typography>
                                            <Typography sx={{ color: 'rgba(255,255,255,0.5)', mb: 0.5 }}>
                                                {stat.label}
                                            </Typography>
                                            <Typography sx={{ color: '#4ade80', fontSize: '0.8rem' }}>
                                                {stat.change}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}

                            {/* Activity Card */}
                            <Grid item xs={12}>
                                <Card
                                    sx={{
                                        backgroundColor: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: 3
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: '#fff',
                                                fontWeight: 600,
                                                mb: 3
                                            }}
                                        >
                                            Weekly Progress
                                        </Typography>

                                        <Box sx={{ mb: 3 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                                    Tasks Completed
                                                </Typography>
                                                <Typography sx={{ color: '#fff' }}>75%</Typography>
                                            </Box>
                                            <LinearProgress 
                                                variant="determinate" 
                                                value={75} 
                                                sx={{
                                                    height: 8,
                                                    borderRadius: 4,
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                    '& .MuiLinearProgress-bar': {
                                                        background: 'linear-gradient(135deg, #e94560 0%, #ff6b6b 100%)',
                                                        borderRadius: 4
                                                    }
                                                }}
                                            />
                                        </Box>

                                        <Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                                                    Goals Achieved
                                                </Typography>
                                                <Typography sx={{ color: '#fff' }}>60%</Typography>
                                            </Box>
                                            <LinearProgress 
                                                variant="determinate" 
                                                value={60} 
                                                sx={{
                                                    height: 8,
                                                    borderRadius: 4,
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                    '& .MuiLinearProgress-bar': {
                                                        background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                                                        borderRadius: 4
                                                    }
                                                }}
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
