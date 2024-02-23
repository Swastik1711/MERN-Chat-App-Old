import React from 'react'
import BadgeAvatar from './BadgeAvatar'
import { Divider, Typography } from '@mui/material'

const Conversation = ({avatarImage,name, isOnline}) => {
  return (
      <div className='conversation'>
          <div
            style={{
            display: "flex",
            alignItems: "center",
            padding: "8px",
            cursor: "pointer",
            }}
          >
              <BadgeAvatar src={avatarImage} isOnline={isOnline} />
            <div style={{marginLeft:"7px"}}>
                <Typography variant="h6" align="center">
                    {name}
                </Typography>
            </div>
          </div>
          <div>
              <Divider size="medium"/>
          </div>
      </div>
  )
}

export default Conversation