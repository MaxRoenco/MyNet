'use client'
import Phone from "@/public/chat/phone"
import Send from "@/public/chat/send"
import Paper from "@/public/chat/paper_clip"
import { useEffect, useState } from "react"

function scrollToBottom(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollTo({
            top: element.scrollHeight,
            behavior: 'smooth',
        });
    }
}


export default function Chat({ user, initialMessages = [] }: { user?: any, initialMessages?: any[] }) {

    const [messageList, setMessageList] = useState(initialMessages);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        setMessageList(initialMessages);
    }, [initialMessages]);

    function handleSubmitMessage() {
        console.log("Submitting message:", newMessage);
        const updatedMessages = [
            ...messageList,
            {
                id: messageList.length + 1,
                content: newMessage,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isSelf: true
            }
        ];
        setMessageList(updatedMessages);
        setNewMessage("");
    }

    useEffect(() => {
        scrollToBottom("messageContainer");
    }, [messageList]);

    return (
        <div className="bg-[#EDF2F7] border-b justify-between grid grid-rows-[10%_80%_10%] w-full grid-cols-1 h-screen">
            <div className="flex justify-between items-center border-b py-6 px-7">
                <div className="flex gap-5">
                    <img src={user?.avatar} alt={user?.name} className="w-14 h-14 rounded-lg" />
                    <div className="flex flex-col justify-center">
                        <p className="text-xl font-semibold">{user?.name}</p>
                        <div className="flex items-center gap-1">
                            <div className="bg-green-400 rounded-full w-3 h-3"></div>
                            <span className="text-gray-500 text-sm font-semibold">Online</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-1 bg-[#7B61FF19] hover:bg-[#7B61FF40] transition-colors rounded-lg px-4 py-3 cursor-pointer">
                    <Phone width={22} height={22} color="#7B61FF" />
                    <span className="text-[#7B61FF] font-semibold">Call</span>
                </div>
            </div>



            <div className="overflow-y-auto w-full h-full" id="messageContainer" onLoad={() => scrollToBottom("messageContainer")}>
                {messageList.map((message) => (
                    <div key={message.id} className={`flex ${message.isSelf ? 'justify-end' : 'justify-start'} px-7 my-4`}>
                        <div className={`max-w-[60%] p-3 rounded-lg ${message.isSelf ? 'bg-[#7B61FF] text-white' : 'bg-white text-black'}`}>
                            <p className="text-sm">{message.content}</p>
                            <span className={`${message.isSelf ? "text-white/70" : "text-black/70"} text-[12px]`}>{message.timestamp}</span>
                        </div>
                    </div>
                ))}
            </div>


            <div className="flex items-center gap-5 w-full px-7">
                <div className="cursor-pointer hover:scale-120 transition-transform">
                    <Paper color="black" width={34} height={34} />
                </div>
                <div className="outline-none bg-white w-full rounded-lg border-2 border-gray-200 flex items-center overflow-hidden">
                    <input
                        className="border-none p-3 outline-none bg-white w-full text-sm"
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
                    <div className="pr-3 cursor-pointer hover:scale-120 transition-transform" onClick={() => newMessage.trim() && handleSubmitMessage()}>
                        <Send width={30} height={30} color="#7B61FF" />
                    </div>
                </div>
            </div>
        </div>)
}