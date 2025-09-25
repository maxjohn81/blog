import img_accueil from "../../assets/man.jpg";
import emp from "../../assets/laptop.jpg";
import cv from "../../assets/cv.svg";
import recherche from "../../assets/recherche.svg";
import Service from "./service";
import Apropos from "./aPropos";
import Footer from "./footer";
let h1 = "font-bold text-[45px] m-1";
let prenom = "Rivo Andriharisoa";
export default function Accueil() {
  let div =
    "border p-2 flex flex-col w-[400px] mt-5 max-md:flex-row max-md:w-[100%] max-md:m-5  max-sm:flex-col max-sm:m-5";
  let img = "w-[500px] duration-100 hover:scale-110";
  let div_img =
    "overflow-hidden rounded-[5px] h-[200px] max-md:h-[100%]  max-sm:h-[200px]";
  let h3 = "text-[10px] mt-3 m-2";
  let h2 = "text-[25px] mt-5 mb-5 m-2";
  return (
    <>
      <div className="flex gap-10 justify-center flex-no-wrap max-md:flex-wrap m-10 max-md:m-2">
        <div className="w-[450px] bg-[#F2F1EC]  max-md:w-[400px] p-5 ">
          <h1 id="accueil" className={h1}>
            Explorez votre Potentiel
          </h1>
          <h2 className="text-2xl mt-5 mb-5">Développez Vos opportunités</h2>
          <p>
            Bienvenue sur notre dédieé aux conseils de carrière et à
            l'amployabilité des étudiants. <br />
            Découvrez des stratégies pratique pour améliorer vos compétences,{" "}
            <br /> optimisez votre temps et rédiger des CV et lettres de
            motivation percutans
          </p>
          <button  className="mt-5 text-xl bg-[#000] text-[#fff] p-4 w-[100%] rounded-4xl hover:bg-[#000]/90 duration-200">
            <a  className="w-[100%] rounded-4xl duration-200" href="#blog">Découvrir</a>
          </button>
        </div>
        <div className="m-5">
          <img className="w-[900px] rounded-lg image" src={img_accueil} alt="" />
        </div>
      </div>
      <div className="mb-10">
        <div>
          <h1 id="blog" className={h1}>
            Flux de blog
          </h1>
        </div>
        <div className="flex flex-wrap justify-evenly">
          <div className={div}>
            <div className={div_img}>
              <img className={img} src={emp} alt="Image description" />
            </div>
            <div>
              <h3 className={h3}>{prenom}</h3>
              <h2 className={h2}>
                <strong>
                  Conseils pour amméliorer votre employabilité étudiante
                </strong>
              </h2>
              <hr />
              <p className="m-2">
                Dans un monde de plus en plus compétitif, il est essentiel pour
                les étudiants de se démarquer sur me marché du travail.
              </p>
            </div>
          </div>
          <div className={div}>
            <div className={div_img}>
              <img className={img} src={cv} alt="" />
            </div>
            <div>
              <h3 className={h3}>{prenom}</h3>
              <h2 className={h2}>
                <strong>
                  Rédiger un CV et une lettre de motivation efficaces
                </strong>
              </h2>
              <hr />
              <p className="m-2">
                Dans le monde du travail d'aujourd'hui, un CV et une lettre de
                motivation bien rédigés sont essentiels pour se démarquer.
              </p>
            </div>
          </div>
          <div className={div}>
            <div className={div_img}>
              <img className={img} src={recherche} alt="" />
            </div>
            <div>
              <h3 className={h3}>{prenom}</h3>
              <h2 className={h2}>
                <strong>Gestion du temps: clés pour réussir vos études</strong>
              </h2>
              <hr />
              <p className="m-2">
                La gestion du temps est essentielle pour réussir vos études. Que
                vous soyer au lycée, à l'université ou en formation continue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Service styl={h1} />
      </div>
      <div className="flex justify-center items-center h-screen">
        <Apropos styl={h1} />
      </div>
      <div className="mt-30">
        <Footer styl="font-bold text-[40px] m-1" />
      </div>
    </>
  );
}
