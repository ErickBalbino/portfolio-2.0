import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import NotFound from './components/pages/NotFound'

export default function PageRoutes() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  )
}
