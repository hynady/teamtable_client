// components/LogoutButton.js
import React from 'react';
import {Button} from "@mui/material";

const LogoutButton = () => {
    const handleLogout = () => {
        // Xóa cookie AUTH-TOKEN
        document.cookie = 'AUTH-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        window.location.href = '/';
    };

    return (
        <Button onClick={handleLogout}
                variant="contained"
                color="secondary"
                style={{ marginTop: '20px' }}
            >
            Đăng xuất
        </Button>
    );
};

export default LogoutButton;
