import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Image from 'next/image'
import React from 'react'

function EmailAccountSetup() {
  return (
    <div>
      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28 mt-28'>
        <div>

          <div>
            <div className='pb-28'>
              <div className='hidden lg:grid grid-cols-3 gap-8'>
                <div className='bg-white py-10 px-7 text-center shadow-lg'>
                  <div className='flex justify-center items-center'>
                    <Image src={'/cctv-icon-1.png'} width={150} height={150} alt='' className='w-[100px] h-[100px]' />
                  </div>
                  <h6 className='text-xl font-bold pt-5 pb-1'>Select the <span className='text-primaryColor'>Service</span></h6>
                  <p>Pick the services you are looking for- from the website or app.</p>
                </div>
                <div className='bg-white py-10 px-7 text-center shadow-lg'>
                  <div className='flex justify-center items-center'>
                    <Image src={'/cctv-icon-2.png'} width={150} height={150} alt='' className='w-[100px] h-[100px]' />
                  </div>
                  <h6 className='text-xl font-bold pt-5 pb-1'>Pick Up Your <span className='text-primaryColor'>Schedule</span></h6>
                  <p>Pick your convenient date and time to avail the service.</p>
                </div>
                <div className='bg-white py-10 px-7 text-center shadow-lg'>
                  <div className='flex justify-center items-center'>
                    <Image src={'/cctv-icon-3.png'} width={150} height={150} alt='' className='w-[100px] h-[100px]' />
                  </div>
                  <h6 className='text-xl font-bold pt-5 pb-1'><span className='text-primaryColor'>Book</span> Appointment</h6>
                  <p>Review and book your appointment. We’ll assign the expert technicians schedule for you.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className='text-center'>Let’s talk about Create an Email for Business. In today’s world, having a professional email address is essential for any business. It facilitates communication and builds 
              trust and credibility for your brand. A business email tied to your domain (e.g., yourname@yourbusiness.com) enhances your brand’s image. That makes it appear more legitimate and professional than 
              using a free email service like Gmail or Yahoo. If you're unsure how to get a business email or set up a company email, this guide will help. We'll cover everything from choosing the right domain, 
              registering it, and selecting an email hosting provider. That sets up a secure and efficient business email. Having a professional email is crucial for boosting brand visibility. That improves 
              security and maintains organized communication with clients and employees.</p>
          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>Why Do You Need a<span className='text-primaryColor'> Business Email Address?</span></h3>
            <p className='text-center pb-10'>
              A business email address helps establish trust with your customers. Use a generic email, like a Gmail or Yahoo account. That can make your business appear unprofessional or less reliable. A business 
              email tied to your domain (e.g., yourname@yourbusiness.com) signals.that you are serious about your brand and are here to stay.
            </p>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-5 text-center'>Key Benefits of Having a<span className='text-primaryColor'> Free Business Email Address?</span></h3>
            <p className='text-center'>
              Create an email for business has several key benefits that can significantly impact your company’s success.
            </p>

            <div className="py-8 space-y-6">
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-backup-restore-1.png"
                  alt="Affordable Prices"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">1. Builds Trust and Professionalism</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Customers are more likely to trust emails from a professional domain email account. Such as john@company.com, rather than a free email service like john@gmail.com. A domain email account 
                      makes your business look more established, serious, and credible. It shows that you are committed to your brand and are not cutting corners when it comes to professionalism.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-backup-restore-2.png"
                  alt="Affordable Prices"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">2. Boosts Brand Awareness</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Every time you send a Zoho email from your domain email, you're promoting your business. Create an email for business keeps your brand visible in all communications, whether it’s with clients, 
                      vendors, or partners. This constant reinforcement of your business name helps strengthen your brand identity and creates a lasting impression on recipients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-backup-restore-3.png"
                  alt="Affordable Prices"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">3. Enables Better Management</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Having a dedicated business email address helps you separate work-related communications from personal ones. Zoho mail allows you to better organize and prioritize tasks. That ensures you 
                      respond to small business matters more efficiently. It also helps you create distinct email accounts for different departments or functions within your business, such as 
                      support@yourcompany.com or sales@yourcompany.com.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/data-backup-restore-4.png"
                  alt="Affordable Prices"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">4. Improves Security</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Professional email providers offer advanced security features such as two-factor authentication, spam filters, and encryption. That helps safeguard your small business from cyber threats. 
                      With a secure small business email, you reduce the risk of data breaches, phishing attacks, and other online threats. That ensures your business communications stay protected.
                    </p>
                  </div>
                </div>
              </div>

              <p className='text-2xl font-bold text-gray-500 italic text-center'>In short, a business Gmail or email enhances professionalism, boosts brand visibility, improves management, and strengthens security.</p>
            </div>
          </div>
        </div>
      </div>


      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-5'>How to Get a <span className='text-primaryColor'>Business Email Address?</span></h3>
        <p className='pb-4'>
          Setting up a business Gmail account is easier than you think. Follow these steps to get started:
        </p>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>1. Choose Your Domain Name</h5>
          <p>
            Your domain name is the part of your email marketing that comes after the '@' symbol (e.g., @yourbusiness.com). It's important to choose a domain that reflects your business name or services. For
            example, if your business is called “Geek Solutions,” your domain could be something like Geeks CRS. Keep your domain name short, easy to spell, and closely related to your business.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>2. Register Your Domain</h5>
          <p>
            Once you've decided on a domain name, you need to register it. You can do this through various domain registration services, such as GoDaddy, Namecheap, or Google Domains. Registering a domain
            usually costs AU$ 181.9 per year, depending on the domain extension (.com, .net, .au, etc.).
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>3. Choose a Business Email Hosting Provider</h5>
          <p>
            Now that you have a domain, you’ll need a custom email hosting provider. These are the companies that will manage your business emails. Some popular email hosting providers include:
          </p>
          <ul className='list-disc ml-10 py-5'>
            <li>Google Workspace (formerly G Suite)</li>
            <li>Microsoft Outlook 365</li>
            <li>Zoho Mail</li>
          </ul>
          <p>These services offer a variety of features like ample storage, advanced security, easy-to-use interfaces, and custom email addresses.</p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>4. Set Up Your Email Accounts</h5>
          <p>
            After choosing your email hosting provider, it’s time to create your business email account. This typically involves logging into your hosting provider's platform and setting up individual email
            addresses for yourself and your team. Use professional email formats like firstname@yourbusiness.com or firstname.lastname@yourbusiness.com for a clean and recognizable address.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>5. Configure Email on Devices</h5>
          <p>
            Once you have create an email for business, you can configure it on your phone, computer, or tablet. Most email hosting services provide easy setup instructions. That allows you to sync your
            business email account across multiple devices.
          </p>
        </div>
      </div>

      <QuickContact title='Contact Us Today for Expert CCTV Installation Services' />

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>What to Look for in a<span className='text-primaryColor'> Professional Email Service?</span></h3>
        <p className='mb-4 text-center pb-4'>
          When selecting an email hosting provider, here are some key features to consider:
        </p>
        <Image src={'/data-backup-restore-6.png'} alt='' width={1200} height={900} className='w-full h-auto' />
        <div className='py-5'>
          <h5 className='text-xl font-bold italic pb-2'>1. Reliability and Uptime</h5>
          <p>
            You need your business email account service to work around the clock. Look for providers that offer 99.9% uptime. That means your email will be available almost all the time.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>2. Storage Space</h5>
          <p>
            If your business handles large files or extensive communications, you'll want a custom email domain service that offers plenty of storage space. Google Workspace and Microsoft 365 both offer ample 
            storage options, often starting at 30GB per user.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>3. Security Features</h5>
          <p>
            When choosing a business email provider, security is essential to protect your communications and sensitive data. Key features to look for include Two-factor authentication (2FA), which adds an extra 
            layer of protection by requiring a second form of identification during login. Spam filtering helps block unwanted or malicious emails, while anti-virus scanning detects and removes harmful files. 
            Data encryption ensures that emails and attachments are securely transmitted. That protects them from unauthorized access. These features safeguard your custom business email address from cyber 
            threats and help maintain the integrity of your communications.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>4. Collaboration Tools</h5>
          <p>
            If you have a team, you might want email hosting that integrates with other collaboration tools, such as shared calendars, video conferencing, and cloud storage. Google Workspace and Microsoft 365 
            excel in these areas. That makes them ideal for growing businesses and email aliases.
          </p>
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7'>Professional Email vs. <span className='text-primaryColor'>Free Email Services</span></h3>
          <p>You may wonder, why not just use a free email service like Gmail or Yahoo? Free email services are great for personal use. They fall short when it comes to business needs. Here’s why a professional 
            email is better for business:</p>

          <div className='py-3'>
            <ul className='list-disc ml-5'>
              <li><span className='font-bold'>Branding:</span> With a domain email host, you are constantly promoting your brand every time you send an email. Free services don’t offer this benefit.</li>
              <li><span className='font-bold'>Control:</span> With a professional email service, you can create multiple email addresses for your team, set permissions, and manage storage 
              and security. Free services don't provide the same level of control for business starters.</li>
              <li><span className='font-bold'>Trust:</span> Customers are more likely to engage with a company that has a professional email address. A free email account can make your 
              business standard look less established.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>How to Secure<span className='text-primaryColor'> Your Business Email</span></h3>
        <p className='mb-4 text-center pb-4'>
          With email being one of the most common communication tools for businesses, it's a prime target for cyber attacks. Here’s how you can secure your business email:
        </p>
        <div className='flex gap-7 border-t-[1px]'>
          <div className='w-[150px] h-full bg-orange-500 rounded-tr-[50px] rounded-br-[50px] py-8 flex justify-center items-center'>
            <Image src='/email-account-icon-1.png' width={100} height={80} alt='' className='w-[65px] h-[65px]' />
          </div>
          <div className='py-5'>
            <h5 className='font-bold pb-1'>1. Reliability and Uptime</h5>
            <p>
              You need your business email account service to work around the clock. Look for providers that offer 99.9% uptime. That means your email will be available almost all the time.
            </p>
          </div>
        </div>
      </div>

      <div className='container mx-auto'>
        <h3 className='text-2xl lg:text-4xl font-bold text-center pb-8'>Frequently Asked <span className='text-primaryColor'>Questions</span></h3>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">Q. What should I do first if I lose hard drive data from my hard disk?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>Stop using the drive immediately to prevent overwriting files. Check the Recycle Bin and consider using data recovery software or professional services.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">Q. Can I recover deleted files from a formatted hard disk recovery?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>Yes, deleted files can often be recovered from a formatted hard drive, as data typically remains until overwritten.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">Q. Is it safe to use data recovery software on my own?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>Using data recovery software can be safe if instructions are followed. If unsure, seek help from a professional to avoid further data loss.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">Q. How long does data recovery usually take?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>Recovery time varies; simple cases may take hours, while complex ones can take days. We prioritise quick turnaround times.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">Q. What types of storage devices can you recover data from?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>We recover data from hard disk drives (HDDs), solid-state drives (SSDs), USB drives, memory cards, and more.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl lg:text-4xl font-bold pb-6 uppercase italic'>In the end</h3>
        <p className='pb-5'>
          Losing secure data recovery doesn’t have to be the end. Whether you need to restore deleted data from a hard disk, USB, or Mac, there are effective solutions available to help recover your files.
          At geekscrs.com.au, we provide professional and reliable services to restore your deleted data and get you back on track. Don't hesitate to reach out to our team of experts for a consultation.
        </p>
        <p className='font-bold italic'>Let’s start your deleted data recovery process today.</p>
      </div>

    </div>
  )
}

export default EmailAccountSetup