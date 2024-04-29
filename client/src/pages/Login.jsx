import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-slate-700'>
                    Login <span className='text-orange-600 text font-serif italic'> LOCKEDROOM</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username' className='label p-2'>
                            <span className='text-base label-text text-slate-700'>Username</span>
                        </label>
                        <input
                            type='text'
                            id='username'
                            placeholder='Enter username'
                            className='input input-bordered w-full h-10'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='label p-2'>
                            <span className='text-base label-text text-slate-700'>Password</span>
                        </label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Enter password'
                            className='input input-bordered w-full h-10'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link
                        to='/signup'
                        className='text-sm hover:underline text-slate-100 hover:text-blue-600 mt-2 px-2 inline-block'
                    >
                        {"Don't"} have an account?
                    </Link>
                    <button className='btn btn-block btn-sm mt-2'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
