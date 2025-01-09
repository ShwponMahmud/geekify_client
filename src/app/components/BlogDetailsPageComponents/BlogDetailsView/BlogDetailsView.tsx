import Image from "next/image";
import QuickContact from "../../sharedComponents/QuickContact/QuickContact";

interface Blog {
  id: number;
  title: string | any;
  slug: string;
  read_time: string;
  read_count: number;
  is_featured: string;
  status: string;
  description: string | any;
  created_at: string;
  updated_at: string;
  image: string;
  thumbnail: string | any;
  meta_data: string;
  blogCategory: {
    id: number;
    name: string;
    slug: string;
    status: string;
  };
}

interface BlogDetailsProps {
  blog: Blog | null;
}

const BlogDetailsView = async ({ blog }: BlogDetailsProps) => {
  return (
    <>
      <div className="blog_details_view_section py-8 md:py-14 lg:py-20">
        <div className="blog_details_view_heading mb-14">
          <h1 className="text-4xl text-deepGrayColor font-semibold">
            {blog?.title}
          </h1>
          <p className=" mt-4">
            <span className="text-[20px] font-semibold text-primaryColor">
              Category: {blog?.blogCategory?.name}{" "}
            </span>
            , {blog?.created_at}
          </p>

          <div className="blog_details_view_banner w-[100%] h-[600px] overflow-hidden relative border rounded-lg mt-5">
            <Image
              width={1450}
              height={600}
              src={blog?.thumbnail}
              alt={blog?.title}
            />
          </div>
        </div>

        <div className="blog_detail_view_content text-deepGrayColor">
          <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
        </div>
      </div>
      
    </>
  );
};

export default BlogDetailsView;
