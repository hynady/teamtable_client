export const AUTH_CONFIG = {
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: 'http://localhost:3000/callback',
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
    scopes: [
        'openid',
        'profile',
        'email',
        'https://www.googleapis.com/auth/drive.file',
    ],
};
