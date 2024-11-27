import React from 'react'
import CareerShowcase from './CareerShowcase'

import { GoPeople, GoArrowRight } from "react-icons/go";
import { LuGraduationCap } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";
import QuickContact from '../sharedComponents/QuickContact/QuickContact';

function Career() {
  return (
    <>
      <CareerShowcase />


      <div>
        <div>
          <div className='bg-sectionBackgroundColor py-28'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center container mx-auto'>
              <div>
                <h3 className='text-3xl font-semibold'>Few reasons why you should join our <span className='text-primaryColor'>amazing team</span></h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown
                </p>
              </div>
              <div className='grid grid-cols-2 gap-5'>
                <div>
                  <div className='w-[70px] h-[70px] bg-blue-400 flex justify-center items-center rounded-md'><GoPeople className='w-[40px] h-[40px]' /></div>
                  <h6 className='py-4 font-semibold'>Team Work</h6>
                  <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                </div>
                <div>
                  <div className='w-[70px] h-[70px] bg-blue-400 flex justify-center items-center rounded-md'><GoPeople className='w-[40px] h-[40px]' /></div>
                  <h6 className='py-4 font-semibold'>Team Work</h6>
                  <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                </div>
                <div>
                  <div className='w-[70px] h-[70px] bg-blue-400 flex justify-center items-center rounded-md'><GoPeople className='w-[40px] h-[40px]' /></div>
                  <h6 className='py-4 font-semibold'>Team Work</h6>
                  <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                </div>
                <div>
                  <div className='w-[70px] h-[70px] bg-blue-400 flex justify-center items-center rounded-md'><GoPeople className='w-[40px] h-[40px]' /></div>
                  <h6 className='py-4 font-semibold'>Team Work</h6>
                  <p className='text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='container mx-auto'>
            <div className='pt-28'>
              <div>
                <h5 className='text-[36px] leading-[42px] font-bold pb-5 text-center'>Career Openings</h5>
                <p className='text-sm text-center'>We’re always looking for creative, talented self-starters to join the JMC family. Check out our open roles below and fill out an application.</p>
              </div>

              <div className='mt-14 mb-28 lg:px-32'>
                <div className='flex justify-between items-center rounded-sm p-8 mb-8 shadow-[0px_2px_4px_0px_#0000000D]'>
                  <h6 className='text-xl font-semibold'>Executive Assistant</h6>
                  <div className='hidden md:block'>
                    <p className='text-xs text-gray-400'>Experience</p>
                    <h6 className='font-semibold'>2 Years</h6>
                  </div>
                  <div className='hidden md:block'>
                    <p className='text-xs text-gray-400'>Deadline</p>
                    <h6 className='font-semibold'>2021-05-08</h6>
                  </div>
                  <GoArrowRight className='text-3xl' />
                </div>
                <div className='flex justify-between items-center rounded-sm p-8 mb-8 shadow-[0px_2px_4px_0px_#0000000D]'>
                  <h6 className='text-xl font-semibold'>Executive Assistant</h6>
                  <div className='hidden md:block'>
                    <p className='text-xs text-gray-400'>Experience</p>
                    <h6 className='font-semibold'>2 Years</h6>
                  </div>
                  <div className='hidden md:block'>
                    <p className='text-xs text-gray-400'>Deadline</p>
                    <h6 className='font-semibold'>2021-05-08</h6>
                  </div>
                  <GoArrowRight className='text-3xl' />
                </div>
                <div className='flex justify-between items-center rounded-sm p-8 mb-8 shadow-[0px_2px_4px_0px_#0000000D]'>
                  <h6 className='text-xl font-semibold'>Executive Assistant</h6>
                  <div className='hidden md:block'>
                    <p className='text-xs text-gray-400'>Experience</p>
                    <h6 className='font-semibold'>2 Years</h6>
                  </div>
                  <div className='hidden md:block'>
                    <p className='text-xs text-gray-400'>Deadline</p>
                    <h6 className='font-semibold'>2021-05-08</h6>
                  </div>
                  <GoArrowRight className='text-3xl' />
                </div>
                <div className='flex justify-between items-center rounded-sm p-8 mb-8 shadow-[0px_2px_4px_0px_#0000000D]'>
                  <h6 className='text-xl font-semibold'>Executive Assistant</h6>
                  <div className='hidden md:block'>
                    <p className='text-xs text-gray-400'>Experience</p>
                    <h6 className='font-semibold'>2 Years</h6>
                  </div>
                  <div className='hidden md:block'>
                    <p className='text-xs text-gray-400'>Deadline</p>
                    <h6 className='font-semibold'>2021-05-08</h6>
                  </div>
                  <GoArrowRight className='text-3xl' />
                </div>
                <div className='flex justify-between items-center rounded-sm p-8 mb-8 shadow-[0px_2px_4px_0px_#0000000D]'>
                  <h6 className='text-xl font-semibold'>Executive Assistant</h6>
                  <div className='hidden md:block'>
                    <p className='text-xs text-gray-400'>Experience</p>
                    <h6 className='font-semibold'>2 Years</h6>
                  </div>
                  <div className='hidden md:block'>
                    <p className='text-xs text-gray-400'>Deadline</p>
                    <h6 className='font-semibold'>2021-05-08</h6>
                  </div>
                  <GoArrowRight className='text-3xl' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <QuickContact title='Need Tech Service?' />
      </div>
    </>
  )
}

export default Career