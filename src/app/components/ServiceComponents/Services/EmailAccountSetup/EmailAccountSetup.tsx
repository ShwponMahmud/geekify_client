import Accordion from '@/app/components/sharedComponents/Accordion/Accordion'
import QuickContact from '@/app/components/sharedComponents/QuickContact/QuickContact'
import Showcase from '@/app/components/Showcase/Showcase'
import ServiceDetailsProps from '@/assets/types/servicetypes'
import Image from 'next/image'
import React from 'react'

function EmailAccountSetup({ service }: ServiceDetailsProps) {
  const faqItems = [
    {
      question:
        "What is the difference between a personal and a business email?",
      answer:
        "A business email is tied to your company's domain name, while a personal email uses a free service like Gmail. Business communication emails look more professional and are better for branding and security.",
    },
    {
      question: "How much does it cost to create a business email?",
      answer:
        "The cost varies depending on the domain name registration and the email hosting service you choose. Typically, it ranges from AU$ 181.9 per user per month.",
    },
    {
      question: "Can I use my business email on multiple devices?",
      answer:
        "Yes! Most email hosting providers allow you to sync your business email across multiple devices. That includes smartphones, tablets, and computers with Google accounts.",
    },
    {
      question: "Is it hard to create an email for a business?",
      answer:
        "No, creating an email for business is quite simple, especially with popular services like Google Workspace and Microsoft 365. These providers offer step-by-step guides and user-friendly interfaces for webmail.",
    },
    {
      question: "Can I transfer my business email to another provider?",
      answer:
        "Yes, most email hosting services offer tools that make it easy to transfer your business email addresses from one provider to another without losing any data.",
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
      <div className="container mx-auto ">
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
              Let’s talk about Create an Email for Business. In today’s world,
              having a professional email address is essential for any business.
              It facilitates communication and builds trust and credibility for
              your brand. A business email tied to your domain (e.g.,
              yourname@yourbusiness.com) enhances your brand’s image. That makes
              it appear more legitimate and professional than using a free email
              service like Gmail or Yahoo. If you're unsure how to get a
              business email or{" "}
              <a
                href="https://geekify.com.au/services/email-account-set-up"
                className="text-primaryColor underline"
              >
                set up a company email
              </a>
              , this guide will help. We'll cover everything from choosing the
              right domain, registering it, and selecting an email hosting
              provider. That sets up a secure and efficient business email.
              Having a professional email is crucial for boosting brand
              visibility. That improves security and maintains organized
              communication with clients and employees.
            </p>
          </div>

          <div className="pt-8 md:pt-14 lg:pt-20 xl:pt-28">
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
              Why Do You Need a
              <span className="text-primaryColor">
                {" "}
                Business Email Address?
              </span>
            </h3>
            <p className="text-center pb-10">
              A business email address helps establish trust with your
              customers. Use a generic email, like a Gmail or Yahoo account.
              That can make your business appear unprofessional or less
              reliable. A business email tied to your domain (e.g.,
              yourname@yourbusiness.com) signals.that you are serious about your
              brand and are here to stay.
            </p>
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-5 text-center">
              Key Benefits of Having a
              <span className="text-primaryColor">
                {" "}
                Free Business Email Address?
              </span>
            </h3>
            <p className="text-center">
              Create an email for business has several key benefits that can
              significantly impact your company’s success.
            </p>

            <div className="py-8 space-y-6">
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/email-account-1.png"
                  alt="Close-up of a professional email setup"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className="flex ">
                      <h3 className="text-lg font-bold italic">
                        1. Builds Trust and Professionalism
                      </h3>
                      <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Customers are more likely to trust emails from a
                      professional domain email account. Such as
                      john@company.com, rather than a free email service like
                      john@gmail.com. A domain email account makes your business
                      look more established, serious, and credible. It shows
                      that you are committed to your brand and are not cutting
                      corners when it comes to professionalism.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/email-account-2.png"
                  alt="symbolizing the amplification of brand presence and visibility through a business email."
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className="flex ">
                      <h3 className="text-lg font-bold italic">
                        2. Boosts Brand Awareness
                      </h3>
                      <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Every time you send a Zoho email from your domain email,
                      you're promoting your business. Create an email for
                      business keeps your brand visible in all communications,
                      whether it’s with clients, vendors, or partners. This
                      constant reinforcement of your business name helps
                      strengthen your brand identity and creates a lasting
                      impression on recipients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/email-account-3.png"
                  alt="Two colleagues collaborating in an office setting"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className="flex ">
                      <h3 className="text-lg font-bold italic">
                        3. Enables Better Management
                      </h3>
                      <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Having a dedicated business email address helps you
                      separate work-related communications from personal ones.
                      Zoho mail allows you to better organize and prioritize
                      tasks. That ensures you respond to small business matters
                      more efficiently. It also helps you create distinct email
                      accounts for different departments or functions within
                      your business, such as support@yourcompany.com or
                      sales@yourcompany.com.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse bg-white shadow-md rounded-2xl overflow-hidden">
                <img
                  src="/email-account-4.png"
                  alt="enhanced security measures for business email protection against cyber threats"
                  className="w-[33%] hidden lg:block"
                />
                <div className="p-5 flex justify-center items-center">
                  <div>
                    <div className="flex ">
                      <h3 className="text-lg font-bold italic">
                        4. Improves Security
                      </h3>
                      <div className="w-[80px] border-b-[1px] border-primaryColor mb-[8px] ml-3"></div>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Professional email providers offer advanced security
                      features such as two-factor authentication, spam filters,
                      and encryption. That helps safeguard your small business
                      from cyber threats. With a secure small business email,
                      you reduce the risk of data breaches, phishing attacks,
                      and other online threats. That ensures your business
                      communications stay protected.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-2xl font-bold text-gray-500 italic text-center">
                In short, a business Gmail or email enhances professionalism,
                boosts brand visibility, improves management, and strengthens
                security.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-5">
          How to Get a{" "}
          <span className="text-primaryColor">Business Email Address?</span>
        </h3>
        <p className="pb-4">
          Setting up a business Gmail account is easier than you think. Follow
          these steps to get started:
        </p>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            1. Choose Your Domain Name
          </h5>
          <p>
            Your domain name is the part of your email marketing that comes
            after the '@' symbol (e.g., @yourbusiness.com). It's important to
            choose a domain that reflects your business name or services. For
            example, if your business is called “Geek Solutions,” your domain
            could be something like{" "}
            <a
              href="https://geekify.com.au/"
              className="text-primaryColor underline"
            >
              Geekify®
            </a>
            . Keep your domain name short, easy to spell, and closely related to
            your business.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            2. Register Your Domain
          </h5>
          <p>
            Once you've decided on a domain name, you need to register it. You
            can do this through various domain registration services, such as
            GoDaddy, Namecheap, or Google Domains. Registering a domain usually
            costs AU$ 181.9 per year, depending on the domain extension (.com,
            .net, .au, etc.).
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            3. Choose a Business Email Hosting Provider
          </h5>
          <p>
            Now that you have a domain, you’ll need a custom email hosting
            provider. These are the companies that will manage your business
            emails. Some popular email hosting providers include:
          </p>
          <ul className="list-disc ml-10 py-5">
            <li>Google Workspace (formerly G Suite)</li>
            <li>Microsoft Outlook 365</li>
            <li>Zoho Mail</li>
          </ul>
          <p>
            These services offer a variety of features like ample storage,
            advanced security, easy-to-use interfaces, and custom email
            addresses.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            4. Set Up Your Email Accounts
          </h5>
          <p>
            After choosing your email hosting provider, it’s time to create your
            business email account. This typically involves logging into your
            hosting provider's platform and setting up individual email
            addresses for yourself and your team. Use professional email formats
            like firstname@yourbusiness.com or
            firstname.lastname@yourbusiness.com for a clean and recognizable
            address.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            5. Configure Email on Devices
          </h5>
          <p>
            Once you have create an email for business, you can configure it on
            your phone, computer, or tablet. Most email hosting services provide
            easy setup instructions. That allows you to sync your business email
            account across multiple devices.
          </p>
        </div>
      </div>

      <QuickContact title="Contact Us Today for Expert CCTV Installation Services" />

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
          What to Look for in a
          <span className="text-primaryColor">
            {" "}
            Professional Email Service?
          </span>
        </h3>
        <p className="mb-4 text-center pb-4">
          When selecting an email hosting provider, here are some key features
          to consider:
        </p>
        <Image
          src={"/email-account-5.png"}
          alt="create an email for business"
          width={1200}
          height={900}
          className="w-full h-auto"
        />
        <div className="py-5">
          <h5 className="text-xl font-bold italic pb-2">
            1. Reliability and Uptime
          </h5>
          <p>
            You need your business email account service to work around the
            clock. Look for providers that offer 99.9% uptime. That means your
            email will be available almost all the time.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">2. Storage Space</h5>
          <p>
            If your business handles large files or extensive communications,
            you'll want a custom email domain service that offers plenty of
            storage space. Google Workspace and Microsoft 365 both offer ample
            storage options, often starting at 30GB per user.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            3. Security Features
          </h5>
          <p>
            When choosing a business email provider, security is essential to
            protect your communications and sensitive data. Key features to look
            for include Two-factor authentication (2FA), which adds an extra
            layer of protection by requiring a second form of identification
            during login. Spam filtering helps block unwanted or malicious
            emails, while anti-virus scanning detects and removes harmful files.
            Data encryption ensures that emails and attachments are securely
            transmitted. That protects them from unauthorized access. These
            features safeguard your custom business email address from cyber
            threats and help maintain the integrity of your communications.
          </p>
        </div>
        <div className="pb-5">
          <h5 className="text-xl font-bold italic pb-2">
            4. Collaboration Tools
          </h5>
          <p>
            If you have a team, you might want email hosting that integrates
            with other collaboration tools, such as shared calendars, video
            conferencing, and cloud storage. Google Workspace and Microsoft 365
            excel in these areas. That makes them ideal for growing businesses
            and email aliases.
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="pb-8 md:pb-14 lg:pb-20 xl:pb-28">
          <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7">
            Professional Email vs.{" "}
            <span className="text-primaryColor">Free Email Services</span>
          </h3>
          <p>
            You may wonder, why not just use a free email service like Gmail or
            Yahoo? Free email services are great for personal use. They fall
            short when it comes to business needs. Here’s why a professional
            email is better for business:
          </p>

          <div className="py-3">
            <ul className="list-disc ml-5">
              <li>
                <span className="font-bold">Branding:</span> With a domain email
                host, you are constantly promoting your brand every time you
                send an email. Free services don’t offer this benefit.
              </li>
              <li>
                <span className="font-bold">Control:</span> With a professional
                email service, you can create multiple email addresses for your
                team, set permissions, and manage storage and security. Free
                services don't provide the same level of control for business
                starters.
              </li>
              <li>
                <span className="font-bold">Trust:</span> Customers are more
                likely to engage with a company that has a professional email
                address. A free email account can make your business standard
                look less established.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
          How to Secure
          <span className="text-primaryColor"> Your Business Email</span>
        </h3>
        <p className="mb-4 text-center pb-4">
          With email being one of the most common communication tools for
          businesses, it's a prime target for cyber attacks. Here’s how you can
          secure your business email:
        </p>
        <div className="flex items-center gap-7 border-t-[1px] border-[#EC5930] pb-7">
          <div className="h-full hidden bg-gradient-to-l from-[#F93A22] to-[#FB9618] rounded-tr-[50px] rounded-br-[50px] p-7 lg:flex justify-center items-center">
            <Image
              src="/email-account-icon-1.png"
              width={100}
              height={80}
              alt=""
              className="w-[65px] h-[55px]"
            />
          </div>
          <div className="pt-3 lg:pt-0">
            <h5 className="font-bold pb-1">1. Use Strong Passwords</h5>
            <p>
              As an email service provider encourage all employees to use
              complex passwords. That combines letters, numbers, and symbols.
              Avoid using easily guessable information like birthdays or common
              words.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-7 border-t-[1px] border-[#F18E36] pb-7">
          <div className="h-full bg-gradient-to-l from-[#FEA129] to-[#FCD44C] rounded-tr-[50px] rounded-br-[50px] p-7 hidden lg:flex justify-center items-center">
            <Image
              src="/email-account-icon-2.png"
              width={100}
              height={80}
              alt=""
              className="w-[60px] h-[55px]"
            />
          </div>
          <div className="pt-3 lg:pt-0">
            <h5 className="font-bold pb-1">
              2. Enable Two-Factor Authentication (2FA)
            </h5>
            <p>
              Most professional email services offer two-factor authentication.
              That requires users to provide a second form of identification
              (like a text code) when logging in.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-7 border-t-[1px] border-[#C3466E] pb-7">
          <div className="h-full bg-gradient-to-l from-[#AB1F87] to-[#EC67A8] rounded-tr-[50px] rounded-br-[50px] p-7 hidden lg:flex justify-center items-center">
            <Image
              src="/email-account-icon-3.png"
              width={100}
              height={80}
              alt=""
              className="w-[55px] h-[55px]"
            />
          </div>
          <div className="pt-3 lg:pt-0">
            <h5 className="font-bold pb-1">3. Educate Your Team</h5>
            <p>
              Train your employees to recognize phishing emails and avoid
              clicking on suspicious links or attachments. Cybercriminals often
              target businesses through email scams.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-7 border-t-[1px] border-[#6450AA] pb-7">
          <div className=" h-full bg-gradient-to-l from-[#443D98] to-[#A576B3] rounded-tr-[50px] rounded-br-[50px] p-7 hidden lg:flex justify-center items-center">
            <Image
              src="/email-account-icon-4.png"
              width={100}
              height={80}
              alt=""
              className="w-[55px] h-[55px]"
            />
          </div>
          <div className="pt-3 lg:pt-0">
            <h5 className="font-bold pb-1">4. Regularly Update Software</h5>
            <p>
              Keep your email software and devices up-to-date with the latest
              security patches. This minimizes vulnerabilities that hackers
              could exploit.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-semibold pb-4 md:pb-7 text-center">
          How to Get a
          <span className="text-primaryColor">
            {" "}
            Company Email for Your Team
          </span>
        </h3>
        <p className="mb-4 text-center pb-4">
          As a business owner your business grows, you’ll likely need to create
          an email for your business and your employees. Having a company email
          system in place ensures smooth communication, professionalism, and
          brand consistency.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="shadow-boxShadow rounded-2xl">
            <h5 className="text-3xl font-bold pb-1 text-center pt-5">
              Step 01
            </h5>
            <div className="py-5">
              <Image
                src="/bend-line.png"
                width={600}
                height={300}
                alt=""
                className="w-full h-full"
              />
            </div>
            <p className="p-5">
              Create an Email for Business and Employees: Use a consistent
              format like firstname@yourbusiness.com. This will make your email
              hosting plan easy to manage.
            </p>
          </div>
          <div className="shadow-boxShadow rounded-2xl">
            <h5 className="text-3xl font-bold pb-1 text-center pt-5">
              Step 02
            </h5>
            <div className="py-5">
              <Image
                src="/bend-line.png"
                width={600}
                height={300}
                alt=""
                className="w-full h-full"
              />
            </div>
            <p className="p-5">
              Set Up Aliases: Some email campaign services allow you to create
              aliases. What are alternate personalized email addresses? This
              delivers messages to a single inbox. This is useful if an employee
              has multiple roles within the company (support@yourbusiness.com).
            </p>
          </div>
          <div className="shadow-boxShadow rounded-2xl">
            <h5 className="text-3xl font-bold pb-1 text-center pt-5">
              Step 03
            </h5>
            <div className="py-5">
              <Image
                src="/bend-line.png"
                width={600}
                height={300}
                alt=""
                className="w-full h-full"
              />
            </div>
            <p className="p-5">
              Group Email Accounts: Set up group accounts for departments such
              as sales@yourbusiness.com or support@yourbusiness.com to manage
              customer inquiries more efficiently.
            </p>
          </div>
          <div className="shadow-boxShadow rounded-2xl">
            <h5 className="text-3xl font-bold pb-1 text-center pt-5">
              Step 04
            </h5>
            <div className="py-5">
              <Image
                src="/bend-line.png"
                width={600}
                height={300}
                alt=""
                className="w-full h-full"
              />
            </div>
            <p className="p-5">
              Train Employees: Make sure your team knows how to use the email
              system, including setting up their accounts on different devices
              and following best security practices.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h3 className="text-2xl lg:text-4xl font-bold text-center pb-8">
          Frequently Asked <span className="text-primaryColor">Questions</span>
        </h3>
        <Accordion items={faqItems} />
      </div>

      <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
        <h3 className="text-2xl lg:text-4xl font-bold pb-6 italic">
          In The End Why You Should Create{" "}
          <span className="text-primaryColor">An Email For Business</span>
        </h3>
        <p className="pb-5">
          Creating an email for business or Apple Mail is an important step
          toward building a professional and trusted brand. With the right
          domain, reliable email hosting, incoming emails, email forwarding, and
          proper security measures in place, your business can thrive in the
          digital world. Whether you’re just starting or scaling up, having a{" "}
          <a
            href="https://auspost.com.au/content/dam/auspost_corp/media/documents/mails-role-in-the-digital-age-research-report.pdf"
            className="text-primaryColor underline"
          >
            professional email address
          </a>{" "}
          is essential to your success.
        </p>
        <p>
          At{" "}
          <a
            href="https://geekify.com.au/"
            className="text-primaryColor underline"
          >
            Geekify®
          </a>
          , we specialize in helping businesses set up professional emails that
          are secure, reliable, and easy to manage. If you’re ready to create
          your business email and take your company to the next level, reach out
          to us today!
        </p>
      </div>
    </div>
  );
}

export default EmailAccountSetup