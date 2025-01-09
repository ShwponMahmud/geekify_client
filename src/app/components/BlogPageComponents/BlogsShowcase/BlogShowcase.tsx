import React from "react";
import "./Showcase.css";
import Showcase from "../../Showcase/Showcase";

function BlogShowcase() {
  return (
    <>
      <Showcase
        backgroundImage={"/blogsBanner.jpg"}
        title="Our"
        highlights="Blogs"
        paragraph="Stay ahead in the fast-paced world of technology with our expertly curated blog. Whether you’re looking for troubleshooting tips, the latest industry trends, or in-depth guides on 
        optimizing your tech setup, we’ve got you covered. Explore valuable insights and actionable advice to empower your digital journey."
      />
    </>
  );
}

export default BlogShowcase;
