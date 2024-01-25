import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
// import Hirosection from "../Components/Hirosection";

export default function Prices() {
  return (
    <>
      {/* navbar */}
      <NavBar />

      {/* hirosection voir gabin pour le changement par fonction */}
      {/* <Hirosection/> */}
      <div>
        <div className="flex-col flex justify-center items-center bg-no-repeat bg-transparent bg-center bg-cover  bg-black h-[150px]  bg-[url('./assets/images/team1.jpg')] ;">
          <h1 className="text-white font-bold md:text-4xl text-xl">
            Nos tikets et prix
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-bold text-center py-5">
          Nos abonnements & Tarifs
        </h1>
      </div>
      {/* la grille des prix */}
      <div className="flex flex-col gap-5 px-10 py-10 ">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-10">
          <div className="border border-red-600 w-full sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 flex justify-center items-center bg-no-repeat bg-center bg-cover h-[180px]  bg-[url('./assets/images/team1.jpg')] ;">
            <h3 className="text-2xl font-bold text-white">
              Abonnement <br /> hebdomadaire
            </h3>
          </div>
          <div className="border border-black w-full sm:w-full md:w-4/6 lg:w-4/6 xl:w-4/6">
            <h2 className="font-extrabold text-xl text-center py-3">Tiket de bus pour la semaine</h2>
            <div className="w-full sm:w-full md:w-4/6 lg:w-4/6 xl:w-4/6   flex justify-around items-center gap-10 px-2">
              <div className="flex flex-col  md:flex-row gap-5 ">
                <div className="text-xl font-bold">
                  <h6>Modalités:</h6>
                  <h6>Durée:</h6>
                  <h6>Coût:</h6>
                  <h6>Lieux:</h6>
                </div>
                <div className="text-red-600 font-semibold leading-7 ">
                  <p>Aller - Retour</p>
                  <p>35 jours</p>
                  <p className="text-center bg-red-600 text-white font-bold">13.500 XAf</p>
                  <p>Carrefours</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h6 className="text-xl font-semibold">Horaire de Bus</h6>
                <h6>06h00 - 08h30</h6>
                <h6>13h30 - 14h00</h6>
                <h6>17h45 - 19h45</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-10">
          <div className="border border-red-600 w-full sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 flex justify-center items-center bg-no-repeat bg-center bg-cover h-[180px]  bg-[url('./assets/images/team1.jpg')] ;">
            <h3 className="text-xl font-bold">
              Abonnement <br /> Scolaire
            </h3>
          </div>
          <div className="border border-black w-full sm:w-full md:w-4/6 lg:w-4/6 xl:w-4/6">
            <h2 className="font-extrabold text-xl text-center">Pour les élèves & les étudiants</h2>
            <div className="w-full sm:w-full md:w-4/6 lg:w-4/6 xl:w-4/6   flex justify-around items-center gap-10 px-2">
              <div className="flex flex-col  md:flex-row gap-5">
                <div className="text-xl font-bold">
                  <h6>Modalités:</h6>
                  <h6>Durée:</h6>
                  <h6>Coût:</h6>
                  <h6>Lieux:</h6>
                </div>
                <div className="text-red-600 font-semibold leading-7 ">
                  <p>Aller - Retour</p>
                  <p>35 jours</p>
                  <p className="text-center bg-red-600 text-white font-bold">37.500XAf</p>
                  <p>Carrefours</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h6 className="text-xl font-semibold">Horaire de Bus</h6>
                <h6>06h30 - 06h45</h6>
                <h6>17h30 - 17h45</h6>
                <h6>18h30 - 18h45</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-10">
          <div className="border border-red-600 w-full sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 flex justify-center items-center bg-no-repeat bg-center bg-cover h-[150px]  bg-[url('./assets/images/team1.jpg')] ;">
            <h3 className="text-xl font-bold">
              Abonnement <br /> Mensuel
            </h3>
          </div>
          <div className="border border-black w-full sm:w-full md:w-4/6 lg:w-4/6 xl:w-4/6">
            <h2 className="font-extrabold text-xl text-center">Pour les élèves & les étudiants</h2>
            <div className="w-full sm:w-full md:w-4/6 lg:w-4/6 xl:w-4/6   flex justify-around items-center gap-10 px-2">
              <div className="flex flex-col  md:flex-row gap-5">
                <div className="text-xl font-bold">
                  <h6>Modalités:</h6>
                  <h6>Durée:</h6>
                  <h6>Coût:</h6>
                  <h6>Lieux:</h6>
                </div>
                <div className="text-red-600 font-semibold leading-7 ">
                  <p>Aller - Retour</p>
                  <p>35 jours</p>
                  <p className="text-center bg-red-600 text-white font-bold">37500f</p>
                  <p>Carrefours</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h6 className="text-xl font-semibold">Horaire de Bus</h6>
                <h6>06h30 - 06h45</h6>
                <h6>17h30 - 17h45</h6>
                <h6>18h30 - 18h45</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-10">
          <div className="border border-red-600 w-full sm:w-full md:w-2/6 lg:w-2/6 xl:w-2/6 flex justify-center items-center bg-no-repeat bg-center bg-cover h-[150px]  bg-[url('./assets/images/team1.jpg')] ;">
            <h3 className="text-xl font-bold">
              Abonnement <br /> Mensuel
            </h3>
          </div>
          <div className="border border-black w-full sm:w-full md:w-4/6 lg:w-4/6 xl:w-4/6">
            <h2 className="font-extrabold text-xl text-center">Pour les élèves & les étudiants</h2>
            <div className="   flex justify-around items-center gap-10 ">
              <div className=" flex flex-col  md:flex-row gap-5">
                <div className="text-xl font-bold">
                  <h6>Modalités:</h6>
                  <h6>Durée:</h6>
                  <h6>Coût:</h6>
                  <h6>Lieux:</h6>
                </div>
                <div className="text-red-600 font-semibold leading-7 ">
                  <p>Aller - Retour</p>
                  <p>35 jours</p>
                  <p className="text-center bg-red-600 text-white font-bold">37500f</p>
                  <p>Carrefours</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h6 className="text-xl font-semibold">Horaire de Bus</h6>
                <h6>06h30 - 06h45</h6>
                <h6>17h30 - 17h45</h6>
                <h6>18h30 - 18h45</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* la grille des prix */}
      {/* footer */}
      <Footer/>
    </>
  );
}
