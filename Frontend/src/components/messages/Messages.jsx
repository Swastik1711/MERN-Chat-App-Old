import { useEffect, useRef, useState } from 'react';
import useGetMessages from '../../hooks/useGetMessages'
import MessageBoxSkeleton from '../skeletons/MessageBoxSkeleton';
import Message from './Message';
import { Typography } from '@mui/material';

export default function Messages() {
  const { messages, loading} = useGetMessages();
  const bottomRef = useRef(null);


  useEffect(() => {
    const scrollToBottom = () => {
      bottomRef.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
    };

    // Scroll to bottom after a small delay to ensure all Message components are rendered
    const timeoutId = setTimeout(scrollToBottom, 100);

    return () => clearTimeout(timeoutId);
  }, [messages]);

  return (
    <div style={{display:"flex", flexDirection:"column"}}>

      { !loading && messages.length > 0 && messages.map((message) =>{    
         return <Message key={message._id} message={message} />
      })}
      {loading && <MessageBoxSkeleton />}
      {!loading && messages.length === 0 && (
        <Typography variant='h5' color={'whitesmoke'}>
          Send a message to start the conversation
        </Typography>
      )}
        <div ref={bottomRef} />
    </div>
  );
}

