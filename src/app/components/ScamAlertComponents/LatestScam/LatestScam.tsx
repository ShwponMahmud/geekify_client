import Image from "next/image";
import latestAlertBanner from "../../../../assets/images/latest-scam-banner.jpg";

function LatestScam() {
  return (
    <>
      <div className="latest_scam_section py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="container mx-auto">
          <div className="latest_scam_content_container grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 text-deepGrayColor">
            <div>
              <Image src={latestAlertBanner} alt="" className="rounded-xl" />
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                magni quam veniam quos corrupti minima perferendis delectus in
                nostrum repudiandae.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold">Recent Alert:</h2>
              <div className="flex flex-col sm:flex-row gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
                <Image width={200} src={latestAlertBanner} alt="" className="w-full lg:w-[200px]"/>
                <p className="p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  magni quam veniam quos corrupti minima perferendis delectus in
                  nostrum repudiandae.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
                <Image width={200} src={latestAlertBanner} alt="" className="w-full lg:w-[200px]"/>
                <p className="p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  magni quam veniam quos corrupti minima perferendis delectus in
                  nostrum repudiandae.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
                <Image width={200} src={latestAlertBanner} alt="" className="w-full lg:w-[200px]"/>
                <p className="p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  magni quam veniam quos corrupti minima perferendis delectus in
                  nostrum repudiandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestScam;
