import { FiMessageSquare, FiMail } from 'react-icons/fi'

const ViewsSection = () => {
  const views = [
    { id: 'messenger', icon: <FiMessageSquare />, name: 'Messenger', count: 1 },
    { id: 'email', icon: <FiMail />, name: 'Email', count: 1 }
  ]

  return (
    <ul className="space-y-1">
      {views.map((view) => (
        <li key={view.id}>
          <button className="w-full flex items-center justify-between p-2 rounded-md text-sm text-gray-400 hover:bg-gray-800 hover:text-gray-200">
            <div className="flex items-center gap-2">
              <span>{view.icon}</span>
              <span>{view.name}</span>
            </div>
            <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-700 text-gray-300">
              {view.count}
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ViewsSection