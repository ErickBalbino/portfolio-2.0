import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/layout/Header'
import Home from './components/pages/Home'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>

      <Footer />
    </Router>
  )
}
