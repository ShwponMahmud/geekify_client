import Accordion from '@/app/components/sharedComponents/Accordion/Accordion'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import React from 'react'

function WebApplicationDevelopment({service}: ServiceDetailsProps) {
  const faqItems = [
    {
      question:
        "What’s the difference between a website and a web application?",
      answer:
        "A website provides information, while a web application is more interactive. It allows users to perform tasks and access custom features.",
    },
    {
      question: "How long does it take to develop a website or app?",
      answer:
        "Timelines vary based on project complexity—simple websites may take a few weeks, while custom apps could take several months.",
    },
    {
      question: "Can I update the content on my website or app myself?",
      answer:
        "Yes! We use user-friendly systems that allow you to manage your content, and we provide support if needed.",
    },
    {
      question: "Do you offer support after launch?",
      answer:
        "Absolutely! We provide ongoing support, maintenance, and updates to ensure your website or app runs smoothly.",
    },
    {
      question: "Can you help optimize my app for app stores?",
      answer:
        "Yes, we offer App Store Optimization (ASO) to boost your app’s visibility on app stores like Google Play and the Apple App Store.",
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
            <p className='text-center'>In today’s fast-paced digital landscape, a strong online presence is essential for any business. A powerful website and app development goes beyond mere functionality.
              Because It is a critical tool for engaging with customers and building brand identity. At Geekify®, we specialize in creating <a href="https://geekify.com.au/book-online" className='text-primaryColor underline'>websites and mobile apps</a> that not only perform well but also resonate
              with audiences on a personal level. Each project we take on is crafted with attention to detail. That reflects your unique goals and vision. Our dedicated team in Sydney combines technical expertise
              with creativity, turning ideas into interactive, user-friendly experiences. We’re driven by a passion to help our clients shine online. That makes the internet a more vibrant, connected space—one
              innovative project at a time.</p>
          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>Our Services in Web Development: <span className='text-primaryColor'>Building Sites That Sparkle</span></h3>
            <p className='text-center'>
              With our team’s skills in website and app development, we create websites that are not only functional but beautiful and easy to use. Each web app development <a href="https://geekify.com.au/services" className='text-primaryColor underline'>services we offer</a> is focused on creating a
              smooth experience for your visitors. That helps you make a lasting impact. Let’s dive into what our web app development service can do for you:
            </p>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7 pt-8'>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <Image src='/web-development-icon-1.png' width={300} height={300} alt='' className='w-[80px] h-[80px]' />
                <h6 className='text-lg font-bold pt-4'>Custom Websites Built Just for You:</h6>
                <p>
                  We believe that your website should stand out and reflect who you are. That’s why we create each site from scratch, personalizing it to fit your goals and style. No templates—just a custom design
                  that truly represents you.
                </p>
              </div>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <Image src='/web-development-icon-2.png' width={300} height={300} alt='' className='w-[80px] h-[80px]' />
                <h6 className='text-lg font-bold pt-4'>E-Commerce Solutions That Simplify Shopping:</h6>
                <p>
                  For businesses selling online, we design e-commerce sites that make app building and buying easy and enjoyable. With smooth checkout processes. With secure payment options and intuitive navigation,
                  your customers can shop confidently and hassle-free.
                </p>
              </div>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <Image src='/web-development-icon-3.png' width={300} height={300} alt='' className='w-[80px] h-[80px]' />
                <h6 className='text-lg font-bold pt-4'>Responsive Design for Every Screen Size:</h6>
                <p>
                  In a world where people browse on all kinds of devices, we make sure your site looks perfect everywhere. Our mobile app builders Sydney designs adapt seamlessly, whether on desktops, tablets, or
                  mobile phones. That provides a consistent, high-quality experience.
                </p>
              </div>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <Image src='/web-development-icon-4.png' width={300} height={300} alt='' className='w-[80px] h-[80px]' />
                <h6 className='text-lg font-bold pt-4'>Optimized for Speed and Performance:</h6>
                <p>
                  A slow website can turn visitors away. That’s why our mobile app and software development maker's Sydney sites load quickly. That keeps your audience engaged and enhances your search engine
                  ranking.
                </p>
              </div>
              <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                <Image src='/web-development-icon-5.png' width={300} height={300} alt='' className='w-[80px] h-[80px]' />
                <h6 className='text-lg font-bold pt-5'>User-Friendly Interface:</h6>
                <p>
                  We focus on creating website and app development that help visitors find what they need effortlessly. This means happier users and a more successful and progressive website for your business.
                </p>
              </div>
            </div>
          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7'>Web Application Development: <span className='text-primaryColor'>Taking Your Business to New Heights</span></h3>
            <p>
              If your business requires unique features, our web application development, our team is here to help. Website and app development are different from traditional websites—they’re more interactive and
              often handle specific tasks. At <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geekify®</a>, we’re experts in designing and building custom web applications that streamline your business and make life easier for you and your customers.
            </p>


            <div className='pt-3'>
              <div className=''>
                <h6 className='text-2xl font-bold italic pt-4 pb-2'>1. Tailored Web Apps to Meet Unique Needs</h6>
                <p>
                  Every business is different, so we create custom web apps tailored to your specific requirements. Whether you need tools for customer management, tracking internal processes, mobile app
                  development, progressive web application, mobile application, or handling special tasks, we build apps that fit your exact needs.
                </p>
              </div>
              <div className=''>
                <h6 className='text-2xl font-bold italic pt-4 pb-2'>2. Seamless Integration with Existing Systems</h6>
                <p>
                  We understand the importance of smooth workflows. Our web applications and mobile application development are designed to integrate effortlessly with your current systems and software. That Google
                  sheet's native app minimizes disruptions and enables your team to work efficiently.
                </p>
              </div>
              <div className=''>
                <h6 className='text-2xl font-bold italic pt-4 pb-2'>3. Scalable Solutions for Growing Businesses</h6>
                <p>
                  As your business expands, your digital tools should too. Our hybrid app and applications are built with scalability in mind. So you can add more features, users, or resources over time without
                  rebuilding from scratch.
                </p>
              </div>
              <div className=''>
                <h6 className='text-2xl font-bold italic pt-4 pb-2'>4. User-Friendly Interface</h6>
                <p>
                  A web app should be easy to navigate, even for those without technical expertise. We design website and app development user-friendly interfaces that ensure your team and customers can interact
                  with the app effortlessly, Which boosts productivity and satisfaction.
                </p>
              </div>
              <div className=''>
                <h6 className='text-2xl font-bold italic pt-4 pb-2'>5. Reliable Performance and Security</h6>
                <p>
                  Our web app developer prioritize speed, reliability, and data security. So your web app runs smoothly and protects your information. That web design gives you peace of mind as you focus on growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>Meet Our App Makers in Sydney: <span className='text-primaryColor'>Turning Ideas into Reality</span></h3>
        <p className='pb-7'>
          Our hybrid apps makers Sydney are passionate about transforming your unique ideas into powerful apps. We specialize in website and app development that’s more than just functional. It's enjoyable,
          intuitive, and beautifully designed. Here’s what sets us apart as an <a href="https://geekify.com.au/contact-us" className='text-primaryColor underline'>application development agency</a> in Sydney:
        </p>
        <Image src={'/web-development-7.png'} alt='app makers sydney' width={1200} height={900} className='w-full h-auto pb-8' />
        <div className='p-5 shadow-hoverBoxShadow rounded-xl mb-6'>
          <h5 className='text-xl font-bold italic pb-2'>1. Complete Guidance from Concept to Creation</h5>
          <p>
            At Geekify®, we believe the journey to a successful app and web browser starts with collaboration. We begin by understanding your ideas and vision and brainstorming together to define what makes your
            app unique. From there, our web developers handle every detail—designing, developing, and finally launching your app on major platforms like the App Store or Google Play. Our goal is to make the entire
            process clear and enjoyable. Our web developer gives you confidence as we turn your concept into a reality.
          </p>
        </div>
        <div className='p-5 shadow-hoverBoxShadow rounded-xl mb-6'>
          <h5 className='text-xl font-bold italic pb-2'>2. User-Focused Design That Drives Engagement</h5>
          <p>
            Users are at the heart of everything we create. We prioritize their experience, designing apps that are not only functional but also enjoyable to use. Whether your app is for customers, employees, or any
            target group, our design approach ensures that every element is intuitive, visually appealing, and tailored to make each interaction meaningful. This user-centered focus helps drive satisfaction,
            retention, and positive reviews for their custom web application development.
          </p>
        </div>
        <div className='p-5 shadow-hoverBoxShadow rounded-xl mb-6'>
          <h5 className='text-xl font-bold italic pb-2'>3. Reliable Post-Launch Support</h5>
          <p>
            Our partnership with you extends far beyond the launch. Once your app is live, we offer dependable support to troubleshoot issues, and address questions. That ensures everything works smoothly. Our
            web development services are dedicated to helping your website and app development succeed long after it’s released. That provides peace of mind that you’re never left on your own.
          </p>
        </div>
        <div className='p-5 shadow-hoverBoxShadow rounded-xl mb-6'>
          <h5 className='text-xl font-bold italic pb-2'>4. Consistent Updates to Keep Your App Current</h5>
          <p>
            Technology and user expectations evolve constantly. We keep your web application development process relevant with regular updates that improve functionality, boost security, and introduce new features.
            This approach not only keeps your Google Chrome app competitive but also helps maintain its appeal. That ensures users enjoy a high-quality experience with mobile development every time they use it.
          </p>
        </div>
        <div className='p-5 shadow-hoverBoxShadow rounded-xl mb-6'>
          <h5 className='text-xl font-bold italic pb-2'>5. Long-Term Partnerships Built on Trust</h5>
          <p>
            At <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geekify®</a>, we don’t just see ourselves as your developers—we aim to be your long-term partners. Our website development is here to offer advice, adapt your app as your business grows, and support
            you in reaching your digital goals with user interface. Our web app development services commitment to quality service and ongoing collaboration builds trust. That makes us a partner you can rely on
            for future growth.
          </p>
        </div>
      </div>

      <QuickContact title='Contact Us Today for Anti Virus Installation Services' />

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <div className="">
          <div className='text-center'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 text-center'>Custom App Development Service: <span className='text-primaryColor'>Tailored to Your Needs</span></h3>
            <p className='pb-7'>
              At Geekify®, we understand that no two businesses are the same, so why should their apps be? Our custom website and app development service is all about creating a digital solution that’s
              unique to you by Google Play Store.
            </p>
          </div>

          <div className='space-y-8'>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/web-development-1.png"
                alt="Consultation for website and app vision"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-lg font-bold italic">1. Initial Consultation: Understanding Your Vision</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    The journey begins with a personal touch. During our initial consultation, whether in-person or virtually, we prioritize getting to know you and your business. We discuss your goals, ideas, and
                    vision for the Android apps. That ensures we capture your unique needs and preferences. This collaborative approach allows us to align our custom web development process with your aspirations
                    from the very start.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/web-development-2.png"
                alt="Designing innovative websites and apps"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-lg font-bold italic">2. Design and Development: Bringing Ideas to Life</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    After understanding your vision, our talented development team creates wireframes and mockups that provide a visual representation of your progressive web apps. These prototypes serve as a
                    blueprint. That allows you to visualize the design and functionality before development begins. Once you approve the designs, our skilled developers dive in, transforming these concepts into a
                    fully functional native mobile app, while maintaining open communication to ensure everything stays on track.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/web-development-3.png"
                alt="Testing apps for quality assurance"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-lg font-bold italic">3. Testing and Launch: Ensuring Quality</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Quality is paramount. Before launching your web application development frameworks, we conduct comprehensive testing to identify and fix any issues. This rigorous quality assurance process
                    ensures that your app functions flawlessly across different devices and platforms. We believe that a successful launch requires thorough preparation, and we’re dedicated to making sure your
                    app is ready for your audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/web-development-4.png"
                alt="Providing ongoing app development support"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-lg font-bold italic">4. Ongoing Support: Commitment to Your Success</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Our partnership doesn’t end at launch. We offer ongoing support to address any questions or concerns. That ensures your app continues to perform at its best. Regular updates keep your app
                    current with new features and enhancements. That allows you to adapt to changing market demands and user feedback.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/web-development-5.png"
                alt="Collaborating for successful app development"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-lg font-bold italic">5. Building Lasting Relationships</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    At <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geekify®</a>, we’re not just app builders; we’re your partners in success. We value the relationships we build with our clients and are committed to understanding your evolving needs. Our focus
                    on collaboration and support ensures that as your business grows, your website and app development can grow with it. That provides a foundation for ongoing success in the digital landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>Why Choose <span className='text-primaryColor'>Geekify®?</span></h3>
        <p className='pb-7'>
          Choosing the right team for website and app development can be challenging, but with Geekify®, you’ll always have support from people who genuinely care about your project. Here’s what makes us different:
        </p>
        <Image src={'/web-development-6.png'} alt='Geekify®: Website and app experts' width={1200} height={900} className='w-full h-auto pb-8' />
        <div className='mb-6'>
          <h5 className='text-xl font-bold italic pb-2'>1. Experienced Team of Experts</h5>
          <p>
            Our team at Geekify® is composed of skilled designers, developers, and strategists who excel in their fields. Each member brings a wealth of experience and creativity to the table, ensuring that your
            ideas are not only heard but expertly transformed into functional, visually appealing apps and websites.
          </p>
        </div>
        <div className='mb-6'>
          <h5 className='text-xl font-bold italic pb-2'>2. Tailored Solutions for Every Budget</h5>
          <p>
            We understand that investing in your <a href="https://geekify.com.au/services" className='text-primaryColor underline'>online presence is essential</a>, which is why we offer affordable solutions without compromising quality. Our goal is to provide high-quality services that fit your
            budget. That allows you to focus on growing your business with confidence.
          </p>
        </div>
        <div className='mb-6'>
          <h5 className='text-xl font-bold italic pb-2'>3. Collaborative Approach</h5>
          <p>
            Collaboration is at the heart of our process. We work closely with you to ensure your vision is realized at every step. By involving you in the design and development phases, we create a final product
            that aligns perfectly with your goals and expectations.
          </p>
        </div>
        <div className='mb-6'>
          <h5 className='text-xl font-bold italic pb-2'>4. Passion for Our Craft</h5>
          <p>
            Our team is driven by a genuine passion for what we do. This enthusiasm shines through in every project we undertake, as we strive to deliver exceptional results that exceed your expectations.
          </p>
        </div>
        <div className='mb-6'>
          <h5 className='text-xl font-bold italic pb-2'>5. Commitment to Your Success</h5>
          <p>
            Ultimately, our mission is to help you succeed. We are dedicated to providing ongoing support and innovative solutions that empower your business in the digital landscape. That ensures you have the
            tools you need to thrive.
          </p>
        </div>
      </div>


      <QuickContact title='Contact Us Today for Anti Virus Installation Services' />


      <div className='container mx-auto pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>App Builders in Sydney with a Heart: <span className='text-primaryColor'>How We Work</span></h3>
        <p>
          When you work with our app builders Sydney, you’re working with people who genuinely want to help you succeed. Here’s how our process works:
        </p>

        <ul className='list-disc ml-5 mt-5'>
          <li className='pb-3'><span className='font-bold'>Initial Consultation: </span>We begin with a personal meeting, either virtually or in person, to understand your goals, ideas, and project vision. That ensures we align
            with your needs.</li>
          <li className='pb-3'><span className='font-bold'>Design and Development:</span> Our designers create detailed wireframes and mockups for your approval, after which our developers bring the app to life. That follows your
            specifications closely.</li>
          <li className='pb-3'><span className='font-bold'>Testing and Launch:</span> We conduct comprehensive testing to ensure everything functions flawlessly. That prepares your app for a successful launch.</li>
          <li className='pb-3'><span className='font-bold'>Ongoing Support:</span> Post-launch, we provide continuous support and updates to enhance performance and address any concerns. That ensures your
            website and app development remains effective.</li>
          <li className='pb-3'><span className='font-bold'>Feedback Integration:</span> We value your input and integrate feedback into future updates, ensuring the app evolves with your business needs.</li>
        </ul>
      </div>


      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl lg:text-4xl font-bold text-center pb-8'>Frequently Asked <span className='text-primaryColor'>Questions</span></h3>
        <Accordion items={faqItems} />
      </div>


      <div className='container mx-auto'>
        <h3 className='text-2xl lg:text-4xl font-bold mb-5'>Contact Us</h3>
        <p className='mb-4 pb-4'>
          Ready to bring your website or app idea to life? We’re here to make the process easy, exciting, and stress-free. Contact <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geekify®</a> today and let’s discuss how we can help your business grow with custom
          website and app development.
        </p>
      </div>

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl lg:text-4xl font-bold pb-5'>Let’s Get <span className='text-primaryColor'>Started!</span>
        </h3>
        <p className='pb-5'>
          Whether you’re looking for a web application development service or need a custom app development service, our team is ready to make your digital dreams come true. Get in touch with Geekify® today
          and let’s start building something amazing together.
        </p>
        <p className='text-xl font-bold italic'>
          Let’s start building something amazing together!
        </p>
      </div>

    </div>
  )
}

export default WebApplicationDevelopment