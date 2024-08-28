import React from 'react';
import { Box } from '@mui/material';
import LoginTitle from '../components/LoginTitle';
import GoogleLoginButton from '../components/GoogleLoginButton';
import { useTheme } from '@mui/material/styles';

const LoginPage = () => {
    const theme = useTheme();

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            padding="20px"
            style={{ backgroundColor: theme.palette.background.default }}
        >
            <LoginTitle />
            <GoogleLoginButton />
            <div>
                    <div>
                        <h3>No tokens available</h3>
                        <Box
                            component="pre"
                            style={{
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                maxWidth: '100%',
                                maxHeight: '300px',
                                overflowY: 'auto',
                                padding: '10px',
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: '4px',
                            }}
                        >
                            No tokens available
                        </Box>
                    </div>
            </div>
        </Box>
    );
};

export default LoginPage;
