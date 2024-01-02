import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Debts() {
  const history = useNavigate();

  const data = [
    {
      id: 1,
      title: "Mobile",
      description: "The debt is of",
      cost: "$34.00",
      payment: false,
    },
    {
      id: 2,
      title: "Housing Services",
      description: "The debt is of",
      cost: "$103.59",
      payment: true,
    },
    {
      id: 3,
      title: "Utility Payment",
      description: "The debt is of",
      cost: "$12.00",
      payment: false,
    },
    {
      id: 4,
      title: "Traffic Lines",
      description: "The debt is of",
      cost: "$442.65",
      payment: false,
    },
    {
      id: 5,
      title: "Internet and TV",
      description: "The debt is of",
      cost: "$1,690.57",
      payment: false,
    },
  ];

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
          Debts
        </h1>
      </div>

      {/* Transactions */}
      <div className="border border-gray-600 shadow shadow-gray-500 rounded-2xl p-4 mt-3 font-semibold">
        <h1 className="text-white font-poppins text-lg">Recent </h1>
        {/* Transaction list*/}
        {data.map((item) => (
          <div className="flex justify-between px-4 py-2 ">
            <div className="flex">
              <img
                className="w-16"
                src="https://static.vecteezy.com/system/resources/thumbnails/010/063/543/small/music-festival-colorful-icon-with-notes-and-the-inscription-music-3d-render-png.png"
              />
              <div className="mt-1 ml-2">
                <h1 className="text-white text-lg">{item.title}</h1>
                <h3 className="text-dimWhite ">
                  {item.description} <b>{item.cost}</b>
                </h3>
              </div>
            </div>
            <div>
              <button
                type="button"
                disabled={item.payment}
                className="border border-blue-500 px-4 py-2 rounded-lg font-poppins text-blue-400 hover:text-white hover:bg-blue-700 hover:border-none cursor-pointer"
              >
                Pay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Debts;
