import { useEffect } from "react";
import useMessages from "../hooks/useMessages"
import Message from "./Message";

const Messages = () => {
    const { messages, loading} = useMessages();
  
    return (
        <div className='px-4 flex-1 overflow-auto mt-4'>
            {loading ? (
                <p className='text-center'>Loading...</p>
            ) : messages.length > 0 ? (
                messages.map((message) => (
                    <Message key={message._id} mesaj={message} />
                ))
            ) : (
                <p className='text-center'>Send a message to start the conversation</p>
            )}
        </div>
    );
};

export default Messages;