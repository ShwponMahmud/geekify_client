import BlogAuthorAboutDetails from "@/app/components/BlogDetailsPageComponents/BlogAuthorAboutDetails/BlogAuthorAboutDetails";
import BlogDetailsView from "@/app/components/BlogDetailsPageComponents/BlogDetailsView/BlogDetailsView";
import CreateComments from "@/app/components/BlogDetailsPageComponents/CreateComments/CreateComments";
import ViewComments from "@/app/components/BlogDetailsPageComponents/ViewComments/ViewComments";
import React from "react";

function page() {
  return (
    <>
      <div className="blog_details_page mt-20 md:mt-10 lg:mt-0 py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="container mx-auto">
          <BlogDetailsView />
          <BlogAuthorAboutDetails />
          <CreateComments />
          <ViewComments />
        </div>
      </div>
    </>
  );
}

export default page;
 