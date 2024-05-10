import React from 'react'
import Login from './pages/Login' 
import Signup from './pages/Signup'
import Home from './pages/Home'
import {  Routes, Route, Navigate} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

export default function App() {
  const {authUser} = useAuthContext()
  
  return (
  
      <div className="p-4 h-screen flex items-center justify-center bg-black">
       <Routes>
          <Route path='/' element={authUser?<Home/>:<Navigate to={"/login"}/>} />
          <Route path='/login' element={authUser?<Navigate to='/'/> : <Login />}  />
          <Route path='/signup' element={authUser?<Navigate to='/'/> : <Signup />} />
        </Routes>
        <Toaster />
      </div>
 
  )
}