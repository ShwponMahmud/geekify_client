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
              <h1 className="text-4xl font-bold  mb-7">Visit Scam Watch</h1>
              <p>
                We provide services on various scams related to digital devices.
                Our team of experts is dedicated to keeping you informed about
                the latest scam tactics and how to avoid them. Stay vigilant and
                protect your digital assets with our comprehensive scam alerts.
                Trust us to help you navigate the digital landscape safely and
                securely.
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
