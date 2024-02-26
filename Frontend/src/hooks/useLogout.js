import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useChatInfoContext } from '../context/ChatInfoContext';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setUser, setSelectedConversation } = useChatInfoContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }

            localStorage.removeItem("chat-app-user");
            setUser(null);
            setSelectedConversation(null);
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }
    return { loading, logout };
}

export default useLogout