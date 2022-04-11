import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home'
import Header from './components/layout/Header'

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
