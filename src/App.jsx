// import React from 'react'
import Navbar from './Component/Nav/Navbar'
import About from './Component/About/About'
import ServicePackage from './Component/Service Packages/ServicePackage'
// import Contact from './Component/Contact/Contact'
// import MyClient from './Component/My Client/MyClient'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden' >
      <Navbar></Navbar>
      <About/>
      <ServicePackage/>
      {/* <Contact/> */}
      {/* <MyClient/> */}
      <Footer/>
    </div>
  )
}

export default App
