import { Vector } from '../Vector';
import email from '../../assets/email.png';
import youTube from '../../assets/youtube.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';

export function Footer() {
  return (
    <div className='bg-[#2d2c2c] w-full flex-col h-max-[500px]'>
      <div className='h-[200px] flex justify-between border-b border-zinc-600'>
        <strong className='text-zinc-200 text-2xl mt-16 ml-8'>
          <span className='text-red-600'>NFTs</span>
        </strong>

        <div className='w-[70px] h-[70px] bg-red-600 flex justify-center items-center rounded mt-10 mr-8'>
          <Vector />
        </div>
      </div>

      <div className='flex'>
        <div className='h-60 pt-6 border-r border-zinc-600 w-[50%]'>
          <strong className='text-white text-2xl p-6'>
            Fique por dentro de <span className='text-red-600'>todas as novidades</span>
          </strong>

          <div className='p-6 w-[100%] flex'>
            <input
              type='email'
              placeholder='nft@rocket@gmail.com.br'
              className='placeholder:text-zinc-500 placeholder:p-2 bg-black rounded-md h-12 text-white text-sm'
            />

            <button className='bg-white rounded-md h-12 text-sm w-16 hover:bg-zinc-500'>
              Enviar
            </button>
          </div>
        </div>

        <div className='w-[50%] flex justify-around'>
          <div className='pt-6'>
            <strong className='text-white pb-1'>Empresa</strong>
            <p className='text-[#5A5757] pt-1'>Sobre</p>
            <p className='text-[#5A5757]'>Serviços</p>
            <p className='text-[#5A5757]'>Time</p>
            <p className='text-[#5A5757]'>Carreira</p>
          </div>

          <div className='pt-6'>
            <strong className='text-white pb-1'>Mapa</strong>
            <p className='text-[#5A5757] pt-1'>Galeria</p>
            <p className='text-[#5A5757]'>Popularidades</p>
            <p className='text-[#5A5757]'>Vendas</p>
            <p className='text-[#5A5757]'>Contato</p>
          </div>

          <div className='pt-6'>
            <strong className='text-white'>Links</strong>
            <p className='text-[#5A5757] pt-1'>FAQs</p>
            <p className='text-[#5A5757]'>Termos</p>
            <p className='text-[#5A5757]'>Política</p>
            <p className='text-[#5A5757]'>Ajuda</p>
          </div>
        </div>
      </div>

      <div className='border-t border-zinc-600 w-full h-40 justify-around flex pt-8'>
        <a href='#' className='text-[#5A5757]'>
          NFTs.com.br
        </a>

        <div className='flex justify-between w-[40%]'>
          <img className='h-10 w-10' src={instagram} alt='Instagram' />
          <img className='h-10 w-10' src={youTube} alt='Youtube' />
          <img className='h-10 w-10' src={twitter} alt='Twitter' />
          <img className='h-10 w-10' src={email} alt='E-mail' />
        </div>
      </div>
    </div>
  );
}