import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import DictionaryApp from './components/DictionaryApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DictionaryApp />
  </StrictMode>,
)
