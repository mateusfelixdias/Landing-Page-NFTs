import { Arrow } from '../Arrow';
import { IAstronaut } from '../../interfaces/astronaut';

export function AstronautIcon({ name, img, RKT }: IAstronaut) {
  return (
    <>
      <div className='flex justify-between w-[200px]'>
        <strong className='pt-2 pr-8 text-zinc-200'>Astronalta</strong>

        <Arrow />
      </div>

      <div className='flex justify-between w-[200px]'>
        <p className='text-zinc-700 text-sm'>{name}</p>

        <p className='text-red-500 text-sm'>{RKT}</p>
      </div>

      <img alt='astronalta one.' className='h-[170px] w-[200px] rounded pt-2' src={img} />
    </>
  );
}
