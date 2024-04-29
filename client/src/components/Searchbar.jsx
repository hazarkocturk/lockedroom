import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa";
import useConversations from '../store/useConversations';
import useGetConversations from '../hooks/useGetConversations';
import toast from 'react-hot-toast';

const Searchbar = () => {
 const [search, setSearch] = useState('')
const {setSelectedConversation}=useConversations()
const {conversations}=useGetConversations()
const searchArr = conversations.users

const handleSubmit = (e) => {
  e.preventDefault();
  if (!search) return;
  const conversation = searchArr.find((conversation) =>
      conversation.fullName.toLowerCase().includes(search.toLowerCase())
  );
  if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
  } else {
      toast.error('No user found');
  }
};

  return (
    <div className='shadow-xl p-2 '>
   <form onSubmit={handleSubmit} className='flex items-center gap-2 '>
    <input type="text" placeholder='Search...' className='input input-bordered rounded-full  bg-gray-700' 
    value={search}
    onChange={(e)=>setSearch(e.target.value)}/>
    <button type='submit' className='btn btn-circle bg-orange-300 text-white'>  <FaSearch className='w-6 h-6 outline-none' /></button>
   </form>
   </div>
  )
}

export default Searchbar
