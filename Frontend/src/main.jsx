import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import { ChatInfoContextProvider } from './context/ChatInfoContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChatInfoContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </ChatInfoContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
