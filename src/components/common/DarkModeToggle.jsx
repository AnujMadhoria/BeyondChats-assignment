import { FiMoon, FiSun } from 'react-icons/fi'

const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <button 
      className="hover:text-white"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      <FiMoon size={16} />
    </button>
  )
}

export default DarkModeToggle