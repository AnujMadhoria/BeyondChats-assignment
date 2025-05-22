import { useState } from 'react'
import { 
  FiInbox, 
  FiAtSign, 
  FiEdit2, 
  FiUsers, 
  FiUser, 
  FiTrello,
  FiMessageSquare,
  FiMail,
  FiChevronDown,
  FiChevronRight,
  FiSearch,
  FiPlus,
  FiSettings,
  FiX
} from 'react-icons/fi'
import ViewsSection from './ViewsSection'

const InboxSidebar = ({ 
  activeInbox, 
  setActiveInbox,
  isMobile, 
  sidebarOpen, 
  setSidebarOpen ,
  onClose
}) => {
  const [viewsExpanded, setViewsExpanded] = useState(true)

  const inboxItems = [
    { id: 'inbox', icon: <FiInbox />, name: 'Your inbox', count: 4 },
    { id: 'mentions', icon: <FiAtSign />, name: 'Mentions', count: 0 },
    { id: 'created', icon: <FiEdit2 />, name: 'Created by you', count: 0 },
    { id: 'all', icon: <FiUsers />, name: 'All', count: 4 },
    { id: 'unassigned', icon: <FiUser />, name: 'Unassigned', count: 0 },
    { id: 'dashboard', icon: <FiTrello />, name: 'Dashboard' }
  ]

  const toggleViews = () => {
    setViewsExpanded(!viewsExpanded)
  }

  return (
     <aside className={`bg-gray-900 flex flex-col w-64 h-full absolute md:relative z-40 md:z-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300`}>
      {/* Header with close button for mobile */}
      <div className="p-3 border-b border-gray-800 flex items-center justify-between">
        <h2 className="font-semibold text-gray-200">Inbox</h2>
        <div className="flex items-center gap-2">
          {isMobile && (
            <button 
              className="text-gray-400 hover:text-white"
              onClick={onClose}
              aria-label="Close sidebar"
            >
              <FiX size={20} />
            </button>
          )}
          <button className="text-gray-400 hover:text-white">
            <FiSearch size={16} />
          </button>
          <button className="w-5 h-5 rounded-full border border-gray-400 text-gray-400 flex items-center justify-center hover:bg-gray-800">
            <FiPlus size={12} />
          </button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2 space-y-1">
          {inboxItems.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full flex items-center justify-between p-2 rounded-md text-sm ${activeInbox === item.id ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'}`}
                onClick={() => setActiveInbox(item.id)}
              >
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">{item.icon}</span>
                  <span>{item.name}</span>
                </div>
                {item.count !== undefined && (
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeInbox === item.id ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
                    {item.count}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="p-3 border-t border-gray-800">
          <div className="flex items-center justify-between text-xs text-gray-400 font-medium mb-2">
            <span>Fin AI Agent</span>
            <button className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-800">
              <FiPlus size={10} />
            </button>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400 font-medium mb-2">
            <span>Teammates</span>
            <button className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-800">
              <FiPlus size={10} />
            </button>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
            <span>Team inboxes</span>
            <button className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-800">
              <FiPlus size={10} />
            </button>
          </div>
        </div>

        <div className="p-3">
          <button 
            className="flex items-center justify-between w-full text-xs text-gray-400 font-medium mb-1"
            onClick={toggleViews}
          >
            <span>Views</span>
            {viewsExpanded ? <FiChevronDown size={14} /> : <FiChevronRight size={14} />}
          </button>
          
          {viewsExpanded && <ViewsSection />}
        </div>

        <div className="p-3 mt-auto">
          <div className="bg-white text-black rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 rounded-full border border-black flex items-center justify-center font-semibold">
                i
              </div>
              <span className="font-semibold text-sm">Get set up</span>
            </div>
            <p className="text-xs">
              Set up channels to connect with your customers
            </p>
          </div>
        </div>
      </nav>

      <div className="p-3 border-t border-gray-800 flex items-center gap-2 text-sm text-gray-400 hover:bg-gray-800 cursor-pointer">
        <FiSettings size={14} />
        <span>Manage</span>
      </div>
    </aside>
  )
}

export default InboxSidebar