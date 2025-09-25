import { useState } from "react";
import "./App.css";
import Accueil from "./assets/composant/accueil";

let a ="border w-sm rounded-sm h-[35px] items-center flex justify-center font-bold hover:bg-gray-200 duration-300"

function App() {
  const [isOpen, setIsOpen] = useState(false); // état pour menu mobile

  return (
    <>
      <div className="pp w-full flex justify-between p-2 items-center z-10 bg-white shadow-md">
        <div>
          <p className="font-bold">
            Conseils carrière et <br /> employabilité pour étudiants
          </p>
        </div>
        <nav id="nav" className="nav max-md:hidden">
          <ul id="navbar" className="flex gap-6">
            <li>
              <a href="#accueil">Accueil</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#blog">Flux de blog</a>
            </li>
            <li>
              <a href="#propos">A propos</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
        <div>
          <a href="#services">
            <ion-icon name="cart-outline"></ion-icon>
          </a>
        </div>
        <div className="mm md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <ion-icon
              name={isOpen ? "close-outline" : "menu-outline"}
            ></ion-icon>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100 gap-2 p-4 flex justify-center items-center duration-100">
          <div className="flex flex-col gap-5 text-center">
            <a className={a} href="#accueil" onClick={() => setIsOpen(false)}>
              Accueil
            </a>
            <a className={a} href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a className={a} href="#blog" onClick={() => setIsOpen(false)}>
              Flux de blog
            </a>
            <a className={a} href="#propos" onClick={() => setIsOpen(false)}>
              À propos
            </a>
            <a className={a} href="#contacts" onClick={() => setIsOpen(false)}>
              Contacts
            </a>
          </div>
        </div>
      )}

      <Accueil />
    </>
  );
}

export default App;
