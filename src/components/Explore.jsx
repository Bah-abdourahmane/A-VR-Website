import React from "react";

const Explore = () => {
  return (
    <div className="min-h-[400px]  mb-16 lg:mb-4 ">
      <div className="container mx-auto h-full">
        <div className="w-full h-full bg-explore bg-no-repeat bg-cover p-8 lg:p-14 flex flex-col items-start justify-center">
          <h3
            data-aos="fade-right"
            data-aos-offset="900"
            className="font-semibold mb-8 text-3xl"
          >
            Explore product in new way
          </h3>
          <p
            data-aos="fade-right"
            data-aos-offset="1100"
            className="max-w-xs mb-12 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            molestiae aperiam, eos eum necessitatibus sequi consequuntur soluta
            tempore cumque. Et?
          </p>
          <form
            data-aos="fade-up"
            data-aos-offset="300"
            className="flex flex-col w-full gap-4 lg:flex-row"
          >
            <input
              type="text"
              placeholder="Your email"
              className="bg-gradient-to-t from-[#341d38] to-[#271223] h-12 px-4 outline-none rounded-md "
            />
            <button className="btn">Start</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Explore;
