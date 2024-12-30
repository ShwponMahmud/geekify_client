'use client'
import Accordion from '@/app/components/sharedComponents/Accordion/Accordion'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import { useState } from 'react'


function CctvInstallationDetails({service}: ServiceDetailsProps) {
  const faqItems = [
    {
      question: "Q. How long does it take to install a CCTV system?",
      answer:
        "A. The time required depends on the size of the system and the number of cameras. Installation can typically take a few hours to a full day.",
    },
    {
      question: "Q. What type of CCTV camera is best for outdoor use?",
      answer:
        "A. Outdoor cameras should be weatherproof and have night vision capabilities. Bullet cameras are a popular choice due to their durability and long-range vision.",
    },
    {
      question: "Q. Can I monitor my CCTV cameras remotely?",
      answer:
        "A. Yes! With our systems, you can access live footage from your cameras on your smartphone or computer through a secure app. That allows you to monitor your property from anywhere.",
    },
    {
      question: "Q. What’s the average cost of CCTV camera installation?",
      answer:
        "A. The cost varies depending on the number of cameras and system complexity. However, Geeks CRS offers cheap CCTV camera installation options starting at competitive rates. Contact us for a custom quote.",
    },
    {
      question: "Q. Do you offer maintenance services after installation?",
      answer:
        "A. Absolutely! We provide ongoing maintenance and support services. That ensures your system remains in perfect working condition.",
    },
    {
      question: "Q. Will my CCTV footage be stored for a long time?",
      answer:
        "A. Most systems store footage for a specific period, depending on the storage capacity of your DVR. We can recommend the best solution based on your needs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <Showcase
        backgroundImage={service?.image}
        title={service?.name}
        highlights=""
        paragraph="One-stop solution for your IT needs, Order any service, anytime. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam quas nihil consequuntur consequatur deleniti quae quos neque ullam natus tempora.
      "
      />
      <div className="container mx-auto mt-[-100px]">
        <div>
          <div className="hidden lg:grid grid-cols-3 gap-8">
            <div className="bg-white py-14 px-7 text-center shadow-lg">
              <div className="flex justify-center items-center">
                <Image
                  src={"/banner-card-icon-1.png"}
                  width={150}
                  height={150}
                  alt=""
                  className="w-[100px] h-[100px]"
                />
              </div>
              <h6 className="text-xl font-bold pt-5 pb-1">
                Select the <span className="text-primaryColor">Service</span>
              </h6>
              <p>
                Pick the services you are looking for- from the website or app.
              </p>
            </div>
            <div className="bg-white py-10 px-7 text-center shadow-lg">
              <div className="flex justify-center items-center">
                <Image
                  src={"/banner-card-icon-2.png"}
                  width={150}
                  height={150}
                  alt=""
                  className="w-[100px] h-[100px]"
                />
              </div>
              <h6 className="text-xl font-bold pt-5 pb-1">
                Pick Up Your <span className="text-primaryColor">Schedule</span>
              </h6>
              <p>Pick your convenient date and time to avail the service.</p>
            </div>
            <div className="bg-white py-10 px-7 text-center shadow-lg">
              <div className="flex justify-center items-center">
                <Image
                  src={"/banner-card-icon-3.png"}
                  width={150}
                  height={150}
                  alt=""
                  className="w-[100px] h-[100px]"
                />
              </div>
              <h6 className="text-xl font-bold pt-5 pb-1">
                <span className="text-primaryColor">Book</span> Appointment
              </h6>
              <p>
                Review and book your appointment. We’ll assign the expert
                technicians schedule for you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-8 md:pt-14 lg:pt-20 xl:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 xl:gap-20">
          <div>
            <Image
              src={service?.image}
              width={565}
              height={506}
              alt="details iamge"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 lg:pb-7">
              {service?.name}
            </h3>

            <div
              dangerouslySetInnerHTML={{
                __html: service?.description ?? "",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <div>
          <div>
            <p className="text-center">
              Today’s world is driven by technology, and CCTV cameras
              installation is important for keeping your home or business
              secure. At Geeks CRS, we provide affordable, high-quality CCTV
              installer IP camera solutions to give you peace of mind. Whether
              you need to monitor your home or secure a commercial space, our
              expert technicians deliver reliable{" "}
              <a
                href="https://geekify.com.au/services/cctv-installation"
                className="text-primaryColor underline"
              >
                CCTV IP camera install services
              </a>{" "}
              tailored to your needs. We use advanced technology to cover every
              area of your property. That ensures a comprehensive surveillance
              camera. From planning and installation to support, we care for
              everything so you can feel safe and secure 24/7. Our CCTV IP
              camera systems offer the protection you need, whether to prevent
              crime or monitor daily activities.
            </p>
          </div>

          <div className="pt-8 md:pt-14 lg:pt-20 xl:pt-28">
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
              Why Choose Our{" "}
              <span className="text-primaryColor">
                CCTV Cameras Installation Services?
              </span>
            </h3>

            <div className="py-8 px-4 space-y-6">
              <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/cctv-intallation-1.png"
                  alt="A male doing the installation of cctv"
                  className="w-full md:w-1/3 h-full object-cover"
                />
                <div className="p-5">
                  <div className="flex">
                    <h3 className="text-lg font-bold italic">
                      Affordable Prices
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    We’ve got you covered if you’re looking for cheap CCTV
                    camera installation.{" "}
                    <a
                      href="https://geekify.com.au/services"
                      className="text-primaryColor underline"
                    >
                      Our services
                    </a>{" "}
                    are cost-effective and budget-friendly without compromising
                    the quality or reliability of the camera system. You get
                    top-notch protection at a price that suits you.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/cctv-intallation-2.png"
                  alt="cctv camera"
                  className="w-full md:w-1/3 h-auto object-cover"
                />
                <div className="p-6">
                  <div className="flex">
                    <h3 className="text-lg font-bold italic">
                      Expert Technicians
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Our experienced team excels in the installation of CCTV
                    camera systems. We ensure your cameras are installed
                    correctly the first time. So you can trust that your
                    property will be fully secured from the start.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/cctv-intallation-3.png"
                  alt="A security guard analyzing cctv camera"
                  className="w-full md:w-1/3 h-auto object-cover"
                />
                <div className="p-6">
                  <div className="flex">
                    <h3 className="text-lg font-bold italic">
                      Comprehensive Solutions
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    We provide end-to-end support. From helping you plan the
                    best setup for your property, to professionally installing
                    the security cameras. We offer ongoing maintenance. We make
                    sure your security camera system runs smoothly at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 md:pt-14 lg:pt-20 xl:pt-28">
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 mb-5">
              Camera CCTV Installation{" "}
              <span className="text-primaryColor">
                Solutions for Every Need
              </span>
            </h3>
            <p className="mb-4">
              We offer a range of CCTV security cameras installation options
              that can be customized to fit your specific requirements. Whether
              you're interested in monitoring your home’s exterior or setting up
              an advanced system for your business, we have the right solutions
              for you.
            </p>

            <ul className="list-disc ml-5 space-y-3">
              <li>
                <span className="font-bold">
                  Residential CCTV Installations:
                </span>{" "}
                Protect your family and property with our residential CCTV
                camera installation services. Our experts will install security
                cameras at strategic points around your home. That ensures 24/7
                monitoring.
              </li>
              <li>
                <span className="font-bold">Business CCTV Installations:</span>{" "}
                Whether you run a small business or a large corporate office,
                security is crucial. Our commercial CCTV camera installation
                services protect your workplace from theft and vandalism.
              </li>
              <li>
                <span className="font-bold">Outdoor & Indoor Camera:</span> We
                specialize in installing both outdoor and indoor security
                cameras. That ensures complete coverage of all vulnerable areas.
              </li>
            </ul>
          </div>

          <div className="pt-8 md:pt-14 lg:pt-20 xl:pt-28">
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
              How Much Does{" "}
              <span className="text-primaryColor">CCTV Installation Cost?</span>
            </h3>
            <p className="mb-4 text-center">
              CCTV security cameras installation prices are often a primary
              concern for customers, but at Geeks CRS, we strive to offer
              competitive pricing for every budget. We aim to provide cheap CCTV
              cameras and security camera installation options without
              compromising on the quality or effectiveness of your security
              system.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
              <div className="shadow-hoverBoxShadow rounded-xl p-6">
                <div className="w-[100px] h-[100px] rounded-full bg-sectionBackgroundColor flex justify-center items-center">
                  <Image
                    src="/cctv-icon-1.png"
                    width={100}
                    height={100}
                    alt=""
                    className="w-[90px] h-[90px]"
                  />
                </div>
                <h6 className="font-bold text-xl italic py-4">
                  Basic Packages:
                </h6>
                <p>
                  For smaller homes or offices, our basic packages are the
                  perfect solution. Starting at affordable rates. These packages
                  typically include one or two security cameras to cover
                  essential areas of your property. This option offers a
                  cost-effective way to begin surveillance and effectively
                  monitor your space.
                </p>
              </div>
              <div className="shadow-hoverBoxShadow rounded-xl p-6">
                <div className="w-[100px] h-[100px] rounded-full bg-sectionBackgroundColor flex justify-center items-center">
                  <Image
                    src="/cctv-icon-2.png"
                    width={100}
                    height={100}
                    alt=""
                    className="w-[90px] h-[90px]"
                  />
                </div>
                <h6 className="font-bold text-xl italic py-4">
                  Advanced Packages:
                </h6>
                <p>
                  If you need more extensive security, our advanced packages
                  include multiple security cameras, DVR systems, and remote
                  access through mobile apps. These setups are ideal for larger
                  properties or businesses. Wired camera requires more extensive
                  coverage and advanced features for added protection and
                  convenience.
                </p>
              </div>
              <div className="shadow-hoverBoxShadow rounded-xl p-6">
                <div className="w-[100px] h-[100px] rounded-full bg-sectionBackgroundColor flex justify-center items-center">
                  <Image
                    src="/cctv-icon-3.png"
                    width={100}
                    height={100}
                    alt=""
                    className="w-[90px] h-[90px]"
                  />
                </div>
                <h6 className="font-bold text-xl italic py-4">
                  Custom Quotes:
                </h6>
                <p>
                  Have specific requirements? We also offer custom quotes for
                  our CCTV cameras installation service. That is customized to
                  meet your unique needs. Whether you need a specialized
                  security camera system for a large commercial property or
                  additional features like motion detection. We’ll create a
                  solution for the dome camera. That fits both your security
                  demands and budget.
                </p>
              </div>
            </div>

            <p className="text-xl lg:text-2xl font-bold text-gray-500 italic pt-8 text-center">
              At Geeks CRS, we believe that securing your property shouldn't
              break the bank. Our diverse pricing options make it easy to find a
              CCTV camera installation package. That fits your needs without
              sacrificing quality.
            </p>
          </div>
        </div>
      </div>

      <QuickContact title="Contact Us Today for Expert CCTV Installation Services" />

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
          Expert Installation of{" "}
          <span className="text-primaryColor">CCTV Systems</span>
        </h3>
        <p className="mb-4 text-center pb-4">
          At{" "}
          <a
            href="https://geekify.com.au/"
            className="text-primaryColor underline"
          >
            Geeks CRS
          </a>
          , we make the CCTV wireless camera installation process simple and
          hassle-free. We take care of everything from start to finish. Video
          surveillance secures your property with minimal effort from you.
          Here’s what you can expect:
        </p>
        <Image
          src={"/cctv-installation-3.png"}
          alt="cctv cameras installation"
          width={1200}
          height={900}
          className="w-full h-auto"
        />
        <div className="py-5">
          <h5 className="text-xl font-bold italic pb-2">
            Consultation & Site Survey:
          </h5>
          <p>
            The process begins with a consultation and site survey, where we
            assess your property to determine the best placement for a wireless
            camera. We take into account the layout, entry points, and
            vulnerable areas to design a system of .dome cameras That provide
            optimal coverage.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            Custom Recommendations:
          </h5>
          <p>
            Based on our survey, we provide personalized recommendations for the
            most suitable IP camera systems and installation strategies. Whether
            you need indoor, outdoor, or a combination of cameras, we ensure
            that your security setup meets your specific needs.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">Quick Installation:</h5>
          <p>
            Our technicians are trained to install CCTV camera systems
            efficiently and with minimal disruption to your routine. We work
            swiftly to complete the setup. That allows you to maintain your
            daily activities without interruption.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            System Testing & Handover:
          </h5>
          <p>
            After installation, we thoroughly test the cameras to ensure
            everything is working as expected. We check camera placement angles,
            video quality, and any connected systems like mobile apps. Once
            satisfied, we hand over the commercial security camera installer to
            you. That ensures you’re fully comfortable with how to operate it.
          </p>
        </div>
        <p className="text-xl lg:text-2xl font-bold italic text-gray-500">
          Our goal is to provide a smooth, professional installation experience
          that leaves you with a fully functional, reliable CCTV security camera
          system.
        </p>
      </div>

      <div className="container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7">
          Protect Your Home and Business with the{" "}
          <span className="text-primaryColor">Latest CCTV Technology</span>
        </h3>
        <p className="mb-4 pb-4">
          At{" "}
          <a
            href="https://geekify.com.au/"
            className="text-primaryColor underline"
          >
            Geeks CRS
          </a>
          , we offer the latest advancements in CCTV security camera
          installation. That ensures we protect your home or business
          effectively. Our security camera system includes advanced features
          like HD cameras, night vision, motion detection, and surveillance
          system. That provides you with clear, reliable footage even in
          low-light environments.
        </p>

        <div className="my-5 p-5 shadow-hoverBoxShadow rounded-xl">
          <h5 className="text-xl font-bold italic pb-2">
            High-Definition Cameras:
          </h5>
          <p>
            Our high-definition (HD) cameras deliver crystal-clear video
            footage. That outdoor camera allows you to easily identify intruders
            or monitor suspicious activities. The sharp image quality captures
            every detail, providing crucial evidence when needed.
          </p>
        </div>
        <div className="mb-5 p-5 shadow-hoverBoxShadow rounded-xl">
          <h5 className="text-xl font-bold italic pb-2">Remote Viewing:</h5>
          <p>
            Stay connected and in control, no matter where you are. With remote
            viewing capabilities, you can access live wireless camera feeds
            directly from your smartphone, tablet, or computer. Using secure
            mobile apps, you can monitor your property in real-time. That
            network video recorder ensures peace of mind whether you're at home
            or away.
          </p>
        </div>
        <div className="mb-5 p-5 shadow-hoverBoxShadow rounded-xl">
          <h5 className="text-xl font-bold italic pb-2">24/7 Surveillance:</h5>
          <p>
            Our digital video recording system offers continuous,
            round-the-clock surveillance. That means we always protect your
            property. Whether it’s day or night, the recording device system is
            constantly monitoring. It gives you the confidence that your home or
            business is secure at all times.
          </p>
        </div>
        <p className="text-xl lg:text-2xl font-bold italic text-gray-500">
          At Geeks CRS, we deliver top-tier CCTV installation companies to keep
          you and your property safe with bullet cameras.
        </p>
      </div>

      <div className="container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7">
          The Benefits of{" "}
          <span className="text-primaryColor">CCTV Camera Installation</span>
        </h3>
        <p className="mb-4 pb-4">
          Installing a CCTV system offers significant advantages for both
          homeowners and business owners. Here are some compelling reasons to
          invest in CCTV camera installation services:
        </p>
        <Image
          src={"/cctv-installation-6.png"}
          alt="The Benefits of CCTV Camera Installation"
          width={1200}
          height={900}
          className="w-full h-auto"
        />
        <div className="py-5">
          <h5 className="text-xl font-bold italic pb-2">Deterrent to Crime:</h5>
          <p>
            One of the most effective ways to prevent crime is by having visible
            cameras on your property. CCTV cameras act as a powerful deterrent
            to theft, vandalism, and trespassing. Potential criminals are less
            likely to target a location with active surveillance. That helps to
            keep your property safe.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            Real-Time Monitoring:
          </h5>
          <p>
            With modern CCTV cameras installation systems, you can monitor your
            property in real time from anywhere. Whether you’re at home, at
            work, or on the go, you can use your smartphone, tablet, or computer
            to check in on your cameras and ensure everything is secure.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            Evidence Collection:
          </h5>
          <p>
            In case of a break-in, vandalism, or other incidents, CCTV footage
            can be crucial for identifying suspects and providing evidence for
            legal purposes. The clear recordings captured by your cameras can
            help resolve disputes or lead to the capture of intruders.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            Lower Insurance Costs:
          </h5>
          <p>
            Many insurance companies offer reduced premiums for properties that
            have security systems in place. By installing CCTV cameras, you
            could save money on your insurance while enhancing the protection of
            your home or business.
          </p>
        </div>
        <p className="text-xl lg:text-2xl font-bold italic text-gray-500">
          Investing in CCTV cameras installation not only enhances security but
          also provides peace of mind and potential savings in the long run from
          outdoor security camera.
        </p>
      </div>

      <div className="container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <div>
          <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
            CCTV Installation for{" "}
            <span className="text-primaryColor">All Property Types</span>
          </h3>
          <p className="mb-4 text-center">
            At Geeks CRS, we understand that every property has unique security
            needs. That's why we offer tailored CCTV setup services for various
            property types. That ensures you are well protected.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="shadow-hoverBoxShadow rounded-xl p-6">
              <div>
                <Image
                  src="/cctv-icon-4.png"
                  width={100}
                  height={80}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
              </div>
              <h6 className="font-bold text-xl italic py-4">
                Apartments and Condos:
              </h6>
              <p>
                Enhance security in residential complexes with reliable
                surveillance systems that monitor entrances, parking areas, and
                shared spaces. Our digital video recorder cameras help ensure
                the safety of residents and deter unauthorized access.
              </p>
            </div>
            <div className="shadow-hoverBoxShadow rounded-xl p-6">
              <div>
                <Image
                  src="/cctv-icon-5.png"
                  width={100}
                  height={80}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
              </div>
              <h6 className="font-bold text-xl italic py-4">Retail Stores:</h6>
              <p>
                Install a CCTV system to protect your business from shoplifting
                and theft by covering all key areas of your store. From aisles
                and checkout counters to storage rooms, our analog cameras
                provide vigilant monitoring to help reduce losses.
              </p>
            </div>
            <div className="shadow-hoverBoxShadow rounded-xl p-6">
              <div>
                <Image
                  src="/cctv-icon-6.png"
                  width={100}
                  height={80}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
              </div>
              <h6 className="font-bold text-xl italic py-4">
                Warehouses and Industrial Sites:
              </h6>
              <p>
                For large spaces like warehouses, our advanced security camera
                installation systems offer extensive coverage, both indoors and
                outdoors. We monitor every corner. That helps to safeguard your
                valuable assets and maintain a secure environment.
              </p>
            </div>
            <div className="shadow-hoverBoxShadow rounded-xl p-6">
              <div>
                <Image
                  src="/cctv-icon-7.png"
                  width={100}
                  height={80}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
              </div>
              <h6 className="font-bold text-xl italic py-4">Offices:</h6>
              <p>
                Secure your office building with a complete CCTV cameras
                installation system designed to protect employees and equipment.
                Our cameras can monitor entrances, exits, and common areas. That
                promotes a safe workplace for everyone.
              </p>
            </div>
          </div>

          <p className="text-2xl font-bold text-gray-500 italic pt-8 text-center">
            No matter the property type, Geeks CRS delivers customized security
            camera installation that enhance security and provide peace of mind.
          </p>
        </div>
      </div>

      <QuickContact title="Contact Us Today for Expert CCTV Installation Services" />

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl lg:text-4xl font-bold text-center pb-8">
          Frequently Asked <span className="text-primaryColor">Questions</span>
        </h3>

        {/* <div className="join join-vertical w-full">
          {[
            {
              question: "Q. How long does it take to install a CCTV system?",
              answer:
                "A. The time required depends on the size of the system and the number of cameras. Installation can typically take a few hours to a full day.",
            },
            {
              question: "Q. What type of CCTV camera is best for outdoor use?",
              answer:
                "A. Outdoor cameras should be weatherproof and have night vision capabilities. Bullet cameras are a popular choice due to their durability and long-range vision.",
            },
            {
              question: "Q. Can I monitor my CCTV cameras remotely?",
              answer:
                "A. Yes! With our systems, you can access live footage from your cameras on your smartphone or computer through a secure app. That allows you to monitor your property from anywhere.",
            },
            {
              question:
                "Q. What’s the average cost of CCTV camera installation?",
              answer:
                "A. The cost varies depending on the number of cameras and system complexity. However, Geeks CRS offers cheap CCTV camera installation options starting at competitive rates. Contact us for a custom quote.",
            },
            {
              question:
                "Q. Do you offer maintenance services after installation?",
              answer:
                "A. Absolutely! We provide ongoing maintenance and support services. That ensures your system remains in perfect working condition.",
            },
            {
              question: "Q. Will my CCTV footage be stored for a long time?",
              answer:
                "A. Most systems store footage for a specific period, depending on the storage capacity of your DVR. We can recommend the best solution based on your needs.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5 overflow-hidden rounded-lg transition-all duration-300"
            >
              <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <span className="text-xl font-medium">{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                className={`transition-max-height duration-300 ease-in-out ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="p-4 text-[#3d3d3d]">{item.answer}</div>
              </div>
            </div>
          ))}
        </div> */}

        <Accordion items={faqItems}/>

      </div>

      <div className="container mx-auto">
        <h3 className="text-2xl lg:text-4xl font-bold mb-5">
          Why Work With <span className="text-primaryColor">Geeks CRS?</span>
        </h3>
        <p className="mb-4 pb-4">
          Choosing the right partner for your installation of CCTV can make all
          the difference. Here’s why Geeks CRS stands out from the competition:
        </p>
        <div className="py-5">
          <h5 className="text-xl font-bold italic pb-2">
            Experienced Technicians:
          </h5>
          <p>
            Our skilled technicians are trained in the latest CCTV installation
            techniques and technologies. We install your system correctly and
            ensure it functions flawlessly. That provides reliable surveillance
            for your property.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            Real-Time Monitoring:
          </h5>
          <p>
            With modern CCTV cameras installation systems, you can monitor your
            property in real time from anywhere. Whether you’re at home, at
            work, or on the go, you can use your smartphone, tablet, or computer
            to check in on your cameras and ensure everything is secure.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            Customer Satisfaction:
          </h5>
          <p>
            At Geeks CRS, we place a strong emphasis on customer satisfaction.
            We work closely with you to understand your specific security needs.
            That is going the extra mile to ensure your security system meets
            your expectations and requirements.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            After-Sales Support:
          </h5>
          <p>
            We believe in building lasting relationships with our clients. Our
            commitment doesn’t end with installation; we offer ongoing support
            to help you maintain your CCTV system and troubleshoot any issues
            that may arise. You can count on us to be there for you long after
            the installation is complete.
          </p>
        </div>
        <p className="text-xl lg:text-2xl font-bold italic text-gray-500">
          With Geeks CRS, you gain a trusted partner dedicated to your security
          needs.
        </p>
      </div>

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl lg:text-4xl font-bold pb-8">
          Get Your CCTV Cameras{" "}
          <span className="text-primaryColor">Installed Today</span>
        </h3>
        <p className="pb-5">
          At Geeks CRS, we make securing your home or business easy with our
          professional and affordable CCTV cameras installation services.
          Contact us today for a free consultation and let us help you choose
          the right our{" "}
          <a
            href="https://www.nationalprotectiveservices.com.au/4-reasons-why-you-should-install-cctv-at-your-home/"
            className="text-primaryColor underline"
          >
            security system for your property
          </a>
          . Don’t wait until it's too late protect what matters most with Geeks
          CRS.
        </p>
        <p>
          Let us help you find the right security solution for your home or
          business. Get in touch now and take the first step toward a safer
          tomorrow!
        </p>
      </div>
    </div>
  );
}

export default CctvInstallationDetails