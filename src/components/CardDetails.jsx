import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CardDetails() {
  const [isCardInFront, setIsCardInFront] = useState(true);
  const history = useNavigate();

  return (
    <div className="bg-blueBack  py-4 px-5">
      <div className="flex space-x-3">
        <AiOutlineArrowLeft
          color="white"
          size={35}
          className="cursor-pointer mt-2"
          onClick={() => {
            history("/dashboard");
          }}
        />
        <h1 className="text-5xl text-white font-poppins font-semibold">
          Salary Card
        </h1>
      </div>

      <div className="mt-5">
        <h3 className="text-lg text-dimWhite font-poppins font-semibold">
          Your Balance
        </h3>
        <h6 className="text-4xl text-white font-poppins font-semibold">
          $2,456.00
        </h6>
      </div>

      <div className="flex justify-center">
        <div
          className={`sm:w-[40%] bg-card-background-gradient w-full rounded-2xl ${
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
      </div>

      {/* Transactions */}
      <div className="border border-gray-600 shadow shadow-gray-500 rounded-2xl p-4 mt-3 font-semibold">
        <h1 className="text-dimWhite font-poppins text-xl">
          Today's Transaction
        </h1>
        {/* Transaction list*/}
        <div className="flex justify-between px-4 py-2 ">
          <div className="flex">
            <img
              className="w-16"
              src="https://static.vecteezy.com/system/resources/thumbnails/010/063/543/small/music-festival-colorful-icon-with-notes-and-the-inscription-music-3d-render-png.png"
            />
            <div className="mt-1 ml-2">
              <h1 className="text-white text-lg">Apple Music</h1>
              <h3 className="text-dimWhite">Online</h3>
            </div>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold mt-2">-$365</h1>
          </div>
        </div>

        <div className="flex justify-between px-4 py-2 ">
          <div className="flex">
            <img
              className="w-16"
              src="https://static.vecteezy.com/system/resources/thumbnails/010/063/543/small/music-festival-colorful-icon-with-notes-and-the-inscription-music-3d-render-png.png"
            />
            <div className="mt-1 ml-2">
              <h1 className="text-white text-lg ">Apple Music</h1>
              <h3 className="text-dimWhite">Refund</h3>
            </div>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold mt-2">+$365</h1>
          </div>
        </div>

        <div className="flex justify-between px-4 py-2 ">
          <div className="flex">
            <img
              className="w-16"
              src="https://static.vecteezy.com/system/resources/thumbnails/010/063/543/small/music-festival-colorful-icon-with-notes-and-the-inscription-music-3d-render-png.png"
            />
            <div className="mt-1 ml-2">
              <h1 className="text-white text-lg">Apple Music</h1>
              <h3 className="text-dimWhite">Online</h3>
            </div>
          </div>
          <div>
            <h1 className="text-white text-xl font-semibold mt-2">-$365</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
