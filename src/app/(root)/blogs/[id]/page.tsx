import BlogAuthorAboutDetails from "@/app/components/BlogDetailsPageComponents/BlogAuthorAboutDetails/BlogAuthorAboutDetails";
import BlogDetailsView from "@/app/components/BlogDetailsPageComponents/BlogDetailsView/BlogDetailsView";
import CreateComments from "@/app/components/BlogDetailsPageComponents/CreateComments/CreateComments";
import ViewComments from "@/app/components/BlogDetailsPageComponents/ViewComments/ViewComments";
import React from "react";

function page() {
  return (
    <>
      <div className="blog_details_page">
        <div className="container mx-auto mb-20">
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
