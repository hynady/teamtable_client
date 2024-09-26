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
        // Thêm hiệu ứng nảy
        const groupElement = document.getElementById(`group-${id}`);
        groupElement.style.transform = 'translateY(3px)';
        groupElement.style.transition = 'transform 0.3s';
        setTimeout(() => {
            groupElement.style.transform = 'translateY(0)';
        }, 150);

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
        // Thêm hiệu ứng nảy
        const channelElement = document.getElementById(`channel-${channelIndex}`);
        channelElement.style.transform = 'translateY(3px)';
        channelElement.style.transition = 'transform 0.3s';
        setTimeout(() => {
            channelElement.style.transform = 'translateY(0)';
        }, 150);

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
                left: 0, // Đặt gạch đánh dấu sát cạnh trái của box chứa avatar
                width: '0.25rem',
                height: '100%',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '100rem 100rem 100rem 100rem', // Bo tròn 4 góc
            }}
        />
    );

    return (
        <Box display="flex" height="100vh" padding="0.625rem" gap="0.625rem" bgcolor={theme.palette.background.default}>
            {/* Sidebar for Group Avatars */}
            <Box
                width="5rem"
                bgcolor={theme.palette.background.paper}
                color={theme.palette.text.primary}
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding="0.625rem"
                sx={{
                    borderRadius: '0.625rem', // Bo tròn
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': { display: 'none' },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    position: 'relative', // Thêm position relative để chứa SelectedIndicator
                }}
            >
                {selectedGroup !== null && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: `calc(${selectedGroup} * 3.125rem + 5.555rem)`, // Điều chỉnh vị trí theo nhóm được chọn
                            left: '0rem', // Đặt gạch đánh dấu ra ngoài padding của sidebar
                            width: '0.3rem',
                            height: '2.5rem', // Chiều cao của avatar
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: '100rem 100rem 100rem 100rem', // Bo tròn 4 góc
                            transition: 'top 0.3s ease', // Thêm hiệu ứng chuyển động
                        }}
                    />
                )}

                <CustomAvatar
                    firstName={user.firstName}
                    lastName={user.lastName}
                    src={user.avatar}
                    size="3rem" // Sử dụng đơn vị rem
                />
                <Divider sx={{ width: '100%', margin: '0.625rem 0' }} />
                <List sx={{ padding: '0.625rem', flexGrow: 1 }}>
                    {groups.map((group) => (
                        <Box
                            key={group.id}
                            id={`group-${group.id}`}
                            onClick={() => handleGroupClick(group.id)}
                            sx={{
                                marginBottom: '0.625rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                borderRadius: '0.625rem', // Bo tròn 4 góc
                            }}
                        >
                            <Avatar
                                src={group.avatar}
                                alt={group.name}
                                sx={{
                                    width: '2.5rem',
                                    height: '2.5rem',
                                    borderRadius: selectedGroup === group.id ? '0.625rem' : '50%',
                                    transition: 'border-radius 0.3s ease',
                                }}
                            >
                                {!group.avatar && group.name.split(' ').map(word => word[0]).join('')}
                            </Avatar>
                        </Box>
                    ))}
                </List>
            </Box>


            {/* Sidebar for Channels */}
            <Box
                width="20rem"
                bgcolor={theme.palette.background.paper}
                color={theme.palette.text.primary}
                display="flex"
                flexDirection="column"
                sx={{
                    borderRadius: '0.625rem', // Bo tròn
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': { display: 'none' },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}
            >
                <Box
                    sx={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        backgroundColor: theme.palette.background.paper,
                        padding: '0.625rem',
                        boxShadow: '0px 4px 6px rgb(0 0 0 / 5%)', // Đổ bóng nhạt
                        display: 'flex',
                        alignItems: 'center',
                        height: '4rem',
                        flexShrink: 0,
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
                        }}
                    />
                    <Typography variant="h6" sx={{ margin: 0, zIndex: 1, color: theme.palette.text.primary }}>
                        {groups[selectedGroup].name}
                    </Typography>
                </Box>
                <List sx={{ padding: '0.625rem', flexGrow: 1 }}>
                    {groups[selectedGroup].channels.map((channel, index) => (
                        <ListItem
                            button
                            key={index}
                            id={`channel-${index}`}
                            selected={groupStates[selectedGroup].selectedChannel === index}
                            onClick={() => handleChannelClick(index)}
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
                    borderRadius: '0.625rem', // Bo tròn
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '0.75rem',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: theme.palette.background.paper,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: theme.palette.grey[800],
                        borderRadius: '0.625rem',
                        border: `0.1875rem solid ${theme.palette.background.paper}`,
                    },
                }}
            >
                <Box sx={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: theme.palette.background.paper, padding: '0.625rem', boxShadow: '0px 4px 6px rgb(0 0 0 / 5%)', display: 'flex', alignItems: 'center', height: '4rem', flexShrink: 0 }}>
                    <Typography variant="h4" sx={{ margin: 0 }}>
                        {groups[selectedGroup].channels[groupStates[selectedGroup].selectedChannel]} Workspace
                    </Typography>
                </Box>
                <Box flexGrow={1} display="flex" flexDirection="column" padding="0.625rem">
                    <Typography variant="h6">
                        Welcome to the {groups[selectedGroup].channels[groupStates[selectedGroup].selectedChannel]} workspace!
                    </Typography>
                    {/* Nội dung giả để test cuộn */}
                    <Box height="125rem" bgcolor={theme.palette.background.paper} marginTop="0.625rem">
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