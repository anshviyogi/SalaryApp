import Cards from "./Cards";
import Navbar from "./Navbar";

function BankDashboard() {
  return (
    <div className="bg-blueBack sm:h-screen py-4 px-5">
      <Navbar isDashboardLogin={true} />
      <h1 className="text-5xl text-white font-poppins font-semibold">
        Bank Cards
      </h1>

      {/* Top Card Details*/}
      <div className="sm:flex sm:flex-row flex-col space-x-5 mt-5">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default BankDashboard;
