import Paypal from '@/app/components/Paypal/Paypal'
import Accordion from '@/app/components/sharedComponents/Accordion/Accordion'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import React from 'react'

function DataRecoveryDetails({ service }: ServiceDetailsProps) {
  const faqItems = [
    {
      question: "How long does data recovery take?",
      answer:
        "The time it takes depends on the extent of the damage and the type of recovery required. Typically, we aim to complete most jobs within 3-5 business days.",
    },
    {
      question: "Can data be recovered from a water-damaged hard drive?",
      answer:
        "Yes! In many cases, we can recover data from water-damaged hard drives. However, it’s important to avoid powering on the device and to contact us as soon as possible.",
    },
    {
      question: "Is it possible to recover deleted files?",
      answer:
        "Yes, in most cases, deleted files can be recovered, especially if they haven’t been overwritten. The sooner you contact us, the better the chances of successful recovery.",
    },
    {
      question: "What is the cost of data recovery?",
      answer:
        "Pricing depends on the complexity of the job and the amount of data being recovered. Contact us for a free quote.",
    },
    {
      question: "What kind of devices can you recover data from?",
      answer:
        "We can recover data from a wide range of devices, including desktop computers, laptops, external hard drives, USB drives, SSDs, and RAID systems.",
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
              Have you accidentally lost your important data? Don’t worry! Our professional data recovery services at <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geekify®</a> in
              Australia are here to help you recover your important files quickly and safely. Whether your data loss is caused by a hardware malfunction, accidental deletion, or a virus attack, our skilled team
              has the tools and expertise to recover it quickly and efficiently. Our team specializes in data recovery for various devices, including hard drives, SSDs, USBs, etc.
            </p>
            <p className='text-center py-7'>
              We proudly serve clients across Brisbane, Sydney, and other parts of Australia. <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geekify®</a> offers reliable and fast solutions tailored to your needs. Our experts use advanced laptop data recovery
              techniques and strict security protocols to restore your data securely. Whether it's personal files or crucial business data, you can trust us to recover your lost information when you need it
              the most.
            </p>
            <p className='text-xl font-bold italic text-center'>Let us help your server recover data with confidence!</p>
          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>Why Choose Our <span className='text-primaryColor'>Data Recovery Services?</span></h3>
            <p className='text-center'>When you lose important data, it can be incredibly frustrating and stressful. However, our expert data or photo recovery service makes the recovery process smooth and hassle-free. Here’s why we
              are the best choice for recovering your lost files:</p>

            <div className="py-8 px-4 space-y-6">
              <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-recovery-1.png"
                  alt="recover data from the hard drive"
                  className="w-full md:w-1/3 h-full object-cover"
                />
                <div className="p-5">
                  <div className='flex '>
                    <h3 className="text-lg font-bold">1. Expert Team</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Our team consists of highly skilled professionals with years of experience handling all types of data loss scenarios. We've seen it all, whether it's due to a hard drive failure, file
                    corruption, or accidental deletion. Our technicians recover data from a variety of storage devices. They understand the urgency of getting your files back. No matter how complex the issue is,
                    we have the expertise to deliver the best results. Our <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geekify®</a> has an emergency service too.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-recovery-2.png"
                  alt="data recovery of mobile phone"
                  className="w-full md:w-1/3 h-full object-cover"
                />
                <div className="p-5">
                  <div className='flex '>
                    <h3 className="text-lg font-bold">2. Fast Turnaround</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    We recognize that your data is important, and time is often of the essence, especially for businesses. That’s why we prioritize fast and efficient NAS data recovery services. Once we receive
                    your damaged or corrupted device, we begin the diagnostic and on-track easy recovery process immediately. We complete most recoveries in just a few days. That allows you to minimize downtime
                    and get back to what matters most.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-recovery-3.png"
                  alt="technics data recovery"
                  className="w-full md:w-1/3 h-full object-cover"
                />
                <div className="p-5">
                  <div className='flex '>
                    <h3 className="text-lg font-bold">3. Cutting-edge Technology</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    To ensure the highest success rate in the <a href="https://www.ibm.com/think/topics/data-recovery" className='text-primaryColor underline'>data recovery process</a>, we use the latest, most advanced tools and techniques available. We equip our facilities with specialized hardware and software.
                    That designed for recovering data from a wide range of storage devices, including hard drive data recovery, SSDs, USB flash drives, external drives, and RAID arrays. Whether your device has
                    suffered physical damage or software corruption, we have the technology to retrieve your lost data securely and accurately.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-recovery-4.png"
                  alt="how much does data recovery cost"
                  className="w-full md:w-1/3 h-full object-cover"
                />
                <div className="p-5">
                  <div className='flex '>
                    <h3 className="text-lg font-bold">4. No Data, No Fee Policy</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    We believe in providing honest and transparent service. That’s why we offer a No Data, No Fee policy. That means you only pay if we successfully recover your data security. If for any reason
                    we are unable to retrieve your lost files, there’s no charge. This ensures that our clients only pay for successful results. That makes us a risk-free choice for your data recovery <a href="https://geekify.com.au/services/data-recovery" className='text-primaryColor underline'>needs</a>. <br />
                    With our expert team, fast service, cutting-edge technology, and customer-first approach, you can trust us to handle your data recovery efficiently and affordably. Whether you're in Brisbane,
                    Sydney, or elsewhere in Australia, we are ready to help you recover your valuable data quickly and securely!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>Our Data <span className='text-primaryColor'>Recovery Services?</span></h3>
            <p className='mb-4 text-center'>We offer a variety of professional <a href="https://geekify.com.au/services/data-recovery" className='text-primaryColor underline'>data recovery</a> services to suit your needs, including:</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 mt-12'>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <div className='w-[100px] h-[100px] rounded-full bg-sectionBackgroundColor flex justify-center items-center'>
                  <Image src='/data-recovery-icon-1.png' width={100} height={100} alt='' className='w-[90px] h-[90px]' />
                </div>
                <h6 className='font-bold text-xl italic py-4'>1. Hard Drive Data Recovery</h6>
                <p>If your hard drive has crashed or is malfunctioning, don’t worry. Our experts work on hard drive data recovery that is physically damaged, corrupted or has logical errors. Whether it's a personal
                  computer or a business-critical server, our team has the expertise to handle it.</p>
              </div>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <div className='w-[100px] h-[100px] rounded-full bg-sectionBackgroundColor flex justify-center items-center'>
                  <Image src='/data-recovery-icon-2.png' width={100} height={100} alt='' className='w-[90px] h-[90px]' />
                </div>
                <h6 className='font-bold text-xl italic py-4'>2. SSD and Flash Drive Recovery</h6>
                <p>Solid-state drives (SSD) and flash drives are becoming more common. But they can still suffer data loss. We specialize in hard disk data recovery, including SSDs and flash drives. That ensures
                  we retrieve your important files safely.</p>
              </div>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <div className='w-[100px] h-[100px] rounded-full bg-sectionBackgroundColor flex justify-center items-center'>
                  <Image src='/data-recovery-icon-3.png' width={100} height={100} alt='' className='w-[90px] h-[90px]' />
                </div>
                <h6 className='font-bold text-xl italic py-4'>3. RAID Recovery</h6>
                <p>RAID is a secure data recovery service. These systems are great for redundancy, but they aren't foolproof. When a RAID array fails, it can lead to serious data loss. Our RAID recovery services
                  restore your data without compromising the system.</p>
              </div>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <div className='w-[100px] h-[100px] rounded-full bg-sectionBackgroundColor flex justify-center items-center'>
                  <Image src='/data-recovery-icon-4.png' width={100} height={100} alt='' className='w-[90px] h-[90px]' />
                </div>
                <h6 className='font-bold text-xl italic py-4'>4. External Hard Drive Recovery</h6>
                <p>External drives can be prone to accidental damage or failure. Our team expertly recovers data from external hard drives, whether they’ve been dropped, exposed to water, or have internal issues.</p>
              </div>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <div className='w-[100px] h-[100px] rounded-full bg-sectionBackgroundColor flex justify-center items-center'>
                  <Image src='/data-recovery-icon-5.png' width={100} height={100} alt='' className='w-[90px] h-[90px]' />
                </div>
                <h6 className='font-bold text-xl italic py-4'>5. Data Retrieval for Businesses</h6>
                <p>For businesses in Sydney and Brisbane, data loss can mean downtime and financial loss. Our secure data recovery services ensure that your business gets back on track fast, minimizing any
                  disruptions. We work with companies of all sizes to restore critical business data from servers, computers, and other storage systems..</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickContact title='Contact Us Today for Expert CCTV Installation Services' />

      <Paypal />

      <div className='container mx-auto'>
        <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7'>Data Recovery <span className='text-primaryColor'>in Sydney</span></h3>
          <p className='mb-4'>We understand how important your data is, whether it's personal files or business-related information. If you are located in Sydney and need reliable secure data recovery services,
            we are here to help. Our Brisbane-based team is equipped with the latest technology to ensure a fast and efficient recovery process.</p>

          <p className='font-bold'>Our data recovery Sydney services cover all types of data loss scenarios, including:</p>
          <div className='flex flex-col md:flex-row items-center gap-5 py-3'>
            <Image src={'/data-recovery-5.png'} width={200} height={200} alt='hard disk data recovery' className='w-auto h-auto' />
            <ul className='list-disc ml-5'>
              <li className='font-bold'>hard drive recovery</li>
              <li className='font-bold'>Accidentally deleted files</li>
              <li className='font-bold'>Corrupt or damaged files</li>
              <li className='font-bold'>Virus or malware attacks</li>
              <li className='font-bold'>Water or fire damage to storage devices</li>
            </ul>
          </div>
          <p>No matter what kind of data loss you're facing, we're here to help your hard drive data recovery for your valuable files.</p>
        </div>
      </div>

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>Trusted by <span className='text-primaryColor'>Data Recovery Expert</span></h3>
        <p className='mb-4 text-center pb-4'>
          Our data recovery company is designed to be simple, transparent, and stress-free. We guide you through every step to ensure you’re informed and comfortable throughout the recovery process. Here’s how it works:
        </p>
        <Image src={'/data-recovery-6.png'} alt='An expert proving data recovery services' width={1200} height={900} className='w-full h-auto' />
        <div className='py-5'>
          <h5 className='text-xl font-bold italic pb-2'>1. Consultation</h5>
          <p>
            The process begins with a free consultation. You can contact us by phone, email, or through our website to explain the data loss scenario issue you’re experiencing. During the consultation, we’ll
            gather details about the problem. Such as how the data was lost and the type of device involved or failed hard drive etc. Based on this information, our team will provide an initial overview of
            possible solutions and file recovery and recovered data options. This step ensures that you understand the process before any work begins.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>2. Diagnostic</h5>
          <p>
            After the consultation, we perform a full diagnostic of your device. Whether it’s a hard drive, SSD, USB, or another storage device, our experts will carefully examine it. That assesses the extent of
            the damage and determines the likelihood of successful hard drive recovery service. This stage is crucial for identifying the root cause of the data loss, whether it’s physical damage, file corruption,
            or a system error. Once the diagnostic is complete, we provide you with a detailed report of our findings. That includes the stellar data recovery plan and a quote. We ensure that you have all the
            information you need before proceeding.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>3. Data Recovery</h5>
          <p>
            Once you approve the server data recovery plan, our team gets to work using state-of-the-art tools and techniques. Depending on the issue, this may involve physical repairs (e.g., for damaged hard drives)
            or software-based recovered data methods for corrupted or deleted files. We employ the latest technologies to recover data from a wide variety of devices and storage formats. That ensures the highest
            success rate possible. During this phase, we keep you updated on the progress and expected timeline for completion.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>4. Data Return</h5>
          <p>
            After the data has been successfully recovered, we securely transfer it to a device of your choice. Such as an external hard drive, USB stick, or cloud storage. We take every precaution to ensure your
            recovered data is delivered safely and securely. Once you’ve received your lost data, we offer advice on how to safeguard it moving forward to avoid future data loss.
          </p>
        </div>
        <p className='text-xl lg:text-2xl font-bold italic text-gray-500'>This simple yet thorough process ensures a smooth and efficient emergency data recovery experience. That brings your valuable data back
          into your hands.</p>
      </div>

      <div className='container mx-auto'>
        <h3 className='text-2xl lg:text-4xl font-bold text-center pb-8'>Frequently Asked <span className='text-primaryColor'>Questions</span></h3>
        <Accordion items={faqItems} />
      </div>

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl lg:text-4xl font-bold pb-8'>Contact Us for <span className='text-primaryColor'>Data Recovery Services</span>
        </h3>
        <p className='pb-5'>
          If you’re facing lost data, don’t wait! Contact our <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geekify®</a> expert team today to schedule a free consultation. Whether you're in Sydney, or anywhere else, our team is ready to help you recover
          your important data.
        </p>
      </div>

    </div>
  )
}

export default DataRecoveryDetails