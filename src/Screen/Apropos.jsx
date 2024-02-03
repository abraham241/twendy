import React from "react";
import NavBar from "../Components/NavBar";
import Hirosection from "../Components/Hirosection";
import Footer from "../Components/Footer";
import Temoin from "../assets/images/Temoin.jpg";
import temoin2 from "../assets/images/temoin2.jpg";
import temoin3 from "../assets/images/temoin3.jpg";
import team2 from "../assets/images/team2.jpg";
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
        <div className="w-full sm:w-full lg:w-1/2 xl:w-1/2">
          <h1 className="text-5xl font-bold  pb-5">Qui sommes nous ?</h1>
          <div className="text-black text-xl">
            <p>
              <span className="font-bold">Notre Mission:</span> À Twendyane,
              notre mission est de révolutionner la manière dont les habitants
              de Libreville se déplacent au quotidien. Nous nous engageons à
              offrir une solution de transport innovante, pratique et
              accessible, transformant ainsi la mobilité urbaine.
            </p>
            <br />
            <p className="">
              <span className="font-bold">Notre Vision:</span> Nous imaginons
              une ville où se déplacer n'est plus une source de préoccupation,
              mais plutôt une expérience fluide et agréable. Avec Twendyane,
              nous aspirons à créer des liens plus forts entre les individus et
              les opportunités en offrant un moyen de transport fiable et
              moderne.
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
          <div className="py-5 flex-col flex justify-between  md:flex-row lg:flex-row xl:flex-row">
            <div className="flex flex-col justify-center items-center rounded-lg bg-neutral-200 p-5  w-80">
              <img src={Temoin} alt="" className="h-20 w-20 rounded-full" />
              <p className="font-bold ">MANFOUBI YANN</p>
              <span>Chauffeur de Bus</span>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg bg-neutral-200 p-5  w-80">
              <img src={temoin2} alt="" className="h-20 w-20 rounded-full" />
              <p className="font-bold ">MOUSSA DYABI</p>
              <span>Chauffeur de Bus</span>
            </div>
            <div className="flex flex-col justify-center items-center rounded-lg bg-neutral-200 p-5  w-80">
              <img src={temoin3} alt="" className="h-20 w-20 rounded-full" />
              <p className="font-bold ">NDONG YOLANDE</p>
              <span>Particulière</span>
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
        <div className="flex-col flex justify-between sm:flex-col md:flex-row lg:flex-row xl:flex-row">
          <img src={ecole241} alt="" className="md:h-36"/>
          <img src={ecoleB2} alt="" className="md:h-36"/>
          <img src={ecole241} alt="" className="md:h-36"/>
          <img src={ecoleB2} alt="" className="md:h-36"/>
        </div>
      </div>
      {/* =================== Fin de la section ils nous soutiennent =============== */}
      {/* footer */}
      <Footer />
    </div>
  );
}
