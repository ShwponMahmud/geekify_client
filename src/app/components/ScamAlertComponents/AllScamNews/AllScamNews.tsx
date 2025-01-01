import Image from "next/image";
import latestAlertBanner from "../../../../assets/images/latest-scam-banner.jpg";
import { baseUrl } from "@/assets/baseUrl";
import Link from "next/link";

interface allScamNews {
  id: number,
  title: string,
  slug: string,
  excerpt: string,
  read_time: string,
  body: string,
  image: string
}

async function AllScamNews() {
  let allScamNews: allScamNews[]=[];

  try {
    const response = await fetch(`${baseUrl}/posts?with_relation[]=postCategory&with_relation[]=tags&with_relation[]=owner&order_by_created_at=DESC&order_by_read_count=DESC&with_relation[]=media`,
      {
        headers: {
          "content-type": "application/json",
          "Client-Secret": `secret`
        },
      }
    );
    if(!response.ok){
      throw new Error("Failed to fetch the API")
    }
    const responseData = await response.json()
    allScamNews = (responseData.data || []).slice(0, 5)
  } catch(error){
    console.error("Error fetching scam alerts", error)
  }



  return (
    <>
      <div className="all_scam_news_section pb-28">
        <div className="container mx-auto">
          <div className="all_scam_news_content_container">
            <h2 className="text-3xl font-semibold">Recent Alert:</h2>
            {allScamNews?.map((scamNews) => (
              <Link href={`/scam-alert/${scamNews.slug}`}>
                <div className="flex flex-col sm:flex-row gap-2 mt-5 border rounded-lg overflow-hidden cursor-pointer hover:shadow-hoverBoxShadow transition-[.5s]">
                  <Image
                    width={300}
                    height={100}
                    src={scamNews.image}
                    alt=""
                    className="w-[200px] h-auto "
                  />
                  <div className="p-2">
                    <h3 className="text-2xl font-semibold text-primaryColor my-3">
                      {scamNews.title}
                    </h3>
                    <p>{scamNews.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
            <div className=" flex justify-center mt-14">
              <button className="border border-primaryColor bg-primaryColor text-white text-[17px] py-[10px] px-[20px] rounded-lg hover:border hover:bg-white hover:text-primaryColor transition-[.5s]">
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


