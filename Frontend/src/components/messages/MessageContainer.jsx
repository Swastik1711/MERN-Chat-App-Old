import React from 'react'
import NameBar from './NameBar'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  return (

      <div style={{height:"100%",display:"flex",flexDirection:"column"}}>
          <div style={{height:"10%" ,backgroundColor:"rgba(113, 113, 115, 0.533)", borderTopRightRadius:"12px", display: "flex",alignItems:"center"}}>
              <NameBar name={"John Doe"} status={"Active now"}/>
          </div>
          <div style={{height:"80%",overflowY: 'scroll', paddingRight: '8px', scrollbarWidth: 'none', 'msOverflowStyle': 'none' }}>
               <Messages />
          </div>
          <div style={{height:"10%", width:"100%" ,backgroundColor: "rgba(113, 113, 115, 0.533)",borderBottomRightRadius:"12px",display:"flex",alignItems:"center" }}>
              <MessageInput/>
          </div>
        </div>

  )
}

export default MessageContainer