import { CircularProgress, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {

  const [message, setMessage] = useState('');
  const { loading, sendMessage } = useSendMessage();

 

  return (
    <div style={{width:"100%",display:"flex", alignItems:"center"}}>
      <div style={{width:"94%",marginLeft:"10px"}}>
        <TextField label="Enter Message"
          fullWidth={true}
          size='small'
          value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
        />
      </div>
      <div style={{width:"10%",padding:"2px", marginRight:"5px"}}>
        {loading ? (
          <CircularProgress size={"27px"}/>
        ) : (
            <>
              <IconButton
                  aria-label="sendButton"
                  size="large"
                onClick={() => {
                  if (!message) {
                    return;
                  }
                  sendMessage(message);
                  setMessage("");
                }}
                >
                  <SendIcon fontSize="inherit" />
              </IconButton>
          </>
        )}
      </div>
    </div>
  )
}

export default MessageInput