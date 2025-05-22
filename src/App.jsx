import { useState, useEffect } from 'react'
import InboxSidebar from './components/Inbox/InboxSidebar'
import MessengerHeader from './components/Messenger/MessengerHeader'
import ConversationList from './components/Messenger/ConversationList'
import CopilotSidebar from './components/Copilot/CopilotSidebar'
import { useDarkMode } from './hooks/useDarkMode'
import { useResponsive } from './hooks/useResponsive'
import { useConversations } from './hooks/useConversations'

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const { isMobile } = useResponsive()
  const {
    conversations,
    selectedConversation,
    setSelectedConversation,
    activeInbox,
    setActiveInbox,
    markAsRead
  } = useConversations()

  const [activeTab, setActiveTab] = useState('copilot')
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile)
  const [rightSidebarOpen, setRightSidebarOpen] = useState(!isMobile)

  // Close both sidebars when selecting conversation on mobile
  useEffect(() => {
    if (isMobile && selectedConversation) {
      setLeftSidebarOpen(false)
      setRightSidebarOpen(false)
    }
  }, [selectedConversation, isMobile])

  return (
    <div className={`flex flex-col h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Sidebar (Inbox) */}
        <InboxSidebar 
          activeInbox={activeInbox}
          setActiveInbox={setActiveInbox}
          isMobile={isMobile} 
          sidebarOpen={leftSidebarOpen}
          setSidebarOpen={setLeftSidebarOpen}
          onClose={() => setLeftSidebarOpen(false)}
        />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <MessengerHeader 
            toggleDarkMode={toggleDarkMode}
            selectedConversation={selectedConversation}
            isMobile={isMobile}
            onLeftSidebarToggle={() => setLeftSidebarOpen(!leftSidebarOpen)}
            onRightSidebarToggle={() => setRightSidebarOpen(!rightSidebarOpen)}
          />
          <ConversationList 
            conversations={conversations}
            selectedConversation={selectedConversation}
            setSelectedConversation={setSelectedConversation}
            markAsRead={markAsRead}
            isMobile={isMobile}
          />
        </div>

        {/* Right Sidebar (Copilot) */}
        <CopilotSidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMobile={isMobile}
          sidebarOpen={rightSidebarOpen}
          setSidebarOpen={setRightSidebarOpen}
          selectedConversation={selectedConversation}
          onClose={() => setRightSidebarOpen(false)}
        />

        {/* Overlay for mobile when sidebar is open */}
        {(leftSidebarOpen || rightSidebarOpen) && isMobile && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => {
              setLeftSidebarOpen(false)
              setRightSidebarOpen(false)
            }}
          />
        )}
      </div>
    </div>
  )
}

export default App