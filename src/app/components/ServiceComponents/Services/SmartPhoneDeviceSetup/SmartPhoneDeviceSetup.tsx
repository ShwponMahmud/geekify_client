import Accordion from '@/app/components/sharedComponents/Accordion/Accordion'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import React from 'react'

function SmartPhoneDeviceSetup({service}: ServiceDetailsProps) {
  const faqItems = [
  {
    question: "How do I transfer data from my old device to my new one?",
    answer: "Use Google Backup or a data transfer app to sync contacts, photos, and apps from your old device."
  },
  {
    question: "Do I need a Google account to set up a new Android phone?",
    answer: "Yes, a Google account is required to access the Play Store, sync apps, and perform backups."
  },
  {
    question: "What if I forget my Google password during setup?",
    answer: "Use the 'Forgot Password' link to reset your password and resume setup with the new credentials."
  },
  {
    question: "Can you help set up other devices like tablets and smart TVs?",
    answer: "Yes, we assist with setting up various devices, including tablets, smart TVs, and laptops."
  },
  {
    question: "How can I protect my new device from viruses?",
    answer: "Install a trusted antivirus app from the Play Store, and avoid downloading from third-party sources."
  },
  {
    question: "What should I do if my device won’t turn on after unboxing?",
    answer: "Ensure it’s charged, then try holding down the power button. If it still won’t turn on, contact our support team."
  }
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
              Let’s talk about the Guide to Set Up My Device. Setting up a new device is an exciting experience. But it can also be overwhelming if you don't know where to begin.
              At Geeks CRS, we make the process easy and efficient. Whether you have a new phone, tablet, or any smart gadget, our team specializes in helping you get set up
              quickly. We provide a simple, step-by-step approach that guides you through the entire process. From configuring basic Google Assistant settings to connecting to
              the internet and transferring important data, we ensure your device is ready for use without any hassle. Trust us to handle the setup, so you can enjoy your new
              device to its fullest immediately!
            </p>
          </div>
        </div>
      </div>

      <div className='container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28'>
        <div className="">
          <div className=''>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 text-center'>Why Choose Us to <span className='text-primaryColor'>Set Up Your Device?</span></h3>
            <p className='text-center pb-8'>
              Getting a new device is exciting, but the setup process can be complex. At Geeks CRS, we ensure a smooth Android phone setup. That lets you make the most of your Android phone or new device
              from day one. Here’s how we help:
            </p>
          </div>

          <div className='space-y-8'>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/smartphone-device-setup-1.png"
                alt="How to set up my device"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-xl font-bold italic">Configure Basic Settings:</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    We start by setting up the core preferences of Android phones like language, time zone, google pixel, and display options. These initial steps create a personalized experience. That makes
                    sure everything is tailored to your needs right out of the box.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/smartphone-device-setup-2.png"
                alt="Connect the internet to set up my device"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-xl font-bold italic">Connect to the Internet:</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Internet access is vital for browsing, app downloads, and system updates. We’ll connect your new phone to a secure Wi-Fi network or mobile data plan for set up my device. So you can enjoy
                    seamless online functionality right away.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/smartphone-device-setup-3.png"
                alt="Sync Your Accounts to set up my device"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-xl font-bold italic">Sync Your Accounts:</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Whether you have email accounts, cloud storage, Google Drive, apple watch on an apple device, or other essential services, syncing these accounts allows you to access important information
                    instantly. We help you sign in and connect each account, creating a unified experience across your set up mobile device.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/smartphone-device-setup-4.png"
                alt="Transfer Important Data for set up device"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-xl font-bold italic">Transfer Important Data:</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Are you moving from an old device? We’ll transfer your contacts in SIM card, google app, photos, and files to your new device. This secure process ensures that none of your data is left
                    behind on your old phone. That helps you pick up right where you left off with set up my device android touch ID in your new Android phone.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/smartphone-device-setup-5.png"
                alt="set up my android device and Install Essential Apps"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-xl font-bold italic">Install Essential Apps:</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    From social media and productivity tools to antivirus and system updates, we guide you in downloading and set up my device’s key apps. We make sure the find my device app is equipped with
                    the tools you need. Apple inc along with proper security settings for peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>
            With Geeks CRS, setting up your device is easy, efficient, and hassle-free. Let us handle the setup so you can focus on exploring and enjoying all the great features your new device has to offer!
          </p>
        </div>
      </div>

      <QuickContact title='Contact Us Today for Anti Virus Installation Services' />

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <div>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>How to remove <span className='text-primaryColor'>virus from a laptop</span></h3>
          <p className='text-center'>Whether you’re using Windows or macOS, here’s how to deal with viruses on your laptop or desktop computer.</p>

          <div className='grid grid-cols-[repeat(auto-fit,_33.33%)] md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 pt-8'>
            <div className='shadow-hoverBoxShadow rounded-xl p-6 justify-center justify-self-center mx-auto'>
              <div className='bg-[#FEB800] py-3 px-10 rounded-br-[70px] w-[65%]'>
                <h4 className='text-2xl lg:text-4xl uppercase font-thin text-white'>step 01</h4>
              </div>
              <h6 className='text-lg font-bold pt-4'>Unboxing and Initial Steps</h6>
              <p>
                When you unbox your new device, ensure all tablet accessories are included. Turn it on and follow the on-screen instructions. You’ll be prompted to select language, region, digital well-being,
                and other initial preferences for set up my device.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <div className='bg-[#F5804E] py-3 px-10 rounded-br-[70px] w-[65%]'>
                <h4 className='text-2xl lg:text-4xl uppercase font-thin text-white'>step 02</h4>
              </div>
              <h6 className='text-lg font-bold pt-4'>Connect to Wi-Fi or Mobile Data</h6>
              <p>
                Internet connectivity is essential for the setup process. Locate Wi-Fi settings under the Network tab and connect to a secure network. If you have a mobile plan, ensure mobile data is turned on
                if needed.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <div className='bg-[#0090C3] py-3 px-10 rounded-br-[70px] w-[65%]'>
                <h4 className='text-2xl lg:text-4xl uppercase font-thin text-white'>step 03</h4>
              </div>
              <h6 className='text-lg font-bold pt-4'>Sign In or Create Accounts</h6>
              <p>
                Devices often require you to sign into an account, such as Google on Android devices. This enables access to app downloads, cloud backups, and personalization options. If you've set up my device
                Android, your Google account is key for apps and data syncing.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6 justify-center justify-self-center mx-auto'>
              <div className='bg-[#F54E67] py-3 px-10 rounded-br-[70px] w-[65%]'>
                <h4 className='text-2xl lg:text-4xl uppercase font-thin text-white'>step 04</h4>
              </div>
              <h6 className='text-lg font-bold pt-4'>Customize Display and Sound Settings</h6>
              <p>
                You’ll find options to adjust brightness, font size, and volume under Display and Sound settings. Personalize these to your comfort to make using your device easy on the eyes and ears.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6 justify-center justify-self-center mx-auto'>
              <div className='bg-[#C38800] py-3 px-10 rounded-br-[70px] w-[65%]'>
                <h4 className='text-2xl lg:text-4xl uppercase font-thin text-white'>step 05</h4>
              </div>
              <h6 className='text-lg font-bold pt-4'>Install and Update Essential Apps</h6>
              <p>
                After signing in, check if your device has pending updates, especially on Android. Visit the Google Play Store for recommended apps and download those you’ll need right away, like social
                media, productivity tools, or media players.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto'>
        <div>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold'>Setting Up a New Android Device? <span className='text-primaryColor'>Here's What to Know</span></h3>
          <p className='pt-2'>
            <a href="https://geekify.com.au/book-online" className='text-primaryColor underline'>Setting up a new Android device</a> is a straightforward process that primarily revolves around syncing with Google services. Here’s a quick guide to help you through the setup:
          </p>

          <div className='pt-8 space-y-6'>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <h6 className='text-xl italic font-bold pb-1'>Sign in with Google:</h6>
              <p>
                The first step in setting up your Android device is entering your Google Home app account details. This is crucial because it gives you access to essential apps, emails, and backups. By signing in,
                you can easily restore data from your previous Samsung phone. That ensures a seamless transition and a smooth experience right from the start.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <h6 className='text-xl italic font-bold pb-1'>Enable Security Settings:</h6>
              <p>
                Protecting your device should be a top priority. Android devices offer various security options, such as using a fingerprint scanner, a PIN, or a pattern lock. That reduces lost devices. Enabling
                these security settings will help keep your personal information safe from unauthorized access.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <h6 className='text-xl italic font-bold pb-1'>Customize Notifications:</h6>
              <p>
                Once your device is initially setup, you can manage how notifications appear. Navigate to Settings > Notifications to customize your preferences. This allows you to choose which apps can send
                notifications, how they appear, and whether you want sound or vibration alerts. Tailoring these settings to your liking enhances your user experience and minimizes distractions.
              </p>
            </div>
          </div>
          <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>
            By following these simple steps, you can effectively set up my device android and enjoy verizon home internet and all its features while keeping your data secure and well-organized.
          </p>
        </div>
      </div>

      <div className='container mx-auto'>
        <div className='py-8 md:py-14 lg:py-20 xl:py-28'>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>Troubleshooting <span className='text-primaryColor'>Common Setup Issues</span></h3>
          <p className='pb-6'>Set up my device can sometimes lead to unexpected challenges. Here are some common connected devices problems and practical solutions to help you troubleshoot effectively:</p>
          <Image src={'/smartphone-device-setup-6.png'} alt='Troubleshooting Common Setup Issues' width={1200} height={900} className='w-full h-auto' />
          <div className='pt-8 space-y-4'>
            <div>
              <h5 className='text-xl font-bold pb-1 italic'>1. Can’t Connect to Wi-Fi:</h5>
              <p>If your device isn't connecting to Wi-Fi, first verify that you've entered the correct password. Double-check for typos and ensure that your router is functioning. If problems persist, try
                resetting your router and then restarting your different device to establish a fresh connection.</p>
            </div>
            <div>
              <h5 className='text-xl font-bold pb-1 italic'>2. Issues Signing In to Google Account:</h5>
              <p>
                If you encounter issues when signing in to your Google account, carefully check your username and password. If you’ve forgotten your password, use the "Forgot Password" option to reset it. Make
                sure that your previous device is connected to the internet during this process.
              </p>
            </div>
            <div>
              <h5 className='text-xl font-bold pb-1 italic'>3. Problem with Data Transfer:</h5>
              <p>
                When transferring data from an old device, ensure that both mobile home devices are connected to the same Wi-Fi network. Use reliable data transfer apps like Google Backup or the manufacturer's
                transfer tool. If the transfer fails, consider performing a manual transfer using a USB cable or transferring files to a computer first.
              </p>
            </div>
            <div>
              <h5 className='text-xl font-bold pb-1 italic'>4. Device Not Recognized by Computer:</h5>
              <p>
                If your Apple arcade device isn’t recognized by your computer when connected via USB, ensure that the cable is functioning properly. Also, check that the device is set to the correct mode (like
                File Transfer) when connected.
              </p>
            </div>
            <div>
              <h5 className='text-xl font-bold pb-1 italic'>5. Apps Not Downloading:</h5>
              <p>
                If you’re having trouble downloading apps from the Google Play Store, ensure that your smartphone has enough storage space. Clear cache and data for the Play Store app if necessary, and check
                your internet connection on the home screen.
              </p>
            </div>
            <div>
              <h5 className='text-xl font-bold pb-1 italic'>6. Screen Freezes During Setup:</h5>
              <p>
                If the setup screen freezes, try a simple restart of your dialog window device. If the issue continues, consider a factory reset, but remember to back up important data first.
              </p>
            </div>
            <div>
              <h5 className='text-xl font-bold pb-1 italic'>7. Updates Not Installing:</h5>
              <p>
                If your device prompts for updates but fails to install them, ensure you have a stable internet connection. Restart your device's app settings and try installing the updates again.
              </p>
            </div>
            <div>
              <h5 className='text-xl font-bold pb-1 italic'>8. Notification Issues:</h5>
              <p>
                If you’re not receiving notifications, check your notification settings under Settings > Notifications. Ensure that notifications are enabled for your preferred apps.
              </p>
            </div>
            <div>
              <h5 className='text-xl font-bold pb-1 italic'>9. Battery Drain:</h5>
              <p>
                New devices may experience rapid battery drain during the initial setup. This is often due to background processes. Allow some time for the device to settle and monitor battery usage in settings.
              </p>
            </div>
            <div>
              <h5 className='text-xl font-bold pb-1 italic'>10. Screen Brightness Problems:</h5>
              <p>
                If your screen brightness is too dim or too bright, adjust it in Settings > Display. You can also toggle the adaptive brightness feature for automatic adjustments based on lighting conditions
                for Android users.
              </p>
            </div>
            <p className='text-xl lg:text-2xl font-bold italic pt-5 text-gray-500'>
              By following these troubleshooting tips, you can effectively address common setup issues and ensure that your new Android phone is up and running smoothly. If problems persist, don’t hesitate to
              reach out for professional assistance.
            </p>
          </div>
        </div>
      </div>


      <QuickContact title='Contact Us Today for Anti Virus Installation Services' />

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl lg:text-4xl font-bold text-center pb-8'>Frequently Asked <span className='text-primaryColor'>Questions</span></h3>
        <Accordion items={faqItems} />
      </div>


      <div className='container mx-auto'>
        <h3 className='text-2xl lg:text-4xl font-bold mb-5'>Contact Us</h3>
        <p className='mb-4'>
          Are you in need of assistance with set up my device? At Geeks CRS, our dedicated team is here to make the setup process quick, easy, and stress-free. Whether you’re configuring a new phone, tablet,
          or any other smart device, we have the <a href="https://www.cashify.in/how-to-use-ok-google-to-set-up-my-device" className='text-primaryColor underline'>expertise to guide</a> you through every step.
        </p>
        <p className='mb-4'>Our professionals are ready to help you with everything from connecting to Wi-Fi and syncing accounts to transferring data and installing essential apps. We understand that technology can sometimes
          be overwhelming. But with our support, you can enjoy your new device without any hassle.</p>

        <p>
          Don’t hesitate to reach out! <a href="https://geekify.com.au/contact-us" className='text-primaryColor underline'>Contact us</a> today for personalized assistance, and let us help you get your sim card device up and running smoothly. Your satisfaction is our priority, and we’re committed
          to providing you with a seamless setup experience.
        </p>

        <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>
          Let Geeks CRS handle the technical setup so you can start enjoying your new device without any hassle!
        </p>
      </div>

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl lg:text-4xl font-bold mb-5'>Get Expert Help Set Up My Device</h3>
        <p className='mb-4'>
          At Geeks CRS, we are committed to making your device setup hassle-free. Our experienced team is here to assist you every step of the way. Whether you’re facing challenges or prefer to have an expert
          handle the entire process, we’ve got you covered.
        </p>
        <p className='mb-4'>
          We offer personalized support tailored to your specific needs. It ensures that your new device is fully equipped and ready to use. We take care of everything from configuring essential settings and
          syncing accounts to installing the apps you need.
        </p>

        <p>
          With our help, you can enjoy peace of mind knowing that your device is set up correctly and optimized for your use. Don’t hesitate to reach out for expert assistance—let us make your device setup
          seamless and efficient. So you can start enjoying your new technology right away!
        </p>

        <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>
          Ready to get started? Contact us today to set up your SIM card and device, or explore our other tech support services for a hassle-free experience with all your gadgets.
        </p>
      </div>
    </div>
  )
}

export default SmartPhoneDeviceSetup