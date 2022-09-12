import astronautAvatars from "../assets/astronautAvatars.png"
import avatars from "../assets/avatarsAgrupado.png";
import badge from "../assets/badge.png";
import mask from "../assets/metaMaskLogo.png";


export function Header() {
  return (
    <div className="bg-gray-900 h-full w-full">
        <div className="flex justify-between p-6">
            <strong className="text-zinc-200 text-2xl">
                <span className="text-red-600">NFTs</span>
            </strong>


            <div className="flex text-zinc-200 text-xs p-2">
                <span>Comprar NFT</span>
            </div>


            <div className="bg-white flex items-center justify-around rounded h-[30px] w-[140px] hover:bg-red-500 transition-colors">
                <img 
                    alt="Imagem meta mask."
                    className="w-4 h-4" 
                    src={mask} 
                />

                <button 
                    className="text-sm text-black"
                >
                    Conectar Carteira
                </button>
            </div>
        </div>


        <div className="flex items-baseline justify-between p-6 w-full">
            <div>
                <p className="text-zinc-200 text-sm whitespace-normal w-[50%] pb-6">
                    Mercado digital para colecionáveis em criptos e tokens não fungível (NFT).
                    Compre, venda e descubra ativos digitais exclusivos para você.
                </p>

                <div className="flex items-baseline text-zinc-200">
                    <img src={avatars} alt="imagem dos avatars." />
                    <strong className="p-2">
                        +10
                    </strong>

                    <p>
                        Artistas Selecionados
                    </p>
                </div>

                <div className="flex justify-between pt-6 w-full">
                    <strong className="text-zinc-200 text-5xl whitespace-normal">
                        Descubra a verdadeira 
                        arte digital e colecione diversas <span className="text-red-500">NFTs</span>
                    </strong>

                    <img 
                        alt="imagem do badge." 
                        className="h-[100px] w-[100px]"
                        src={badge} 
                    />
                </div>
            </div>
        </div>

        <img 
            className="w-full p-6"
            alt="imagem astronaut avatars." 
            src={astronautAvatars} 
        />
    </div>
  );
};