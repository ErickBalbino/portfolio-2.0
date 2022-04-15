import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/layout/Header'
import Home from './components/pages/Home'

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}
