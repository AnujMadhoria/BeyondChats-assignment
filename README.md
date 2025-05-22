Fin AI Agent UI with Copilot

Overview
Fin AI Agent UI is a modern customer support dashboard featuring an AI-powered Copilot assistant. This responsive web application provides support teams with an intuitive interface to manage customer conversations across multiple channels with AI assistance.

Key Features
Three-panel interface with inbox, conversation list, and AI Copilot

Responsive design that works on desktop, tablet, and mobile

Dark/light mode toggle with system preference detection

AI Copilot assistant with conversation history

Real-time messaging interface

Conversation management with status tracking

Fullscreen mode for the Copilot panel

Technologies Used
Frontend: React.js with Vite

Styling: Tailwind CSS

Icons: React Icons (Feather icons)

State Management: React Hooks

Build Tool: Vite

Installation
Clone the repository:

bash
git clone https://github.com/your-username/fin-ai-agent-ui.git
cd fin-ai-agent-ui
Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Open your browser to:

http://localhost:3000
Project Structure
/src
  /components
    /Copilot       # Copilot sidebar components
    /Inbox         # Inbox sidebar components
    /Messenger     # Main conversation components
    /common        # Shared components
  /hooks           # Custom React hooks
  /data            # Mock data
  /styles          # Global styles
  App.jsx          # Main application component
  main.jsx         # Application entry point
Available Scripts
npm run dev: Starts the development server

npm run build: Builds the app for production

npm run lint: Runs ESLint

npm run preview: Previews the production build

Configuration
The application can be configured through these files:

tailwind.config.js: Tailwind CSS configuration

vite.config.js: Vite build configuration

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/your-feature)

Open a Pull Request
