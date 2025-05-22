import { useState } from 'react'
import { conversations } from '../data/conversations'

export function useConversations() {
  const [conversationList, setConversationList] = useState(conversations)
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [activeInbox, setActiveInbox] = useState('inbox')

  const markAsRead = (id) => {
    setConversationList(prev =>
      prev.map(conv => 
        conv.id === id ? { ...conv, unread: false } : conv
      )
    )
  }

  return {
    conversations: conversationList,
    selectedConversation,
    setSelectedConversation,
    activeInbox,
    setActiveInbox,
    markAsRead
  }
}