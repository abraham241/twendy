import React from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiApple } from "@mdi/js";
import { mdiGooglePlay } from "@mdi/js";
import tw1 from "../assets/images/tw1.png";


export default function NavBar() {
  return (
    <>
      <nav className="flex justify-between bg-black py-4 px-10 text-white">
        <div>
          <img src={tw1} alt="" className="h-16" />
          
          {/* <Icon path={mdiCar3Plus} size={3} className="" /> */}
        </div>

        <div className="hidden  md:flex justify-between lg:flex-justify-between gap-5 pt-2">
          <ul className="hidden md:flex lg:flex xl:flex gap-5 font-bold pt-4 ">
            <li className="list-none hover:text-red-600 hover:text-2xl">
              <Link to="/">A propos</Link>
            </li>
            <li className="list-none hover:text-red-600 hover:text-2xl">
              <Link to="/">Service</Link>
            </li>
            <li className="list-none hover:text-red-600 hover:text-2xl">
              <Link to="/">Nous choisir</Link>
            </li>
            <li className="list-none hover:text-red-600 hover:text-2xl">
              <Link to="/">Paiement</Link>
            </li>
            <li className="list-none hover:text-red-600 hover:text-2xl">
              <Link to="/">Paiement</Link>
            </li>
          </ul>
          <div className="flex gap-3">
            <button className="h-12 w-36 bg-white text-black rounded flex  justify-center items-center p-2 hover:bg-red-600 hover:text-white">
              <Icon path={mdiApple} size={2} />
              <div className="text-sm">
                <span>Télécharger sur </span>
                applestore
              </div>
            </button>
            <button className="h-12 w-36 bg-white text-black rounded flex  justify-center items-center p-2 hover:bg-red-600 hover:text-white">
              <Icon path={mdiGooglePlay} size={2} />
              <div className="text-sm">
                <span>Télécharger sur </span>
                playstore
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
