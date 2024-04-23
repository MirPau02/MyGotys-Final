import React from 'react'
import NavigationBar from './Navbar.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'

//Estilos de Bootstrap-React
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Body />
      <Footer />
    </div>
  )
}

export default Home