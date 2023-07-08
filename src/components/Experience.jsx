import Img1 from "../assets/exp-img1.png";
import Img2 from "../assets/exp-img2.png";

const Experience = () => {
  return (
    <div className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] gap-8 lg:space-x-20 lg:flex-row">
          <div className="flex flex-1 gap-6 items-center lg:gap-12">
            <div
              data-aos="fade-down"
              data-aos-offset="400"
              className="self-start"
            >
              <img src={Img1} alt="" className="" />
            </div>
            <div data-aos="fade-up" className="self-end">
              <img src={Img2} alt="" className="" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="400"
            className="flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0 gap-6"
          >
            <h2 className="text-3xl font-bold mb-3">
              New Experience In Playing Games
            </h2>
            <p className="font-secondary mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              quod esse perferendis officiis natus odit sint accusamus
              voluptatem cumque voluptatum.
            </p>
            <button className="btn">Get it now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
