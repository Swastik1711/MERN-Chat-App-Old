import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import { useChatInfoContext } from '../context/ChatInfoContext';
import message_notification_audio from "../assets/sounds/message_notification.mp3"

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useChatInfoContext();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            const sound = new Audio(message_notification_audio)
            sound.play();
            setMessages([...messages, newMessage]);
        })
        return () => socket?.off("newMessage")
    }, [socket, setMessages, messages])
};

export default useListenMessages