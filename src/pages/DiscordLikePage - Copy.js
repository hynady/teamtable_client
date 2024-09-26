import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Avatar, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomAvatar from '../components/CustomAvatar';

const DiscordLikePage = () => {
    const [selectedGroup, setSelectedGroup] = useState(0);
    const [groupStates, setGroupStates] = useState({
        0: { selectedChannel: 0, scrollPosition: 0 },
        1: { selectedChannel: 0, scrollPosition: 0 },
        2: { selectedChannel: 0, scrollPosition: 0 },
        3: { selectedChannel: 0, scrollPosition: 0 },
        4: { selectedChannel: 0, scrollPosition: 0 },
        5: { selectedChannel: 0, scrollPosition: 0 },
    });

    const workspaceRef = useRef(null);
    const theme = useTheme();

    const user = { firstName: 'John', lastName: 'Doe', avatar: 'https://via.placeholder.com/40' };

    const groups = [
        { id: 0, name: 'Group 1', channels: Array.from({ length: 20 }, (_, i) => `Channel ${i + 1}`), avatar: '' },
        { id: 1, name: 'Group 2', channels: ['Channel A', 'Channel B', 'Channel C'], avatar: 'https://via.placeholder.com/40' },
        { id: 2, name: 'Group 3', channels: ['Channel X', 'Channel Y', 'Channel Z'], avatar: '' },
        { id: 3, name: 'Group 4', channels: ['Channel 1', 'Channel 2', 'Channel 3'], avatar: 'https://via.placeholder.com/40' },
        { id: 4, name: 'Group 5', channels: ['Channel A', 'Channel B', 'Channel C'], avatar: '' },
        { id: 5, name: 'Group 6', channels: ['Channel X', 'Channel Y', 'Channel Z'], avatar: 'https://via.placeholder.com/40' },
    ];

    const handleGroupClick = (id) => {
        // Lưu trạng thái hiện tại của nhóm
        setGroupStates((prevState) => ({
            ...prevState,
            [selectedGroup]: {
                ...prevState[selectedGroup],
                scrollPosition: workspaceRef.current.scrollTop,
            },
        }));

        // Chuyển sang nhóm mới
        setSelectedGroup(id);
    };

    const handleChannelClick = (channelIndex) => {
        setGroupStates((prevState) => ({
            ...prevState,
            [selectedGroup]: {
                ...prevState[selectedGroup],
                selectedChannel: channelIndex,
            },
        }));
    };

    useEffect(() => {
        // Khôi phục vị trí cuộn khi chuyển đổi nhóm
        workspaceRef.current.scrollTop = groupStates[selectedGroup].scrollPosition;
    }, [selectedGroup]);

    const SelectedIndicator = () => (
        <Box
            sx={{
                position: 'absolute',
                left: '-10px', // Đặt gạch đánh dấu ra ngoài padding của sidebar
                width: '4px',
                height: '100%',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '10px 0 0 10px', // Bo tròn 4 góc
            }}
        />
    );

    return (
            <Box display="flex" height="100vh" padding="10px" gap="10px" bgcolor={theme.palette.background.default}>
            {/* Sidebar for Group Avatars */}
            <Box
                width="5%"
                bgcolor={theme.palette.background.paper}
                color={theme.palette.text.primary}
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding="10px"
                sx={{
                    borderRadius: '10px', // Bo tròn
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': { display: 'none' },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    transform: 'scale(1)', // Đảm bảo các thành phần bên trong giữ đúng tỷ lệ
                    transformOrigin: 'top left',
                }}
            >
                <CustomAvatar
                    firstName={user.firstName}
                    lastName={user.lastName}
                    src={user.avatar}
                    size="3em" // Sử dụng đơn vị em
                    sx={{ transform: 'scale(1)', transformOrigin: 'center' }} // Đảm bảo avatar giữ đúng tỷ lệ
                />
                <Divider sx={{ width: '100%', margin: '10px 0' }} />
                {groups.map((group) => (
                    <Box
                        key={group.id}
                        onClick={() => handleGroupClick(group.id)}
                        sx={{
                            marginBottom: '10px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'all 0.3s ease',
                            position: 'relative',
                            borderRadius: '10px', // Bo tròn 4 góc
                            transform: 'scale(1)', // Đảm bảo các thành phần bên trong giữ đúng tỷ lệ
                            transformOrigin: 'center',
                        }}
                    >
                        {selectedGroup === group.id && <SelectedIndicator />}
                        <Avatar
                            src={group.avatar}
                            alt={group.name}
                            sx={{
                                width: '2.5em',
                                height: '2.5em',
                                borderRadius: selectedGroup === group.id ? '10px' : '50%',
                                transition: 'border-radius 0.3s ease',
                                marginLeft: '10px', // Cách avatar một khoảng
                                transform: 'scale(1)', // Đảm bảo avatar giữ đúng tỷ lệ
                                transformOrigin: 'center',
                            }}
                        >
                            {!group.avatar && group.name.split(' ').map(word => word[0]).join('')}
                        </Avatar>
                    </Box>
                ))}
            </Box>

            {/* Sidebar for Channels */}
            <Box
                width="20%"
                bgcolor={theme.palette.background.paper}
                color={theme.palette.text.primary}
                display="flex"
                flexDirection="column"
                sx={{
                    borderRadius: '10px', // Bo tròn
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': { display: 'none' },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    transform: 'scale(1)', // Đảm bảo các thành phần bên trong giữ đúng tỷ lệ
                    transformOrigin: 'top left',
                }}
            >
                <Box
                    sx={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        backgroundColor: theme.palette.background.paper,
                        padding: '10px',
                        boxShadow: '0px 4px 6px rgb(0 0 0 / 5%)', // Đổ bóng nhạt
                        display: 'flex',
                        alignItems: 'center',
                        height: '64px',
                        flexShrink: 0,
                        transform: 'scale(1)', // Đảm bảo các thành phần bên trong giữ đúng tỷ lệ
                        transformOrigin: 'center',
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: groups[selectedGroup].avatar ? `url(${groups[selectedGroup].avatar})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: 0,
                            transform: 'scale(1)', // Đảm bảo các thành phần bên trong giữ đúng tỷ lệ
                            transformOrigin: 'center',
                        }}
                    />
                    <Typography variant="h6" sx={{ margin: 0, zIndex: 1, color: theme.palette.text.primary }}>
                        {groups[selectedGroup].name}
                    </Typography>
                </Box>
                <List sx={{ padding: '10px', flexGrow: 1 }}>
                    {groups[selectedGroup].channels.map((channel, index) => (
                        <ListItem
                            button
                            key={index}
                            selected={groupStates[selectedGroup].selectedChannel === index}
                            onClick={() => handleChannelClick(index)}
                            sx={{ transform: 'scale(1)', transformOrigin: 'center' }} // Đảm bảo các thành phần bên trong giữ đúng tỷ lệ
                        >
                            <ListItemText primary={channel} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Main Workspace */}
            <Box
                flexGrow={1}
                bgcolor={theme.palette.background.paper}
                color={theme.palette.text.primary}
                display="flex"
                flexDirection="column"
                ref={workspaceRef}
                sx={{
                    borderRadius: '10px', // Bo tròn
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '12px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: theme.palette.background.paper,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: theme.palette.grey[800],
                        borderRadius: '10px',
                        border: `3px solid ${theme.palette.background.paper}`,
                    },
                    transform: 'scale(1)', // Đảm bảo các thành phần bên trong giữ đúng tỷ lệ
                    transformOrigin: 'top left',
                }}
            >
                <Box sx={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: theme.palette.background.paper, padding: '10px', boxShadow: '0px 4px 6px rgb(0 0 0 / 5%)', display: 'flex', alignItems: 'center', height: '64px', flexShrink: 0 }}>
                    <Typography variant="h4" sx={{ margin: 0 }}>
                        {groups[selectedGroup].channels[groupStates[selectedGroup].selectedChannel]} Workspace
                    </Typography>
                </Box>
                <Box flexGrow={1} display="flex" flexDirection="column" padding="10px">
                    <Typography variant="h6">
                        Welcome to the {groups[selectedGroup].channels[groupStates[selectedGroup].selectedChannel]} workspace!
                    </Typography>
                    {/* Nội dung giả để test cuộn */}
                    <Box height="2000px" bgcolor={theme.palette.background.paper} marginTop="10px">
                        <Typography variant="body1">
                            Nội dung dài để test cuộn...
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DiscordLikePage;