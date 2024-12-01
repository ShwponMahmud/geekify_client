import React from 'react'
import Image from 'next/image'
import QuickContact from '../sharedComponents/QuickContact/QuickContact'
import Showcase from '../Showcase/Showcase'

function AboutUs() {
  return (
    <>
      <Showcase backgroundImage='/about-us-banner.png' title='Browse Our' highlights='Resources' paragraph='One-stop solution for your IT needs, Order any service, anytime. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam quas nihil consequuntur consequatur deleniti quae quos neque ullam natus tempora.
      '/>

      <div>
        <div className='container mx-auto'>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-28 py-10 md:py-16 lg:py-28'>
              <div>
                <h3 className='text-[48px] leading-[58px] font-semibold pb-7'>The Geekify <span className='text-primaryColor'>Story</span></h3>
                <p className='pb-5 '>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </p>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='bg-primaryColor p-3 md:p-5 lg:p-7 text-white rounded-[10px]'>
                  <h6 className='text-[34px] leading-10 font-medium pb-5'>09+</h6>
                  <p className='text-[22px] leading-[25px] font-semibold'>Years Of Exprience</p>
                </div>
                <div className='border-[1px] border-[#F2F2F2] p-3 md:p-5 lg:p-7 rounded-[10px]'>
                  <h6 className='text-[34px] leading-10 text-primaryColor font-medium pb-5'>40+</h6>
                  <p className='text-[22px] leading-[25px] font-semibold'>Professional Experts</p>
                </div>
                <div className='bg-primaryColor p-3 md:p-5 lg:p-7 text-white rounded-[10px]'>
                  <h6 className='text-[34px] leading-10 font-medium pb-5'>4,000+</h6>
                  <p className='text-[22px] leading-[25px] font-semibold'>Client Served</p>
                </div>
                <div className='border-[1px] border-[#F2F2F2] p-3 md:p-5 lg:p-7 rounded-[10px]'>
                  <h6 className='text-[34px] leading-10 text-primaryColor font-medium pb-5'>95%</h6>
                  <p className='text-[22px] leading-[25px] font-semibold'>Retention Rate</p>
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
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-28 pb-10 md:pb-16 lg:pb-28'>
              <div>
                <Image src='/about-us-1.png' width={525} height={549} alt='about us image' className='w-full h-auto' />
              </div>

              <div>
                <h3 className='text-[48px] leading-[58px] font-semibold pb-7'>What <span className='text-primaryColor'>We’re About</span></h3>
                <p className='pb-5 '>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                  <div className='bg-primaryColor p-7 text-white rounded-[10px]'>
                    <h6 className='text-[34px] leading-10 font-medium pb-5'>Missioon</h6>
                    <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of type</p>
                  </div>
                  <div className='border-[1px] border-[#F2F2F2] p-7 rounded-[10px]'>
                    <h6 className='text-[34px] leading-10 text-primaryColor font-medium pb-5'>Vision</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of type</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='pb-10 md:pb-16 lg:pb-28'>
              <h3 className='text-[42px] leading-[50px] font-semibold pb-8'>How we approved by our customer</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>
        <QuickContact title='Need Tech Service?'/>
      </div>
    </>
  )
}

export default AboutUs