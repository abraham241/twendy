import React from "react";
import NavBar from "../Components/NavBar";
import Hirosection from "../Components/Hirosection";
import Footer from "../Components/Footer";
// import nous from "../assets/images/nous.png";
import chefesse from "../assets/images/chefesse.jpg";
import team2 from "../assets/images/team2.jpg"
import ecoleB2 from "../assets/images/ecoleB2.png";
import ecole241 from "../assets/images/ecole241.png";

export default function Apropos() {
  return (
    <div>
      {/* navBar */}
      <NavBar />
      {/* hiro section */}
      <Hirosection />

      {/* =================== section qui sommes nous =============== */}
      <div className="flex flex-col gap-5 sm:flex-col md:flex-col lg:flex-row xl:flex-row py-10 px-10">
        <div className="w-full sm:w-full lg:w-1/2 xl:w-1/2 pt-10 ">
          <h1 className="text-5xl font-bold  pb-5">Qui sommes nous ?</h1>
          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices ullamcorper imperdiet. Sed vehicula vestibulum sapien, in
              commodo eros mattis ut. Ut maximus mollis tortor sed laoreet.
              Mauris ac convallis nunc, sit amet interdum turpis. Sed iaculis
              erat vel sem lobortis mollis. Suspendisse
            </p>{" "}
            <br />
            <p className="pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices ullamcorper imperdiet. Sed vehicula vestibulum sapien, in
              commodo eros mattis ut. Ut maximus mollis tortor sed laoreet.
              Mauris ac convallis nunc Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Phasellus ultrices ullamcorper imperdiet. Sed
              vehicula vestibulum sapien, in commodo eros mattis ut. Ut maximus
              mollis tortor sed laoreet. Mauris ac convallis nunc
            </p>
          </div>
        </div>
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <img src={team2} alt="" />
        </div>
      </div>
      {/* =================== Fin de la section qui sommes nous =============== */}

      {/* =================== la section ils nous font confience =============== */}
      <div className="py-5">
        <div>
          <h1 className="text-5xl font-bold text-center md:text-center py-5 ">
            Ils nous font confiance
          </h1>
        </div>
        <div className="px-10">
          <div className="py-5 flex-col flex justify-between md:flex-row lg:flex-row xl:flex-row">
            <div className="flex flex-col justify-center items-center bg-neutral-200 p-3  w-96">
              <img src={chefesse} alt="" className="h-20 w-20 rounded-full" />
              <p className="font-bold ">MANFOUBI YANN</p>
              <span>Chauffeur de Bus</span>
            </div>
            <div className="flex flex-col justify-center items-center bg-neutral-200 p-3  w-96">
              <img src={chefesse} alt="" className="h-20 w-20 rounded-full" />
              <p className="font-bold ">MANFOUBI YANN</p>
              <span>Chauffeur de Bus</span>
            </div>
            <div className="flex flex-col justify-center items-center bg-neutral-200 p-3  w-96">
              <img src={chefesse} alt="" className="h-20 w-20 rounded-full" />
              <p className="font-bold ">MANFOUBI YANN</p>
              <span>Particulier</span>
            </div>
          </div>
          <div className="flex justify-center items-center py-3">
            <button className="h-16 bg-red-600 rounded-xl text-white font-bold p-3">
              Devenez partenaire
            </button>
          </div>
        </div>
      </div>
      {/* =================== Fin de la section ils nous font confiance =============== */}

      {/* =================== Fin de la section ils nous soutiennent =============== */}
      <div className="py-5 px-10">
        <h1 className="font-bold text-5xl text-center py-5">
          Ils nous soutienne
        </h1>
        <div className="flex-col flex justify-between md:flex-row lg:flex-row xl:flex-row">
          <img src={ecole241} alt="" className="" />
          <img src={ecoleB2} alt="" className="" />
          <img src={ecole241} alt="" className="" />
          <img src={ecoleB2} alt="" className="" />
        </div>
      </div>
      {/* =================== Fin de la section ils nous soutiennent =============== */}
      {/* footer */}
      <Footer />
    </div>
  );
}
