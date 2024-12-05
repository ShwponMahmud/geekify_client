import React from 'react'
import Showcase from '../Showcase/Showcase'
import Image from 'next/image'
import QuickContact from '../sharedComponents/QuickContact/QuickContact'
import img from '../../../assets/images/contactusbanner.jpg'
import Link from 'next/link'

interface allServiceAreas{
  image: string,
  name: string
}

async function ServiceAreasComponent() {
  let allServiceAreas: allServiceAreas [] = [];

  try{
    const response = await fetch("/nsw.json",
      {
        headers: {
          "content-type": "application/json",
          "Client-Secret": "secret"
        }
      },
    );
    if(!response.ok){
      throw new Error("Data is not fetched successfully")
    }
    const serviceAreas = await response.json()
    allServiceAreas = serviceAreas.data || [];
    console.log(allServiceAreas)
  } catch (error){
    console.error("Error fetching service areas", error)
  }
  
  return (
    <>
      <Showcase backgroundImage='/about-us-banner.png' title='Our Service' highlights='Areas' paragraph='Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry Lorem Ipsum has been the industry' />

      <div>
        <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-9 lg:gap-6 xl:gap-9'>
              <div className='rounded-lg border hover:shadow-[0px_2px_4px_2px_#00000040] transition-[1s] p-7'>
                <Image src='/new-south-wales.png' width={348} height={280} alt='new south wales' className='w-[100%] h-auto' />
                <h5 className='text-[20px] leading-[27px] tracking-[1.2%] font-bold text-primaryColor py-3'>New South Wales</h5>
                <p className='pb-5'>Greater Western Sydney, Inner West, Inner South, Northern Beaches, St George, Hills District, Eastern Suburbs, Ryde & Northern Suburbs, Sutherland Shire </p>
                <Link href='/service-areas/1'>
                  <button className='py-3 px-7 font-semibold text-xl border-[1px] rounded-lg border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white transition-[.5z]'>
                    See More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickContact title='If you don’t find your needed services, please contact with us '/>
    </>
  )
}

export default ServiceAreasComponent