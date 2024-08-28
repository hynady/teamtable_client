// components/LogoutButton.js
import React from 'react';

const LogoutButton = () => {
    const handleLogout = () => {
        // Xóa cookie AUTH-TOKEN
        document.cookie = 'AUTH-TOKEN=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        window.location.href = '/';
    };

    return (
        <button onClick={handleLogout}>
            Đăng xuất
        </button>
    );
};

export default LogoutButton;
