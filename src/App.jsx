import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, AppBar, Toolbar, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SchoolIcon from '@mui/icons-material/School';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import DashboardIcon from '@mui/icons-material/Dashboard';

// Import Projects
import ShoppingApp from './exercises/super-mini projects exercises/mini-project3 styled shopping list app/ShoppingApp'
import StyledTodoAppMiniProjectEx from './exercises/super-mini projects exercises/mini-project2/StyledTodoAppMiniProjectEx'
import Exrcises from './Exrcises'
import ShopRouterEx from './exercises/router/ex5/ShopRouterEx'
import SecondShopRouter from './exercises/router/ex6/SecondShopRouter'
import UsersProjectRoutes from './exercises/super-mini projects exercises/miniproject 4 styled/UsersProjectRoutes'
import ProtectedRouteEx from './exercises/router/protected routes/ex1/ProtectedRouteEx'
import StyledAuthApp from './exercises/super-mini projects exercises/mini-project5-styled/StyledAuthApp'
import AppUsersEx6 from './exercises/advanced general/ex6/AppUsersEx6'

const drawerWidth = 240;

export default function App() {
    return (
        <BrowserRouter>
            <Box sx={{ display: 'flex' }}>
                {/* Top Bar */}
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            🚀 My React MUI Projects
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/* Sidebar */}
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}>
                    <Toolbar />
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/">
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/hometest">
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary="Home Test" />
                            </ListItemButton>
                        </ListItem>
                        
                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/shopping">
                                <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                                <ListItemText primary="Shopping List" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/todoapp">
                                <ListItemIcon>< FormatListBulletedIcon/></ListItemIcon>
                                <ListItemText primary="ToDo App" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/users/Home">
                                <ListItemIcon>< ContactEmergencyIcon/></ListItemIcon>
                                <ListItemText primary="Users API" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/appusers/home">
                                <ListItemIcon>< ContactEmergencyIcon/></ListItemIcon>
                                <ListItemText primary="Advanced App Users API" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/authproject/home">
                                <ListItemIcon>< DashboardIcon/></ListItemIcon>
                                <ListItemText primary="Auth Project" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/exercises">
                                <ListItemIcon>< SchoolIcon/></ListItemIcon>
                                <ListItemText primary="Exercises" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/prot/home">
                                <ListItemIcon>< SchoolIcon/></ListItemIcon>
                                <ListItemText primary="Protected" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/shop/home">
                                <ListItemIcon>< SchoolIcon/></ListItemIcon>
                                <ListItemText primary="Shop Mini-Site" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton component={Link} to="/shopsec/home">
                                <ListItemIcon>< SchoolIcon/></ListItemIcon>
                                <ListItemText primary="Shop Second" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>

                {/* Main Content */}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/homeTest" element={<HomeTest />} />
                        <Route path="/shopping" element={<ShoppingApp />} />
                        <Route path="/todoapp" element={<StyledTodoAppMiniProjectEx />} />
                        <Route path="/users/*" element={<UsersProjectRoutes />} />
                        <Route path="/appusers/*" element={<AppUsersEx6 />} />
                        <Route path="/exercises" element={<Exrcises />} />
                        <Route path="/prot/*" element={<ProtectedRouteEx />} />
                        <Route path="/shop/*" element={<ShopRouterEx />} />
                        <Route path="/authproject/*" element={<StyledAuthApp  />} />
                        <Route path="/shopsec/*" element={<SecondShopRouter />} />
                                          {/* ↑ */}
            {/* This means: "Match /shop AND everything after it" */}
                    </Routes>
                </Box> 

            </Box>
        </BrowserRouter>
    )
}

function Home() {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Welcome! 🎉
            </Typography>
            <Typography variant="body1" paragraph>
                Select a project from the sidebar to explore.
            </Typography>
        </Box>
    )
}

function HomeTest() {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Welcome To Our Home Test Page! 🎉
            </Typography>
            <Typography variant="body1" paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum nihil aperiam voluptates consequatur aliquid error? Porro obcaecati magnam iste, reprehenderit voluptates temporibus? Recusandae hic placeat eius nam earum consequatur, velit aliquam, perspiciatis dolores voluptatibus cum minus praesentium tempora minima, ea nisi. Deserunt non molestias temporibus architecto nisi sed ex maxime!
            </Typography>
        </Box>
    )
}