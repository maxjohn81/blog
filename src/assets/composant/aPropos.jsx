export default function Apropos({ styl }) {
  return (
    <>
      <div>
        <h1 id="propos" className={styl + " text-center mt-20"}>A propos de nous</h1>
        <div className="flex justify-center items-center mt-25">
          <div className="w-[20px] h-[20px] bg-red-500/70 rounded-sm translate-x-1"></div>
          <div className="w-[20px] h-[20px] bg-yellow-500 rounded-sm"></div>
          <div className="w-[20px] h-[20px] bg-blue-600/70 rounded-sm -translate-x-1"></div>
        </div>

        <div className="text-center w-[450px]  mt-35 mb-35">
          <p className="p-6 text-xl max-sm:text-sm">
            Notre blog se consacre à aider les étudiants à mieux comprendre
            leurs atouts
            et faiblesses, à renforcer leur employabilité à travers des conseils
            concrets, et à les
            orienter dans divers aspects tels que la gestion du temps, le
            éveloppemnet des compétences douces
            les stage, ainsi que la rédactiion de CV et lettres de motivation.
            Nous encourageons également le réseautage et l'inspiration à
            travers des témoignages et des défis pratiques.
          </p>
        </div>
      </div>
    </>
  );
}
