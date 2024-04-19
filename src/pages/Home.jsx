import React from 'react'
import NavigationBar from './Navbar.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import Carrousel from './Carrousel.jsx'

//Estilos de Bootstrap-React
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <NavigationBar />
      {/* <Carrousel /> */}
      <Body />
      <Footer />
    </div>
  )
}

export default Home