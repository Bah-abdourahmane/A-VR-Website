import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="mb-64 lg:mb-48">
      <div className="container mx-auto">
        <div className="bg-purple-400/10 max-h-[400px] p-5 md:p-12 rounded-lg ">
          <div className="text-center">
            <h2
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-offset="300"
              className="text-3xl font-bold mb-6"
            >
              What our clients say
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-offset="300"
              className="max-w-2xl mx-auto mb-12 lg:mb-24"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam provident velit incidunt maiores distinctio fuga culpa
              minima eius, asperiores commodi!
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="300"
            className="w-full"
          >
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
