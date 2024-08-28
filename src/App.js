// App.js
import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CallbackPage from './pages/CallbackPage';
import { ThemeProvider, CssBaseline } from '@mui/material';
import useDarkMode from './hooks/useDarkMode';
import { darkTheme, lightTheme } from './styles/theme';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
    const [isDarkMode, toggleDarkMode] = useDarkMode();

    function checkAuthTokenExists() {
        const cookies = document.cookie.split('; ');
        return cookies.some(cookie => cookie.startsWith('AUTH-TOKEN='));
    }

    const authTokenExists = checkAuthTokenExists(); // Hãy thay thế hàm này bằng cách kiểm tra
    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route index element={authTokenExists ? <Navigate to="/home" /> : <LoginPage />} />
                    <Route path="/callback" element={authTokenExists ? <Navigate to="/home" /> : <CallbackPage />} />
                    <Route path="/home" element={<HomePage />} />
                </Routes>
            </Router>
            <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </ThemeProvider>
    );
}

export default App;
