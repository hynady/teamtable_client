import axios from 'axios';
import { AUTH_CONFIG } from '../utils/authConfig';

export const authenticateWithGoogle = async (code) => {
    const response = await axios.post(AUTH_CONFIG.tokenEndpoint, new URLSearchParams({
        code,
        client_id: AUTH_CONFIG.clientId,
        redirect_uri: AUTH_CONFIG.redirectUri,
        grant_type: 'authorization_code',
        client_secret: AUTH_CONFIG.clientSecret,
    }), {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });

    console.log(response.data)
    return response.data;
};

export const loginWithBackend = async ( id_token, access_token, refresh_token ) => {
    const response = await axios.post(`${process.env.REACT_APP_API_URI}/v1/oauth/login`, {
        id_token, access_token, refresh_token
    }, {
        withCredentials: true,
    });

    return response.data;
};

export const getUserInfo = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URI}/v1/oauth/user/info`, {
        withCredentials: true,
    });

    return response.data;
};

export const logout = async () => {
    await axios.post(`${process.env.REACT_APP_API_URI}/v1/oauth/logout`, {}, {
        withCredentials: true,
    });
};
