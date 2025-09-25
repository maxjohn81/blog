import { motion } from "framer-motion";
export default function Apropos({ styl }) {
  return (
    <>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          id="propos"
          className={styl + " text-center mt-40"}
        >
          A propos de nous
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center items-center mt-25"
        >
          <div className="w-[20px] h-[20px] bg-red-500/70 rounded-sm translate-x-1"></div>
          <div className="w-[20px] h-[20px] bg-yellow-500 rounded-sm"></div>
          <div className="w-[20px] h-[20px] bg-blue-600/70 rounded-sm -translate-x-1"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center w-[450px]  mt-35 mb-35"
        >
          <p className="p-6 text-xl max-sm:text-sm">
            Notre blog se consacre à aider les étudiants à mieux comprendre
            leurs atouts et faiblesses, à renforcer leur employabilité à travers
            des conseils concrets, et à les orienter dans divers aspects tels
            que la gestion du temps, le éveloppemnet des compétences douces les
            stage, ainsi que la rédactiion de CV et lettres de motivation. Nous
            encourageons également le réseautage et l'inspiration à travers des
            témoignages et des défis pratiques.
          </p>
        </motion.div>
      </div>
    </>
  );
}
