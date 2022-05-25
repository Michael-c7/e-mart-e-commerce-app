import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// where the contexts will go ( surround the app)
ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
)