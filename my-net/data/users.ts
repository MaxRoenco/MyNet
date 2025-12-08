const users = [
  {
    id: 0,
    name: "Jhon Doe",
    avatar: "/messages/example_users/user1.jpg",
    messages: [
      {
        id: 1,
        content: "Hey! How are you doing?",
        timestamp: "10:00 AM",
        isSelf: false
      },
      {
        id: 2,
        content: "I'm doing well, thanks! How about you?",
        timestamp: "10:02 AM",
        isSelf: true
      },
      {
        id: 3,
        content: "I'm great, thanks for asking! Are we still on for lunch today?",
        timestamp: "10:03 AM",
        isSelf: false
      },
    ]
  },
  {
    id: 1,
    name: "Bob Smith",
    avatar: "/messages/example_users/user2.jpg",
    messages: [
      {
        id: 1,
        content: "Don't forget about the meeting tomorrow at 3 PM.",
        timestamp: "10:00 AM",
        isSelf: false
      },
      {
        id: 2,
        content: "Thanks for the reminder! I'll be there.",
        timestamp: "10:05 AM",
        isSelf: true
      },
    ]
  },
  {
    id: 2,
    name: "Charlie Brown",
    avatar: "/messages/example_users/user3.jpg",
    messages: [
      {
        id: 1,
        content: "Can you send me the report by the end of the day?",
        timestamp: "11:00 AM",
        isSelf: false
      },
      {
        id: 2,
        content: "Sure, I'll have it ready for you.",
        timestamp: "11:15 AM",
        isSelf: true
      },
    ]
  },
]

export default users;