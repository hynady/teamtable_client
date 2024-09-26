import React from 'react';
import Avatar from '@mui/material/Avatar';

const CustomAvatar = ({ firstName, lastName, src, size = 150 }) => {
    const getInitials = (firstName, lastName) => {
        const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : '';
        const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : '';
        return `${firstInitial}${lastInitial}`;
    };

    return (
        <Avatar
            src={src}
            alt={`${firstName} ${lastName}`}
            sx={{ width: size, height: size, fontSize: size * 0.4 }}
        >
            {!src && getInitials(firstName, lastName)}
        </Avatar>
    );
};

export default CustomAvatar;
