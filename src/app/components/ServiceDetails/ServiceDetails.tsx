import Image from 'next/image'
import React from 'react'
import QuickContact from '../sharedComponents/QuickContact/QuickContact'
import { FaRegCheckCircle } from "react-icons/fa";
import Showcase from '../Showcase/Showcase';

function ServiceDetails() {
  return (
    <>
      <Showcase backgroundImage='/service-details.png' title='Browse Our' highlights='Resources' paragraph='One-stop solution for your IT needs, Order any service, anytime. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam quas nihil consequuntur consequatur deleniti quae quos neque ullam natus tempora.
      '/>
      <div>
        <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 xl:gap-20'>
            <div>
              <Image src="/details-1.png" width={565} height={506} alt='details iamge' className='w-[100%] h-[100%]' />
            </div>
            <div className=''>
              <h3 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-center pb-4 lg:pb-7'>How Computer <span className='text-primaryColor'>Install</span></h3>
              <p className='pb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className='py-8 md:py-14 lg:py-20 xl:py-28'>
            <h3 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-center pb-4 lg:pb-7'>Save time, let us fix it for you</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 xl:gap-20'>

            <div>
              <h3 className='text-2xl md:text-3xl lg:text-5xl font-semibold pb-4 lg:pb-7'>Computer Repaier Part</h3>
              <ul>
                <li className='text-[#232A42] text-xl lg:text-2xl flex items-center gap-3'><FaRegCheckCircle className='text-primaryColor' /><span>Computer system repairs</span></li>
                <li className='text-[#232A42] text-xl lg:text-2xl flex items-center gap-3'><FaRegCheckCircle className='text-primaryColor' /><span>Component Replacement</span></li>
                <li className='text-[#232A42] text-xl lg:text-2xl flex items-center gap-3'><FaRegCheckCircle className='text-primaryColor' /><span>Motherboard Repair</span></li>
                <li className='text-[#232A42] text-xl lg:text-2xl flex items-center gap-3'><FaRegCheckCircle className='text-primaryColor' /><span>Graphics Card Repair</span></li>
                <li className='text-[#232A42] text-xl lg:text-2xl flex items-center gap-3'><FaRegCheckCircle className='text-primaryColor' /><span>Motherboard Upgrade</span></li>
                <li className='text-[#232A42] text-xl lg:text-2xl flex items-center gap-3'><FaRegCheckCircle className='text-primaryColor' /><span>Overheating and Cooling System Repair</span></li>
              </ul>
            </div>
            <div>
              <Image src="/details-2.png" width={565} height={506} alt='details iamge' className='w-[100%] h-[100%]' />
            </div>
          </div>

          <div>

            <div className='pt-8 md:pt-14 xl:pt-20'>
              <h3 className='text-2xl md:text-3xl lg:text-5xl font-semibold text-center pb-4 lg:pb-7'>Frequently Asked <span className='text-primaryColor'>Questions</span></h3>
              <p className='text-center max-w-[1050px] mx-auto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className='pt-6 xl:pt-16'>
              <div className="collapse collapse-arrow bg-sectionBackgroundColor text-primaryColor mb-3 shadow-boxShadow">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</div>
                <div className="collapse-content text-black">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-sectionBackgroundColor text-primaryColor mb-3 shadow-boxShadow">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</div>
                <div className="collapse-content text-black">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-sectionBackgroundColor text-primaryColor mb-3 shadow-boxShadow">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</div>
                <div className="collapse-content text-black">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-sectionBackgroundColor text-primaryColor mb-3 shadow-boxShadow">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</div>
                <div className="collapse-content text-black">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-sectionBackgroundColor text-primaryColor mb-3 shadow-boxShadow">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry?</div>
                <div className="collapse-content text-black">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>


        </div>
        <QuickContact title='Contact Us to Get Your Desired Services' />
      </div>
    </>
  )
}

export default ServiceDetails