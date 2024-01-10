import React from "react";
import NavBar from "../Components/NavBar";
import Icon from "@mdi/react";
import { mdiApple } from "@mdi/js";
import { mdiGooglePlay } from "@mdi/js";
import hiro1 from "../assets/images/hiro1.png";
import nous from "../assets/images/nous.png";
import taxi1 from "../assets/images/taxi1.png"
import taxi2 from "../assets/images/taxi2.png"

export default function Landing() {
  return (
    <div>
      <NavBar />
      {/* ======================= 1er section ============================ */}
      <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row ">
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-red-500 px-10 py-5  ">
          <h1 className="text-5xl font-bold text-white">
            Donner aux communautés les moyens de leur autonomisation grâce aux
            innovations
          </h1>
          <div className="pt-16">
            <h6 className="font-bold text-white py-2">
              Télécharger notre application
            </h6>
            <div className="flex gap-3">
              <button className="h-12 w-36 bg-black text-white rounded flex  justify-center items-center p-2 hover:bg-red-600 hover:text-white">
                <Icon path={mdiApple} size={2} />
                <div className="text-sm">
                  <span>Télécharger sur </span>
                  l'applestore
                </div>
              </button>
              <button className="h-12 w-36 bg-black text-white rounded flex  justify-center items-center p-2 hover:bg-red-600 hover:text-white">
                <Icon path={mdiGooglePlay} size={2} />
                <div className="text-sm">
                  <span>Télécharger sur </span>
                  playstore
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <img src={hiro1} alt="" />
        </div>
      </div>
      {/*=============== fin de la 1er section =================== */}

      {/* =================== section qui sommes nous =============== */}
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row ">
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pt-10 px-10">
          <h1 className="text-5xl font-bold  pb-5">Qui sommes nous ?</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices ullamcorper imperdiet. Sed vehicula vestibulum sapien, in
              commodo eros mattis ut. Ut maximus mollis tortor sed laoreet.
              Mauris ac convallis nunc, sit amet interdum turpis. Sed iaculis
              erat vel sem lobortis mollis. Suspendisse
            </p> <br />
            <p className="pb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices ullamcorper imperdiet. Sed vehicula vestibulum sapien, in
              commodo eros mattis ut. Ut maximus mollis tortor sed laoreet.
              Mauris ac convallis nunc
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices ullamcorper imperdiet. Sed vehicula vestibulum sapien, in
              commodo eros mattis ut. Ut maximus mollis tortor sed laoreet.
              Mauris ac convallis nunc
            </p>
          </div>
        </div>
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
          <img src={nous} alt="" />
        </div>
      </div>
      {/* =================== Fin de la section qui sommes nous =============== */}

      {/* ==================== section nos services =========================== */}
      <div className="bg-red-600 py-10">
        <div className="text-5xl font-bold text-white py-5 text-center">
          Nos Services
        </div>
        <div className="flex flex-col justify-center items-center sm:flex-col md:flex-row lg:flex-row xl:flex-row  gap-20">
          <div className="w-96 bg-black text-white p-10 rounded-xl">
            <div>
              <img src={taxi2} alt=""  />
            </div>
            <div className="text-red-600 font-bold text-2xl text-center pb-2">Ticket de bus</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, porro? Sed vehicula vestibulum sapien, in commodo eros mattis ut. Ut maximus mollis tortor sed laoreet. Mauris ac convallis nunc, sit amet interdum turpis. Sed iaculis erat vel sem lobortis mollis. Suspendisse
            </div>
          </div>
          <div className="w-96 bg-white text-red-600 p-10 rounded-xl">
            <div>
              <img src={taxi2} alt="" />
            </div>
            <div className="text-red-600 font-bold text-2xl text-center pb-2">Ticket de bus</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices ullamcorper imperdiet. Sed vehicula vestibulum sapien, in commodo eros mattis ut. Ut maximus mollis tortor sed laoreet. Mauris ac convallis nunc, sit amet interdum turpis. Sed iaculis erat vel sem lobortis mollis. Suspendisse
            </div>
          </div>
        </div>
      </div>
      {/* ==================== section nos services =========================== */}
    </div>
  );
}
