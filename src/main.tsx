import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.tsx'

import "./globalStyles.scss";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Experience />
  </React.StrictMode>,
)
