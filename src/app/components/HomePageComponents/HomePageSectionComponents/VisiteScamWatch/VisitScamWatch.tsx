import React from "react";
import "./VisitScamWatch.css";
import Link from "next/link";

function VisitScamWatch() {
  return (
    <>
      <div className="visit_scam_watch_section flex items-center justify-center py-14 lg:py-28 xl:py-44">
        <div className="container mx-auto">
          <div className="scam_watch_content_container text-center w-full lg:w-120 mx-auto text-white">
            <div className="">
              <h1 className="text-3xl lg:text-5xl font-bold  mb-7">
                Visit Scam Watch
              </h1>
              <p>
                Stay informed and protect yourself from scams. Explore
                resources, tips, and the latest updates to safeguard your
                personal and financial information.
              </p>

              <Link href="/scam-alert">
                <button className="bg-white font-semibold text-primaryColor py-3 px-10 rounded-md mt-7">
                  Visit Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisitScamWatch;
