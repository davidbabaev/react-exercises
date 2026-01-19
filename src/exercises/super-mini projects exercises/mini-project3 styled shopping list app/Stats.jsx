import React, { useContext } from 'react'
import { ShoppingContext } from './ShoppingContext'
import { Paper, Box, Typography } from '@mui/material'

export default function Stats() {
    const { items } = useContext(ShoppingContext);

    const boughtFilter = items.filter((objectItem) => objectItem.bought === true)
    const unBoughtFilter = items.filter((objectItem) => objectItem.bought === false)

    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Paper elevation={2} sx={{ flex: 1, minWidth: 150, p: 2, textAlign: 'center' }}>
                <Typography variant="h4" color="primary">{items.length}</Typography>
                <Typography variant="body2" color="text.secondary">Total Items</Typography>
            </Paper>
            
            <Paper elevation={2} sx={{ flex: 1, minWidth: 150, p: 2, textAlign: 'center' }}>
                <Typography variant="h4" color="success.main">{boughtFilter.length}</Typography>
                <Typography variant="body2" color="text.secondary">Bought</Typography>
            </Paper>
            
            <Paper elevation={2} sx={{ flex: 1, minWidth: 150, p: 2, textAlign: 'center' }}>
                <Typography variant="h4" color="warning.main">{unBoughtFilter.length}</Typography>
                <Typography variant="body2" color="text.secondary">To Buy</Typography>
            </Paper>
        </Box>
    )
}