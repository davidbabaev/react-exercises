import React from 'react'
import { Box, Card } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import CardMedia from '@mui/material/CardMedia';

export default function UserCard({user, onCardClick}) {

    const {
        name,
        age,
        email,
        image,
        isOnline,
        isAdmin,
        theme = 'light'
    } = user // -> destructuring

    const themeStyles = {
        light: {
            backgroundColor: "#fff",
            color: "#000",
        },
        dark: {
            backgroundColor: "#1e1e1e67",
            color: "#fff",
        },
        soft: {
            backgroundColor: "#e3f2fd",
        },
    };
            
  return (

    <Card 
        onClick = {() => onCardClick(name)}
        sx={{
            width: 250 , 
            borderRadius: 3,
            border: '3px, solid',
            borderColor: isOnline ? "Green" : "Gray",
            cursor: 'pointer',
            ...(themeStyles[theme] || themeStyles.light)
        }}
    >
        <CardContent sx={{mbs: 2}}>
            <CardMedia 
                sx={{ height: 140, borderRadius: 3, p: 5, mb: 2}}
                image={image}
            />
            <Typography variant = "subtitle1" >Name: {name}</Typography>
            <Typography variant = "subtitle1" >Age: {age}</Typography>
            <Typography variant = "subtitle1" >Email: {email}</Typography>

            <Box sx={{
                mt: 1,
                fontWeight: "bold",
                color: isOnline ? "green" : "gray"
            }}>
                <Typography>
                    {isAdmin ? '⭐Admin:' : 'Not Admin:'} {isOnline? "online" : "offline"}  
                </Typography>
            </Box>
        </CardContent>
    </Card>
  )
}
