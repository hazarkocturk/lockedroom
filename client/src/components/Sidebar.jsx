import React from 'react'
import Searchbar from './Searchbar'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 flex flex-col'>
        <Searchbar />
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default Sidebar
