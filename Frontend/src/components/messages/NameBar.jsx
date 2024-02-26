import React from 'react';
import { Typography } from '@mui/material';
import BadgeAvatar from '../sidebar/BadgeAvatar';

const NameBar = ({ name, status, profilePic }) => {
  return (
    <div style={{ display: "flex", marginLeft:"10px"}}>
      <div>
        <BadgeAvatar src={profilePic} isOnline={true} />
      </div>
      <div style={{marginLeft:"5px"}}>
        <Typography variant="h4">
          {name}
        </Typography>
      </div>
    </div>
  );
};

export default NameBar;