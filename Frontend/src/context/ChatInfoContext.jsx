import { createContext, useState, useContext} from 'react';

export const ChatInfoContext = createContext();

//making customise context hook 
export const useChatInfoContext = () => {
    return useContext(ChatInfoContext);
}

export const ChatInfoContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("chat-app-user")) || null)
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);

    return <ChatInfoContext.Provider value={{user, setUser, selectedConversation, setSelectedConversation, messages, setMessages}}>
        {children}
    </ChatInfoContext.Provider>
}