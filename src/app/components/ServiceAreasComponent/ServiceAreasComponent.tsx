import React from 'react'
import Showcase from '../Showcase/Showcase'
import Image from 'next/image'
import QuickContact from '../sharedComponents/QuickContact/QuickContact'
import img from '../../../assets/images/contactusbanner.jpg'
import Link from 'next/link'

function ServiceAreasComponent() {
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
              <div className='rounded-lg border hover:shadow-[0px_2px_4px_2px_#00000040] transition-[1s] p-7'>
                <Image src='/western-australia.png' width={348} height={280} alt='new south wales' className='w-[100%] h-auto' />
                <h5 className='text-[20px] leading-[27px] tracking-[1.2%] font-bold text-primaryColor py-3'>Western Australia</h5>
                <p className='pb-5'>Perth, East Perth, West Perth, Leederville, North Perth, Mount Hawthorn, Subiaco, Daglish, Shenton Park, Scarborough, Innaloo, Osborne Park, Balcatta, Karrinyup, Joondalup, 
                  Hillarys, Craigie, Mullaloo, Wanneroo, Clarkson, Butler, </p>
                <Link href='/service-areas/1'>
                  <button className='py-3 px-7 font-semibold text-xl border-[1px] rounded-lg border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white transition-[.5z]'>
                    See More
                  </button>
                </Link>
              </div>
              <div className='rounded-lg border hover:shadow-[0px_2px_4px_2px_#00000040] transition-[1s] p-7'>
                <Image src='/victoria.png' width={348} height={280} alt='new south wales' className='w-[100%] h-auto' />
                <h5 className='text-[20px] leading-[27px] tracking-[1.2%] font-bold text-primaryColor py-3'>Victoria</h5>
                <p className='pb-5'>Aberfeldie, Abbotsford, Airport West, Alphington, Altona, Altona Meadows, Altona North, Ardeer, Armadale, Arthurs Seat, Ashburton, Ashwood, Aspendale, Aspendale Gardens, Avondale 
                  Heights, Bacchus Marsh, Balaclava, Balwyn, Balwyn  </p>
                <Link href='/service-areas/1'>
                  <button className='py-3 px-7 font-semibold text-xl border-[1px] rounded-lg border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white transition-[.5z]'>
                    See More
                  </button>
                </Link>
              </div>
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
              <div className='rounded-lg border hover:shadow-[0px_2px_4px_2px_#00000040] transition-[1s] p-7'>
                <Image src='/western-australia.png' width={348} height={280} alt='new south wales' className='w-[100%] h-auto' />
                <h5 className='text-[20px] leading-[27px] tracking-[1.2%] font-bold text-primaryColor py-3'>Western Australia</h5>
                <p className='pb-5'>Perth, East Perth, West Perth, Leederville, North Perth, Mount Hawthorn, Subiaco, Daglish, Shenton Park, Scarborough, Innaloo, Osborne Park, Balcatta, Karrinyup, Joondalup, 
                  Hillarys, Craigie, Mullaloo, Wanneroo, Clarkson, Butler, </p>
                <Link href='/service-areas/1'>
                  <button className='py-3 px-7 font-semibold text-xl border-[1px] rounded-lg border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white transition-[.5z]'>
                    See More
                  </button>
                </Link>
              </div>
              <div className='rounded-lg border hover:shadow-[0px_2px_4px_2px_#00000040] transition-[1s] p-7'>
                <Image src='/victoria.png' width={348} height={280} alt='new south wales' className='w-[100%] h-auto' />
                <h5 className='text-[20px] leading-[27px] tracking-[1.2%] font-bold text-primaryColor py-3'>Victoria</h5>
                <p className='pb-5'>Aberfeldie, Abbotsford, Airport West, Alphington, Altona, Altona Meadows, Altona North, Ardeer, Armadale, Arthurs Seat, Ashburton, Ashwood, Aspendale, Aspendale Gardens, Avondale 
                  Heights, Bacchus Marsh, Balaclava, Balwyn, Balwyn  </p>
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