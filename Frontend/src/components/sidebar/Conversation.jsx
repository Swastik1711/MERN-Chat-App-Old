import React from 'react'
import BadgeAvatar from './BadgeAvatar'
import { Divider, Typography } from '@mui/material'
import { useChatInfoContext } from '../../context/ChatInfoContext'

const Conversation = ({ conversation, lastIndex, isOnline }) => {
  const { selectedConversation, setSelectedConversation } = useChatInfoContext();

  // Check if selectedConversation exists and has an _id property
  const isSelected = selectedConversation && (selectedConversation._id === conversation._id)

  return (
      <div className='conversation-box'>
          <div
            style={{
            display: "flex",
            alignItems: "center",
            padding: "8px",
            cursor: "pointer",
          backgroundColor: isSelected ? "rgba(150, 150, 170, 0.34)" : "transparent",
            transition: "background-color 0.2s ease",
        }}
        onClick={() => { setSelectedConversation(conversation); }}
          >
              <BadgeAvatar src={conversation.profilePic} isOnline={isOnline} />
            <div style={{marginLeft:"7px"}}>
                <Typography variant="h6" align="center">
                    {conversation.fullName}
                </Typography> 
            </div>
          </div>
          <div>
            {!lastIndex && <Divider size="medium" />}
          </div>
      </div>
  )
}

export default Conversation