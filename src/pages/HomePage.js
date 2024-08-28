// pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../services/authService';
import LogoutButton from '../components/LogoutButton';
import { Box, Typography, Button } from '@mui/material';

const HomePage = () => {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const data = await getUserInfo();
                setUserInfo(data);
            } catch (error) {
                console.error('Lấy thông tin người dùng thất bại:', error);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            padding="20px"
        >
            {userInfo ? (
                <>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Welcome, {userInfo.firstName} {userInfo.lastName}!
                    </Typography>
                    <Typography variant="h6" component="p">
                        Email: {userInfo.email}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                        onClick={() => window.location.href = '/'}
                    >
                        Go to Home
                    </Button>
                </>
            ) : (
                <Typography variant="h6" component="p">
                    Loading user information...
                </Typography>
            )}
            <LogoutButton />
        </Box>
    );
};

export default HomePage;
