import BannerImg from "../assets/banner-img.png";
import Users from "./Users";

const Banner = () => {
  return (
    <div className="relative min-h-[600px] text-center pt-24 pb-12 lg:pt-32 lg:pb-0 lg:text-left ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* left */}
          <div>
            <h1
              data-aos="fade-down"
              data-aos-delay="100"
              className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug"
            >
              Let's Explore <br /> Three-Dimensional Visually.
            </h1>
            <p
              className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0 "
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              laboriosam et pariatur adipisci ad placeat.
            </p>
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="flex items-center justify-around gap-4 max-w-[320px] mx-auto lg:max-w-none lg:justify-start lg:mx-0 lg:gap-8 mb-12 "
            >
              <button className="btn">Get it now</button>
              <a
                href="#"
                className="border-b-2 border-transparent hover:border-white transition  ease-out"
              >
                Explore Device
              </a>
            </div>
            <Users />
          </div>
          {/* right */}
          <div  data-aos='fade-up'
               data-aos-delay='400'>
            <img src={BannerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
