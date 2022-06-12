import React from 'react'
import ReactDOM from 'react-dom/client'
import Widget from './components/Widget'

import "./global.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Widget />
  </React.StrictMode>
)
