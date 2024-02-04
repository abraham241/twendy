import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import car from "../assets/images/car.jpg";
// import coaster from "../assets/images/coaster.jpg"

export default function Service() {
  return (
    <>
      <NavBar />
      {/* ================ service ================= */}
      <div>
        <h1 className="text-5xl font-bold text-center py-5">Nos Services</h1>
      </div>

      <div className="flex-col flex sm:flex-col md:flex-row lg: gap-10 px-10">
        <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 hover:shadow-2xl ">
          <div className="p-5 border-2 border-red-600">
            <img src={car} alt="" />
          </div>
          <div className="bg-red-500 p-5">
            <h1 className="text-3xl  font-serif py-2 text-center text-white ">
              Transport Urbain
            </h1>
            <ul className="text-xl">
              <li>- Transport scolaire </li>
              <li>- Transport d'entreprise</li>
              <li>- Transport inter-communal</li>
              <li>- Transport des particuliers</li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div className="p-5 border-2 border-black">
            <img src={car} alt="" />
          </div>
          <div className="bg-black text-white p-5">
            <h1 className="text-3xl font-serif py-2 text-center text-red-600">
              Location de Bus
            </h1>
            <ul className="text-xl ">
              <li>- Bus de 18 ou 32 places disponible </li>
              <li>- Bus pour des transports de cérémonies </li>
              <li>- Bus des déplacements associatifs</li>
              <li>- Bus pour des découvertes touristique</li>
            </ul>
          </div>
        </div>
      </div>
      {/* ================ service ================= */}

      {/* ============================== */}
      <div className="py-8 ">
        <h1 className="text-5xl font-bold text-center">Twendyane en vidéo</h1>
        <div className="flex justify-center items-center py-5">
          <div className="bg-neutral-100 w-5/6 h-96"></div>
        </div>
      </div>
      {/* ============================== */}

      <Footer />
    </>
  );
}
