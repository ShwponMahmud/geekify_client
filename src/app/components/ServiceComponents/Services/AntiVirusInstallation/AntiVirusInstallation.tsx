import Accordion from '@/app/components/sharedComponents/Accordion/Accordion'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import React from 'react'

function AntiVirusInstallation({ service }: ServiceDetailsProps) {
  const faqItems = [
    {
      question: "What is the best antivirus software in Australia?",
      answer:
        "The best antivirus software for you depends on your device type and specific needs. Avast, Bitdefender, and Kaspersky are all popular options for reliable protection.",
    },
    {
      question: "Do I need an antivirus for my Mac?",
      answer:
        "Yes, while Macs have built-in security, additional antivirus protection provides better security against new and evolving threats.",
    },
    {
      question: "Can antivirus software protect my Android device?",
      answer:
        "Absolutely. Antivirus solutions like Avast Mobile Security offer great protection for Android devices against malware and phishing attacks.",
    },
    {
      question: "How often should I update my antivirus software?",
      answer:
        "It's recommended to update your antivirus software as often as possible to protect against the latest security threats.",
    },
    {
      question: "Is free antivirus software enough for virus protection?",
      answer:
        "Free antivirus can provide basic protection, but paid versions offer more comprehensive security features, especially for online shopping, banking, and privacy protection.",
    },
    {
      question: "How do I know if my device is protected?",
      answer:
        "You’ll typically receive notifications if your antivirus software detects any threats. You can also perform regular scans to check for viruses.",
    },
    {
      question: "Is Avast antivirus safe?",
      answer:
        "Yes, Avast antivirus is considered safe. It provides robust protection against malware, viruses, and online threats, and is trusted by millions of users worldwide.",
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
      <div className="container mx-auto">
        <div>
          <div className="hidden lg:grid grid-cols-3 gap-8 mt-[-100px]">
            <div className="bg-white py-14 px-7 text-center shadow-lg">
              <div className="flex justify-center items-center">
                <Image
                  src={"/banner-card-icon-1.png"}
                  width={150}
                  height={150}
                  alt=""
                  className="w-[100px] h-[100px]"
                />
              </div>
              <h6 className="text-xl font-bold pt-5 pb-1">
                Select the <span className="text-primaryColor">Service</span>
              </h6>
              <p>
                Pick the services you are looking for- from the website or app.
              </p>
            </div>
            <div className="bg-white py-10 px-7 text-center shadow-lg">
              <div className="flex justify-center items-center">
                <Image
                  src={"/banner-card-icon-2.png"}
                  width={150}
                  height={150}
                  alt=""
                  className="w-[100px] h-[100px]"
                />
              </div>
              <h6 className="text-xl font-bold pt-5 pb-1">
                Pick Up Your <span className="text-primaryColor">Schedule</span>
              </h6>
              <p>Pick your convenient date and time to avail the service.</p>
            </div>
            <div className="bg-white py-10 px-7 text-center shadow-lg">
              <div className="flex justify-center items-center">
                <Image
                  src={"/banner-card-icon-3.png"}
                  width={150}
                  height={150}
                  alt=""
                  className="w-[100px] h-[100px]"
                />
              </div>
              <h6 className="text-xl font-bold pt-5 pb-1">
                <span className="text-primaryColor">Book</span> Appointment
              </h6>
              <p>
                Review and book your appointment. We’ll assign the expert
                technicians schedule for you.
              </p>
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
                __html: service?.description ?? "",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <div>
          <div>
            <p className="text-center">
              In today’s fast-paced digital world, internet security is crucial
              for everyone. From working remotely to shopping online and
              browsing social media, protecting yourself from viruses, malware,
              and cyber threats is more important than ever. At{" "}
              <a
                href="https://geekify.com.au/"
                className="text-primaryColor underline"
              >
                Geekify®
              </a>
              , we’re dedicated to helping you find the best internet security
              Australia. We guide you to reliable, top-rated protection options
              that shield your devices and safeguard your personal information.
              With our expert recommendations, you can confidently navigate the
              digital world, knowing your data and devices are secure.
            </p>
          </div>

          <div className="pt-8 md:pt-14 lg:pt-20 xl:pt-28">
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
              Geekify® for Cloud-Based{" "}
              <span className="text-primaryColor">Antivirus Protection</span>
            </h3>
            <div className="text-center">
              <p>
                Choosing Geekify® means benefiting from a{" "}
                <a
                  href="https://geekify.com.au/contact-us"
                  className="text-primaryColor underline"
                >
                  cloud-based antivirus solution
                </a>
                , which offers unique advantages for internet security. Unlike
                traditional antivirus software, cloud-based antivirus operates
                from a remote server. That minimizes the impact on your device’s
                performance. Since most of the scanning and threat detection
                happens in the cloud, your device remains fast and efficient,
                with no heavy software slowing it down.
              </p>
              <p className="py-5">
                A cloud-based antivirus is the best internet security Australia.
                It is constantly updated. That means Geekify® clients receive
                the latest protection against new threats in real time. This
                proactive approach ensures that your device is shielded from
                emerging risks without requiring manual updates. Additionally,
                cloud-based antivirus solutions are versatile and can protect
                multiple devices simultaneously. That makes them ideal for both
                personal and business use.
              </p>
              <p className="text-center">
                At{" "}
                <a
                  href="https://geekify.com.au/"
                  className="text-primaryColor underline"
                >
                  Geekify®
                </a>
                , we leverage these benefits to offer you effective, seamless
                protection. Our team helps you find, install, and manage
                cloud-based antivirus. So you can enjoy robust security without
                any hassle.
              </p>
            </div>

            <div className="py-8 md:py-14 lg:py-20 xl:py-28">
              <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7">
                Why Geekify® for Your{" "}
                <span className="text-primaryColor">
                  Internet Security in Australia?
                </span>
              </h3>
              <p>
                At Geekify®, we recognize the distinct best internet security
                Australia needs and strive to provide tailored solutions. Here’s
                why you should choose us for your internet security needs:
              </p>
              <ul className="list-disc ml-7 pt-5 space-y-3">
                <li>
                  <span className="font-bold">Trusted Experts:</span> Our team
                  consists of knowledgeable professionals who stay current with
                  the latest developments in the best internet security
                  Australia. We are committed to understanding emerging threats
                  and effective protection strategies.
                </li>
                <li>
                  <span className="font-bold">Customer-Centric Support:</span>{" "}
                  We prioritize your needs by assisting you in selecting the
                  right antivirus and security software. Our support extends to
                  installation and usage guidance. That ensures you feel
                  confident in managing your security solutions.
                </li>
                <li>
                  <span className="font-bold">Reliable Recommendations:</span>{" "}
                  At Geekify®, we only recommend top-rated and well-reviewed
                  antivirus software. Our goal is to ensure your devices are
                  protected by trusted solutions that have proven effectiveness
                  in safeguarding against various online threats.
                </li>
              </ul>
              <p className="text-xl lg:text-2xl font-bold italic text-gray-500 pt-5">
                With our expertise and commitment to customer service, you can
                trust GeeksCRS to enhance your online security.
              </p>
            </div>

            <div className="pb-8 md:pb-14 lg:pb-20 xl:pb-28">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7">
                    Best Internet Security in Australia:{" "}
                    <span className="text-primaryColor">Why It Matters</span>
                  </h3>
                  <p>
                    Internet security is all about safeguarding your personal
                    information, financial details, and devices from online
                    threats, such as hackers and malicious software. It involves
                    using avg antivirus free protective tools like virus
                    scanners and antivirus software to block viruses, malware,
                    phishing attacks, and other digital dangers that could
                    compromise your data. In Australia, the rise of online
                    threats makes having strong average internet security more
                    crucial than ever.
                  </p>
                  <p className="pt-5">
                    Effective best internet security Australia acts as a shield
                    for your digital world. That blocks unwanted access and
                    ensures your sensitive data stays safe. With the right anti
                    virus software, you can protect yourself from risks like
                    data theft, identity theft, and device damage. By
                    implementing reliable virus protection, you can browse,
                    shop, and work online with confidence. That knowing your
                    devices and information are secure.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <Image
                    src={"/anti-virus-1.png"}
                    width={500}
                    height={700}
                    alt="Woman using a laptop with internet security software in Australia"
                    className="w-[400px] h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
                Choosing the Best{" "}
                <span className="text-primaryColor">
                  Internet Security for Your Needs
                </span>
              </h3>
              <p className="text-center">
                Finding the best internet security in Australia involves
                assessing a few key factors to ensure it meets your needs:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 pt-8">
                <div className="shadow-hoverBoxShadow rounded-xl p-6">
                  <Image
                    src="/anti-virus-icon-1.png"
                    width={200}
                    height={200}
                    alt=""
                    className="w-[100px] h-[80px]"
                  />
                  <h6 className="text-lg font-bold pt-4">
                    1. Comprehensive Virus Protection:
                  </h6>
                  <p>
                    Look for software that offers strong virus detection
                    capabilities. A reliable virus scanner is crucial for
                    identifying and blocking harmful programs that can
                    compromise your device’s safety.
                  </p>
                </div>
                <div className="shadow-hoverBoxShadow rounded-xl p-6">
                  <Image
                    src="/anti-virus-icon-2.png"
                    width={200}
                    height={200}
                    alt=""
                    className="w-[100px] h-[80px]"
                  />
                  <h6 className="text-lg font-bold pt-4">
                    2. Device Compatibility:
                  </h6>
                  <p>
                    Ensure the software is compatible with your device type,
                    whether it’s a PC, Mac, or Android. Different devices may
                    require specific antivirus pro protection, so choose one
                    that aligns well with your system.
                  </p>
                </div>
                <div className="shadow-hoverBoxShadow rounded-xl p-6">
                  <Image
                    src="/anti-virus-icon-3.png"
                    width={200}
                    height={200}
                    alt=""
                    className="w-[100px] h-[80px]"
                  />
                  <h6 className="text-lg font-bold pt-4">3. Ease of Use:</h6>
                  <p>
                    A good Bitdefender antivirus solution should be simple to
                    install and manage. Look for software with a user-friendly
                    interface that doesn’t require technical expertise to
                    operate or update.
                  </p>
                </div>
                <div className="shadow-hoverBoxShadow rounded-xl p-6">
                  <Image
                    src="/anti-virus-icon-4.png"
                    width={200}
                    height={200}
                    alt=""
                    className="w-[100px] h-[80px]"
                  />
                  <h6 className="text-lg font-bold pt-4">
                    4. Reputation and Reviews:
                  </h6>
                  <p>
                    Check for top-rated cyber security solutions trusted by
                    users and experts. Well-reviewed software often provides
                    reliable and tested mcafee total protection features.
                  </p>
                </div>
                <div className="shadow-hoverBoxShadow rounded-xl p-6">
                  <Image
                    src="/anti-virus-icon-5.png"
                    width={200}
                    height={200}
                    alt=""
                    className="w-[100px] h-[80px]"
                  />
                  <h6 className="text-lg font-bold pt-5">
                    5. Additional Features:
                  </h6>
                  <p>
                    Top rated internet security Australia software offers extra
                    features like a secure VPN, firewall, or parental controls.
                    Consider these options if you want more comprehensive
                    security coverage for your online activities.
                  </p>
                </div>
              </div>
              <p className="text-xl lg:text-2xl font-bold italic text-gray-500 text-center pt-5">
                Selecting software aligning with these points can help ensure
                your data and devices are protected from cyber threats.
              </p>
            </div>
          </div>
        </div>
      </div>

      <QuickContact title="Contact Us Today for Anti Virus Installation Services" />

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4">
          Top-Rated Internet{" "}
          <span className="text-primaryColor">
            Security Solutions in Australia
          </span>
        </h3>
        <p className="pb-6">
          Australia has many trusted antivirus options, but here’s a list of
          some of the best antivirus software you might want to consider:
        </p>
        <Image
          src={"/anti-virus-2.png"}
          alt="Top-Rated Internet Security Solutions in Australia"
          width={1200}
          height={900}
          className="w-full h-auto"
        />
        <div className="py-8">
          <h5 className="text-2xl font-bold pb-2">
            1. Best Antivirus Protection For Avast
          </h5>
          <p>
            Why is Avast a good antivirus? Avast is a renowned name in internet
            security, trusted globally for its comprehensive protection across
            multiple platforms. Known for its powerful Mac antivirus Avast
            engine and advanced security features. Avast offers a reliable
            solution for Australian users looking to safeguard their devices
            against online threats.
          </p>
          <ul className="list-disc ml-7 pt-5 space-y-3">
            <li>
              <span className="font-bold">Real-time Virus Scanner:</span>{" "}
              <a
                href="https://www.avast.com/index#pc"
                className="text-primaryColor underline"
              >
                cloud-based antivirus solution
              </a>{" "}
              Avast antivirus review technology continuously monitors your
              device. That is detecting and blocking malware, spyware, and
              viruses before they can cause harm. This feature is essential for
              preventing attacks and ensuring data security.
            </li>
            <li>
              <span className="font-bold">Anti-Phishing Protection:</span>{" "}
              Avast’s anti-phishing feature actively detects and blocks phishing
              websites and suspicious links. That keeps your sensitive
              information safe from hackers and online scams.
            </li>
            <li>
              <span className="font-bold">Mobile Security for Android:</span>{" "}
              Avast antivirus mobile security provides Android users with
              powerful protection against malware and malicious apps. The app
              includes anti-theft features and can lock, locate, or wipe your
              device remotely if it’s lost or stolen.
            </li>
            <li>
              <span className="font-bold">Secure VPN:</span> Avast’s VPN service
              encrypts your internet connection, safeguarding your privacy by
              hiding your location and online activity. This feature is
              particularly valuable for secure browsing on public Wi-Fi
              networks.
            </li>
            <li>
              <span className="font-bold">Mac Compatibility:</span> For Mac
              users, Mac antivirus Avast software provides a solid defense
              against malware, adware, and spyware. That makes it a trusted
              choice for Mac antivirus protection.
            </li>
          </ul>
          <p className="text-xl lg:text-2xl font-bold italic pt-5 text-gray-500">
            With these features, Avast is a strong contender among internet
            security solutions in Australia. That offers reliable,
            round-the-clock protection and peace of mind for users across all
            major devices.
          </p>
        </div>
        <div className="pb-8">
          <h5 className="text-2xl font-bold pb-2">
            2. Best Antivirus Protection for Mac Users
          </h5>
          <p>
            Mac users need antivirus protection to defend against growing
            security threats specific to macOS. Here are some top choices for
            antivirus software on Mac:
          </p>
          <ul className="list-disc ml-7 pt-5 space-y-3">
            <li>
              <span className="font-bold">
                Virus Protection Software for Mac:
              </span>{" "}
              While Macs have built-in security features, dedicated antivirus
              software provides an extra layer to detect and remove malware,
              spyware, and other threats.
            </li>
            <li>
              <span className="font-bold">Avast for Mac:</span> Avast is highly
              regarded for comprehensive virus protection on Mac. That offers
              real-time scanning, anti-phishing, antivirus Australia, and a
              reliable firewall to keep your device safe from threats.
            </li>
            <li>
              <span className="font-bold">Kaspersky:</span> Kaspersky Internet
              security is Known for its effective malware protection. Kaspersky
              combines strong security with a user-friendly interface. That
              makes it easy to manage and ideal for Mac users who value
              simplicity.
            </li>
            <li>
              <span className="font-bold">Bitdefender:</span> This lightweight
              Bitdefender antivirus plus solution is efficient without
              compromising speed or performance. Bitdefender VPN delivers
              excellent virus protection, with advanced features to protect
              against online threats. Bitdefender total security system is a
              very useful tool.
            </li>
          </ul>
          <p className="text-xl lg:text-2xl font-bold italic pt-5 text-gray-500">
            Each of these options helps Mac users stay secure while maintaining
            device performance. That provides peace of mind in an evolving
            online landscape.
          </p>
        </div>
        <div>
          <h5 className="text-2xl font-bold pb-2">
            3. Best Antivirus Protection for Android
          </h5>
          <p>
            With so much personal data on your Android device, it’s essential to
            have antivirus protection and a Microsoft Defender solution. Here
            are the top Avast antivirus apps for Android:
          </p>
          <ul className="list-disc ml-7 pt-5 space-y-3">
            <li>
              <span className="font-bold">Avast Mobile Security:</span> Avast is
              a trusted name in comprehensive protection. Its mobile security
              app offers real time protection, anti-phishing tools, and web
              protection to keep sensitive data safe and avast premium security.
              It also has an identity theft protection system.
            </li>
            <li>
              <span className="font-bold">Avast Mobile Security:</span> Avast
              provides a comprehensive suite of features, including anti-theft
              functionality and Comodo internet security. That allows users to
              locate, lock, or wipe their device remotely if it’s lost or
              stolen. It also offers data backup, ensuring important files are
              safe and giving ransomware protection.
            </li>
            <li>
              <span className="font-bold">
                McAfee antivirus Mobile Security:
              </span>{" "}
              Known for its powerful anti-spyware and malware defenses, McAfee
              protects against malicious apps and web threats. It also includes
              performance-enhancing features to help improve device speed.
            </li>
          </ul>
          <p className="text-xl lg:text-2xl font-bold italic pt-5 text-gray-500">
            Each of these reve antivirus options offers effective solutions to
            safeguard Android devices against evolving threats. That ensures
            personal data remains private and secure.
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        <div>
          <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
            Virus Protection for{" "}
            <span className="text-primaryColor">All Your Devices</span>
          </h3>
          <p className="text-center">
            Selecting the best internet security Australia and Avast free
            antivirus protection software depends on the devices you’re using.
            Each device type—whether Mac, Windows, or Android—faces unique
            security threats. So finding antivirus software tailored to your
            system can make a big difference. Here’s a guide to choosing the
            right protection for your devices:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 pt-8">
            <div className="shadow-hoverBoxShadow rounded-xl p-6">
              <Image
                src="/anti-virus-icon-6.png"
                width={100}
                height={100}
                alt=""
                className="w-[70px] h-[60px]"
              />
              <h6 className="text-xl italic font-bold pt-4">1. Mac Users:</h6>
              <p>
                While Macs have built-in security, they’re not immune to viruses
                or malware. Choosing antivirus software designed for macOS, like
                Avast or Bitdefender, provides an added layer of protection.
                Both options are well-regarded in Australia for their ability to
                detect and block threats specific to Mac. That includes spyware
                and ransomware, without compromising system performance.
              </p>
            </div>
            <div className="shadow-hoverBoxShadow rounded-xl p-6">
              <Image
                src="/anti-virus-icon-7.png"
                width={100}
                height={100}
                alt=""
                className="w-[70px] h-[60px]"
              />
              <h6 className="text-xl italic font-bold pt-4">
                2. Windows Users:
              </h6>
              <p>
                systems are often targeted by malware. So a robust antivirus
                solution is essential. Avast, Kaspersky, and McAfee are all
                excellent choices. That offers real-time scanning, firewall
                protection, and anti-phishing features. These options provide
                comprehensive security and are updated frequently to counter new
                and evolving threats.
              </p>
            </div>
            <div className="shadow-hoverBoxShadow rounded-xl p-6">
              <Image
                src="/anti-virus-icon-8.png"
                width={100}
                height={100}
                alt=""
                className="w-[70px] h-[60px]"
              />
              <h6 className="text-xl italic font-bold pt-4">
                3. Android Users:
              </h6>
              <p>
                With so much personal data stored on mobile devices, Android
                security is crucial. Avast Mobile Security is a top-rated
                antivirus solution for Android. That’s the best internet
                security Australia provides real-time scanning, web protection,
                and anti-theft tools. These apps help protect against malicious
                apps and phishing attempts, ensuring safe browsing and data
                protection.
              </p>
            </div>
          </div>
          <p className="text-xl lg:text-2xl font-bold italic text-gray-500 text-center pt-5">
            By selecting antivirus software tailored to each device, you can
            maximize protection and keep all your digital activities safe across
            platforms.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="">
          <div className="">
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 text-center">
              How to Keep Your{" "}
              <span className="text-primaryColor">Devices Safe Online</span>
            </h3>
            <p className="text-center pb-8">
              To ensure your devices remain safe online, it’s essential to
              complement your internet security software with proactive habits.
              Here are some simple yet effective tips for the best internet
              security Australia. That enhances your online safety:
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/anti-virus-3.png"
                alt="The laptop screen displays a software update reminder for internet security in Australia."
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className="flex ">
                    <h3 className="text-lg font-bold italic">
                      1. Regularly Update Your Software:
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Keeping your antivirus software and operating system up to
                    date is crucial for protecting against the latest threats.
                    Software developers regularly release updates that fix
                    vulnerabilities and enhance security features. By enabling
                    automatic updates, you ensure that your devices are always
                    protected with the most recent security patches and
                    improvements.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/anti-virus-4.png"
                alt="alerting against clicking suspicious links as part of internet security in Australia."
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className="flex ">
                    <h3 className="text-lg font-bold italic">
                      2. Avoid Clicking on Suspicious Links:
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Cybercriminals often use phishing emails and fake websites
                    to spread malware. Be cautious about clicking on links in
                    emails or messages, especially if they seem unexpected or
                    from unknown sources. Always hover over links to check their
                    destination before clicking and verify the sender's identity
                    if necessary.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/anti-virus-5.png"
                alt="Strong password protection with a lock icon,"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className="flex ">
                    <h3 className="text-lg font-bold italic">
                      3. Use Strong Passwords:
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Protect your accounts by creating unique and complex
                    passwords for each of them. A strong password typically
                    contains a mix of uppercase and lowercase letters, numbers,
                    and special characters. Avoid using easily guessed
                    information, such as birthdays or common words.
                    Additionally, consider using a password manager to securely
                    store and generate strong passwords.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/anti-virus-6.png"
                alt="Verification code input for two-factor authentication, enhancing internet security in Australia."
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className="flex ">
                    <h3 className="text-lg font-bold italic">
                      4. Enable Two-Factor Authentication (2FA):
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Adding an extra layer of security through two-factor
                    authentication makes it significantly harder for
                    unauthorized users to access your accounts. With 2FA, even
                    if someone obtains your password, they will need a second
                    form of verification—such as a text message or
                    authentication app code—to log in.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
              <img
                src="/anti-virus-7.png"
                alt="internet security practices in Australia"
                className="w-[33%] hidden lg:block"
              />
              <div className="p-5 flex justify-center items-center">
                <div>
                  <div className="flex ">
                    <h3 className="text-lg font-bold italic">
                      5. Educate Yourself About Online Threats:
                    </h3>
                    <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                  </div>
                  <p className="text-gray-600 mt-2">
                    Staying informed about the latest cyber threats and scams
                    can help you recognize and avoid potential dangers. Take the
                    time to read articles, watch videos, or participate in
                    workshops about internet safety. Understanding common
                    tactics used by cybercriminals enables you to stay vigilant
                    and make informed decisions while online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickContact title="Contact Us Today for Anti Virus Installation Services" />

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl lg:text-4xl font-bold text-center pb-8">
          Frequently Asked <span className="text-primaryColor">Questions</span>
        </h3>

        <Accordion items={faqItems} />
      </div>

      <div className="container mx-auto">
        <h3 className="text-2xl lg:text-4xl font-bold mb-5">Contact Us</h3>
        <p className="mb-4 pb-4">
          If you have questions or need assistance with internet security, our
          Geekify® team is here for you! We’re dedicated to helping you find the{" "}
          <a
            href="https://geekify.com.au/services/anti-virus-installation"
            className="text-primaryColor underline"
          >
            cloud-based antivirus solution
          </a>{" "}
          best antivirus solution tailored to your needs. Reach out to us, and
          let our experts guide you in enhancing your online safety and
          protection.
        </p>
      </div>

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl lg:text-4xl font-bold pb-8">
          Get Started with the{" "}
          <span className="text-primaryColor">
            Best Internet Security in Australia
          </span>
        </h3>
        <p className="pb-5">
          Ready to protect your devices? Visit Geekify®{" "}
          <a
            href="https://geekify.com.au/"
            className="text-primaryColor underline"
          >
            cloud-based antivirus solution
          </a>{" "}
          and explore the top internet security and antivirus options available.
          Whether you need a virus scanner, antivirus for Mac, or antivirus
          protection for Android, we have you covered.
        </p>
      </div>
    </div>
  );
}

export default AntiVirusInstallation