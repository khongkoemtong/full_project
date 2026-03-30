import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Reachat from './pages/Rechat.jsx'
import Home from './pages/Home.jsx'
import Provide from './usecontext/Provide.jsx'
import Axios from './pages/Axios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Axios/>
  </StrictMode>,
)
