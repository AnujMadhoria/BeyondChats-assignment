import { FiStar, FiMoreHorizontal, FiColumns, FiMoon, FiInbox, FiMenu, FiChevronRight } from 'react-icons/fi'
import DarkModeToggle from '../common/DarkModeToggle'
import { useState } from 'react'

const MessengerHeader = ({ 
  toggleDarkMode, 
  selectedConversation,
  isMobile,
  onLeftSidebarToggle,
  onRightSidebarToggle
}) => {
  const [starred, setStarred] = useState(false)

  return (
    <header className="flex items-center justify-between p-3 border-b border-gray-800 bg-gray-900 z-20">
      <div className="flex items-center">
        {isMobile && (
          <>
            <button 
              className="text-gray-400 hover:text-white mr-2"
              onClick={onLeftSidebarToggle}
              aria-label="Toggle inbox sidebar"
            >
              <FiMenu size={20} />
            </button>
            {selectedConversation && (
              <button 
                className="text-gray-400 hover:text-white mr-2"
                onClick={onRightSidebarToggle}
                aria-label="Toggle copilot sidebar"
              >
                <FiChevronRight size={20} />
              </button>
            )}
          </>
        )}
        
        <h2 className="font-semibold text-gray-200 text-sm truncate">
          {selectedConversation ? selectedConversation.customer : 'Select a conversation'}
        </h2>
      </div>
      
      <div className="flex items-center gap-3 text-gray-400">
        {!isMobile && (
          <>
            <button 
              className={`hover:text-white ${starred ? 'text-yellow-400' : ''}`}
              onClick={() => setStarred(!starred)}
              aria-label={starred ? 'Unstar conversation' : 'Star conversation'}
            >
              <FiStar size={16} />
            </button>
            <button className="hover:text-white" aria-label="More options">
              <FiMoreHorizontal size={16} />
            </button>
          </>
        )}
        <button className="hover:text-white" aria-label="Toggle columns">
          <FiColumns size={16} />
        </button>
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
        {!isMobile && (
          <button className="hover:text-white" aria-label="Inbox">
            <FiInbox size={16} />
          </button>
        )}
      </div>
    </header>
  )
}

export default MessengerHeader