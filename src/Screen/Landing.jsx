import React from "react";
import NavBar from "../Components/NavBar";
import Icon from "@mdi/react";
import { mdiApple } from "@mdi/js";
import { mdiGooglePlay } from "@mdi/js";
import hiro1 from "../assets/images/hiro1.png";
import nous from "../assets/images/nous.png";
import taxi1 from "../assets/images/taxi1.png";
import partenaire from "../assets/images/partenaire.png";
import airtel from "../assets/images/airtel.png";
import mouve from "../assets/images/mouve.png";
import master from "../assets/images/master.png";
import visa from "../assets/images/visa.png";
import paiement from "../assets/images/paiement.png";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <NavBar />
      {/* ======================= 1er section ============================ */}
      <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row ">
        <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 bg-red-600 px-10 py-5  ">
          <h1 className="text-6xl font-bold text-white">
            Simplifiez vos trajets, <br /> Évitez les tracas! <br />{" "}
            <span className="text-4xl text-white">
              carte de voyage, QR code & bus
            </span>
          </h1>
          <div className="pt-16">
            <h6 className="font-bold text-white py-2">
              <Link to="/Apropos">Télécharger notre application</Link>
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
      <div className="flex flex-col gap-5 sm:flex-col md:flex-col lg:flex-row xl:flex-row py-10 px-10">
        <div className="w-full sm:w-full lg:w-1/2 xl:w-1/2 pt-10 ">
          <h1 className="text-5xl font-bold  pb-5">Qui sommes nous ?</h1>
          <div className="text-xl">
            <p>
              <span className="font-bold">Notre Mission:</span> À Twendyane,
              notre mission est de révolutionner la manière dont les habitants
              de Libreville se déplacent au quotidien. Nous nous engageons à
              offrir une solution de transport innovante, pratique et
              accessible, transformant ainsi la mobilité urbaine.
              <Link to="/Prices">Tikets & prix</Link>
            </p>
            <br />
            <p className="pb-3">
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
              <img src={taxi1} alt="" />
            </div>
            <div className="text-red-600 font-bold text-2xl text-center pb-2">
              Ticket de bus
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Vel, porro? Sed
              vehicula vestibulum sapien, in commodo eros mattis ut. Ut maximus
              mollis tortor sed laoreet. Mauris ac convallis nunc, sit amet
              interdum turpis. Sed iaculis erat vel sem lobortis mollis.
              Suspendisse
            </div>
          </div>
          <div className="w-96 bg-white text-red-600 p-10 rounded-xl">
            <div>
              <img src={taxi1} alt="" />
            </div>
            <div className="text-black font-bold text-2xl text-center pb-2">
              Location de bus
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              ultrices ullamcorper imperdiet. Sed vehicula vestibulum sapien, in
              commodo eros mattis ut. Ut maximus mollis tortor sed laoreet.
              Mauris ac convallis nunc, sit amet interdum turpis. Sed iaculis
              erat vel sem lobortis mollis. Suspendisse
            </div>
          </div>
        </div>
      </div>
      {/* ==================== section nos services =========================== */}

      {/* ==================== section nous choisir =========================== */}
      <section className="">
        <h1 className="text-5xl font-bold py-5 text-center px-10">
          Pourquoi nous choisir
        </h1>
        <div className="py-10 px-10">
          <div className="flex-col flex justify-between gap-5 md:flex-row lg:flex-row xl:flex-row">
            <div className="bg-black w-96 p-5 rounded-xl">
              <div className="text-center py-2">
                <h6 className="text-5xl font-bold text-white">01</h6>
                <p className="text-red-600 font-bold text-xl py-2">
                  {" "}
                  budget transport
                </p>
              </div>
              <div>
                <p className="text-white text-xl">
                  Avec Twendyane, votre budget transport est entre de bonnes
                  mains. Nos tarifs abordables vous permettent de faire des
                  économies tout en bénéficiant d'un service de qualité.
                  Profitez de trajets accessibles sans compromettre votre
                  portefeuille.
                </p>
              </div>
            </div>
            <div className="bg-black w-96 p-5 rounded-xl">
              <div className="text-center py-2">
                <h6 className="text-5xl font-bold text-white">02</h6>
                <p className="text-red-600 font-bold text-xl py-2">
                  Pas de stress
                </p>
              </div>
              <div>
                <p className="text-white text-xl">
                  Dites adieu au stress des déplacements urbains avec Twendyane.
                  Notre solution simplifie votre vie en éliminant les tracas
                  liés à la recherche de transport. Une réservation facile, des
                  trajets prévisibles et l'assurance de toujours arriver à
                  destination en toute tranquillité.
                </p>
              </div>
            </div>
            <div className="bg-black w-96 p-5 rounded-xl">
              <div className="text-center py-2">
                <h6 className="text-5xl font-bold text-white">03</h6>
                <p className="text-red-600 font-bold text-xl py-2"> Fiabilité</p>
              </div>
              <div>
                <p className="text-white text-xl">
                  La fiabilité est notre engagement chez Twendyane. Comptez sur
                  nous pour des trajets réguliers et ponctuels. Nos chauffeurs
                  professionnels, associés à une technologie avancée,
                  garantissent une expérience de transport fiable à chaque
                  voyage. La confiance est notre priorité.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex-col py-10 flex justify-center md:flex-row lg:flex-row xl:flex-row gap-5">
            
          </div> */}
        </div>
      </section>
      {/* ==================== section nous choisir =========================== */}

      {/* ==================== section nous choisir =========================== */}
      <section className="flex flex-col justify-between gap-10 sm:flex-col md:flex-row lg:flex-row xl:flex-row py-5 px-10">
        <div className=" ">
          <img src={paiement} alt="" />
        </div>
        <div className="  md:w-1/2 lg:w-1/2 xl:w-1/2">
          <h1 className="md:text-5xl lg:text-8xl xl:text-8xl font-bold text-5xl ">
            Facilitez vos <br /> paiements <br /> avec E-billing
          </h1>
          <div className="flex justify-start  gap-10 pt-4 w-full">
            <div className=" flex justify-center items-center gap-5">
              <div className="flex gap-5">
                <img src={airtel} alt="" className="bg-red-600 w-16 p-1" />
                <img src={mouve} alt="" className="bg-blue-600 w-16 p-1" />
              </div>
              <div className="flex gap-5">
                <img src={visa} alt="" className="bg-black w-16 p-1" />
                <img src={master} alt="" className="bg-black w-16 p-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== section nous choisir =========================== */}

      {/* ==================== section partenaire =========================== */}
      <section className="flex-col flex justify-between gap-5 md:flex-row  px-10 py-10 ">
        <div className=" flex  flex-col md:w-1/2">
          <h1 className="font-bold text-5xl md:text-5xl lg:text-8xl xl:text-8xl">
            Devenez notre <br /> partenaire
          </h1>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic
            commodi quisquam. Rem natus voluptatem exercitationem fuga,
            perspiciatis nemo. Architecto fugiat quas fuga voluptates doloribus
            consequatur quasi ratione vero excepturi.
          </p>
          <button className="bg-red-600 rounded-md text-white font-bold mt-10 h-16 w-36 ">
            Postulez Ici
          </button>
        </div>
        <div className=" md:w-1/2 pt-3">
          <img src={partenaire} alt="" />
        </div>
      </section>
      {/* ==================== section partenaire =========================== */}

      {/* ==================== footer =========================== */}
      <Footer />
      {/* ==================== footer =========================== */}
    </div>
  );
}
