import React from 'react'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SlBookOpen } from "react-icons/sl";
import { LuCalendarDays } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { CgCalendarNext } from "react-icons/cg";
import { PiChair } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import QuickContact from '../sharedComponents/QuickContact/QuickContact';
import Showcase from '../Showcase/Showcase';

function CareerDetailsComponents() {
  return (
    <>
      <Showcase backgroundImage='/career-banner.png' title='Browse Our' highlights='Resources' paragraph='One-stop solution for your IT needs, Order any service, anytime. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam quas nihil consequuntur consequatur deleniti quae quos neque ullam natus tempora.
      '/>

      <div>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-6 py-28'>
            <div className='col-span-4'>
              <h5 className='text-4xl font-bold pb-8'>Executive Assistant</h5>
              <div className='pb-10'>
                <h6 className='text-2xl font-medium pb-4'>Who Are We Looking For</h6>
                <ul className='list-disc pl-5'>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Nullam dictum ligula a gravida porta.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                </ul>
              </div>
              <div className='pb-10'>
                <h6 className='text-2xl font-medium pb-4'>What You Will Be Doing</h6>
                <ul className='list-disc pl-5'>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Nullam dictum ligula a gravida porta.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                </ul>
              </div>
              <div className='pb-10'>
                <h6 className='text-2xl font-medium pb-4'>Bonus Points for Familiarity with</h6>
                <ul className='list-disc pl-5'>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Nullam dictum ligula a gravida porta.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                </ul>
              </div>
              <div className='pb-10'>
                <h6 className='text-2xl font-medium pb-4'>Educational Requirement</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only
                </p>
              </div>
              <div className='pb-10'>
                <h6 className='text-2xl font-medium pb-4'>Salary</h6>
                <ul className='list-disc pl-5'>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Nullam dictum ligula a gravida porta.</li>
                </ul>
              </div>
              <div className='pb-10'>
                <h6 className='text-2xl font-medium pb-4'>Working Hours</h6>
                <ul className='list-disc pl-5'>
                  <li>8 AM - 5 PM</li>
                </ul>
              </div>
              <div className='pb-10'>
                <h6 className='text-2xl font-medium pb-4'>Working Days</h6>
                <ul className='list-disc pl-5'>
                  <li>Weekly: 5 days.</li>
                  <li>Weekend: Friday.Saturday</li>
                </ul>
              </div>
              <div className='pb-10'>
                <h6 className='text-2xl font-medium pb-4'>Perks & Benefits You’ll Get </h6>
                <ul className='list-disc pl-5'>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Nullam dictum ligula a gravida porta.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                </ul>
              </div>
              <hr />
              <div className='py-10'>
                <h6 className='text-2xl font-medium pb-4'>The Application Process</h6>
                <ul className='list-disc pl-5'>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Nullam dictum ligula a gravida porta.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                  <li>Nam pellentesque orci ut odio blandit, sit amet elementum augue venenatis.</li>
                </ul>
              </div>
              <div className='pb-10'>
                <h6 className='text-2xl font-medium pb-4'>Our Statement</h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only
                </p>
              </div>
            </div>


            <div className='col-span-2'>
              <div className='bg-sectionBackgroundColor p-10'>
                <div className='flex justify-center'>
                  <button className='py-2 px-6 mx-auto font-medium border-[1px] rounded-md border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white transition-[.5s]'>Apply Now</button>
                </div>
                <h4 className='text-xl font-bold pt-16'>Job Summary</h4>

                <div className='flex items-center gap-3 pt-10'>
                  <HiOutlineLocationMarker className='w-[40px] h-[50px]' />
                  <div>
                    <p className='text-gray-400'>Location</p>
                    <p className='text-[17px] font-normal leading-6 '>Shouth Breeze Center,Banani11</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 pt-10'>
                  <IoBriefcaseOutline className='w-[40px] h-[50px]' />
                  <div>
                    <p className='text-gray-400'>Job Type</p>
                    <p className='text-[17px] font-normal leading-6 '>Full Time</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 pt-10'>
                  <LuCalendarDays className='w-[40px] h-[50px]' />
                  <div>
                    <p className='text-gray-400'>Date Posted</p>
                    <p className='text-[17px] font-normal leading-6 '>Posted 1 month ago</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 pt-10'>
                  <SlBookOpen className='w-[40px] h-[50px]' />
                  <div>
                    <p className='text-gray-400'>Experience</p>
                    <p className='text-[17px] font-normal leading-6 '>Experience: 1-3 year</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 pt-10'>
                  <IoMdTime className='w-[40px] h-[50px]' />
                  <div>
                    <p className='text-gray-400'>Working Hours</p>
                    <p className='text-[17px] font-normal leading-6 '>9 AM - 6 PM</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 pt-10'>
                  <CgCalendarNext className='w-[40px] h-[50px]' />
                  <div>
                    <p className='text-gray-400'>Weekly:5days</p>
                    <p className='text-[17px] font-normal leading-6 '>Weekend: Saturday,Sunday</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 pt-10 pb-10'>
                  <PiChair className='w-[40px] h-[50px]' />
                  <div>
                    <p className='text-gray-400'>Vacancy</p>
                    <p className='text-[17px] font-normal leading-6 '>No.of Vacancy:3</p>
                  </div>
                </div>

                <div className='text-center pt-12'>
                  <a href="" className='text-[27px] font-bold underline text-center'>View All Jobs</a>
                </div>
              </div>

              <div className='pt-10 pb-5'>
                <p className='font-semibold'>Share This:</p>
              </div>
              <div className='flex gap-5'>
                <a href="#"><BsFacebook className='text-[#3C5A99] w-12 h-12' /></a>
                <a href="#" className='bg-black rounded-full flex justify-center items-center w-12 h-12'><BsTwitterX className='text-white w-6 h-6' /></a>
                <a href="#" className='bg-[#007AB9] rounded-full flex justify-center items-center w-12 h-12' ><FaLinkedinIn className='text-white w-7 h-7' /></a>
                <a href="#" className='bg-[#BB346C] rounded-full flex justify-center items-center w-12 h-12'><BsInstagram className='text-white w-7 h-7' /></a>
              </div>
            </div>
          </div>
          <div className='flex justify-center pb-28 mt-[-60px]'>
            <button className='py-2 px-6 mx-auto font-medium border-[1px] rounded-md border-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white transition-[.5s]'>Apply Now</button>
          </div>
        </div>
        <QuickContact title='Need Tech Support?'/>
      </div>
    </>
  )
}

export default CareerDetailsComponents