import { Route, Routes } from 'react-router-dom'
import './index.css'
import NavBar from "./layout/nav_bar/NavBar" 
import Home from './pages/home/Home' 
import Footer from './layout/Footer'
const App = () => {
  return (
    <>
      <header className='container'>
        <NavBar />
      </header>
      <Routes> 
        <Route path='/' element={<Home />} /> 
      </Routes>
      <footer className='container footer'>
        <Footer/>
      </footer>
    </>
  )
}

export default App
