import React from "react";

const Frame2 = () => {
  return (
    <section className="relative w-full min-h-screen gap-10 max-container flex flex-col items-center text-black">
      <div className=" absolute xl:w-[85%] w-[100%] flex flex-col items-center text-black">
        <h1 className="font-sentient font-bold xl:text-[40px] text-[28px] text-center mb-10">
          Public Notice: Extension of Deadline for Expression of Interest for
          the Nigeria Diaspora Fund
        </h1>
        <div className="font-sans mb-10 xl:w-[85%] w-[100%] flex flex-col gap-5 font-[500] text-[20px]">
          <p>
            The Federal Ministry of Industry, Trade, and Investment wishes to
            inform all interested parties that the deadline for the submission
            of Expressions of Interest (EOI) for the Nigeria Diaspora Fund has
            been extended.
          </p>
          <p>
            The new submission deadline is <span className="font-[600]">May 13, 2024</span>. This
            extension is intended to accommodate stakeholders who require more
            time to prepare their applications in accordance with the guidelines
            provided for the $10 billion Nigeria Diaspora Fund.
          </p>
          <p>
            The EOI is open to Fund Managers interested in the development and
            establishment of a multisectoral, multilateral private sector-led
            investment fund. We encourage prospective applicants to use this
            additional time to finalise their submissions that meet the outlined
            criteria, ensuring comprehensive and competitive proposals.
          </p>
          <p>For further inquiries or additional information,</p>
          <button className="flex underline text-button-green items-start">
            View Public Notice
          </button>
        </div>
      </div>
    </section>
  );
};

export default Frame2;
