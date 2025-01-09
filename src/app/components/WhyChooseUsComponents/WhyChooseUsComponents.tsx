import React from 'react'
import QuickContact from '../sharedComponents/QuickContact/QuickContact'
import Image from 'next/image'
import Showcase from '../Showcase/Showcase';

const title: string = "If you need remote Service?";

function WhyChooseUsComponents() {
  return (
    <>
      <Showcase
        backgroundImage="/why-choose-us.png"
        title="Why"
        highlights="Choose Us"
        paragraph="Why should you choose us? Simple, because we make a difference! Our motto is “You point it, we fix it!” and we live and conduct our business accordingly!"
      />
      <div>
        <div className="container mx-auto py-8 md:py-14 lg:py-20 xl:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-10 xl:gap-20">
            <div>
              <Image
                src="/why-choose-1.png"
                width={565}
                height={506}
                alt="details iamge"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="">
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold pb-5">
                Our <span className="text-primaryColor">Promise</span>
              </h3>
              <p className="pb-3 lg:pb-5">
                Geekify guarantees satisfactory services and happy customers!
              </p>
              <p className="pb-3 lg:pb-5">
                Our geeks are passionate and well versed, led by experienced
                leaders who have years of hands-on experience to all sorts of
                tech related problems that can arise in both personal and
                business contexts.
              </p>
              <p>
                We always handle each client’s problem scenario individually
                which lets us assess and give personalized solution to every
                single client, and we find that this approach leaves our clients
                the happiest!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 pt-8 md:pt-14 lg:pt-20 xl:pt-28">
            <div>
              <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold pb-5">
                How can we <span className="text-primaryColor">help you?</span>
              </h3>
              <p className="pb-3 lg:pb-5 lg:text-xl">
                At Geekify, we provide a wide range of tech solutions to meet
                your specific needs. From troubleshooting and repairs to
                installations and upgrades, our experts are equipped to handle
                it all. We ensure that your technology functions seamlessly, so
                you can focus on what matters most. Our team is dedicated to
                delivering personalized service, understanding that every client
                has unique requirements. We work closely with you to identify
                the best solutions, ensuring quick and effective results. Let us
                be your trusted partner in navigating the ever-evolving world of
                technology.
              </p>
            </div>
            <div>
              <Image
                src="/why-choose-2.png"
                width={565}
                height={506}
                alt="details iamge"
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
          <div className="pt-8 md:pt-14 lg:pt-20 xl:pt-28">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold pb-5">
              Always on <span className="text-primaryColor">the job</span>
            </h3>
            <p className="pb-3 lg:pb-5 lg:text-xl">
              No matter the type of tech trouble you have, whether it be repair,
              installation, troubleshooting, security or even consultation and
              regular maintenance work, our geeks leave no corner unattended –
              and no customer unhappy!
            </p>
            <p className="lg:text-xl">
              With that in mind, if you would like solutions to your tech
              troubles lighting fast, then you have come to the right decision!
            </p>
          </div>
        </div>
        <QuickContact
          title="Ready to book?"
          paragraph="You can get in touch with us over the phone or by using our online booking portal! We’ll be out to fix your tech issues in a flash!"
        />
      </div>
    </>
  );
}

export default WhyChooseUsComponents