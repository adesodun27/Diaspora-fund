import React from "react";
import Button from "../../components/Button";
import frame2 from "../../assets/images/frame3.svg";
import frame3 from "../../assets/images/frame2.svg";
import frame1 from "../../assets/images/frame1.svg";
import top from "../../assets/images/top.svg";
import bottom from "../../assets/images/bottom.svg";

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen max-container bg-green">
      <div className="max-xl:padding-x">
        <div className="pt-28">
          <div className="text-white flex xl:flex-row flex-col items-center padding-x xl:pt-28 pt-16 gap-6">
            <h1 className="font-sentient xl:text-[52px] text-[36px] font-medium leading-[57.2px] xl:w-1/2">
              About the Nigerian Diaspora Fund
            </h1>
            <p className="font-sans font-normal xl:text-xl text-lg xl:w-1/2 leading-6">
              Nigeria has a significant diaspora population with over 17million
              Nigerians spread across the globe. These Nigerians experience
              challenges with accessing and managing financial investments in
              Nigeria.
            </p>
          </div>
        </div>

        <div className="relative padding-t">
          <div className="flex xl:flex-row flex-col  gap-5 items-center justify-center">
            <img
              src={frame1}
              alt=""
              className="xl:w-[737.27px] xl:h-[551.45px] hidden xl:block"
            />
            <img
              src={frame3}
              alt=""
              className="xl:w-[737.27px] xl:h-[551.08px] w-full "
            />
            <img
              src={frame2}
              alt=""
              className="xl:w-[737.27px] xl:h-[551.45px] hidden xl:block"
            />
          </div>
          <div className="absolute top-[72px] w-full  xl:block hidden">
            <img src={top} alt="" />
          </div>
          <div className="relative w-full bottom-[48px]  xl:block hidden">
            <img src={bottom} alt="" />
          </div>
        </div>

        <div className="text-white flex items-center xl:px-[250px] px-2 padding-b">
          <p className="font-sans xl:text-xl text-sm xl:font-[500] font-[200] flex items-center">
            This Fund is a way of encouraging remittances, attracting
            investments and facilitating philanthropic endeavors aimed at
            supporting various sectors such as infrastructure, healthcare,
            education and entrepreneurship in Nigeria. Additionally, the launch
            of The Diaspora Fund is part of broader efforts to strengthen ties
            between Nigeria and its diaspora, promote national development, and
            harness the potential of The Diaspora Community as agents of change
            and development for Nigeria. The National Launch of The Diaspora
            Fund will serve as an opportunity to raise interest in and awareness
            of the Fund; towards mobilizing capital investment from the Diaspora
            Community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
