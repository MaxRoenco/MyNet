import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import initialUsers from '../data/users';

interface Message {
  id: number;
  content: string;
  timestamp: string;
  isSelf: boolean;
}

interface User {
  id: number;
  name: string;
  avatar: string;
  messages: Message[];
}

interface AppState {
  // Users data
  users: User[];
  
  // Selected user state
  selectedUserIndex: number;
  setSelectedUserIndex: (index: number) => void;
  
  // Messages width state
  messagesWidth: number;
  setMessagesWidth: (width: number) => void;
  
  // Mobile menu states
  isMessagesOpen: boolean;
  setIsMessagesOpen: (isOpen: boolean) => void;
  
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  
  // Helper to toggle menus
  toggleMessagesDrawer: () => void;
  toggleSidebarDrawer: () => void;
  
  // Message management
  addMessage: (userId: number, message: Omit<Message, 'id'>) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial states
      users: initialUsers,
      selectedUserIndex: 0,
      messagesWidth: 25,
      isMessagesOpen: false,
      isSidebarOpen: false,
      
      // Actions
      setSelectedUserIndex: (index) => set({ selectedUserIndex: index, isMessagesOpen: false }),
      setMessagesWidth: (width) => set({ messagesWidth: width }),
      setIsMessagesOpen: (isOpen) => set({ isMessagesOpen: isOpen }),
      setIsSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
      
      toggleMessagesDrawer: () => set((state) => ({ isMessagesOpen: !state.isMessagesOpen })),
      toggleSidebarDrawer: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
      
      // Add message to specific user's conversation
      addMessage: (userId, message) => set((state) => ({
        users: state.users.map(user => 
          user.id === userId 
            ? {
                ...user,
                messages: [
                  ...user.messages,
                  {
                    ...message,
                    id: user.messages.length > 0 
                      ? Math.max(...user.messages.map(m => m.id)) + 1 
                      : 1
                  }
                ]
              }
            : user
        )
      })),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({ 
        users: state.users,
        selectedUserIndex: state.selectedUserIndex,
        messagesWidth: state.messagesWidth
      }),
    }
  )
);
