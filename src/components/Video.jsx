import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../modalVideo.scss";
import { BsPlayCircleFill } from "react-icons/bs";
const Video = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div className="bg-[#534686]/60 py-6 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:justify-between text-center lg:flex-row">
          <h3
            data-aos="fade-right"
            data-aos-offset="300"
            className="text-2xl font-semibold mb-8 lg:mb-0"
          >
            Awesome experiences with virtual reality world{" "}
          </h3>
          <ModalVideo
            channel="youtube"
            youtube={{ autoplay: 1, mute: 1 }}
            isOpen={isOpen}
            videoId="DZlQU9iAICU"
            onClose={() => setIsopen(false)}
          />
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            className="bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center "
          >
            <div onClick={() => setIsopen(!isOpen)}>
              <BsPlayCircleFill className="text-4xl text-white/40 hover:text-white hover:scale-110 transition cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
