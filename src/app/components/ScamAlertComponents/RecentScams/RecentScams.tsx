import Image from "next/image";
import latestAlertBanner from "../../../../assets/images/latest-scam-banner.jpg";
import { baseUrl } from "@/assets/baseUrl";
import Link from "next/link";

interface latestScamNews {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  read_time: string;
  body: string;
  image: string;
  created_at: string;
}

async function RecentScams() {
  let latestScamNews: latestScamNews[] = [];
  let recentScamNews: latestScamNews[] = [];

  try {
    const response = await fetch(
      `${baseUrl}/posts?with_relation[]=postCategory&with_relation[]=tags&with_relation[]=owner&order_by_created_at=DESC&order_by_read_count=DESC&with_relation[]=media`,
      {
        headers: {
          "content-type": "application/json",
          "Client-Secret": `secret`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch the API");
    }
    const responseData = await response.json();
    recentScamNews = (responseData.data || []).slice(0, 4);
  } catch (error) {
    console.error("Error fetching scam alerts", error);
  }

  return (
    <>
      <div className="latest_scam_section mt-1">
        <div>
          <div className="latest_scam_content_container text-deepGrayColor">
            <div>
              <div className="flex items-center">
                <div className="w-[3px] h-[30px] bg-primaryColor mr-[10px]"></div>
                <h2 className="text-3xl font-semibold">Recent Scam:</h2>
              </div>
              {recentScamNews?.map((scamNews) => (
                <Link href={`/scam-alert/${scamNews.slug}`}>
                  <div className="flex flex-col sm:flex-row gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
                    <Image
                      width={200}
                      height={150}
                      src={scamNews.image}
                      alt=""
                      className="w-full md:w-[200px]"
                    />
                    <div>
                      <h3 className="text-primaryColor font-bold px-2 pt-2">
                        {scamNews.title}
                      </h3>
                      <p className="px-2 line-clamp-2 overflow-hidden">{scamNews.excerpt}</p>
                      <p className="p-2 text-sm">{scamNews.created_at}</p>
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

export default RecentScams;
