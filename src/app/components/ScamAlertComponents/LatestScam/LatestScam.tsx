import Image from "next/image";
import latestAlertBanner from "../../../../assets/images/latest-scam-banner.jpg";
import { baseUrl } from "@/assets/baseUrl";
import Link from "next/link";

interface latestScamNews {
  id: number,
  title: string,
  slug: string,
  excerpt: string,
  read_time: string,
  body: string,
  image: string
}

async function LatestScam() {
  let latestScamNews: latestScamNews[] = [];
  let recentScamNews: latestScamNews [] = [];

  try {
    const response = await fetch(`${baseUrl}/posts?with_relation[]=postCategory&with_relation[]=tags&with_relation[]=owner&order_by_created_at=DESC&order_by_read_count=DESC&with_relation[]=media`,
      {
        headers: {
          "content-type": "application/json",
          "Client-Secret": `secret`
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch the API")
    }
    const responseData = await response.json()
    latestScamNews = (responseData.data || []).slice(0, 1)
    recentScamNews = (responseData.data || []).slice(1, 4)
  } catch (error) {
    console.error("Error fetching scam alerts", error)
  }

  return (
    <>
      <div className="latest_scam_section py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="container mx-auto">
          <div className="latest_scam_content_container grid grid-cols-1 lg:grid-cols-2 justify-between gap-10 text-deepGrayColor">
            {latestScamNews?.map((singleScamNews) => (
              <Link href={`/scam-alert/${singleScamNews.slug}`}>
                <div>
                  <Image
                    src={singleScamNews.image}
                    alt=""
                    className="rounded-xl w-full max-h-[400px]"
                    width={600}
                    height={550}
                  />
                  <p className="mt-5">{singleScamNews.excerpt}</p>
                </div>
              </Link>
            ))}
            <div>
              <h2 className="text-3xl font-semibold">Latest Alert:</h2>
              {recentScamNews?.map((scamNews) => (
                <Link href={`/scam-alert/${scamNews.slug}`}>
                  <div className="flex flex-col sm:flex-row gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
                    <Image
                      width={200}
                      height={150}
                      src={scamNews.image}
                      alt=""
                      className="w-full lg:w-[200px]"
                    />
                    <div>
                      <h3 className="text-primaryColor font-bold px-2 pt-2">
                        {scamNews.title}
                      </h3>
                      <p className="p-2">{scamNews.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestScam;
