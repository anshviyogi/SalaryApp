import React, { useState } from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb:6" : "mb:0"
    } feature-card  `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt={icon} className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  const [isCardInFront, setIsCardInFront] = useState(true);
  return (
    <section id="features" className={layout.section}>
      <div
        className={`sm:w-[50%] bg-card-background-gradient w-full rounded-2xl ${
          isCardInFront ? "py-3 px-8" : ""
        } cursor-pointer`}
        onClick={() => {
          setIsCardInFront(!isCardInFront);
        }}
      >
        {/* Top Card Details*/}
        {isCardInFront && (
          <>
            <div className="flex">
              <h1 className="font-poppins font-semibold text-white text-[30px] leading-[23px] py-4">
                CB
              </h1>
              <span className="border border-white h-4 mt-5 ml-3"></span>
              <h3 className="font-poppins  text-dimWhite mt-4 ml-2">
                Universal Bank
              </h3>
            </div>

            {/* Sensors */}
            <div className="mt-3 justify-between flex">
              <div>
                <h1 className="bg-slate-50 w-14 h-10 rounded-lg "></h1>
              </div>
              <div>
                <img
                  className="w-10 mr-5"
                  src="https://png.pngtree.com/png-clipart/20230823/original/pngtree-smartwatch-nfc-payment-color-icon-picture-image_8208981.png"
                />
              </div>
            </div>

            {/* Card Numbers */}
            <div className="flex space-x-5 mt-3 font-poppins font-semibold xs:text-[25px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
              <h1>4812</h1>
              <h1>2345</h1>
              <h1>5698</h1>
              <h1>9898</h1>
            </div>

            <div className="flex justify-between">
              <h3 className="text-dimWhite">04/24</h3>
              <img
                className="w-14"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
              />
            </div>
          </>
        )}

        {!isCardInFront && (
          <>
            <div className="w-full bg-black h-16 mt-7"></div>
            <div className="w-[95%] bg-slate-300/80 rounded-lg h-14 mt-7 ml-4"></div>
          </>
        )}
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
