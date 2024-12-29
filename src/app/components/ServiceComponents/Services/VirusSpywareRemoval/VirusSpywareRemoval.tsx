import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import React from 'react'

function VirusSpywareRemoval({ service }: ServiceDetailsProps) {
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
              Viruses, malware, and spyware can wreak havoc on your devices, draining their speed, invading your privacy, and causing endless frustration. Imagine your trusted iPhone, laptop, Android, or computer
              suddenly lagging, bombarded by pop-ups, or even risking your data. It’s unsettling, and staying protected from these invisible threats is more important than ever. You deserve the peace of mind that
              comes from knowing your devices are safe, secure, and performing at their best. Let’s dive into powerful, effective ways to <a href="https://geekify.com.au/book-online" className='text-primaryColor underline'>remove viruses</a> and protect what matters most—your privacy, data, and daily
              digital life. It’s time to reclaim control and keep your devices running smoothly, without fear or frustration.
            </p>
          </div>

          <div className='pt-8 md:pt-14 lg:pt-20 xl:pt-28'>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>What Is a Virus and <span className='text-primaryColor'>Why Is Remove Virus Important?</span></h3>
            <div className='text-center'>
              <p>
                A trojan virus is a harmful program designed to infiltrate devices, disrupt normal operations, steal sensitive data, and spread to other systems.  Once it infects a device, it can cause serious
                damage—slowing performance, triggering constant pop-ups, or even corrupting files. However, viruses aren’t just frustrating; they pose significant risks to your privacy and Windows security.
                They can steal personal information, such as banking details, private messages, or passwords, and share it with malicious third parties.
              </p>
              <p className='pt-5'>
                That’s why remove virus and Microsoft Defender is so important. That is not only to restore the speed and functionality of your device but to safeguard your valuable data and privacy by spyware
                applications. Effective remove virus isn’t just a one-time fix; it’s a crucial step toward ensuring long-term device protection from <a href="https://geekify.com.au/contact-us" className='text-primaryColor underline'>computer virus and data security</a>. Taking action against viruses
                helps keep your digital life safe. That prevents future attacks and gives you peace of mind.
              </p>
            </div>


            <div className='py-8 md:py-14 lg:py-20 xl:py-28'>
              <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4'>How to Remove <span className='text-primaryColor'>Virus from iPhone</span></h3>
              <p className='pb-6'>Even though iPhones are known for their security, threats can still find their way in. If you suspect your iPhone might be infected, follow these steps to clean it up and
                restore safety:</p>
              <Image src={'/spyware-removal-1.png'} alt='how to remove virus from iphone' width={1200} height={900} className='w-full h-auto' />
              <div className='pt-8'>
                <p className='pb-3'>
                  <span className='font-bold'>1. Update iOS Software:</span> Apple consistently updates iOS to fix vulnerabilities and enhance security. Go to Settings > General > Software Update to check if
                  you’re on the latest version. Keeping iOS updated helps close any security gaps.
                </p>
                <p className='pb-3'>
                  <span className='font-bold'>2. Clear Browser Cache and History:</span> Sometimes, ads or pop-ups can mac viruses activity. Go to *Settings > Safari > Clear History and Website Data to delete
                  cached files. That might be causing suspicious behavior.
                </p>
                <p className='pb-3'>
                  <span className='font-bold'>3. Delete Suspicious Apps:</span> Look through your apps and delete any you didn’t install from the App Store or that seem unfamiliar. Some
                  security software apps downloaded outside Apple’s trusted platform may carry malware infection.
                </p>
                <p className='pb-3'>
                  <span className='font-bold'>4. Restart Your iPhone:</span> Restarting your device can resolve minor glitches that might resemble virus infection symptoms. Turn it off for a few minutes and
                  restart to see if the problem clears up.
                </p>
                <p className='pb-3'>
                  <span className='font-bold'>5. Disable Pop-up Ads in Safari:</span> Go to Settings > Safari and turn on “Block Pop-ups.” This can prevent unwanted ads that sometimes act as carriers for malicious
                  app links or scare tactics.
                </p>
                <p className='pb-3'>
                  <span className='font-bold'>6. Reset All Settings:</span> If issues persist, consider resetting your settings without affecting your data. iPhone virus removal can clear any unwanted 
                  configurations. Go to Settings > General > Reset > Reset All Settings.
                </p>
                <p className='pb-3'>
                  <span className='font-bold'>7. Install a Trusted Security App:</span> Although iPhones are secure, some virus scan security apps can monitor unusual behavior. Look for reputable apps from the App
                  Store to add an extra layer of protection if needed.
                </p>
                <p className='text-xl lg:text-2xl font-bold italic pt-5 text-gray-500'>
                  These steps can help keep your iPhone secure and free from malicious threats. Regular checks and updates ensure optimal protection and virus definitions.
                </p>
              </div>
            </div>


            <div>
              <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>How to remove <span className='text-primaryColor'>virus from a laptop</span></h3>
              <p className='text-center'>Whether you’re using Windows or macOS, here’s how to deal with viruses on your laptop or desktop computer.</p>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 pt-8'>
                <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                  <Image src='/spyware-removal-icon-1.png' width={200} height={200} alt='' className='w-auto h-auto' />
                  <h6 className='text-lg font-bold pt-4'>1. Run a Full Scan with Antivirus Software:</h6>
                  <p>
                    Most malware removal programs can scan your computer. Ensure the antivirus is updated, then run a full scan. If you don’t have antivirus software, consider downloading reputable ones like
                    Norton, McAfee, or Bitdefender.
                  </p>
                </div>
                <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                  <Image src='/spyware-removal-icon-2.png' width={200} height={200} alt='' className='w-auto h-auto' />
                  <h6 className='text-lg font-bold pt-4'>2. Use Built-In Security Tools:</h6>
                  <p>
                    Windows Defender (on Windows 10 and 11) or XProtect (on macOS) offer built-in virus protection. These tools help detect, windows update, and quarantine threats.
                  </p>
                </div>
                <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                  <Image src='/spyware-removal-icon-3.png' width={200} height={200} alt='' className='w-auto h-auto' />
                  <h6 className='text-lg font-bold pt-4'>3. Delete Suspicious Programs:</h6>
                  <p>
                    Go to Control Panel > Programs and Features (on Windows) or Applications (on macOS) and remove any unfamiliar software.
                  </p>
                </div>
                <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                  <Image src='/spyware-removal-icon-4.png' width={200} height={200} alt='' className='w-auto h-auto' />
                  <h6 className='text-lg font-bold pt-4'>4. Check for Spyware and Spy Apps:</h6>
                  <p>
                    Spyware is a type of malware designed to spy on you. To detect it, scan your computer with specialized software like Malwarebytes, which is highly effective for spyware removal.
                  </p>
                </div>
                <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                  <Image src='/spyware-removal-icon-5.png' width={200} height={200} alt='' className='w-auto h-auto' />
                  <h6 className='text-lg font-bold pt-5'>5. Update Your System and Applications:</h6>
                  <p>
                    Security patches are regularly released to address vulnerabilities. Go to Settings > Update & Security (Windows) or System Preferences > Software Update (macOS) and install the latest updates.
                  </p>
                </div>
                <div className='shadow-hoverBoxShadow rounded-xl p-6'>
                  <Image src='/spyware-removal-icon-6.png' width={200} height={200} alt='' className='w-auto h-auto' />
                  <h6 className='text-lg font-bold pt-5'>6. Clear Your Browser Cache and History:</h6>
                  <p>
                    Malware can sometimes hide in your browser’s cache. Clearing it can improve performance and security.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <QuickContact title='Contact Us Today for Anti Virus Installation Services' />

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <div className="">
          <div className=''>
            <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 text-center'>How to Remove <span className='text-primaryColor'>Virus from Android Phone</span></h3>
            <p className='text-center pb-8'>
              If you suspect that your Android device is infected with a virus, there are effective steps you can take to remove it:
            </p>
          </div>

          <div className='space-y-8'>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/spyware-removal-2.png"
                alt="A Hand holding phone with an alert to uninstall suspicious apps"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-lg font-bold italic">1. Uninstall Suspicious Apps:</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Begin by reviewing the apps on your device. Navigate to Settings > Apps to look for any unfamiliar or uninstalled apps. If you see anything you don’t recognize, remove it immediately, as it
                    may be a source of malware.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/spyware-removal-3.png"
                alt="Phone running antivirus to remove viruses"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-lg font-bold italic">2. Run a Virus Scan:</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Download a reputable antivirus app from the Google Play Store, such as Avast, Kaspersky, or AVG. These apps can perform a comprehensive scan of your device, identifying and eliminating any
                    malicious software that could be lurking.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/spyware-removal-4.png"
                alt="A person checking phone settings for admin access"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-lg font-bold italic">3. Check Device Administrators:</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Malicious apps may acquire admin privileges. That makes them difficult to uninstall. Go to Settings > Security > Device Administrators to see which apps have these rights. Remove access to
                    any suspicious apps and uninstall them.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/spyware-removal-5.png"
                alt="Clearing cache on the phone to remove viruses"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-lg font-bold italic">4. Clear Cache and Data:</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Clearing your cache can help remove unwanted files that may slow down your device. Access Settings > Storage > Cached Data to clear the cache for all apps. That improves performance and removes
                    potential threats.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/spyware-removal-6.png"
                alt="Phone showing Safe Mode option to remove viruses"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className='flex '>
                    <h3 className="text-lg font-bold italic">5. Restart in Safe Mode:</h3>
                    <div className='w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3'></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Booting your device in Safe Mode can help remove stubborn apps without interference. Press the power button, hold “Power Off,” and select “Reboot in Safe Mode.” This will disable third-party
                    apps, allowing you to safely uninstall any malicious applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>By taking these steps, you can effectively remove virus from your Android phone and keep your device secure. Regular maintenance
            will help protect against future infections.</p>
        </div>
      </div>

      <div className='container mx-auto'>
        <div>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7'>How Can We Remove <span className='text-primaryColor'>Virus from a Computer?</span></h3>
          <p className=''>
            How do you <a href="https://support.microsoft.com/en-us/topic/how-to-prevent-and-remove-viruses-and-other-malware-53dc9904-0baf-5150-6e9a-e6a8d6fa0cb5" className='text-primaryColor underline'>remove a virus from a computer</a>, following these essential steps will help secure your system:
          </p>

          <div className='pt-8 space-y-6'>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <h6 className='text-xl italic font-bold pb-1'>1. Run a Full System Scan with Antivirus Software:</h6>
              <p>
                Start by running a comprehensive virus scan using trusted antivirus software. Programs like Norton, McAfee, or Windows Defender can detect and remove malicious files effectively.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <h6 className='text-xl italic font-bold pb-1'>2. Delete or Quarantine Infected Files:</h6>
              <p>
                If your Bitdefender antivirus detects computer viruses, follow the instructions to delete or quarantine the infected files. Quarantining isolates the files. That prevents the Windows PC virus from
                spreading while allowing you to review the file’s impact.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <h6 className='text-xl italic font-bold pb-1'>3. Update Software and Operating System:</h6>
              <p>
                Outdated software can have vulnerabilities that viruses exploit. Regularly updating your OS and applications patch these gaps, making it harder for viruses to infect your computer and your
                internet security.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <h6 className='text-xl italic font-bold pb-1'>4. Use Safe Mode for Stubborn Infections:</h6>
              <p>
                Restarting your computer in Safe Mode (accessible via the startup menu) prevents non-essential applications from running. That may make it easier to remove virus particularly.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <h6 className='text-xl italic font-bold pb-1'>5. Consider a System Restore or Reset:</h6>
              <p>
                If the virus persists, consider using a system restore point to revert your computer to a previous, virus-free state. In severe cases, a complete system reset may be necessary, though it
                should be a last resort.
              </p>
            </div>
          </div>
          <p className='text-xl lg:text-2xl font-bold italic text-gray-500 pt-5'>
            Following these steps can effectively remove virus and help maintain your infected computer's health. Regular maintenance and proactive protection are key to preventing future infections.
          </p>
        </div>
      </div>

      <div className='container mx-auto py-8 mg:py-14 lg:py-20 xl:py-28'>
        <div>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>How to Get Rid of <span className='text-primaryColor'>Computer Virus</span></h3>
          <p className='text-center'>
            Eliminating a computer virus quickly is essential to protect your data and ensure smooth performance. Here are some key steps to help you get rid of a virus effectively:
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 pt-8'>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <Image src='/spyware-removal-icon-7.png' width={100} height={100} alt='' className='w-[70px] h-[60px]' />
              <h6 className='text-xl italic font-bold pt-4'>1. Run a Full System Scan:</h6>
              <p>
                Start by running a full antivirus scan system with reputable antivirus software. Programs like Norton, AVG, or Windows Defender can detect and help remove various types of malware lurking on your
                pc security.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <Image src='/spyware-removal-icon-8.png' width={100} height={100} alt='' className='w-[70px] h-[60px]' />
              <h6 className='text-xl italic font-bold pt-4'>2. Disconnect from the Internet:</h6>
              <p>
                If you suspect a virus, disconnecting from the Internet immediately can prevent it from spreading or communicating with remote attackers. This Internet Explorer step can reduce further damage until
                the remove virus.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <Image src='/spyware-removal-icon-9.png' width={100} height={100} alt='' className='w-[70px] h-[60px]' />
              <h6 className='text-xl italic font-bold pt-4'>3. Delete or Quarantine Infected File:</h6>
              <p>
                Once the scan identifies the suspicious file, follow the prompts to delete temporary files or quarantine them. Quarantine isolates the virus and malicious file. That prevents it from causing more
                harm while allowing you to review Windows computer impact.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <Image src='/spyware-removal-icon-10.png' width={100} height={100} alt='' className='w-[70px] h-[60px]' />
              <h6 className='text-xl italic font-bold pt-4'>4. Clear Temporary Files and Cache:</h6>
              <p>
                Viruses sometimes hide in temporary files or caches. Use disk cleanup tools and suspicious apps or navigate to Settings > Storage to delete these files. That reduces the harmful file risk of
                reinfection and malicious code.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <Image src='/spyware-removal-icon-11.png' width={100} height={100} alt='' className='w-[70px] h-[60px]' />
              <h6 className='text-xl italic font-bold pt-4'>5. Update Software and OS:</h6>
              <p>
                After remove virus, update your operating system and applications to patch any security vulnerabilities. Keeping your software current prevents many viruses from finding a way back into your
                system. Installation of antivirus program and malicious program must be needed for this purpose.
              </p>
            </div>
          </div>
          <p className='text-xl lg:text-2xl font-bold italic text-gray-500 text-center pt-5'>
            Following these steps can effectively eliminate most viruses and enhance your computer’s security against future cyber threats. Regular scans and updates are essential to staying virus-free and
            trojan horse.
          </p>
        </div>
      </div>


      <QuickContact title='Contact Us Today for Anti Virus Installation Services' />

      <div className='container mx-auto py-8 md:py-14 lg:py-20 xl:py-28'>
        <h3 className='text-2xl lg:text-4xl font-bold text-center pb-8'>Frequently Asked <span className='text-primaryColor'>Questions</span></h3>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">1. Can I remove a virus myself?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>Yes, you can try using antivirus software and deleting suspicious apps, but some viruses may require professional help for complete removal.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">2. How do I know if my device has a virus?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>Signs include slow performance, pop-ups, battery drain, and unknown apps. If you notice these, scan your device for malware.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">3. Are iPhones safe from viruses?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>Generally, yes, but iPhones can still be affected if apps are downloaded from untrusted sources.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">4. What’s the difference between viruses, malware, and spyware?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>A virus is a type of malware that damages devices, while spyware specifically collects personal information.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">5. How can I avoid future infections?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>
                Keep software updated, download only from trusted sources, and use reputable antivirus software.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-[#FFF6F2] text-primaryColor shadow-boxShadow mb-5">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">6. Can viruses slow down my internet?</div>
            <div className="collapse-content">
              <p className='text-[#3d3d3d]'>Yes, viruses can impact internet speed by using device resources. Removing the virus should restore speed.</p>
            </div>
          </div>
        </div>
      </div>


      <div className='container mx-auto'>
        <h3 className='text-2xl lg:text-4xl font-bold mb-5'>Contact Us</h3>
        <p className='mb-4'>
          Need help with remove virus or have questions about <a href="https://geekify.com.au/services" className='text-primaryColor underline'>our services</a>? Our expert team at Geeks CRS is here to assist you. Whether it’s an iPhone, Android, laptop, or desktop, we have the tools
          and expertise to get your device back to peak performance.
        </p>
        <p>We look forward to helping you keep your devices secure and virus-free. Reach out to us today for reliable and fast virus removal services!</p>
      </div>

      <div className='container mx-auto py-8 mg:py-14 lg:py-20 xl:py-28'>
        <div>
          <h3 className='text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center'>Why Choose Geeks CRS for <span className='text-primaryColor'>Virus Removal Services?</span></h3>
          <p className='text-center'>
            Remove virus can be complex, especially when dealing with stubborn infections. At Geeks CRS, we deliver top-notch virus removal services that prioritize your device's safety and performance.
            Here’s how we make virus removal easy and effective:
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 pt-8'>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <Image src='/spyware-removal-icon-12.png' width={100} height={100} alt='' className='w-[70px] h-[60px]' />
              <h6 className='text-xl italic font-bold pt-4'>1. Comprehensive Virus Removal:</h6>
              <p>
                Our experts perform in-depth scans to identify and eliminate all types of malware, including viruses, spyware, and adware. We thoroughly clean your device to restore its functionality and
                protect your data.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <Image src='/spyware-removal-icon-13.png' width={100} height={100} alt='' className='w-[70px] h-[60px]' />
              <h6 className='text-xl italic font-bold pt-4'>2. Security Updates and Optimization:</h6>
              <p>
                Beyond removing viruses, we update your device’s security settings and software. This optimizes performance and reinforces your defenses, helping prevent future infections.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <Image src='/spyware-removal-icon-14.png' width={100} height={100} alt='' className='w-[70px] h-[60px]' />
              <h6 className='text-xl italic font-bold pt-4'>3. Personalized Protection Advice:</h6>
              <p>
                We don’t just fix your device; we help you keep it secure. Our professionals provide tips on safe browsing, trusted downloads, and security habits that reduce the risk of reinfection.
              </p>
            </div>
            <div className='shadow-hoverBoxShadow rounded-xl p-6'>
              <Image src='/spyware-removal-icon-15.png' width={100} height={100} alt='' className='w-[70px] h-[60px]' />
              <h6 className='text-xl italic font-bold pt-4'>4. Expert Support You Can Trust:</h6>
              <p>
                With years of experience in virus removal, our friendly technicians are here to support you. We simplify the process, answering your questions and ensuring you’re confident about your
                device’s security.
              </p>
            </div>
          </div>
          <p className='text-xl lg:text-2xl font-bold italic text-gray-500 text-center pt-9'>
            Don’t let a virus slow you down—contact Geeks CRS today to get rid of unwanted threats and restore your device’s performance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default VirusSpywareRemoval