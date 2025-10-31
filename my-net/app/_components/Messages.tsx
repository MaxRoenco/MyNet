import Plus from "@/public/messages/plus"
import { useState } from "react";
export default function Messages({ users, selectedUserIndex, setSelectedUserIndex, setMessagesWidth }: { users: any[], selectedUserIndex: number, setSelectedUserIndex: (index: number) => void, setMessagesWidth: (width: number) => void }) {

    const [searchTerm, setSearchTerm] = useState("");

    function Contact({ icon, name, lastMessage, time, selected, userIndex }: { icon: string, name: string, lastMessage: string, time: string, selected: boolean, userIndex: number }) {
        return (
            <div
                onClick={() => setSelectedUserIndex(userIndex)}
                className={`cursor-pointer select-none px-4 rounded-md flex items-center justify-between gap-4 py-3 w-full ${selected ? 'bg-[#615EF02F]' : 'hover:bg-[#615EF010]'} transition-colors`}>
                <img src={icon} alt={name} className="w-14 h-14 rounded-lg" />
                <div className="flex flex-col overflow-hidden">
                    <span className="font-bold text-[15px]">{name}</span>
                    <span className="text-[12px] text-gray-500 text-ellipsis text-nowrap w-full truncate">{lastMessage}</span>
                </div>
                <span className="text-[12px] text-gray-500 ml-auto text-nowrap">{time}</span>
            </div>)
    }

    function handleMouseMove(e: MouseEvent) {
        const newWidth = e.clientX;
        console.log(`${newWidth / window.innerWidth * 100}%`);
        setMessagesWidth(Math.min(Math.max((newWidth / window.innerWidth * 100) - 5, 25), 60));
    }

    function handleMouseUp() {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    }
    return (
        <div className="border-r h-full relative">
            <div
                className="cursor-col-resize w-4 h-screen absolute -right-2"
                onMouseDown={(e) => {
                    e.preventDefault();
                    document.addEventListener("mousemove", handleMouseMove);
                    document.addEventListener("mouseup", handleMouseUp);
                }}
            ></div>
            <div className="font-inter text-xl font-bold border-b flex items-center py-7 px-7 justify-between">
                <div className="flex items-center gap-4">
                    Messages <img src="./messages/down.svg" alt="down arrow" /> <span className="text-sm bg-[#EDF2F7] px-3 py-1 rounded-full">12</span>
                </div>
                <div className="cursor-pointer hover:scale-120 transition-transform">
                        <Plus width={30} height={30} color="#7B61FF" />
                </div>
            </div>
            <div className="flex flex-col py-3">
                <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className="mx-8 border-none outline-none rounded-md bg-[#F3F3F3] px-4 py-2 text-sm" placeholder="Search users" />
                <div className="mx-4 pt-4">
                    {users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())).map(({ avatar, name, messages, id }, index) => (
                        <Contact key={index} icon={avatar} name={name} lastMessage={messages[messages.length - 1].content} time={messages[messages.length - 1].timestamp} selected={id === selectedUserIndex} userIndex={id} />
                    ))}
                </div>
            </div>
        </div>
    )
}