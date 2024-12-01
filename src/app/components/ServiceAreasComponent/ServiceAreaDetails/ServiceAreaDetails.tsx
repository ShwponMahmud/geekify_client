import React from 'react'
import QuickContact from '../../sharedComponents/QuickContact/QuickContact'
import Image from 'next/image'
import Showcase from '../../Showcase/Showcase'

function ServiceAreaDetails() {
  return (
    <>
      <Showcase backgroundImage='/remote-support-banner.png' title='Our Service' highlights='Areas' paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry Lorem Ipsum has been the industry'/>
      <div>
        <div className='container mx-auto py-28'>
          <div>
            <div>
              <h2 className='text-[42px] font-semibold leading-[54px] pb-7'>On-site Computer and PC repairs in Your Area - <span className='text-primaryColor'>we've got you covered!</span></h2>
              <p className='text-xl'>We are locally based in the Camden area and our computer technicians are ready to resolve any IT problem you may have - to find a solution that works and is relegable. No matter if you have an
                old MacBook or a PC that needs repair - our friendly experts at Geekify can provide effective solutions for both personal and work devices.</p>
            </div>
          </div>
        </div>
        <QuickContact title='Tell us your need' />
        <div className='container mx-auto py-28'>
          <div>
            <h2 className='text-[42px] font-semibold leading-[54px] pb-7'>Are you searching for a computer technician in your area?</h2>
            <p className='py-7 text-xl'>Geekify specializes in providing professional onsite computer help and PC services on the same day in Your Area . No matter where you are located in your region, whether it's the Upper North
              Shore, Parramatta, or even as far south as Sutherland, you can count on our reliable computer technicians to assist you.</p>
            <p className='text-xl'>Geekify specializes in providing professional onsite computer help and PC services on the same day in Your Area . No matter where you are located in your region, whether it's the Upper North
              Shore, Parramatta, or even as far south as Sutherland, you can count on our reliable computer technicians to assist you.</p>
          </div>

          <Image src='/brands-image.png' width={1300} height={500} alt='brands image' className='w-[100%] h-auto pt-28' />

          <div className='pt-28'>
            <h2 className='text-[42px] font-semibold leading-[54px] pb-7'>Are you searching for a computer technician in your area?</h2>
            <p className='py-7 text-xl'>Geekify specializes in providing professional onsite computer help and PC services on the same day in Your Area . No matter where you are located in your region, whether it's the Upper North
              Shore, Parramatta, or even as far south as Sutherland, you can count on our reliable computer technicians to assist you.</p>
            <p className='text-xl'>Geekify specializes in providing professional onsite computer help and PC services on the same day in Your Area . No matter where you are located in your region, whether it's the Upper North
              Shore, Parramatta, or even as far south as Sutherland, you can count on our reliable computer technicians to assist you.</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-28 items-center pt-28'>
            <div>
              <Image src='/details-2.png' width={588} height={490} alt='technitian image' className='w-[100%] h-auto' />
            </div>
            <div>
              <h4 className='text-[36px] font-medium leading-[46px] pb-6'>Here’s a list of some services we provide:</h4>
              <ul className='list-disc ml-6'>
                <li className='text-2xl font-medium'>Computer Set-Up And Install</li>
                <li className='text-2xl font-medium'>Computer Troubleshooting</li>
                <li className='text-2xl font-medium'>Virus And Spyware Removal</li>
                <li className='text-2xl font-medium'>Anti-Virus Installation</li>
                <li className='text-2xl font-medium'>Smartphone Device Setup</li>
                <li className='text-2xl font-medium'>Home Network WIFI Setup</li>
                <li className='text-2xl font-medium'>Email Account Setup</li>
                <li className='text-2xl font-medium'>And All Other Services Listed At The Website</li>
              </ul>
            </div>
          </div>
          <p className='pt-28 text-xl'>If you're worried that your tech issue is not included in our list, don't worry! We have successfully resolved a vast range of problems in the past, and we're 
            confident that we can find a solution for your issue too. And if we can't, our "no fix, no fee" policy ensures that you won't be charged.
            Whether you need assistance with a device or computer, don't hesitate to contact Geekify via phone or online form. Our affordable and competitive prices have 
            made us the go-to choice for computer repair services in Camden and across Australia.</p>
        </div>
      </div>
    </>
  )
}

export default ServiceAreaDetails