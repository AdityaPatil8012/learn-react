import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './Counter.jsx'
import ReactProps from './React-Props.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Counter />
    <ReactProps />
  </React.StrictMode>,
)
