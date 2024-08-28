import React from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {useTheme} from "@mui/material/styles";

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
    const theme = useTheme();

    return (
        <IconButton
            onClick={toggleDarkMode}
            style={{
                position: 'fixed', // Sử dụng 'fixed' để giữ vị trí cố định khi cuộn trang
                bottom: 20, // Đặt cách đáy màn hình 20px
                right: 30,  // Đặt cách cạnh phải màn hình 30px
                zIndex: 1000,
                backgroundColor: theme.palette.background.paper,
            }}
        >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
};

export default DarkModeToggle;
