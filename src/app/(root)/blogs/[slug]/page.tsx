import BlogAuthorAboutDetails from "@/app/components/BlogDetailsPageComponents/BlogAuthorAboutDetails/BlogAuthorAboutDetails";
import BlogDetailsView from "@/app/components/BlogDetailsPageComponents/BlogDetailsView/BlogDetailsView";
import CreateComments from "@/app/components/BlogDetailsPageComponents/CreateComments/CreateComments";
import ViewComments from "@/app/components/BlogDetailsPageComponents/ViewComments/ViewComments";
import QuickContact from "@/app/components/sharedComponents/QuickContact/QuickContact";
import { baseUrl } from "@/assets/baseUrl";


interface Blog {
  id: number;
  title: string;
  slug: string;
  read_time: string;
  read_count: number;
  is_featured: string;
  status: string;
  description: string;
  created_at: string;
  updated_at: string;
  image: string;
  thumbnail: string;
  meta_data: string;
  blogCategory: {
    id: number;
    name: string;
    slug: string;
    status: string;
  };
}

interface blogParams {
  params: { slug: string | any };
}


const page = async ({ params }: blogParams) =>{
  const {slug} = await params;
  let blog: Blog | null = null

  try {
    const response = await fetch(`${baseUrl}/blogs/slug/${slug}?with_relation[]= media&with_relation[]= blogCategory`, {
      headers: {
        "Content-Type": "application/json",
        "Client-Secret": `secret`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blog");
    }

    const responseData = await response.json();

    blog = responseData.data || null;

  } catch (error) {
    console.error("Error fetching blog:", error);
  }



  return (
    <>
      <div className="blog_details_page mt-20 md:mt-10 lg:mt-0 py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="container mx-auto">
          <BlogDetailsView blog={blog} />
          <BlogAuthorAboutDetails />
          <CreateComments />
          <ViewComments />
        </div>
      </div>
      <QuickContact
        title="If you don’t find your needed service, please contact with us."
        paragraph="Our team is always available to assist with your unique tech challenges. If your required service isn’t listed, feel free to get in touch. Geekify offers personalized solutions 
          tailored to your needs. Call, request support, or book an appointment online—we’re here to help!"
      />
    </>
  );
}

export default page;
 