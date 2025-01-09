import React from 'react'

import { GoPeople, GoArrowRight } from "react-icons/go";
import QuickContact from '../sharedComponents/QuickContact/QuickContact';
import Showcase from '../Showcase/Showcase';
import { baseUrl } from '@/assets/baseUrl';
import Link from 'next/link';
import { TbBrandApple } from 'react-icons/tb';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { SlGraduation } from 'react-icons/sl';
import { BiSolidObjectsVerticalBottom } from 'react-icons/bi';
import { FaGraduationCap } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';


interface careerDetails {
  id: number,
  title: string,
  experience: string,
  end_date: string
  slug: string
}
async function Career() {

  let careerDetails: careerDetails [] = [];

  try {
    const response = await fetch(`${baseUrl}/vacancies?paginate=&pagination=&order_by_id=&type&status&end_date[from]&end_date[to]`,
      {
        headers: {
          'content-type': 'application/json',
          'Client-Secret': `secret`
        }
      }
    )
    if(!response.ok){
      throw new Error('Failed to fetch the vacancy data')
    }
    const vacancies = await response.json()
    careerDetails = vacancies.data
    // console.log(vacancies.data)
  } catch (error) {
    console.error('Career data is not fetched', error)
  }

  return (
    <>
      <Showcase
        backgroundImage="/career-banner.png"
        title="Careers at"
        highlights="Geekify"
        paragraph="Geekify is the fastest-growing IT solutions provider, offering 360-degree tech services. Learn more about the engine of Australia’s future tech growth—our incredible team!"
      />

      <div>
        <div>
          <div className="bg-sectionBackgroundColor py-8 md:py-14 lg:py-20 xl:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center container mx-auto">
              <div>
                <h3 className="text-3xl md:text-3xl lg:text-5xl font-semibold pb-4 md:pb-7">
                  Few reasons why you should join our{" "}
                  <span className="text-primaryColor">amazing team</span>
                </h3>
                <p>
                  At Geekify, we’re more than just a workplace – we’re a team
                  driven by passion, innovation, and growth. Joining us means
                  being part of a dynamic environment where your skills are
                  valued, your ideas are heard, and your career aspirations are
                  supported. With opportunities to learn, collaborate, and make
                  an impact, we empower our team members to excel both
                  personally and professionally. Together, we’re shaping the
                  future of IT solutions – one innovative step at a time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div className="w-[70px] h-[70px] bg-[#9EFFE1] flex justify-center items-center rounded-md">
                    <BsPeopleFill className="w-[40px] h-[40px]" />
                  </div>
                  <h6 className="py-4 font-semibold capitalize">
                    Innovation at Its Core
                  </h6>
                  <p className="text-xs">
                    Geekify is where ideas come to life. Our team thrives on
                    pushing boundaries, solving complex challenges, and
                    delivering groundbreaking tech solutions.
                  </p>
                </div>
                <div>
                  <div className="w-[70px] h-[70px] bg-[#FFD7C5] flex justify-center items-center rounded-md">
                    <FaClockRotateLeft className="w-[35px] h-[35px]" />
                  </div>
                  <h6 className="py-4 font-semibold capitalize">
                    Learning Opportunity
                  </h6>
                  <p className="text-xs">
                    We are committed to helping our employees grow
                    professionally and personally. From hands-on experience to
                    exclusive training sessions, every day is a chance to learn
                    something new.
                  </p>
                </div>
                <div>
                  <div className="w-[70px] h-[70px] bg-[#9DFDFF] flex justify-center items-center rounded-md">
                    <FaGraduationCap className="w-[40px] h-[40px]" />
                  </div>
                  <h6 className="py-4 font-semibold capitalize">
                    Supportive Work Environment
                  </h6>
                  <p className="text-xs">
                    At Geekify, teamwork and inclusivity drive our success. Join
                    a culture where your voice matters, your ideas are valued,
                    and collaboration is celebrated.
                  </p>
                </div>
                <div>
                  <div className="w-[70px] h-[70px] bg-[#CADDFF] flex justify-center items-center rounded-md">
                    <BiSolidObjectsVerticalBottom className="w-[40px] h-[40px]" />{" "}
                  </div>
                  <h6 className="py-4 font-semibold capitalize">
                    Rewarding Benefits
                  </h6>
                  <p className="text-xs">
                    Your hard work deserves recognition. We offer competitive
                    salaries, flexible work options, comprehensive health
                    coverage, and exciting performance bonuses to reward your
                    efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto">
            <div className="py-8 md:pt-14 lg:pt-20 xl:pt-28">
              <div>
                <h5 className="text-3xl md:text-3xl lg:text-5xl font-semibold pb-4 md:pb-7 text-center">
                  So, You Want To Be Part Of Us?
                </h5>
                <p className="text-center">
                  We’re always looking for creative, talented self-starters to
                  join the Geekify family. Check out our open roles below and
                  fill out an application.
                </p>
              </div>

              <div className="mt-14 mb-8 md:mb-14 lg:mb-20 xl:mb-28 lg:px-32">
                {careerDetails?.map((careerDetail) => (
                  <Link key={careerDetail.slug} href={`/career/${careerDetail.slug}`}>
                    <div className="flex items-center justify-between gap-4 lg:gap-8 rounded-sm p-4 lg:p-6 mb-8 shadow-boxShadow hover:shadow-hoverBoxShadow">
                      <h6 className="lg:text-xl font-semibold w-[350px]">
                        {careerDetail.title}
                      </h6>
                      <div className="hidden md:block grid-cols-3 max-w-[150px]">
                        <p className="text-xs text-gray-400">Experience</p>
                        <h6 className="font-semibold">
                          {careerDetail.experience}
                        </h6>
                      </div>
                      <div className="hidden md:block max-w-[350px]">
                        <p className="text-xs text-gray-400">Deadline</p>
                        <h6 className="font-semibold">
                          {careerDetail.end_date}
                        </h6>
                        {/* <p>{careerDetail.slug}</p> */}
                      </div>

                      <GoArrowRight className="text-3xl max-w-[150px]" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <QuickContact
          title="Can’t find what you are looking for?"
          paragraph="Get expert tech solutions from the leaders in IT. Call us now or book online to resolve your tech needs efficiently and professionally."
        />
      </div>
    </>
  );
}

export default Career