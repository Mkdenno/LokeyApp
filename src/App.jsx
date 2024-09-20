
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Product from './components/Product'
import Blog from './components/Blog'
import NewsLetter from './components/NewsLetter'
import MyFooter from './components/MyFooter'

function App() {

  return (
    <>
    <BrowserRouter>

    <NavBar/>
    <Home/>
    <Services/>
    <About/>
    <Product/>
    <Blog/>
    <NewsLetter/>
    <MyFooter/>

    </BrowserRouter>
    </>
  )
}

export default App
