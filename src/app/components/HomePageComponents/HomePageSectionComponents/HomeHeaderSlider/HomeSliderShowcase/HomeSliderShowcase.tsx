import QuickLink from "../QuickLink/QuickLink";
import Slider from "../Slider/Slider";
import "./HomeSliderShowcase.css";

const HomeSliderShowcase: React.FC = () => {
  return (
    <>
      <div className="showcase_section">
        <div className="container mx-auto grid grid-cols-2 gap-4 ">
          <div className="showcase_section_content relative mt-40 ">
            <div>
              <h1 className="title text-7xl font-bold ">
                You <span className="highlight_title"> point</span> it
                <br />
                We <span className="highlight_title">fix</span> it
              </h1>
              <p className="mt-8 ">
                One-stop solution for your IT needs,
                <br />
                Order any service, anytime.
              </p>

              <div className="btn_container mt-5">
                <button className="bookNowBtn">Book Now</button>
              </div>
            </div>
          </div>
          <div className="showcase_slider_container  overflow-hidden">
            <Slider />
          </div>
        </div>
      </div>

      <QuickLink />
    </>
  );
};

export default HomeSliderShowcase;
