import { IconButton } from '@mui/material'
import React from 'react'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
      <div >
        <IconButton style={{ transform: 'rotate(180deg)' }} size="large" aria-label="logOut" onClick={logout}>
            <LogoutRoundedIcon  fontSize="inherit"/>
        </IconButton>
    </div>
  )
}

export default LogoutButton