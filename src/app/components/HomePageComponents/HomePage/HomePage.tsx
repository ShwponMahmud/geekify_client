import React from 'react'
import OurPopularServices from '../HomePageSectionComponents/OurPopularServices/OurPopularServices'
import WhyChooseUs from '../HomePageSectionComponents/WhyChooseUs/WhyChooseUs'
import BookOnlineGetOff from '../HomePageSectionComponents/BookOnlineGetOff/BookOnlineGetOff'
import CustomerSpeakForUs from '../HomePageSectionComponents/CustomerSpeakForUs/CustomerSpeakForUs'
import GeekifyAppStore from '../HomePageSectionComponents/GeekifyAppStore/GeekifyAppStore'
import OurLatestBlogs from '../HomePageSectionComponents/OurLatestBlogs/OurLatestBlogs'
import VisitScamWatch from '../HomePageSectionComponents/VisiteScamWatch/VisitScamWatch'
import HomeSliderShowcase from '../HomePageSectionComponents/HomeHeaderSlider/HomeSliderShowcase/HomeSliderShowcase'
import Navbar from '../../sharedComponents/Navbar/Navbar'

function HomePage() {
  return (
    <div className='mx-auto'>
      <Navbar/>
      <HomeSliderShowcase/>
      <OurPopularServices/>
      <WhyChooseUs/>
      <BookOnlineGetOff/>
      <CustomerSpeakForUs/>
      <GeekifyAppStore/>
      <OurLatestBlogs/>
      <VisitScamWatch/>
    </div>
  )
}

export default HomePage