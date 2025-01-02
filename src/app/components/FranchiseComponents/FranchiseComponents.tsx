import React from 'react'
import Showcase from '../Showcase/Showcase'
import QuickContact from '../sharedComponents/QuickContact/QuickContact'
import Image from 'next/image'

function FranchiseComponents() {
  return (
    <>
      <Showcase backgroundImage='/franchise-banner.png' title='Partner with Geekify -' highlights='A Franchise for Success' paragraph='Lorem Ipsum is simply dummy text of the printing
       and typesetting industry. Lorem Ipsum has been the industry s standard dummy' />

       <div>
        <div>
          <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-end gap-10 xl:gap-20'>
              <div>
                <Image src='/franchise-1.png' alt='About us image' width={900} height={900} className='w-full h-full' />
              </div>
              <div>
                <h3 className='text-3xl md:text-4xl font-bold pb-3 lg:pb-7 uppercase'>About <span className='text-primaryColor'>Us</span></h3>
                <p className='lg:text-xl'>
                  Geekify was established in early 2017 by a few select talented individuals who aimed to rise as one of Australia's top computer repair companies. Initially starting out as just a repair company, Geekify has branched out to provide various services in different fields, which has resulted in the company being truly dynamic.
                  With a mentality of taking every obstacle in our client’s tech life as a challenge, we send our geeks with one mission in mind: to provide flexibility and over-the-top services in the shortest amount of time possible for the optimal convenience of our customers.
                  Technology is driving the future of business, and at Geekify, we've built a proven model for success. Now, we’re offering aspiring entrepreneurs the opportunity to partner with us through our franchise program. If you're ready to run your own business and be a part of the thriving tech industry, Geekify is your ideal partner.
                </p>
              </div>
            </div>

            <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
              <h3 className='text-3xl md:text-4xl font-bold pb-3 lg:pb-7'>Why Geeks CRS? The Power of <span className='text-primaryColor'>a Proven Business Model</span></h3>
              <p className='lg:text-xl'>
                GeeksCRS has grown from a single idea into a recognized brand for tech solutions. Our success is built on solving real-world IT challenges, from IT support, and software issues to custom app 
                development, and now we’re sharing this success with you through franchising.
              </p>
              <p className='pt-5 pb-3 lg:text-xl'>
                When you become a franchisee with GeeksCRS, you're not starting from scratch. You’re joining a brand with:
              </p>
              <ul className='list-disc ml-5'>
                <li className='lg:text-xl'><span className='font-bold'>A proven business model</span> that has been tested and refined over years of experience.</li>
                <li className='lg:text-xl'><span className='font-bold'>A trusted name</span> in IT services with a solid customer base.</li>
                <li className='lg:text-xl'><span className='font-bold'>A comprehensive support system</span> that helps you grow your franchise with ease.</li>
              </ul>
            </div>

            <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
              <h3 className='text-3xl md:text-4xl font-bold pb-3 lg:pb-7 text-center'><span className='text-primaryColor'>Common Mistakes to Avoid </span>When Starting
                a Franchise Business</h3>
              <p className='lg:text-xl font-semibold text-center'>
                Starting a business is challenging, but with GeeksCRS as your partner, you’ll avoid the common pitfalls many face:
              </p>

              <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-8'>
                <div className='shadow-boxShadow hover:shadow-hoverBoxShadow p-[30px] rounded-lg'>
                  <div className='w-[100px] bg-sectionBackgroundColor p-5 rounded-lg'>
                    <Image src={'/franchise-icon-1.png'} alt='icon' width={150} height={150} className='w-[60px] h-[50px]' />
                  </div>
                  <h6 className='font-bold text-xl py-4'>Skipping Market Research:</h6>
                  <p>
                    We’ve already done the research for you. Our franchise model is designed to thrive in locations where IT services are in demand.
                  </p>
                </div>
                <div className='shadow-boxShadow hover:shadow-hoverBoxShadow p-[30px] rounded-lg'>
                  <div className='w-[100px] bg-sectionBackgroundColor p-5 rounded-lg'>
                    <Image src={'/franchise-icon-2.png'} alt='icon' width={150} height={150} className='w-[60px] h-[50px]' />
                  </div>
                  <h6 className='font-bold text-xl py-4'>Not Leveraging Brand Power:</h6>
                  <p>
                    One of the biggest mistakes new business owners make is not fully utilizing the strength of an established brand. As a GeeksCRS franchisee, you’ll benefit from instant brand recognition 
                    and credibility in your market.
                  </p>
                </div>
                <div className='shadow-boxShadow hover:shadow-hoverBoxShadow p-[30px] rounded-lg'>
                  <div className='w-[100px] bg-sectionBackgroundColor p-5 rounded-lg'>
                    <Image src={'/franchise-icon-3.png'} alt='icon' width={150} height={150} className='w-[60px] h-[50px]' />
                  </div>
                  <h6 className='font-bold text-xl py-4'>Overcomplicating Tech Services:</h6>
                  <p>
                    With GeeksCRS, we provide you with the tools and training to offer simple, effective solutions to your clients without getting overwhelmed by tech jargon.
                  </p>
                </div>
                <div className='shadow-boxShadow hover:shadow-hoverBoxShadow p-[30px] rounded-lg'>
                  <div className='w-[100px] bg-sectionBackgroundColor p-5 rounded-lg'>
                    <Image src={'/franchise-icon-4.png'} alt='icon' width={150} height={150} className='w-[60px] h-[50px]' />
                  </div>
                  <h6 className='font-bold text-xl py-4'>Not Doing the Right Advertising:</h6>
                  <p>
                    Many businesses fail due to inadequate or ineffective advertising. With GeeksCRS, we guide you in creating targeted marketing strategies that connect with your local market and bring 
                    customers to your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-[url("/franchise-section-background.png")] bg-no-repeat bg-cover w-full h-auto bg-blend-multiply bg-[rgba(0,0,0,.6)]'>
            <div className='container mx-auto text-white py-8 md:py-14 lg:py-20 xl:py-28'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 xl :gap-0'>
                <div>
                  <h3 className='text-3xl md:text-4xl font-bold pb-3 lg:pb-7'>How Our Franchisees Benefit <span className='text-primaryColor'>from Geekify’ Success</span></h3>
                  <p className='text-xl font-medium italic'>As a Geekify franchisee, you’ll enjoy several benefits that will help you grow your business faster and more efficiently:</p>

                  <div className='pt-4 pb-5'>
                    <h6 className='text-xl font-bold'>Scalable Business Model:</h6>
                    <p>Start small and grow your franchise over time. We’ve designed the GeeksCRS model to be easily scalable so you can expand as your client base grows.</p>
                  </div>
                  <div className='pb-5'>
                    <h6 className='text-xl font-bold'>Proven Marketing Strategies:</h6>
                    <p>Start small and grow your franchise over time. We’ve designed the GeeksCRS model to be easily scalable so you can expand as your client base grows.</p>
                  </div>
                  <div className='pb-5'>
                    <h6 className='text-xl font-bold'>Ongoing IT and Operational Support:</h6>
                    <p>You’re never alone in this journey. Our support team is always available to help with tech issues, business advice, and operational challenges.</p>
                  </div>
                </div>
                <div className='xl:ml-[150px] flex items-center'>
                  <Image src={'/franchise-2.png'} alt='franchise-2 image' width={600} height={600} className='w-full lg:max-w-[525px] h-full lg:max-h-[549px]' />
                </div>
              </div>
            </div>
            
          </div>

          <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
            <div>
              <div>
                <h3 className='text-3xl md:text-4xl font-bold pb-3 lg:pb-7'>Why the Geeks CRS Franchise <span className='text-primaryColor'>Model is Set Up for Success</span></h3>
                <p className='text-xl font-semibold italic'>Our franchise model is unique because it’s built on the pillars of scalability and simplicity. Here’s why it works:</p>

                <div className='pt-4 pb-5'>
                  <p className='xl:text-xl'><span className='font-bold'>Scalable Business Model:</span> Start small and grow your franchise over time. We’ve designed the GeeksCRS model to be easily scalable so you can expand 
                  as your client base grows.</p>
                </div>
                <div className='pb-5'>
                  <p className='xl:text-xl'><span className='font-bold'>Low Overhead Costs:</span> With our streamlined systems and support, you won’t need to invest heavily in unnecessary resources. 
                  We provide the infrastructure and tools you need to succeed.</p>
                </div>
                <div className='pb-5'>
                  <p className='xl:text-xl'><span className='font-bold'>Multiple Revenue Streams:</span> From IT services to app development, hardware sales, software solutions, customer support, and more, 
                  GeeksCRS franchisees have multiple ways to generate revenue.</p>
                </div>
              </div>
            </div>
            <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
              <div className='flex flex-col lg:flex-row gap-10'>
                <div className='w-full xl:max-w-[65%]'>
                  <h3 className='text-3xl md:text-4xl font-bold pb-3 lg:pb-7'>Steps to Becoming <span className='text-primaryColor'>a Geekify Franchisee</span></h3>
                  <p className='text-xl font-semibold italic pb-4'>Here’s how simple it is to start your journey with Geekify:</p>
                  <ol className='list-decimal list-inside marker:text-xl marker:font-bold marker:ml-4'>
                    <li className='xl:text-xl pb-3'><span className='font-bold'>Application and Consultation:</span> Start by contacting us for a consultation. We’ll walk you through the process and answer any questions you have.</li>
                    <li className='xl:text-xl pb-3'><span className='font-bold'>Training and Launch:</span> Once the agreement is signed, we provide full training and support to ensure a smooth launch.</li>
                    <li className='xl:text-xl pb-3'><span className='font-bold'>Grow Your Business:</span> As you run your franchise, we’ll be there to support you with ongoing training, marketing, and business strategies.</li>
                    <li className='xl:text-xl pb-3'><span className='font-bold'>Installment Payment Options:</span> We offer flexible installment payment options to help you get started without financial stress. Our goal is to make franchise ownership accessible,
                      allowing you to invest in the future of your business while maintaining financial balance.</li>
                  </ol>
                </div>
                <div>
                  <Image src={'/franchise-3.png'} width={800} height={800} alt='' className='' />
                </div>
              </div>
            </div>

            <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
              <h3 className='text-3xl md:text-4xl font-bold pb-3 lg:pb-7'>Conclusion: Ready to <span className='text-primaryColor'>Build Your Own Success Story?</span></h3>
              <p className='text-xl pb-4'>The future is tech-driven, and with Geekify, you have the opportunity to be at the forefront of this industry. By becoming a franchisee, 
                you’re not just joining a business - you’re joining a community of entrepreneurs who are driving the future of IT services.</p>
            </div>
          </div>
        </div>
       </div>

      <QuickContact title='If you don’t find your needed services, please contact with us '/>
    </>
  )
}

export default FranchiseComponents