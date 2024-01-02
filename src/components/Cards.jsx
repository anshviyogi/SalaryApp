import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";

function Cards() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCardInFront, setIsCardInFront] = useState(true);
  const history = useNavigate();

  return (
    <>
      <div
        className={`sm:w-[40%] bg-card-background-gradient w-full rounded-2xl ${
          true ? "py-3 px-8" : ""
        } mt-5 cursor-pointer hover:animate-bounce`}
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            history("/cardDetails");
          }, 3000);
        }}
      >
        {true && (
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
        <LoadingIndicator isOpen={isLoading} />
      </div>
    </>
  );
}

export default Cards;
