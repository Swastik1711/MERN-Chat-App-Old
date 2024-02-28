import React from 'react'
import { useChatInfoContext } from '../../context/ChatInfoContext'

const Message = ({ message }) => {
  
  const { user} = useChatInfoContext();
  const fromMe = message.senderId === user._id;
  return (
        <div className={`messageBox ${fromMe ? 'sender' : 'receiver'}`}>
          <p>{message.message}</p>
          {/* <p>9.07</p> */}
        </div>
  )
}

export default Message