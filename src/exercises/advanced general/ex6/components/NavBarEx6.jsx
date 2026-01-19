import React, { useState } from 'react'
import { useThemeContextEx6 } from '../providers/ThemeProviderEx6';
import { useAuthEx6 } from '../providers/AuthProviderEx6';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBarEx6() {

    const {darkMode, handleToggle} = useThemeContextEx6();
    const{handleLogout, isLoggedIn, user} = useAuthEx6();
    const navigate = useNavigate();

    const onLogOut = () => {
        handleLogout();
        navigate('/appusers/login');
    }

    const mystyle = {marginRight: '8px'}
  return (
    <div>
        {isLoggedIn && (<p>Logged In As: {user.name}</p>)}
        
        <button onClick={handleToggle}>
            {darkMode ? 'Dark Mode' : 'Light Mode'}
        </button>
        <button onClick={onLogOut}>
            logout
        </button>
        <nav>
            <Link style={mystyle} to={'/appusers/home'}>Home</Link>
            <Link style={mystyle} to={'/appusers/login'}>login</Link>
            <Link style={mystyle} to={'/appusers/dashboard'}>user dashboard</Link>
            <Link style={mystyle} to={'/appusers/register'}>register</Link>
            <Link style={mystyle} to={'/appusers/allusers'}>all users</Link>
            <Link style={mystyle} to={'/appusers/createnewcard'}>create card</Link>
            <Link style={mystyle} to={'/appusers/allcards'}>all cards</Link>
            <button onClick={() => navigate('/appusers/selectedusers')}>Selected</button>
        </nav>
    </div>
  )
}
