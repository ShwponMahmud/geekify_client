import React from 'react'
import OurPopularServices from '../OurPopularServices/OurPopularServices'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import BookOnlineGetOff from '../BookOnlineGetOff/BookOnlineGetOff'
import CustomerSpeakForUs from '../CustomerSpeakForUs/CustomerSpeakForUs'
import GeekifyAppStore from '../GeekifyAppStore/GeekifyAppStore'
import OurLatestBlogs from '../OurLatestBlogs/OurLatestBlogs'
import VisitScamWatch from '../VisiteScamWatch/VisitScamWatch'
import HomeSliderShowcase from '../HomeSliderShowcase/HomeSliderShowcase'

function HomePage() {
  return (
    <div className='container mx-auto py-5'>
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