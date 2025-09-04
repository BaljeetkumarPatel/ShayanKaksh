import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import RecommendedHotels from '../components/RecommendedHotels'

const Home=()=>{
    return(
        <div >
            <Hero />
            <RecommendedHotels />
            <FeaturedDestination />
            <ExclusiveOffer />
            <Testimonial />
            <NewsLetter />
            {/* <Footer /> */}

        </div>
    )
}
export default Home