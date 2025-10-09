'use client'
import { Button } from "@/components/ui/button"
import { Calendar, Home, MessageSquare, Search, Settings, Video } from "lucide-react"
import { motion as m } from "motion/react"

const SideBar = () => {
  return (
    <m.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
    className="w-16 bg-indigo-600 flex flex-col items-center py-4 space-y-6">
        <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
          <Search className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 flex flex-col items-center space-y-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-indigo-500 rounded-lg">
            <Home className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-indigo-500 rounded-lg bg-indigo-500">
            <MessageSquare className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-indigo-500 rounded-lg">
            <Video className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-indigo-500 rounded-lg">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-indigo-500 rounded-lg">
            <Calendar className="w-5 h-5" />
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="text-white hover:bg-indigo-500 rounded-lg">
          <Settings className="w-5 h-5" />
        </Button>
      </m.div>
  )
}

export default SideBar