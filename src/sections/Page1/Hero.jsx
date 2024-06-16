import React from "react";
import Button from "../../components/Button";
import download from "../../assets/icons/download.svg";
import header from "../../assets/images/header.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className=" relative w-full sm:flex xl:flex-col sm:flex-row min-h-screen gap-10 max-container"
    >
      <div className="absolute max-xl:padding-x xl:mt-[270px] sm:w-full xl:w-[95%] sm:h-auto xl:h-[600px] xl:rounded-[24px] bg-green sm:rounded-none pt-20 xl:pt-0 ">
        <div className=" flex flex-col xl:items-start xl:w-[55%] pt-28 sm:pl-10">
          <div className="text-white">
            <h1 className="font-sentient md:text-[48px] text-[40px] font-medium sm:leading-[57.2px] tracking-[0.165rem] pb-5 xl:pt-12">
              Nigeria Diaspora Fund
            </h1>
            <p className="font-sans font-normal sm:text-xl sm:leading-7 sm:w-[87%]">
              Welcome to the Nigerian Diaspora Fund, a platform dedicated to
              enabling Nigerians living abroad to contribute to the progress of
              their home country. Explore how you can invest in Nigeria's future
              today
            </p>
          </div>
          <div className="flex items-center gap-3 pt-10 xl:gap-5 xl:pt-20">
            <Button label="Contact Us" />
            <div className="flex items-center gap-2">
              <h1 className="text-button-green text-sm sm:text-base">
                Download Requirement
              </h1>
              <a href="/">
                <img
                  src={download}
                  alt="download"
                  className="w-6 h-6 sm:w-auto sm:h-auto"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full py-20 xl:py-0">
          <img
            src={header}
            alt="header"
            width={523.73}
            height={832.37}
            className="xl:absolute xl:top-[-120px] xl:left-[670px] rounded-[24px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
