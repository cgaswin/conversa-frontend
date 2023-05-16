import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path= "/" element={<Landing/>}/>
      <Route path= "/login" element={<Login/>}/>
      <Route path= "/signup" element={<Signup/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
