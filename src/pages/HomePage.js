import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../services/authService';
import LogoutButton from '../components/LogoutButton';
import { Box, Typography, Button } from '@mui/material';
import CustomAvatar from "../components/CustomAvatar";
import axios from "axios";

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

    // Hàm gửi yêu cầu tạo nhóm mới
    const createGroup = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8080/v1/group/new',
                { groupName: 'New Group' },
                { withCredentials: true }
            );
            console.log('Nhóm mới đã được tạo:', response.data);
        } catch (error) {
            console.error('Lỗi khi tạo nhóm:', error);
        }
    };

    // Hàm thêm người dùng vào nhóm
    const addUserToGroup = async () => {
        try {
            const response = await axios.put(
                'http://localhost:8080/v1/group/addUser',
                { groupId: 1, userId: 54 },
                { withCredentials: true }
            );
            console.log('Thêm người dùng vào nhóm:', response.data);
        } catch (error) {
            console.error('Lỗi khi thêm người dùng vào nhóm:', error);
        }
    };

    // Hàm xóa người dùng khỏi nhóm
    const removeUserFromGroup = async () => {
        try {
            const response = await axios.delete(
                'http://localhost:8080/v1/group/removeUser',
                { data: { groupId: 1, userId: 1 }, withCredentials: true }
            );
            console.log('Xóa người dùng khỏi nhóm:', response.data);
        } catch (error) {
            console.error('Lỗi khi xóa người dùng khỏi nhóm:', error);
        }
    };

    // Hàm lấy thông tin tài khoản trong nhóm
    const getAccountsInGroup = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8080/v1/group/accounts',
                { groupId: 2 },
                { withCredentials: true }
            );
            console.log('Thông tin tài khoản trong nhóm:', response.data);
        } catch (error) {
            console.error('Lỗi khi lấy thông tin tài khoản trong nhóm:', error);
        }
    };

    // Hàm lấy thông tin các group
    const getCard = async () => {
        try {
            const response = await axios.get('http://localhost:8080/v1/user/card', { withCredentials: true });
            console.log('Thông tin các group:', response.data);
        } catch (error) {
            console.error('Lỗi khi lấy thông tin các group:', error);
        }
    };

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
                    <CustomAvatar
                        firstName={userInfo.firstName}
                        lastName={userInfo.lastName}
                        src={userInfo.picture}
                        alt="User Avatar"
                        size={150}
                    />
                    <Typography variant="h1" component="h1" gutterBottom>
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
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                        onClick={createGroup}
                    >
                        Create New Group
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                        onClick={addUserToGroup}
                    >
                        Add User to Group
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                        onClick={removeUserFromGroup}
                    >
                        Remove User from Group
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                        onClick={getAccountsInGroup}
                    >
                        Get Accounts in Group
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '20px' }}
                        onClick={getCard}
                    >
                        Get Card Info
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