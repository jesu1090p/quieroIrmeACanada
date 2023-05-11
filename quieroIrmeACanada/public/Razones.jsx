import React from 'react'
import ReactDOM from 'react-dom/client'
import RazonesApp from './razonesApp.jsx'
import '../src/customStyles/navbar.css'

ReactDOM.createRoot(document.getElementById('razones')).render(
  <React.StrictMode>
    <RazonesApp />
  </React.StrictMode>,
)