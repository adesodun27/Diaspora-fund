import React from "react";
import Button from "../../components/Button";

const Frame4 = () => {
  return (
    <section className="max-container w-full">
      <div className="flex xl:flex-row flex-col gap-16">
        <div className="xl:w-[45%] w-full bg-red flex flex-col gap-8">
          <div className="flex flex-col gap-2 border-b text-[#282943] pb-6">
            <h1 className="font-sentient text-[56px] text-primary font-medium leading-[73.6px]">
              Let's talk
            </h1>
            <p className="font-sans text-[24px] text-secondary font-[400] leading-[32.4px]">
              Discover how you can contribute financially through remittances to
              support Nigeria's development
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <div className="bg-button-green rounded-full p-2 ">
                <img
                  src="../src/assets/icons/Envelope.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <button>nigeriadiasporafund@fmiti.gov.ng</button>
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-button-green p-2 rounded-full">
                <img
                  src="../src/assets/icons/Phone.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <button>+234 806 591 4068</button>
                <button>+234 806 591 4068</button>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] w-full shadow-custom-light p-12 rounded-3xl">
          <form action="" className="flex flex-col gap-2">
            <label
              htmlFor=""
              className="font-sans font-[500] text-[16px] leading-[24px]"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="border-2 py-2 pl-2 rounded-xl"
            />
            <label
              htmlFor=""
              className="font-sans font-[500] text-[16px] leading-[24px]"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              className="border-2 py-2 pl-2 rounded-xl"
            />
            <label
              htmlFor=""
              className="font-sans font-[500] text-[16px] leading-[24px]"
            >
              Message
            </label>
            <textarea
              type="text"
              placeholder="I want to make enquiries..."
              className="border-2 py-2 pl-2 rounded-xl"
            />
          </form>
          <div className="pt-8">
            <button className="flex w-full py-3 justify-center items-center border font-sentient text-lg bg-button-green rounded text-white border-button-green">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame4;
