import { createTheme } from '@mui/material/styles';

// Các biến màu sắc cho cả hai chế độ
const lightPalette = {
    primary: {
        main: '#8A2BE2', // Blueberry
        contrastText: '#fff', // Văn bản màu trắng trên nền chính
    },
    secondary: {
        main: '#B19CD9', // Light Blueberry
    },
    background: {
        default: '#E9EBEE', // Màu nền sáng của Facebook
        paper: '#fff', // White
    },
    text: {
        primary: '#000', // Văn bản chính màu đen
        secondary: '#757575', // Văn bản phụ màu xám
    },
};

const darkPalette = {
    primary: {
        main: '#bd84e1', // Lavender
        contrastText: '#000', // Văn bản màu đen trên nền chính
    },
    secondary: {
        main: '#cdb3da', // Light Lavender
    },
    background: {
        default: '#18191A', // Màu nền tối của Facebook
        paper: '#242526', // Màu nền giấy tối của Facebook
    },
    text: {
        primary: '#fff', // Văn bản chính màu trắng
        secondary: '#b0b0b0', // Văn bản phụ màu xám sáng
    },
};

// Tạo theme cho chế độ sáng
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        ...lightPalette,
    },
    typography: {
        fontFamily: ['Poppins', 'Arial', 'sans-serif'].join(','), // Font chữ Poppins
        h1: {
            fontSize: '3rem', // Kích cỡ chữ tiêu đề lớn hơn
            fontWeight: 700, // Đậm
        },
        h4: {
            fontSize: '1.5rem', // Kích cỡ chữ tiêu đề nhỏ hơn
            fontWeight: 600, // Đậm vừa
        },
        h6: {
            fontSize: '1.25rem', // Kích cỡ chữ tiêu đề nhỏ hơn
            fontWeight: 500, // Đậm vừa
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
        fontFamily: ['Poppins', 'Arial', 'sans-serif'].join(','), // Font chữ Poppins
        h1: {
            fontSize: '3rem', // Kích cỡ chữ tiêu đề lớn hơn
            fontWeight: 700, // Đậm
        },
        h4: {
            fontSize: '1.5rem', // Kích cỡ chữ tiêu đề nhỏ hơn
            fontWeight: 600, // Đậm vừa
        },
        h6: {
            fontSize: '1.25rem', // Kích cỡ chữ tiêu đề nhỏ hơn
            fontWeight: 500, // Đậm vừa
        },
        body1: {
            fontSize: '1rem',
        },
    },
});

export { lightTheme, darkTheme };
