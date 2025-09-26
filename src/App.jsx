import { useState } from "react";
import "./App.css";
import Accueil from "./assets/composant/accueil";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineUp } from "react-icons/ai";

const linkClass =
  "border w-sm rounded-sm h-[35px] flex items-center justify-center font-bold hover:bg-gray-200 duration-300";

function App() {
  const [isOpen, setIsOpen] = useState(false); // état pour menu mobile

  return (
    <>
      <div className="pp w-full flex justify-between p-2 items-center z-10 bg-white shadow-md">
        <div>
          <p id="haut" className="font-bold">
            Conseils carrière et <br /> employabilité pour étudiants
          </p>
        </div>
        <nav className="nav max-md:hidden">
          <ul className="flex gap-6">
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
            <FaShoppingCart size={20} />
          </a>
        </div>

        <div className="mm md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      <div className="bouton fixed bottom-25 right-10 z-10 bg-[#000] p-3 rounded-[50%] text-[#fff] text-xl md:hidden">
       <a className="w-[100%] h-[100%] bg-red-700" href="#haut"> <AiOutlineUp /></a>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="md:hidden bg-gray-100 gap-2 p-4 flex justify-center items-center duration-100"
        >
          <div className="flex flex-col gap-5 text-center">
            <a
              className={linkClass}
              href="#accueil"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </a>
            <a
              className={linkClass}
              href="#services"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              className={linkClass}
              href="#blog"
              onClick={() => setIsOpen(false)}
            >
              Flux de blog
            </a>
            <a
              className={linkClass}
              href="#propos"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </a>
            <a
              className={linkClass}
              href="#contacts"
              onClick={() => setIsOpen(false)}
            >
              Contacts
            </a>
          </div>
        </motion.div>
      )}

      <Accueil />
    </>
  );
}

export default App;
