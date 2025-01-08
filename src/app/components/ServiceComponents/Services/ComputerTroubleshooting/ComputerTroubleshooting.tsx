import Accordion from '@/app/components/sharedComponents/Accordion/Accordion'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import React from 'react'

function ComputerTroubleshooting({ service }: ServiceDetailsProps) {
  const faqItems = [
    {
      question: "What types of computers do you repair?",
      answer:
        "We repair all major types and brands of computers, including desktops, laptops, and monitors. Our services cover various models, operating systems, and custom-built computers.",
    },
    {
      question: "How do I know if my computer needs repair or replacement?",
      answer:
        "Our technicians can diagnose your device to determine the best course of action. Often, repairs are more affordable, but if replacement is more practical, we’ll advise you accordingly.",
    },
    {
      question: "Can you provide on-site support at my home or business?",
      answer:
        "Yes, we offer convenient on-site computer repair and home IT support. Our team can come directly to you to handle repairs and set up tasks.",
    },
    {
      question: "How long does a typical computer repair take?",
      answer:
        "Repair times vary by issue. Simple fixes may take just an hour or two, while complex repairs could take a couple of days. We always strive to provide fast service without compromising quality.",
    },
    {
      question: "Do you offer a warranty on your repairs?",
      answer:
        "Yes, we offer warranties on most repairs to ensure peace of mind. We’ll provide specific details based on the type of service and parts involved.",
    },
    {
      question: "Can you help with data recovery from my computer?",
      answer:
        "Absolutely. We have data recovery services to retrieve lost, deleted, or corrupted data. We’ll work to recover as much data as possible, depending on the condition of your device.",
    },
    {
      question: "How do I schedule a repair or support appointment?",
      answer:
        "You can easily schedule an appointment by contacting us through email or by visiting our office during business hours.",
    },
    {
      question: "Do you handle screen repairs and replacements for laptops?",
      answer:
        "Yes, we offer computer screen repair services, including laptop computer screen repairs and replacements for broken, cracked, or malfunctioning screens.",
    },
    {
      question: "What kind of maintenance services do you offer?",
      answer:
        "Our maintenance services include software updates, virus scans, hardware cleaning, system optimization, and preventive checks to keep your computer running smoothly.",
    },
    {
      question: "How much do your computer services cost?",
      answer:
        "Our rates vary depending on the type of service and complexity of the issue. We provide transparent estimates before starting any work. So you’ll know exactly what to expect.",
    },
  ];

  return (
    <div>
      <Showcase
        backgroundImage={service?.image}
        title={service?.name}
        paragraph="One-stop solution for your IT needs, Order any service, anytime. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam quas nihil consequuntur consequatur deleniti quae quos neque ullam natus tempora."
      />
      <div className="container mx-auto ">
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
              At Geekify®, we understand that computers play a vital role in
              everyday life, from work and study to staying connected with
              others. When issues arise, they can disrupt your day, and that’s
              where we come in to help. Our team of skilled computer technicians
              is committed to delivering reliable, professional support to get
              your computer back up and running smoothly. We offer a wide range
              of services, including on site computer repair, screen repair, and
              ongoing support tailored to your needs. Whether it’s a simple{" "}
              <a
                href="https://geekify.com.au/book-online"
                className="text-primaryColor underline"
              >
                troubleshooting fix
              </a>{" "}
              or a complex repair, we bring expertise and efficiency to each
              job. That ensures your tech remains in optimal condition. Let
              Geekify® be your trusted partner for all your computer needs. So
              you can stay productive without the worry of technology setbacks
              and managed it service.
            </p>
          </div>

          <div className="pt-8 md:pt-14 lg:pt-20 xl:pt-28">
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
              Our Computer{" "}
              <span className="text-primaryColor">Services and Support</span>
            </h3>
            <p className="text-center pb-5">
              Our computer support services cover a wide range of
              computer-related issues. Whether you need computer fix solutions,
              monitor repair, laptop screen repairs, or PC troubleshooting, our
              technicians have the expertise to handle New York computer help.
              Here’s a breakdown of our core services:
            </p>

            <h5 className="text-2xl md:text-2xl lg:text-3xl font-semibold pb-4 pt-3 text-center">
              Comprehensive Computer Services and Support
            </h5>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/computer-troubleshooting-1.png"
                  alt="Computer Fix and Tech Services"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className="flex">
                      <h3 className="text-lg font-bold italic">
                        Computer Fix and Tech Services:
                      </h3>
                      <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      From software issues to hardware malfunctions, our
                      computer managed service includes everything you need to
                      keep your system running smoothly. Our computer mechanics
                      troubleshoot, repair, and optimize your device. So you can
                      get back to what matters most with tech support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/computer-troubleshooting-2.png"
                  alt="Monitor and Screen Repair"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className="flex ">
                      <h3 className="text-lg font-bold italic">
                        Monitor and Screen Repair:
                      </h3>
                      <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Dealing with a cracked or malfunctioning screen? Our{" "}
                      <a
                        href="https://geekify.com.au/services/computer-troubleshooting"
                        className="text-primaryColor underline"
                      >
                        computer screen repair services
                      </a>{" "}
                      cover both laptop computer screen repairs and PC screen
                      repair. We assess screen issues and provide affordable,
                      fast fixes, whether it’s replacing a broken laptop screen
                      or addressing monitor issues.
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="text-2xl md:text-2xl lg:text-3xl font-semibold pb-4 pt-3 text-center">
                Expert IT Repairs and Troubleshooting
              </h5>
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/computer-troubleshooting-3.png"
                  alt="On-Site Computer Repair and Home IT Support Service"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className="flex ">
                      <h3 className="text-lg font-bold italic">
                        On-Site Computer Repair and Home IT Support Service:
                      </h3>
                      <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      When you need support at your location, our on site
                      computer repair service is the perfect solution. We’ll
                      come to your home or office, providing convenient{" "}
                      <a
                        href="https://geekify.com.au/services/computer-installation-configuration-fixing"
                        className="text-primaryColor underline"
                      >
                        home IT support
                      </a>{" "}
                      and ensuring that your devices are set up, secured, and
                      functioning smoothly.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/computer-troubleshooting-4.png"
                  alt="Computer Issue Troubleshooting and Diagnostics"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className="flex ">
                      <h3 className="text-lg font-bold italic">
                        Computer Issue Troubleshooting and Diagnostics:
                      </h3>
                      <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Unsure what’s wrong with your device? Our computer
                      troubleshooters are skilled at diagnosing issues and
                      offering solutions. From boot-up issues to unexpected
                      crashes, our technical support team can pinpoint the cause
                      and fix the problem efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <h5 className="text-2xl md:text-2xl lg:text-3xl font-semibold pt-3 text-center">
          Laptop Repairs and Screen Replacements
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 pt-5">
          <div className="shadow-hoverBoxShadow rounded-xl p-6">
            <Image
              src="/computer-troubleshooting-icon-1.png"
              width={200}
              height={200}
              alt=""
              className="w-auto h-auto"
            />
            <h6 className="text-lg font-bold pt-4 italic">
              Laptop and PC Fix Services:
            </h6>
            <p>
              Laptops are built to be portable, but sometimes their screens,
              hinges, and keyboards are more prone to damage. Our laptop
              computer repair services include everything from screen repairs to
              internal hardware replacements. Our customer service ensures you
              can get back to work quickly.
            </p>
          </div>
          <div className="shadow-hoverBoxShadow rounded-xl p-6">
            <Image
              src="/computer-troubleshooting-icon-2.png"
              width={200}
              height={200}
              alt=""
              className="w-auto h-auto"
            />
            <h6 className="text-lg font-bold pt-4 italic">
              Fix Laptop Issues on Demand:
            </h6>
            <p>
              Our technicians are equipped to handle common laptop issues like
              unresponsive screens, broken hinges, or overheating problems. We
              understand that every laptop is different, and we offer customized
              repair options that are quick and cost-effective.
            </p>
          </div>
        </div>
        <h5 className="text-2xl md:text-2xl lg:text-3xl font-semibold pt-6 lg:pt-10 text-center">
          Complete Support for IT Systems and Networks
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 pt-5">
          <div className="shadow-hoverBoxShadow rounded-xl p-6">
            <Image
              src="/computer-troubleshooting-icon-3.png"
              width={200}
              height={200}
              alt=""
              className="w-auto h-auto"
            />
            <h6 className="text-lg font-bold pt-4 italic">
              IT Repairs and Network Setup:
            </h6>
            <p>
              We understand that businesses and homes rely on seamless IT
              networks to stay productive and connected. Our IT repair services
              cover network setup, security assessments, and ongoing
              maintenance. That ensures your network remains fast, secure, and
              efficient.
            </p>
          </div>
          <div className="shadow-hoverBoxShadow rounded-xl p-6">
            <Image
              src="/computer-troubleshooting-icon-4.png"
              width={200}
              height={200}
              alt=""
              className="w-auto h-auto"
            />
            <h6 className="text-lg font-bold pt-4 italic">
              Home IT Support for Personal Use:
            </h6>
            <p>
              If you’re working from home or have a family network, our home IT
              support services can help. We assist with router setup, internet
              troubleshooting, device connectivity, computer problems, and much
              more. That keeps your home network running smoothly.
            </p>
          </div>
        </div>
        <h5 className="text-2xl md:text-2xl lg:text-3xl font-semibold pt-6 lg:pt-10 text-center">
          Computer Help and Support Plans
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 pt-5">
          <div className="shadow-hoverBoxShadow rounded-xl p-6">
            <Image
              src="/computer-troubleshooting-icon-5.png"
              width={200}
              height={200}
              alt=""
              className="w-auto h-auto"
            />
            <h6 className="text-lg font-bold pt-4 italic">
              Regular Maintenance Plans:
            </h6>
            <p>
              Computers perform better with regular maintenance, which is why we
              offer remote support plans for ongoing computer help and
              maintenance services. From cleaning and updates to performance
              optimization, we help you avoid problems before they start.
            </p>
          </div>
          <div className="shadow-hoverBoxShadow rounded-xl p-6">
            <Image
              src="/computer-troubleshooting-icon-6.png"
              width={200}
              height={200}
              alt=""
              className="w-auto h-auto"
            />
            <h6 className="text-lg font-bold pt-4 italic">
              Support for Individuals and Small Businesses:
            </h6>
            <p>
              Whether you’re a student, remote worker, or business owner, we
              offer consulting services and support plans to meet your computer
              services and support needs. Our plans are designed to be
              affordable and flexible. Our remote it support ensures you receive
              the best care without overspending.
            </p>
          </div>
        </div>
      </div>

      <QuickContact title="Contact Us for Computer Services and Support" />

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 ">
          Why Choose Geekify® for{" "}
          <span className="text-primaryColor">
            Computer Services and Support?
          </span>
        </h3>
        <p className="pb-5">
          Choosing{" "}
          <a
            href="https://geekify.com.au/"
            className="text-primaryColor underline"
          >
            Geekify®
          </a>{" "}
          means choosing a partner who values quality, reliability, and
          convenience in every interaction. Here’s why our clients prefer us for
          their computer services and support needs:
        </p>

        <Image
          src={"/computer-troubleshooting-5.png"}
          alt="Computer Services and Support"
          width={1200}
          height={900}
          className="w-full h-auto"
        />
        <div className="py-5">
          <h5 className="text-xl font-bold italic pb-1">
            1. Highly Skilled Technicians:
          </h5>
          <p>
            Our team consists of experienced computer mechanics who are trained
            to manage a wide range of repair, upgrade, and data recovery service
            tasks. Each technician brings specialized expertise, whether it’s
            hardware repair, software troubleshooting, or network setup,
            ensuring you get professional solutions.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-1">
            2. Latest Tools and Techniques:
          </h5>
          <p>
            Technology is constantly evolving, and so are we. Our team uses the
            project management and the latest diagnostic tools and repair
            techniques to provide fast, effective services. Our computer
            services and support commitment to modern solutions help us address
            even complex issues efficiently. That keeps your devices in peak
            condition.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-1">
            3. On-Site Service for Ultimate Convenience:
          </h5>
          <p>
            We know that bringing your computer to a repair shop isn’t always
            feasible. Our on site computer repair service means our experts come
            directly to you. They provide seamless support at your home or
            office. This service is perfect for those who need immediate help or
            ongoing home IT support.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-1">
            4. Quick and Efficient Service:
          </h5>
          <p>
            We understand that you rely on your computer daily, so we work to
            minimize downtime. Our quick productivity and turnaround times are a
            priority. Most repairs are completed within a day or two, and for
            urgent issues, we provide same-day services when possible.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-1">
            5. Transparent and Affordable Pricing:
          </h5>
          <p>
            Computer repairs and support don’t have to be expensive. We offer
            competitive pricing on all tech devices. Our transparent estimates
            ensure you know exactly what to expect. Our goal is to make quality
            repair and information technology services accessible to everyone
            without hidden fees.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-1">
            6. Personalized Solutions for Every Client:
          </h5>
          <p>
            Every computer and every issue is unique. Our technicians take the
            time to understand your specific needs and tailor their approach to
            find the most suitable, cost-effective solution. Whether it’s a
            quick computer equipment fix or a custom IT setup, we personalize
            our services for the best results.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-1">
            7. Regular Maintenance Plans for Lasting Performance:
          </h5>
          <p>
            Prevention is better than cure. Our computer services and support’s
            regular maintenance plans help you avoid common issues. That keeps
            your devices performing optimally and extending their lifespan. From
            cleaning to software updates, our operating system services keep
            your computer running smoothly over time.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-1">
            8. Proven Expertise in IT Repairs:
          </h5>
          <p>
            With a track record of successful repairs and satisfied clients, we
            are trusted for IT repairs and support for network security. Our
            expertise spans desktops, laptops, monitors, and other hardware.
            That makes us a versatile choice for any tech-related and computer
            system-related need.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-1">
            9. Commitment to Customer Satisfaction:
          </h5>
          <p>
            Our clients’ satisfaction is our top priority. We work diligently to
            ensure that every client receives quality service on cybersecurity
            and leaves feeling confident in their decision to choose Geekify®.
            From the first consultation to post-cloud computing service and
            support, we focus on making your experience positive.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-1">
            10. Guaranteed Quality of Service:
          </h5>
          <p>
            We stand behind the quality of our work with a satisfaction
            guarantee. If you’re not completely satisfied with our service,
            we’ll work to make it right with the proactive monitoring system.
            This commitment reflects our dedication to reliability, quality,
            security, and earning our client's trust every day.
          </p>
        </div>
        <p className="text-xl lg:text-2xl font-bold italic text-gray-500">
          With Geekify®, you can trust that your computer and IT needs are in
          capable hands. Reach out today to experience the Geekify® difference –
          where your satisfaction is always our priority.
        </p>
      </div>

      <QuickContact title="Contact Us for Computer Services and Support" />

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl lg:text-4xl font-bold text-center pb-8">
          Frequently Asked <span className="text-primaryColor">Questions</span>
        </h3>

        <Accordion items={faqItems} />
      </div>

      <div className="container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <h3 className="text-2xl lg:text-4xl font-bold pb-5">
          Contact Us Today for Reliable{" "}
          <span className="text-primaryColor">
            Computer Services and Support
          </span>
        </h3>
        <p>
          Geekify® is your trusted partner for all computer services and support
          assistance. Whether you need a quick computer fix, complex IT repairs,
          or professional home IT support, our team is ready to make your
          technology problems a thing of the past with Microsoft Office. Contact
          us today to schedule an appointment or simply ask any questions about
          tech issue, if you may have.
        </p>
      </div>

      <div className="container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <h3 className="text-2xl lg:text-4xl font-bold pb-5">Final Thought</h3>
        <p>
          <a
            href="https://geekify.com.au/"
            className="text-primaryColor underline"
          >
            Geekify®
          </a>{" "}
          is dedicated to providing comprehensive and reliable computer services
          and support that bring peace of mind to our client's infrastructure.
          With skilled technicians, personalized solutions, and a commitment to
          customer satisfaction, we aim to make technology more accessible and
          manageable for everyone. Our range of services—from{" "}
          <a
            href="https://www.gamingcutter.com/20-common-computer-problems-and-solutions/"
            className="text-primaryColor underline"
          >
            quick fixes
          </a>{" "}
          to complete IT support in business operations—ensures that you can
          always count on us for help, whether at home or in the office. We’re
          not just here to fix computers but to build lasting relationships with
          our clients in remote access. That makes Geekify® the trusted name you
          can rely on for all your computer service in hard drive needs.
        </p>
        <p className="text-xl lg:text-2xl font-bold italic text-gray-500 pt-5">
          Let Geekify® be your go-to solution for dependable, affordable
          computer support. We look forward to helping with all your IT needs!
        </p>
      </div>
    </div>
  );
}

export default ComputerTroubleshooting