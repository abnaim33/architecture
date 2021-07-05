import React from 'react'
import Navbar from '../CommonComponents/Navbar/Navbar'
import About from './About/About'
import Contact from './contact/Contact'
import './Home.css'
import HomeMain from './HomeMain/HomeMain'
import PropertyMenu from './PropertyMenu/PropertyMenu'
import WeOffer from './WeOffer/WeOffer'
import Footer from '../CommonComponents/footer/Footer'
function Home() {
    return (
        <div className="home">
            <div className="home_headerPart">
                <Navbar />
                <HomeMain />
            </div>

            <About />

            <WeOffer />

            <PropertyMenu />

            <Contact />
            <Footer />
        </div>
    )
}

export default Home
