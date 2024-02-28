import React from 'react'
import NameBar from './NameBar'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { Typography } from '@mui/material'
import { useChatInfoContext } from '../../context/ChatInfoContext'

const MessageContainer = () => {

  const { user, selectedConversation } = useChatInfoContext();


  return (

    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {
        !selectedConversation ? (
          <NoChatSelected UserFullName={user.fullName}/>
        ) : (
            <>
              <div style={{height:"10%" ,backgroundColor:"rgba(113, 113, 115, 0.533)", borderTopRightRadius:"12px", display: "flex",alignItems:"center"}}>
                  <NameBar choosedConversation={selectedConversation}/>
              </div>
              <div style={{height:"80%",overflow: 'auto', paddingRight: '8px', paddingLeft: '8px', scrollbarWidth: 'none', 'msOverflowStyle': 'none' }}>
                <Messages />
              </div>
              <div style={{height:"10%", width:"100%" ,backgroundColor: "rgba(113, 113, 115, 0.533)",borderBottomRightRadius:"12px",display:"flex",alignItems:"center" }}>
                  <MessageInput/>
                </div>
            </>
        )
        }
        </div>

  )
}

export default MessageContainer

const NoChatSelected = ({UserFullName}) => {
  return (
    <div style={{height:"100%", display:"flex", justifyContent:"center", alignItems:"center",flexDirection:"column"}}>
      <Typography  variant="h4" color={"whiteSmoke"}>
        Welcome {UserFullName}
      </Typography>
      <Typography  variant="h5" color={"whiteSmoke"}>
        Select a chat to start messaging
        </Typography>
    </div>
  )
}