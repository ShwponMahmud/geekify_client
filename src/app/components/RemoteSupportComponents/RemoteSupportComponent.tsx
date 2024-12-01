import React from 'react'
import Image from 'next/image'
import QuickContact from '../sharedComponents/QuickContact/QuickContact'
import Showcase from '../Showcase/Showcase'

function RemoteSupportComponent() {
  return (
    <>
      <Showcase backgroundImage='/remote-support-banner.png' title='Browse Our' highlights='Resources' paragraph='One-stop solution for your IT needs, Order any service, anytime. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam quas nihil consequuntur consequatur deleniti quae quos neque ullam natus tempora.
      '/>
      <div>
        <div className='container mx-auto py-28'>
          <div>
            <div>
              <p>
                Due to the Covid-19 pandemic, it has become increasingly difficult to provide on-site technical services. In the IT sector, services that would need a professional to visit the customer were
                very difficult or impossible to continue depending on the safety measures put in place. The circumstances have made services that would minimize physical contact essential for our daily lives.
                As a result, there has been an exponentially growing demand for Remote Desktop services since the beginning of the global disaster.
              </p>
              <h6 className='text-[30px] leading-[58px] font-bold text-primaryColor pt-8'>GUIDLINES FOR YOUR NEXT REMOTE HELP FROM GEEKIFY</h6>
            </div>

            <div className='pt-28'>
              <div className='grid grid-cols-1 flex-col-reverse md:grid-cols-2 items-center gap-20'>
                <div>
                  <Image src='/remote-support-1.png' width={656} height={506} alt='remote support image' className='w-[100%] h-[100%]' />
                </div>
                <div className=''>
                  <h3 className='text-[48px] leading-[58px] font-semibold'>Experience a <span className='text-primaryColor'>Hassle Free Remote Service</span></h3>
                  <p>
                    Remote Desktop Services are a replacement for physical visits to your local computer repair shop or appointment with an IT technician. In many cases, such services are not comparable to
                    a physical visit. Therefore, Geekify has expanded its services by forming a team of IT experts who are able to assist clients remotely. These professionals are equally effective in
                    assisting you online than an otherwise physical appointment. By using analysis software and other tools they are quickly able to find issues within your personal computer and resolve
                    them. The procedure is hassle-free and doesn't require you to even leave your desk.
                  </p>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-20 pt-28'>
                <div>                 
                  <h3 className='text-[48px] leading-[58px] font-semibold'>Don't let tech <span className='text-primaryColor'>problems slows you down.</span></h3>
                  <p>
                    Our remote technologies use secured connections and utilize protocols that prevent any data breach. By implementing strict guidelines regarding consumer privacy, we ensure that your
                    information is handled with utmost care and safety. With the availability of a well-equipped team, almost all our IT services are now accessible to you via the internet. We are able to
                    do this without any compromise in the speed or quality of our products. Interestingly, our services are even faster given there is no travel time required for our personnel, leaving
                    them more time to attend to your needs. However, in the case where a hardware issue is diagnosed and the online alternative is ineffective, a physical appointment must be arranged.
                  </p>
                </div>
                <div>
                  <Image src='/remote-support-2.png' width={656} height={506} alt='remote support image' className='w-[100%] h-[100%]' />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-20 pt-28'>
                <div>
                  <Image src='/remote-support-3.png' width={656} height={506} alt='remote support image' className='w-[100%] h-[100%]' />
                </div>
                <div>                 
                  <h3 className='text-[48px] leading-[58px] font-semibold'>IT service for <span className='text-primaryColor'>your tech worries</span></h3>
                  <p>
                    The services we offer include but are not limited to system diagnosis, remote data backup and recovery, cloud services, and business IT advice. We also offer online maintenance, secure 
                    installation of software packages through our online services. Our experts take no chances for your computer system and the data within it to be exposed to any sort of risks.
                  </p>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-20 pt-28'>
                <div>                 
                  <h3 className='text-[48px] leading-[58px] font-semibold'>Home and Business <span className='text-primaryColor'>Services</span></h3>
                  <p>
                    Available to our commercial clients are a set of tools that would enable their employees to be increasingly productive online from the comfort of their homes. We strive our best to ensure 
                    that our business clients do not lose any productivity due to the current situation. Instead, our dedication is to make their profit more from the situation.
                  </p>
                </div>
                <div>
                  <Image src='/remote-support-4.png' width={656} height={506} alt='remote support image' className='w-[100%] h-[100%]' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <QuickContact title='Call in the Geeks!'/>
      </div>
    </>
  )
}

export default RemoteSupportComponent