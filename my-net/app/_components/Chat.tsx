'use client'
import Phone from "@/public/chat/phone"
import Send from "@/public/chat/send"
import Paper from "@/public/chat/paper_clip"
import { useEffect, useState } from "react"
import { useAppStore } from "../../store/useAppStore"

function scrollToBottom(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollTo({
            top: element.scrollHeight,
            behavior: 'smooth',
        });
    }
}

interface ChatProps {
  user?: any;
  isMobile?: boolean;
}

export default function Chat({ user, isMobile = false }: ChatProps) {
    const { addMessage } = useAppStore();
    const [newMessage, setNewMessage] = useState("");

    function handleSubmitMessage() {
        if (!newMessage.trim() || !user) return;
        
        addMessage(user.id, {
            content: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isSelf: true
        });
        
        setNewMessage("");
    }

    useEffect(() => {
        scrollToBottom("messageContainer");
    }, [user?.messages]);

    return (
        <div className="bg-[#EDF2F7] w-full h-full flex flex-col overflow-hidden">
            {/* Header - Fixed */}
            <div className="flex justify-between items-center border-b py-4 md:py-6 px-4 md:px-7 flex-shrink-0 bg-[#EDF2F7]">
                <div className="flex gap-3 md:gap-5">
                    <img src={user?.avatar} alt={user?.name} className="w-10 h-10 md:w-14 md:h-14 rounded-lg" />
                    <div className="flex flex-col justify-center">
                        <p className="text-base md:text-xl font-semibold">{user?.name}</p>
                        <div className="flex items-center gap-1">
                            <div className="bg-green-400 rounded-full w-2 h-2 md:w-3 md:h-3"></div>
                            <span className="text-gray-500 text-xs md:text-sm font-semibold">Online</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1 bg-[#7B61FF19] hover:bg-[#7B61FF40] transition-colors rounded-lg px-3 py-2 md:px-4 md:py-3 cursor-pointer">
                    <Phone width={isMobile ? 18 : 22} height={isMobile ? 18 : 22} color="#7B61FF" />
                    <span className="text-[#7B61FF] font-semibold text-sm md:text-base">Call</span>
                </div>
            </div>

            {/* Messages - Scrollable */}
            <div className="flex-1 overflow-y-scroll w-full min-h-0" id="messageContainer">
                {user?.messages?.map((message: any) => (
                    <div key={message.id} className={`flex ${message.isSelf ? 'justify-end' : 'justify-start'} px-4 md:px-7 my-3 md:my-4`}>
                        <div className={`max-w-[75%] md:max-w-[60%] p-3 rounded-lg ${message.isSelf ? 'bg-[#7B61FF] text-white' : 'bg-white text-black'}`}>
                            <p className="text-sm break-words">{message.content}</p>
                            <span className={`${message.isSelf ? "text-white/70" : "text-black/70"} text-[12px]`}>{message.timestamp}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Bar - Fixed at bottom */}
            <div className="flex items-center gap-3 md:gap-5 w-full px-4 md:px-7 py-3 md:py-4 flex-shrink-0 bg-[#EDF2F7] border-t">
                <div className="cursor-pointer hover:scale-110 transition-transform flex-shrink-0">
                    <Paper color="black" width={isMobile ? 28 : 34} height={isMobile ? 28 : 34} />
                </div>
                <div className="outline-none bg-white w-full rounded-lg border-2 border-gray-200 flex items-center overflow-hidden">
                    <input
                        className="border-none p-2 md:p-3 outline-none bg-white w-full text-sm"
                        type="text"
                        placeholder="Type a message"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && newMessage.trim()) {
                                handleSubmitMessage();
                            }
                        }}
                    />
                    <div className="pr-2 md:pr-3 cursor-pointer hover:scale-110 transition-transform flex-shrink-0" onClick={() => newMessage.trim() && handleSubmitMessage()}>
                        <Send width={isMobile ? 24 : 30} height={isMobile ? 24 : 30} color="#7B61FF" />
                    </div>
                </div>
            </div>
        </div>)
}