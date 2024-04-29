import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogin = () => {
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        try {
            const res = await fetch('https://lokedroom-2f5edea24896.herokuapp.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
                credentials: 'include' // Include cookies in the request
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);
            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };
    return { login };
};

export default useLogin;
