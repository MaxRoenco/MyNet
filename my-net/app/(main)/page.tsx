'use client'
import Messages from "../_components/Messages";
import Chat from "../_components/Chat";
import { useAppStore } from "../../store/useAppStore";

export default function Home() {
  // Use Zustand store
  const { 
    users,
    selectedUserIndex, 
    messagesWidth,
    isMessagesOpen,
    setIsMessagesOpen,
  } = useAppStore();
  
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden xl:grid h-full" style={{
        gridTemplateColumns: `${messagesWidth}% ${100 - messagesWidth}%`
      }}>
        <Messages users={users} />
        <Chat 
          user={users[selectedUserIndex]}
        />
      </div>

      {/* Mobile Layout - Just Chat */}
      <div className="xl:hidden h-full">
        <Chat 
          user={users[selectedUserIndex]}
          isMobile={true}
        />
      </div>

      {/* Messages Drawer (Mobile) */}
      {isMessagesOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 transition-opacity xl:hidden"
            onClick={() => setIsMessagesOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl transform transition-transform xl:hidden">
            <Messages 
              users={users}
              isMobile={true}
              onClose={() => setIsMessagesOpen(false)}
            />
          </div>
        </>
      )}
    </>
  );
}
