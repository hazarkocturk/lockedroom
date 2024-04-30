import React from 'react'
import { useState,useEffect } from 'react'
import toast from 'react-hot-toast'

const useGetConversations = () => {
    const [conversations, setConversations] = useState([])
    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await fetch('https://lokedroom-2f5edea24896.herokuapp.com/users', {
                    credentials: 'include' 
                });
                const data = await res.json();
                console.log(data)
                if(data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                toast.error(error.message);
            }
        }
        getConversations()
    }, []) 

    return {conversations}
}

export default useGetConversations
