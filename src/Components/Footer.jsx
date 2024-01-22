import React from "react";
import Icon from "@mdi/react";
import { mdiApple } from "@mdi/js";
import { mdiGooglePlay } from "@mdi/js";
import { mdiEmail } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiMapMarkerCheck } from '@mdi/js';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-black flex flex-col md:flex-row lg:flex-row xl:flex-row  justify-between py-5 px-10">
        <div className="flex flex-col gap-3  ">
          <button className="h-12 w-36 bg-white text-black rounded flex justify-center items-center p-2 hover:bg-red-600 hover:text-white">
            <Icon path={mdiApple} size={2} />
            <div className="text-sm">
              <span>Télécharger sur </span>
              l'applestore
            </div>
          </button>
          <button className="h-12 w-36 bg-white text-black rounded flex  justify-center items-center p-2 hover:bg-red-600 hover:text-white">
            <Icon path={mdiGooglePlay} size={2} />
            <div className="text-sm">
              <span>Télécharger sur </span>
              playstore
            </div>
          </button>
          <h4 className="text-white font-bold">Télécharger l’application</h4>
        </div>
        <div>
          <ul className="text-white">
            <li>
              <p className="font-bold">Liens utiles</p>
            </li>
            <li>
              <Link to="/#">partanariat</Link>
            </li>
            <li className="py-2">
              <Link to="/#">FAQ</Link>
            </li>
            <li>
              <Link to="/#">service</Link>
            </li>
          </ul>
        </div>
        <div className="text-white">
          <p className="font-bold pb-1">Contact</p>
          <ul>
            <li className="flex gap-2">
              <Icon path={mdiEmail} size={1} />
              <Link to="/#">contact.twendyane@gmail.com</Link>
            </li>
            <li className="flex gap-2 py-2">
              <Icon path={mdiPhone} size={1} />
              <Link to="/#">+241 76282340</Link>
            </li>
            <li className="flex gap-2">
              <Icon path={mdiMapMarkerCheck} size={1} />
              <p>Libreville/ ancien sbraga</p>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
