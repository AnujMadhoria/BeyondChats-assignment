import { FiMessageSquare, FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi'

const typeIcons = {
  messenger: <FiMessageSquare />,
  email: <FiMail />,
  phone: <FiPhone />,
  whatsapp: <FiMessageCircle />
}

const typeColors = {
  messenger: 'bg-blue-500',
  email: 'bg-green-500',
  phone: 'bg-gray-500',
  whatsapp: 'bg-green-400'
}

const ConversationItem = ({ conversation, isSelected, onClick }) => {
  return (
    <li
      className={`p-3 cursor-pointer ${isSelected ? 'bg-gray-800' : 'hover:bg-gray-900'} ${conversation.unread ? 'font-semibold' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <div className={`w-6 h-6 rounded-full ${typeColors[conversation.type]} flex items-center justify-center text-white`}>
          {typeIcons[conversation.type]}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm truncate">{conversation.customer}</h3>
          <p className={`text-xs truncate ${isSelected ? 'text-gray-300' : 'text-gray-400'}`}>
            {conversation.preview}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs text-gray-500">{conversation.time}</span>
          {conversation.unread && !isSelected && (
            <span className="w-2 h-2 rounded-full bg-blue-500 mt-1"></span>
          )}
        </div>
      </div>
    </li>
  )
}

export default ConversationItem