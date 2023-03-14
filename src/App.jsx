import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import About from './views/About'
import Contact from './views/Contact'
import Home from './views/Home'
import NotFound from './views/NotFound'
import ServiceDetail from './views/ServiceDetail'
import Services from './views/Services'

const App = () => {
  return (
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/services/:id/:category" element={<ServiceDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route index path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App