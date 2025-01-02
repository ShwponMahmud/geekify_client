import Image from "next/image";
import latestAlertBanner from "../../../../assets/images/latest-scam-banner.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import LatestScam from "../LatestScam/LatestScam";
import AllScamNews from "../AllScamNews/AllScamNews";
import RecentScams from "../RecentScams/RecentScams";
interface scamDetailsProps {
  name: string;
  slug: string;
  body: string;
  description: string;
  title: string
  image: any;
}
interface scamProps {
  scamDetails: scamDetailsProps;
}

function ScamAlertDetails({scamDetails}: scamProps) {
  return (
    <>
      <div className="container mx-auto mt-28 py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="scam_alert_details_content_container grid grid-cols-1 xl:grid-cols-3 justify-between gap-5 text-deepGrayColor">
          <div className="col-span-2 text-black">
            <h1 className="text-4xl font-bold mb-5">{scamDetails.title}</h1>
            <Image src={scamDetails.image} alt="" width={400} height={200} className="rounded-xl w-[100%] h-auto" />
            <h3
              className="text-xl my-8"
              dangerouslySetInnerHTML={{
                __html: scamDetails?.body ?? "",
              }}
            ></h3>

            {/* <div className="pb-8">
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
            </div> */}
          </div>
          <RecentScams/>
        </div>
      </div>
    </>
  );
}

export default ScamAlertDetails;
