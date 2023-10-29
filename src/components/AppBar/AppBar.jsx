    import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';


    export default function CustomAppBar() {
        return (
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <Sidebar />
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Software Engineering Portfolio
                        </Typography>
                    </Toolbar>
                </AppBar>
            </motion.div> 
        );
    }
