import { Divider, Paper } from '@mui/material'
import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{height:"6%"}}>
        <SearchInput />
      </div>
      <div style={{ marginTop: '18px',marginBottom: '24px'}}>
          <Divider />
      </div>
      <div style={{ height: "79%", overflowY: 'scroll', paddingRight: '8px', scrollbarWidth: 'none', 'msOverflowStyle': 'none', }}>
        <Conversations />
      </div>
      <div style={{height:"8%"}}>
        <LogoutButton />
      </div>  
    </div>
  )
}

export default Sidebar