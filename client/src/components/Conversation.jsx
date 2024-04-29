import React from 'react';
import useConversations from '../store/useConversations';


const Conversation = ({ user, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversations();
  const isSelected = selectedConversation?._id === user._id;



  return (
    <>
      <div onClick={()=>setSelectedConversation(user)} className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500": ""}`}>
        <div className="avatar online">
          <div className='w-12 h-12 rounded-full'>
            <img src={user.profilePic} alt="user avatar" /> 
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <span className='font-bold text-gray-200'>{user.fullName}</span>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>
      <div className='divider my-0 py-0 h-1'/>
    </>
  );
};

export default Conversation;
