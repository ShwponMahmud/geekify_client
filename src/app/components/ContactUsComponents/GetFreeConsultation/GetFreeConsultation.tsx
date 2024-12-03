import React from "react";

function GetFreeConsultation() {
  return (
    <>
      <div className="get_free_consultation_section">
        <h2 className="text-3xl font-bold text-primaryColor mb-5 text-center md:text-left">
          Get a Free Consultation
        </h2>
        <p className="text-deepGrayColor mb-5 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia
          a incidunt dignissimos quam eius asperiores, consequuntur omnis sit
          beatae iure perferendis ipsam ex, vitae ducimus officiis facilis
          veritatis sunt.
        </p>

        <div className="get_consultation_form border rounded-[10px] mt-10 py-5 lg:py-12 px-5 lg:px-10 hover:shadow-hoverBoxShadow transition-[.5s]">
          <form action="" className="">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="">Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Name"
                  className="border w-[100%] p-[10px] rounded-[6px] outline-none"
                />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <br />
                <input
                  type="text"
                  placeholder="Email"
                  className="border w-[100%] p-[10px] rounded-[6px] outline-none"
                />
              </div>
              <div>
                <label htmlFor="">Phone</label>
                <br />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border w-[100%] p-[10px] rounded-[6px] outline-none"
                />
              </div>
              <div>
                <label htmlFor="">Service</label>
                <br />
                <input
                  type="text"
                  placeholder="Service"
                  className="border w-[100%] p-[10px] rounded-[6px] outline-none"
                />
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="">Message</label>
              <br />
              <textarea
                placeholder="Message"
                className="border w-[100%] p-[10px] rounded-[6px] outline-none"
              />
            </div>
            <button className="border border-primaryColor bg-primaryColor text-white hover:text-primaryColor hover:bg-white transition-[.5s] w-[100%] py-[12px] px-7 rounded-[30px] mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default GetFreeConsultation;
