import React from 'react'
import Image from 'next/image'
import QuickContact from '../sharedComponents/QuickContact/QuickContact'
import Showcase from '../Showcase/Showcase'

function AboutUs() {
  return (
    <>
      <Showcase
        backgroundImage="/about-us-banner.png"
        title="About"
        highlights="Us"
        paragraph="Geekify is Australia’s fastest-growing micro-tech service provider, offering 360-degree IT solutions to meet your every need. From software development to technical support, we empower businesses with innovative and reliable technology solutions"
      />

      <div>
        <div className="container mx-auto">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 xl:gap-28 py-8 md:py-14 lg:py-20 xl:py-28">
              <div>
                <h3 className="text-3xl md:text-3xl lg:text-5xl font-semibold pb-4 md:pb-7">
                  The Geekify <span className="text-primaryColor">Story</span>
                </h3>
                <p className="pb-3 lg:py-5">
                  Geekify started with a mission to simplify IT solutions for
                  businesses of all sizes. From small startups to large
                  enterprises, we aim to provide reliable, tailored services to
                  meet unique business needs. Our goal has always been to
                  empower clients by handling their IT challenges, allowing them
                  to focus on growth and innovation.
                </p>
                <p className="pb-3 lg:py-5">
                  Over the years, we’ve become a trusted partner for thousands
                  of clients, known for delivering cutting-edge technology and
                  exceptional customer support. Our commitment to innovation and
                  excellence has made us a leader in the tech industry, helping
                  businesses thrive in an ever-changing digital world
                </p>
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
                <div className="bg-primaryColor p-3 md:p-5 lg:p-7 text-white rounded-[10px]">
                  <h6 className="text-[34px] leading-10 font-medium pb-5">
                    09+
                  </h6>
                  <p className="text-[22px] leading-[25px] font-semibold">
                    Years Of Exprience
                  </p>
                </div>
                <div className="border-[1px] border-[#F2F2F2] p-3 md:p-5 lg:p-7 rounded-[10px]">
                  <h6 className="text-[34px] leading-10 text-primaryColor font-medium pb-5">
                    40+
                  </h6>
                  <p className="text-[22px] leading-[25px] font-semibold">
                    Professional Experts
                  </p>
                </div>
                <div className="xxl:bg-primaryColor xxl:text-white p-3 md:p-5 lg:p-7 border-[1px] border-[#F2F2F2] rounded-[10px]">
                  <h6 className="text-[34px] leading-10 text-primaryColor xxl:text-white font-medium pb-5">
                    4,000+
                  </h6>
                  <p className="text-[22px] leading-[25px] font-semibold">
                    Client Served
                  </p>
                </div>
                <div className="bg-primaryColor text-white xxl:bg-transparent xxl:text-primaryColor xxl:border-[1px] xxl:border-[#F2F2F2] p-3 md:p-5 lg:p-7 rounded-[10px]">
                  <h6 className="text-[34px] leading-10 font-medium pb-5">
                    95%
                  </h6>
                  <p className="text-[22px] leading-[25px] xxl:text-black font-semibold">
                    Retention Rate
                  </p>
                </div>
                <div className="bg-primaryColor p-3 md:p-5 lg:p-7 text-white rounded-[10px]">
                  <h6 className="text-[34px] leading-10 font-medium pb-5">
                    75+
                  </h6>
                  <p className="text-[22px] leading-[25px] font-semibold">
                    City Service
                  </p>
                </div>
                <div className="border-[1px] border-[#F2F2F2] p-3 md:p-5 lg:p-7 rounded-[10px]">
                  <h6 className="text-[34px] leading-10 text-primaryColor font-medium pb-5">
                    99%
                  </h6>
                  <p className="text-[22px] leading-[25px] font-semibold">
                    Satisfaction Score
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 xxl:gap-28 pb-10 md:pb-16 lg:pb-28">
              <div>
                <Image
                  src="/about-us-1.png"
                  width={525}
                  height={549}
                  alt="about us image"
                  className="w-full h-auto"
                />
              </div>

              <div>
                <h3 className="text-3xl md:text-3xl lg:text-5xl font-semibold pb-4 md:pb-7">
                  What <span className="text-primaryColor">We’re About</span>
                </h3>
                <p className="pb-3 md:pb-5 lg:text-xl">
                  At Geekify, we combine technical expertise with a passion for
                  solving problems, ensuring businesses can thrive in the
                  digital era. We believe technology should simplify operations,
                  drive growth, and create new opportunities. Guided by our
                  dedication to excellence, we strive to deliver tailored
                  solutions that make a real difference
                </p>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
                  <div className="bg-primaryColor p-7 text-white rounded-[10px]">
                    <h6 className="text-[34px] leading-10 font-medium pb-5">
                      Mission:
                    </h6>
                    <p>
                      To deliver seamless IT solutions that empower businesses
                      to achieve their goals. We aim to simplify technology and
                      make it accessible for everyone.
                    </p>
                  </div>
                  <div className="border-[1px] border-[#F2F2F2] p-7 rounded-[10px]">
                    <h6 className="text-[34px] leading-10 text-primaryColor font-medium pb-5">
                      Vision:
                    </h6>
                    <p>
                      To become the most reliable IT partner globally,
                      recognized for our innovation, integrity, and
                      customer-first approach
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-10 md:pb-16 lg:pb-28">
              <h3 className="text-3xl md:text-3xl lg:text-5xl font-semibold pb-4 md:pb-7">
                How we approved by our customer
              </h3>
              <p>
                Our customers are at the heart of everything we do. Through
                consistent communication, high-quality services, and a
                commitment to excellence, we’ve built trust and loyalty among
                our clients. Whether it’s a small business or a large
                enterprise, we ensure every client receives personalized
                solutions that meet their unique needs.
              </p>
            </div>
          </div>
        </div>
        <QuickContact
          title="Need Tech Service?"
          paragraph="Looking for reliable IT solutions? Geekify is here to help. Contact us today and experience the difference of working with a trusted tech partner."
        />
      </div>
    </>
  );
}

export default AboutUs