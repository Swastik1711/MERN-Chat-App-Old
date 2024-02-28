import React from 'react';
import { Typography } from '@mui/material';
import BadgeAvatar from '../sidebar/BadgeAvatar';
import { useSocketContext } from '../../context/SocketContext';

const NameBar = ({ choosedConversation }) => {
    const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(choosedConversation._id);

  return (
    <div style={{ display: "flex", marginLeft:"10px"}}>
      <div>
        <BadgeAvatar src={choosedConversation.profilePic} onlineStatus={isOnline} />
      </div>
      <div style={{marginLeft:"5px"}}>
        <Typography variant="h4">
          {choosedConversation.fullName}
        </Typography>
      </div>
    </div>
  );
};

export default NameBar;