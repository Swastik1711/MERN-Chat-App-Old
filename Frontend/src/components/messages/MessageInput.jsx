import { IconButton, TextField } from '@mui/material';
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';

const MessageInput = () => {

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div style={{width:"100%",display:"flex", alignItems:"center"}}>
      <div style={{width:"94%",marginLeft:"10px"}}>
        <TextField label="Enter Message"
          fullWidth="true"
          size='small'
        />
      </div>
      <div style={{padding:"2px", marginRight:"5px"}}>
        <IconButton aria-label="sendButton" size="large">
          <SendIcon fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  )
}

export default MessageInput