import React, { useState } from 'react'
import GenderCheckbox from '../components/GenderCheckbox'
import { Link } from 'react-router-dom'
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const {signup, loading} = useSignup();

  const handleGenderBoxChange = (gender) => {
    setInputs({ ...inputs, gender })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div>
      <div className='flex flex-col items-center justify-center  mx-auto'>
        <div className='sm:min-w-full md:w-full h-55 p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-orange-600 colored-shadow'>
          <h1 className='text-3xl font-semibold text-center text-slate-700'>Signup
            <span className='text-orange-600 text font-serif italic'> LOCKEDROOM</span></h1>
          <form onSubmit={handleSubmit} >
            <div>
              <label htmlFor="" className='label p-2'>
                <span className=' label-text text-slate-700 text-xs'>Full Name</span>
              </label>
              <input type="text" placeholder="Enter Full Name" className='input input-bordered w-full h-10'
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="" className='label p-2'>
                <span className='label-text text-slate-700 text-xs'>Username</span>
              </label>
              <input type="text" placeholder="Enter username" className='input input-bordered w-full h-10'
                value={inputs.username}
                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="" className='label p-2'>
                <span className='label-text text-slate-700 text-xs'>Email</span>
              </label>
              <input type="email" placeholder="Enter email" className='input input-bordered w-full h-10'
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="" className='label p-2'>
                <span className='label-text text-slate-700 text-xs'>Password</span>
              </label>
              <input type="password" placeholder="Enter password" className='input input-bordered w-full h-10'
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="" className='label p-2'>
                <span className='label-text text-slate-700 text-xs'>Confirm Password</span>
              </label>
              <input type="password" placeholder="Confirm password" className='input input-bordered w-full h-10'
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </div>
            <GenderCheckbox onGenderboxChange={handleGenderBoxChange} selectedGender={inputs.gender} />
            <Link to="/login" className='text-sm hover:underline text-slate-100  mt-2 px-2 inline-block'>
              {"Already"} have an account?
            </Link>
            <button className='btn btn-block btn-sm mt-2 bg-orange-600 hover:bg-orange-700 text-white hover:scale-105' >Signup</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
