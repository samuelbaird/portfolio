    import React from 'react';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import './AppBar.scss';


    export default function CustomAppBar() {
        return (
            <motion.div className='appbar'>
                <Sidebar />
                <motion.div className='wrapper' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                    <span>Software Engineering Portfolio</span>
                </motion.div>
                {/* <AppBar color="primary" className='appbar'>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Software Engineering Portfolio
                        </Typography>
                    </Toolbar>
                </AppBar> */}
            </motion.div> 
        );
    }
