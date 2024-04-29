import { useEffect } from "react";
import useMessages from "../hooks/useMessages";
import Message from "./Message";

const Messages = () => {
    const { messages, loading, sendMessage } = useMessages();
     
    let messageList = Array.isArray(messages?.messages) ? messages.messages : [];

    useEffect(() => {
        console.log("Messages", messages);
    }, [messages, sendMessage]);

    return (
        <div className='px-4 flex-1 overflow-auto'>
            {loading ? (
                <p className='text-center'>Loading...</p>
            ) : messageList.length > 0 ? (
                messageList.map((message) => (
                    <Message key={message._id} mesaj={message} />
                ))
            ) : (
                <p className='text-center'>Send a message to start the conversation</p>
            )}
        </div>
    );
};

export default Messages;
