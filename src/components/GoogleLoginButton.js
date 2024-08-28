import React from 'react';
import { Button } from '@mui/material';
import GoogleIcon from '../assets/google-icon.svg';
import { AUTH_CONFIG } from '../utils/authConfig';
import {useTheme} from "@mui/material/styles";

const GoogleLoginButton = () => {
    const theme = useTheme();

    const handleClick = () => {
        window.location.href = `${AUTH_CONFIG.authorizationEndpoint}?response_type=code&client_id=${AUTH_CONFIG.clientId}&redirect_uri=${AUTH_CONFIG.redirectUri}&scope=${AUTH_CONFIG.scopes.join(' ')}&access_type=offline`;
    };

    return (
        <Button
            onClick={handleClick}  // Thực thi hàm login khi nhấn nút
            variant="contained"
            color="primary"
            style={{
                marginTop: '20px',
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                textTransform: 'none',
                borderRadius: '4px',
                padding: '10px 20px',
                boxShadow: 'none',
                '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                },
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <img src={GoogleIcon}
                 alt="Google Icon"
                 style={{ width: '20px', height: '20px', marginRight: '10px' }} />
            Sign in with Google
        </Button>
    );
};

export default GoogleLoginButton;
