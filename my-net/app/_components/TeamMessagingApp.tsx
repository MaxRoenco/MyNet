'use client'
import { useState } from 'react';
import { Search, Plus, Phone, MoreVertical, Send, Paperclip } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const TeamMessagingApp = () => {
  const [selectedChat, setSelectedChat] = useState('Florencio Dorrance');

  const conversations = [
    {
      name: 'Elnor Laverty',
      message: 'haha oh man 🔥',
      time: '12m',
      avatar: '/api/placeholder/40/40',
      status: 'online',
      tags: ['Question', 'Help wanted!']
    },
    {
      name: 'Florencio Dorrance',
      message: 'Some content',
      time: '24m',
      avatar: '/api/placeholder/40/40',
      status: 'online',
      tags: ['Some content']
    },
    {
      name: 'Lavern Laboy',
      message: 'haha that\'s terrifying 🤘',
      time: '1h',
      avatar: '/api/placeholder/40/40',
      tags: ['Bug', 'hacktoberfast']
    },
    {
      name: 'Titus Kitamura',
      message: 'omg, this is amazing',
      time: '5h',
      avatar: '/api/placeholder/40/40',
      tags: ['Question', 'Some content']
    },
    {
      name: 'Geoffrey Mott',
      message: 'Wow 😊',
      time: '2d',
      avatar: '/api/placeholder/40/40',
      tags: ['Request']
    },
    {
      name: 'Alfonso Schuessler',
      message: 'perfect',
      time: '1m',
      avatar: '/api/placeholder/40/40',
      tags: ['Follow up']
    }
  ];

  const messages = [
    { sender: 'Florencio Dorrance', text: 'omg, this is amazing', time: '10:30 AM', isMine: false },
    { sender: 'Florencio Dorrance', text: 'perfect! ✅', time: '10:31 AM', isMine: false },
    { sender: 'Florencio Dorrance', text: 'Wow, this is really epic', time: '10:32 AM', isMine: false },
    { sender: 'You', text: 'How are you?', time: '10:35 AM', isMine: true },
    { sender: 'Florencio Dorrance', text: 'just ideas for next time', time: '10:36 AM', isMine: false },
    { sender: 'Florencio Dorrance', text: 'I\'ll be there in 2 mins 😊', time: '10:37 AM', isMine: false },
    { sender: 'You', text: 'woohoooo', time: '10:40 AM', isMine: true },
    { sender: 'You', text: 'Haha oh man', time: '10:41 AM', isMine: true },
    { sender: 'You', text: 'Haha that\'s terrifying 😊', time: '10:42 AM', isMine: true },
    { sender: 'Florencio Dorrance', text: 'aww', time: '10:45 AM', isMine: false },
    { sender: 'Florencio Dorrance', text: 'omg, this is amazing', time: '10:46 AM', isMine: false },
    { sender: 'Florencio Dorrance', text: 'woohoooo 🔥', time: '10:47 AM', isMine: false }
  ];

  const teamMembers = [
    { name: 'Florencio Dorrance', role: 'Market Development Manager', avatar: '/api/placeholder/40/40' },
    { name: 'Benny Spanbauer', role: 'Area Sales Manager', avatar: '/api/placeholder/40/40' },
    { name: 'Jamel Eusebio', role: 'Administrator', avatar: '/api/placeholder/40/40' },
    { name: 'Lavern Laboy', role: 'Account Executive', avatar: '/api/placeholder/40/40' },
    { name: 'Alfonso Schuessler', role: 'Proposal Writer', avatar: '/api/placeholder/40/40' },
    { name: 'Daryl Nehls', role: 'Nursing Assistant', avatar: '/api/placeholder/40/40' }
  ];

  const files = [
    { name: 'i9.pdf', type: 'PDF', size: '12mb' },
    { name: 'Screenshot-3817.png', type: 'PNG', size: '4mb' },
    { name: 'sharefile.docx', type: 'DOC', size: '356KB' },
    { name: 'Jerry-2020_i-9_Form.xsl', type: 'XSL', size: '24mb' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Conversations List */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold">Messages</h2>
              <Badge variant="secondary" className="bg-gray-100">12</Badge>
            </div>
            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-indigo-600 hover:bg-indigo-700">
              <Plus className="w-4 h-4 text-white" />
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="search. Search messages" 
              className="pl-10 bg-gray-50 border-gray-200"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          {conversations.map((conv, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedChat(conv.name)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedChat === conv.name ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={conv.avatar} />
                    <AvatarFallback>{conv.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {conv.status === 'online' && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sm truncate">{conv.name}</h3>
                    <span className="text-xs text-gray-500">{conv.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate mb-2">{conv.message}</p>
                  <div className="flex gap-1 flex-wrap">
                    {conv.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className={`text-xs ${
                          tag === 'Question' ? 'bg-orange-100 text-orange-700' :
                          tag === 'Bug' ? 'bg-red-100 text-red-700' :
                          tag === 'Request' ? 'bg-purple-100 text-purple-700' :
                          'bg-green-100 text-green-700'
                        }`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/api/placeholder/40/40" />
              <AvatarFallback>FD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-semibold">Florencio Dorrance</h2>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-indigo-600 hover:text-indigo-700">
              <Phone className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-4 max-w-4xl mx-auto">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}>
                {!msg.isMine && (
                  <Avatar className="w-8 h-8 mr-2">
                    <AvatarImage src="/api/placeholder/32/32" />
                    <AvatarFallback>FD</AvatarFallback>
                  </Avatar>
                )}
                <div className={`max-w-md ${msg.isMine ? 'order-1' : ''}`}>
                  <div className={`rounded-2xl px-4 py-2 ${
                    msg.isMine 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
                {msg.isMine && (
                  <Avatar className="w-8 h-8 ml-2">
                    <AvatarImage src="/api/placeholder/32/32" />
                    <AvatarFallback>ME</AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center gap-2 max-w-4xl mx-auto">
            <Button variant="ghost" size="icon">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Input 
              placeholder="Type a message" 
              className="flex-1"
            />
            <Button size="icon" className="bg-indigo-600 hover:bg-indigo-700">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Directory */}
      <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="font-semibold">Directory</h2>
          <Button variant="ghost" size="icon">
            <MoreVertical className="w-5 h-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-4">
          {/* Team Members */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-700">Team Members</h3>
              <Badge variant="secondary" className="bg-gray-100">6</Badge>
            </div>
            <div className="space-y-3">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{member.name}</h4>
                    <p className="text-xs text-gray-500 truncate">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Files */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-700">Files</h3>
              <Badge variant="secondary" className="bg-gray-100">125</Badge>
            </div>
            <div className="space-y-2">
              {files.map((file, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      file.type === 'PDF' ? 'bg-red-100' :
                      file.type === 'PNG' ? 'bg-green-100' :
                      file.type === 'DOC' ? 'bg-blue-100' :
                      'bg-purple-100'
                    }`}>
                      <span className="text-xs font-semibold">{file.type}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <p className="text-xs text-gray-500">{file.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="flex-shrink-0">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default TeamMessagingApp;