import React from "react";
import Headset1 from "../assets/headset-1.png";
import Headset2 from "../assets/headset-2.png";
import Headset3 from "../assets/headset-3.png";
import Headset4 from "../assets/headset-4.png";
const Headsets = () => {
  return (
    <div className="py-12 lg:py-24">
      <div className="container mx-auto">
        <h2
          data-aos="fade-down"
          data-aos-offset="300"
          className="text-3xl font-bold mb-6"
        >
          Mixed Reality Headsests
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-9">
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-offset="300"
            className="relative"
          >
            <img src={Headset1} alt="" className="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-w-[150px] p-6 ">
              <h3 className="font-semibold text-xl mb-2">Metaverse</h3>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis rem ea unde aspernatur necessitatibus sit!
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-offset="300"
            className="relative"
          >
            <img src={Headset2} alt="" className="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-w-[150px] p-6 ">
              <h3 className="font-semibold text-xl mb-2">AIoT</h3>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis rem ea unde aspernatur necessitatibus sit!
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="900"
            data-aos-offset="300"
            className="relative"
          >
            <img src={Headset3} alt="" className="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-w-[150px] p-6 ">
              <h3 className="font-semibold text-xl mb-2">Hololens</h3>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis rem ea unde aspernatur necessitatibus sit!
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="1100"
            data-aos-offset="300"
            className="relative"
          >
            <img src={Headset4} alt="" className="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-w-[150px] p-6 ">
              <h3 className="font-semibold text-xl mb-2">TPCASTT</h3>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Reiciendis rem ea unde aspernatur necessitatibus sit!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headsets;
