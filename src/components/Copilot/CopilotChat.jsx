import { useState, useRef, useEffect } from 'react'
import { FiSend, FiSliders, FiPlay, FiChevronDown, FiChevronRight } from 'react-icons/fi'

const CopilotChat = ({ 
  messages, 
  onSendMessage, 
  expandedSections, 
  toggleSection,
  isFullscreen  
}) => {
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    onSendMessage(inputValue)
    setInputValue('')
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const capabilities = [
    {
      icon: '🚀',
      text: 'Copilot can find answers to customer queries by searching your team\'s support content and past conversations.'
    },
    {
      icon: '💡',
      text: 'It can help you figure out what to do, using your team\'s internal articles.'
    },
    {
      icon: '📚',
      text: 'All it needs is knowledge. The more content you give, the more expert Copilot becomes.'
    },
    {
      icon: '🔒',
      text: 'Copilot conversations are only visible to you.'
    }
  ]

  return (
    <div className={`flex flex-col flex-1 overflow-hidden ${isFullscreen ? 'p-4' : ''}`}>
      <div className="p-4 overflow-y-auto flex-1">
        <h3 className="font-semibold text-center mb-4 text-gray-100">
          Copilot is here to help.
          <br />
          Just ask.
        </h3>
        
        {/* Capabilities Section */}
        <div 
          className="bg-gray-800 rounded-lg p-3 mb-4 cursor-pointer"
          onClick={() => toggleSection('capabilities')}
        >
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-gray-200">How Copilot can help</h4>
            {expandedSections.capabilities ? (
              <FiChevronDown className="text-gray-400" />
            ) : (
              <FiChevronRight className="text-gray-400" />
            )}
          </div>
          {expandedSections.capabilities && (
            <ul className="mt-2 space-y-3">
              {capabilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Chat Messages */}
        <div className="space-y-3 mb-6">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`rounded-md p-3 max-w-[90%] ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white ml-auto'
                  : 'bg-gray-800 text-gray-100'
              }`}
            >
              {msg.content}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <button className="mt-6 bg-gray-800 text-gray-200 font-medium text-sm rounded-lg py-2 px-4 hover:bg-gray-700 transition mx-auto flex items-center gap-2">
          <FiPlay size={14} />
          Copilot explained
        </button>
      </div>

      <footer className="border-t border-gray-800 p-3">
        <form
          className="flex items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 bg-gray-800"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="bg-transparent flex-1 outline-none placeholder:text-gray-500 text-sm text-gray-200"
            placeholder="Ask a question..."
            aria-label="Ask Copilot a question"
          />
          <button 
            type="button" 
            className="text-gray-500 hover:text-gray-300"
            aria-label="Filter options"
          >
            <FiSliders size={14} />
          </button>
          <button
            type="submit"
            className="text-gray-300 hover:text-white disabled:opacity-50"
            disabled={!inputValue.trim()}
            aria-label="Send message"
          >
            <FiSend size={16} />
          </button>
        </form>
      </footer>
    </div>
  )
}

export default CopilotChat