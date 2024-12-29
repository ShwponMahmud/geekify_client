import React from 'react'
import Image from 'next/image'
import QuickContact from '../sharedComponents/QuickContact/QuickContact'
import Showcase from '../Showcase/Showcase'

function AboutUs() {
  return (
    <>
      <Showcase backgroundImage='/about-us-banner.png' title='About' highlights='Us' paragraph='Geekify is the fastest growing Micro tech service provider who offers 360 degrees of IT solutions.
        Learn more about the origins of Australia’s favourite Geeks.'/>

      <div>
        <div className='container mx-auto'>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 xl:gap-28 py-8 md:py-14 lg:py-20 xl:py-28'>
              <div>
                <h3 className='text-3xl md:text-3xl lg:text-4xl font-semibold pb-4 md:pb-7'>The Geekify <span className='text-primaryColor'>Story</span></h3>
                <p className='pb-3 lg:py-5'>
                  Geekify was established in the early 2017 by the endeavor of few select talented individuals who aimed to rise as one of the top computer repair company in Australia. Initially starting out as 
                  just a repair company, Geekify has branched out to provide various services of different fields which has started to make the company truly dynamic.
                </p>
                <p className='pb-3 lg:py-5'>
                  With a mentality of taking every obstacle in our client’s tech life as a challenge, we dispatch our geeks with one mission in mind, provide flexibility and over the top services in the least amount 
                  of time possible for the optimal convenience of our customers
                </p>
                <p>
                  We try to get each and every customer demands right and through a well-established communication system, for now this is done through our 1300 894 946 which you can look up over our contacts page, 
                  but to outdo ourselves, we soon plan on implementing a call center which will be operated by our geeks 24/7 for optimally reaching out to all of our clients who seek our services.
                </p>
              </div>

              <div className='grid grid-cols-2 xl:grid-cols-3 gap-5'>
                <div className='bg-primaryColor p-3 md:p-5 lg:p-7 text-white rounded-[10px]'>
                  <h6 className='text-[34px] leading-10 font-medium pb-5'>09+</h6>
                  <p className='text-[22px] leading-[25px] font-semibold'>Years Of Exprience</p>
                </div>
                <div className='border-[1px] border-[#F2F2F2] p-3 md:p-5 lg:p-7 rounded-[10px]'>
                  <h6 className='text-[34px] leading-10 text-primaryColor font-medium pb-5'>40+</h6>
                  <p className='text-[22px] leading-[25px] font-semibold'>Professional Experts</p>
                </div>
                <div className='xxl:bg-primaryColor xxl:text-white p-3 md:p-5 lg:p-7 border-[1px] border-[#F2F2F2] rounded-[10px]'>
                  <h6 className='text-[34px] leading-10 text-primaryColor xxl:text-white font-medium pb-5'>4,000+</h6>
                  <p className='text-[22px] leading-[25px] font-semibold'>Client Served</p>
                </div>
                <div className='bg-primaryColor text-white xxl:bg-transparent xxl:text-primaryColor xxl:border-[1px] xxl:border-[#F2F2F2] p-3 md:p-5 lg:p-7 rounded-[10px]'>
                  <h6 className='text-[34px] leading-10 font-medium pb-5'>95%</h6>
                  <p className='text-[22px] leading-[25px] xxl:text-black font-semibold'>Retention Rate</p>
                </div>
                <div className='bg-primaryColor p-3 md:p-5 lg:p-7 text-white rounded-[10px]'>
                  <h6 className='text-[34px] leading-10 font-medium pb-5'>75+</h6>
                  <p className='text-[22px] leading-[25px] font-semibold'>City Service</p>
                </div>
                <div className='border-[1px] border-[#F2F2F2] p-3 md:p-5 lg:p-7 rounded-[10px]'>
                  <h6 className='text-[34px] leading-10 text-primaryColor font-medium pb-5'>99%</h6>
                  <p className='text-[22px] leading-[25px] font-semibold'>Satisfaction Score</p>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 xxl:gap-28 pb-10 md:pb-16 lg:pb-28'>
              <div>
                <Image src='/about-us-1.png' width={525} height={549} alt='about us image' className='w-full h-auto' />
              </div>

              <div>
                <h3 className='text-3xl md:text-3xl lg:text-4xl font-semibold pb-4 md:pb-7'>What <span className='text-primaryColor'>We’re About</span></h3>
                <p className='pb-3 md:pb-5 lg:text-xl'>
                  Our core values have always been honesty and integrity accompanied by experience and individuality.
                </p>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
                  <div className='bg-primaryColor p-7 text-white rounded-[10px]'>
                    <h6 className='text-[34px] leading-10 font-medium pb-5'>Mission</h6>
                    <p>Our mission is to To provide exceptional services by pursuing business through creativity and innovation and build long term relationships with our trusted customers based on honesty.</p>
                  </div>
                  <div className='border-[1px] border-[#F2F2F2] p-7 rounded-[10px]'>
                    <h6 className='text-[34px] leading-10 text-primaryColor font-medium pb-5'>Vision</h6>
                    <p>Our vision is to rise as one of the most satisfactory companies in Australia in terms of services and win the hearts of our customers by providing more than their expectation.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='pb-10 md:pb-16 lg:pb-28'>
              <h3 className='text-3xl md:text-3xl lg:text-4xl font-semibold pb-4 md:pb-7'>How we approved by our customer</h3>
              <p className='font-bold text-xl'>We assure quality services for a number of key reasons as approved by our customers. To mention some of them:</p>
              <ul className='list-disc ml-8 mt-5'>
                <li>Our geeks are honest and hardworking.</li>
                <li>Our geeks are trained to suit customers every requirement and are all equipped with great communication skills.</li>
                <li>Customer relations have always been a top priority of Geekify and keeping that in mind, we have established a team specially for customer care services.</li>
                <li>We strive to give you what is best for you while also maintaining an affordable range of services.</li>
                <li>You are important to us; thus, we are always available for maintenance related to any of our previous services provided to you, remember our Geeks are just one call away!</li>
              </ul>
            </div>
            <div className='pb-10 md:pb-16 lg:pb-28'>
              <h3 className='text-3xl md:text-3xl lg:text-4xl font-semibold pb-4 md:pb-7'>Always on the job</h3>
              <p className='pb-5'>No matter the type of tech trouble you have, whether it be repair, installation, troubleshooting, security or even consultation and regular maintenance work, our geeks 
                leave no corner unattended – and no customer unhappy!</p>
              <p>
                With that in mind, if you would like solutions to your tech troubles lighting fast, then you have come to the right decision!
              </p>
            </div>
          </div>
        </div>
        <QuickContact title='Need Tech Service?'/>
      </div>
    </>
  )
}

export default AboutUs