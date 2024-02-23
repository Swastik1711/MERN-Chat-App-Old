import React from 'react'
import Sidebar from '../../src/components/sidebar/Sidebar'
import MessageContainer from '../../src/components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='home-box'>
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className='message-container'>
         <MessageContainer/>
      </div>
      
    </div>
  )
}

export default Home