import { useEffect, useState } from "react";
import useConversations from "../store/useConversations";
import toast from "react-hot-toast";

const useMessages = () => {
    const [loading, setLoading] = useState(false); 
    const [messageSent, setMessageSent] = useState(false); 
    const { messages, setMessages, selectedConversation } = useConversations();

    const getMessages = async () => {
        if (!selectedConversation?._id) return; 
        setLoading(true); 
        try {
            const res = await fetch(`https://lokedroom-2f5edea24896.herokuapp.com/messages/${selectedConversation._id}`, {
                credentials: 'include'
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            // Ensure that data.messages is always an array
            const messagesArray = Array.isArray(data.messages) ? data.messages : [];
            setMessages(messagesArray); 
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false); 
        }
    };
    
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`https://lokedroom-2f5edea24896.herokuapp.com/messages/send/${selectedConversation._id}`, {
                method: "POST",
                credentials: 'include' ,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setMessages([...messages, data]);
            getMessages();
            toast.success("Message sent successfully");
            setMessageSent(!messageSent);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(selectedConversation?._id) getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedConversation._id, setMessages ]); 
     return { messages, loading, sendMessage };
};

export default useMessages;
