import React from "react";
import NavBar from "../Components/NavBar";
import Icon from "@mdi/react";
import { mdiApple } from "@mdi/js";
import { mdiGooglePlay } from "@mdi/js";
import hiro1 from "../assets/images/hiro1.png";
import nous from "../assets/images/nous.png";

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
    </div>
  );
}
