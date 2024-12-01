import React from 'react'
import QuickContact from '../sharedComponents/QuickContact/QuickContact'
import Image from 'next/image'
import Showcase from '../Showcase/Showcase';

const title: string = "If you need remote Service?";

function WhyChooseUsComponents() {
  return (
    <>
      <Showcase backgroundImage='/why-choose-us.png' title='Browse our' highlights='resources' paragraph='One-stop solution for your IT needs, Order any service, anytime. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Veniam quas nihil consequuntur consequatur deleniti quae quos neque ullam natus tempora.
      '/>
      <div>
        <div className='container mx-auto py-28'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-20'>
            <div>
              <Image src="/why-choose-1.png" width={565} height={506} alt='details iamge' className='w-[100%] h-[100%]' />
            </div>
            <div className=''>
              <h3 className='text-[48px] leading-[80px] font-semibold'>Our <span className='text-primaryColor'>Promise</span></h3>
              <p className='pb-5'>Geekify guarantees satisfactory services and happy customers!
              </p>
              <p className='pb-5'>
                Our geeks are passionate and well versed, led by experienced leaders who have years of hands-on experience to all sorts of tech related problems that can arise in both personal and 
                business contexts.
              </p>
              <p>
                We always handle each client’s problem scenario individually which lets us assess and give personalized solution to every single client, and we find that this approach leaves our 
                clients the happiest!
              </p>
            </div>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-20 pt-36'>
            <div>
              <h3 className='text-[48px] leading-[80px] font-semibold'>How can we <span className='text-primaryColor'>help you?</span></h3>
              <p className='pb-5'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                a galley of type and scrambled it to make a type specimen
              </p>
              <p>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                containing Lorem Ipsum passages, and more recently
              </p>
            </div>
            <div>
              <Image src="/why-choose-2.png" width={565} height={506} alt='details iamge' className='w-[100%] h-[100%]' />
            </div>
          </div>
          <div className='pt-28'>
             <h3 className='text-[48px] leading-[80px] font-semibold'>Always on <span className='text-primaryColor'>the job</span></h3>
              <p className='pb-5'>
                No matter the type of tech trouble you have, whether it be repair, installation, troubleshooting, security or even consultation and regular maintenance work, our geeks leave no 
                corner unattended – and no customer unhappy!
              </p>
              <p>
                With that in mind, if you would like solutions to your tech troubles lighting fast, then you have come to the right decision!
              </p>
          </div>
        </div>
        <QuickContact title='Ready to book?'/>
      </div>
    </>
  )
}

export default WhyChooseUsComponents