import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Header from './components/home/Header.jsx'
import Hero from './components/home/Hero.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Header />}></Route>
      <Route path='/hero' element={<Hero />}></Route>
      <Route path='/footer' element={<Footer />}></Route>
    </Routes>
    <App />
  </BrowserRouter>

  </StrictMode>,
)
