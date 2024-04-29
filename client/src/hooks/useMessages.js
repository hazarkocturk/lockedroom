/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useConversations from "../store/useConversations";
import toast from "react-hot-toast";

const useMessages = () => {
    const [loading, setLoading] = useState(false); 
    const [messages, setMessages] = useState([]);
    const [messageSent, setMessageSent] = useState(false); // New state to track message sending status
    const { selectedConversation } = useConversations();

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
            setMessages((prevMessages) => {
                const messagesArray = Array.isArray(prevMessages) ? prevMessages : [];
                return [...messagesArray, data];
            }); 
            setMessageSent(true); 
            toast.success("Message sent successfully");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
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
                setMessages(data);
                console.log("Data", data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false); 
            }
        };
        getMessages();
    }, [selectedConversation?._id, messageSent]); 

    return { messages, loading, messageSent };
};

export default useMessages;
