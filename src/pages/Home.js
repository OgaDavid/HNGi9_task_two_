import React from 'react'
import Profile from '../components/Profile'
import Links from '../components/Links'
import Social from '../components/Social'
import Footer from '../components/Footer'

const Home = () => {
    return ( 
        <div className="container">
            <Profile />
            <Links />
            <Social />
            <Footer />
      </div>
     );
}
 
export default Home;