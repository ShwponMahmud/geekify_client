import Image from "next/image";

export default function page() {
  return (
    <div className="container mx-auto py-20 mt-[100px]">
      <div>
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold pb-4 md:pb-7">
            On-site Computer and PC repairs in Your Area -{" "}
            <span className="text-primaryColor">we've got you covered!</span>
          </h2>
          <p className="lg:text-xl">
            We are locally based in the Camden area and our computer technicians
            are ready to resolve any IT problem you may have - to find a
            solution that works and is relegable. No matter if you have an old
            MacBook or a PC that needs repair - our friendly experts at Geekify
            can provide effective solutions for both personal and work devices.
          </p>
        </div>
      </div>
      <div className=" py-8 md:py-14 lg:py-20 xl:py-28">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Are you searching for a computer technician in your area?
          </h2>
          <p className="md:py-4 lg:py-7 lg:text-xl">
            Geekify specializes in providing professional onsite computer help
            and PC services on the same day in Your Area . No matter where you
            are located in your region, whether it's the Upper North Shore,
            Parramatta, or even as far south as Sutherland, you can count on our
            reliable computer technicians to assist you.
          </p>
          <p className="lg:text-xl">
            Geekify specializes in providing professional onsite computer help
            and PC services on the same day in Your Area . No matter where you
            are located in your region, whether it's the Upper North Shore,
            Parramatta, or even as far south as Sutherland, you can count on our
            reliable computer technicians to assist you.
          </p>
        </div>

        <Image
          src="/brands-image.png"
          width={1300}
          height={500}
          alt="brands image"
          className="w-[100%] h-auto py-8 md:py-14 lg:py-20 xl:py-28"
        />

        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Are you searching for a computer technician in your area?
          </h2>
          <p className="py-4 lg:py-7 lg:text-xl">
            Geekify specializes in providing professional onsite computer help
            and PC services on the same day in Your Area . No matter where you
            are located in your region, whether it's the Upper North Shore,
            Parramatta, or even as far south as Sutherland, you can count on our
            reliable computer technicians to assist you.
          </p>
          <p className="lg:text-xl">
            Geekify specializes in providing professional onsite computer help
            and PC services on the same day in Your Area . No matter where you
            are located in your region, whether it's the Upper North Shore,
            Parramatta, or even as far south as Sutherland, you can count on our
            reliable computer technicians to assist you.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-20 xl:gap-28 items-center pt-8 md:pt-14 lg:pt-28">
          <div>
            <Image
              src="/details-2.png"
              width={588}
              height={490}
              alt="technitian image"
              className="w-[100%] h-auto"
            />
          </div>
          <div>
            <h4 className="text-2xl md:text-2xl lg:5xl font-semibold pb-4 lg:pb-6">
              Here’s a list of some services we provide:
            </h4>
            <ul className="list-disc ml-6">
              <li className="text-xl md:text-[16px] md:mb-[-10px] lg:mb-0 lg:text-xl font-medium">
                Computer Set-Up And Install
              </li>
              <li className="text-xl md:text-[16px] md:mb-[-10px] lg:mb-0 lg:text-xl font-medium">
                Computer Troubleshooting
              </li>
              <li className="text-xl md:text-[16px] md:mb-[-10px] lg:mb-0 lg:text-xl font-medium">
                Virus And Spyware Removal
              </li>
              <li className="text-xl md:text-[16px] md:mb-[-10px] lg:mb-0 lg:text-xl font-medium">
                Anti-Virus Installation
              </li>
              <li className="text-xl md:text-[16px] md:mb-[-10px] lg:mb-0 lg:text-xl font-medium">
                Smartphone Device Setup
              </li>
              <li className="text-xl md:text-[16px] md:mb-[-10px] lg:mb-0 lg:text-xl font-medium">
                Home Network WIFI Setup
              </li>
              <li className="text-xl md:text-[16px] md:mb-[-10px] lg:mb-0 lg:text-xl font-medium">
                Email Account Setup
              </li>
              <li className="text-xl md:text-[16px] md:mb-[-10px] lg:mb-0 lg:text-xl font-medium md:leading-0">
                And All Other Services Listed At The Website
              </li>
            </ul>
          </div>
        </div>
        <p className="pt-8 md:pt-14 lg:pt-28 lg:text-xl">
          If you're worried that your tech issue is not included in our list,
          don't worry! We have successfully resolved a vast range of problems in
          the past, and we're confident that we can find a solution for your
          issue too. And if we can't, our "no fix, no fee" policy ensures that
          you won't be charged. Whether you need assistance with a device or
          computer, don't hesitate to contact Geekify via phone or online form.
          Our affordable and competitive prices have made us the go-to choice
          for computer repair services in Camden and across Australia.
        </p>
      </div>
    </div>
  );
}
