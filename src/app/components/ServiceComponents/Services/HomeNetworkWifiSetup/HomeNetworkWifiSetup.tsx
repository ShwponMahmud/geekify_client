import Accordion from '@/app/components/sharedComponents/Accordion/Accordion'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import React from 'react'

function HomeNetworkWifiSetup({service}: ServiceDetailsProps) {
  const faqItems = [
    {
      question: "What’s the Best Internet Speed for Home Use?",
      answer:
        "It depends on your usage. For a family with multiple devices, a speed of at least 25 Mbps is recommended.",
    },
    {
      question: "How Do I Set Up WiFi in a Multi-Story Home?",
      answer:
        "Use a mesh network system or WiFi extenders to ensure coverage across multiple floors.",
    },
    {
      question: "Is a Wired Connection Better than WiFi for Home Use?",
      answer:
        "For devices like desktops and gaming consoles, a wired Internet setup connection provides more stability and speed compared to WiFi.",
    },
    {
      question: "How Can I Improve My Home Network’s Security?",
      answer:
        "Set a strong password, enable encryption, and regularly update your router’s firmware.",
    },
    {
      question: "What’s the Cost of a Professional Internet Setup?",
      answer:
        "Professional setup costs vary based on the complexity of the installation of internet. Contact Geeks CRS for a personalized quote.",
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
              Setting up the internet in your home is more than just a technical task. it’s the key to staying connected in today’s vibrant digital landscape. Imagine effortlessly working from home, diving into
              your favorite shows, or controlling your smart home devices with just a voice command. A reliable internet connection transforms these possibilities into reality, enriching your daily life and
              fostering meaningful connections with loved ones. It’s about convenience, comfort, and creating a space where you can thrive. In this guide, we’ll not only walk you through the steps of internet
              setup and WiFi configuration but also help you build a secure home network. This ensures every moment spent online is smooth and enjoyable. Let’s embark on this journey together!
            </p>
          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>Understanding Internet <span className='text-primaryColor'>Setup for Home Use</span></h3>
            <p className='text-center'>
              Internet setup refers to the essential steps needed to connect your devices. Such as laptops, phones, and smart TVs, to the internet via a wifi network or a wired connection. This <a href="https://geekify.com.au/book-online" className='text-primaryColor underline'>DNS server setup</a>
              forms the foundation of your home network. That enables fast, reliable, and secure access to online resources. Whether you’re working from home, streaming, or connecting smart devices, a strong
              internet setup ensures smooth performance. A properly configured home network helps reduce interruptions, enhances security, and allows multiple devices to connect effortlessly. This means you can
              use your devices simultaneously without worrying about slow speeds or connectivity issues. An effective internet provider setup is the backbone of a connected home, creating an environment where
              online activities are hassle-free and secure. That allows everyone in the household to enjoy a seamless internet experience.
            </p>

          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>Choosing the Right <span className='text-primaryColor'>Internet Service</span></h3>
            <p className='mb-4'>
              The first step in setting up your home internet is choosing an internet service provider (ISP) that suits your needs.
            </p>

            <h5 className='text-xl font-bold italic'>Researching ISPs in Australia:</h5>
            <p>
              Many ISPs in Australia offer different internet speeds, data plans, and prices. Take the time to research options based on speed, data limits, and customer support. For example, if you’re a heavy
              streamer or work from home, you’ll want a high-speed plan with a generous data cap.
            </p>

            <h5 className='text-xl font-bold italic pt-5'>Types of Internet Connections:</h5>
            <p>
              In Australia, there are several options for internet connections, each with unique benefits:
            </p>

            <ul className='list-disc ml-5 space-y-2 mt-3'>
              <li><span className='font-bold'>NBN (National Broadband Network):</span>
                A widely used option that offers various speed levels to suit different user needs. That makes it a versatile choice for many homes.
              </li>
              <li><span className='font-bold'>Fiber:</span>
                Known for exceptional speed and stability, fiber is ideal for households with high internet demands and multiple connected devices. It’s a great choice for streaming, gaming, and
                working from home.
              </li>
              <li><span className='font-bold'>Cable:</span> Provides fast, reliable internet, though speed may vary based on your location and local infrastructure. Cable is often chosen for homes where other
                high-speed options are limited.
              </li>
              <li><span className='font-bold'>DSL:</span> A basic internet option that uses phone lines, suitable for light internet activities like browsing and emailing. While affordable, it’s typically
                slower than NBN and fiber.
              </li>
            </ul>
            <p className='text-xl lg:text-2xl font-bold italic text-gray-500 mt-5'>Choosing the best connection depends on the options available in your area and your specific internet usage needs.</p>
          </div>
        </div>
      </div>

      <QuickContact title='Contact Us Today for Expert CCTV Installation Services' />



      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7'>Tips for Optimizing Your <span className='text-primaryColor'>NBN WiFi Router Installation</span></h3>

        <Image src={'/home-network-wifi-1.png'} alt='nbn wifi router' width={1200} height={900} className='w-full h-auto' />
        <div className='py-5'>
          <h5 className='text-xl font-bold italic pb-2'>1. Position Your NBN WiFi Router Strategically</h5>
          <p>
            For the best signal, place your NBN WiFi router in a central, open location away from thick walls, metal objects, and other electronics that might interfere with the connection. This is an essential
            step in any NBN setup for maximizing coverage.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>2. Follow the NBN Installation Guide for Router Setup</h5>
          <p>
            Carefully consult the NBN installation guide with your NBN modem setup. Following these instructions ensures that your router and modem are correctly configured. That reduces potential
            connectivity issues.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>3. Use the Right WiFi Router for NBN</h5>
          <p>
            Ensure that the router you’re using is designed for NBN compatibility. A router that supports dual-band (2.4GHz and 5GHz) can optimize performance by providing flexibility to connect devices to the
            ideal frequency for either range or speed.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>4. Secure and Update Your Setup Regularly</h5>
          <p>
            After you setup NBN modem and router, secure the network with a strong password and encryption. Regularly check for firmware updates to optimize your router for performance and security.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>5. Consider Extenders for Enhanced Coverage</h5>
          <p>
            If your WiFi router for NBN struggles to reach certain areas, add range extenders or a mesh WiFi system. This extends coverage, ensuring a consistent connection throughout your home.
          </p>
        </div>
        <p className='text-xl lg:text-2xl font-bold italic text-gray-500'>
          These tips will help you achieve a smoother, more reliable NBN modem setup for all your internet needs.
        </p>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>How Much Does <span className='text-primaryColor'>CCTV Installation Cost?</span></h3>
        <p className='mb-4 text-center'>CCTV security cameras installation prices are often a primary concern for customers, but at Geeks CRS, we strive to offer competitive pricing for every budget. We aim to provide
          cheap CCTV cameras and security camera installation options without compromising on the quality or effectiveness of your security system.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
          <div className='shadow-hoverBoxShadow rounded-xl p-6'>
            <div className='bg-[#FEB800] w-[150px] rounded-br-[50px]'>
              <h5 className='text-white text-5xl font-bold py-4 px-10'>01</h5>
            </div>
            <h6 className='font-bold text-xl italic py-4'>Start with TP-Link Modem Setup</h6>
            <p>
              Connect and configure your TP Link modem setup following the provided instructions to ensure a stable NBN connection before moving to the router setup.
            </p>
          </div>
          <div className='shadow-hoverBoxShadow rounded-xl p-6'>
            <div className='bg-[#F5804E] w-[150px] rounded-br-[50px]'>
              <h5 className='text-white text-5xl font-bold py-4 px-10'>01</h5>
            </div>
            <h6 className='font-bold text-xl italic py-4'>Optimize TP Link Router Setup for Best Performance</h6>
            <p>
              Place your TP-Link router in a central location, ideally elevated, to maximize signal coverage. Ensure settings align with your NBN provider's recommendations for optimal performance.
            </p>
          </div>
          <div className='shadow-hoverBoxShadow rounded-xl p-6'>
            <div className='bg-[#0090C3] w-[150px] rounded-br-[50px]'>
              <h5 className='text-white text-5xl font-bold py-4 px-10'>01</h5>
            </div>
            <h6 className='font-bold text-xl italic py-4'>Extend Coverage with TP-Link Extender Setup</h6>
            <p>
              For areas with weak signals, use a TP Link extender setup to expand WiFi coverage. Follow the setup instructions to ensure it connects seamlessly with your TP-Link router. That creates a stronger,
              uninterrupted network throughout your home.
            </p>
          </div>
        </div>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7'>Step-by-Step Guide to Setting Up <span className='text-primaryColor'>Your WiFi Connection for Home</span></h3>


        <div className='my-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>1. Connect Your Modem and Router</h5>
          <p>
            Begin by linking your modem to your router using an Ethernet cable. Ensure both devices are plugged into a power source. Then turn them on to establish a connection.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>2. Wait for Connection Lights</h5>
          <p>
            Open a web browser on a connected device and enter the IP address provided on your router (e.g., 192.168.1.1). This will take you to the router’s login page, where you can adjust settings.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>3. Access Router Settings</h5>
          <p>
            Allow a few minutes for the modem and router to synchronize. You should see indicator lights on both devices, which confirm they are connected. Check your router’s user guide if the lights don’t
            appear as expected.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>4. Log In to Your Router</h5>
          <p>
            Use the default username and password provided by the manufacturer, often found on the device or in its manual. Once logged in, you’ll be able to access the router’s settings.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>5. Create a Network Name (SSID)</h5>
          <p>
            Choose a unique and identifiable WiFi network name or SSID. So you can easily recognize your network among others in your area.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>6. Set a Strong WiFi Password</h5>
          <p>
            For security, create a complex password that includes numbers, letters, and symbols. This helps prevent unauthorized access to your wireless connection.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>7. Enable Security Encryption</h5>
          <p>
            Select WPA3 or WPA2 encryption in your router settings. Wifi 6e adds a layer of security, ensuring that only those with your wifi network password can access your wi fi settings.
          </p>
        </div>
        <div className='mb-5 p-5 shadow-hoverBoxShadow rounded-xl'>
          <h5 className='text-xl font-bold italic pb-2'>8. Save Settings and Reboot the Router</h5>
          <p>
            After configuring your network settings, save the changes and restart the router to apply them. This completes the fiber internet setup, allowing you to enjoy a secure wireless access point
            throughout your home.
          </p>
        </div>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>Home Computer <span className='text-primaryColor'>Network Setup</span></h3>
        <p className='pb-5'>
          An ethernet port home network connects your devices, like computers, smartphones, and smart home devices, enabling them to communicate with each other.
        </p>
        <Image src={'/home-network-wifi-2.png'} alt='home computer network setup' width={1200} height={900} className='w-full h-auto' />
        <div className='py-5'>
          <h5 className='text-xl font-bold italic pb-2'>What is a Home Network?</h5>
          <p>
            A home network allows devices to share internet access and communicate with one another. Whether you’re streaming on a smart TV or transferring files between computers, a wired device network setup
            enhances connectivity.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>Wired <span className='text-primaryColor'>vs.</span> Wireless Network Setup</h5>
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Wired Connections:</span> Ethernet cables provide faster, stable connections. LAN port makes them ideal for stationary devices like desktop computers. That benefits
              from consistent speed and reliability.</li>
            <li><span className='font-bold'>Wireless Connections: </span>
              Wireless networks offer flexibility. That allows devices like phones, tablets, and laptops to connect without cables. This router manufacturer setup enables mobility throughout
              the home. That makes it convenient for everyday use, though it may be slightly less stable than wired connections.
            </li>
          </ul>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>BYO Modem <span className='text-primaryColor'>vs.</span> Provider Modem Setup</h5>
          <p>
            <a href="https://www.spintel.net.au/blog/yo-modem" className='text-primaryColor underline'>Setting up a BYO modem</a> allows flexibility, but configurations may differ from provider-specific modems like those from Belong or iiNet. For example, accessing Belong router login or Belong modem
            login is often streamlined with preset credentials. At the same time, Dodo modem setup and iiNet modem setup may require additional configuration steps specific to their networks.
          </p>
        </div>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <div>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>Step-by-Step <span className='text-primaryColor'>Home Network Configuration</span></h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <div className='bg-[#FEB800] w-[65%] rounded-br-[70px]'>
                <h5 className='text-white text-4xl font-thin py-4 px-10'>STEP 01</h5>
              </div>
              <h6 className='font-bold text-xl italic py-4'>Connect Devices Using Ethernet Cables</h6>
              <p>For optimal speeds, directly connect stationary devices like desktop computers, gaming consoles, and smart TVs to the router using Ethernet cable internet. This installation of the internet
                ensures reliability and minimal latency. This is perfect for intensive tasks like gaming and streaming.</p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <div className='bg-[#F5804E] w-[65%] rounded-br-[70px]'>
                <h5 className='text-white text-4xl font-thin py-4 px-10'>STEP 01</h5>
              </div>
              <h6 className='font-bold text-xl italic py-4'>Set Up the Wireless Network</h6>
              <p>
                Connect mobile devices, laptops, and tablets to your WiFi network using the SSID and password you created earlier. wifi plans ensure all devices are properly connected for seamless internet
                access throughout your home.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <div className='bg-[#0090C3] w-[65%] rounded-br-[70px]'>
                <h5 className='text-white text-4xl font-thin py-4 px-10'>STEP 01</h5>
              </div>
              <h6 className='font-bold text-xl italic py-4'>Use WiFi Range Extenders</h6>
              <p>
                If you have a larger home or experience weak signals in certain areas, consider using WiFi range extenders. These devices boost your network’s coverage. That ensures a strong connection in
                every room for mobile device setup.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>Securing Your <span className='text-primaryColor'>Home Network</span></h3>
        <p className='pb-5'>
          Network security is essential to protect your data from unauthorized access.
        </p>
        <Image src={'/home-network-wifi-3.png'} alt='installation of internet' width={1200} height={900} className='w-full h-auto' />
        <div className='py-5'>
          <h5 className='text-xl font-bold italic pb-2'>Router Configuration Tips</h5>
          <p>
            Our team of experts has experience setting up available wi fi network configurations, That are tailored to meet your specific requirements.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>Home Network Security Basics</h5>
          <p>
            Use a strong password and enable WPA3 encryption to protect your WiFi network. For additional security, disable remote management and enable firewall settings on your router.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>Advanced Security Features</h5>
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Guest Networks: </span>
              Create a separate network for guests to prevent unauthorized access to your main network.
            </li>
            <li><span className='font-bold'>Parental Controls: </span>Block or restrict access to specific websites.</li>
            <li><span className='font-bold'>VPN: </span>Using a VPN on your network adds an extra layer of privacy.</li>
          </ul>
        </div>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>Professional Installation of the <span className='text-primaryColor'>Internet for Different Home Needs</span></h3>
        <p className='pb-5'>
          Every home setup is unique. Here’s how to tailor your internet installation for specific needs.
        </p>
        <div className='py-5'>
          <h5 className='text-xl font-bold italic pb-2'>Internet Setup for Smart Homes</h5>
          <p>
            As more people use smart devices like thermostats, lights, and security cameras, it’s essential to ensure these devices connect securely to your network. Separate them from your main network by
            creating a dedicated network for IoT (Internet of Things) devices.
          </p>
        </div>
        <div className='pb-5'>
          <h5 className='text-xl font-bold italic pb-2'>Troubleshooting Common Issues</h5>
          <ul className='list-disc ml-5'>
            <li><span className='font-bold'>Slow Speeds: </span>
              Check for device interference, especially from appliances like microwaves, and ensure your router is positioned centrally.
            </li>
            <li><span className='font-bold'>Connection Drops: </span>Check router settings, or consider upgrading if your router doesn’t support multiple devices well.</li>
            <li><span className='font-bold'>Device Compatibility: </span>Ensure that your devices are compatible with the router’s bandwidth (2.4 GHz or 5 GHz).</li>
          </ul>
        </div>
      </div>

      <QuickContact title='Contact Us Today for Expert CCTV Installation Services' />

      <div className='container mx-auto pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
        <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>Why Choose Geeks CRS for <span className='text-primaryColor'>Your Internet Setup?</span></h3>
        <p>
          Network security is essential to protect your data from unauthorized access.
        </p>
        <div className='py-5'>
          <h5 className='text-xl font-bold italic pb-2'>Our Installation Process</h5>
          <p>
            <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geeks CRS</a> takes a comprehensive approach. We assess your space, install the necessary equipment, and configure your network for optimal performance and security.
          </p>
        </div>
        <div>
          <h5 className='text-xl font-bold italic pb-2'>Reliable Support and Service</h5>
          <p>
            We provide ongoing ethernet adapter support to ensure that your home network remains secure and up-to-date. Whether you’re experiencing slow speeds or need help adding new devices, we’re here to
            help by network administrator.
          </p>
        </div>
      </div>

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl lg:text-4xl font-bold text-center pb-8'>Frequently Asked <span className='text-primaryColor'>Questions</span></h3>
        <Accordion items={faqItems} />
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <h3 className='text-2xl lg:text-4xl font-bold pb-5 italic'>Final Thought</h3>
        <p>
          Setting up a strong internet connection at home doesn’t have to be complicated. With the right equipment, proper configurations, and professional help from experts like Geeks CRS, you can enjoy fast,
          reliable, and secure internet tailored to your needs. Whether you’re building a simple home network a cable modem or a sophisticated setup with smart devices, <a href="https://geekify.com.au/" className='text-primaryColor underline'>Geeks CRS</a> has the solutions and support
          to keep you connected.
        </p>
        <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>Ready to get started with your home internet setup? Contact Geeks CRS today, and let us bring you closer to a hassle-free, optimized internet experience!</p>
      </div>

    </div>
  )
}

export default HomeNetworkWifiSetup