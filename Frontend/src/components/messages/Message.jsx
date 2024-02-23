import React from 'react'

const Message = ({message, isMine}) => {
  return (
      <div>
        <div className={`messageBox ${isMine ? 'sender' : 'receiver'}`}>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default Message