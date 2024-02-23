import React from 'react';
import { Badge, Box, Typography } from '@mui/material';
import BadgeAvatar from '../sidebar/BadgeAvatar';

const NameBar = ({ name, status }) => {
  return (
    <div style={{ display: "flex", marginLeft:"10px"}}>
      <div>
        <BadgeAvatar src={"/avatar.png"} isOnline={true} />
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