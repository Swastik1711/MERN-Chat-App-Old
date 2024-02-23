import React from 'react'
import Conversation from './Conversation'
import { height } from '@mui/system'

const Conversations = () => {
  return (
      <div >
          <Conversation avatarImage={"/avatar.png"} name={"John Doe"} isOnline={true}/>
          <Conversation avatarImage={"/avatar.png"} name={"John Doe"} isOnline={true}/>
          <Conversation avatarImage={"/avatar.png"} name={"John Doe"} isOnline={false}/>
          <Conversation avatarImage={"/avatar.png"} name={"John Doe"} isOnline={false}/>
          <Conversation avatarImage={"/avatar.png"} name={"John Doe"} isOnline={true}/>
          <Conversation avatarImage={"/avatar.png"} name={"John Doe"} isOnline={true}/>
          <Conversation avatarImage={"/avatar.png"} name={"John Doe"} isOnline={true}/>
          <Conversation avatarImage={"/avatar.png"} name={"John Doe"} isOnline={true}/>
          <Conversation avatarImage={"/avatar.png"} name={"John Doe"} isOnline={true}/>
          <Conversation avatarImage={"/avatar.png"} name={"John Doe"} isOnline={true}/>
          <Conversation avatarImage={"/avatar.png"} name={"John Doe"} isOnline={true}/>
          <Conversation avatarImage={"/avatar.png"} name={"John Doe"} isOnline={false}/>
    </div>
  )
}

export default Conversations