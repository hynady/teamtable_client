// LoginTitle.js
import React from 'react';
import { Typography, useTheme } from '@mui/material';

const LoginTitle = () => {
    const theme = useTheme();

    return (
        <Typography
            variant="h1"
            component="h1"
            gutterBottom
            style={{ color: theme.palette.text.primary }}
        >
            Login
        </Typography>
    );
};

export default LoginTitle;
