    import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


    export default function CustomAppBar() {
        return (
            <AppBar position="relative" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Software Engineering Portfolio
                    </Typography>
                </Toolbar>            </AppBar>

        );
    }
