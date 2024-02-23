import { IconButton } from '@mui/material'
import React from 'react'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const LogoutButton = () => {
  return (
      <div >
        <IconButton style={{ transform: 'rotate(180deg)' }} size="large" aria-label="logOut">
            <LogoutRoundedIcon  fontSize="inherit"/>
        </IconButton>
    </div>
  )
}

export default LogoutButton