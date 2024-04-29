import React, { useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import useMessages from '../hooks/useMessages'; 

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { sendMessage, loading } = useMessages(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message || loading) return; 
    sendMessage(message); 
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-end py-[7px]'>
      <div className='w-full relative px-4 '>
        <input
          type='text'
          className='border text-sm block w-full p-2.5 rounded-full bg-gray-700 border-gray-600 text-white'
          placeholder='Send a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading} // Disable input field while loading
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-9' disabled={loading}>
          <IoSendSharp className='text-white w-6 h-6 hover:text-orange-300' />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
