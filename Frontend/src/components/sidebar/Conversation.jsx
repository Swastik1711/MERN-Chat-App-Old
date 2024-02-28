import React from 'react'
import BadgeAvatar from './BadgeAvatar'
import { Divider, Typography } from '@mui/material'
import { useChatInfoContext } from '../../context/ChatInfoContext'
import { useSocketContext } from '../../context/SocketContext'

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useChatInfoContext();

  // Check if selectedConversation exists and has an _id property
  const isSelected = selectedConversation && (selectedConversation._id === conversation._id)
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)

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
              <BadgeAvatar src={conversation.profilePic} onlineStatus={isOnline} />
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