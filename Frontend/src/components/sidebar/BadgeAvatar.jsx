import React from 'react'
import { styled } from '@mui/material/styles';
import {Badge, Avatar} from '@mui/material';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      content: '""',
    },
  },
}));

const BadgeAvatar = ({src,isOnline}) => {
  return (
    <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant={isOnline ? "dot" : "standard"}
    >
          <Avatar alt="Remy Sharp" src={src} />
    </StyledBadge>
  )
}

export default BadgeAvatar