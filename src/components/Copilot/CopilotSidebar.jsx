import { useState,useEffect  } from 'react'
import { FiSettings, FiMaximize2,FiMinimize2,  FiChevronDown, FiPlus, FiX } from 'react-icons/fi'
import CopilotChat from './CopilotChat'

const CopilotSidebar = ({ 
  activeTab, 
  setActiveTab, 
  isMobile, 
  sidebarOpen, 
  setSidebarOpen,
  selectedConversation,
  onClose
}) => {
  const [messages, setMessages] = useState([
    { 
      role: 'bot', 
      content: 'Copilot is here to help. How can I assist you today?' 
    }
  ])
  const [expandedSections, setExpandedSections] = useState({
    capabilities: true,
    privacy: true
  })
  const [isFullscreen, setIsFullscreen] = useState(false)
    const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
    setIsFullscreen(!isFullscreen)
  }
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  const handleSendMessage = (newMessage) => {
    const userMessage = { role: 'user', content: newMessage }
    setMessages([...messages, userMessage])
    
    // Simulate bot response
    setTimeout(() => {
      let response
      if (newMessage.toLowerCase().includes('help')) {
        response = 'I can help you with customer queries, transaction details, and account information.'
      } else if (selectedConversation) {
        response = `Regarding this ${selectedConversation.type} conversation, I can provide insights based on similar past cases.`
      } else {
        response = 'I can search our knowledge base to answer your question. Could you be more specific?'
      }
      setMessages(prev => [...prev, { role: 'bot', content: response }])
    }, 1000)
  }

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

 return (
    <aside className={`bg-gray-900 border-l border-gray-800 ${isFullscreen ? 'fixed inset-0 z-50 w-screen h-screen' : 'w-64 md:w-80'} flex flex-col h-full absolute right-0 md:relative z-40 md:z-auto ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 transition-transform duration-300`}>
      <header className="flex items-center gap-4 px-4 py-3 border-b border-gray-800">
        {isMobile && (
          <button 
            className="text-gray-400 hover:text-white mr-1"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <FiX size={20} />
          </button>
        )}
        
        <button
          className={`pb-1 text-sm ${activeTab === 'details' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-400 hover:text-white'}`}
          onClick={() => setActiveTab('details')}
        >
          Details
        </button>
        <button
          className={`pb-1 text-sm ${activeTab === 'copilot' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-400 hover:text-white'}`}
          onClick={() => setActiveTab('copilot')}
        >
          Copilot
        </button>
        
        <div className="flex items-center gap-2 ml-auto">
          <button className="text-gray-400 hover:text-white">
            <FiSettings size={16} />
          </button>
          <button 
            className="text-gray-400 hover:text-white"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? <FiMinimize2 size={16} /> : <FiMaximize2 size={16} />}
          </button>
         
        </div>
      </header>

      {activeTab === 'copilot' ? (
        <CopilotChat 
          messages={messages} 
          onSendMessage={handleSendMessage} 
          expandedSections={expandedSections}
          toggleSection={toggleSection}
              isFullscreen={isFullscreen}  
        />
      ) : (
        <div className="p-4 text-gray-300 overflow-y-auto flex-1">
          <h3 className="font-semibold mb-4">Conversation Details</h3>
          {selectedConversation ? (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-400">Customer</h4>
                <p className="mt-1">{selectedConversation.customer}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400">Type</h4>
                <p className="mt-1 capitalize">{selectedConversation.type}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400">Status</h4>
                <p className="mt-1 capitalize">{selectedConversation.status}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-400">Opened</h4>
                <p className="mt-1">{selectedConversation.time}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">No conversation selected</p>
          )}
        </div>
      )}
    </aside>
  )
}

export default CopilotSidebar