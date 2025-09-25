let h2 = "text-[25px] max-sm:text-[23px]"
let button = "text-xl bg-[#000] text-[#fff] p-2 w-[200px] hover:bg-[#000]/90 duration-200"
export default function Service({ styl }) {
  return (
    <>
      <div className="mb-20">
        <h1 className={styl} id="services">
          Services
        </h1>
        <div>
          <hr />
          <div className="flex justify-evenly mt-5 items-center mb-5 max-sm:flex-col">
            <h2 className={h2}>Gestion du Temps</h2>
            <p className="max-sm:m-5">200 Ar</p>
            <button className={button}>Voir l'ensemble de scéances</button>
          </div>
        </div>
        <div>
          <hr />
          <div className="flex justify-evenly mt-5 items-center mb-5 max-sm:flex-col">
            <h2 className={h2}>Conseil en carrière</h2>
            <p className="max-sm:m-5">100 Ar</p>
            <button className={button}>Réserver</button>
          </div>
        </div>
        <div>
          <hr />
          <div className="flex justify-evenly mt-5 items-center mb-5 max-sm:flex-col">
            <h2 className={h2}>Compétences Douces</h2>
            <p className="max-sm:m-5">150 Ar</p>
            <button className={button}>Voir l'ensemble de scéances</button>
          </div>
        </div>
      </div>
    </>
  );
}
