import { FaFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Footer({ styl }) {
  return (
    <>
      <div className="bg-[#F2F1EC] flex justify-between flex-wrap">
        <div className="m-10 p-4 w-[550px]">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className={styl + " mb-50"}
          >
            Conseils carrière et <br /> employabilité pour <br />
            étudiants
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            id="contacts"
            className="font-bold"
          >
            blog@gmail.com <br />
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="mt-2"
          >
            <ul className="flex gap-4 text-xl">
              <li>
                <a href="">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="">
                  <IoLogoWhatsapp />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagramSquare />
                </a>
              </li>
              <li>
                <a href="">
                  <IoLogoLinkedin />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="m-10 p-4 w-[550px]"
        >
          <h2 className="text-4xl">Contacter-nous</h2>
          <br />
          <br />
          <label>Email *</label>
          <br />
          <br />
          <input className="w-[100%] h-[40px] border" type="text" />
          <br />
          <br />
          <input type="checkbox" name="" id="" />
          <label className="ml-5">
            yes, subscribe me to your newsletter. *
          </label>
          <br />
          <button className="mt-5 text-xl bg-[#000] text-[#fff] p-4 w-[100%] hover:bg-[#000]/90 duration-200">
            Subscribe
          </button>
          <p className="underline mt-15 mb-15">
            Politique de confidentialité <br />
            Déclaration d'accessibilité <br />
            Condition générales <br />
            Politique de remboursement
          </p>
          <p>
            &copy; 2035 by conseils carrière et <br /> employabilité pout
            étudiants . <br />
          </p>
        </motion.div>
      </div>
    </>
  );
}
