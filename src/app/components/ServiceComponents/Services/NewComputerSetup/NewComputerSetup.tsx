import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import React from 'react'

function NewComputerSetup({ service }: ServiceDetailsProps) {
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
              Are you looking to upgrade your work-from-home setup or find the perfect desktop for your gaming needs? At <a href="https://geekify.com.au/services/cctv-installation" className='text-primaryColor underline'>Geeks CRS</a>, we offer various desktop computer packages that cater to every requirement and
              budget. Whether you’re seeking an all-in-one desktop, a powerful branded computer, or a custom-built system, we have something for everyone.
            </p>
          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>Why Choose <span className='text-primaryColor'>Desktop Computer Packages?</span></h3>
            <p className='text-center pb-5'>
              Desktop computer packages provide an <a href="https://geekify.com.au/book-online" className='text-primaryColor underline'>all-inclusive solution</a>. When you buy a PC package, you get everything you need all in one desktop computer without worrying about selecting individual components
              or accessories. That computer also has the Microsoft Windows operating system. This is especially helpful for setting up a home computer, whether for work, study, or entertainment.
            </p>

            <h5 className='text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 pt-3 text-center'>Types of Desktop Computer <span className='text-primaryColor'>Packages Available at Geeks CRS</span></h5>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/computer-troubleshooting-1.png"
                  alt="branded computer packages image"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">1. Branded Desktop Computer Packages</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      When you opt for a branded computer, you know you're getting a high-quality, reliable product. Major brands like Dell, HP, and Lenovo are known for their durability and excellent customer
                      support. Geeks CRS provides access to these top brands at competitive prices. That ensures that your <a href="https://geekify.com.au/book-online" className='text-primaryColor underline'>purchase</a> is both dependable and affordable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/computer-troubleshooting-2.png"
                  alt="Custom computer setup"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">2. Custom-Built Desktop PC Packages</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      For those who need something more specific, custom-built desktop PC packages are ideal. These let you choose the ideal setup for your specific needs, whether it's for gaming pc, video editing,
                      or professional tasks. At Geeks CRS, our experts can guide you in choosing the right parts to create a high-performance PC tailored just for you.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/computer-troubleshooting-3.png"
                  alt="computer setup at home"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className='flex '>
                      <h3 className="text-lg font-bold italic">3. All-in-One Desktop Computers</h3>
                      <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      If you're short on space or prefer a sleek, modern look, all in one desktop computers are a great option. It is also a mini PC. These systems combine the monitor and tower into one unit.
                      This reduces clutter and makes them perfect for home offices. At <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geeks CRS</a>, we offer a wide range of all-in-one Windows pc that are both powerful and stylish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>Benefits of Buying <span className='text-primaryColor'>Desktop PC Packages</span></h3>
        <p className='pb-5'>
          Choosing a pre-configured desktop PC package offers numerous advantages. That desktop deals a smart choice for those who buy pc. Here are some key benefits:
        </p>
        <div className='pb-5'>
          <ul className='list-disc ml-5 space-y-2'>
            <li><span className='font-bold'>Convenience: </span>
              Everything is included, making it simple to set up your computer device at home. There’s no need to source individual components or worry about compatibility issues. This is especially helpful
              for users who prefer a hassle-free experience.
            </li>
            <li><span className='font-bold'>Cost-Effective: </span>
              Bundling components into a package often means lower overall PC prices compared to buying each part separately. This m2 pro PC can lead to significant savings while still providing high-quality
              hardware. Additionally, package deals may include accessories like a monitor or keyboard at a discounted rate.
            </li>
            <li><span className='font-bold'>Pre-Configured: </span>
              Desktop PC packages are optimized for performance. All the components are selected to work efficiently together. That ensures smooth operation whether you're using the system for work, gaming, or
              casual browsing.
            </li>
            <li><span className='font-bold'>Great for Home Office Setup: </span>
              For those working from home, a laptop computer package can simplify the computer setup process. These systems come ready to handle professional tasks. That reduces setup time and allows you to get
              started on your work quickly.
            </li>
          </ul>
          <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>With all these benefits, desktop PC packages are an ideal solution for anyone looking for a well-rounded, ready-to-buy computer.</p>
        </div>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 text-center'>How to Choose the <span className='text-primaryColor'>Right Desktop Computer Packages?</span></h3>
        <p className='pb-5 text-center'>
          With so many options available, choosing the right <a href="https://geekify.com.au/services/new-computer-setup" className='text-primaryColor underline'>desktop computer package</a> can feel overwhelming. Here’s a quick guide to help you make the right choice:
        </p>
        <div className='space-y-8 pt-5'>
          <div className='flex items-center bg-sectionBackgroundColor p-5 border-b-[3px] border-[#F18E36]'>
            <div className='w-[300px] pl-3 pr-5'>
              <Image src='/new-computer-setup-icon-1.png' width={200} height={200} alt='' className='w-auto h-auto' />
            </div>
            <div>
              <h6 className='text-lg font-bold italic'>1. Assess Your Needs:</h6>
              <p>
                Start by identifying what you will primarily use the desktop for. Are you purchasing it for work, gaming, or casual use such as browsing and streaming? If it's for work, you might need a system
                with more processing power and memory. For gaming, the best laptop with a powerful GPU is essential. Casual users can go for a more basic setup like Microsoft office, storage space, and fast
                processor. Knowing your specific requirements will guide your decision-making process.
              </p>
            </div>
          </div>
          <div className='flex items-center bg-sectionBackgroundColor p-5 border-b-[3px] border-[#6450AA]'>
            <div className='w-[300px] pl-3 pr-5'>
              <Image src='/new-computer-setup-icon-2.png' width={200} height={200} alt='' className='w-auto h-auto' />
            </div>
            <div>
              <h6 className='text-lg font-bold italic'>2. Check the Specifications:</h6>
              <p>
                Key components such as the processor, RAM, and storage are crucial for performance. Choose between Intel or AMD processors, depending on your needs. Aim for at least 8GB of RAM to handle
                multitasking efficiently. Storage options like SSD (Solid State Drive) offer faster boot times and file access compared to traditional hard drives. Make sure the specifications match the tasks you plan to do.
              </p>
            </div>
          </div>
          <div className='flex items-center bg-sectionBackgroundColor gap-7 p-5 border-b-[3px] border-[#C3466E]'>
            <div className='w-[200px] pl-3'>
              <Image src='/new-computer-setup-icon-3.png' width={200} height={200} alt='' className='w-auto h-auto' />
            </div>
            <div>
              <h6 className='text-lg font-bold italic'>3. Consider Future Upgrades:</h6>
              <p>
                If you foresee needing more intel UHD graphics power in the future, consider whether the desktop or laptops package allows for upgrades. Look for packages that offer room for additional RAM, a
                better graphics card, or more storage. So your system can evolve with your needs.
              </p>
            </div>
          </div>
          <div className='flex items-center bg-sectionBackgroundColor gap-7 p-5 border-b-[3px] border-[#EC5930]'>
            <div className='w-[200px] pl-3'>
              <Image src='/new-computer-setup-icon-4.png' width={200} height={200} alt='' className='w-auto h-auto' />
            </div>
            <div>
              <h6 className='text-lg font-bold italic'>4. Set a Budget:</h6>
              <p>
                Determine how much you’re willing to spend and compare PC prices. That ensures you’re getting value for your money. At <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geeks CRS</a> , we offer desktop computer packages at different price points.
                So you’ll find one that suits your budget without compromising on quality.
              </p>
            </div>
          </div>
        </div>
        <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>
          By following these steps, you can confidently choose a desktop computer package that meets both your current and future needs.
        </p>
      </div>

      <QuickContact title='Contact Us for Computer Services and Support' />

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 '>The Advantages of <span className='text-primaryColor'>All-in-One Desktop Computers</span></h3>
        <p className='pb-5'>
          The all-in-one desktop computer is a popular choice for many customers, thanks to its sleek, minimalistic design and efficient performance like MacBook Pro and Dell XPS. These systems offer several distinct
          advantages that make them ideal for a variety of uses.
        </p>

        <Image src={'/computer-troubleshooting-5.png'} alt='All in one desktop computer packages' width={1200} height={900} className='w-full h-auto' />
        <div className='py-5'>
          <h5 className='text-xl font-bold italic pb-1'>Space-Saving Design:</h5>
          <p>
            An all-in-one computer combines the monitor and internal components into a single unit, significantly reducing the amount of space needed on your desk. This makes them perfect for small offices,
            home setups, or any environment where space is limited. You don’t have to worry about finding room for a separate tower. That makes your desk space feel more open and organized.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-1'>Less Clutter:</h5>
          <p>
            With fewer cables and external components, the all-in-one gaming laptop offers a much cleaner and neater setup. You just need to connect the power cable, keyboard, and mouse, avoiding the typical mess
            of wires found with traditional desktops.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-1'>Ideal for Home Use:</h5>
          <p>
            Whether you’re using personal computers for work, school, or entertainment, the simplicity and convenience of an all-in-one desktop make it a top choice. Its integrated design and ease of use make
            setup quick and straightforward. So you can start working or enjoying content without hassle with m3 chip.
          </p>
        </div>
        <p className='text-xl lg:text-2xl font-bold italic text-gray-500'>
          These benefits make the all-in-one desktop an excellent option for those who buy PCs with mobile computer, style, and simplicity in one package.
        </p>
      </div>


      <div className='container mx-auto'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 text-center'>Top Branded <span className='text-primaryColor'>Computers to Consider</span></h3>
        <p className='pb-5 text-center'>
          At Geeks CRS, we offer a wide range of branded desktop computers from leading manufacturers such as Dell XPS desktop, HP, and Lenovo. These brands are trusted globally for their exceptional quality,
          reliable performance, and internal storage. Here’s why you should consider purchasing a branded desktop:
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='shadow-hoverBoxShadow rounded-xl p-5'>
            <Image src='/new-computer-setup-icon-4.png' width={200} height={200} alt='' className='w-auto h-auto' />
            <div>
              <h6 className='text-xl font-bold italic pt-5 pb-1'>Reliability:</h6>
              <p>
                Branded PCs are built to last, offering durability and consistent performance over time. These desktops are engineered with high-quality components that reduce the risk of breakdowns. That makes
                them a dependable choice for both work and personal use.
              </p>
            </div>
          </div>
          <div className='shadow-hoverBoxShadow rounded-xl p-5'>
            <Image src='/new-computer-setup-icon-4.png' width={200} height={200} alt='' className='w-auto h-auto' />
            <div>
              <h6 className='text-xl font-bold italic pt-5 pb-1'>Customer Support:</h6>
              <p>
                One of the key benefits of branded desktop, and custom pc is the excellent customer support that comes with them. Major brands like Dell, HP, and Lenovo offer extended warranties and Windows Vista.
                It ensures that any issues are resolved quickly. This gives you peace of mind knowing that support is readily available if needed.
              </p>
            </div>
          </div>
          <div className='shadow-hoverBoxShadow rounded-xl p-5'>
            <Image src='/new-computer-setup-icon-4.png' width={200} height={200} alt='' className='w-auto h-auto' />
            <div>
              <h6 className='text-xl font-bold italic pt-5 pb-1'>Premium Quality:</h6>
              <p>
                Branded computers are designed with performance in mind. They come with high-resolution displays, powerful processors, and other premium features for pc gaming and other activities. That makes
                their intel processors capable of handling a wide range of tasks, from office work to games and content creation. Whether you're multitasking or using demanding software, branded desktops
                ensure a seamless experience.
              </p>
            </div>
          </div>
        </div>
        <p className='text-xl lg:text-2xl font-bold italic text-gray-500 text-center pt-5'>
          These factors make branded computers a solid investment for both home and business users with separate monitor and other facilities.
        </p>
      </div>


      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 '>Why Buy Desktop Computers <span className='text-primaryColor'>from Geeks CRS?</span></h3>
        <p className='pb-5'>
          At Geeks CRS, we are committed to being your go-to destination for purchasing desktop computers. Here’s what makes us stand out:
        </p>
        <div className='py-5'>
          <h5 className='text-xl font-bold italic pb-1'>Exclusive Deals:</h5>
          <p>
            We offer fantastic PC sales, ensuring you get premium products at unbeatable prices. Whether you're looking for a desktop computer package for games, Adobe Photoshop, work, or home use, our
            exclusive deals give you the best value for your money.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-1'>Expert Advice:</h5>
          <p>
            Our team of tech experts is here to help you every step of the way. Whether you're unsure about which desktop PC package to choose or need help with the computer setup at home, our knowledgeable
            staff is ready to guide you. We aim to make the purchasing process smooth and hassle-free.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-1'>Competitive Pricing:</h5>
          <p>
            At Geeks CRS, we understand that affordability matters. We offer highly competitive PC prices. That makes it easy to find a gaming desktop that fits your budget. Whether you want a branded computer
            or a customized package, we ensure you’re getting the best deal without compromising on quality.
          </p>
        </div>
        <p className='text-xl lg:text-2xl font-bold italic text-gray-500'>
          With our unbeatable combination of great deals, expert support, and affordable pricing, Geeks CRS is the ideal place to buy your next desktop computer.
        </p>
      </div>



      <QuickContact title='Contact Us for Computer Services and Support' />

      <div className='container mx-auto pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 text-center'>PC Prices: <span className='text-primaryColor'>Getting the Best Deal</span></h3>
        <p className='pb-5 text-center'>
          When searching for the best PC prices, timing can make all the difference. At Geeks CRS, we frequently offer PC sales and special promotions to help you find premium desktop computer app at the most
          affordable rates.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='shadow-hoverBoxShadow rounded-xl p-5'>
            <Image src='/new-computer-setup-icon-4.png' width={200} height={200} alt='' className='w-auto h-auto' />
            <div>
              <h6 className='text-xl font-bold italic pt-5 pb-1'>Look for Bundles:</h6>
              <p>
                One of the easiest ways to save money is by opting for a custom desktop package. These packages often include essential accessories like a keyboard, mouse, and monitor. That gives you more value
                for your purchase. Bundles also ensure that you have everything you need for a complete computer setup at home without having to buy additional components separately.
              </p>
            </div>
          </div>
          <div className='shadow-hoverBoxShadow rounded-xl p-5'>
            <Image src='/new-computer-setup-icon-4.png' width={200} height={200} alt='' className='w-auto h-auto' />
            <div>
              <h6 className='text-xl font-bold italic pt-5 pb-1'>Compare Prices:</h6>
              <p>
                It’s always a good idea to compare <a href="https://au.pcpartpicker.com/" className='text-primaryColor underline'>PC prices</a> across different models to make sure you’re getting the best deal for your budget. At Geeks CRS, we stock a wide variety of desktop computers, from
                basic setups for casual users to high-performance systems for gaming and professional use. By comparing the specs and prices, you can find the perfect desktop that fits your needs and your budget.
              </p>
            </div>
          </div>
        </div>
        <p className='text-xl lg:text-2xl font-bold italic text-gray-500 text-center pt-5'>
          With regular sales and bundles, our Geeks CRS helps you secure the best deal when you’re ready to buy a PC for work, gaming, or home use.
        </p>
      </div>

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl lg:text-4xl font-bold text-center pb-8'>Frequently Asked <span className='text-primaryColor'>Questions</span></h3>
        <div className='w-full lg:w-[90%] mx-auto'>
          <div className="join join-vertical">
            <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">1. What is included in a desktop computer package?</div>
              <div className="collapse-content">
                <p className='text-[#3d3d3d]'>
                  A typical desktop computer package includes a computer tower, monitor, keyboard, and mouse. Some packages may also include additional accessories like a webcam or speakers. That
                  depends on the brand and model.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">2. What is the difference between a desktop computer package and an all-in-one desktop?</div>
              <div className="collapse-content">
                <p className='text-[#3d3d3d]'>
                  A desktop computer package includes separate components (tower, monitor, etc.), whereas an all-in-one desktop integrates the computer components into the monitor itself. That
                  provides a more compact and streamlined design.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">3. Can I upgrade my desktop computer package in the future?</div>
              <div className="collapse-content">
                <p className='text-[#3d3d3d]'>
                  Yes, many desktop computer packages allow for future upgrades. You can add more RAM, replace the hard drive with a larger one, or upgrade the graphics card to meet your evolving
                  needs.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">4. Are branded desktop computers better than custom-built ones?</div>
              <div className="collapse-content">
                <p className='text-[#3d3d3d]'>
                  Branded computers offer reliability, customer support, and warranties. That makes them a great choice for general users. Custom-built desktops, on the other hand, allow for more
                  flexibility and personalization in terms of specifications.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">5. How do I set up my desktop computer at home?</div>
              <div className="collapse-content">
                <p className='text-[#3d3d3d]'>Setting up a desktop computer at home is simple. Just plug in the monitor, keyboard, and mouse to the tower (or to the all-in-one system), connect to power, and follow the
                  on-screen instructions. If you need help, our Geeks CRS offers support for home computer setups.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">6. Where can I find the best deals on desktop computer packages?</div>
              <div className="collapse-content">
                <p className='text-[#3d3d3d]'>
                  At Geeks CRS, we offer competitive pricing and frequent PC sales. That ensures you get the best deals on desktop computer packages. Check out our current promotions or get in touch
                  with us for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl lg:text-4xl font-bold pb-5'>Final Thoughts</h3>
        <p>
          Finding the perfect desktop computer packages is easy with <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geeks CRS</a>. We offer a wide selection of desktop pc packages, from all-in-one desktop computers to branded PCs. It ensures that you find the
          ideal system for your needs. Whether you're looking to set up a computer at home or need a powerful machine for professional use, we've got you covered.
        </p>
        <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>
          Explore our range of desktop computer packages and take advantage of our great deals today!
        </p>
      </div>

    </div>
  )
}

export default NewComputerSetup