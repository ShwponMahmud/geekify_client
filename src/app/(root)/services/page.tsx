import Image from 'next/image';
import React from 'react'

function page() {
  return (
    <div>
      <div className="container mx-auto my-20">
        <div className="flex justify-center items-center mb-8 md:mb-[52px]">
          <input
            type="search"
            className="w-[100%] md:w-[50%] lg:w-[30%] py-[6px] px-5 border-[3px] border-primaryColor rounded-l-[10px] font-semibold text-[20px] leading-[34px] text-[#20313B] focus:outline-none"
            placeholder="Find your service here"
          />
          <button
            style={{ clipPath: "polygon(100% -290%, 0% 100%, 100% 100%)" }}
            className="py-[13.6px] w-[180px] text-right ml-[-50px] px-8 bg-primaryColor text-white font-bold text-[26px] leading-[25px] rounded-r-[10px] clip-path-[polygon(100%_25%,0%_100%,100%_100%)]"
          >
            Search
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
          <div className="card border rounded-[20px]">
            <Image
              src="/service-image.png"
              width={373}
              height={299}
              alt="service card image"
              className='w-[100%] h-auto'
            />
            <h5 className="text-[26px] leading-[30px] tracking-[.3px] font-bold text-[#231F20] p-[30px]">
              Anti-Virus Installation Service
            </h5>
            <button className='text-[21px] leading-6 font-semibold text-white bg-primaryColor rounded-[16px] py-[18px] px-5 ml-[30px] mb-[33px]'>Explore More</button>
          </div>
          <div className="card border rounded-[20px]">
            <Image
              src="/service-image.png"
              width={373}
              height={299}
              alt="service card image"
              className='w-[100%] h-auto'
            />
            <h5 className="text-[26px] leading-[30px] tracking-[.3px] font-bold text-[#231F20] p-[30px]">
              Anti-Virus Installation Service
            </h5>
            <button className='text-[21px] leading-6 font-semibold text-white bg-primaryColor rounded-[16px] py-[18px] px-5 ml-[30px] mb-[33px]'>Explore More</button>
          </div>
          <div className="card border rounded-[20px]">
            <Image
              src="/service-image.png"
              width={373}
              height={299}
              alt="service card image"
              className='w-[100%] h-auto'
            />
            <h5 className="text-[26px] leading-[30px] tracking-[.3px] font-bold text-[#231F20] p-[30px]">
              Anti-Virus Installation Service
            </h5>
            <button className='text-[21px] leading-6 font-semibold text-white bg-primaryColor rounded-[16px] py-[18px] px-5 ml-[30px] mb-[33px]'>Explore More</button>
          </div>
          <div className="card border rounded-[20px]">
            <Image
              src="/service-image.png"
              width={373}
              height={299}
              alt="service card image"
              className='w-[100%] h-auto'
            />
            <h5 className="text-[26px] leading-[30px] tracking-[.3px] font-bold text-[#231F20] p-[30px]">
              Anti-Virus Installation Service
            </h5>
            <button className='text-[21px] leading-6 font-semibold text-white bg-primaryColor rounded-[16px] py-[18px] px-5 ml-[30px] mb-[33px]'>Explore More</button>
          </div>
          <div className="card border rounded-[20px]">
            <Image
              src="/service-image.png"
              width={373}
              height={299}
              alt="service card image"
              className='w-[100%] h-auto'
            />
            <h5 className="text-[26px] leading-[30px] tracking-[.3px] font-bold text-[#231F20] p-[30px]">
              Anti-Virus Installation Service
            </h5>
            <button className='text-[21px] leading-6 font-semibold text-white bg-primaryColor rounded-[16px] py-[18px] px-5 ml-[30px] mb-[33px]'>Explore More</button>
          </div>
          <div className="card border rounded-[20px]">
            <Image
              src="/service-image.png"
              width={373}
              height={299}
              alt="service card image"
              className='w-[100%] h-auto'
            />
            <h5 className="text-[26px] leading-[30px] tracking-[.3px] font-bold text-[#231F20] p-[30px]">
              Anti-Virus Installation Service
            </h5>
            <button className='text-[21px] leading-6 font-semibold text-white bg-primaryColor rounded-[16px] py-[18px] px-5 ml-[30px] mb-[33px]'>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page