import Image from "next/image";
import latestAlertBanner from "../../../../assets/images/latest-scam-banner.jpg";

function AllScamNews() {
  return (
    <>
      <div className="all_scam_news_section pb-28">
        <div className="container mx-auto">
          <div className="all_scam_news_content_container">
            <h2 className="text-3xl font-semibold">Recent Alert:</h2>
            <div className="flex gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
              <Image width={450} src={latestAlertBanner} alt="" />
              <div className="p-2">
                <h3 className="text-2xl font-semibold text-primaryColor my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maxime, illo?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  magni quam veniam quos corrupti minima perferendis delectus in
                  nostrum repudiandae. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Natus magni quam veniam quos corrupti minima
                  perferendis delectus in nostrum repudiandae.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
              <Image width={450} src={latestAlertBanner} alt="" />
              <div className="p-2">
                <h3 className="text-2xl font-semibold text-primaryColor my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maxime, illo?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  magni quam veniam quos corrupti minima perferendis delectus in
                  nostrum repudiandae. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Natus magni quam veniam quos corrupti minima
                  perferendis delectus in nostrum repudiandae.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
              <Image width={450} src={latestAlertBanner} alt="" />
              <div className="p-2">
                <h3 className="text-2xl font-semibold text-primaryColor my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maxime, illo?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  magni quam veniam quos corrupti minima perferendis delectus in
                  nostrum repudiandae. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Natus magni quam veniam quos corrupti minima
                  perferendis delectus in nostrum repudiandae.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
              <Image width={450} src={latestAlertBanner} alt="" />
              <div className="p-2">
                <h3 className="text-2xl font-semibold text-primaryColor my-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maxime, illo?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  magni quam veniam quos corrupti minima perferendis delectus in
                  nostrum repudiandae. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Natus magni quam veniam quos corrupti minima
                  perferendis delectus in nostrum repudiandae.
                </p>
              </div>
            </div>
            <div className=" flex justify-center mt-14">
              <button className="border border-primaryColor bg-primaryColor text-white text-[17px] py-[10px] px-[20px] rounded-lg hover:border border-primaryColor hover:bg-white hover:text-primaryColor transition-[.5s]">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllScamNews;
