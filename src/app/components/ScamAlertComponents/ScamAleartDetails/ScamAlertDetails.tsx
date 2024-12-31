import Image from "next/image";
import latestAlertBanner from "../../../../assets/images/latest-scam-banner.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

function ScamAlertDetails() {
  return (
    <>
      <div className="container mx-auto mt-28 py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="scam_alert_details_content_container grid grid-cols-1 xl:grid-cols-3 justify-between gap-10 text-deepGrayColor">
          <div className="col-span-2 text-black">
            <h1 className="text-4xl font-bold mb-5">Cryptocurrency Scam</h1>
            <Image src={latestAlertBanner} alt="" className="rounded-xl" />
            <p className="mt-5">
              Cryptocurrency scams use tricks like Ponzi schemes, fake Initial
              Coin Offerings (ICOs), phishing attacks, or fake investment sites
              to fool investors. They promise big returns or special deals to
              get people to give them money or personal details.
            </p>
            <h3 className="text-4xl font-bold my-8">
              Telltale Signs of Cryptocurrency Scam
            </h3>

            <div className="pb-8">
              <h4 className="text-2xl font-bold">Pressure to Invest</h4>
              <p className="mt-1">
                Coercive or aggressive strategies pressure individuals into
                making rapid investment choices without the opportunity to
                conduct thorough research or proper due diligence, aiming to
                rush decision-making.
              </p>
            </div>
            <div className="pb-8">
              <h4 className="text-2xl font-bold">Fake Wallets or Exchanges</h4>
              <p className="mt-1">
                Deceptive online platforms or websites designed to replicate
                legitimate cryptocurrency wallets or exchanges; are often
                employed by cybercriminals to fraudulently obtain user login
                credentials or steal funds.
              </p>
            </div>
            <div className="pb-8">
              <h4 className="text-2xl font-bold">Pyramid or Ponzi Schemes</h4>
              <p className="mt-1">
                Schemes structured on recruiting participants and generating
                profits primarily through recruiting others, creating a
                hierarchical setup where earlier investors are paid returns from
                funds contributed by subsequent investors, leading to an
                inevitable collapse.
              </p>
            </div>
            <div className="pb-8">
              <h4 className="text-2xl font-bold">Get-rich-quick claims</h4>
              <p className="mt-1">
                Unrealistic and exaggerated promises asserting the potential for
                quick and substantial profits within an unreasonably short
                timeframe, luring individuals into investing without realistic
                expectations or understanding of the risks involved.
              </p>
            </div>
            <h3 className="text-4xl font-bold mb-5">
              Ways to do when you encounter a Cryptocurrency Scam
            </h3>
            <div className="pb-8">
              <h4 className="text-2xl font-bold">Conduct Research</h4>
              <p className="mt-1">
                Dig deep into the cryptocurrency's background, the team behind
                it, and its technology. Get a full understanding before
                investing any money.
              </p>
            </div>
            <div className="pb-8">
              <h4 className="text-2xl font-bold">Check Information</h4>
              <p className="mt-1">
                Make sure all the info you get about the project is true. Verify
                affiliations and endorsements from reliable sources or experts
                in the field.
              </p>
            </div>
            <div className="pb-8">
              <h4 className="text-2xl font-bold">Use Secured Wallets</h4>
              <p className="mt-1">
                Use trustworthy cryptocurrency wallets or exchanges with good
                security measures to keep your assets safe during transactions.
              </p>
            </div>
            <div className="pb-8">
              <h4 className="text-2xl font-bold">Watch for Promises</h4>
              <p className="mt-1">
                Be careful with investments promising unrealistically high
                returns. They might be scams trying to trick you.
              </p>
            </div>
            <div className="pb-8">
              <h4 className="text-2xl font-bold">Educate yourself</h4>
              <p className="mt-1">
                Keep learning about different cryptocurrency scams to better
                spot and avoid them in the market.
              </p>
            </div>
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
              <h4 className="text-[20px] font-semibold">
                Share with your community!
              </h4>
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
