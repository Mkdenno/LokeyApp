
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Product from './components/Product'

function App() {

  return (
    <>
    <BrowserRouter>

    <NavBar/>
    <Home/>
    <Services/>
    <About/>
    <Product/>

    </BrowserRouter>
    </>
  )
}

export default App
