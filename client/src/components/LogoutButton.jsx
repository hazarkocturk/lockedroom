import React from 'react'
import { SlLogout } from "react-icons/sl";
import  useLogout from '../hooks/useLogout'

const LogoutButton = () => {
  const {logout} = useLogout()
  return (
    <div className='mt-auto p-4 shadow-xl '>
      <SlLogout onClick={logout} className='w-6 h-6 text-white  cursor-pointer' />
    </div>
  )
}

export default LogoutButton
