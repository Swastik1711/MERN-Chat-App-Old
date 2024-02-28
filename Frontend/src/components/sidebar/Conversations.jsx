import React from 'react'
import Conversation from './Conversation'
import { height } from '@mui/system'
import useConversations from '../../hooks/useConversations'

const Conversations = () => {

  const { loading, conversations } = useConversations();

  return (
    <div >
      {
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIndex = {idx === conversations.length-1}
            />
        ))
      }
    </div>
  )
}

export default Conversations