import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import Header from './components/home/Header.jsx'
import Hero from './components/home/Hero.jsx'
import Footer from './components/Footer.jsx'
import NoPage from './components/NoPage.jsx'
import Courses from './components/courses/Courses.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/header' element={<Header />}></Route>
      <Route path='/hero' element={<Hero />}></Route>
      <Route path='/couses' element={<Courses />}></Route>
      <Route path='/footer' element={<Footer />}></Route>


      <Route path='*' element={<NoPage />}></Route>
    </Routes>
    <App />
  </BrowserRouter>

  </StrictMode>,
)
