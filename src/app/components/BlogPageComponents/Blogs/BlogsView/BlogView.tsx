"use client";

import Skeleton from "@/app/components/sharedComponents/Skeleton/Skeleton";
import { useAppSelector } from "@/app/rtk-state/hooks";
import Image from "next/image";
import Link from "next/link";

interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  status: string;
}

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
  blogCategory: BlogCategory;
}

interface BlogViewProps {
  blogs: Blog[];
}

export default function BlogView({ blogs }: BlogViewProps) {
  const categorySlug = useAppSelector((state) => state?.blogCategory?.value);
  const filteredBlogs = categorySlug ? blogs.filter((blog) =>  blog?.blogCategory?.slug === categorySlug || blog?.blogCategory?.name?.toLocaleLowerCase().includes(categorySlug)) : blogs;

  // const filteredBlogs = categorySlug ? blogs.filter((blog) => blog?.blogCategory?.slug || blog?.blogCategory?.name == categorySlug) : blogs;

  // const blogsToDisplay = filteredBlogs.length > 0 ? filteredBlogs : blogs;

  return (
    // <div className="our_latest_blog_content_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
    //   {filteredBlogs.map((blog) =>
    //     blog ? (
    //       <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group">
    //         <div className="our_latest_blog_content_card shadow-boxShadow hover:shadow-hoverBoxShadow transition-shadow duration-500 rounded-md">
    //           {/* Blog Thumbnail */}
    //           <div className="w-full h-[200px] overflow-hidden relative border-b">
    //             <Image
    //               width={350}
    //               height={300}
    //               src={blog.thumbnail}
    //               alt={blog.title}
    //               className="rounded-md w-full h-full object-cover"
    //             />
    //           </div>

    //           {/* Blog Details */}
    //           <div className="p-4">
    //             <h2 className="text-[15px] font-semibold text-gray-900 line-clamp-2">
    //               {blog.title}
    //             </h2>
    //             <div className="mt-5 space-y-3">
    //               <div className="category cursor-pointer text-[14px]">
    //                 <b className="text-primaryColor">Category:</b>{" "}
    //                 {blog.blogCategory.name}
    //               </div>
    //               <div className="date text-[14px]">
    //                 <b className="text-primaryColor">Created Date:</b>{" "}
    //                 {blog.created_at}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //     ) : (
    //       // <Skeleton key={`skeleton-${Math.random()}`} borderRadius="8px" />
    //       <div>
    //         <h3 className="text-primaryColor text-2xl font-semibold">No blogs on this topic</h3>
    //       </div>
    //     )
    //   )}
    // </div>
    <div className="our_latest_blog_content_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
      {/* Check if there are no blogs */}
      {filteredBlogs.length === 0 ? (
        <div className="w-full col-span-full">
          <h3 className="text-primaryColor text-4xl font-bold text-center">
            No blogs on this topic
          </h3>
        </div>
      ) : (
        filteredBlogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.slug}`} className="group">
            <div className="our_latest_blog_content_card shadow-boxShadow hover:shadow-hoverBoxShadow transition-shadow duration-500 rounded-md">
              {/* Blog Thumbnail */}
              <div className="w-full h-[200px] overflow-hidden relative border-b">
                <Image
                  width={350}
                  height={300}
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="rounded-md w-full h-full object-cover"
                />
              </div>

              {/* Blog Details */}
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
                  {blog.title}
                </h2>
                <div className="space-y-2">
                  <div className="category cursor-pointer">
                    <p className="text-primaryColor">Category:</p>{" "}
                    {blog.blogCategory.name}
                  </div>
                  <div className="date">
                    <p className="text-primaryColor">Created Date:</p>{" "}
                    {blog.created_at}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}






// "use client";

// import Skeleton from "@/app/components/sharedComponents/Skeleton/Skeleton";
// import { useAppSelector } from "@/app/rtk-state/hooks";
// import Image from "next/image";
// import Link from "next/link";

// interface BlogCategory {
//   id: number;
//   name: string;
//   slug: string;
//   status: string;
// }

// interface Blog {
//   id: number;
//   title: string;
//   slug: string;
//   read_time: string;
//   read_count: number;
//   is_featured: string;
//   status: string;
//   description: string;
//   created_at: string;
//   updated_at: string;
//   image: string;
//   thumbnail: string;
//   meta_data: string;
//   blogCategory: BlogCategory;
// }

// interface BlogViewProps {
//   blogs: Blog[]; // Type the blogs array
// }

// export default function BlogView({ blogs }: BlogViewProps) {
//   const categorySlug = useAppSelector((state) => state.category.value);

//   const filterBlogs = blogs.filter((item) => item.slug == categorySlug);

//   console.log(filterBlogs);

//   return (
//     <div className="our_latest_blog_content_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//       {filterBlogs.length
//         ? filterBlogs.map((blog) =>
//             blog ? (
//               <Link
//                 key={blog.id}
//                 href={`/blogs/${blog.slug}`}
//                 className="group"
//               >
//                 <div className="our_latest_blog_content_card shadow-boxShadow hover:shadow-hoverBoxShadow transition-shadow duration-500 rounded-md">
//                   {/* Blog Thumbnail */}
//                   <div className="w-full h-[200px] overflow-hidden relative border-b">
//                     <Image
//                       width={350}
//                       height={300}
//                       src={blog.thumbnail}
//                       alt={blog.title}
//                       className="rounded-md w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* Blog Details */}
//                   <div className="p-4">
//                     <h2 className="text-[15px] font-semibold text-gray-900 line-clamp-2">
//                       {blog.title}
//                     </h2>
//                     <div className="mt-5 space-y-3">
//                       <div className="category cursor-pointer text-[14px]">
//                         <b className="text-primaryColor">Category:</b>{" "}
//                         {blog.blogCategory.name}
//                       </div>
//                       <div className="date text-[14px]">
//                         <b className="text-primaryColor">Created Date:</b>{" "}
//                         {blog.created_at}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ) : (
//               <Skeleton key={`skeleton-${Math.random()}`} borderRadius="8px" />
//             )
//           )
//         : blogs?.map((blog) =>
//             blog ? (
//               <Link
//                 key={blog.id}
//                 href={`/blogs/${blog.slug}`}
//                 className="group"
//               >
//                 <div className="our_latest_blog_content_card shadow-boxShadow hover:shadow-hoverBoxShadow transition-shadow duration-500 rounded-md">
//                   {/* Blog Thumbnail */}
//                   <div className="w-full h-[200px] overflow-hidden relative border-b">
//                     <Image
//                       width={350}
//                       height={300}
//                       src={blog.thumbnail}
//                       alt={blog.title}
//                       className="rounded-md w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* Blog Details */}
//                   <div className="p-4">
//                     <h2 className="text-[15px] font-semibold text-gray-900 line-clamp-2">
//                       {blog.title}
//                     </h2>
//                     <div className="mt-5 space-y-3">
//                       <div className="category cursor-pointer text-[14px]">
//                         <b className="text-primaryColor">Category:</b>{" "}
//                         {blog.blogCategory.name}
//                       </div>
//                       <div className="date text-[14px]">
//                         <b className="text-primaryColor">Created Date:</b>{" "}
//                         {blog.created_at}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ) : (
//               <Skeleton key={`skeleton-${Math.random()}`} borderRadius="8px" />
//             )
//           )}
//     </div>
//   );
// }