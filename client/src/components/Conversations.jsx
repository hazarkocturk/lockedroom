import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../hooks/useGetConversations'
import {getRandomEmoji} from '../utils/emoji'

const Conversations = () => {
  const { conversations } = useGetConversations();

  if (!conversations || !conversations.users) {
    return null; 
  }
  const { users } = conversations;

  return (
    <div className='py-2 flex flex-col overflow-y-auto' style={{ maxHeight: 'calc(100vh - 100px)' }}>
      {users.map(user => (
        <Conversation key={user._id} user={user} emoji={getRandomEmoji()}/>
      ))}
    </div>
  );
};

export default Conversations
