import Accordion from '@/app/components/sharedComponents/Accordion/Accordion'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import React from 'react'

function ManagingBusinessItSystems({service}: ServiceDetailsProps) {
  const faqItems = [
    {
      question: "What is IT consulting, and how can it benefit my business?",
      answer:
        "IT consultant provides expert advice on using technology to achieve business goals. It improves efficiency, security, and growth.",
    },
    {
      question: "Do you offer 24/7 support for IT services?",
      answer:
        "Yes, we provide 24/7 support to ensure your IT systems run smoothly around the clock.",
    },
    {
      question:
        "Can Geekify® help my business transition to cloud-based solutions?",
      answer:
        "Yes, we specialize in cloud solutions that reduce costs, improve collaboration, and enhance scalability.",
    },
    {
      question: "How does the initial consultation work?",
      answer:
        "The initial consultation is a discovery call where we understand your needs and create a customized IT strategy.",
    },
    {
      question:
        "Are Geekify® experienced with cybersecurity for Australian businesses?",
      answer:
        "Yes, we are cybersecurity experts, helping protect Australian businesses from cyber threats and ensuring compliance.",
    },
    {
      question: "Does Geekify® only serve businesses in Sydney?",
      answer:
        "No, while based in Sydney, we offer IT consulting services to businesses nationwide across Australia.",
    },
  ];

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
      <div className="container mx-auto">
        <div>
          <div className="hidden lg:grid grid-cols-3 gap-8 mt-[-100px]">
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
              Welcome to Geekify® – where your business’s success is our
              priority. In Sydney’s dynamic business landscape, having a
              reliable{" "}
              <a
                href="https://geekify.com.au/book-online"
                className="text-primaryColor underline"
              >
                IT partner
              </a>{" "}
              is essential, and that’s where Geekify® shines. We’re not just
              another IT company; we’re committed to understanding your unique
              needs and providing tailored solutions. That drives growth and
              streamlines operations. Our experienced team specializes in
              creating reliable, secure, and efficient IT consultant systems.
              That allows you to focus on what you do best. From small
              businesses to large enterprises, we’re here to help your business
              thrive with innovative technology, expert consulting, and
              responsive support that you can count on every step of the way.
              Let us simplify your technology, so you can grow with confidence.
            </p>
          </div>

          <div className="pt-8 md:pt-14 lg:pt-20 xl:pt-28">
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
              Why Choose Geekify® for{" "}
              <span className="text-primaryColor">IT Consulting?</span>
            </h3>
            <p>
              At Geekify®, we know that every Australian business has{" "}
              <a
                href="https://geekify.com.au/contact-us"
                className="text-primaryColor underline"
              >
                unique technology needs
              </a>
              , and we’re here to make IT work for you. Our experienced IT
              consultant specialize in delivering solutions tailored
              specifically for Australian companies, whether you're a startup,
              growing business, or established enterprise. We managed IT
              services and understand the fast-paced, evolving challenges that
              today’s businesses face. That’s from data security and compliance
              to scalable technology. It grows with you. Our mission is simple:
              to provide secure, efficient, and scalable IT consultant systems
              that empower your business. Whether you’re based in Sydney or
              elsewhere in Australia, Geekify® is dedicated to ensuring that
              your technology supports your success. With us, you get a partner
              who’s as invested in your growth as you are. That provides your
              job description with innovative solutions and expert guidance
              every step of the way
            </p>
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-5 pt-20 text-center">
              Our Core Values at
              <span className="text-primaryColor"> Geekify®</span>
            </h3>
            <p className="text-center">
              Our commitment to excellence as an IT consultant and{" "}
              <a
                href="https://en.wikipedia.org/wiki/Information_technology"
                className="text-primaryColor underline"
              >
                information technology
              </a>{" "}
              is anchored in some core values that shape every solution we
              provide:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 pt-8">
              <div className="shadow-hoverBoxShadow rounded-xl p-6">
                <Image
                  src="/managing-business-icon-1.png"
                  width={200}
                  height={200}
                  alt=""
                  className="w-[80px] h-[80px]"
                />
                <h6 className="text-lg font-bold pt-4">Reliability:</h6>
                <p>
                  We understand that your business depends on consistent,
                  trustworthy IT consultant support. That’s why we managed
                  services in everything we do. When you work with Geekify®, you
                  have a partner you can count on to respond quickly and resolve
                  issues effectively. That ensures your technology is always
                  there when you need it.
                </p>
              </div>
              <div className="shadow-hoverBoxShadow rounded-xl p-6">
                <Image
                  src="/managing-business-icon-2.png"
                  width={200}
                  height={200}
                  alt=""
                  className="w-[80px] h-[80px]"
                />
                <h6 className="text-lg font-bold pt-4">Innovation:</h6>
                <p>
                  Technology evolves rapidly, and staying ahead is essential for
                  growth. We consultant job descriptions with the latest
                  advancements in IT. That brings innovative tools and
                  strategies to your business. Whether it’s the newest
                  cybersecurity protocols or advanced data solutions, we keep
                  your business on the cutting edge. So you stay competitive in
                  a fast-paced market for IT company Sydney.
                </p>
              </div>
              <div className="shadow-hoverBoxShadow rounded-xl p-6">
                <Image
                  src="/managing-business-icon-3.png"
                  width={200}
                  height={200}
                  alt=""
                  className="w-[80px] h-[80px]"
                />
                <h6 className="text-lg font-bold pt-4">
                  Customer-Centric Approach:
                </h6>
                <p>
                  Your business’s unique needs are our priority. We take the
                  time to understand your goals, challenges, and
                  industry-specific requirements. By building custom solutions,
                  we ensure that every IT consultant service we provide aligns
                  with what matters most to you. That enhances productivity and
                  efficiency for Sydney IT consulting firm and business needs.
                </p>
              </div>
              <div className="shadow-hoverBoxShadow rounded-xl p-6">
                <Image
                  src="/managing-business-icon-4.png"
                  width={200}
                  height={200}
                  alt=""
                  className="w-[80px] h-[80px]"
                />
                <h6 className="text-lg font-bold pt-4">
                  Proactive Problem Prevention:
                </h6>
                <p>
                  At Geekify®, we don’t just fix problems as they arise; we
                  anticipate and prevent them. Through routine monitoring,
                  software development, maintenance, and strategic IT planning,
                  we reduce disruptions and keep your operations running
                  smoothly. That helps business owners avoid costly downtime.
                </p>
              </div>
              <div className="shadow-hoverBoxShadow rounded-xl p-6">
                <Image
                  src="/managing-business-icon-5.png"
                  width={200}
                  height={200}
                  alt=""
                  className="w-[80px] h-[80px]"
                />
                <h6 className="text-lg font-bold pt-5">
                  Long-Term Partnership:
                </h6>
                <p>
                  We see our clients as partners and are dedicated to fostering
                  long-term success. Our Houston IT consulting service role is
                  to support your business’s journey, adapting our solutions as
                  your needs evolve. As your trusted Sydney IT technology
                  consulting, we aim to grow with you, providing guidance,
                  expertise, and a stable IT foundation.1. Best Antivirus
                  Protection For Avast
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickContact title="Contact Us Today for Anti Virus Installation Services" />

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7">
          Our IT Consulting{" "}
          <span className="text-primaryColor">Company Services</span>
        </h3>
        <Image
          src={"/managing-business-1.png"}
          alt="Best it consultant in Sydney"
          width={1200}
          height={900}
          className="w-full h-auto"
        />
        <div className="py-8">
          <h5 className="text-2xl font-bold pb-2">
            1. Comprehensive IT Consulting Services
          </h5>
          <p>
            When you work with Geekify®, you’re getting more than just advice.
            Our IT consulting and technology investment services encompass
            everything from strategy and system design to ongoing support and
            maintenance. Whether you need help setting up your network, securing
            data, or managing software, we’re here for you.
          </p>
          <ul className="list-disc ml-7 pt-5 space-y-3">
            <li>
              <span className="font-bold">Strategy Development:</span> We craft
              IT cybersecurity consultant strategies tailored to your specific
              business objectives, creating a technology roadmap skill. That
              aligns with your growth plans and supports efficient, scalable
              progress for business consulting services in Australia.
            </li>
            <li>
              <span className="font-bold">Project Management:</span> Our
              dedicated team manages every phase of your vendor management
              projects and consultant jobs from initial planning to final
              implementation. Our expert IT consulting services ensure each step
              is executed with accuracy to achieve successful, timely results.
            </li>
            <li>
              <span className="font-bold">Technology Recommendations:</span> By
              understanding your unique needs, we suggest the most effective
              strategy consulting solution for your business. Our
              recommendations are designed to help you invest wisely. That
              enhances performance and delivers maximum value for your IT
              services Sydney resources.
            </li>
          </ul>
        </div>
        <div className="pb-8">
          <h5 className="text-2xl font-bold pb-2">
            2. Business IT Consulting Services
          </h5>
          <p>
            Running a business is hard enough without having to worry about IT
            consultant position issues. Our{" "}
            <a
              href="https://geekify.com.au/services/managing-business-it-systems"
              className="text-primaryColor underline"
            >
              business technical consultant services
            </a>{" "}
            in Australia are designed to provide peace of mind. We take a
            personalized approach. That understanding your goals and crafting
            solutions. That helps your business thrive.
          </p>
          <ul className="list-disc ml-7 pt-5 space-y-3">
            <li>
              <span className="font-bold">Custom IT Solutions:</span> We
              recognize that no two businesses are the same. That’s why we
              design Houston IT consultant solutions specifically for your
              needs. This ensuring each system enhances your operations and
              aligns with your goals.
            </li>
            <li>
              <span className="font-bold">Risk Assessment and Compliance:</span>{" "}
              Our advanced risk management technology solution services help
              protect your business by identifying potential vulnerabilities and
              ensuring compliance with industry regulations. This proactive
              approach safeguards your data and keeps you aligned with legal
              standards for managed IT service.
            </li>
            <li>
              <span className="font-bold">Cloud Solutions:</span> Our scalable
              cloud IT services Sydney enable you to streamline daily
              operations. That enhances collaboration and reduces costs. We help
              you choose the right cloud options, ensuring flexibility and
              secure access from anywhere.
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-2xl font-bold pb-2">
            3. Specialized IT Services for Sydney Businesses
          </h5>
          <p>
            With a strong focus on{" "}
            <a
              href="https://geekify.com.au/book-online"
              className="text-primaryColor underline"
            >
              IT services & cloud consulting
            </a>{" "}
            for Sydney-based companies, we are familiar with the challenges
            local businesses face. Our services include:
          </p>
          <ul className="list-disc ml-7 pt-5 space-y-3">
            <li>
              <span className="font-bold">
                Data Protection and Cybersecurity:
              </span>{" "}
              Safeguarding your data is essential, and our cybersecurity
              services are tailored to meet the unique needs of Australian
              businesses. We implement robust security measures to protect your
              information from potential threats.
            </li>
            <li>
              <span className="font-bold">Managed IT Support:</span> With our
              managed IT technology consultant support, we handle all technical
              aspects of your IT infrastructure. That allows you to focus on
              growing your business without worrying about daily IT concerns.
            </li>
            <li>
              <span className="font-bold">
                Network Design and Installation:
              </span>{" "}
              We design and install reliable networks that provide seamless
              connectivity and strong security for our clients. Our solutions
              ensure your network performs optimally, supporting smooth business
              operations and secure data exchange.
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <div className="">
          <div className="">
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
              Consultancy in Sydney with a{" "}
              <span className="text-primaryColor">
                Heart for Business Growth
              </span>
            </h3>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/managing-business-2.png"
                alt="IT consultant analyzing business systems"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className="flex ">
                    <h3 className="text-lg font-bold italic">
                      In-depth knowledge of the Sydney IT Landscape
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    At Geekify®, we pride ourselves on our comprehensive
                    understanding of the Sydney business environment strategic
                    advice. The local market is fast-paced, diverse, and
                    ever-evolving. Our strategic technical expertise is
                    well-versed in the intricacies of Sydney’s business
                    ecosystem, which allows us to provide solutions that are not
                    only cutting-edge but also aligned with the specific needs
                    and challenges faced by companies here. By staying on top of
                    trends and market demands, we ensure your IT systems remain
                    relevant and ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/managing-business-3.png"
                alt="Tailored IT solutions for businesses"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className="flex ">
                    <h3 className="text-lg font-bold italic">
                      Tailored IT Solutions for Businesses of All Sizes
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Whether you are a small startup taking your first steps into
                    the tech world or a large corporation with complex IT needs,
                    Geekify® has the expertise to support your growth. We
                    understand that each business is unique, and we specialize
                    in creating customized IT solutions. Our approach ensures
                    that your systems and infrastructure are designed to scale
                    and evolve with your company’s development. That helps you
                    remain agile and efficient in a rapidly changing
                    technological landscape.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/managing-business-4.png"
                alt="IT consultant providing cost-effective support"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className="flex ">
                    <h3 className="text-lg font-bold italic">
                      Cost-Effective Access to Expert IT Support
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    For many businesses, having a dedicated in-house qualified
                    IT consultants department is simply not feasible. Geekify®
                    bridges this gap by offering affordable, high-quality IT
                    consulting services. That provides you with the operational
                    efficiency expertise of an entire IT team without the high
                    costs. We design our services to offer maximum value. That
                    ensures you receive professional and efficient IT data
                    management solutions while staying within your budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/managing-business-5.png"
                alt="Comprehensive IT services in action"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className="flex ">
                    <h3 className="text-lg font-bold italic">
                      End-to-end IT Services for Comprehensive Support
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    From initial consultation and strategy development to the
                    implementation and ongoing support of IT systems, Geekify®
                    offers end-to-end services. Our team works alongside you
                    every step of the business process way. This ensures that
                    your technology remains optimized, secure, and aligned with
                    your business goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/managing-business-6.png"
                alt="IT consultant empowering business growth"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className="flex ">
                    <h3 className="text-lg font-bold italic">
                      Empowering Businesses for Long-Term Success
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    At Geekify®, we see ourselves as partners in your growth
                    journey. We don’t just fix issues as they arise – we provide
                    proactive, long-term solutions. That helps your business
                    grow. Whether we’re enhancing efficiency, improving
                    security, or preparing for future technological needs, our
                    consultancy focuses on ensuring your business thrives both
                    in the short and long term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-5">
          The Geekify® Promise –{" "}
          <span className="text-primaryColor">Your Success, Our Goal</span>
        </h3>
        <p>
          At Geekify®, we are committed to being more than just an IT consulting
          service provider. We are your dedicated partner in success. Our
          clients trust us because we prioritize their needs and always deliver
          results. From the moment you choose us, you gain a reliable,
          experienced team that works tirelessly. That ensures your technology
          runs smoothly, securely, and efficiently.
        </p>
        <p className="py-5">
          We understand the complexities of managing IT, and we make it simple
          for you. Whether it’s handling everyday technical issues, implementing
          new systems, or ensuring your cybersecurity is up to date, we are with
          you every step of the way.
        </p>
        <p>
          When you're ready to elevate your business through technology, you
          don’t have to do it alone. With Geekify®, you’ll have a trustworthy
          partner by your side. We help you navigate the challenges and
          opportunities that come with growth and change. Your success is our
          goal, and we’re here to help you achieve it.
        </p>
      </div>

      <div className="container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-5 text-center">
          What Sets Geekify® Apart from{" "}
          <span className="text-primaryColor">
            Other Australian IT Consulting Firms?
          </span>
        </h3>

        <div>
          <h6 className="text-xl font-bold italic">
            1. Experience Across Industries
          </h6>
          <p>
            We’ve worked with clients from various sectors, including
            healthcare, finance, retail, and more. This diversity gives us
            insight into industry-specific challenges and the expertise to
            design industry-specific solutions.
          </p>
        </div>
        <div className="py-4">
          <h6 className="text-xl font-bold italic">
            2. Proactive Support and 24/7 Availability
          </h6>
          <p>
            Issues don’t follow a 9-5 schedule, and neither do we. Our team is
            available 24/7. That ensures you receive assistance whenever you
            need it.
          </p>
        </div>
        <div>
          <h6 className="text-xl font-bold italic">
            3. Local Knowledge, Global Standards
          </h6>
          <p>
            Based in Sydney, we understand the Australian business climate and
            compliance standards. At Geekify®, we combine local expertise with
            global standards to bring you the best of both worlds.
          </p>
        </div>

        <p></p>
      </div>

      <QuickContact title="Contact Us Today for Anti Virus Installation Services" />

      <div className="container mx-auto pt-8 md:pt-14 lg:pt-20 xl:pt-28">
        <div>
          <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
            How do IT consultants get started with{" "}
            <span className="text-primaryColor">Geekify® IT Consulting?</span>
          </h3>
          <p className="mb-4 text-center">
            Starting with Geekify® is straightforward and hassle-free. We guide
            you through each step of the process. That ensures you receive the
            support and solutions your business needs. Here’s how our process
            works:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="shadow-hoverBoxShadow rounded-xl p-6">
              <div>
                <Image
                  src="/managing-business-icon-6.png"
                  width={100}
                  height={80}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
              </div>
              <h6 className="font-bold text-xl italic py-4">
                Step 1: Initial Discovery Call
              </h6>
              <p>
                The first step is a discovery call where we take the time to
                understand your business’s specific IT consultant needs and
                goals. This is an essential part of the process. It allows us to
                get to know your challenges, objectives, and any existing
                systems that may need to be improved.
              </p>
            </div>
            <div className="shadow-hoverBoxShadow rounded-xl p-6">
              <div>
                <Image
                  src="/managing-business-icon-7.png"
                  width={100}
                  height={80}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
              </div>
              <h6 className="font-bold text-xl italic py-4">
                Step 2: Strategy Development
              </h6>
              <p>
                Once we understand your needs, our team crafts a tailored IT
                consultant strategy designed to address your business
                objectives. This strategy outlines the best technology
                solutions, implementation steps, and projected outcomes. That
                ensures alignment with your goals.
              </p>
            </div>
            <div className="shadow-hoverBoxShadow rounded-xl p-6">
              <div>
                <Image
                  src="/managing-business-icon-8.png"
                  width={100}
                  height={80}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
              </div>
              <h6 className="font-bold text-xl italic py-4">
                Step 3: Implementation
              </h6>
              <p>
                With your strategy in place, we proceed to implement the
                solutions. Our team sets up and configures the systems. We
                optimize everything and ensure it works seamlessly within your
                business environment.
              </p>
            </div>
            <div className="shadow-hoverBoxShadow rounded-xl p-6">
              <div>
                <Image
                  src="/managing-business-icon-9.png"
                  width={100}
                  height={80}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
              </div>
              <h6 className="font-bold text-xl italic py-4">
                Step 4: Ongoing Support
              </h6>
              <p>
                After the implementation, our commitment doesn’t end. We provide
                ongoing support, monitoring, and system optimization to ensure
                your technology continues to serve your business effectively.
                That makes adjustments as needed to accommodate future growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl lg:text-4xl font-bold text-center pb-8">
          Frequently Asked <span className="text-primaryColor">Questions</span>
        </h3>
        <Accordion items={faqItems} />
      </div>

      <div className="container mx-auto">
        <h3 className="text-2xl lg:text-4xl font-bold mb-5">Contact Us</h3>
        <p className="mb-4 pb-4">
          Ready to elevate your business with tailored IT consulting and
          services? Contact us today! Fill out our contact form, give us a call,
          or email us, and our team will respond promptly to answer any
          questions or set up your initial consultation. Let’s work together to
          make your technology work for you!
        </p>
      </div>

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl lg:text-4xl font-bold pb-8">
          Ready to Transform Your Business with{" "}
          <span className="text-primaryColor">Reliable IT Consulting?</span>
        </h3>
        <p className="pb-5">
          When it comes to IT consultant services in Sydney,{" "}
          <a
            href="https://geekify.com.au/"
            className="text-primaryColor underline"
          >
            Geekify®
          </a>{" "}
          is the name you can trust. We go beyond the basics, helping businesses
          like yours harness the power of technology for growth and security.
          Whether you're a small business or a large enterprise, let us be your
          guide in the world of IT.
        </p>
      </div>
    </div>
  );
}

export default ManagingBusinessItSystems