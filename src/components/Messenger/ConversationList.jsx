import { useState } from 'react'
import ConversationItem from './ConversationItem'
import { FiPause, FiMenu } from 'react-icons/fi'

const ConversationList = ({ 
  conversations, 
  selectedConversation, 
  setSelectedConversation,
  markAsRead,
  isMobile
}) => {
  const [sortBy, setSortBy] = useState('lastActivity')

  const handleSort = () => {
    setSortBy(prev => prev === 'lastActivity' ? 'unread' : 'lastActivity')
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex items-center justify-between p-3 text-xs text-gray-400 border-b border-gray-800">
        <span>{conversations.length} Open</span>
        <button 
          className="flex items-center gap-1 hover:text-gray-200"
          onClick={handleSort}
        >
          {sortBy === 'lastActivity' ? 'Last activity' : 'Unread first'}
          <FiMenu size={12} />
        </button>
      </div>

      <ul className="divide-y divide-gray-800">
        {conversations
          .sort((a, b) => {
            if (sortBy === 'unread') {
              return (b.unread ? 1 : 0) - (a.unread ? 1 : 0)
            }
            return new Date(b.time) - new Date(a.time)
          })
          .map(conversation => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              isSelected={selectedConversation?.id === conversation.id}
              onClick={() => {
                setSelectedConversation(conversation)
                if (conversation.unread) {
                  markAsRead(conversation.id)
                }
              }}
            />
          ))}
      </ul>

      {isMobile && (
        <div className="flex gap-3 p-3 border-t border-gray-800">
          <button className="flex-1 bg-gray-800 rounded-full py-2 text-gray-400 hover:bg-gray-700 flex items-center justify-center gap-2">
            <FiPause size={14} />
            <span className="text-xs">Pause</span>
          </button>
          <button className="flex-1 bg-gray-800 rounded-full py-2 text-gray-400 hover:bg-gray-700 flex items-center justify-center gap-2">
            <FiMenu size={14} />
            <span className="text-xs">Menu</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default ConversationList