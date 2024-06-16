import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utills/accordion";

const Frame3 = () => {
  return (
    <section id="Frame3" className="w-full max-container">
      <div className="flex flex-col items-center pt-[400px] md:pt-0">
        <div className="text-black font-sentient font-bold xl:text-[48px] text-[40px] leading-[57.6px] text-center mb-12">
          <h1>Frequently Asked Questions</h1>
        </div>

        <div className="xl:w-[70%] w-full ">
          <Accordion
            className="accordion border-0"
            allowMultipleExpanded={false}
            allowZeroExpanded={true}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItem
                className="accordionItem border-t border-primary" // Add border-t for top border
                key={i}
                uuid={i}
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="accordionButton pb-12 pt-4">
                    {" "}
                    {/* Add py-4 for padding */}
                    <AccordionItemState>
                      {({ expanded }) => (
                        <div className="flex flex-row items-center justify-between">
                          <span
                            className={`w-[900px] font-sentient font-[500] text-[24px] text-primary ${
                              expanded ? "expanded" : "collapsed"
                            }`}
                          >
                            {item.heading}
                          </span>
                          <div className="flex flex-row justify-end icon text-primary">
                            <MdOutlineArrowDropDown size={20} />
                          </div>
                        </div>
                      )}
                    </AccordionItemState>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <div className=" border-button-green border-[1px] p-4 w-full text-center">
            <button className="font-sans font-[500] text-xl text-button-green">
              See all frequently asked questions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frame3;
