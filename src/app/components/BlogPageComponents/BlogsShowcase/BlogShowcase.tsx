import React from "react";
import "./Showcase.css";
import Showcase from "../../Showcase/Showcase";

function BlogShowcase() {
  return (
    <>
      <Showcase backgroundImage={'/blogsBanner.jpg'} title="Our" highlights="Blogs" paragraph="One-stop solution for your IT needs, Order any service, anytime.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Veniam quas nihil consequuntur consequatur deleniti quae quos
      neque ullam natus tempora."/>
    </>
  );
}

export default BlogShowcase;
