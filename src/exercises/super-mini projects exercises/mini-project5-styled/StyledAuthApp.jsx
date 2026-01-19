import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import StyledNavBar from './StyledNavBar'
import StyledHomePage from './StyledHomePage'
import StyledDashboardPage from './StyledDashboardPage'
import StyledAuthProvider, { useStyledAuth } from './StyledAuthContext'
import StyledLoginPage from './StyledLoginPage'
import StyledRegisterPage from './StyledRegisterPage'
import StyledProtectedRoute from './StyledProtectedRoute'

function AppRoutes() {
    const { user } = useStyledAuth()

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#0f0f1a' }}>
            <StyledNavBar />
            <Routes>
                <Route path='/home' element={<StyledHomePage />} />
                <Route path='/dashboard' element={
                    <StyledProtectedRoute user={user}>
                        <StyledDashboardPage />
                    </StyledProtectedRoute>
                } />
                <Route path='/login' element={<StyledLoginPage />} />
                <Route path='/register' element={<StyledRegisterPage />} />
            </Routes>
        </Box>
    )
}

export default function StyledAuthApp() {
    return (
        <StyledAuthProvider>
            <AppRoutes />
        </StyledAuthProvider>
    )
}
