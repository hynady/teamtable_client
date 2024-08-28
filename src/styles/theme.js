import { createTheme } from '@mui/material/styles';

// Các biến màu sắc cho cả hai chế độ
const lightPalette = {
    primary: {
        main: '#1976d2', // Xanh dương
        contrastText: '#fff', // Văn bản màu trắng trên nền chính
    },
    secondary: {
        main: '#dc004e', // Đỏ
    },
    background: {
        default: '#fafafa', // Màu nền sáng
        paper: '#fff', // Màu nền giấy sáng
    },
    text: {
        primary: '#000', // Văn bản chính màu đen
        secondary: '#333', // Văn bản phụ màu xám tối
    },
};

const darkPalette = {
    primary: {
        main: '#90caf9', // Xanh dương nhạt
        contrastText: '#000', // Văn bản màu đen trên nền chính
    },
    secondary: {
        main: '#f48fb1', // Hồng nhạt
    },
    background: {
        default: '#303030', // Màu nền tối
        paper: '#424242', // Màu nền giấy tối
    },
    text: {
        primary: '#fff', // Văn bản chính màu trắng
        secondary: '#ccc', // Văn bản phụ màu xám sáng
    },
};

// Tạo theme cho chế độ sáng
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        ...lightPalette,
    },
    typography: {
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
        h1: {
            fontSize: '3rem', // Kích cỡ chữ tiêu đề lớn hơn
            fontWeight: 700, // Đậm
        },
        body1: {
            fontSize: '1rem',
        },
    },
});

// Tạo theme cho chế độ tối
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        ...darkPalette,
    },
    typography: {
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Arial', 'sans-serif'].join(','),
        h1: {
            fontSize: '3rem', // Kích cỡ chữ tiêu đề lớn hơn
            fontWeight: 700, // Đậm
        },
        body1: {
            fontSize: '1rem',
        },
    },
});

export { lightTheme, darkTheme };
