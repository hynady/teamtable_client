import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authenticateWithGoogle, loginWithBackend } from '../services/authService';

function CallbackPage() {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const fetchToken = async () => {
            const params = new URLSearchParams(location.search);
            const code = params.get('code');
            if (code) {
                try {
                    // Lấy Google Tokens bằng mã code
                    const { id_token, access_token, refresh_token } = await authenticateWithGoogle(code);
                    // Gửi idToken đến backend để nhận AUTH-TOKEN
                    await loginWithBackend(id_token, access_token, refresh_token);

                    // Chuyển hướng đến trang Home sau khi đăng nhập thành công
                    navigate('/home');
                } catch (error) {
                    console.error('Đăng nhập thất bại:', error);
                    navigate('/');
                }
            }
        };

        fetchToken();
    }, [location, navigate]);

    return <div>Đang xử lý đăng nhập...</div>;
}

export default CallbackPage;
