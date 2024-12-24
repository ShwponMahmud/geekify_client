import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import React from 'react'

function ComputerInstallationConfigurationFixing({ service }: ServiceDetailsProps) {
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
      <div className='container mx-auto mt-[-100px]'>
        <div>
          <div className='hidden lg:grid grid-cols-3 gap-8'>
            <div className='bg-white py-14 px-7 text-center shadow-lg'>
              <div className='flex justify-center items-center'>
                <Image src={'/banner-card-icon-1.png'} width={150} height={150} alt='' className='w-[100px] h-[100px]' />
              </div>
              <h6 className='text-xl font-bold pt-5 pb-1'>Select the <span className='text-primaryColor'>Service</span></h6>
              <p>Pick the services you are looking for- from the website or app.</p>
            </div>
            <div className='bg-white py-10 px-7 text-center shadow-lg'>
              <div className='flex justify-center items-center'>
                <Image src={'/banner-card-icon-2.png'} width={150} height={150} alt='' className='w-[100px] h-[100px]' />
              </div>
              <h6 className='text-xl font-bold pt-5 pb-1'>Pick Up Your <span className='text-primaryColor'>Schedule</span></h6>
              <p>Pick your convenient date and time to avail the service.</p>
            </div>
            <div className='bg-white py-10 px-7 text-center shadow-lg'>
              <div className='flex justify-center items-center'>
                <Image src={'/banner-card-icon-3.png'} width={150} height={150} alt='' className='w-[100px] h-[100px]' />
              </div>
              <h6 className='text-xl font-bold pt-5 pb-1'><span className='text-primaryColor'>Book</span> Appointment</h6>
              <p>Review and book your appointment. We’ll assign the expert technicians schedule for you.</p>
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
                __html: service?.description ?? ""
              }}
            ></div>
          </div>
        </div>

      </div>
      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <div>

          <div>
            <p className='text-center'>
              Now is the time to talk about Laptop Computer Repair Services in Sydney. Our Geeks CRS offers quick, dependable laptop computer repair services for both individuals and businesses in Sydney. Our
              skilled computer technicians are experienced in diagnosing and fixing various issues to bring your laptop or PC back to full functionality. From cracked screens to software glitches and general
              maintenance, we tackle repairs with precision. That ensures your device runs smoothly again. Our goal is to provide effective solutions that restore optimal performance and prevent future issues.
              So, whether you’re dealing with a broken display, slow software, or other technical problems, you can count on Geeks CRS to deliver <a href="https://geekify.com.au/book-online" className='text-primaryColor underline'>reliable repairs</a> tailored to your needs.
            </p>
          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>Why Choose Geeks CRS for <span className='text-primaryColor'>Your Laptop Computer Repair?</span></h3>
            <p className='text-center pb-5'>
              When your laptop or desktop encounters issues, it can disrupt your work, studies, or daily routines. At Geeks CRS, we prioritize fast, reliable repairs to get you back on track with Micro Center.
              Our service is trusted by many. Thanks to our commitment to quality and customer satisfaction for computer repair service.
            </p>

            <div className="py-8 space-y-6">
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/computer-installation-configuration-1.png"
                  alt="Affordable Prices"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">Professional Computer Technicians:</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Our team consists of highly skilled technicians with extensive experience in PC or laptop repair services. From simple to complex repairs, our experts diagnose issues accurately and apply
                      effective solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/computer-installation-configuration-2.png"
                  alt="Affordable Prices"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">Quick and Affordable Repairs:</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      We understand the urgency of having a functional device. That’s why our repair computer service is designed to be efficient without compromising quality. Our independent repair provider also
                      focuses on keeping prices reasonable. That provides you with <a href="https://geekify.com.au/book-online" className='text-primaryColor underline'>cost-effective repairs</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/computer-installation-configuration-3.png"
                  alt="Affordable Prices"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">Comprehensive Repair Services:</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Our <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geeks CRS</a>, offers a wide range of computer fix services to meet all your needs for Sydney or New York computer help. From cracked screens to software issues and hardware repair, we cover
                      every aspect of laptop and desktop repairs. That ensures you don’t need to look elsewhere for data backup.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/computer-installation-configuration-4.png"
                  alt="Affordable Prices"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">Customer-First Approach:</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      We believe in delivering a service experience that revolves around you. Our computer repair technician takes time to listen to your concerns, providing personalized solutions that match your
                      specific requirements. Our goal is to leave you with a mobile device that’s fully functional and to your satisfaction.
                    </p>
                  </div>
                </div>
              </div>

              <p className='text-2xl font-bold text-gray-500 italic text-center'>Choose our Geeks CRS for reliable laptop computer repair requests in Sydney, where your iPhone repair or other device’s
                performance and your satisfaction are our top priorities.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 text-center'>Our Computer <span className='text-primaryColor'>Repair Services</span></h3>
        <p className='text-center pb-5'>At Geeks CRS, we offer a complete set of computer repairs and services with expert technicians for both laptops and desktops:</p>

        <Image src={'/computer-installation-configuration-5.png'} alt='' width={1200} height={900} className='w-full h-auto' />
        <div className='py-5'>
          <h5 className='text-xl font-bold italic pb-1'>Laptop Screen Repairs</h5>
          <p>
            Accidents happen, and cracked or damaged screens are common. We offer specialized repair computer laptop screens for various models and brands. Whether it’s a minor crack or a completely shattered
            display, our technicians can replace your screen with high-quality parts quickly and affordably. Because our technicians have a good computer training.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-1'>Battery Replacement and Power Issues</h5>
          <p>
            Is your laptop not holding a charge or failing to turn on? Power issues can result from battery problems, charger issues, or internal faults. Our technicians can diagnose the problem and replace
            batteries, power jacks, or other components to get your laptop running smoothly.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-1'>Keyboard and Trackpad Repairs</h5>
          <p>
            If your keyboard or trackpad isn’t responding correctly, it can be frustrating and hinder productivity. Our laptop computer repair services include replacement and repair options for both keyboards and
            trackpads. That ensures smooth operation and restoring ease of use.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-1'>Software Troubleshooting and Virus Removal</h5>
          <p>
            Slow performance, pop-up ads, windows updates, and other software issues are signs of potential virus or malware infections. Our computer technicians will remove any threats and install the latest
            security updates to protect your device. We also help troubleshoot software errors, improve speed, and keep your laptop or PC secure.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-1'>Hard Drive and Data Recovery</h5>
          <p>
            If your laptop is experiencing hard drive issues or you’re facing data loss, Geeks CRS offers data recovery services to restore important files and documents. We provide solutions for hard drive
            replacement and data recovery. So you don’t lose access to valuable information.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-1'>PC Repair and Desktop Services</h5>
          <p>
            Our services aren’t limited to laptops. We also offer comprehensive PC repair services for desktops. Our technicians can help you with hardware upgrades, graphics card replacements, operating systems,
            and general maintenance. That makes sure your desktop computer runs at its best.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-1'>System Upgrade and Optimization</h5>
          <p>
            Outdated systems can slow down your work and affect productivity. We provide upgrade services to optimize your laptop or desktop’s performance. From memory upgrades to new software installations,
            we’ll ensure your system is fast and efficient.
          </p>
        </div>
      </div>

      <QuickContact title='Contact Us Today for Expert CCTV Installation Services' />




      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28 text-center'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>Laptop Repairs <span className='text-primaryColor'>Sydney Residents Trust</span></h3>
        <p className='mb-4'>
          When it comes to dependable laptop repairs in Sydney, Geeks CRS is a trusted choice. We understand that each customer’s device is unique and that fast, effective repairs are essential to avoid
          disruptions. Our expert technicians are familiar with a wide range of laptop makes and models. That includes popular brands like Apple, Dell, HP, Lenovo, and more. This knowledge allows us to deliver
          tailored repairs that address specific issues and restore your device’s functionality efficiently.
        </p>
        <p>
          With a focus on quality and customer satisfaction, our Geeks CRS provides laptop computer repair for everything from cracked screens and battery issues to software glitches and performance optimization.
          We combine expertise with a commitment to fast turnaround times. That helps you get back to work, study, or play without delay. For professional, reliable laptop repairs in Sydney, you can count on
          Geeks CRS to meet your needs.
        </p>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7'>Computer <span className='text-primaryColor'>Repairs Sydney</span></h3>
        <p>
          Finding reliable computer repairs in Sydney is essential for both individuals and businesses to keep their devices running efficiently. At Geeks CRS, we offer a comprehensive range of laptop computer
          repair services designed to address common computer issues and complex technical problems. Here’s why Geeks CRS stands out as the trusted choice for computer repairs in Sydney:
        </p>


        <div className='my-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>Experienced Technicians:</h5>
          <p>
            Our team consists of highly trained and experienced technicians skilled in diagnosing and repairing various repair computer laptop issues. From hardware malfunctions to software glitches or Windows
            registry, and iPad repair our certified technicians are equipped to handle it all. That ensures effective repairs every time.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>Quick and Convenient Service:</h5>
          <p>
            We know that a faulty computer can disrupt your schedule, which is why we prioritize fast, efficient service. Whether you need a same-day laptop computer repair or prefer to schedule an appointment,
            our flexible options make it easy to get the help you need without unnecessary delays.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>Comprehensive Repairs:</h5>
          <p>
            Geeks CRS offers a full range of services, including laptop screen repair, cracked screens, battery replacements, flash drives, software updates, and data recovery. This all-inclusive approach means
            you won’t need to look elsewhere. That saves you both time and hassle when hardware issues arise.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>Advanced Diagnostics:</h5>
          <p>
            Our driver process begins with thorough diagnostics to accurately identify the problem. This helps us address the root cause rather than just the symptoms. That ensures a lasting solution. Our computer
            technician uses advanced tools and techniques to perform diagnostics effectively.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>Transparent Pricing:</h5>
          <p>
            At Geeks CRS, we believe in honest, upfront pricing. After diagnosis, we provide a clear quote with no hidden fees. So you know the exact cost of repairs before we begin. This transparency builds
            trust and lets you make an informed decision.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>High-Quality Parts:</h5>
          <p>
            To ensure durability and top performance, we use only high-quality replacement parts for laptop computer repair. This commitment to quality parts not only enhances the external device's reliability
            but also maximizes the longevity of your repairs. Our trained technicians give you better value for your investment.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>Customer-Centric Approach:</h5>
          <p>
            Our focus is always on customer satisfaction. We take the time to understand each customer’s unique needs and common problems. This provides personalized laptop repair solutions that suit your budget
            and expectations. Our friendly staff is also here to answer questions and offer advice for ongoing maintenance with our computer repair shop.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>Locally Trusted in Sydney:</h5>
          <p>
            As a trusted laptop computer repair service in Sydney, we understand the specific needs of our local customers. Our commitment to quality and community-focused service makes Geeks CRS a go-to choice
            for residents and businesses across the city.
          </p>
        </div>

        <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>
          Geeks CRS is dedicated to providing expert, efficient, and reliable laptop computer repair in Sydney, ensuring that your devices stay in peak condition for years to come.
        </p>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>How Our <span className='text-primaryColor'>Repair Process Works</span></h3>
        <p className='pb-5'>
          At Geeks CRS, we make the laptop computer repair process smooth, transparent, and convenient. So you know exactly what to expect from start to finish. Here’s how our process works:
        </p>
        <div className='pb-5'>
          <ul className='list-disc ml-5 space-y-2'>
            <li><span className='font-bold'>Diagnosis: </span>
              Our first step is to conduct a thorough diagnosis of your desktop computer or laptop repair. This step allows us to accurately identify the root cause of the issue, whether it’s a
              hardware malfunction, software error, or a combination of both. Our skilled technicians use diagnostic tools and their expertise to pinpoint the problem and determine the best solution.
            </li>
            <li><span className='font-bold'>Transparent Quoting: </span>
              Once the diagnosis is complete, we provide you with a clear, upfront quote that outlines the costs associated with the repair. We believe in complete transparency, so there
              are no hidden fees or unexpected charges. You’ll know exactly what to expect in terms of both cost and repair time. That allows you to make an informed decision.
            </li>
            <li><span className='font-bold'>Repair and Testing: </span>
              After you approve the quote, our technicians get to work repairing your device. Using high-quality parts and precise techniques, we fix the identified issues to restore your
              laptop or desktop’s functionality. Once the repairs are completed, we run a series of tests to ensure that your device is working smoothly and reliably. This testing phase is critical for
              quality control. That allows us to address any residual issues immediately.
            </li>
            <li><span className='font-bold'>Return: </span>
              Finally, we will return your repaired device, which is now fully functioning and ready for use. Our team will also walk you through any relevant maintenance tips or updates to ensure optimal
              performance. With Geeks CRS, you’ll receive a device that’s not only fixed but also ready to handle your daily needs with confidence.
            </li>
          </ul>
          <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>This simple, clear process is why Sydney residents trust Geeks CRS for reliable, effective laptop computer repair services.</p>
        </div>
      </div>

      <QuickContact title='Contact Us Today for Expert CCTV Installation Services' />

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl lg:text-4xl font-bold text-center pb-8'>Frequently Asked <span className='text-primaryColor'>Questions</span></h3>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">1. How long will the repair take?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>Most repairs are completed within a few hours to a day. We also offer urgent repair services for immediate needs.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">2. Do you provide a warranty for repairs?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>Yes, all our repairs come with a standard warranty. Contact us for details about specific services.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">3. Can you repair all brands of laptops?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>Our technicians are experienced in handling all major brands, including Apple, Dell, HP, Lenovo, and more.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">4. What if my computer problem isn’t listed?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>We handle a wide range of <a href="https://erieit.edu/10-common-problems-of-computer-hardware/" className='text-primaryColor underline'>laptop and computer issues</a>.
                Feel free to contact us, and we’ll do our best to
                help.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">5. How much does a typical repair cost?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>Costs vary depending on the issue, but we aim to keep our prices affordable. Reach out for a quote.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">6. Do I need an appointment?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>While walk-ins are welcome, we recommend scheduling an appointment to ensure faster service.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl lg:text-4xl font-bold pb-5'>Why Trust <span className='text-primaryColor'>Geeks CRS?</span></h3>
        <p>
          At Geeks CRS, we are dedicated to providing outstanding laptop computer repair services. With years of industry experience and a team of expert computer technicians, we’ve earned a reputation as a
          trusted choice for laptop repairs across Sydney. Our commitment to quality ensures that every repair is handled with precision and care. No matter the complexity of the issue.
        </p>
        <p className='pt-5'>
          We understand that dealing with a malfunctioning laptop can be frustrating, so we’ve designed our repair process to be as simple, stress-free, and affordable as possible. From diagnostics to transparent
          quoting and quality repairs, we prioritize customer satisfaction at every step. When you choose Geeks CRS, you’re choosing a reliable partner who values your time, budget, and device performance.
          Let us take care of your laptop or computer repair needs with confidence and expertise.
        </p>

        <h3 className='text-2xl lg:text-4xl font-bold pb-5 pt-8 md:pt-14 lg:pt-20 xl:pt-28'>Contact Us</h3>
        <p>
          At <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geeks CRS</a>, we’re here to help with all your laptop and computer repair needs. Whether you have a question, need a quote, or want to schedule a repair, our friendly team is ready to assist.
        </p>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl lg:text-4xl font-bold pb-5'>Final Thought</h3>
        <p>
          When it comes to laptop computer repair services, Geeks CRS is here to make the process easy, affordable, and reliable. Our experienced team is dedicated to helping you get back to work, study, or
          play with a device that performs like new. From diagnosing issues to providing transparent quotes and expert repairs, we prioritize your convenience and satisfaction at every step. Trust Geeks CRS
          to keep your devices running smoothly. So you can focus on what matters most. For laptop repairs in Sydney that you can rely on, Geeks CRS is just a call or click away.
        </p>
        <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>
          For reliable laptop computer repair services in Sydney, Geeks CRS is just a call or email away. Let us help you get your devices back to peak performance!
        </p>
      </div>

    </div>
  )
}

export default ComputerInstallationConfigurationFixing