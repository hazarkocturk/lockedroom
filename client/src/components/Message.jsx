import { useAuthContext } from "../context/AuthContext";
import useConversations from "../store/useConversations";


const Message = ({ mesaj }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversations();
    const fromMe = mesaj.senderId === authUser._id;
    const formatTimeToHoursAndMinutes = (timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };
    const timestamp = mesaj.createdAt;
    const formattedTime = formatTimeToHoursAndMinutes(timestamp);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";

    try {
        return (
            <div className={`chat ${chatClassName}`}>
                <div className='chat-image avatar'>
                    <div className='w-10 rounded-full'>
                        <img alt='Profile' src={profilePic} />
                    </div>
                </div>
                <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{mesaj.message}</div>
                <div className="chat-footer opacity-50 text-sx flex gap-1 items-center">{formattedTime}</div>
            </div>
        );
    } catch (error) {
        console.error("Error in Message component:", error);
        return null; 
    }
};

export default Message;
