import React from "react";
import frame5 from "../../assets/images/Frame5.svg";

const Frame1 = () => {
  return (
    <section className="relative w-full min-h-screen gap-10 max-container">
      <div className="sm:w-[95%] mt-[270px] flex xl:flex-row flex-col justify-center items-center gap-[72px] pt-52 xl:pt-0">
        <div className="">
          <img src={frame5} alt="image" width={608} height={600} />
        </div>

        <div className="xl:w-[50%] sm:w-full font-sans text-black md:text-[32px] text-[24px] leading-[38.4px]">
          <p className="sm:font-[500]">
            With over 17 million Nigerians spread across the globe, the{" "}
            <span className="font-[600]">Nigeria Diaspora Fund</span> aims to
            harness the potential of the diaspora community as agents of change
            and development for Nigeria. Join us in strengthening ties and
            promoting national development
          </p>
        </div>
      </div>
    </section>
  );
};

export default Frame1;
