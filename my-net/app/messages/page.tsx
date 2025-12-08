'use client'
import React from 'react'
import Messages from '../_components/Messages'
import { useAppStore } from '../../store/useAppStore';

const MessagesPage = () => {
  const { users } = useAppStore();
  
  return (
    <div className="h-full w-full">
      <Messages users={users} />
    </div>
  )
}

export default MessagesPage