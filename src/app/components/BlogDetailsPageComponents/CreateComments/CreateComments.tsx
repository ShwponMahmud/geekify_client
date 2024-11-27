import React from "react";

function CreateComments() {
  return (
    <>
      <div className="create_comments_section mt-10 border border-borderColor rounded-[10px] w-[800px]">
        <div className="create_comments_container p-10 text-deepGrayColor">
          <h2 className="text-2xl font-semibold mb-5">Leave A Reply</h2>
          <small>
            Your email address will not be published. Required fields are marked
            *
          </small>

          <div className="create_comments_form mt-5">
            <form action="">
              <div>
                <label htmlFor="">Comment</label>
                <br />
                <textarea
                  className="border w-[100%] rounded-[10px] outline-none p-3"
                  placeholder="What do you think about this article?"
                  name=""
                  id=""
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-3">
                <div>
                  <label htmlFor="">Your Name</label>
                  <br />
                  <input
                    className="border w-[100%] p-[10px] rounded-[6px] outline-none"
                    placeholder="Full Name"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="">Email</label>
                  <br />
                  <input
                    className="border w-[100%] p-[10px] rounded-[6px] outline-none"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
              </div>

              <button className="border border-primaryColor bg-primaryColor text-white hover:text-primaryColor hover:bg-white transition-[.5s] py-[10px] px-4 rounded-[7px] mt-5">
                Post Comments
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateComments;
