import { AstronautIcon } from "../components/AstronautIcon";
import artistaOne from "../assets/artistaOne.png";
import astronautaOne from "../assets/astronautaOne.png";
import astronautaTwo from "../assets/astronautaTwo.png";
import astronautaThree from "../assets/astronautaThree.png";
import astronautaFour from "../assets/astronautaFour.png";
import banner from "../assets/banner.png";

const dataForTheAstronaut = [
  {
    name: "Bruno",
    img: astronautaOne,
    RKT: "1.50 RKT",
  },
  {
    name: "Mateus",
    img: astronautaTwo,
    RKT: "2.0 RKT",
  },
];

const dataForTheAstronautFeminine = [
  {
    name: "Bruna",
    img: astronautaThree,
    RKT: "3.75 RKT",
  },
  {
    name: "Fabiana",
    img: astronautaFour,
    RKT: "4.30 RKT",
  },
];

export function Main() {
  return (
    <>
        <div className="bg-[#100f0f] flex text-zinc-200 w-full ">
            <div className="border border-b-2 border-[#100f0f] border-r-zinc-800 border-b-zinc-800 flex flex-col items-center w-[25%]">
                <strong className="text-3xl pt-24">
                    10k+
                </strong>
                <span className="text-sm">
                    Artes
                </span>

          <strong className="text-3xl pt-8">200+</strong>
          <span className="text-sm">Vendas</span>

          <strong className="text-3xl pt-8">20</strong>
          <span className="text-sm">Artitas</span>
        </div>

        <div>
          <div className="flex w-full">
            <div>
              <p className="text-sm p-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                malesuada amet pretium lacus. Id{" "}
                <span className="text-red-500 underline">potenti diam</span> et
                cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris
                mattis nunc semper.
              </p>

              <p className="text-sm underline p-8">Lorem ipsum.</p>
            </div>

            <div>
              <p className="text-sm p-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
                malesuada amet pretium lacus. Id{" "}
                <span className="text-red-500 underline">potenti diam</span> et
                cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris
                mattis nunc semper.
              </p>

              <p className="text-sm underline p-8">Lorem ipsum.</p>
            </div>
          </div>

          <div className="border border-b-2 border-zinc-800 w-full">
            <img
              alt="img de um homem no futuro."
              className="h-[200px] w-full"
              src={banner}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#100f0f] p-8">
        <div className="pb-10">
          <strong className="text-2xl text-zinc-200">
            <span className="text-red-500">Populares</span> da semana
          </strong>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col">
            {dataForTheAstronaut.map(({ name, img, RKT }, key) => {
              return (
                <AstronautIcon key={key} name={name} img={img} RKT={RKT} />
              );
            })}
          </div>

          <div className="border-r border-zinc-600"></div>

          <div className="flex flex-col">
            {dataForTheAstronautFeminine.map(({ name, img, RKT }, key) => {
              return (
                <AstronautIcon key={key} name={name} img={img} RKT={RKT} />
              );
            })}
          </div>
        </div>

        <div className="pt-20 text-center">
          <strong className="text-2xl text-zinc-200">
            Melhores  <span className="text-red-500">Artistas</span>
          </strong>

          <div className="bg-[#252525] border border-zinc-700 rounded h-[90px] w-[210px]">
            <div className="flex justify-between p-4">
              <img
                alt="Primerio artista."
                className="h-14 w-14"
                src={artistaOne}
              />

              <div className="pt-3">
                <p className="text-zinc-200 text-sm">Mateus</p>
                <span className="text-red-500 text-sm">80 Fotografias.</span>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  );
};