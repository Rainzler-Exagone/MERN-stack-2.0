import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function Floating() {

return (
    <Box>
    <Fab color="primary" aria-label="add">
        <AddIcon />
    </Fab>
    <Fab color="secondary" aria-label="edit">
        <EditIcon />
    </Fab>
    <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
    </Fab>
    <Fab disabled aria-label="like">
        <FavoriteIcon />
    </Fab>
</Box>
)
}