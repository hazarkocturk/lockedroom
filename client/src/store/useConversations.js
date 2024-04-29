import {create} from 'zustand';

const useConversations = create((set) => ({
    selectedConversation: "",
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({messages}),

}));

export default useConversations;