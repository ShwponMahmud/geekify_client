import Image from "next/image";
import "./CustomerSpeakForUs.css";
import RatingCard from "./RatingCard/RatingCard";


function CustomerSpeakForUs() {

  return (
    <>
      <div className="customer_speak_for_us_section">
        <div className="container mx-auto">
          <div className="w-full lg:w-[60%] mx-auto text-center">
            <h1 className="text-4xl font-bold mb-5">Our customer speaks for us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem aut rerum tempore temporibus aspernatur nihil ad,
              delectus enim, error quos consequuntur rem officia assumenda
              repellat!
            </p>
          </div>
          <div className="customer_speak_for_us_content_container my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mt-16 md:mt-20 lg:mt-28">
            <div className="customer_speak_content_card mb-10">
              <div className="customer_avatar">
                <Image
                  src="/customerImg.png"
                  alt="customer"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>

              <div className="customer_name_title">
                <h4 className="text-xl font-semibold">Customer Name</h4>
                <p>Customer Title</p>
              </div>
              <div className="customer_message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                eos itaque natus blanditiis. Cumque officiis beatae non
                dignissimos, distinctio esse!
              </div>

              <RatingCard/>
            </div>
            <div className="customer_speak_content_card mb-10">
              <div className="customer_avatar">
                <Image
                  src="/customerImg.png"
                  alt="customer"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>

              <div className="customer_name_title">
                <h4 className="text-xl font-semibold">Customer Name</h4>
                <p>Customer Title</p>
              </div>
              <div className="customer_message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                eos itaque natus blanditiis. Cumque officiis beatae non
                dignissimos, distinctio esse!
              </div>

              <RatingCard/>
            </div>
            <div className="customer_speak_content_card mb-10">
              <div className="customer_avatar">
                <Image
                  src="/customerImg.png"
                  alt="customer"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>

              <div className="customer_name_title">
                <h4 className="text-xl font-semibold">Customer Name</h4>
                <p>Customer Title</p>
              </div>
              <div className="customer_message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                eos itaque natus blanditiis. Cumque officiis beatae non
                dignissimos, distinctio esse!
              </div>

              <RatingCard/>
            </div>
            <div className="customer_speak_content_card mb-10">
              <div className="customer_avatar">
                <Image
                  src="/customerImg.png"
                  alt="customer"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>

              <div className="customer_name_title">
                <h4 className="text-xl font-semibold">Customer Name</h4>
                <p>Customer Title</p>
              </div>
              <div className="customer_message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                eos itaque natus blanditiis. Cumque officiis beatae non
                dignissimos, distinctio esse!
              </div>

              <RatingCard/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerSpeakForUs;
