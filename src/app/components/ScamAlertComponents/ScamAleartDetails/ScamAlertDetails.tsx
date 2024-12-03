import Image from "next/image";
import latestAlertBanner from "../../../../assets/images/latest-scam-banner.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

function ScamAlertDetails() {
  return (
    <>
      <div className="container mx-auto mt-28 py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="scam_alert_details_content_container grid grid-cols-1 xl:grid-cols-2 justify-between gap-10 text-deepGrayColor">
          <div className="col-span-2">
            <h1 className="text-3xl font-semibold mb-5">
              Why DIY Computer Repair is Not Practical | Geek Talks
            </h1>
            <Image src={latestAlertBanner} alt="" className="rounded-xl" />
            <p className="mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              pariatur perspiciatis nostrum commodi iusto. Est natus harum
              veniam corporis suscipit repudiandae maxime deleniti reprehenderit
              blanditiis ut quos laboriosam nesciunt esse ex a aspernatur
              tempore architecto explicabo porro, laudantium quasi, saepe
              incidunt earum distinctio. Debitis necessitatibus, esse quas
              dolorem, natus eius repudiandae sequi ullam officiis earum
              tempora, doloremque error voluptas! Totam voluptatibus inventore
              provident accusantium vitae eaque odio nihil nemo vel blanditiis
              ea quaerat perspiciatis optio, sequi recusandae officiis. Adipisci
              nisi, hic, ipsam magni aliquam incidunt explicabo molestias
              officia dolores, ut voluptates reprehenderit! Itaque, sequi quia
              adipisci ipsum est quibusdam quis.
            </p>
            <p className="mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              pariatur perspiciatis nostrum commodi iusto. Est natus harum
              veniam corporis suscipit repudiandae maxime deleniti reprehenderit
              blanditiis ut quos laboriosam nesciunt esse ex a aspernatur
              tempore architecto explicabo porro, laudantium quasi, saepe
              incidunt earum distinctio. Debitis necessitatibus, esse quas
              dolorem, natus eius repudiandae sequi ullam officiis earum
              tempora, doloremque error voluptas! Totam voluptatibus inventore
              provident accusantium vitae eaque odio nihil nemo vel blanditiis
              ea quaerat perspiciatis optio, sequi recusandae officiis. Adipisci
              nisi, hic, ipsam magni aliquam incidunt explicabo molestias
              officia dolores, ut voluptates reprehenderit! Itaque, sequi quia
              adipisci ipsum est quibusdam quis.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">Recent Alert:</h2>
            <div className="flex gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
              <Image width={200} src={latestAlertBanner} alt="" />
              <p className="py-2 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                magni quam veniam.
              </p>
            </div>
            <div className="flex gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
              <Image width={200} src={latestAlertBanner} alt="" />
              <p className="py-2 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                magni quam veniam.
              </p>
            </div>
            <div className="flex gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
              <Image width={200} src={latestAlertBanner} alt="" />
              <p className="py-2 text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                magni quam veniam.
              </p>
            </div>
            <div className="p-5 mt-10 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
              <h4 className="text-[20px] font-semibold">Share with your community!</h4>
              <div className="social_link mt-5">
                <div className="flex space-x-[15px] ">
                  <a
                    href="#"
                    className="w-[30px] h-[30px] rounded-[5px] bg-primaryColor text-[#ffffff] flex justify-center items-center"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="w-[30px] h-[30px] rounded-[5px] bg-primaryColor text-[#ffffff] flex justify-center items-center"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#"
                    className="w-[30px] h-[30px] rounded-[5px] bg-primaryColor text-[#ffffff] flex justify-center items-center"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="w-[30px] h-[30px] rounded-[5px] bg-primaryColor text-[#ffffff] flex justify-center items-center"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScamAlertDetails;
